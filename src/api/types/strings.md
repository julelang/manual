# Strings

Jule strings are designed as UTF-8 encoded byte sequences. The `jule::Str` is used for Jule strings in C++.

To create a `jule::Str`, you can use just string literals. If you want to specify length of the string, you can pass length as second argument.

For example:
```cpp
jule::Str s1 = "Hello World!";
jule::Str s2("Hello World!", 12);
jule::outln(s1);
jule::outln(s2);
```

Strings are mutable like `std::string`. You can allocate buffered strings also via `jule::Str::alloc` method which is equivalent to Jule's `make(str, len, cap)` call.

For example:
```cpp
jule::Str::alloc(0, 20)
```

## Internal Buffer

The `jule::Str` is uses `std::basic_string<jule::U8>` as internal buffer. You can access to this buffer via the `buffer` field.

For example:
```cpp
jule::Str s = jule::Str::alloc(0, 20);
jule::outln(s.buffer.capacity());
```
