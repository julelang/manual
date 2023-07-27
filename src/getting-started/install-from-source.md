# Install from Source

::: warning
You should have JuleC for this option.
:::

Ok! We will install JuleC from source code. Actually, we will just compile the project. Getting the latest version is a good way to start. We assume that you already have the Jule source code. 

## Build Scripts
The JuleC project has scripts for building/compiling the compiler. You can use them. If you execute a script, the result will be either a compilation error or a completion message.

::: warning
These examples assume you are in the source code `(src/julec)` directory of the JuleC.
:::

::: warning
The build scripts designed for developers. \
Compiles JuleC with zero optimization.
:::

### Windows
::: tip
Ideal scripts for Windows: usally batchfiles (.bat). 
:::

Using example for PowerShell:
```
$ build.bat
```

### macOS (Darwin)
::: tip
Ideal scripts for macOS: usally shellscripts (.sh).
:::

Using example for ZSH:
```
$ zsh build.sh
```

### Linux
::: tip
Ideal scripts for Linux: usally shellscripts (.sh). 
:::

Using example for Bash:
```
$ sh build.sh
```

## Manual Compilation
JuleC is written in Jule!

::: warning
These example assume you are in the source code `(src/julec)` directory of the JuleC.
This example also accepts you already have JuleC in global path. 
:::

```
julec -o ../../bin/julec .
```

## Compile Tips

There are a few recommendations for getting the best JuleC build for manual compilation and Jule developers.
Considering these recommendations can help the JuleC build you use during development to offer the best performance.

### C++ Version

Instead of the default version, it would be better for you to use ``c++17``.
JuleC is dependent on several headers from ``c++17``.
Even if you can compile with ``c++14``, compiling with ``c++17`` can provide a smoother experience for you.

::: tip
Pass ``--std=c++17`` flag for compile with C++17, if you are using Clang, GCC or something like this.
:::

### Optimization Level

Jule compiles at zero optimization (``O0``) level by default.
But this is not recommended if you are compiling for use.
Zero optimization level will produce the dumbest code possible and you can suffer serious performance losses.
It is recommended to compile JuleC's C++ IR with ``O3`` or ``Ofast`` to get the fastest and most performing JuleC compilation.

#### Notice about `Ofast` Optimization Level

The `Ofast` optimization is quite an aggressive level and can break language standards. For example, it has been observed that a JuleC build with `Ofast` produces different numbers than expected due to probably math optimizations.

Therefore, we recommend using 'O3' as the highest optimization level to get a more reliable build.
