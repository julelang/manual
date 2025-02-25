# C++ Backend Compilers

JuleC commits that the codes it produces can be successfully compiled by the GNU Compiler Collection and Clang. Likewise, JuleC undertakes that the API it has and openly offers can be compiled with these compilers. While this preference is entirely left to the developers, JuleC has primarily embraced generating Clang compatible code, so it is recommended that Clang be the primary choice.

Even if you can compile code generated outside of official support compilers with a different compiler, it is not under official support and there is no commitment that the code will be compiled. Regardless of whether you use Clang to compile the code or a compiler with or without official support, make sure that you either support or use a version of compiler that does support the C++ standard that Jule created.

## Officially Supported Compilers

| Compiler                | Support State                          |
|-------------------------|----------------------------------------|
| Clang                   | <div class="green">Primary</div>       |
| GNU Compiler Collection | <div class="orange">Partial</div>      |

### Primary Support

Primary support are primarily supported, most important and most recommended compilers. When a problem occurs in these compilers, priority is given to the solution and it is tried to be solved quickly.

### Partial Support

Partial support are compilers that are officially supported but not always guaranteed to be as accurate as primary supported compilers. Even if they can compile your code, there is also no guarantee that the executable will execute as expected.

Partial support may not be available for all platforms and is broad in scope. Therefore, please read the relevant compiler's manual to find out why the associated compiler qualifies as partial support.

## C++ Standards

C++ support and support status of the Jule release standards.

### Jule 0.0.11 and Higher

Supports compilation for C++14, C++17, C++20 standards. As for the standard, it uses C++17 by default and additionally allows the standard to be set between the three as a compiler option.

### Jule 0.0.10

It fixes compilation errors that caused by API when using C++14 standard.

### Beta 0.0.7, Jule 0.0.8 and Jule 0.0.9

Supports compilation for C++14, C++17, C++20 standards. As for the standard, it uses C++17 by default and additionally allows the standard to be set between the three as a compiler option.

You might be have some compilation errors caused by API when using C++14.

### Beta 0.0.6

> C++14 and lower versions may have some incompatibilities.

Beta 0.0.6 continues to adopt the C++17 standard by default. In addition, the C++20 problems encountered especially with GCC have been resolved with this release.

### Beta 0.0.3 - Beta 0.0.5

> In these versions, GCC may create compilation problems with C++20 and above.

JuleC accepts the default C++ standard as C++17, along with the beta 0.0.3 release standard. It also generates code that is quite compatible with C++20 standard. According to our tests, the beta 0.0.3 release standard works well with C++14, C++17, and C++20. However, recommended standard is C++17 which is default standard for beta 0.0.3 release standard.

### Beta 0.0.2 and Older Versions

Jule aims to generate code in accordance with the most ideal C++ standard supported by the C++ compilers it offers official support, and is committed to compiling it with compilers that fully comply with this standard. As a result of our tests, the most suitable standard seems to be C++14. The C++14 standard has full support on officially supported compilers and is the default compilation standard. For this reason, Jule aims to produce code in accordance with the C++14 standard.

When we tested it, Clang successfully compiled the API and a simple code output in the C++17 and C++20 standard. However, when we tested with GCC, we encountered compiler errors in the C++20 standard with the same parameters.

These tests were performed on Linux. When we tested GCC compilation on Windows with MinGW, we encountered different results. If you're working on a cross-platform project and your code must be compilable on supported operating systems, consider platform-dependent differences if you're trying to compile with a standard other than the officially supported C++ standard.

## Windows API Compatibility

### Jule 0.1.4 and Higher

Jule supports Windows API. Our GitHub Action workflows use Clang (not MinGW) on Windows machines to compile Jule programs. In Jule 0.1.4, the `std/sys` package and whole standard library implemented using Windows API.

If you encounter issues about Windows support, please report us via [Jule Issue Tracker](https://github.com/julelang/jule/issues).

### Jule 0.0.14, Jule 0.0.15, Jule 0.1.0, Jule 0.1.2, Jule 0.1.3

Jule supports Windows API. Our GitHub Action workflows use Clang (not MinGW) on Windows machines to compile Jule programs. However, Windows API support is not guaranteed to work as expected. When using Windows API your program may able to compile successfully, but may need to additional actions like linking missing libraries. If you encounter issues like that, please report us via [Jule Issue Tracker](https://github.com/julelang/jule/issues).

### Jule 0.0.13 and Before

Jule does not supports Windows API. This is why you won't have an official Windows API support. We ran into issues when we tried IR's support of Clang (not MinGW) experimentally. Our standard libraries such as `std/sys` contain code that is not compatible with Windows API. We had a problem when we tried to compile JuleC IR with Clang (not MinGW). So even if you want to do that, you're probably going to have to put effort into MinGW dependencies.