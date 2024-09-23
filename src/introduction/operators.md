# Operators
Operators are symbols that describe and specify arithmetic or logical tasks.

## Arithmetic Operators
Arithmetic operators are used to perform common mathematical operations. And some times it is also used for non-numeric types.

| Operator | Description | Supported Type(s) |
| -------- | ----------- | ----------------- |
| `+` | Addition | integers, floats, strings |
| `-` | Subtraction | integers, floats |
| `*` | Multiplication | integer, floats |
| `/` | Division | integer, floats |
| `%` | Modulus | integers |
| `<<` | Left shift | integer << integer |
| `>>` | Right shift | integer >> integer |
| `++` | Equals to += 1 as suffix | lvalue arithmetic++ |
| `--` | Equals to -= 1 as suffix | lvalue arithmetic-- |

## Integer Overflow

Integer overflow is not checked in any way in Jule. To detect an integer overflow, Jule developers must place check mechanisms in suspicious locations or implement the necessary runtime checks themselves.

Unsigned integer values ​​are handled the same way in Go.\
From Go Language Specification:
> For unsigned integer values, the operations +, -, *, and << are computed modulo 2n, where n is the bit width of the unsigned integer's type. Loosely speaking, these unsigned integer operations discard high bits upon overflow, and programs may rely on "wrap around".

For shifting operators, discards high and low bits upon overflow. If bitsize exceeds, integer always will be zero.

## Comparison Operators

| Operator | Description |
| -------- | ----------- |
| `==` | Equal to |
| `!=` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

For `==` and `!=` operators, the slices, maps, anonymous functions, and some binded types are not supported. If a structure uses one of these types, it will be unsupported also. In this case, to make a comparable relevant structure, use operator overloading and overload the comparison operators.

For binded types, all binded structures accepted as non-comparable. Other type aliases like binded as `int` or something like that, accepted as comparable.

## Bitwise Operators
| Operator | Description |
| -------- | ----------- |
| `&` | Bitwise AND |
| `\|` | Bitwise OR |
| `^` | Bitwise XOR, Bitwise NOT |

## Comparison Operators
| Operator | Description |
| -------- | ----------- |
| `&&` | Logical and |
| `\|\|` | Logical or |
| `!` | Logical not |

## Precedences
| Precedence (Descending) | Operator(s) |
| ----------------------- | ----------- |
| 5 |  `*` `%` `/` `<<` `>>` `&` |
| 4 | `+` `-` `\|` `^` |
| 3 | `==` `!=` `<` `<=` `>` `>=` |
| 2 | `&&` |
| 1 | `\|\|` |