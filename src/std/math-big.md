# std::math::big

## Structures

```jule
struct Int
```
Big arbitrary-precision signed integer.
Always in the normalized format, leading-zeros are eliminated.

**Methods:**

`static fn Zero(): Int`\
Returns big integer that represents zero.

`static fn One(): Int`\
Returns big integer that represents one.

`static New[T: Int | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | int | uint](i: T): Int`\
Returns big integer that initialized by integer value.
T can only be signed or unsigned integer types.

`static fn Parse(s: str, fmt: int)!: Int`\
Parse big integer from string. Fmt is the format of string. Results with exceptional if bits are not in the format or empty. Results with exceptional if fmt is not valid. Exceptional is always BigError.Format.

Valid fmt values are;
- 2 for binary.
- 8 for octal.
- 10 for decimal.
- 16 for hexadecimal.

`fn Len(self): int`\
Returns count of bits except sign-bit.
Return value also means the minimum number of bits that can represent the integer.

`fn Add(self, y: Int): Int`\
Adds two Int and returns result.

`fn AddAssign(mut self, y: Int)`\
Adds Int.

`fn Sub(self, y: Int): Int`\
Subtracts two Int and returns result.

`fn SubAssign(mut self, y: Int)`\
Subtracts Int.

`fn Mul(self, y: Int): Int`\
Multiplies two Int and returns result.

`fn MulAssign(mut self, y: Int)`\
Multiplies Int.

`fn Div(self, y: Int): Int`\
Divides two Int and returns result.

`fn DivAssign(mut self, y: Int)`\
Divides Int.

`fn Mod(self, y: Int): Int`\
Modulo two Int and returns result.

`fn ModAssign(mut self, y: Int)`\
Modulo Int.

`fn Shl(self, y: uint): Int`\
Bitwise left shift.

`fn ShlAssign(mut self, y: uint)`\
Bitwise left shift for assignment.

`fn Shr(self, y: uint): Int`\
Bitwise right shift.

`fn ShrAssign(mut self, y: uint)`\
Bitwise right shift for assignment.

`fn BitOr(self, y: Int): Int`\
Bitwise or.

`fn BitOrAssign(mut self, y: Int)`\
Bitwise or for assignment.

`fn BitAnd(self, y: Int): Int`\
Bitwise and.

`fn BitAndAssign(mut self, y: Int)`\
Bitwise and for assignment.

`fn BitXor(self, y: Int): Int`\
Bitwise xor.

`fn BitXorAssign(mut self, y: Int)`\
Bitwise xor for assignment.

`fn Cmp(self, y: Int): int`\
Compares bits. \
Returns +1 if self > y. \
Returns 0 if self == y. \
Returns -1 if self < y.

`fn Lt(self, y: Int): Int`\
Reports whether integer less than other.

`fn LtEq(self, y: Int): bool`\
Reports whether integer less than or equals to other.

`fn Gt(self, y: Int): Int`\
Reports whether integer greater than other.

`fn GtEq(self, y: Int): bool`\
Reports whether integer greater than or equals to other.

`fn Eq(self, y: Int): Int`\
Reports whether integers are equals.

`fn BitNot(self): Int`\
Bitwise not.

`fn Sign(self): int`\
Returns +1 if integer is positive or zero, -1 otherwise.

`fn Neg(self): Int`\
Unary minus.

`fn Pos(self): Int`\
Unary plus.

`fn Odd(self): bool`\
Reports whether number is odd.

`fn Even(self): bool`\
Reports whether number is even.

`fn Bit(self, i: int): int`\
Returns bit by index.\
The index zero means first bit at right.

`fn Bits(self): []byte`\
Returns immutable copy of internal little-endian bits.

`fn Abs(self): Int`\
Returns absolute value of integer.

`fn TrailingZeros(self): int`\
Returns count of absolute's trailing zeros.

`fn Format(fmt: int)!: str`\
Format number into string. Fmt is the format of number. Results with exceptional if fmt is not valid. Exceptional is always BigError.Format.

Valid fmt values are;
- 2 for binary.
- 8 for octal.
- 10 for decimal.
- 16 for hexadecimal.

`fn ToI64(self)!: i64`\
Returns integer in i64.
Causes exception if nuber large than capacity of i64.
Exception is equals to i64.Min constant if integer is negative, else i64.Max.

`fn ToU64(self)!: u64`\
Returns integer in u64.
Causes exception if nuber large than capacity of u64.
Exception is always equals to u64.Max constant.

`fn ToStr(self): str`\
Formats number with self.format(10) by default.

## Enums

```jule
enum BigError
```
Error codes for big number algorithms.

**Fields:**
- `Format`: Format error.