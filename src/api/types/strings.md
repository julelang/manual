# Strings

Jule strings are designed as UTF-8 encoded byte sequences. The `jule::Str` is used for Jule strings in C++. Strings are immutable unlike `std::string`.

Strings are length-based, not NULL termination based unlike C strings. This should be taken into account. It can cause various problems for interoperability. Read the [interoperability section](/integrated-jule/interoperability/types#strings) to get more information on this subject.

To create a `jule::Str`, you can use just string literals. If you want to specify length of the string, you can pass length as second argument.

For example:
```cpp
jule::Str s1 = "Hello World!";
jule::Str s2("Hello World!", 12);
jule::println(s1);
jule::println(s2);
```

String is always heap allocated. However, if you want to use a literal that is not heap allocated, you can do this with the `__jule_strBytePtr` runtime API function. In case of any need, the string will be moved to the heap again, but until then heap allocation is not made.

For example:
```cpp
jule::Str s = __jule_strBytePtr("Hello World!", 12);
jule::println(s);
```

## Allocation Strings with Buffering

You can allocate strings with the `jule::Str::alloc` method.

For example:
```cpp
jule::Int len = 11;
jule::Str s;
s._slice = jule::Str::alloc(len);
s.buffer = jule::Str::buffer_t(s._slice);
std::strncpy(s, "hello world", len);
std::cout << s.operator char *() << std::endl;
```

Strings are always heap allocated for external source, even for pointers. When you need to preallocate a string buffer, do not allocate separately. Allocate a string buffer with the `jule::Str::alloc` static method. It returns pointer to the `jule::U8` type.

Then create a buffer using pointer to perform GC. Do not forget the `_slice` field should be assigned to the allocation. Then you have a string with preallocated buffer and GC. Ready to use.

::: warning
The `alloc` method will initialize the memory to zero.
:::

