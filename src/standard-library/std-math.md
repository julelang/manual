# std::math
## Globals
### `const E: f64`

---

### `const PI: f64`

---

### `const PHI: f64`

---

### `const SQRT2: f64`

---

### `const SQRT_E: f64`

---

### `const SQRT_PI: f64`

---

### `const SQRT_PHI: f64`

---

### `const LN2: f64`

---

### `const LOG_2E: f64`

---

### `const LN10: f64`

---

### `const LOG_10E: f64`

## Functions
```jule
fn abs(x: f64): f64
```
Returns the absolute value of x.

Special cases are:
- `abs(±inf) = +inf`
- `abs(nan) = nan`

---

```jule
fn acosh(mut x: f64): f64
```
Returns the inverse hyperbolic cosine of x.

Special cases are:
- `acosh(+inf) = +inf`
- `acosh(x) = nan if x < 1`
- `acosh(nan) = nan`

---

```jule
fn asin(mut x: f64): f64
```
Returns the arcsine, in radians, of x.

Special cases are:
- `asin(±0) = ±0`
- `asin(x) = nan if x < -1 or x > 1`

---

```jule
fn acos(x: f64): f64
```
Returns the arccosine, in radians, of x.

Special cases are:
- `acos(x) = nan if x < -1 or x > 1`

---

```jule
fn asinh(mut x: f64): f64
```
Returns the inverse hyperbolic sine of x.

Special cases are:
- `asinh(±0) = ±0`
- `asinh(±inf) = ±inf`
- `asinh(nan) = nan`

---

```jule
fn atan(x: f64): f64
```
Returns the arctangent, in radians, of x.

Special cases are:
- `atan(±0) = ±0`
- `atan(±inf) = ±PI/2`

---

```jule
fn atan2(y: f64, x: f64): f64
```
Returns the arc tangent of y/x, using the signs of the two to determine the quadrant of the return value.

Special cases are:
- `atan2(y, nan) = nan`
- `atan2(nan, x) = nan`
- `atan2(+0, x>=0) = +0`
- `atan2(-0, x>=0) = -0`
- `atan2(+0, x<=-0) = +PI`
- `atan2(-0, x<=-0) = -PI`
- `atan2(y>0, 0) = +PI/2`
- `atan2(y<0, 0) = -PI/2`
- `atan2(+inf, +inf) = +PI/4`
- `atan2(-inf, +inf) = -PI/4`
- `atan2(+inf, -inf) = 3PI/4`
- `atan2(-inf, -inf) = -3PI/4`
- `atan2(y, +inf) = 0`
- `atan2(y>0, -inf) = +PI`
- `atan2(y<0, -inf) = -PI`
- `atan2(+inf, x) = +PI/2`
- `atan2(-inf, x) = -PI/2`

---

```jule
fn atanh(mut x: f64): f64
```
Returns the inverse hyperbolic tangent of x.

Special cases are:
- `atanh(1) = +inf`
- `atanh(±0) = ±0`
- `atanh(-1) = -inf`
- `atanh(x) = nan if x < -1 or x > 1`
- `atanh(nan) = nan`

---

```jule
fn nan(): f64
```
Returns an IEEE 754 “not-a-number” value.

---

```jule
fn is_nan(f: f64): bool
```
Reports whether f is an IEEE 754 “not-a-number” value.

---

```jule
fn is_nan(f: f64): bool
```
Returns positive infinity if sign >= 0, negative infinity if !sign < 0.

---

```jule
fn is_inf(f: f64, sign: int): bool
```
Reports whether f is an infinity, according to sign.\
If sign > 0, is_inf reports whether f is positive infinity.\
If sign < 0, is_inf reports whether f is negative infinity.\
If sign == 0, is_inf reports whether f is either infinity. 

---

```jule
fn cbrt(mut x: f64): f64
```
Returns the cube root of x.

Special cases are:
- `cbrt(±0) = ±0`
- `cbrt(±inf) = ±inf`
- `cbrt(nan) = nan`

---

```jule
fn copysign(f: f64, sign: f64): f64
```
Returns a value with the magnitude of f and the sign of sign.

---

```jule
fn dim(x: f64, y: f64): f64
```
Returns the maximum of x-y or 0.

Special cases are:
- `dim(+inf, +inf) = nan`
- `dim(-inf, -inf) = nan`
- `dim(x, nan) = dim(nan, x) = nan`

---

```jule
fn max(x: f64, y: f64): f64
```
Returns the larger of x or y.

Special cases are:
- `max(x, +inf) = max(+inf, x) = +inf`
- `max(x, nan) = max(nan, x) = nan`
- `max(+0, ±0) = max(±0, +0) = +0`
- `max(-0, -0) = -0`

---

```jule
fn min(x: f64, y: f64): f64
```
Returns the smaller of x or y.

Special cases are:
- `min(x, -inf) = min(-inf, x) = -inf`
- `min(x, nan) = min(nan, x) = nan`
- `min(-0, ±0) = min(±0, -0) = -0`

---

```jule
fn erf(mut x: f64): f64
```
Returns the error function of x.

Special cases are:
- `erf(+inf) = 1`
- `erf(-inf) = -1`
- `erf(nan) = nan`

---

```jule
fn erfinv(mut x: f64): f64
```
Returns the inverse error function of x.

Special cases are:
- `erfinv(1) = +inf`
- `erfinv(-1) = -inf`
- `erfinv(x) = nan if x < -1 or x > 1`
- `erfinv(nan) = nan`

---

```jule
fn erfcinv(x: f64): f64
```
Returns the inverse of erfc(x).

Special cases are:
- `erfcinv(0) = +inf`
- `erfcinv(2) = -inf`
- `erfcinv(x) = nan if x < 0 or x > 2`
- `erfcinv(nan) = nan`

---

```jule
fn erfc(mut x: f64): f64
```
Returns the complementary error function of x.

Special cases are:
- `erfc(+inf) = 0`
- `erfc(-inf) = 2`
- `erfc(nan) = nan`

---

```jule
fn exp(x: f64): f64
```
Returns e**x, the base-e exponential of x.

Special cases are:
- `exp(+inf) = +inf`
- `exp(nan) = nan`

::: warning
- Very large values overflow to 0 or inf.
- Very small values underflow to 1.
:::

---

```jule
fn exp2(x: f64): f64
```
Returns 2**x, the base-2 exponential of x. Special cases are the same as exp.

---

```jule
fn expm1(mut x: f64): f64
```
Returns e**x - 1, the base-e exponential of x minus 1. It is more accurate than exp(x) - 1 when x is near zero.

Special cases are:
- `expm1(+inf) = +inf`
- `expm1(-inf) = -1`
- `expm1(nan) = nan`

::: warning
Very large values overflow to -1 or inf.
:::

---

```jule
fn floor(x: f64): f64
```
Returns the greatest integer value less than or equal to x.

Special cases are:
- `floor(±0) = ±0`
- `floor(±inf) = ±inf`
- `floor(nan) = nan`

---

```jule
fn fma(x: f64, y: f64, z: f64): f64
```
Returns x * y + z, computed with only one rounding. (That is, fma returns the fused multiply-add of x, y, and z.)

---

```jule
fn frexp(mut f: f64): (frac: f64, exp: int)
```
Breaks f into a normalized fraction and an integral power of two. It returns frac and exp satisfying f == frac × 2**exp, with the absolute value of frac in the interval `[½, 1)`.

Special cases are:
- `frexp(±0) = ±0, 0`
- `frexp(±inf) = ±inf, 0`
- `frexp(nan) = nan, 0`

---

```jule
fn gamma(x: f64): f64
```
Returns the gamma function of x.

Special cases are:
- `gamma(+inf) = +inf`
- `gamma(+0) = +inf`
- `gamma(-0) = -inf`
- `gamma(x) = nan for integer x < 0`
- `gamma(-inf) = nan`
- `gamma(nan) = nan`

---

```jule
fn ceil(x: f64): f64
```
Returns the least integer value greater than or equal to x.

Special cases are:
- `ceil(±0) = ±0`
- `ceil(±inf) = ±inf`
- `ceil(nan) = nan`

---

```jule
fn trunc(x: f64): f64
```
Returns the integer value of x.

Special cases are:
- `trunc(±0) = ±0`
- `trunc(±inf) = ±inf`
- `trunc(nan) = nan`

---

```jule
fn round(x: f64): f64
```
Returns the nearest integer, rounding half away from zero.

Special cases are:
- `round(±0) = ±0`
- `round(±inf) = ±inf`
- `round(nan) = nan`

---

```jule
fn round_even(x: f64): f64
```
Returns the nearest integer, rounding ties to even.

Special cases are:
- `round_even(±0) = ±0`
- `round_even(±inf) = ±inf`
- `round_even(nan) = nan`

---

```jule
fn hypot(mut p: f64, mut q: f64): f64
```
Returns sqrt(p*p + q*q), taking care to avoid unnecessary overflow and underflow.

Special cases are:
- `hypot(±inf, q) = +inf`
- `hypot(p, ±inf) = +inf`
- `hypot(nan, q) = nan`
- `hypot(p, nan) = nan`

---

```jule
fn j0(mut x: f64): f64
```
Returns the order-zero Bessel function of the first kind.

Special cases are:
- `j0(±inf) = 0`
- `j0(0) = 1`
- `j0(nan) = nan`

---

```jule
fn y0(x: f64): f64
```
Returns the order-zero Bessel function of the second kind.

Special cases are:
- `y0(+inf) = 0`
- `y0(0) = -inf`
- `y0(x < 0) = nan`
- `y0(nan) = nan`

---

```jule
fn j1(mut x: f64): f64
```
Returns the order-one Bessel function of the first kind.

Special cases are:
- `j1(±inf) = 0`
- `j1(nan) = nan`

---

```jule
fn y1(x: f64): f64
```
Returns the order-one Bessel function of the second kind.

Special cases are:
- `y1(+inf) = 0`
- `y1(0) = -inf`
- `y1(x < 0) = nan`
- `y1(nan) = nan`

---

```jule
fn jn(mut n: int, mut x: f64): f64
```
Returns the order-n Bessel function of the first kind.

Special cases are:
- `jn(n, ±inf) = 0`
- `jn(n, nan) = nan`

---

```jule
fn yn(mut n: int, x: f64): f64
```
Returns the order-n Bessel function of the second kind.

Special cases are:
- `yn(n, +inf) = 0`
- `yn(n ≥ 0, 0) = -inf`
- `yn(n < 0, 0) = +inf if n is odd, -inf if n is even`
- `yn(n, x < 0) = nan`
- `yn(n, nan) = nan`

---

```jule
fn ldexp(mut frac: f64, mut exp: int): f64
```
Is the inverse of frexp. It returns frac × 2**exp.

Special cases are:
- `ldexp(±0, exp) = ±0`
- `ldexp(±inf, exp) = ±inf`
- `ldexp(nan, exp) = nan`

---

```jule
fn lgamma(mut x: f64): (lgamma: f64, sign: int)
```
Returns the natural logarithm and sign (-1 or +1) of gamma(x).

Special cases are:
- `lgamma(+inf) = +inf`
- `lgamma(0) = inf`
- `lgamma(-integer) = +inf`
- `lgamma(-inf) = -inf`
- `lgamma(nan) = nan`

---

```jule
fn log(x: f64): f64
```
Returns the natural logarithm of x.

Special cases are:
- `log(+inf) = +inf`
- `log(0) = -inf`
- `log(x < 0) = nan`
- `log(nan) = nan`

---

```jule
fn log1p(x: f64): f64
```
Returns the natural logarithm of 1 plus its argument x. It is more accurate than log(1 + x) when x is near zero.

Special cases are:
- `log1p(+inf) = +inf`
- `log1p(±0) = ±0`
- `log1p(-1) = -inf`
- `log1p(x < -1) = nan`
- `log1p(nan) = nan`

---

```jule
fn log10(x: f64): f64
```
Returns the decimal logarithm of x. The special cases are the same as for log.

---

```jule
fn log2(x: f64): f64
```
Returns the binary logarithm of x. The special cases are the same as for log.

---

```jule
fn logb(x: f64): f64
```
Returns the binary exponent of x.

Special cases are:
- `logb(±inf) = +inf`
- `logb(0) = -inf`
- `logb(nan) = nan`

---

```jule
fn ilogb(x: f64): int
```
Returns the binary exponent of x as an integer.

Special cases are:
- `ilogb(±inf) = i32.max`
- `ilogb(0) = i32.min`
- `ilogb(nan) = i32.max`

---

```jule
fn mod(x: f64, mut y: f64): f64
```
Returns the floating-point remainder of x/y. The magnitude of the result is less than y and its sign agrees with that of x.

Special cases are:
- `mod(±inf, y) = nan`
- `mod(nan, y) = nan`
- `mod(x, 0) = nan`
- `mod(x, ±inf) = x`
- `mod(x, nan) = nan`

---

```jule
fn modf(f: f64): (integer: f64, frac: f64)
```
Returns integer and fractional floating-point numbers that sum to f. Both values have the same sign as f.

Special cases are:
- `modf(±inf) = ±inf, nan`
- `modf(nan) = nan, nan`

---

```jule
fn nextafter32(x: f32, y: f32): (r: f32)
```
Returns the next representable f32 value after x towards y.

Special cases are:
- `nextafter32(x, x) = x`
- `nextafter32(nan, y) = nan`
- `nextafter32(x, nan) = nan`

---

```jule
fn nextafter(x: f64, y: f64): (r: f64)
```
Returns the next representable f64 value after x towards y.

Special cases are:
- `nextafter(x, x) = x`
- `nextafter(nan, y) = nan`
- `nextafter(x, nan) = nan`

---

```jule
fn pow(x: f64, y: f64): f64
```
Returns x**y, the base-x exponential of y.

Special cases are:
- `pow(x, ±0) = 1 for any x`
- `pow(1, y) = 1 for any y`
- `pow(x, 1) = x for any x`
- `pow(nan, y) = nan`
- `pow(x, nan) = nan`
- `pow(±0, y) = ±inf for y an odd integer < 0`
- `pow(±0, -inf) = inf`
- `pow(±0, +inf) = +0`
- `pow(±0, y) = +inf for finite y < 0 and not an odd integer`
- `pow(±0, y) = ±0 for y an odd integer > 0`
- `pow(±0, y) = +0 for finite y > 0 and not an odd integer`
- `pow(-1, ±inf) = 1`
- `pow(x, +inf) = +inf for |x| > 1`
- `pow(x, -inf) = +0 for |x| > 1`
- `pow(x, inf) = +0 for |x| < 1`
- `pow(x, -inf) = +inf for |x| < 1`
- `pow(+inf, y) = +inf for y > 0`
- `pow(+inf, y) = +0 for y < 0`
- `pow(-inf, y) = pow(-0, -y)`
- `pow(x, y) = nan for finite x < 0 and finite non-integer y`

---

```jule
fn pow10(n: int): f64
```
Returns 10**n, the base-10 exponential of n.

Special cases are:
- `pow10(n) = 0 for n < -323`
- `pow10(n) = +inf for n > 308`

---

```jule
fn remainder(mut x: f64, mut y: f64): f64
```
Returns the IEEE 754 floating-point remainder of x/y.

Special cases are:
- `remainder(±inf, y) = nan`
- `remainder(nan, y) = nan`
- `remainder(x, 0) = nan`
- `remainder(x, ±inf) = x`
- `remainder(x, nan) = nan`

---

```jule
fn signbit(x: f64): bool
```
Reports whether x is negative or negative zero.

---

```jule
fn cos(mut x: f64): f64
```
Returns the cosine of the radian argument x.

Special cases are:
- `cos(±inf) = nan`
- `cos(nan) = nan`

---

```jule
fn sin(mut x: f64): f64
```
Returns the sine of the radian argument x.

Special cases are:
- `sin(±0) = ±0`
- `sin(±inf) = nan`
- `sin(nan) = nan`

---

```jule
fn sincos(mut x: f64): (sin: f64, cos: f64)
```
Returns sin(x), cos(x).

Special cases are:
- `sincos(±0) = ±0, 1`
- `sincos(±inf) = nan, nan`
- `sincos(nan) = nan, nan`

---

```jule
fn sinh(mut x: f64): f64
```
Returns the hyperbolic sine of x.

Special cases are:
- `sinh(±0) = ±0`
- `sinh(±inf) = ±inf`
- `sinh(nan) = nan`

---

```jule
fn cosh(x: f64): f64
```
Returns the hyperbolic cosine of x.

Special cases are:
- `cosh(±0) = 1`
- `cosh(±inf) = +inf`
- `cosh(nan) = nan`

---

```jule
fn sqrt(x: f64): f64
```
Returns the square root of x.

Special cases are:
- `sqrt(+inf) = +inf`
- `sqrt(±0) = ±0`
- `sqrt(x < 0) = nan`
- `sqrt(nan) = nan`

---

```jule
fn tan(mut x: f64): f64
```
Returns the tangent of the radian argument x.

Special cases are:
- `tan(±0) = ±0`
- `tan(±inf) = nan`
- `tan(nan) = nan`

---

```jule
fn tanh(x: f64): f64
```
Returns the hyperbolic tangent of x.

Special cases are:
- `tanh(±0) = ±0`
- `tanh(±inf) = ±1`
- `tanh(nan) = nan`

---

```jule
fn f32_bits(f: f32): u32
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. `f32_bits(f32_from_bits(x)) == x`.

---

```jule
fn f32_from_bits(b: u32): f32
```
Returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position. `f32_from_bits(f32_bits(x)) == x`.

---

```jule
fn f64_bits(f: f64): u64
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position. `f64_bits(f64_from_bits(x)) == x`.

---

```jule
fn f64_from_bits(b: u64): f64
```
Returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position. `f64_from_bits(f64_bits(x)) == x`. 