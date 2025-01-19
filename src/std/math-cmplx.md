# std/math/cmplx

## Index

[struct Cmplx](#cmplx)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New(real: f64, imag: f64): Cmplx](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NaN(): Cmplx](#nan)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Inf(sign: int): Cmplx](#inf)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Zero(): Cmplx](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Rect(r: f64, theta: f64): Cmplx](#rect)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sin(self): Cmplx](#sin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sinh(self): Cmplx](#sinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cos(self): Cmplx](#cos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cosh(self): Cmplx](#cosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tan(self): Cmplx](#tan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tanh(self): Cmplx](#tanh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cot(self): Cmplx](#cot)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Real(self): f64](#real)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Imag(self): f64](#imag)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Conj(self): Cmplx](#conj)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add(self, c: Cmplx): Cmplx](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub(self, c: Cmplx): Cmplx](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul(self, c: Cmplx): Cmplx](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Div(self, c: Cmplx): Cmplx](#div)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Neg(self): Cmplx](#neg)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInf(self): bool](#isinf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsNaN(self): bool](#isnan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsZero(self): bool](#iszero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Log(self): Cmplx](#log)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Log10(self): Cmplx](#log10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs(self): f64](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow(self, y: Cmplx): Cmplx](#pow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exp(self): Cmplx](#exp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sqrt(self): Cmplx](#sqrt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Polar(self): (r: f64, theta: f64)](#polar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Phase(self): f64](#phase)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asin(self): Cmplx](#asin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asinh(self): Cmplx](#asinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acos(self): Cmplx](#acos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acosh(self): Cmplx](#acosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atan(self): Cmplx](#atan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atanh(self): Cmplx](#atanh)



## Cmplx
```jule
struct Cmplx {
	// NOTE: contains filtered hidden or unexported fields
}
```
Complex number.

### New
```jule
static fn New(real: f64, imag: f64): Cmplx
```
Returns new complex number.

### NaN
```jule
static fn NaN(): Cmplx
```
Returns NaN complex number.

### Inf
```jule
static fn Inf(sign: int): Cmplx
```
Returns Inf complex number. Uses positive infinity if sign &gt;= 0, negative infinity if !sign &lt; 0.

### Zero
```jule
static fn Zero(): Cmplx
```
Returns zero complex number.

### Rect
```jule
static fn Rect(r: f64, theta: f64): Cmplx
```
Returns the complex number with polar coordinates r, θ.

### Sin
```jule
fn Sin(self): Cmplx
```
Returns the sine of complex number.

### Sinh
```jule
fn Sinh(self): Cmplx
```
Returns the hyperbolic sine of complex number.

### Cos
```jule
fn Cos(self): Cmplx
```
Returns the cosine of complex number.

### Cosh
```jule
fn Cosh(self): Cmplx
```
Returns the hyperbolic cosine of complex number.

### Tan
```jule
fn Tan(self): Cmplx
```
Returns the tangent of complex number.

### Tanh
```jule
fn Tanh(self): Cmplx
```
Returns the hyperbolic tangent of complex number.

### Cot
```jule
fn Cot(self): Cmplx
```
Returns the cotangent of complex number.

### Real
```jule
fn Real(self): f64
```
Returns real part of complex number.

### Imag
```jule
fn Imag(self): f64
```
Returns imaginary part of complex number.

### Conj
```jule
fn Conj(self): Cmplx
```
Returns conjugate of complex number.

### Add
```jule
fn Add(self, c: Cmplx): Cmplx
```
Returns addition of complex numbers.

### Sub
```jule
fn Sub(self, c: Cmplx): Cmplx
```
Returns subtraction of complex numbers.

### Mul
```jule
fn Mul(self, c: Cmplx): Cmplx
```
Returns multiplication of complex numbers.

### Div
```jule
fn Div(self, c: Cmplx): Cmplx
```
Returns division of complex numbers. Returns NaN complex number if denominator is zero.

### Neg
```jule
fn Neg(self): Cmplx
```
Unary minus operator.

### IsInf
```jule
fn IsInf(self): bool
```
Reports whether either real or imag is an infinity.

### IsNaN
```jule
fn IsNaN(self): bool
```
Reports whether either real or imag is NaN and neither is an infinity.

### IsZero
```jule
fn IsZero(self): bool
```
Reports whether real and imag is zero.

### Log
```jule
fn Log(self): Cmplx
```
Returns the natural logarithm of complex number.

### Log10
```jule
fn Log10(self): Cmplx
```
Returns the decimal logarithm of complex number.

### Abs
```jule
fn Abs(self): f64
```
Returns the absolute value (also called the modulus) of x.

### Pow
```jule
fn Pow(self, y: Cmplx): Cmplx
```
Returns x\*\*y, the base-x (self) exponential of y. For generalized compatibility with math::pow:

```
Pow(0, ±0) returns 1+0i
Pow(0, c) for c.Real()<0 returns Inf+0i if c.Imag() is zero, otherwise Inf+Inf i.
```


### Exp
```jule
fn Exp(self): Cmplx
```
Returns e\*\*x, the base-e exponential of x.

### Sqrt
```jule
fn Sqrt(self): Cmplx
```
Returns the square root of complex number. The result r is chosen so that r.real() ≥ 0 and r.imag() has the same sign as self.imag().

### Polar
```jule
fn Polar(self): (r: f64, theta: f64)
```
Polar returns the absolute value r and phase θ of x, such that x = r \* e\*\*θi. The phase is in the range \[-PI, PI\].

### Phase
```jule
fn Phase(self): f64
```
Phase returns the phase (also called the argument) of x. The returned value is in the range \[-PI, PI\].

### Asin
```jule
fn Asin(self): Cmplx
```
Returns the inverse sine of complex number.

### Asinh
```jule
fn Asinh(self): Cmplx
```
Returns the inverse hyperbolic sine of complex number.

### Acos
```jule
fn Acos(self): Cmplx
```
Returns the inverse cosine of complex number.

### Acosh
```jule
fn Acosh(self): Cmplx
```
Returns the inverse hyperbolic cosine of complex number.

### Atan
```jule
fn Atan(self): Cmplx
```
Returns the inverse tangent of complex number.

### Atanh
```jule
fn Atanh(self): Cmplx
```
Returns the inverse hyperbolic tangent of complex number.