# Data Types
Jule is designed strongly typed. Therefore, the data-types of all values must be specified during compilation. In this section we will look at the builtin types offered by the compiler. 

## Primitive Types
| Type    | Typical Bit Width  | Typical Value                                                       |
|---------|--------------------|---------------------------------------------------------------------|
| i8      | 1 byte             | -128 to 127                                                         |
| i16     | 2 bytes            | -32768 to 32767                                                     |
| i32     | 4 bytes            | -2147483648 to 2147483647                                           |
| i64     | 8 bytes            | -9223372036854775808 to 9223372036854775807                         |
| int     | Platform dependent | Platform dependent (signed)                                         |
| u8      | 1 byte             | 0 to 255                                                            |
| u16     | 2 bytes            | 0 to 65535                                                          |
| u32     | 4 bytes            | 0 to 4294967295                                                     |
| u64     | 8 bytes            | 0 to 18446744073709551615                                           |
| uint    | Platform dependent | Platform dependent (unsigned)                                       |
| uintptr | Platform dependent | It is a unsigned integer type that is big enough to hold a pointer. |
| f32     | 4 bytes            | -3.4028234663852886e+38 to 3.4028234663852886e+38                   |
| f64     | 8 bytes            | -1.797693134862315708e+308 to 1.797693134862315708e+308             |
| bool    | -                  | `true` or `false`                                                   |
| str     | -                  | UTF-8 byte encoded character string.                                |
| any     | -                  | Any data.                                                           |

## Integer Literals

Integer literals are handled at compile time using the `Int` structure provided by the `std/math/big` package. As long as they remain untyped, they can represent arbitrarily large numbers. However, when they need to be used with a specific type, they must fit within the bounds of that type.

For example:
```jule
const maxU64 = 1<<64 - 1

fn main() {
	println(maxU64)
}
```
In Jule 0.1.3 and earlier versions, constants were not treated as arbitrarily large numbers. Therefore, the expression `1 << 64` would result in an overflow, leading to an unexpected final computation result. Starting from Jule 0.1.4, `1 << 64` is now a valid expression, and the computation produces the exact expected result.

### Decimal

Decimal expressions are literals that do not contain any special prefixes (such as `0x` or `0`).
```jule
12345
```

### Binary
Binary literals are literals that begin with `0b`. Only the digits [0, 1] can be used in these literals.
```jule
0b0001010101
```

### Octal
Octal literals are literals that begin with `0o` or `0`. Only the digits [0, 7] can be used in these literals. Using `0` alone is interpreted as a decimal number.
```jule
0455
```
```jule
0o455
```

### Hexadecimal
Hexadecimal literals are literals that begin with `0x`. Only the digits [0, 9] and the letters [A, F] can be used in these literals.
```jule
0xDFF90
```

## Floating-Point Literals
All floating-point literals are `f64` by default.

```jule
3.14
```
```jule
32.60
```
```jule
032.60
```
```jule
3.
```
```jule
.3
```
```jule
0.3
```
```jule
1E2
```
```jule
.12345E+6
```
```jule
1.e+0
```
```jule
0x1p-2
```
```jule
0x2.p10
```
```jule
0x1.Fp+0
```
```jule
0X.8p-0
```
```jule
0x1fffp-16
```

## Underscore & Numeric Literals

You can use underscore to separate digits. This might be helpful for big numbers. \
There are some conditions:
- Literal cannot starts with underscore
- Precision of floating-point literals are cannot starts with underscore
- Format specifier of floating-point literals are cannot separated with underscore from following digits

Example to underscored literals:
```jule
10_000_000
```
```jule
0.5_000e+100
```
```jule
.12_345E+6
```
```jule
0b1100_1100_0110_1010
```

## Byte and Rune Literals

A byte or rune literal is represented by a single character between single quotes. Since it is typically a string element, it supports the same escape sequences. Literal can be evaluated in two ways, these are byte literal and rune literal. If your character is small enough to be a byte (0 <= b <= 255) it is treated as a byte, otherwise it is treated as a rune.

For example:

```jule
'a' // byte
```

```jule
'ç' // rune
```

## String

Jule strings are UTF-8 encoded byte-by-byte, and support Unicode. They are also immutable, means you can't modify them. For literals, strings will not heap allocated. Strings only performs heap allocation for runtime concats and other runtime stuffs. If string performs a heap allocation, it will use smart pointer to track allocation.

Strings support the `+` operator for concatenation, It's that easy to concatenate two strings. Additionally, using the `==` and `!=` operators, you can easily determine whether two strings are the same or not.

In most cases, any concatenation will result as heap allocation which is might be expensive. For highly-repeated concatenations use string builder utilities instead.

It also supports the `<`, `<=`, `>`, and `>=` operators for comparing strings. But it is not case-sensitive, case-insensitive or like that. This operators just compares bytes/runes of strings.

### Range Iterations

Strings can be used with range iteration. The first variable in the iteration is an integer-type index variable. This variable represents the starting byte position of the rune based on runes (Unicode code points), while the second variable is the rune currently pointed to in the iteration.

### String Literals
```jule
"String literal of Jule."
```
String literals have a escape sequences.

| Escape | Description |
| ------ | ----------- |
| \\\ | Backslash |
| \a | ASCII Bell. |
| \b | ASCII Backspace. |
| \f | ASCII Formfeed. |
| \n | ASCII Linefeed. |
| \r | Carriage return. |
| \t | ASCII Horizontal tab. |
| \v | ASCII Vertical tab. |
| \\' | Single quote. |
| \\" | Double quote. |
| \xhh | The byte whose numerical value is given by hh… interpreted as a hexadecimal number. |
| \uhhhh | Unicode code point below 10000 hexadecimal. |
| \Uhhhhhhhh | Unicode code point where h is a hexadecimal digit. |
| \nnn | The byte whose numerical value is given by nnn interpreted as an octal number. |

### Raw String Literals
Raw strings do not contain escape sequences and are not required to be defined in a single line. They are represents with `` ` ``.
```jule
`Raw String literal of Jule.`
```
```jule
`Raw String literal of Jule
with
new
    lines.`
```

## Boolean

Jule defines two constant values for booleans.

For logical true:
```jule
true
```

For logical false:
```jule
false
```

## Maps

See the [Maps](/common-concepts/maps) section for more information.

## any

See the [Any](/dynamic-types/any) section for more information.

## Nil
Zero value for pointers and function data typed defines. 
```jule
nil
```