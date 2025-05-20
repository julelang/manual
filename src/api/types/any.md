# Any

The Jule's `any` type implemented in C++ from scratch. It is not uses `std::any` which is provided by STL.

Using the `jule::Any` might be pretty expensive development approach. Because this type implementation have low-level implementation with low abstraction. It is designed as compiler-oriented, not developer-oriented.

You should pass type info structure manually for each type and they should be correct pointer.

Also if you passing the `jule::Ptr` to the `jule::Any`, you should use special algorithms for that.

For example:
```cpp
void type_int_dealloc(jule::Ptr<jule::Uintptr> &p) {
    p.as<jule::Int>().dealloc();
}

jule::Bool type_int_eq(void *alloc, void *other) {
    return *(jule::Int*)alloc == *(jule::Int*)other;
}

jule::Str type_int_to_str(const void *alloc) {
    return jule::to_str(*(jule::Int*)alloc);
}

jule::Any::Type type_int{
    .dealloc=type_int_dealloc,
    .eq=type_int_eq,
    .to_str=type_int_to_str,
};

void type_intptr_dealloc(jule::Ptr<jule::Uintptr> &p) {
    p.as<jule::F64>().dealloc();
}

jule::Any::Type type_f64ptr{
    .dealloc=type_intptr_dealloc,
    .eq=jule::ptr_equal,
    .to_str=jule::ptr_to_str,
};

int main() {
    jule::Int x = 20;
    auto any_x = jule::Any(x, &type_int);
    std::cout << any_x.cast<jule::Int>(&type_int) << std::endl;

    auto y = jule::Ptr<jule::F64>::make(89);
    auto any_y = jule::Any(y, &type_f64ptr);
    std::cout << any_y.cast_ptr<jule::F64>(&type_f64ptr) << std::endl;

    return 0;
}
```

::: info
The example above is written in production mode. If you are writing non-production code, code might be needs some changes.
:::

## Internal Data

The internal data uses `jule::Ptr<jule::Uintptr>` to store internal allocation of type. The data accessible via the `data` field of the `jule::Any` type.

If the type is `jule::Ptr`, internal data is the reinterpreted version of original type.

For example:
```cpp
void type_intptr_dealloc(jule::Ptr<jule::Uintptr> &p) {
    p.as<jule::F64>().dealloc();
}

jule::Any::Type type_f64ptr{
    .dealloc=type_intptr_dealloc,
    .eq=jule::ptr_equal,
    .to_str=jule::ptr_to_str,
};

int main() {
    auto y = jule::Ptr<jule::F64>::make(89);
    auto any_y = jule::Any(y, &type_f64ptr);
    *(jule::F64*)any_y.data.alloc += 11;
    std::cout << *y << std::endl;
    return 0;
}
```
