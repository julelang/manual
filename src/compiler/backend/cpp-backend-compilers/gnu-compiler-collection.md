# GNU Compiler Collection

The GNU Compiler Collection (aka GCC) is a compiler produced by the GNU Project. It supports many languages, one of them is C++. You may want to use GCC as your backend compiler with Jule, and this is certainly possible since it is an officially supported compiler. But a flawless experience is not always guaranteed.

## Partial Support

GCC has partial support. This is because it has a number of identified problems. But that doesn't mean you can have a problematic experience on all platforms or all GCC versions.

## Known Problems

### Coroutine Lowering Bug

It appears that GCC 13 has several bugs in coroutine lowering and is unable to compile certain codes. We encountered this issue in some of our CI workflows: [workflow 1](https://github.com/julelang/jule/actions/runs/20505531861/job/58919433605), [workflow 2](https://github.com/julelang/jule/actions/runs/20505531859/job/58919433588).

Using GCC 14 resolved these issues.

### File Too Big or Too Many Sections

GCC can sometimes document an error like `File too big` or `Too Many Sections` when compiling IR codes. We encountered this while compiling the julec IR when we tried to build a CI on GitHub Actions. We solved this by adding `-Wa,-mbig-obj` to the compile command.

Our command looked like this:
```
g++ -Wa,-mbig-obj -O0 --std=c++20 -w -o .\bin\julec.exe .\ir.cpp
```

### New Linker May Cause Problems (macOS Only)

Apple released a new linker with Xcode 15. But the new linker sometimes causes compilation errors.

Passing this argument to GCC might solve the problem: `-Wl,-ld_classic`. This argument means request to use old linker.

### Unexpected Runtime (Windows Only)
> **Jule 0.0.13 and Older Versions**

We were successful when we compiled julec itself on Windows with GCC. But we had some problems. For example, when we wanted to transpile the julec source code with julec, we couldn't do it. This can be an important indication that GCC may have some issues with its runtime. As far as we tested, we did not experience this issue on Linux and macOS operating systems. Everything was as expected.
