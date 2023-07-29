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
| `<<` | Left shift | integer << unsigned integer |
| `>>` | Right shift | integer >> unsigned integer |
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