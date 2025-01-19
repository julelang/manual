# std/conv

## Index

[Variables](#variables)\
[fn ConvBool(s: str)!: bool](#convbool)\
[fn FmtBool(b: bool): str](#fmtbool)\
[fn FmtFloat(f: f64, fmt: byte, prec: int, bitSize: int): str](#fmtfloat)\
[fn ParseUint(mut s: str, mut base: int, mut bitSize: int)!: u64](#parseuint)\
[fn ParseInt(mut s: str, base: int, mut bitSize: int)!: i64](#parseint)\
[fn Atoi(s: str)!: int](#atoi)\
[fn ParseFloat(s: str, bitSize: int)!: f64](#parsefloat)\
[fn FmtUint(i: u64, base: int): str](#fmtuint)\
[fn FmtInt(i: i64, base: int): str](#fmtint)\
[fn Itoa(i: int): str](#itoa)\
[enum Error](#error)

## Variables

```jule
const IntSize = _INT_SIZE
```
Is the size in bits of an int or uint value.

## ConvBool
```jule
fn ConvBool(s: str)!: bool
```
Returns the boolean value represented by the string. It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Any other value throws exception.

## FmtBool
```jule
fn FmtBool(b: bool): str
```
Returns &#34;true&#34; or &#34;false&#34; according to the value of b.

## FmtFloat
```jule
fn FmtFloat(f: f64, fmt: byte, prec: int, bitSize: int): str
```
Converts the floating-point number f to a string, according to the format fmt and precision prec. It rounds the result assuming that the original was obtained from a floating-point value of bitSize bits (32 for f32, 64 for f64).

The format fmt is one of &#39;b&#39; (-ddddp±ddd, a binary exponent), &#39;e&#39; (-d.dddde±dd, a decimal exponent), &#39;E&#39; (-d.ddddE±dd, a decimal exponent), &#39;f&#39; (-ddd.dddd, no exponent), &#39;g&#39; (&#39;e&#39; for large exponents, &#39;f&#39; otherwise), &#39;G&#39; (&#39;E&#39; for large exponents, &#39;f&#39; otherwise), &#39;x&#39; (-0xd.ddddp±ddd, a hexadecimal fraction and binary exponent), or &#39;X&#39; (-0Xd.ddddP±ddd, a hexadecimal fraction and binary exponent).

The precision prec controls the number of digits (excluding the exponent) printed by the &#39;e&#39;, &#39;E&#39;, &#39;f&#39;, &#39;g&#39;, &#39;G&#39;, &#39;x&#39;, and &#39;X&#39; formats. For &#39;e&#39;, &#39;E&#39;, &#39;f&#39;, &#39;x&#39;, and &#39;X&#39;, it is the number of digits after the decimal point. For &#39;g&#39; and &#39;G&#39; it is the maximum number of significant digits (trailing zeros are removed). The special precision -1 uses the smallest number of digits necessary such that parse\_float will return f exactly.

## ParseUint
```jule
fn ParseUint(mut s: str, mut base: int, mut bitSize: int)!: u64
```
Is like ParseInt but for unsigned numbers.

A sign prefix is not permitted.

## ParseInt
```jule
fn ParseInt(mut s: str, base: int, mut bitSize: int)!: i64
```
Interprets a string s in the given base (0, 2 to 36) and bit size (0 to 64) and returns the corresponding value i.

The string may begin with a leading sign: &#34;+&#34; or &#34;-&#34;.

If the base argument is 0, the true base is implied by the string&#39;s prefix following the sign (if present): 2 for &#34;0b&#34;, 8 for &#34;0&#34; or &#34;0o&#34;, 16 for &#34;0x&#34;, and 10 otherwise.

The bitSize argument specifies the integer type that the result must fit into. Bit sizes 0, 8, 16, 32, and 64 correspond to int, i8, i16, i32, and i64. If bitSize is below 0 or above 64, throws exception.

The exception errors that parse\_int throws have concrete type Error. If s is empty or contains invalid digits, exception = Error.InvalidSyntax; if the value corresponding to s cannot be represented by a signed integer of the given size, exception = Error.OutOfRange.

## Atoi
```jule
fn Atoi(s: str)!: int
```
Is equivalent to ParseInt(s, 10, 0), converted to int.

## ParseFloat
```jule
fn ParseFloat(s: str, bitSize: int)!: f64
```
Converts the string s to a floating-point number with the precision specified by bitSize: 32 for f32, or 64 for f64. When bitSize=32, the result still has type f64, but it will be convertible to f32 without changing its value.

Accepts decimal and hexadecimal floating-point numbers as defined by the Jule syntax for \[floating-point literals\]. If s is well-formed and near a valid floating-point number, returns the nearest floating-point number rounded using IEEE754 unbiased rounding. (Parsing a hexadecimal floating-point value only rounds when there are more bits in the hexadecimal representation than will fit in the mantissa.)

The exceptional errors that have concrete type Error.

If s is not syntactically well-formed, throws exception = Error.InvalidSyntax.

If s is syntactically well-formed but is more than 1/2 ULP away from the largest floating point number of the given size, Exceptional = Error.OutOfRange.

Recognizes the string &#34;NaN&#34;, and the (possibly signed) strings &#34;inf&#34; and &#34;infinity&#34; as their respective special floating point values. It ignores case when matching.

## FmtUint
```jule
fn FmtUint(i: u64, base: int): str
```
Returns the string representation of i in the given base, for 2 &lt;= base &lt;= 36. The result uses the lower-case letters &#39;a&#39; to &#39;z&#39; for digit values &gt;= 10.

## FmtInt
```jule
fn FmtInt(i: i64, base: int): str
```
Returns the string representation of i in the given base, for 2 &lt;= base &lt;= 36. The result uses the lower-case letters &#39;a&#39; to &#39;z&#39; for digit values &gt;= 10.

## Itoa
```jule
fn Itoa(i: int): str
```
Is equivalent to FmtInt(i64(i), 10).

## Error
```jule
enum Error {
	OutOfRange,     // Indicates that a value is out of range for the target type.
	InvalidSyntax,  // Indicates that a value does not have the right syntax for the target type.
	InvalidBase,    // Indicates that a base is invalid.
	InvalidBitSize, // Indicates that a bit size is invalid.
}
```
Error codes of conv package.