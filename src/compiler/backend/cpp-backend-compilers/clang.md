# Clang

Clang is a C/C++ compiler using LLVM. Jule gives priority support to Clang and is recommended to be used with Clang whenever possible. Jule and related projects use Clang as the backend compiler and are primarily tested for Clang.

## Why Do We Recommend Clang?

- Clang has descriptive and informative compiler messages.
- Clang has fast compilation performance.
- Clang has low memory footprint.
- Clang provides a reliable experience for Jule.

## Clang on Windows

The [MSVC](/compiler/backend/cpp-backend-compilers/#msvc-compatibility) section mentions Jule's support for MSVC. You may want to use Clang on Windows. There is a Clang build we recommend so you can do this. It uses the MinGW toolchain. Compatible with compiling Jule IRs by default. MSVC support is not guaranteed.

Here is the recommended [LLVM/Clang/LLD based mingw-w64 toolchain](https://github.com/mstorsjo/llvm-mingw) repository on GitHub.
