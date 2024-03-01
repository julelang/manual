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

`static fn from_bits(b: str, neg: bool)!: Int`\
Parse big integer from bits that represented in string.
Results with exceptional if bits are not in the format or empty.
Exceptional is always BigError.Format.

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

`fn shr(self, y: uint): Int`\
Bitwise right shift.

`fn shr_assign(mut self, y: uint)`\
Bitwise right shift for assignment.

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

`fn to_i64(self)!: i64`\
Returns integer in i64.
Causes exception if nuber large than capacity of i64.
Exception is equals to i64.MIN constant if integer is negative, else i64.MAX.

`fn to_u64(self)!: u64`\
Returns integer in u64.
Causes exception if nuber large than capacity of u64.
Exception is always equals to u64.MAX constant.

## Enums

```jule
enum BigError
```
Error codes for big number algorithms.

**Fields:**
- `Format`: Format error.
