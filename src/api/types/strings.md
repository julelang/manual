# Strings

Jule strings are designed as UTF-8 encoded byte sequences. The `__jule_Str` is used for Jule strings in C++. Strings are immutable unlike `std::string`.

Strings are length-based, not NULL termination based unlike C strings. This should be taken into account. It can cause various problems for interoperability. Read the [interoperability section](/integrated-jule/interoperability/types#strings) to get more information on this subject.

To create a `__jule_Str`, you can use just string literals. If you want to specify length of the string, you can pass length as second argument.

For example:
```cpp
__jule_Str s1 = "Hello World!";
__jule_Str s2("Hello World!", 12);
__jule_println(s1);
__jule_println(s2);
```

String is always heap allocated. However, if you want to use a literal that is not heap allocated, you can do this with the `__jule_strBytePtr` runtime API function. In case of any need, the string will be moved to the heap again, but until then heap allocation is not made.

For example:
```cpp
__jule_Str s = __jule_strBytePtr("Hello World!", 12);
__jule_println(s);
```

## Allocation Strings with Buffering

You can allocate strings with the `__jule_Str::alloc` method.

For example:
```cpp
__jule_Int len = 11;
__jule_Str s;
s._slice = __jule_Str::alloc(len);
s.buffer = __jule_Str::buffer_t(s._slice);
std::strncpy(s, "hello world", len);
std::cout << s.operator char *() << std::endl;
```

Strings are always heap allocated for external source, even for pointers. When you need to preallocate a string buffer, do not allocate separately. Allocate a string buffer with the `__jule_Str::alloc` static method. It returns pointer to the `__jule_U8` type.

Then create a buffer using pointer to perform GC. Do not forget the `_slice` field should be assigned to the allocation. Then you have a string with preallocated buffer and GC. Ready to use.

::: warning
The `alloc` method will initialize the memory to zero.
:::

