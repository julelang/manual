# C++ Backend Compilers

JuleC commits that the codes it produces can be successfully compiled by the GNU Compiler Collection and Clang. Likewise, JuleC undertakes that the API it has and openly offers can be compiled with these compilers. While this preference is entirely left to the developers, JuleC has primarily embraced generating Clang compatible code, so it is recommended that Clang be the primary choice.

Even if you can compile code generated outside of official support compilers with a different compiler, it is not under official support and there is no commitment that the code will be compiled. Regardless of whether you use Clang to compile the code or a compiler with or without official support, make sure that you either support or use a version of compiler that does support the C++ standard that Jule created.

## Officialy Supported Compilers

| Compiler                | Support State                          |
|-------------------------|----------------------------------------|
| Clang                   | <div class="green">Primary</div>       |
| GNU Compiler Collection | <div class="orange">Partial</div>      |

### Primary Support

Primary support are primarily supported, most important and most recommended compilers. When a problem occurs in these compilers, priority is given to the solution and it is tried to be solved quickly.

### Partial Support

Partial support are compilers that are officially supported but not always guaranteed to be as accurate as primary supported compilers. Even if they can compile your code, there is also no guarantee that the executable will execute as expected.

Partial support may not be available for all platforms and is broad in scope. Therefore, please read the relevant compiler's manual to find out why the associated compiler qualifies as partial support.

## MSVC Compatibility

Jule does not support MSVC. This is why you won't have an official MSVC support. We ran into issues when we tried IR's support of MSVC experimentally. Our standard libraries such as `std::sys` contain code that is not compatible with MSVC. We had a problem when we tried to compile JuleC IR with MSVC Clang. So even if you want to do that, you're probably going to have to put effort into MSVC.

## C++ Standards

C++ support and support status of the Jule release standards.

### Beta 0.0.7 or Higher

Beta 0.0.7 brings support to compilation for C++14, C++17, C++20 standards. As for the standard, it uses C++17 by default and additionally allows the standard to be set between the three as a compiler option.

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
