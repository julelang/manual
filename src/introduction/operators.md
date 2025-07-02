# Operators
Operators are symbols that describe and specify arithmetic or logical tasks.

In any comparison, the first operand must be assignable to the type of the second operand, or vice versa.

The equality operators == and != apply to operands of comparable types. The ordering operators <, <=, >, and >= apply to operands of ordered types. These terms and the result of the comparisons are defined as below:

- Boolean types are comparable. Two boolean values are equal if they are either both true or both false.
- Integer types are comparable and ordered. Two integer values are compared in the usual way.
- Floating-point types are comparable and ordered. Two floating-point values are compared as defined by the IEEE 754 standard.
- String types are comparable and ordered. Two string values are compared lexically byte-wise.
- Pointer types are not comparable. Two pointer values are equal if they point to the same variable or if both have value nil. Pointers to distinct zero-size variables may or may not be equal. But pointer types are not ordered, because [reference pointers](/memory/raw-pointers/reference-pointers) are not supports ordered-relevant operators for safety reasons.
- Channel types are comparable. Two channel values are equal if they were created by the same call to make or if both have value nil.
- Dynamic types are comparable. Two dynamic values are equal if they have identical dynamic types and equal dynamic values or if both have value nil.
- A value x of non-dynamic type X and a value t of dynamic type T can be compared if type X is comparable and X implements T. They are equal if t's dynamic type is identical to X and t's dynamic value is equal to x.
- Struct types are comparable if all their field types are comparable. Two struct values are equal if their corresponding non-blank field values are equal. The fields are compared in source order, and comparison stops as soon as two field values differ (or all fields have been compared).
- Array types are comparable if their array element types are comparable. Two array values are equal if their corresponding element values are equal. The elements are compared in ascending index order, and comparison stops as soon as two element values differ (or all elements have been compared).

A comparison of two dynamic values with identical dynamic types causes a run-time panic if that type is not comparable. This behavior applies not only to direct dynamic value comparisons but also when comparing arrays of dynamic values or structs with dynamic-valued fields.

Binded types, slice, map, and function types are not comparable. However, as a special case, a slice, map, or function value may be compared to the predeclared identifier nil. Comparison of pointer, channel, and dynamic values to nil is also allowed and follows from the general rules above.

A type is strictly comparable if it is comparable and not an dynamic type nor composed of dynamic types. Specifically:

- Boolean, numeric, string, pointer, and channel types are strictly comparable.
- Struct types are strictly comparable if all their field types are strictly comparable.
- Array types are strictly comparable if their array element types are strictly comparable.

For other binary operators, the operand types must be identical unless the operation involves shifts or untyped constants. For operations involving constants only;

Untyped boolean, numeric, and string constants may be used as operands wherever it is legal to use an operand of boolean, numeric, or string type, respectively.

A constant comparison always yields an untyped boolean constant. If the left operand of a constant shift expression is an untyped constant, the result is an integer constant; otherwise it is a constant of the same type as the left operand, which must be of integer type.

Any other operation on untyped constants results in an untyped constant of the same kind; that is, a boolean, integer, floating-point, or string constant. If the untyped operands of a binary operation (other than a shift) are of different kinds, the result is of the operand's kind that appears later in this list: integer, rune, floating-point. For example, an untyped integer constant divided by an untyped floating-point constant yields an untyped floating-point constant.

Except for shift operations, if one operand is an untyped constant and the other operand is not, the constant is implicitly converted to the type of the other operand.

The right operand in a shift expression must have integer type or be an untyped constant representable by a value of type `uint`. If the left operand of a non-constant shift expression is an untyped constant, it is first implicitly converted to the type it would assume if the shift expression were replaced by its left operand alone.

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