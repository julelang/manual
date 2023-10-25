# LLDB and GDB

LLDB and GDB can be considered as the best debugging tools for C++ backend. LLDB for LLVM compilers like Clang, GDB for GCC have a pretty close experience and can help you debug many problems.

Since Jule catches some errors at runtime, you may not be able to fully benefit from these tools. Because Jule panics are not caught by these tools. By disabling Jule's safety, you need to allow errors to occur that these tools can catch.

To disable Jule's safety you need to edit the IR. If you add `#define __JULE_DISABLE__SAFETY` at the beginning of the IR code, Jule will not perform safety checks.

## Compilation

If you want to have an efficient debugging experience in these tools, disabling the optimizations of your backend compiler is a good choice. If you know that the problem is caused by optimizations and you are not trying to understand it, turning on optimizations may make your job difficult. However, to request debug information for Clang or GCC, compile with `-g` option.

## Basic Debugging

Now here's an example with Clang and LLDB for a simple debugging example. The experience and commands between LLDB and GDB are often the same or quite similar.

Here is our basic program:
```jule
fn main() {
    let s: []int = nil
    outln(s[0])
}
```

The above program is clearly one in which we create problems for ourselves. At work time, Jule panics due to safety measures. But we may not be able to obtain enough information, such as location information. This example focuses on how such an error can be understood in practice with LLDB and GDB.

First of all, we obtain the IR code by transpiling this Jule code. And then, we add `#define __JULE_DISABLE__SAFETY` at the top of the IR code to turn off Jule security measures. This will prevent the program from panicking at runtime and accessing the invalid memory address, making the error handleable and catchable. Otherwise, the program will panic and be terminated by the Jule runtime, and LLDB or GDB will not be able to understand the problem here.

After making the necessary addition, we can find the recommended compilation command in the IR file for a quick start. Take it and compile your IR code with your backend compiler by adding the `-g` option.

Then open the compiled executable with LLDB or GDB. Your command looks like this:
```
lldb <exec>
```

Then run `r` to execute your program. If your program needs command line arguments, provide them. Your command looks lise this:
```
(lldb) r <args>
```

Then, if there is any problem, you can get more detailed information about it. The nil memory usage problem, which was deliberately created in the sample code, may not occur directly in the same location, so the problem you will experience may refer to codes within the Jule API or something like that.

To see how your algorithm is progressing and get better information, look at the backtrace and examine the call-stack. Execute `bt` command to view the backtrace. Your command looks lise this:

```
(lldb) bt
```

The backtrace progresses from the last called function to the first called function (commonly the entry point). By following the trace, it will be easier to detect where in your own code is causing the problem.
