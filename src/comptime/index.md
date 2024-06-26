# Comptime

<div class="warning-badge">experimental</div>

Jule provides the [`std::comptime`](/std/comptime) standard library that provides a beefed-up experience for compile-time. This library provides functionalities that can be used for various purposes. It is designed for compile-time only, it does not add anything for runtime execution.

Comptime statements do not have runtime equivalents because they are designed specifically for compile-time. Therefore any comptime statement that should result in runtime execution will cause a compile error.

## Constant Variables

You can store and use any comptime expression with constant variables. Your compiler allows you to use these expressions as if they were variables until the compilation process finishes.

For example:
```jule
use comptime for std::comptime

fn main() {
    let x = 20
    const xt = comptime::TypeOf(x)
    outln(xt.Kind())
}
```