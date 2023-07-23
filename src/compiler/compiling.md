# Compiling

## Using JuleC
Let's start with a simple hello world program and learn compiling from this program.

We have a `main.jule` file:
```
fn main() {
    outln("Hello, World!")
}
```

\
For compile Jule code, we just give current directory path to JuleC:
```
julec .
```

And compiler is transpile our Jule code to C++ code.
In compile mode, JuleC will show you the build command itself on the command line, which is used during compilation. You can also set the mod to transpile and choose to compile manually, or you can write a script that compiles the code after you have it in C++ form using the transpile mode to experience compile mode.

As result we have a executable machine code result of our program. 

### Why JuleC Needs Directory Path Instead File Path?
In Jule, each program is also a package. Jule source codes in the directory are accepted within the package. Accordingly, every directory is actually a potential Jule package. The directory of the program you will compile should be the main package of your program.

This also eliminates the need to link individual source codes to the compiler and significantly avoids the occurrence of long compiler commands. It makes it easy to understand which of the source codes are in the main program, the answer is simple: all the Jule source codes in the directory. Because of this approach, each Jule program is kept in a separate directory as a package, causing optimistic pressure on the project organization. 

## Compiler and C++ Standard Support
JuleC commits that the codes it produces can be successfully compiled by the GNU Compiler Collection and Clang. Likewise, JuleC undertakes that the API it has and openly offers can be compiled with these compilers. While this preference is entirely left to the developers, JuleC has primarily embraced generating Clang compatible code, so it is recommended that Clang be the primary choice.

Even if you can compile code generated outside of official support compilers with a different compiler, it is not under official support and there is no commitment that the code will be compiled. Regardless of whether you use Clang to compile the code or a compiler with or without official support, make sure that you either support or use a version of compiler that does support the C++ standard that Jule created.

Jule aims to generate code in accordance with the most ideal C++ standard supported by the C++ compilers it offers official support, and is committed to compiling it with compilers that fully comply with this standard. As a result of our tests, the most suitable standard seems to be C++14. The C++14 standard has full support on officially supported compilers and is the default compilation standard. For this reason, Jule aims to produce code in accordance with the C++14 standard.

When we tested it, Clang successfully compiled the API and a simple code output in the C++17 and C++20 standard. However, when we tested with GCC, we encountered compiler errors in the C++20 standard with the same parameters.

These tests were performed on Linux. When we tested GCC compilation on Windows with MinGW, we encountered different results. If you're working on a cross-platform project and your code must be compilable on supported operating systems, consider platform-dependent differences if you're trying to compile with a standard other than the officially supported C++ standard.

## Using C++ Compiler
JuleC has multiple officially supported C++ compilers. For this reason, it does not contain a specific C++ compiler in itself to keep your download sizes small and leave the choice to you. If you're using Linux or a similar operating system, you can usually already have an officially supported C++ compiler. Once you've decided on the C++ compiler you want to use, JuleC can take care of the rest for you. Before that, you need to give JuleC a few simple instructions.

JuleC will automatically choose the recommended C++ compiler when compiling your code. If the recommended compiler is your preferred compiler, you don't need to take an action. But if not, you need to set your compiler using the related compiler option(s).

If you need a special configuration for your build, it is recommended to create a script file for it or write compile command in a document such as a readme files. This makes it clearer and easier how to compile the project, as well as a faster and more comfortable development experience.
