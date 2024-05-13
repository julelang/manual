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

## Comparison Operators

| Operator | Description |
| -------- | ----------- |
| `==` | Equal to |
| `!=` | Not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

For `==` and `!=` operators, the slice and map types are not supported. If a structure uses one of these types, it will be unsupported also. In this case, to make a comparable relevant structure, use operator overloading and overload the comparison operators.

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


## Integer Overflow

Integer overflow is not checked in any way in Jule. This can be a significant cost in runtime and can significantly impact performance. To detect an integer overflow, Jule developers must place mechanisms such as assert in suspicious locations or implement the necessary runtime checks themselves.