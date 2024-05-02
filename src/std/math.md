# std::math
## Globals
### `const E: f64`

---

### `const Pi: f64`

---

### `const Phi: f64`

---

### `const Sqrt2: f64`

---

### `const SqrtE: f64`

---

### `const SqrtPi: f64`

---

### `const SqrtPhi: f64`

---

### `const Ln2: f64`

---

### `const Log2E: f64`

---

### `const Ln10: f64`

---

### `const Log10E: f64`

## Functions
```jule
fn Abs(x: f64): f64
```
Returns the absolute value of x.

Special cases are:
- `Abs(±Inf) = +Inf`
- `Abs(NaN) = NaN`

---

```jule
fn Acosh(mut x: f64): f64
```
Returns the inverse hyperbolic cosine of x.

Special cases are:
- `Acosh(+Inf) = +Inf`
- `Acosh(x) = NaN if x < 1`
- `Acosh(NaN) = NaN`

---

```jule
fn Asin(mut x: f64): f64
```
Returns the arcsine, in radians, of x.

Special cases are:
- `Asin(±0) = ±0`
- `Asin(x) = NaN if x < -1 or x > 1`

---

```jule
fn Acos(x: f64): f64
```
Returns the arccosine, in radians, of x.

Special cases are:
- `Acos(x) = NaN if x < -1 or x > 1`

---

```jule
fn Asinh(mut x: f64): f64
```
Returns the inverse hyperbolic sine of x.

Special cases are:
- `Asinh(±0) = ±0`
- `Asinh(±Inf) = ±Inf`
- `Asinh(NaN) = NaN`

---

```jule
fn Atan(x: f64): f64
```
Returns the arctangent, in radians, of x.

Special cases are:
- `Atan(±0) = ±0`
- `Atan(±Inf) = ±Pi/2`

---

```jule
fn Atan2(y: f64, x: f64): f64
```
Returns the arc tangent of y/x, using the signs of the two to determine the quadrant of the return value.

Special cases are:
- `Atan2(y, NaN) = NaN`
- `Atan2(NaN, x) = NaN`
- `Atan2(+0, x>=0) = +0`
- `Atan2(-0, x>=0) = -0`
- `Atan2(+0, x<=-0) = +Pi`
- `Atan2(-0, x<=-0) = -Pi`
- `Atan2(y>0, 0) = +Pi/2`
- `Atan2(y<0, 0) = -Pi/2`
- `Atan2(+Inf, +Inf) = +Pi/4`
- `Atan2(-Inf, +Inf) = -Pi/4`
- `Atan2(+Inf, -Inf) = 3Pi/4`
- `Atan2(-Inf, -Inf) = -3Pi/4`
- `Atan2(y, +Inf) = 0`
- `Atan2(y>0, -Inf) = +Pi`
- `Atan2(y<0, -Inf) = -Pi`
- `Atan2(+Inf, x) = +Pi/2`
- `Atan2(-Inf, x) = -Pi/2`

---

```jule
fn Atanh(mut x: f64): f64
```
Returns the inverse hyperbolic tangent of x.

Special cases are:
- `Atanh(1) = +Inf`
- `Atanh(±0) = ±0`
- `Atanh(-1) = -Inf`
- `Atanh(x) = NaN if x < -1 or x > 1`
- `Atanh(NaN) = NaN`

---

```jule
fn NaN(): f64
```
Returns an IEEE 754 “not-a-number” value.

---

```jule
fn IsNaN(f: f64): bool
```
Reports whether f is an IEEE 754 “not-a-number” value.

---

```jule
fn IsNaN(f: f64): bool
```
Returns positive infinity if sign >= 0, negative infinity if !sign < 0.

---

```jule
fn IsInf(f: f64, sign: int): bool
```
Reports whether f is an infinity, according to sign.\
If sign > 0, IsInf reports whether f is positive infinity.\
If sign < 0, IsInf reports whether f is negative infinity.\
If sign == 0, IsInf reports whether f is either infinity. 

---

```jule
fn Cbrt(mut x: f64): f64
```
Returns the cube root of x.

Special cases are:
- `Cbrt(±0) = ±0`
- `Cbrt(±Inf) = ±Inf`
- `Cbrt(NaN) = NaN`

---

```jule
fn Copysign(f: f64, sign: f64): f64
```
Returns a value with the magnitude of f and the sign of sign.

---

```jule
fn Dim(x: f64, y: f64): f64
```
Returns the maximum of x-y or 0.

Special cases are:
- `Dim(+Inf, +Inf) = NaN`
- `Dim(-Inf, -Inf) = NaN`
- `Dim(x, NaN) = Dim(NaN, x) = NaN`

---

```jule
fn Max(x: f64, y: f64): f64
```
Returns the larger of x or y.

Special cases are:
- `Max(x, +Inf) = Max(+Inf, x) = +Inf`
- `Max(x, NaN) = Max(NaN, x) = NaN`
- `Max(+0, ±0) = Max(±0, +0) = +0`
- `Max(-0, -0) = -0`

---

```jule
fn Min(x: f64, y: f64): f64
```
Returns the smaller of x or y.

Special cases are:
- `Min(x, -Inf) = Min(-Inf, x) = -Inf`
- `Min(x, NaN) = Min(NaN, x) = NaN`
- `Min(-0, ±0) = Min(±0, -0) = -0`

---

```jule
fn Erf(mut x: f64): f64
```
Returns the error function of x.

Special cases are:
- `Erf(+Inf) = 1`
- `Erf(-Inf) = -1`
- `Erf(NaN) = NaN`

---

```jule
fn Erfinv(mut x: f64): f64
```
Returns the inverse error function of x.

Special cases are:
- `Erfinv(1) = +Inf`
- `Erfinv(-1) = -Inf`
- `Erfinv(x) = NaN if x < -1 or x > 1`
- `Erfinv(NaN) = NaN`

---

```jule
fn Erfcinv(x: f64): f64
```
Returns the inverse of Erfc(x).

Special cases are:
- `Erfcinv(0) = +Inf`
- `Erfcinv(2) = -Inf`
- `Erfcinv(x) = NaN if x < 0 or x > 2`
- `Erfcinv(NaN) = NaN`

---

```jule
fn Erfc(mut x: f64): f64
```
Returns the complementary error function of x.

Special cases are:
- `Erfc(+Inf) = 0`
- `Erfc(-Inf) = 2`
- `Erfc(NaN) = NaN`

---

```jule
fn Exp(x: f64): f64
```
Returns e**x, the base-e exponential of x.

Special cases are:
- `Exp(+Inf) = +Inf`
- `Exp(NaN) = NaN`

::: warning
- Very large values overflow to 0 or Inf.
- Very small values underflow to 1.
:::

---

```jule
fn Exp2(x: f64): f64
```
Returns 2**x, the base-2 exponential of x. Special cases are the same as Exp.

---

```jule
fn Expm1(mut x: f64): f64
```
Returns e**x - 1, the base-e exponential of x minus 1. It is more accurate than Exp(x) - 1 when x is near zero.

Special cases are:
- `Expm1(+Inf) = +Inf`
- `Expm1(-Inf) = -1`
- `Expm1(NaN) = NaN`

::: warning
Very large values overflow to -1 or Inf.
:::

---

```jule
fn Floor(x: f64): f64
```
Returns the greatest integer value less than or equal to x.

Special cases are:
- `Floor(±0) = ±0`
- `Floor(±Inf) = ±Inf`
- `Floor(NaN) = NaN`

---

```jule
fn Fma(x: f64, y: f64, z: f64): f64
```
Returns x * y + z, computed with only one rounding. (That is, Fma returns the fused multiply-add of x, y, and z.)

---

```jule
fn Frexp(mut f: f64): (Frac: f64, Exp: int)
```
Breaks f into a normalized fraction and an integral power of two. It returns Frac and Exp satisfying f == Frac × 2**Exp, with the absolute value of Frac in the interval `[½, 1)`.

Special cases are:
- `Frexp(±0) = ±0, 0`
- `Frexp(±Inf) = ±Inf, 0`
- `Frexp(NaN) = NaN, 0`

---

```jule
fn Gamma(x: f64): f64
```
Returns the Gamma function of x.

Special cases are:
- `Gamma(+Inf) = +Inf`
- `Gamma(+0) = +Inf`
- `Gamma(-0) = -Inf`
- `Gamma(x) = NaN for integer x < 0`
- `Gamma(-Inf) = NaN`
- `Gamma(NaN) = NaN`

---

```jule
fn Ceil(x: f64): f64
```
Returns the least integer value greater than or equal to x.

Special cases are:
- `Ceil(±0) = ±0`
- `Ceil(±Inf) = ±Inf`
- `Ceil(NaN) = NaN`

---

```jule
fn Trunc(x: f64): f64
```
Returns the integer value of x.

Special cases are:
- `Trunc(±0) = ±0`
- `Trunc(±Inf) = ±Inf`
- `Trunc(NaN) = NaN`

---

```jule
fn Round(x: f64): f64
```
Returns the nearest integer, rounding half away from zero.

Special cases are:
- `Round(±0) = ±0`
- `Round(±Inf) = ±Inf`
- `Round(NaN) = NaN`

---

```jule
fn RoundEven(x: f64): f64
```
Returns the nearest integer, rounding ties to even.

Special cases are:
- `RoundEven(±0) = ±0`
- `RoundEven(±Inf) = ±Inf`
- `RoundEven(NaN) = NaN`

---

```jule
fn Hypot(mut p: f64, mut q: f64): f64
```
Returns Sqrt(p*p + q*q), taking care to avoid unnecessary overflow and underflow.

Special cases are:
- `Hypot(±Inf, q) = +Inf`
- `Hypot(p, ±Inf) = +Inf`
- `Hypot(NaN, q) = NaN`
- `Hypot(p, NaN) = NaN`

---

```jule
fn J0(mut x: f64): f64
```
Returns the order-zero Bessel function of the first kind.

Special cases are:
- `J0(±Inf) = 0`
- `J0(0) = 1`
- `J0(NaN) = NaN`

---

```jule
fn Y0(x: f64): f64
```
Returns the order-zero Bessel function of the second kind.

Special cases are:
- `Y0(+Inf) = 0`
- `Y0(0) = -Inf`
- `Y0(x < 0) = NaN`
- `Y0(NaN) = NaN`

---

```jule
fn J1(mut x: f64): f64
```
Returns the order-one Bessel function of the first kind.

Special cases are:
- `J1(±Inf) = 0`
- `J1(NaN) = NaN`

---

```jule
fn Y1(x: f64): f64
```
Returns the order-one Bessel function of the second kind.

Special cases are:
- `Y1(+Inf) = 0`
- `Y1(0) = -Inf`
- `Y1(x < 0) = NaN`
- `Y1(NaN) = NaN`

---

```jule
fn Jn(mut n: int, mut x: f64): f64
```
Returns the order-n Bessel function of the first kind.

Special cases are:
- `Jn(n, ±Inf) = 0`
- `Jn(n, NaN) = NaN`

---

```jule
fn Yn(mut n: int, x: f64): f64
```
Returns the order-n Bessel function of the second kind.

Special cases are:
- `Yn(n, +Inf) = 0`
- `Yn(n ≥ 0, 0) = -Inf`
- `Yn(n < 0, 0) = +Inf if n is odd, -Inf if n is even`
- `Yn(n, x < 0) = NaN`
- `Yn(n, NaN) = NaN`

---

```jule
fn Ldexp(mut Frac: f64, mut Exp: int): f64
```
Is the inverse of Frexp. It returns Frac × 2**Exp.

Special cases are:
- `Ldexp(±0, Exp) = ±0`
- `Ldexp(±Inf, Exp) = ±Inf`
- `Ldexp(NaN, Exp) = NaN`

---

```jule
fn Lgamma(mut x: f64): (Lgamma: f64, sign: int)
```
Returns the natural logarithm and sign (-1 or +1) of Gamma(x).

Special cases are:
- `Lgamma(+Inf) = +Inf`
- `Lgamma(0) = Inf`
- `Lgamma(-integer) = +Inf`
- `Lgamma(-Inf) = -Inf`
- `Lgamma(NaN) = NaN`

---

```jule
fn Log(x: f64): f64
```
Returns the natural logarithm of x.

Special cases are:
- `Log(+Inf) = +Inf`
- `Log(0) = -Inf`
- `Log(x < 0) = NaN`
- `Log(NaN) = NaN`

---

```jule
fn Log1p(x: f64): f64
```
Returns the natural logarithm of 1 plus its argument x. It is more accurate than Log(1 + x) when x is near zero.

Special cases are:
- `Log1p(+Inf) = +Inf`
- `Log1p(±0) = ±0`
- `Log1p(-1) = -Inf`
- `Log1p(x < -1) = NaN`
- `Log1p(NaN) = NaN`

---

```jule
fn Log10(x: f64): f64
```
Returns the decimal logarithm of x. The special cases are the same as for log.

---

```jule
fn Log2(x: f64): f64
```
Returns the binary logarithm of x. The special cases are the same as for log.

---

```jule
fn Logb(x: f64): f64
```
Returns the binary exponent of x.

Special cases are:
- `Logb(±Inf) = +Inf`
- `Logb(0) = -Inf`
- `Logb(NaN) = NaN`

---

```jule
fn Ilogb(x: f64): int
```
Returns the binary exponent of x as an integer.

Special cases are:
- `Ilogb(±Inf) = i32.Max`
- `Ilogb(0) = i32.Min`
- `Ilogb(NaN) = i32.Max`

---

```jule
fn Mod(x: f64, mut y: f64): f64
```
Returns the floating-point Remainder of x/y. The magnitude of the result is less than y and its sign agrees with that of x.

Special cases are:
- `Mod(±Inf, y) = NaN`
- `Mod(NaN, y) = NaN`
- `Mod(x, 0) = NaN`
- `Mod(x, ±Inf) = x`
- `Mod(x, NaN) = NaN`

---

```jule
fn Modf(f: f64): (integer: f64, Frac: f64)
```
Returns integer and fractional floating-point numbers that sum to f. Both values have the same sign as f.

Special cases are:
- `Modf(±Inf) = ±Inf, NaN`
- `Modf(NaN) = NaN, NaN`

---

```jule
fn Nextafter32(x: f32, y: f32): (r: f32)
```
Returns the next representable f32 value after x towards y.

Special cases are:
- `NextAfter32(x, x) = x`
- `NextAfter32(NaN, y) = NaN`
- `NextAfter32(x, NaN) = NaN`

---

```jule
fn Nextafter(x: f64, y: f64): (r: f64)
```
Returns the next representable f64 value after x towards y.

Special cases are:
- `NextAfter(x, x) = x`
- `NextAfter(NaN, y) = NaN`
- `NextAfter(x, NaN) = NaN`

---

```jule
fn Pow(x: f64, y: f64): f64
```
Returns x**y, the base-x exponential of y.

Special cases are:
- `Pow(x, ±0) = 1 for any x`
- `Pow(1, y) = 1 for any y`
- `Pow(x, 1) = x for any x`
- `Pow(NaN, y) = NaN`
- `Pow(x, NaN) = NaN`
- `Pow(±0, y) = ±Inf for y an odd integer < 0`
- `Pow(±0, -Inf) = Inf`
- `Pow(±0, +Inf) = +0`
- `Pow(±0, y) = +Inf for finite y < 0 and not an odd integer`
- `Pow(±0, y) = ±0 for y an odd integer > 0`
- `Pow(±0, y) = +0 for finite y > 0 and not an odd integer`
- `Pow(-1, ±Inf) = 1`
- `Pow(x, +Inf) = +Inf for |x| > 1`
- `Pow(x, -Inf) = +0 for |x| > 1`
- `Pow(x, Inf) = +0 for |x| < 1`
- `Pow(x, -Inf) = +Inf for |x| < 1`
- `Pow(+Inf, y) = +Inf for y > 0`
- `Pow(+Inf, y) = +0 for y < 0`
- `Pow(-Inf, y) = Pow(-0, -y)`
- `Pow(x, y) = NaN for finite x < 0 and finite non-integer y`

---

```jule
fn Pow10(n: int): f64
```
Returns 10**n, the base-10 exponential of n.

Special cases are:
- `Pow10(n) = 0 for n < -323`
- `Pow10(n) = +Inf for n > 308`

---

```jule
fn Remainder(mut x: f64, mut y: f64): f64
```
Returns the IEEE 754 floating-point Remainder of x/y.

Special cases are:
- `Remainder(±Inf, y) = NaN`
- `Remainder(NaN, y) = NaN`
- `Remainder(x, 0) = NaN`
- `Remainder(x, ±Inf) = x`
- `Remainder(x, NaN) = NaN`

---

```jule
fn Signbit(x: f64): bool
```
Reports whether x is negative or negative zero.

---

```jule
fn Cos(mut x: f64): f64
```
Returns the cosine of the radian argument x.

Special cases are:
- `Cos(±Inf) = NaN`
- `Cos(NaN) = NaN`

---

```jule
fn Sin(mut x: f64): f64
```
Returns the sine of the radian argument x.

Special cases are:
- `Sin(±0) = ±0`
- `Sin(±Inf) = NaN`
- `Sin(NaN) = NaN`

---

```jule
fn Sincos(mut x: f64): (Sin: f64, Cos: f64)
```
Returns Sin(x), Cos(x).

Special cases are:
- `Sincos(±0) = ±0, 1`
- `Sincos(±Inf) = NaN, NaN`
- `Sincos(NaN) = NaN, NaN`

---

```jule
fn Sinh(mut x: f64): f64
```
Returns the hyperbolic sine of x.

Special cases are:
- `Sinh(±0) = ±0`
- `Sinh(±Inf) = ±Inf`
- `Sinh(NaN) = NaN`

---

```jule
fn Cosh(x: f64): f64
```
Returns the hyperbolic cosine of x.

Special cases are:
- `Cosh(±0) = 1`
- `Cosh(±Inf) = +Inf`
- `Cosh(NaN) = NaN`

---

```jule
fn Sqrt(x: f64): f64
```
Returns the square root of x.

Special cases are:
- `Sqrt(+Inf) = +Inf`
- `Sqrt(±0) = ±0`
- `Sqrt(x < 0) = NaN`
- `Sqrt(NaN) = NaN`

---

```jule
fn Tan(mut x: f64): f64
```
Returns the tangent of the radian argument x.

Special cases are:
- `Tan(±0) = ±0`
- `Tan(±Inf) = NaN`
- `Tan(NaN) = NaN`

---

```jule
fn Tanh(x: f64): f64
```
Returns the hyperbolic tangent of x.

Special cases are:
- `Tanh(±0) = ±0`
- `Tanh(±Inf) = ±1`
- `Tanh(NaN) = NaN`

---

```jule
fn F32Bits(f: f32): u32
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. `F32Bits(F32FromBits(x)) == x`.

---

```jule
fn F32FromBits(b: u32): f32
```
Returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position. `F32FromBits(F32Bits(x)) == x`.

---

```jule
fn F64Bits(f: f64): u64
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. `F64Bits(F64FromBits(x)) == x`.

---

```jule
fn f64FromBits(b: u64): f64
```
Returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position. `F64FromBits(F64Bits(x)) == x`. 