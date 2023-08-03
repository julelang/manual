# Backend

Backend can mean many things. It can refer to the code generation or platform-dependent optimization phases of reference compiler. Alternatively, it can refer to the IR code or the process of compiling the IR code.

## Backend Compiler

Backend compiler refers to your compiler that you use to compile IR codes. This compiler can be an officially supported compiler, or it can be a 3rd party compiler you prefer to use.

## Intermediate Representation (IR)

Intermediate representation, aka IR, is a ready-to-compile representation that your compiler generates. This representation is a different form of the Jule source code you want to compile. It is mostly created for use by the backend-compiler for compilation.

IR code can also be used to observe what code your compiler is generating. For example, the generated IR code may be different when some optimizations are on or off. IR representations can be useful to examine these differences.

## C++ Backend Compilers

JuleC commits that the codes it produces can be successfully compiled by the GNU Compiler Collection and Clang. Likewise, JuleC undertakes that the API it has and openly offers can be compiled with these compilers. While this preference is entirely left to the developers, JuleC has primarily embraced generating Clang compatible code, so it is recommended that Clang be the primary choice.

Even if you can compile code generated outside of official support compilers with a different compiler, it is not under official support and there is no commitment that the code will be compiled. Regardless of whether you use Clang to compile the code or a compiler with or without official support, make sure that you either support or use a version of compiler that does support the C++ standard that Jule created.

<strong>Officialy Supported Compilers</strong>

- Clang
- GNU Compiler Collection

#### Clang on Windows

The [MSVC](#msvc-compatibility) section mentions Jule's support for MSVC. You may want to use Clang on Windows. There is a Clang build we recommend so you can do this. It uses the MinGW toolchain. Compatible with compiling Jule IRs by default.

Here is the recommended [LLVM/Clang/LLD based mingw-w64 toolchain](https://github.com/mstorsjo/llvm-mingw) repository on GitHub.

### C++ Standards

Jule aims to generate code in accordance with the most ideal C++ standard supported by the C++ compilers it offers official support, and is committed to compiling it with compilers that fully comply with this standard. As a result of our tests, the most suitable standard seems to be C++14. The C++14 standard has full support on officially supported compilers and is the default compilation standard. For this reason, Jule aims to produce code in accordance with the C++14 standard.

When we tested it, Clang successfully compiled the API and a simple code output in the C++17 and C++20 standard. However, when we tested with GCC, we encountered compiler errors in the C++20 standard with the same parameters.

These tests were performed on Linux. When we tested GCC compilation on Windows with MinGW, we encountered different results. If you're working on a cross-platform project and your code must be compilable on supported operating systems, consider platform-dependent differences if you're trying to compile with a standard other than the officially supported C++ standard.

### MSVC Compatibility

Jule does not support MSVC. This is why you won't have an official MSVC support. We ran into issues when we tried IR's support of MSVC experimentally. Our standard libraries such as `std::sys` contain code that is not compatible with MSVC. We had a problem when we tried to compile JuleC IR with MSVC Clang. So even if you want to do that, you're probably going to have to put effort into MSVC.

### GCC Problems

GCC can sometimes document an error like `File too big` when compiling IR codes. We encountered this while compiling the JuleC IR when we tried to build a CI on GitHub Actions. We solved this by adding `-Wa,-mbig-obj` to the compile command.

Our command looked like this:
```
g++ -Wa,-mbig-obj -O0 --std=c++17 -w -o .\bin\julec.exe .\ir.cpp
```