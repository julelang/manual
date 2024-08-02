# Data Types
Jule is designed strongly typed. Therefore, the data-types of all values must be specified during compilation. In this section we will look at the builtin types offered by the compiler. 

## Primitive Types
| Type | Typical Bit Width | Typical Range |
| ---- | ----------------- | ------------- |
| i8 | 1 byte | -128 to 127 |
| i16 | 2 bytes | -32768 to 32767 |
| i32 | 4 bytes | -2147483648 to 2147483647 |
| i64 | 8 bytes | -9223372036854775808 to 9223372036854775807 |
| int | Platform dependent | Platform dependent (signed) |
| u8 | 1 byte | 0 to 255 |
| u16 | 2 bytes | 0 to 65535 |
| u32 | 4 bytes | 0 to 4294967295 |
| u64 | 8 bytes | 0 to 18446744073709551615 |
| uint | Platform dependent | Platform dependent (unsigned) |
| uintptr | Platform dependent | It is a unsigned integer type that is big enough to hold a pointer. |
| f32 | 4 bytes | -3.4028234663852886e+38 to 3.4028234663852886e+38 |
| f64 | 8 bytes | -1.797693134862315708e+308 to 1.797693134862315708e+308 |
| bool | 1 byte | true or false |
| str | - | UTF-8 byte encoded character string. |
| any | - | Any data. |

## Integer Literals
### Decimal
```jule
12345
```

### Binary
```jule
0b0001010101
```

### Octal
```jule
0455
```
```jule
0o455
```

### Hexadecimal
```jule
0xDFF90
```

## Floating-Point Literals
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

Jule strings are UTF-8 encoded byte-by-byte, and support Unicode. They are also immutable, means you can't modify them.

Strings support the `+` operator for concatenation, It's that easy to concatenate two strings. Additionally, using the `==` and `!=` operators, you can easily determine whether two strings are the same or not.

In most cases, any concatenation will result as heap allocation which is might be expensive. For higly-repeated concatenations use string builder utilities instead.

It also supports the `<`, `<=`, `>`, and `>=` operators for comparing strings. But it is not case-sensitive, case-insensitive or like that. This operators just compares bytes/runes of strings.

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

## Nil
Zero value for pointers and function data typed defines. 
```jule
nil
```

## any
It can be hold any data type and nil.
Only supports equals (==) and not equals (!=) operators.

`x == nil`: true if `any` is nil, not checks whether data is nil\
`x == y`: true if x and y is nil\
`x == y`: true if x and y has same data type and returns true of equals operator of data type for two value

Supports casting to any type.
You can get type-safe value of `any` with casting.
For example:
```jule
let myAny: any = 10
let x = (int)(myAny)
```

`any` type protects itself against mutability if necessary.
For example, you have slice value holds by any-typed variable.
And your variable is immutable.
So, if you cast your value to slice for assign to mutable variable, you will get error.
Because of slice is mutable type, so it's breaking immutability.
::: warning
This is is very unsafe, also blocks deriving `Clone`.
Avoid using any whenever possible.
:::
