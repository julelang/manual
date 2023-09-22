# std::math::bits
## Globals
### `const UINT_SIZE`
Is the size of a uint in bits. 

## Functions
```jule
fn leading_zeros(x: uint): int
```
Returns the number of leading zero bits in x; the result is UINT_SIZE for x == 0.

---

```jule
fn leading_zeros8(x: u8): int
```
Returns the number of leading zero bits in x; the result is 8 for x == 0.

---

```jule
fn leading_zeros16(x: u16): int
```
Returns the number of leading zero bits in x; the result is 16 for x == 0.

---

```jule
fn leading_zeros32(x: u32): int
```
Returns the number of leading zero bits in x; the result is 32 for x == 0.

---

```jule
fn leading_zeros64(x: u64): int
```
Returns the number of leading zero bits in x; the result is 64 for x == 0.

---

```jule
fn trailing_zeros(x: uint): int
```
Returns the number of trailing zero bits in x; the result is UINT_SIZE for x == 0.

---

```jule
fn trailing_zeros8(x: u8): int
```
Returns the number of trailing zero bits in x; the result is 8 for x == 0.

---

```jule
fn trailing_zeros16(x: u16): int
```
Returns the number of trailing zero bits in x; the result is 16 for x == 0.

---

```jule
fn trailing_zeros32(x: u32): int
```
Returns the number of trailing zero bits in x; the result is 32 for x == 0.

---

```jule
fn trailing_zeros64(x: u64): int
```
Returns the number of trailing zero bits in x; the result is 64 for x == 0.

---

```jule
fn ones_count(x: uint): int
```
Returns the number of one bits ("population count") in x.

---

```jule
fn ones_count8(x: u8): int
```
Returns the number of one bits ("population count") in x.

---

```jule
fn ones_count16(x: u16): int
```
Returns the number of one bits ("population count") in x.

---

```jule
fn ones_count32(x: u32): int
```
Returns the number of one bits ("population count") in x.

---

```jule
fn ones_count64(mut x: u64): int
```
Returns the number of one bits ("population count") in x.

---

```jule
fn rotate_left(x: uint, k: int): uint
```
Returns the value of x rotated left by (k mod UINT_SIZE) bits. To rotate x right by k bits, call rotate_left(x, -k).
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn rotate_left8(x: u8, k: int): u8
```
Returns the value of x rotated left by (k mod 8) bits. To rotate x right by k bits, call rotate_left8(x, -k).
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn rotate_left16(x: u16, k: int): u16
```
Returns the value of x rotated left by (k mod 16) bits. To rotate x right by k bits, call rotate_left16(x, -k).
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn rotate_left32(x: u32, k: int): u32
```
Returns the value of x rotated left by (k mod 32) bits. To rotate x right by k bits, call rotate_left32(x, -k).
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn rotate_left64(x: u64, k: int): u64
```
Returns the value of x rotated left by (k mod 64) bits. To rotate x right by k bits, call rotate_left64(x, -k).
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn reverse(x: uint): uint
```
Returns the value of x with its bits in reversed order.

---

```jule
fn reverse8(x: u8): u8
```
Returns the value of x with its bits in reversed order.

---

```jule
fn reverse16(x: u16): u16
```
Returns the value of x with its bits in reversed order.

---

```jule
fn reverse32(mut x: u32): u32
```
Returns the value of x with its bits in reversed order.

---

```jule
fn reverse64(mut x: u64): u64
```
Returns the value of x with its bits in reversed order.

---

```jule
fn reverse_bytes(x: uint): uint
```
Returns the value of x with its bytes in reversed order.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn reverse_bytes16(x: u16): u16
```
Returns the value of x with its bytes in reversed order.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn reverse_bytes32(mut x: u32): u32
```
Returns the value of x with its bytes in reversed order.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn reverse_bytes64(mut x: u64): u64
```
Returns the value of x with its bytes in reversed order.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn len(x: uint): int
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

---

```jule
fn len8(x: u8): int
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

---

```jule
fn len16(mut x: u16): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

---

```jule
fn len32(mut x: u32): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

---

```jule
fn len64(mut x: u64): (n: int)
```
Returns the minimum number of bits required to represent x; the result is 0 for x == 0.

---

```jule
fn add(x: uint, y: uint, carry: uint): (sum: uint, carry_out: uint)
```
Returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn add32(x: u32, y: u32, carry: u32): (sum: u32, carryout: u32)
```
Returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn add64(x: u64, y: u64, carry: u64): (sum: u64, carryout: u64)
```
Returns the sum with carry of x, y and carry: sum = x + y + carry. The carry input must be 0 or 1; otherwise the behavior is undefined. The carryout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn sub(x: uint, y: uint, borrow: uint): (diff: uint, borrow_out: uint)
```
Returns the difference of x, y and borrow, diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn sub32(x: u32, y: u32, borrow: u32): (diff: u32, borrowout: u32)
```
Returns the difference of x, y and borrow, diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn sub64(x: u64, y: u64, borrow: u64): (diff: u64, borrowout: u64)
```
Returns the difference of x, y and borrow: diff = x - y - borrow. The borrow input must be 0 or 1; otherwise the behavior is undefined. The borrowout output is guaranteed to be 0 or 1.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn mul(x: uint, y: uint): (hi: uint, lo: uint)
```
Returns the 64-bit product of x and y: (hi, lo) = x * y with the product bits' upper half returned in hi and the lower half returned in lo.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn mul32(x: u32, y: u32): (hi: u32, lo: u32)
```
Returns the 64-bit product of x and y: (hi, lo) = x * y with the product bits' upper half returned in hi and the lower half returned in lo.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn mul64(x: u64, y: u64): (hi: u64, lo: u64)
```
Returns the 128-bit product of x and y: (hi, lo) = x * y with the product bits' upper half returned in hi and the lower half returned in lo.
::: tip
This function's execution time does not depend on the inputs.
:::

---

```jule
fn div(hi: uint, lo: uint, y: uint): (quo: uint, rem: uint)
```
Returns the quotient and remainder of (hi, lo) divided by y:\
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper half in parameter hi and the lower half in parameter lo.\
div panics for y == 0 (division by zero) or y <= hi (quotient overflow).

---

```jule
fn div32(hi: u32, lo: u32, y: u32): (quo: u32, rem: u32)
```
Returns the quotient and remainder of (hi, lo) divided by y:\
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper half in parameter hi and the lower half in parameter lo.\
div32 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

---

```jule
fn div64(hi: u64, lo: u64, mut y: u64): (quo: u64, rem: u64)
```
Returns the quotient and remainder of (hi, lo) divided by y:\
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper half in parameter hi and the lower half in parameter lo.\
div64 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

---

```jule
fn rem(hi: uint, lo: uint, y: uint): uint
```
Returns the remainder of (hi, lo) divided by y. rem panics for y == 0 (division by zero) but, unlike div, it doesn't panic on a quotient overflow.

---

```jule
fn rem32(hi: u32, lo: u32, y: u32): u32
```
Returns the remainder of (hi, lo) divided by y. rem32 panics for y == 0 (division by zero) but, unlike div32, it doesn't panic on a quotient overflow.

---

```jule
fn rem64(hi: u64, lo: u64, y: u64): u64
```
Returns the remainder of (hi, lo) divided by y. rem64 panics for y == 0 (division by zero) but, unlike div64, it doesn't panic on a quotient overflow.