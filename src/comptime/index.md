# Comptime

Comptime is short for compile-time. Means all of compile-time actions.

Jule provides compile-time functionalites empowered by language design and the standard [`std::comptime`](/std/comptime) library that provides a beefed-up experience for compile-time. This library provides functionalities that can be used for various purposes. It is designed for compile-time only, it does not add anything for runtime execution.

Comptime statements do not have runtime equivalents because they are designed specifically for compile-time. Therefore any comptime statement that should result in runtime execution will cause a compile error.

## Basic Comptime Evaluation

Basic comptime expression are really basic feature of Jule's comptime. Means comptime evaluated expressions with primitive type literals and built-in functions.

List of supported primitive types: `str`, `bool`, `f32`, `f64`, `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`, `int`, `uint`, `uintptr`

For example:
| Expression                | Evaluation                             |
|---------------------------|----------------------------------------|
| `5 + 5`                   | `10`                                   |
| `2 * (2 + 2)`             | `8`                                    |
| `"hello" + " " + "world"` | `"hello world"`                        |

### List of Some Effects of Basic Comptime Evaluation

- Evaluates of supported primitive type literals
- Evaluates indexing expressions as constant data of supported literals such as strings
- Evaluates slicing expressions as constant data of supported literals such as strings
- Compiler checks boundaries for indexing expressions with supported literals such as strings or slices
- Compiler checks boundaries for indexing expressions with supported fixed-size types such as arrays
- The built-in `len` function returns constant length data for constant strings and arrays
- The built-in `cap` function returns constant length data for constant strings

## Constant Variables

Constant variables are immutable, compile-time evaluated expression storage variables and one of the elementary features of the compile-time functionality of Jule.

You can store and use any compile-time expression with constant variables. Your compiler allows you to use these expressions as if they were variables until the compilation process finishes.

For example:
```jule
use comptime for std::comptime

const MagicNumber = 20

fn main() {
    let x = MagicNumber
    const xt = comptime::TypeOf(x)
    outln(xt.Kind())
}
```