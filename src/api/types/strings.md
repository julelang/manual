# Strings

Jule strings are designed as UTF-8 encoded byte sequences. The `jule::Str` is used for Jule strings in C++. Strings are immutable unlike `std::string`.

To create a `jule::Str`, you can use just string literals. If you want to specify length of the string, you can pass length as second argument.

For example:
```cpp
jule::Str s1 = "Hello World!";
jule::Str s2("Hello World!", 12);
jule::outln(s1);
jule::outln(s2);
```