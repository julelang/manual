# Any

The Jule's `any` type implemented in C++ from scratch. It is not uses `std::any` which is provided by STL.

Using the `__jule_Any` might be pretty expensive development approach. Because this type implementation have low-level implementation with low abstraction. It is designed as compiler-oriented, not developer-oriented.

You should pass type info structure manually for each type and they should be correct pointer.

Also if you passing the `__jule_Ptr` to the `__jule_Any`, you should use special algorithms for that.

For example:
```cpp
#define __JULE_ENABLE__PRODUCTION

void type_int_dealloc(__jule_Ptr<__jule_Uintptr> &p) {
    p.as<__jule_Int>().dealloc();
}

__jule_Bool type_int_eq(void *alloc, void *other) {
    return *(__jule_Int*)alloc == *(__jule_Int*)other;
}

__jule_Str type_int_to_str(void *alloc) {
    return std::to_string(*(__jule_Int*)alloc);
}

__jule_TypeMeta type_int{
    .dealloc=type_int_dealloc,
    .eq=type_int_eq,
    .to_str=type_int_to_str,
};

void type_intptr_dealloc(__jule_Ptr<__jule_Uintptr> &p) {
    p.as<__jule_F64>().dealloc();
}

__jule_TypeMeta type_f64ptr{
    .dealloc=type_intptr_dealloc,
    .eq=__jule_ptrEqual,
    .to_str=__jule_ptrToStr,
};

int main() {
    __jule_Int x = 20;
    auto any_x = __jule_Any(x, &type_int);
    std::cout << any_x.cast<__jule_Int>(&type_int) << std::endl;

    auto y = __jule_Ptr<__jule_F64>::make(89);
    auto any_y = __jule_Any(y, &type_f64ptr);
    std::cout << *any_y.cast_ptr<__jule_F64>(&type_f64ptr) << std::endl;

    return 0;
}
```

::: info
The example above is written in production mode. If you are writing non-production code, code might be needs some changes.
:::

## Internal Data

The internal data uses `__jule_Ptr<__jule_Uintptr>` to store internal allocation of type. The data accessible via the `data` field of the `__jule_Any` type.

If the type is `__jule_Ptr`, internal data is the reinterpreted version of original type.

For example:
```cpp
void type_intptr_dealloc(__jule_Ptr<__jule_Uintptr> &p) {
    p.__as<__jule_F64>().dealloc();
}

__jule_TypeMeta type_f64ptr{
    .dealloc=type_intptr_dealloc,
    .eq=__jule_ptrEqual,
    .to_str=__jule_ptrToStr,
};

int main() {
    auto y = __jule_Ptr<__jule_F64>::make(89);
    auto any_y = __jule_Any(y, &type_f64ptr);
    *(__jule_F64*)any_y.data.alloc += 11;
    std::cout << *y << std::endl;
    return 0;
}
```
