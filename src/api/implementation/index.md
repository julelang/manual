# Implementation

Header files alone have the entire implementation. So if you want to use them, just include them. If you want to have the whole API, just include `jule.hpp`.

## Manipulating

The algorithms and definitions that the API will implement may vary depending on the various `#define` directives. Relevant directives must be defined before the relevant header file is included.

## Safety

API provides safety measures separately. If you want to be safe, use the safe variants of the functions. Otherwise use the unsafe variants. For example, slices provides `safe_at` and `at` functions. Or use `must_ok` function of the `__jule_Any` type before use it.

Compiler will generate code properly, using with the safe and unsafe variants of the functions. Handling of safety is undefined and may change between different compiler versions. To use safe variants of the API, follow the compiler code generation behavior.

In common case, behave like a C/C++ programmer and use unsafe variants of the API, which is requires less effort.