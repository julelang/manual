# Compiler Optimizations

Compiler optimizations are optimizations for improving the generated object code.
The way the code you write works may change depending on the optimizations, but the result you will get will remain the same.
These changes are promised to provide gains in various aspects (eg runtime performance).

Compiler optimizations are turned off by default.
Optimizations are enabled with options in the build command.

## Optimization Options

`--opt-copy` \
It reduces copying operations whenever possible.

- Refers to data instead of copying when using lvalue in foreach iterations.
- Refers to data instead of copying when using lvalue in match statements.

---

`--opt-deadcode` \
It eliminates dead codes (unused) from object code.

- Eliminates dead globals.
- Eliminates dead structs.
- Eliminates dead traits. These traits are not implemented by any alive struct.
- Eliminates dead functions.
- Eliminates followed statements of the return statement.

## Optimization Levels

It can be a hassle to pass all flags one by one to send most optimizations to the compiler.
To make this easier, compiler optimization levels have been created where you don't have to pass additional flags in most cases.
These optimization levels are flag packages that activate various optimizations.

Here is the option for using optimization level:

`--opt <level>` \
Set optimization level to `<level>`.

The optimization levels are as follows:

- ``L0``: disable all compiler optimizations (default value of JuleC)
- ``L1``: passes ``--opt-copy``, and ``--opt-deadcode``
