# std/math/bits

## Index

[Variables](#variables)\
[fn LeadingZeros(x: uint): int](#leadingzeros)\
[fn LeadingZeros8(x: u8): int](#leadingzeros8)\
[fn LeadingZeros16(x: u16): int](#leadingzeros16)\
[fn LeadingZeros32(x: u32): int](#leadingzeros32)\
[fn LeadingZeros64(x: u64): int](#leadingzeros64)\
[fn TrailingZeros(x: uint): int](#trailingzeros)\
[fn TrailingZeros8(x: u8): int](#trailingzeros8)\
[fn TrailingZeros16(x: u16): int](#trailingzeros16)\
[fn TrailingZeros32(x: u32): int](#trailingzeros32)\
[fn TrailingZeros64(x: u64): int](#trailingzeros64)\
[fn OnesCount(x: uint): int](#onescount)\
[fn OnesCount8(x: u8): int](#onescount8)\
[fn OnesCount16(x: u16): int](#onescount16)\
[fn OnesCount32(x: u32): int](#onescount32)\
[fn OnesCount64(mut x: u64): int](#onescount64)\
[fn RotateLeft(x: uint, k: int): uint](#rotateleft)\
[fn RotateLeft8(x: u8, k: int): u8](#rotateleft8)\
[fn RotateLeft16(x: u16, k: int): u16](#rotateleft16)\
[fn RotateLeft32(x: u32, k: int): u32](#rotateleft32)\
[fn RotateLeft64(x: u64, k: int): u64](#rotateleft64)\
[fn Reverse(x: uint): uint](#reverse)\
[fn Reverse8(x: u8): u8](#reverse8)\
[fn Reverse16(x: u16): u16](#reverse16)\
[fn Reverse32(mut x: u32): u32](#reverse32)\
[fn Reverse64(mut x: u64): u64](#reverse64)\
[fn ReverseBytes(x: uint): uint](#reversebytes)\
[fn ReverseBytes16(x: u16): u16](#reversebytes16)\
[fn ReverseBytes32(mut x: u32): u32](#reversebytes32)\
[fn ReverseBytes64(mut x: u64): u64](#reversebytes64)\
[fn Len(x: uint): int](#len)\
[fn Len8(x: u8): int](#len8)\
[fn Len16(mut x: u16): (n: int)](#len16)\
[fn Len32(mut x: u32): (n: int)](#len32)\
[fn Len64(mut x: u64): (n: int)](#len64)\
[fn Add(x: uint, y: uint, carry: uint): (sum: uint, carryOut: uint)](#add)\
[fn Add32(x: u32, y: u32, carry: u32): (sum: u32, carryOut: u32)](#add32)\
[fn Add64(x: u64, y: u64, carry: u64): (sum: u64, carryOut: u64)](#add64)\
[fn Sub(x: uint, y: uint, borrow: uint): (diff: uint, borrowOut: uint)](#sub)\
[fn Sub32(x: u32, y: u32, borrow: u32): (diff: u32, borrowOut: u32)](#sub32)\
[fn Sub64(x: u64, y: u64, borrow: u64): (diff: u64, borrowOut: u64)](#sub64)\
[fn Mul(x: uint, y: uint): (hi: uint, lo: uint)](#mul)\
[fn Mul32(x: u32, y: u32): (hi: u32, lo: u32)](#mul32)\
[fn Mul64(x: u64, y: u64): (hi: u64, lo: u64)](#mul64)\
[fn Div(hi: uint, lo: uint, y: uint): (quo: uint, rem: uint)](#div)\
[fn Div32(hi: u32, lo: u32, y: u32): (quo: u32, rem: u32)](#div32)\
[fn Div64(hi: u64, lo: u64, mut y: u64): (quo: u64, rem: u64)](#div64)\
[fn Rem(hi: uint, lo: uint, y: uint): uint](#rem)\
[fn Rem32(hi: u32, lo: u32, y: u32): u32](#rem32)\
[fn Rem64(hi: u64, lo: u64, y: u64): u64](#rem64)

## Variables

```jule
const UintSize = 32 << (^uint(0) >> 63) // 32 or 64
```
Is the size of a uint in bits.

## LeadingZeros
```jule
fn LeadingZeros(x: uint): int
```
Returns the number of leading zero bits in x; the result is UintSize for x == 0.

## LeadingZeros8
```jule
fn LeadingZeros8(x: u8): int
```
Returns the number of leading zero bits in x; the result is 8 for x == 0.

## LeadingZeros16
```jule
fn LeadingZeros16(x: u16): int
```
Returns the number of leading zero bits in x; the result is 16 for x == 0.

## LeadingZeros32
```jule
fn LeadingZeros32(x: u32): int
```
Returns the number of leading zero bits in x; the result is 32 for x == 0.

## LeadingZeros64
```jule
fn LeadingZeros64(x: u64): int
```
Returns the number of leading zero bits in x; the result is 64 for x == 0.

## TrailingZeros
```jule
fn TrailingZeros(x: uint): int
```
Returns the number of trailing zero bits in x; the result is UintSize for x == 0.

## TrailingZeros8
```jule
fn TrailingZeros8(x: u8): int
```
Returns the number of trailing zero bits in x; the result is 8 for x == 0.

## TrailingZeros16
```jule
fn TrailingZeros16(x: u16): int
```
Returns the number of trailing zero bits in x; the result is 16 for x == 0.

## TrailingZeros32
```jule
fn TrailingZeros32(x: u32): int
```
Returns the number of trailing zero bits in x; the result is 32 for x == 0.

## TrailingZeros64
```jule
fn TrailingZeros64(x: u64): int
```
Returns the number of trailing zero bits in x; the result is 64 for x == 0.

## OnesCount
```jule
fn OnesCount(x: uint): int
```
Returns the number of one bits (&#34;population count&#34;) in x.

## OnesCount8
```jule
fn OnesCount8(x: u8): int
```
Returns the number of one bits (&#34;population count&#34;) in x.

## OnesCount16
```jule
fn OnesCount16(x: u16): int
```
Returns the number of one bits (&#34;population count&#34;) in x.

## OnesCount32
```jule
fn OnesCount32(x: u32): int
```
Returns the number of one bits (&#34;population count&#34;) in x.

## OnesCount64
```jule
fn OnesCount64(mut x: u64): int
```
Returns the number of one bits (&#34;population count&#34;) in x.

## RotateLeft
```jule
fn RotateLeft(x: uint, k: int): uint
```
Returns the value of x rotated left by (k mod UintSize) bits. To rotate x right by k bits, call rotate\_left(x, -k).

This function&#39;s execution time does not depend on the inputs.

## RotateLeft8
```jule
fn RotateLeft8(x: u8, k: int): u8
```
Returns the value of x rotated left by (k mod 8) bits. To rotate x right by k bits, call rotate\_left8(x, -k).

This function&#39;s execution time does not depend on the inputs.

## RotateLeft16
```jule
fn RotateLeft16(x: u16, k: int): u16
```
Returns the value of x rotated left by (k mod 16) bits. To rotate x right by k bits, call rotate\_left16(x, -k).

This function&#39;s execution time does not depend on the inputs.

## RotateLeft32
```jule
fn RotateLeft32(x: u32, k: int): u32
```
Returns the value of x rotated left by (k mod 32) bits. To rotate x right by k bits, call rotate\_left32(x, -k).

This function&#39;s execution time does not depend on the inputs.

## RotateLeft64
```jule
fn RotateLeft64(x: u64, k: int): u64
```
Returns the value of x rotated left by (k mod 64) bits. To rotate x right by k bits, call rotate\_left64(x, -k).

This function&#39;s execution time does not depend on the inputs.

## Reverse
```jule
fn Reverse(x: uint): uint
```
Returns the value of x with its bits in reversed order.

## Reverse8
```jule
fn Reverse8(x: u8): u8
```
Returns the value of x with its bits in reversed order.

## Reverse16
```jule
fn Reverse16(x: u16): u16
```
Returns the value of x with its bits in reversed order.

## Reverse32
```jule
fn Reverse32(mut x: u32): u32
```
Returns the value of x with its bits in reversed order.

## Reverse64
```jule
fn Reverse64(mut x: u64): u64
```
Returns the value of x with its bits in reversed order.

## ReverseBytes
```jule
fn ReverseBytes(x: uint): uint
```
Returns the value of x with its bytes in reversed order.

This function&#39;s execution time does not depend on the inputs.

## ReverseBytes16
```jule
fn ReverseBytes16(x: u16): u16
```
Returns the value of x with its bytes in reversed order.

This function&#39;s execution time does not depend on the inputs.

## ReverseBytes32
```jule
fn ReverseBytes32(mut x: u32): u32
```
Returns the value of x with its bytes in reversed order.

This function&#39;s execution time does not depend on the inputs.

## ReverseBytes64
```jule
fn ReverseBytes64(mut x: u64): u64
```
Returns the value of x with its bytes in reversed order.

This function&#39;s execution time does not depend on the inputs.

## Len
```jule
fn Len(x: uint): int
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

## Len8
```jule
fn Len8(x: u8): int
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

## Len16
```jule
fn Len16(mut x: u16): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

## Len32
```jule
fn Len32(mut x: u32): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

## Len64
```jule
fn Len64(mut x: u64): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

## Add
```jule
fn Add(x: uint, y: uint, carry: uint): (sum: uint, carryOut: uint)
```
Add returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Add32
```jule
fn Add32(x: u32, y: u32, carry: u32): (sum: u32, carryOut: u32)
```
Returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Add64
```jule
fn Add64(x: u64, y: u64, carry: u64): (sum: u64, carryOut: u64)
```
Returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Sub
```jule
fn Sub(x: uint, y: uint, borrow: uint): (diff: uint, borrowOut: uint)
```
Returns the difference of x, y and borrow: diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Sub32
```jule
fn Sub32(x: u32, y: u32, borrow: u32): (diff: u32, borrowOut: u32)
```
Returns the difference of x, y and borrow, diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Sub64
```jule
fn Sub64(x: u64, y: u64, borrow: u64): (diff: u64, borrowOut: u64)
```
Returns the difference of x, y and borrow: diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowOut output is guaranteed to be 0 or 1.

This function&#39;s execution time does not depend on the inputs.

## Mul
```jule
fn Mul(x: uint, y: uint): (hi: uint, lo: uint)
```
Returns the full-width product of x and y: (hi, lo) = x \* y with the product bits&#39; upper half returned in hi and the lower half returned in lo.

This function&#39;s execution time does not depend on the inputs.

## Mul32
```jule
fn Mul32(x: u32, y: u32): (hi: u32, lo: u32)
```
Returns the 64-bit product of x and y: (hi, lo) = x \* y with the product bits&#39; upper half returned in hi and the lower half returned in lo.

This function&#39;s execution time does not depend on the inputs.

## Mul64
```jule
fn Mul64(x: u64, y: u64): (hi: u64, lo: u64)
```
Returns the 128-bit product of x and y: (hi, lo) = x \* y with the product bits&#39; upper half returned in hi and the lower half returned in lo.

This function&#39;s execution time does not depend on the inputs.

## Div
```jule
fn Div(hi: uint, lo: uint, y: uint): (quo: uint, rem: uint)
```
Returns the quotient and remainder of (hi, lo) divided by y: quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits&#39; upper half in parameter hi and the lower half in parameter lo. div panics for y == 0 (division by zero) or y &lt;= hi (quotient overflow).

## Div32
```jule
fn Div32(hi: u32, lo: u32, y: u32): (quo: u32, rem: u32)
```
Returns the quotient and remainder of (hi, lo) divided by y: quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits&#39; upper half in parameter hi and the lower half in parameter lo. div32 panics for y == 0 (division by zero) or y &lt;= hi (quotient overflow).

## Div64
```jule
fn Div64(hi: u64, lo: u64, mut y: u64): (quo: u64, rem: u64)
```
Returns the quotient and remainder of (hi, lo) divided by y: quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits&#39; upper half in parameter hi and the lower half in parameter lo. div64 panics for y == 0 (division by zero) or y &lt;= hi (quotient overflow).

## Rem
```jule
fn Rem(hi: uint, lo: uint, y: uint): uint
```
Returns the remainder of (hi, lo) divided by y. rem panics for y == 0 (division by zero) but, unlike div, it doesn&#39;t panic on a quotient overflow.

## Rem32
```jule
fn Rem32(hi: u32, lo: u32, y: u32): u32
```
Returns the remainder of (hi, lo) divided by y. rem32 panics for y == 0 (division by zero) but, unlike div32, it doesn&#39;t panic on a quotient overflow.

## Rem64
```jule
fn Rem64(hi: u64, lo: u64, y: u64): u64
```
Returns the remainder of (hi, lo) divided by y. rem64 panics for y == 0 (division by zero) but, unlike div64, it doesn&#39;t panic on a quotient overflow.