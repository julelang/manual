# Strings

Jule strings are designed as UTF-8 encoded byte sequences. The `jule::Str` is used for Jule strings in C++. Strings are immutable unlike `std::string`.

Strings are length-based, not NULL termination based unlike C strings. This should be taken into account. It can cause various problems for interoperability. Read the [interoperability section](/integrated-jule/interoperability/types#strings) to get more information on this subject.

To create a `jule::Str`, you can use just string literals. If you want to specify length of the string, you can pass length as second argument.

For example:
```cpp
jule::Str s1 = "Hello World!";
jule::Str s2("Hello World!", 12);
jule::outln(s1);
jule::outln(s2);
```

String is always heap allocated. However, if you want to use a literal that is not heap allocated, you can do this with `jule::Str::lit`. In case of any need, the string will be moved to the heap again, but until then heap allocation is not made.

For example:
```jule
jule::Str s = jule::Str::lit("Hello World!", 12);
jule::outln(s);
```