# The Jule Programming Language
This version of the text assumes you're using the latest version of the JuleC compiler (compiled from source).\
\
\
Jule is a statically typed, compiled programming language. It's designed for systems programming, and for building maintainable and reliable software. Its goal is safe programming, memory safety, no undefined behavior and fast speed. It also integrates well with C/C++, making it easy to integrate and interop Jule code with existing C/C++ code.

Jule focuses on key features such as simplicity, maintainability, speed, performance, safety, efficiency and interoperability with C/C++. It uses reference counting for memory management. Immutable by default, and has no undefined behavior.

If you have used another programming language before, Jule's syntax will be familiar to you. It is readable and simple as possible. Since it has similar features to C++, it is compatible with popular compilers such as Clang and GCC, and Jule is self-compiling thanks to a bootstrapped compiler. The fact that the language has reached this level shows that it has matured. Also, compiler components such as lexer, parser and ast are provided as part of the standard library.

Cross-platform support is provided, making it easy to write platform-specific code and implement standard library functions such as file deletion, cross-platform. It supports most popular operating systems such as Windows, Linux and macOS, and most popular architetures such has ARM64, AMD64 and intel 386. Jule also provides cross-transpile support to compile your code on different systems.
