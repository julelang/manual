# GNU Compiler Collection

The GNU Compiler Collection (aka GCC) is a compiler produced by the GNU Project. It supports many languages, one of them is C++. You may want to use GCC as your backend compiler with Jule, and this is certainly possible since it is an officially supported compiler. But a flawless experience is not always guaranteed.

## Partial Support

GCC has partial support. This is because it has a number of identified problems. But that doesn't mean you can have a problematic experience on all platforms. The only problem we're aware of at the moment occurs on Windows systems. The related problem is that the program compiles successfully but does not execute as expected at runtime.

We only experienced this problem when we compiled JuleC (the official reference compiler) with GCC on Windows. GCC provided a seamless experience on macOS and Linux. This is the only reason GCC has partial support. Everything can be well when you use GCC, just need to test it.

However, Jule does not automatically interfere with the GCC build command to fix the `file too big` or `too many sections` problem. For this reason, you may experience a `file too big` problem in large projects. The problem is addressed [here](#file-too-big-or-too-many-sections).

## Known Problems

### File Too Big or Too Many Sections

GCC can sometimes document an error like `File too big` or `Too Many Sections` when compiling IR codes. We encountered this while compiling the JuleC IR when we tried to build a CI on GitHub Actions. We solved this by adding `-Wa,-mbig-obj` to the compile command.

Our command looked like this:
```
g++ -Wa,-mbig-obj -O0 --std=c++17 -w -o .\bin\julec.exe .\ir.cpp
```

### Runtime

We were successful when we compiled JuleC itself on Windows with GCC. But we had some problems. For example, when we wanted to transpile the JuleC source code with JuleC, we couldn't do it. This can be an important indication that GCC may have some issues with its runtime. As far as we tested, we did not experience this issue on Linux and macOS operating systems. Everything was as expected.
