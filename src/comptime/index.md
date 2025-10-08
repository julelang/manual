# Comptime

Comptime is short for compile-time. Means all of compile-time actions.

Jule provides compile-time functionalities empowered by language design and the standard [`std/comptime`](/std/comptime) library that provides a beefed-up experience for compile-time. This library provides functionalities that can be used for various purposes. It is designed for compile-time only, it does not add anything for runtime execution.

Comptime statements do not have runtime equivalents because they are designed specifically for compile-time. Therefore any comptime statement that should result in runtime execution will cause a compile error.

Besides the [`std/comptime`](/std/comptime) package provided to empowering the comptime, Jule has the `const` keyword. This keyword stands for `constant` and represents constant computations that can be handled at comptime, and it is important part of the comptime.