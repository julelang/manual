# Using julec (Reference Compiler)
Let's start with a simple hello world program and learn compiling from this program.

We have a `main.jule` file:
```jule
fn main() {
    println("Hello, World!")
}
```

\
To compile Jule code, we just give the current directory path to julec:
```
julec build .
```

The compiler translates our Jule code to C++ code.

In compile mode, julec will show you the build command itself on the command line, which is used during compilation. You can also set the mod to transpile and choose to compile manually, or you can write a script that compiles the code after you have it in C++ form, using the transpile mode to experience compile mode.

As a result we have an executable machine code result of our program.

## Backend Compiler Optimizations

By default, julec sets your backend compiler's optimizations to the lowest possible level and compiles your code as such. These optimizations are independent of the compiler optimizations that julec has; they are the backend-compiler optimizations you use for IR compilation. The created executable file is available for debugging. The lowest optimization level usually allows the backend-compiler to exhibit the fastest compilation performance. But without the generated executable optimizations, it can be significantly underperforming.

If you want to compile your code with backend-compiler optimizations, there are several ways you can do it.

### Production Compilation

Enable production compilation. This is the widely recommended and safest way. Your compiler compiles the code for you by applying the best standard optimizations according to the backend compiler you use. To get more detailed information about what improvements production compilation makes, you can look at the [compiler optimizations](/compiler/compiler-optimizations#production-compilation) section.

### Set Backend Compiler Optimizations via `pass` Directive

You can add the `pass` directive to a suitable place in the main package of your program and adjust the optimizations of your backend-compiler. This method works most of the time.

For example to enable Clang's `O3` optimizations:
```jule
#pass "-O3"
```

### Transpile and Compile Manually

You can transpile your code and compile your IR code with your desired optimization setting by customizing the suggested compile command by the compiler or with a completely custom compile command.

## Transpilation

Preferably, instead of compiling your code directly, you may want to transpile your code for various reasons to obtain the IR code. This scenario is mostly used when you want to distribute IR code, modify it, debug compiler's code generation, compile with different compilers or compilation commands.

To do this, pass the flag that you activate the transpile mode in your compiler. \
For example:

```
julec build --transpile .
```

## Why does julec need a Directory Path instead of a File Path?
In Jule, each program is also a package. Jule source codes in the directory are accepted within the package. Accordingly, every directory is actually a potential Jule package. The directory of the program you will compile should be the main package of your program.

This also eliminates the need to link individual source codes to the compiler and significantly avoids the occurrence of long compiler commands. It makes it easy to understand which of the source codes are in the main program; the answer is simple: all the Jule source codes in the directory. Because of this approach, each Jule program is kept in a separate directory as a package, causing optimistic pressure on the project organization.
