# Compile From IR

::: info
This is the recommended way.
:::

The IR codes are kept in this [respository](https://github.com/julelang/julec-ir), you need to get them here.

This repository contains the platform-specific C++ IR code of JuleC, the reference compiler of the Jule programming language, that was created by leveraging JuleC's cross-transpile feature. When you are unable to compile the JuleC's new major branch codes with an existing JuleC build, when you want to get a JuleC build from IR code, when you want to examine the IRs created by JuleC, or for a different purpose, you can consider using C++ IR codes. A common usage scenario of this repository is to get a JuleC build that can compile up-to-date code and access up-to-date major code.

This repository does not commit to update the content with every commit of JuleC. The main point to note is that the IR code provided is up-to-date enough to get you a JuleC build that can compile the master branch. That's why it usually gets updates after major compiler code changes. But it can also receive non-essential updates.

If this code does not allow you to get the latest JuleC build, you can get a latest JuleC build from the master branch with the build you get with the IR code.

## How to Compile an IR

You need the Jule source codes to compile the IR code. IR codes have dependencies like some header files in API and standard library. Therefore, you must have obtained the Jule source code to compile the IR code. In most cases, it shouldn't be a problem for you to compile the most recent C++ headers in the main branch. However, for the most guaranteed experience, it is recommended to obtain the source tree of the commit where these IR codes were generated. The commit IR uses is mentioned above of repository.

The include directories of the IR codes are set to be in the root directory of the Jule source code of the IR code. So put your IR code inside the root directory of Jule source tree you got and build in that directory. If you want a different directory, you need to change the include directories of IR.

Of course you need a C++ compiler to compile the IR code. At this point it is recommended to use one of the officially supported compilers. You can check [relavant manual page](/compiler/backend/) for more details.

We recommend compiling JuleC's IR codes with Clang and C++17. The recommended build command below is built accordingly. You can change the optimization level as you wish. -O0 is recommended for debugging. If you're using it to get the most up-to-date compiler in the main branch, you can still use -O0 to get the fastest build time, but it may also result in a JuleC build with a higher transpilation time. But in the general scenario you wait less time than you would expect for the -O3 optimization level.

Recommended compile command:
```sh
clang++ -O3 -Wno-everything --std=c++17 ir.cpp
```

::: tip
Note that if you want to use the build you received as JuleC after the compilation phase, you have to place it in the bin directory in the root directory. Simply review any JuleC release to understand the relevant positioning. You can easily see the bin directory in the root directory.
:::
