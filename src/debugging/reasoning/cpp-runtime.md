# C++ Runtime

Under normal circumstances, backend code built with Jule should not have any C++ runtime errors. Jule should catch any possible errors and report them to you herself. However, your chances of experiencing such a problem are possible in various ways.

If you are getting a C++ runtime error, the following possibilities should come to your mind:
- I have bad Unsafe Jule code.
- I have bad C++ interoperability.
- I have packages which is have some reasons listed above.
- Jule has some code generation or API bugs.

First of all, if you sure about problem is relevant to Jule, please report us via [Jule Issue Tracker](https://github.com/julelang/jule/issues).

If you sure about problem is relevant to your 3rd-party packages, please report to package developer(s).

If you think the problem is with you, review the recent changes you made, in the common scenario most likely the errors you are having are caused by the last changes you made. If you think that your previous codes are incompatible with your new codes or something similar, you may need to check your code and the runtime of your algorithm.

In some cases you may have an infinite recursion or a very deep recursion. Jule doesn't have a high-level call-stack implementation by default to make it easier for you to catch these. For example, C# will throw `System.StackOverflowException` in such a case. Examining the backtrace using your backend compiler's debuggers, if supported, will help you understand stack overflow problems. You can refer to the relevant section for [LLDB and GDB](/debugging/backend-compiler-tools/lldb-and-gdb).

::: tip
If you are going to use a 3rd-party tool for debugging and this tool is made for the backend language, turning off Jule's runtime safety will help you. See the [backend compiler tools](/debugging/backend-compiler-tools/) section for more information.
:::
