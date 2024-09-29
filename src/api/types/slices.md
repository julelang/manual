# Slices

Slices are pure implementation of heap allocated arrays and equivalent to Jule's slices. Useable via `jule::Slice` type.

To allocate an slice, the `jule::Slice<Item>::make` method is useful and standard way to do this.

For example:
```cpp
int main(int argc, char *argv[]) {
    auto s = jule::Slice<jule::Int>::make({1, 2, 3, 4, 5});

    s.push(6);
    s.push(7);
    s = jule::append(s, jule::Slice<jule::Int>::make({8, 9, 10}));

    jule::outln(s.cap());
    jule::outln(s.len());
 
    for (auto &item: s)
        jule::outln(item);
 
    return 0;
}
```

At the example above, the `s` allocated with initializer list. Then pushed `6` and `7` values. And then pushed `8`, `9`, and `10` values into `s` with `jule::append` function which is equivalent to Jule's built-in `append` function.

## Allocation Slices with Buffering

You can allocate slices with the `jule::Slice<Item>::alloc` method which is equivalent to the Jule's built-in `make([]Item, len, cap)` function.

For example:
```cpp
jule::Int len = 10;
jule::Int cap = 10;
auto s = jule::Slice<jule::Int>::alloc(len, cap);
jule::outln(s.cap());
jule::outln(s.len());
```

The `alloc` method will not initialize memory. To do this, pass your initialize expression as a third argument.

For example:
```cpp
jule::Int len = 10;
jule::Int cap = 10;
auto s = jule::Slice<jule::Int>::alloc(len, cap, 0);
jule::outln(s.cap());
jule::outln(s.len());
```