# std/math

## Index

[Variables](#variables)\
[fn Abs\(x: f64\): f64](#abs)\
[fn Acosh\(x: f64\): f64](#acosh)\
[fn Asin\(mut x: f64\): f64](#asin)\
[fn Acos\(x: f64\): f64](#acos)\
[fn Asinh\(mut x: f64\): f64](#asinh)\
[fn Atan\(x: f64\): f64](#atan)\
[fn Atan2\(y: f64, x: f64\): f64](#atan2)\
[fn Atanh\(mut x: f64\): f64](#atanh)\
[fn NaN\(\): f64](#nan)\
[fn IsNaN\(f: f64\): bool](#isnan)\
[fn Inf\(sign: int\): f64](#inf)\
[fn IsInf\(f: f64, sign: int\): bool](#isinf)\
[fn Cbrt\(mut x: f64\): f64](#cbrt)\
[fn Copysign\(f: f64, sign: f64\): f64](#copysign)\
[fn Dim\(x: f64, y: f64\): f64](#dim)\
[fn Max\(x: f64, y: f64\): f64](#max)\
[fn Min\(x: f64, y: f64\): f64](#min)\
[fn Erf\(mut x: f64\): f64](#erf)\
[fn Erfc\(mut x: f64\): f64](#erfc)\
[fn Erfinv\(mut x: f64\): f64](#erfinv)\
[fn Erfcinv\(x: f64\): f64](#erfcinv)\
[fn Exp\(x: f64\): f64](#exp)\
[fn Exp2\(x: f64\): f64](#exp2)\
[fn Expm1\(mut x: f64\): f64](#expm1)\
[fn Floor\(x: f64\): f64](#floor)\
[fn Ceil\(x: f64\): f64](#ceil)\
[fn Trunc\(x: f64\): f64](#trunc)\
[fn Round\(x: f64\): f64](#round)\
[fn RoundEven\(x: f64\): f64](#roundeven)\
[fn FMA\(x: f64, y: f64, z: f64\): f64](#fma)\
[fn Frexp\(mut f: f64\): \(frac: f64, exp: int\)](#frexp)\
[fn Gamma\(mut x: f64\): f64](#gamma)\
[fn Hypot\(mut p: f64, mut q: f64\): f64](#hypot)\
[fn J0\(mut x: f64\): f64](#j0)\
[fn Y0\(x: f64\): f64](#y0)\
[fn J1\(mut x: f64\): f64](#j1)\
[fn Y1\(x: f64\): f64](#y1)\
[fn Jn\(mut n: int, mut x: f64\): f64](#jn)\
[fn Yn\(mut n: int, x: f64\): f64](#yn)\
[fn Ldexp\(mut frac: f64, mut exp: int\): f64](#ldexp)\
[fn Lgamma\(mut x: f64\): \(lgamma: f64, sign: int\)](#lgamma)\
[fn Log\(x: f64\): f64](#log)\
[fn Log10\(x: f64\): f64](#log10)\
[fn Log2\(x: f64\): f64](#log2)\
[fn Log1p\(x: f64\): f64](#log1p)\
[fn Logb\(x: f64\): f64](#logb)\
[fn Ilogb\(x: f64\): int](#ilogb)\
[fn Mod\(x: f64, mut y: f64\): f64](#mod)\
[fn Modf\(f: f64\): \(i: f64, frac: f64\)](#modf)\
[fn Nextafter32\(x: f32, y: f32\): \(r: f32\)](#nextafter32)\
[fn Nextafter\(x: f64, y: f64\): \(r: f64\)](#nextafter)\
[fn Pow\(x: f64, y: f64\): f64](#pow)\
[fn Pow10\(n: int\): f64](#pow10)\
[fn Remainder\(mut x: f64, mut y: f64\): f64](#remainder)\
[fn Signbit\(x: f64\): bool](#signbit)\
[fn Cos\(mut x: f64\): f64](#cos)\
[fn Sin\(mut x: f64\): f64](#sin)\
[fn Sincos\(mut x: f64\): \(sin: f64, cos: f64\)](#sincos)\
[fn Sinh\(mut x: f64\): f64](#sinh)\
[fn Cosh\(mut x: f64\): f64](#cosh)\
[fn Sqrt\(x: f64\): f64](#sqrt)\
[fn Tan\(mut x: f64\): f64](#tan)\
[fn Tanh\(x: f64\): f64](#tanh)\
[fn F32bits\(f: f32\): u32](#f32bits)\
[fn F32frombits\(b: u32\): f32](#f32frombits)\
[fn F64bits\(f: f64\): u64](#f64bits)\
[fn F64frombits\(b: u64\): f64](#f64frombits)

## Variables

```jule
const (
	E   = 2.71828182845904523536028747135266249775724709369995957496696763 // https://oeis.org/A001113
	Pi  = 3.14159265358979323846264338327950288419716939937510582097494459 // https://oeis.org/A000796
	Phi = 1.61803398874989484820458683436563811772030917980576286213544862 // https://oeis.org/A001622

	Sqrt2   = 1.41421356237309504880168872420969807856967187537694807317667974 // https://oeis.org/A002193
	SqrtE   = 1.64872127070012814684865078781416357165377610071014801157507931 // https://oeis.org/A019774
	SqrtPi  = 1.77245385090551602729816748334114518279754945612238712821380779 // https://oeis.org/A002161
	SqrtPhi = 1.27201964951406896425242246173749149171560804184009624861664038 // https://oeis.org/A139339

	Ln2    = 0.693147180559945309417232121458176568075500134360255254120680009 // https://oeis.org/A002162
	Log2E  = 1 / Ln2
	Ln10   = 2.30258509299404568401799145468436420760110148862877297603332790 // https://oeis.org/A002392
	Log10E = 1 / Ln10
)
```


---

```jule
let M_PI4: [...]u64 = [ ... ]
```
Is the binary digits of 4/pi as a u64 array, that is, 4/pi = Sum M\_PI4\[i\]\*2^\(\-64\*i\) 19 64\-bit digits and the leading one bit give 1217 bits of precision to handle the largest possible f64 exponent\.

## Abs
```jule
fn Abs(x: f64): f64
```
Returns the absolute value of x\.

Special cases are:<br>
```
Abs(±Inf) = +Inf
Abs(NaN) = NaN
```


## Acosh
```jule
fn Acosh(x: f64): f64
```
Returns the inverse hyperbolic cosine of x\.

Special cases are:<br>
```
Acosh(+Inf) = +Inf
Acosh(x) = NaN if x < 1
Acosh(NaN) = NaN
```


## Asin
```jule
fn Asin(mut x: f64): f64
```
Returns the arcsine, in radians, of x\.

Special cases are:<br>
```
Asin(±0) = ±0
Asin(x) = NaN if x < -1 or x > 1
```


## Acos
```jule
fn Acos(x: f64): f64
```
Returns the arccosine, in radians, of x\.

Special case is:<br>
```
Acos(x) = NaN if x < -1 or x > 1
```


## Asinh
```jule
fn Asinh(mut x: f64): f64
```
Returns the inverse hyperbolic sine of x\.

Special cases are:<br>
```
Asinh(±0) = ±0
Asinh(±Inf) = ±Inf
Asinh(NaN) = NaN
```


## Atan
```jule
fn Atan(x: f64): f64
```
Returns the arctangent, in radians, of x\.

Special cases are:<br>
```
Atan(±0) = ±0
Atan(±Inf) = ±Pi/2
```


## Atan2
```jule
fn Atan2(y: f64, x: f64): f64
```
Returns the arc tangent of y/x, using the signs of the two to determine the quadrant of the return value\.

Special cases are \(in order\):<br>
```
Atan2(y, NaN) = NaN
Atan2(NaN, x) = NaN
Atan2(+0, x>=0) = +0
Atan2(-0, x>=0) = -0
Atan2(+0, x<=-0) = +Pi
Atan2(-0, x<=-0) = -Pi
Atan2(y>0, 0) = +Pi/2
Atan2(y<0, 0) = -Pi/2
Atan2(+Inf, +Inf) = +Pi/4
Atan2(-Inf, +Inf) = -Pi/4
Atan2(+Inf, -Inf) = 3Pi/4
Atan2(-Inf, -Inf) = -3Pi/4
Atan2(y, +Inf) = 0
Atan2(y>0, -Inf) = +Pi
Atan2(y<0, -Inf) = -Pi
Atan2(+Inf, x) = +Pi/2
Atan2(-Inf, x) = -Pi/2
```


## Atanh
```jule
fn Atanh(mut x: f64): f64
```
Returns the inverse hyperbolic tangent of x\.

Special cases are:<br>
```
Atanh(1) = +Inf
Atanh(±0) = ±0
Atanh(-1) = -Inf
Atanh(x) = NaN if x < -1 or x > 1
Atanh(NaN) = NaN
```


## NaN
```jule
fn NaN(): f64
```
Returns an IEEE 754 “not\-a\-number” value\.

## IsNaN
```jule
fn IsNaN(f: f64): bool
```
Reports whether f is an IEEE 754 “not\-a\-number” value\.

## Inf
```jule
fn Inf(sign: int): f64
```
Returns positive infinity if sign &gt;= 0, negative infinity if \!sign &lt; 0\.

## IsInf
```jule
fn IsInf(f: f64, sign: int): bool
```
Reports whether f is an infinity, according to sign\. If sign &gt; 0, IsInf reports whether f is positive infinity\. If sign &lt; 0, IsInf reports whether f is negative infinity\. If sign == 0, IsInf reports whether f is either infinity\.

## Cbrt
```jule
fn Cbrt(mut x: f64): f64
```
Returns the cube root of x\.

Special cases are:<br>
```
Cbrt(±0) = ±0
Cbrt(±Inf) = ±Inf
Cbrt(NaN) = NaN
```


## Copysign
```jule
fn Copysign(f: f64, sign: f64): f64
```
Returns a value with the magnitude of f and the sign of sign\.

## Dim
```jule
fn Dim(x: f64, y: f64): f64
```
Returns the maximum of x\-y or 0\.

Special cases are:<br>
```
Dim(+Inf, +Inf) = NaN
Dim(-Inf, -Inf) = NaN
Dim(x, NaN) = Dim(NaN, x) = NaN
```


## Max
```jule
fn Max(x: f64, y: f64): f64
```
Returns the larger of x or y\.

Special cases are:<br>
```
Max(x, +Inf) = Max(+Inf, x) = +Inf
Max(x, NaN)  = Max(NaN, x) = NaN
Max(+0, ±0)  = Max(±0, +0) = +0
Max(-0, -0)  = -0
```


## Min
```jule
fn Min(x: f64, y: f64): f64
```
Returns the smaller of x or y\.

Special cases are:<br>
```
Min(x, -Inf) = Min(-Inf, x) = -Inf
Min(x, NaN)  = Min(NaN, x) = NaN
Min(-0, ±0)  = Min(±0, -0) = -0
```


## Erf
```jule
fn Erf(mut x: f64): f64
```
Returns the error function of x\.

Special cases are:<br>
```
Erf(Inf) = 1
Erf(-Inf) = -1
Erf(NaN) = NaN
```


## Erfc
```jule
fn Erfc(mut x: f64): f64
```
Returns the complementary error function of x\.

Special cases are:<br>
```
Erfc(Inf) = 0
Erfc(-Inf) = 2
Erfc(NaN) = NaN
```


## Erfinv
```jule
fn Erfinv(mut x: f64): f64
```
Returns the inverse error function of x\.

Special cases are:<br>
```
Erfinv(1) = +Inf
Erfinv(-1) = -Inf
Erfinv(x) = NaN if x < -1 or x > 1
Erfinv(NaN) = NaN
```


## Erfcinv
```jule
fn Erfcinv(x: f64): f64
```
Returns the inverse of erfc\(x\)\.

Special cases are:<br>
```
Erfcinv(0) = +Inf
Erfcinv(2) = -Inf
Erfcinv(x) = NaN if x < 0 or x > 2
Erfcinv(NaN) = NaN
```


## Exp
```jule
fn Exp(x: f64): f64
```
Returns e\*\*x, the base\-e exponential of x\.

Special cases are:<br>
```
Exp(Inf) = Inf
Exp(NaN) = NaN
```
Very large values overflow to 0 or Inf\. Very small values underflow to 1\.

## Exp2
```jule
fn Exp2(x: f64): f64
```
Returns 2\*\*x, the base\-2 exponential of x\. Special cases are the same as Exp\.

## Expm1
```jule
fn Expm1(mut x: f64): f64
```
Returns e\*\*x \- 1, the base\-e exponential of x minus 1\. It is more accurate than Exp\(x\) \- 1 when x is near zero\.

Special cases are:<br>
```
Expm1(+Inf) = +Inf
Expm1(-Inf) = -1
Expm1(NaN) = NaN
```
Very large values overflow to \-1 or \+Inf\.

## Floor
```jule
fn Floor(x: f64): f64
```
Returns the greatest integer value less than or equal to x\.

Special cases are:<br>
```
Floor(±0) = ±0
Floor(±Inf) = ±Inf
Floor(NaN) = NaN
```


## Ceil
```jule
fn Ceil(x: f64): f64
```
Returns the least integer value greater than or equal to x\.

Special cases are:<br>
```
Ceil(±0) = ±0
Ceil(±Inf) = ±Inf
Ceil(NaN) = NaN
```


## Trunc
```jule
fn Trunc(x: f64): f64
```
Returns the integer value of x\.

Special cases are:<br>
```
Trunc(±0) = ±0
Trunc(±Inf) = ±Inf
Trunc(NaN) = NaN
```


## Round
```jule
fn Round(x: f64): f64
```
Returns the nearest integer, rounding half away from zero\.

Special cases are:<br>
```
Round(±0) = ±0
Round(±Inf) = ±Inf
Round(NaN) = NaN
```


## RoundEven
```jule
fn RoundEven(x: f64): f64
```
Returns the nearest integer, rounding ties to even\.

Special cases are:<br>
```
RoundEven(±0) = ±0
RoundEven(±Inf) = ±Inf
RoundEven(NaN) = NaN
```


## FMA
```jule
fn FMA(x: f64, y: f64, z: f64): f64
```
Returns x \* y \+ z, computed with only one rounding\. \(That is, FMA returns the fused multiply\-add of x, y, and z\.\)

## Frexp
```jule
fn Frexp(mut f: f64): (frac: f64, exp: int)
```
Breaks f into a normalized fraction and an integral power of two\. It returns frac and exp satisfying f == frac × 2\*\*exp, with the absolute value of frac in the interval \[½, 1\)\.

Special cases are:<br>
```
Frexp(±0) = ±0, 0
Frexp(±Inf) = ±Inf, 0
Frexp(NaN) = NaN, 0
```


## Gamma
```jule
fn Gamma(mut x: f64): f64
```
Returns the Gamma function of x\.

Special cases are:<br>
```
Gamma(+Inf) = +Inf
Gamma(+0) = +Inf
Gamma(-0) = -Inf
Gamma(x) = NaN for integer x < 0
Gamma(-Inf) = NaN
Gamma(NaN) = NaN
```


## Hypot
```jule
fn Hypot(mut p: f64, mut q: f64): f64
```
Returns Sqrt\(p\*p \+ q\*q\), taking care to avoid unnecessary overflow and underflow\.

Special cases are:<br>
```
Hypot(±Inf, q) = +Inf
Hypot(p, ±Inf) = +Inf
Hypot(NaN, q) = NaN
Hypot(p, NaN) = NaN
```


## J0
```jule
fn J0(mut x: f64): f64
```
Returns the order\-zero Bessel function of the first kind\.

Special cases are:<br>
```
J0(±Inf) = 0
J0(0) = 1
J0(NaN) = NaN
```


## Y0
```jule
fn Y0(x: f64): f64
```
Returns the order\-zero Bessel function of the second kind\.

Special cases are:<br>
```
Y0(+Inf) = 0
Y0(0) = -Inf
Y0(x < 0) = NaN
Y0(NaN) = NaN
```


## J1
```jule
fn J1(mut x: f64): f64
```
Returns the order\-one Bessel function of the first kind\.

Special cases are:<br>
```
J1(±Inf) = 0
J1(NaN) = NaN
```


## Y1
```jule
fn Y1(x: f64): f64
```
Returns the order\-one Bessel function of the second kind\.

Special cases are:<br>
```
Y1(+Inf) = 0
Y1(0) = -Inf
Y1(x < 0) = NaN
Y1(NaN) = NaN
```


## Jn
```jule
fn Jn(mut n: int, mut x: f64): f64
```
Returns the order\-n Bessel function of the first kind\.

Special cases are:<br>
```
Jn(n, ±Inf) = 0
Jn(n, NaN) = NaN
```


## Yn
```jule
fn Yn(mut n: int, x: f64): f64
```
Returns the order\-n Bessel function of the second kind\.

Special cases are:<br>
```
Yn(n, +Inf) = 0
Yn(n ≥ 0, 0) = -Inf
Yn(n < 0, 0) = +Inf if n is odd, -Inf if n is even
Yn(n, x < 0) = NaN
Yn(n, NaN) = NaN
```


## Ldexp
```jule
fn Ldexp(mut frac: f64, mut exp: int): f64
```
Is the inverse of frexp\. It returns frac × 2\*\*exp\.

Special cases are:<br>
```
Ldexp(±0, exp) = ±0
Ldexp(±Inf, exp) = ±Inf
Ldexp(NaN, exp) = NaN
```


## Lgamma
```jule
fn Lgamma(mut x: f64): (lgamma: f64, sign: int)
```
Returns the natural logarithm and sign \(\-1 or \+1\) of Gamma\(x\)\.

Special cases are:<br>
```
Lgamma(+Inf) = +Inf
Lgamma(0) = +Inf
Lgamma(-integer) = +Inf
Lgamma(-Inf) = -Inf
Lgamma(NaN) = NaN
```


## Log
```jule
fn Log(x: f64): f64
```
Returns the natural logarithm of x\.

Special cases are:<br>
```
Log(+Inf) = +Inf
Log(0) = -Inf
Log(x < 0) = NaN
Log(NaN) = NaN
```


## Log10
```jule
fn Log10(x: f64): f64
```
Returns the decimal logarithm of x\. The special cases are the same as for log\.

## Log2
```jule
fn Log2(x: f64): f64
```
Returns the binary logarithm of x\. The special cases are the same as for log\.

## Log1p
```jule
fn Log1p(x: f64): f64
```
Returns the natural logarithm of 1 plus its argument x\. It is more accurate than Log\(1 \+ x\) when x is near zero\.

Special cases are:<br>
```
Log1p(+Inf) = +Inf
Log1p(±0) = ±0
Log1p(-1) = -Inf
Log1p(x < -1) = NaN
Log1p(NaN) = NaN
```


## Logb
```jule
fn Logb(x: f64): f64
```
Returns the binary exponent of x\.

Special cases are:<br>
```
Logb(±Inf) = +Inf
Logb(0) = -Inf
Logb(NaN) = NaN
```


## Ilogb
```jule
fn Ilogb(x: f64): int
```
Returns the binary exponent of x as an integer\.

Special cases are:<br>
```
Ilogb(±Inf) = i32.Max
Ilogb(0) = i32.Min
Ilogb(NaN) = i32.Max
```


## Mod
```jule
fn Mod(x: f64, mut y: f64): f64
```
Returns the floating\-point remainder of x/y\. The magnitude of the result is less than y and its sign agrees with that of x\.

Special cases are:<br>
```
Mod(±Inf, y) = NaN
Mod(NaN, y) = NaN
Mod(x, 0) = NaN
Mod(x, ±Inf) = x
Mod(x, NaN) = NaN
```


## Modf
```jule
fn Modf(f: f64): (i: f64, frac: f64)
```
Returns integer and fractional floating\-point numbers that sum to f\. Both values have the same sign as f\.

Special cases are:

```
Modf(±Inf) = ±Inf, NaN
Modf(NaN) = NaN, NaN
```


## Nextafter32
```jule
fn Nextafter32(x: f32, y: f32): (r: f32)
```
Returns the next representable f32 value after x towards y\.

Special cases are:<br>
```
Nextafter32(x, x)   = x
Nextafter32(NaN, y) = NaN
Nextafter32(x, NaN) = NaN
```


## Nextafter
```jule
fn Nextafter(x: f64, y: f64): (r: f64)
```
Returns the next representable f64 value after x towards y\.

Special cases are:<br>
```
Nextafter(x, x)   = x
Nextafter(NaN, y) = NaN
Nextafter(x, NaN) = NaN
```


## Pow
```jule
fn Pow(x: f64, y: f64): f64
```
Returns x\*\*y, the base\-x exponential of y\.

Special cases are \(in order\):

```
Pow(x, ±0) = 1 for any x
Pow(1, y) = 1 for any y
Pow(x, 1) = x for any x
Pow(NaN, y) = NaN
Pow(x, NaN) = NaN
Pow(±0, y) = ±Inf for y an odd integer < 0
Pow(±0, -Inf) = +Inf
Pow(±0, +Inf) = +0
Pow(±0, y) = +Inf for finite y < 0 and not an odd integer
Pow(±0, y) = ±0 for y an odd integer > 0
Pow(±0, y) = +0 for finite y > 0 and not an odd integer
Pow(-1, ±Inf) = 1
Pow(x, +Inf) = +Inf for |x| > 1
Pow(x, -Inf) = +0 for |x| > 1
Pow(x, +Inf) = +0 for |x| < 1
Pow(x, -Inf) = +Inf for |x| < 1
Pow(+Inf, y) = +Inf for y > 0
Pow(+Inf, y) = +0 for y < 0
Pow(-Inf, y) = Pow(-0, -y)
Pow(x, y) = NaN for finite x < 0 and finite non-integer y
```


## Pow10
```jule
fn Pow10(n: int): f64
```
Returns 10\*\*n, the base\-10 exponential of n\.

Special cases are:<br>
```
Pow10(n) =   0 for n < -323
Pow10(n) = Inf for n > 308
```


## Remainder
```jule
fn Remainder(mut x: f64, mut y: f64): f64
```
Returns the IEEE 754 floating\-point remainder of x/y\.

Special cases are:<br>
```
Remainder(±Inf, y) = NaN
Remainder(NaN, y) = NaN
Remainder(x, 0) = NaN
Remainder(x, ±Inf) = x
Remainder(x, NaN) = NaN
```


## Signbit
```jule
fn Signbit(x: f64): bool
```
Reports whether x is negative or negative zero\.

## Cos
```jule
fn Cos(mut x: f64): f64
```
Returns the cosine of the radian argument x\.

Special cases are:<br>
```
Cos(±Inf) = NaN
Cos(NaN) = NaN
```


## Sin
```jule
fn Sin(mut x: f64): f64
```
Returns the sine of the radian argument x\.

Special cases are:<br>
```
Sin(±0) = ±0
Sin(±Inf) = NaN
Sin(NaN) = NaN
```


## Sincos
```jule
fn Sincos(mut x: f64): (sin: f64, cos: f64)
```
Returns Sin\(x\), Cos\(x\)\.

Special cases are:<br>
```
Sincos(±0) = ±0, 1
Sincos(±Inf) = NaN, NaN
Sincos(NaN) = NaN, NaN
```


## Sinh
```jule
fn Sinh(mut x: f64): f64
```
Returns the hyperbolic sine of x\.

Special cases are:<br>
```
Sinh(±0) = ±0
Sinh(±Inf) = ±Inf
Sinh(NaN) = NaN
```


## Cosh
```jule
fn Cosh(mut x: f64): f64
```
Returns the hyperbolic cosine of x\.

Special cases are:<br>
```
Cosh(±0) = 1
Cosh(±Inf) = +Inf
Cosh(NaN) = NaN
```


## Sqrt
```jule
fn Sqrt(x: f64): f64
```
Returns the square root of x\.

Special cases are:<br>
```
Sqrt(+Inf) = +Inf
Sqrt(±0) = ±0
Sqrt(x < 0) = NaN
Sqrt(NaN) = NaN
```


## Tan
```jule
fn Tan(mut x: f64): f64
```
Returns the tangent of the radian argument x\.

Special cases are:<br>
```
Tan(±0) = ±0
Tan(±Inf) = NaN
Tan(NaN) = NaN
```


## Tanh
```jule
fn Tanh(x: f64): f64
```
Returns the hyperbolic tangent of x\.

Special cases are:<br>
```
Tanh(±0) = ±0
Tanh(±Inf) = ±1
Tanh(NaN) = NaN
```


## F32bits
```jule
fn F32bits(f: f32): u32
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position\. F32bits\(F32frombits\(x\)\) == x\.

## F32frombits
```jule
fn F32frombits(b: u32): f32
```
Returns the floating\-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position\. F32frombits\(F32bits\(x\)\) == x\.

## F64bits
```jule
fn F64bits(f: f64): u64
```
Returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position, and F64bits\(F64frombits\(x\)\) == x\.

## F64frombits
```jule
fn F64frombits(b: u64): f64
```
Returns the floating\-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position\. F64frombits\(F64bits\(x\)\) == x\.