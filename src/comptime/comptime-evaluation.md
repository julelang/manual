# Comptime Evaluation

In short, comptime evaluation is the evaluation of computations that can be handled at comptime and really basic feature of Jule's comptime. More broadly, comptime evaluation is responsible for evaluating constant literals for supported primitive types, handling constant variables, and executing other constant algorithms. Besides these strict comptime features, some comptime may provide additional facilities for expressions that are not within the scope of evaluation but can be predicted at compile time.

List of supported primitive types: `str`, `bool`, `f32`, `f64`, `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`, `int`, `uint`, `uintptr`

### List of Some Effects of Comptime Evaluation

- Evaluates of supported primitive type literals.
- Evaluates indexing expressions as constant data of supported literals such as strings.
- Evaluates slicing expressions as constant data of supported literals such as strings.
- Compiler checks boundaries for indexing expressions with supported literals such as strings or slices.
- Compiler checks boundaries for indexing expressions with supported fixed-size types such as arrays.
- Compiler casts basic constant expressions like `int` to `uint` casting.
- The built-in `len` function returns constant length data for constant strings, arrays and other comptime supported types.
- Compiler converts constant-string to byte-slice, constant-string to rune-slice, constant-rune to string, constant-byte to string castings.
- Calls strict comptime functions that provided by the [`std::comptime`](/std/comptime) package.
- Executes comptime algorithms such as comptime matching or comptime iterations.

### Untyped Literals

Untyped literals are constants that do not have an explicit type for numeric types. Since these values ​​do not have a definitive type, they can be used with any compatible type. These types only acquire an exact type through operations such as casting; when they lose an untyped state, they lose the advantage of being usable with compatible types and must pass compatibility checks with the exact type.

For example:
```jule
x := uint(0)
if x < -1 {
    outln("impossible case")
}
```
The example above has an if that checks that the unsigned integer is less than `-1`. The `-1` literal is untyped, but since it is incompatible with unsigned integer, the compiler will not use it appropriately and will give an error.

But if it had an exact type, this error wouldn't exist.\
For example:
```jule
x := uint(0)
if x < uint(-1) {
    outln("possible case")
}
```
Since the cast was made in the example above, the `-1` literal now has the exact type `uint` and is cast and converted according to this type at comptime. The above code is not a problem for the compiler since it has the exact type and is cast.

### Example Evaluations

| Expression                | Evaluation Result                      |
|---------------------------|----------------------------------------|
| `5 + 5`                   | `10`                                   |
| `2 * (2 + 2)`             | `8`                                    |
| `"hello" + " " + "world"` | `"hello world"`                        |
| `uint(-1)`                | `uint.Max`                             |

## Constant Variables

> **aka Comptime Variables**

The value of the runtime variables can change (with mutability), then they can be updated with a different value to match the data type. Since comptime variables are constant, takes a constant expressions and never change again. Constant expressions do not exist as a variable in memory at runtime. Constant expressions used are copied exactly where they are used. Constant expressions are all evaluated at comptime.

You can store and use any comptime expression with constant variables. Your compiler allows you to use these expressions as if they were variables until the compilation process finishes.

Constant variables are declared with the `const` keyword and they should be initialized when declared even with type annotated.

For example: 
```jule
const age = 18
```
```jule
const age: int = 18
```

In addition to being used to store certain computations at compile time, constant variables are also a essential part of comptime functionality and can be appear implicitly. For example, the variables you will have in comptime iterations will also be constant.

They can also be used to store primitive types as well as supported types provided by the comptime package.

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