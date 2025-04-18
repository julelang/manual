# Header Files

## Linking Header Files
The use declarations of Jule are used to include C++ headers in the Jule code to be generated. It's just a little different. A use declaration should be told that this is a C++ include and the path should be given as a string.

For example:
```jule
cpp use "<stdlib.h>"
```
```jule
cpp use "<iostream>"
```
```jule
cpp use "header.hpp"
```
The correctness and validity of the file path is checked by the compiler.
Valid header extensions; `.h`, `.hh`, `.hpp`, `.hxx`

::: warning
Using header paths that contain Unicode characters may cause compilation issues on some platforms/backend compilers. The Jule compiler will use the absolute path of the headers, so some issues may occur if the absolute path contains Unicode characters.
:::

## Linking Header Implementations
You may not write your header files to include all the code (with implementation of declarations). Typical usage is in the form of a header file and a separate source code file for implementation of declarations. For this reason, you can also link your implementation C++ source code files just like header files.

For example:
```jule
cpp use "myfile.cpp"
```
```jule
cpp use "implementation.cxx"
```
The correctness and validity of the file path is checked by the compiler.
Valid source file extensions; `.cpp`, `.cc`, `.cxx`, `.c`, `.mm`

## Important Notes

Header files are handled with absolute path at backend. Some compiler backends may not support include paths which is contains unicode characters. Jule will not handle that. So, your backend compiler may will not compile your IR.