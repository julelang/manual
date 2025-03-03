# Comptime Evaluation

In short, comptime evaluation is the evaluation of computations that can be handled at comptime and really basic feature of Jule's comptime. More broadly, comptime evaluation is responsible for evaluating constant literals for supported primitive types, handling constant variables, and executing other constant algorithms. Besides these strict comptime features, some comptime may provide additional facilities for expressions that are not within the scope of evaluation but can be predicted at compile time.

List of supported primitive types: `str`, `bool`, `f32`, `f64`, `i8`, `i16`, `i32`, `i64`, `u8`, `u16`, `u32`, `u64`, `int`, `uint`, `uintptr`

### List of Some Effects of Comptime Evaluation

- Evaluates of supported primitive type literals.
- Evaluates indexing expressions as constant data of supported literals such as strings.
- Evaluates slicing expressions as constant data of supported literals such as strings.
- Compiler checks boundaries for indexing expressions with supported literals such as strings.
- Compiler checks boundaries for indexing expressions with supported fixed-size types such as arrays.
- Compiler casts basic constant expressions like `int` to `uint` casting.
- The built-in `len` function returns constant length data for constant strings, arrays and other comptime supported types.
- Compiler converts constant-string to byte-slice, constant-string to rune-slice, constant-rune to string, constant-byte to string castings.
- Calls strict comptime functions that provided by the [`std/comptime`](/std/comptime) package.
- Executes comptime algorithms such as comptime matching or comptime iterations.

### Untyped Literals

Untyped literals are literals that do not have an exact type. This allows them to automatically adapt to any compatible type. When untyped literals undergo casting, they lose their untyped nature and start behaving as the explicitly cast type.

For example:
```jule
type String: str

fn main() {
	let mut x: String = "hello world"
	x = "assignment with untyped literal"
	x = str("assignment with typed literal") // compile error
}
```
In the example above, the variable `x` is defined with the `String` type and initialized with an untyped string literal. The untyped string literal adapts to the `String` type. The following first statement assigns an untyped string literal to the variable `x`, which similarly results in the untyped literal behaving as a `String`, causing no errors. However, the subsequent assignment statement will result in an error because, with casting, the untyped string literal now has an exact type (i.e., `str`), which is incompatible with the `String` type.

#### Untyped Integers

Integers constants represent exact values of arbitrary precision and do not overflow. Integer literals are handled at compile time using the `Int` structure provided by the `std/math/big` package. As long as they remain untyped, they can represent arbitrarily big numbers. However, when they need to be used with a specific type, they must fit within the limits of that type.

An untyped integer literal can be stored as untyped in an untyped constant variable. However, in cases where it needs to be treated as a typed value while still being untyped, it will always attempt to default to the `int` type. If the untyped value overflows the `int`, this will result in a compiler error.

For example:
```jule
const maxU64 = 1<<64 - 1

fn main() {
	println(maxU64)
}
```
In Jule 0.1.3 and earlier versions, constants were not treated as arbitrarily big numbers. Therefore, the expression `1 << 64` would result in an overflow, leading to an unexpected final computation result. Starting from Jule 0.1.4, `1 << 64` is now a valid expression, and the computation produces the exact expected result.

::: info
Arbitrary big literals are not technically unlimited. They are constrained to ensure the compiler can function safely. An untyped literal can represent a value of up to 256 bits. Exceeding this limit will cause the compiler to report a constant overflow error.
:::

### Casting of Constant Values

Casting is handled differently for untyped and typed constants.

If an untyped constant is cast, it will no longer remain untyped and will instead adopt the cast type. If the untyped value overflows the cast type, this will result in a compiler error. An untyped value must always be compatible with the cast type. When untyped integers are cast to floating-point types, the `Int` type (provided by `std/math/big`) uses its `F64` method and accuracy always should be `Exact`.

When casting typed constant values, it does not cause an error if the constant value overflows the cast type. At comptime, Jule arithmetic will yield the same result with runtime. For example, the expression `u32(i32(-12))` will result in a `u32` type with `4294967284`.

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
use "std/comptime"

const MagicNumber = 20

fn main() {
    let x = MagicNumber
    const xt = comptime::TypeOf(x)
    println(xt.Kind())
}
```

### Indexing Range Data

You can use types treated as range at run time with constant index values. This is done similar to an ordinary indexing expression.

For example:
```jule
const myRange = magic
const myItem = myRange[0]
```
In this example, let's assume that the `myRange` variable stores data of type range. The `myItem` variable holds the data at index `0` of the `myRange` variable. The index expression must always be a constant and must be within a boundary.