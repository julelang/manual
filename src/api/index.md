# API
API of JuleC for C++. Jule API is an API written in C++. While it includes many Jule features such as built-in definitions, it also offers additional features for writing integrated Jule code for interoperability.

JuleC presents all the C++ content it implements and owns for Jule in header files. These header files come automatically imported in every code compiled by JuleC.

With this API, you can use the definitions of JuleC in C++ codes and adapt functions written for C++ to Jule.

[See API source codes](https://github.com/julelang/jule/tree/master/api)

## Naming Conventions

- All define directives starts with `__JULE_` prefix (with exception defines like atomic functions)
- All no-define-directive defines are placed in the `jule` namespace
- Type aliases, classes, and structs are PascalCase
- All variables, functions, methods, and fields are snake_case
- All `constexpr` variables are UPPER_CASE
- Runtime API is mostly follows Jule's naming conventions

## Disclaimer

The API openly offers all its functionality.
This includes places you might not actually want to access.
Compilation errors and other problems that you may experience due to misuse while using the API are your responsibility.

Of course, this is not a support disclaimer, you can also request assistance in such a case.
This disclaimer emphasizes that the issues are not directly related to the API.
If you interfere with a private area that will disrupt the functioning of the API, that's your problem.

One might ask why the API doesn't enforce some restrictions.
The reason for this is that you are free if you know what you are doing, because it allows you to go to various customizations for yourself or use the functions in more detail.
The API even does this internally.
