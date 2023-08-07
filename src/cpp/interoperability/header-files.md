# Header Files

## Linking Header Files
The use declarations of Jule are used to include C++ headers in the Jule code to be generated. It's just a little different. A use declaration should be told that this is a C++ include and the path should be given as a string.

For example:
```
cpp use "<stdlib.h>"
```
```
cpp use "<iostream>"
```
```
cpp use "header.hpp"
```
The correctness and validity of the file path is checked by the compiler.
Valid header extensions; `.h`, `.hh`, `.hpp`, `.hxx`

## Linkind Header Implementations
You may not write your header files to include all the code (with implementation of declarations). Typical usage is in the form of a header file and a separate source code file for implementation of declarations. For this reason, you can also link your implementation C++ source code files just like header files.

For example:
```
cpp use "myfile.cpp"
```
```
cpp use "implementation.cxx"
```
The correctness and validity of the file path is checked by the compiler.
Valid source file extensions; `.cpp`, `.cc`, `.cxx`, `.mm`
