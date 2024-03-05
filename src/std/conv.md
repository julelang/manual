# std::conv
## Globals
### `const INT_SIZE`
Is the size in bits of an int or uint value.

## Functions
```jule
fn conv_bool(s: str)!: bool
```
Returns the boolean value represented by the string. It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False. Any other value throws exception.

---

```jule
fn fmt_bool(b: bool): str
```
Returns "true" or "false" according to the value of b.

---

```jule
fn fmt_uint(i: u64, base: int): str
```
Returns the string representation of i in the given base, for 2 <= base <= 36. The result uses the lower-case letters 'a' to 'z' for digit values >= 10.

---

```jule
fn fmt_int(i: i64, base: int): str
```
Returns the string representation of i in the given base, for 2 <= base <= 36. The result uses the lower-case letters 'a' to 'z' for digit values >= 10. 

---

```jule
fn itoa(i: int): str
```
Is equivalent to fmt_int(i64(i), 10).

---

```jule
fn fmt_float(f: f64, fmt: byte, prec: int, bit_size: int): str
```
Converts the floating-point number f to a string, according to the format fmt and precision prec. It rounds the result assuming that the original was obtained from a floating-point value of bit_size bits (32 for f32, 64 for f64).

The format fmt is one of\
'b' (-ddddp±ddd, a binary exponent),\
'e' (-d.dddde±dd, a decimal exponent),\
'E' (-d.ddddE±dd, a decimal exponent),\
'f' (-ddd.dddd, no exponent),\
'g' ('e' for large exponents, 'f' otherwise),\
'G' ('E' for large exponents, 'f' otherwise),\
'x' (-0xd.ddddp±ddd, a hexadecimal fraction and binary exponent), or\
'X' (-0Xd.ddddP±ddd, a hexadecimal fraction and binary exponent).

The precision prec controls the number of digits (excluding the exponent) printed by the 'e', 'E', 'f', 'g', 'G', 'x', and 'X' formats. For 'e', 'E', 'f', 'x', and 'X', it is the number of digits after the decimal point. For 'g' and 'G' it is the maximum number of significant digits (trailing zeros are removed). The special precision -1 uses the smallest number of digits necessary such that parse_float will return f exactly. 

---

```jule
fn parse_int(mut s: str, base: int, mut bit_size: int)!: i64
```
Interprets a string s in the given base (0, 2 to 36) and bit size (0 to 64) and returns the corresponding value i.

The string may begin with a leading sign: "+" or "-".

If the base argument is 0, the true base is implied by the string's prefix following the sign (if present): 2 for "0b", 8 for "0" or "0o", 16 for "0x", and 10 otherwise.

The bit_size argument specifies the integer type that the result must fit into. Bit sizes 0, 8, 16, 32, and 64 correspond to int, i8, i16, i32, and i64. If bit_size is below 0 or above 64, throws exception.

The exception errors that parse_int throws have concrete type ConvError. If s is empty or contains invalid digits, exception = ConvError.InvalidSyntax; if the value corresponding to s cannot be represented by a signed integer of the given size, exception = ConvError.OutOfRange.

---

```jule
fn parse_uint(mut s: str, mut base: int, mut bit_size: int)!: u64
```
Is like parse_int but for unsigned numbers. A sign prefix is not permitted. 

---

```jule
fn parse_float(s: str, bit_size: int)!: f64
```
Converts the string s to a floating-point number with the precision specified by bit_size: 32 for f32, or 64 for f64. When bit_size=32, the result still has type f64, but it will be convertible to f32 without changing its value.

Accepts decimal and hexadecimal floating-point numbers as defined by the Jule syntax for [floating-point literals]. If s is well-formed and near a valid floating-point number, returns the nearest floating-point number rounded using IEEE754 unbiased rounding. (Parsing a hexadecimal floating-point value only rounds when there are more bits in the hexadecimal representation than will fit in the mantissa.)

The exceptional errors that have concrete type ConvError.

If s is not syntactically well-formed, throws exception = ConvError.InvalidSyntax.

If s is syntactically well-formed but is more than 1/2 ULP away from the largest floating point number of the given size, Exceptional = ConvError.OutOfRange.

Recognizes the string "nan", and the (possibly signed) strings "inf" and "infinity" as their respective special floating point values. It ignores case when matching. 

## Enums
```jule
enum ConvError
```
Error codes of conv package.

**Fields:**
- `Ok`: No problem. Defined to using internally, any exceptional is not be this code.
- `OutOfRange`: Indicates that a value is out of range for the target type
- `InvalidSyntax`: Indicates that a value does not have the right syntax for the target type
- `InvalidBase`: Indicates that a base is invalid
- `InvalidBitSize`: Indicates that a bit size is invalid