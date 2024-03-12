# std::math::big

## Structures

```jule
#derive Clone
struct Int
```
Big arbitrary-precision signed integer.
Always in the normalized format, leading-zeros are eliminated.

**Methods:**

`static fn zero(): Int`\
Returns big integer that represents zero.

`static fn one(): Int`\
Returns big integer that represents one.

`static new[T](i: T): Int`\
Returns big integer that initialized by integer value.
T can only be signed or unsigned integer types.

`static fn parse(s: str, fmt: int)!: Int`\
Parse big integer from string. Fmt is the format of string. Results with exceptional if bits are not in the format or empty. Results with exceptional if fmt is not valid. Exceptional is always BigError.Format.

Valid fmt values are;
- 2 for binary.
- 8 for octal.
- 10 for decimal.
- 16 for hexadecimal.

`fn len(self): int`\
Returns count of bits except sign-bit.
Return value also means the minimum number of bits that can represent the integer.

`fn add(self, y: Int): Int`\
Adds two Int and returns result.

`fn add_assign(mut self, y: Int)`\
Adds Int.

`fn sub(self, y: Int): Int`\
Subtracts two Int and returns result.

`fn sub_assign(mut self, y: Int)`\
Subtracts Int.

`fn mul(self, y: Int): Int`\
Multiplies two Int and returns result.

`fn mul_assign(mut self, y: Int)`\
Multiplies Int.

`fn div(self, y: Int): Int`\
Divides two Int and returns result.

`fn div_assign(mut self, y: Int)`\
Divides Int.

`fn mod(self, y: Int): Int`\
Modulo two Int and returns result.

`fn mod_assign(mut self, y: Int)`\
Modulo Int.

`fn shl(self, y: uint): Int`\
Bitwise left shift.

`fn shl_assign(mut self, y: uint)`\
Bitwise left shift for assignment.

`fn shr(self, y: uint): Int`\
Bitwise right shift.

`fn shr_assign(mut self, y: uint)`\
Bitwise right shift for assignment.

`fn bit_or(self, y: Int): Int`\
Bitwise or.

`fn bit_or_assign(mut self, y: Int)`\
Bitwise or for assignment.

`fn bit_and(self, y: Int): Int`\
Bitwise and.

`fn bit_and_assign(mut self, y: Int)`\
Bitwise and for assignment.

`fn bit_xor(self, y: Int): Int`\
Bitwise xor.

`fn bit_xor_assign(mut self, y: Int)`\
Bitwise xor for assignment.

`fn cmp(self, y: Int): int`\
Compares bits. \
Returns +1 if self > y. \
Returns 0 if self == y. \
Returns -1 if self < y.

`fn lt(self, y: Int): Int`\
Reports whether integer less than other.

`fn lt_eq(self, y: Int): bool`\
Reports whether integer less than or equals to other.

`fn gt(self, y: Int): Int`\
Reports whether integer greater than other.

`fn gt_eq(self, y: Int): bool`\
Reports whether integer greater than or equals to other.

`fn eq(self, y: Int): Int`\
Reports whether integers are equals.

`fn bit_not(self): Int`\
Bitwise not.

`fn sign(self): int`\
Returns +1 if integer is positive or zero, -1 otherwise.

`fn neg(self): Int`\
Unary minus.

`fn pos(self): Int`\
Unary plus.

`fn odd(self): bool`\
Reports whether number is odd.

`fn even(self): bool`\
Reports whether number is even.

`fn bit(self, i: int): int`\
Returns bit by index.\
The index zero means first bit at right.

`fn bits(self): []byte`\
Returns immutable copy of internal little-endian bits.

`fn abs(self): Int`\
Returns absolute value of integer.

`fn format(fmt: int)!: str`\
Format number into string. Fmt is the format of number. Results with exceptional if fmt is not valid. Exceptional is always BigError.Format.

Valid fmt values are;
- 2 for binary.
- 8 for octal.
- 10 for decimal.
- 16 for hexadecimal.

`fn to_i64(self)!: i64`\
Returns integer in i64.
Causes exception if nuber large than capacity of i64.
Exception is equals to i64.MIN constant if integer is negative, else i64.MAX.

`fn to_u64(self)!: u64`\
Returns integer in u64.
Causes exception if nuber large than capacity of u64.
Exception is always equals to u64.MAX constant.

`fn to_str(self): str`\
Formats number with self.format(10) by default.

## Enums

```jule
enum BigError
```
Error codes for big number algorithms.

**Fields:**
- `Format`: Format error.
