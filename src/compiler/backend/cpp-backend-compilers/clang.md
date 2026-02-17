# Clang

Clang is a C/C++ compiler using LLVM. Jule gives priority support to Clang and it's recommended to be used with Clang whenever possible. Jule and related projects use Clang as the backend compiler and are primarily tested for Clang.

## Why Do We Recommend Clang?

- Clang has descriptive and informative compiler messages.
- Clang has fast compilation performance.
- Clang has low memory footprint.
- Clang provides a reliable experience for Jule.

## Clang on Windows

### Jule 0.1.4 and Higher

Jule has a standard library implemented entirely using the Windows API on Windows. For detailed information about Jule's Windows API support, refer to the [Windows API](/compiler/backend/cpp-backend-compilers/#windows-api-compatibility) section.

By default, Jule assumes that you are using Clang (not MinGW; with GCC command-line interface, not MSVC) on Windows, if you are using Clang. However, if you are using MinGW Clang, it should not require additional effort.

If you want to use MinGW Clang, the [LLVM/Clang/LLD based mingw-w64 toolchain](https://github.com/mstorsjo/llvm-mingw) GitHub repository is recommended.

### Jule 0.1.3 and Before

The [Windows API](/compiler/backend/cpp-backend-compilers/#windows-api-compatibility) section mentions Jule's support for Windows API. You may want to use Clang on Windows. There is a Clang build we recommend so you can do this which uses the MinGW toolchain. Compatible with compiling Jule IRs by default. Windows API support is not guaranteed.

Here is the recommended [LLVM/Clang/LLD based mingw-w64 toolchain](https://github.com/mstorsjo/llvm-mingw) repository on GitHub.
