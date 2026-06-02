# External Sources

To bind external sources, you must initialize a module for the project. See the [Modules](/packages/modules/) section. The import paths must start with the module name like ordinary use declarations. See [Using Packages](/packages/using-packages) section for more information.

## Linking Header Files
The use declarations of Jule are used to include C++ headers in the Jule code to be generated. It's just a little different. A use declaration should be told that this is a C++ include, and the path should be given as a string.

For example:
```jule
extern use "<stdlib.h>"
```
```jule
extern use "<iostream>"
```
```jule
extern use "modulename/header.hpp"
```
The correctness and validity of the file path is checked by the compiler.
Valid header extensions; `.h`, `.hh`, `.hpp`, `.hxx`

::: warning
Using header paths that contain Unicode characters may cause compilation issues on some platforms/backend compilers. The Jule compiler will use the absolute path of the headers, so some issues may occur if the absolute path contains Unicode characters.
:::

## Linking Source Files
You may not write your header files to include all the code (with implementation of declarations). Typical usage is in the form of a header file and a separate source code file for implementation of declarations. For this reason, you can also link your implementation C++ source code files just like header files.

For example:
```jule
extern use "modulename/myfile.cpp"
```
```jule
extern use "modulename/implementation.cxx"
```
The correctness and validity of the file path is checked by the compiler.
Valid source file extensions; `.cpp`, `.cc`, `.cxx`, `.c`, `.mm`

## Passing Include Directories

It takes a path and passes that path as an absolute path to the back-end compiler with the `-I` argument. The path must be within the module path. In other words, it looks for the specified directory path at the location where the module is situated. Use the reserved `include` alias for this kind of use declarations.

For example:
```jule
extern use include "modulename/include"
```

## Passing Link Directories

It takes a path and passes that path as an absolute path to the back-end compiler with the `-L` argument. The path must be within the module path. In other words, it looks for the specified directory path at the location where the module is situated. Use the reserved `libraries` alias for this kind of use declarations.

For example:
```jule
extern use libraries "modulename/libs"
```

## Passing Framework Directories

It takes a path and passes that path as an absolute path to the back-end compiler with the `-F` argument. The path must be within the module path. In other words, it looks for the specified directory path at the location where the module is situated. Use the reserved `frameworks` alias for this kind of use declarations.

For example:
```jule
extern use frameworks "modulename/frameworks"
```

## Linking Library

It takes an argument and passes it to te back-end compiler with the `-l` argument. Use the reserved `library` alias for this kind of use declarations.

For example:
```jule
extern use library "raylib"
extern use library "shell32"
```

## Linking Framework

It takes an argument and passes it to te back-end compiler with the `-framework` argument. Use the reserved `framework` alias for this kind of use declarations.

For example:
```jule
extern use framework "Cocoa"
extern use framework "Foundation"
```