# Any

The Jule's `any` type implemented in C++ from scratch. It is not uses `std::any` which is provided by STL. Bu the experience is too similar to `std::any`.

For example:
```cpp
int main() {
    jule::Any a = (jule::Int)20;
    jule::Int b = (jule::Int)a;
    jule::outln(b);
    jule::outln(a.type_info->name());
    return 0;
}
```

## Internal Data

The internal data uses `jule::Ptr<jule::Uintptr>` to store internal allocation of type. The data accessible via the `data` field of the `jule::Any` type.

For example:
```cpp
int main() {
    jule::Any a = (jule::Int)20;
    auto p = (jule::Int*)a.data.alloc;
    *p += 100;
    jule::outln(*p);
    jule::outln((jule::Int)a);
    return 0;
}
```
