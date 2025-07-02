# std/math/cmplx

## Index

[fn Sin\(x: Cmplx\): Cmplx](#sin)\
[fn Sinh\(x: Cmplx\): Cmplx](#sinh)\
[fn Cos\(x: Cmplx\): Cmplx](#cos)\
[fn Cosh\(x: Cmplx\): Cmplx](#cosh)\
[fn Tan\(x: Cmplx\): Cmplx](#tan)\
[fn Tanh\(x: Cmplx\): Cmplx](#tanh)\
[fn Cot\(x: Cmplx\): Cmplx](#cot)\
[fn Conj\(x: Cmplx\): Cmplx](#conj)\
[fn IsInf\(x: Cmplx\): bool](#isinf)\
[fn IsNaN\(x: Cmplx\): bool](#isnan)\
[fn IsZero\(x: Cmplx\): bool](#iszero)\
[fn New\(real: f64, imag: f64\): Cmplx](#new)\
[fn NaN\(\): Cmplx](#nan)\
[fn Inf\(sign: int\): Cmplx](#inf)\
[fn Zero\(\): Cmplx](#zero)\
[fn Log\(x: Cmplx\): Cmplx](#log)\
[fn Log10\(x: Cmplx\): Cmplx](#log10)\
[fn Abs\(x: Cmplx\): f64](#abs)\
[fn Rect\(r: f64, theta: f64\): Cmplx](#rect)\
[fn Pow\(x: Cmplx, y: Cmplx\): Cmplx](#pow)\
[fn Exp\(x: Cmplx\): Cmplx](#exp)\
[fn Sqrt\(x: Cmplx\): Cmplx](#sqrt)\
[fn Polar\(x: Cmplx\): \(r: f64, theta: f64\)](#polar)\
[fn Phase\(x: Cmplx\): f64](#phase)\
[fn Asin\(x: Cmplx\): Cmplx](#asin)\
[fn Asinh\(x: Cmplx\): Cmplx](#asinh)\
[fn Acos\(x: Cmplx\): Cmplx](#acos)\
[fn Acosh\(x: Cmplx\): Cmplx](#acosh)\
[fn Atan\(x: Cmplx\): Cmplx](#atan)\
[fn Atanh\(x: Cmplx\): Cmplx](#atanh)\
[struct Cmplx](#cmplx)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Real\(\*self\): f64](#real)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Imag\(\*self\): f64](#imag)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(\*self, c: Cmplx\): Cmplx](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(\*self, c: Cmplx\): Cmplx](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(\*self, c: Cmplx\): Cmplx](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Div\(\*self, c: Cmplx\): Cmplx](#div)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Neg\(\*self\): Cmplx](#neg)



## Sin
```jule
fn Sin(x: Cmplx): Cmplx
```
Returns the sine of complex number\.

## Sinh
```jule
fn Sinh(x: Cmplx): Cmplx
```
Returns the hyperbolic sine of complex number\.

## Cos
```jule
fn Cos(x: Cmplx): Cmplx
```
Returns the cosine of complex number\.

## Cosh
```jule
fn Cosh(x: Cmplx): Cmplx
```
Returns the hyperbolic cosine of complex number\.

## Tan
```jule
fn Tan(x: Cmplx): Cmplx
```
Returns the tangent of complex number\.

## Tanh
```jule
fn Tanh(x: Cmplx): Cmplx
```
Returns the hyperbolic tangent of complex number\.

## Cot
```jule
fn Cot(x: Cmplx): Cmplx
```
Returns the cotangent of complex number\.

## Conj
```jule
fn Conj(x: Cmplx): Cmplx
```
Returns conjugate of complex number\.

## IsInf
```jule
fn IsInf(x: Cmplx): bool
```
Reports whether either real or imag is an infinity\.

## IsNaN
```jule
fn IsNaN(x: Cmplx): bool
```
Reports whether either real or imag is NaN and neither is an infinity\.

## IsZero
```jule
fn IsZero(x: Cmplx): bool
```
Reports whether real and imag is zero\.

## New
```jule
fn New(real: f64, imag: f64): Cmplx
```
Returns new complex number\.

## NaN
```jule
fn NaN(): Cmplx
```
Returns NaN complex number\.

## Inf
```jule
fn Inf(sign: int): Cmplx
```
Returns Inf complex number\. Uses positive infinity if sign &gt;= 0, negative infinity if \!sign &lt; 0\.

## Zero
```jule
fn Zero(): Cmplx
```
Returns zero complex number\.

## Log
```jule
fn Log(x: Cmplx): Cmplx
```
Returns the natural logarithm of complex number\.

## Log10
```jule
fn Log10(x: Cmplx): Cmplx
```
Returns the decimal logarithm of complex number\.

## Abs
```jule
fn Abs(x: Cmplx): f64
```
Returns the absolute value \(also called the modulus\) of x\.

## Rect
```jule
fn Rect(r: f64, theta: f64): Cmplx
```
Returns the complex number with polar coordinates r, θ\.

## Pow
```jule
fn Pow(x: Cmplx, y: Cmplx): Cmplx
```
Returns x\*\*y, the base\-x exponential of y\. For generalized compatibility with math::pow:

```
Pow(0, ±0) returns 1+0i
Pow(0, c) for c.Real()<0 returns Inf+0i if c.Imag() is zero, otherwise Inf+Inf i.
```


## Exp
```jule
fn Exp(x: Cmplx): Cmplx
```
Returns e\*\*x, the base\-e exponential of x\.

## Sqrt
```jule
fn Sqrt(x: Cmplx): Cmplx
```
Returns the square root of complex number\. The result r is chosen so that r\.Real\(\) ≥ 0 and r\.Imag\(\) has the same sign as x\.Imag\(\)\.

## Polar
```jule
fn Polar(x: Cmplx): (r: f64, theta: f64)
```
Polar returns the absolute value r and phase θ of x, such that x = r \* e\*\*θi\. The phase is in the range \[\-PI, PI\]\.

## Phase
```jule
fn Phase(x: Cmplx): f64
```
Phase returns the phase \(also called the argument\) of x\. The returned value is in the range \[\-Pi, Pi\]\.

## Asin
```jule
fn Asin(x: Cmplx): Cmplx
```
Returns the inverse sine of complex number\.

## Asinh
```jule
fn Asinh(x: Cmplx): Cmplx
```
Returns the inverse hyperbolic sine of complex number\.

## Acos
```jule
fn Acos(x: Cmplx): Cmplx
```
Returns the inverse cosine of complex number\.

## Acosh
```jule
fn Acosh(x: Cmplx): Cmplx
```
Returns the inverse hyperbolic cosine of complex number\.

## Atan
```jule
fn Atan(x: Cmplx): Cmplx
```
Returns the inverse tangent of complex number\.

## Atanh
```jule
fn Atanh(x: Cmplx): Cmplx
```
Returns the inverse hyperbolic tangent of complex number\.

## Cmplx
```jule
struct Cmplx {
	// NOTE: contains filtered hidden or unexported fields
}
```
Complex number\.

### Real
```jule
fn Real(*self): f64
```
Returns real part of complex number\.

### Imag
```jule
fn Imag(*self): f64
```
Returns imaginary part of complex number\.

### Add
```jule
fn Add(*self, c: Cmplx): Cmplx
```
Returns addition of complex numbers\.

### Sub
```jule
fn Sub(*self, c: Cmplx): Cmplx
```
Returns subtraction of complex numbers\.

### Mul
```jule
fn Mul(*self, c: Cmplx): Cmplx
```
Returns multiplication of complex numbers\.

### Div
```jule
fn Div(*self, c: Cmplx): Cmplx
```
Returns division of complex numbers\. Returns NaN complex number if denominator is zero\.

### Neg
```jule
fn Neg(*self): Cmplx
```
Unary minus operator\.