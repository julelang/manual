# Slices

Slices are pure implementation of heap allocated arrays and equivalent to Jule's slices. Useable via `__jule_Slice` type.

To allocate an slice, the `__jule_Slice<Item>::make` method is useful and standard way to do this.

For example:
```cpp
int main(int argc, char *argv[]) {
    auto s = __jule_Slice<__jule_Int>::make({1, 2, 3, 4, 5});

    s.push(6);
    s.push(7);
    s.append(__jule_Slice<__jule_Int>::make({8, 9, 10}));

    std::cout << s.cap() << std::endl;
    std::cout << s.len() << std::endl;

    for (auto &item : s) {
        std::cout << item << std::endl;
    }
 
    return 0;
}
```

At the example above, the `s` allocated with initializer list. Then pushed `6` and `7` values. And then pushed `8`, `9`, and `10` values into `s` with `append` method which is C++ equivalentof the Jule's built-in `append` function. However, it doesn't work exactly like Jule's runtime append function. The runtime function has a dynamic growth rate, while the C++ version steadily doubles the capacity. Runtime append and C++ append can be used together.

## Allocation Slices with Buffering

You can allocate slices with the `__jule_Slice<Item>::alloc` method which is equivalent to the Jule's built-in `make([]Item, len, cap)` function.

For example:
```cpp
__jule_Int len = 10;
__jule_Int cap = 10;
auto s = __jule_Slice<__jule_Int>::alloc(len, cap);
std::cout << s.cap() << std::endl;
std::cout << s.len() << std::endl;
```

::: warning
The `alloc` method will not initialize the memory.
:::