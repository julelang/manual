# std/math/cmplx

## Index

[fn Abs\(x: cmplx128\): f64](#abs)\
[fn Asin\(x: cmplx128\): cmplx128](#asin)\
[fn Asinh\(x: cmplx128\): cmplx128](#asinh)\
[fn Acos\(x: cmplx128\): cmplx128](#acos)\
[fn Acosh\(x: cmplx128\): cmplx128](#acosh)\
[fn Atan\(x: cmplx128\): cmplx128](#atan)\
[fn Atanh\(x: cmplx128\): cmplx128](#atanh)\
[fn Conj\(x: cmplx128\): cmplx128](#conj)\
[fn IsInf\(x: cmplx128\): bool](#isinf)\
[fn IsNaN\(x: cmplx128\): bool](#isnan)\
[fn NaN\(\): cmplx128](#nan)\
[fn Inf\(sign: int\): cmplx128](#inf)\
[fn Exp\(x: cmplx128\): cmplx128](#exp)\
[fn Log\(x: cmplx128\): cmplx128](#log)\
[fn Log10\(x: cmplx128\): cmplx128](#log10)\
[fn Phase\(x: cmplx128\): f64](#phase)\
[fn Polar\(x: cmplx128\): \(r: f64, theta: f64\)](#polar)\
[fn Pow\(x: cmplx128, y: cmplx128\): cmplx128](#pow)\
[fn Rect\(r: f64, theta: f64\): cmplx128](#rect)\
[fn Sin\(x: cmplx128\): cmplx128](#sin)\
[fn Sinh\(x: cmplx128\): cmplx128](#sinh)\
[fn Cos\(x: cmplx128\): cmplx128](#cos)\
[fn Cosh\(x: cmplx128\): cmplx128](#cosh)\
[fn Sqrt\(x: cmplx128\): cmplx128](#sqrt)\
[fn Tan\(x: cmplx128\): cmplx128](#tan)\
[fn Tanh\(x: cmplx128\): cmplx128](#tanh)\
[fn Cot\(x: cmplx128\): cmplx128](#cot)



## Abs
```jule
fn Abs(x: cmplx128): f64
```
Returns the absolute value \(also called the modulus\) of x\.

## Asin
```jule
fn Asin(x: cmplx128): cmplx128
```
Returns the inverse sine of complex number\.

## Asinh
```jule
fn Asinh(x: cmplx128): cmplx128
```
Returns the inverse hyperbolic sine of complex number\.

## Acos
```jule
fn Acos(x: cmplx128): cmplx128
```
Returns the inverse cosine of complex number\.

## Acosh
```jule
fn Acosh(x: cmplx128): cmplx128
```
Returns the inverse hyperbolic cosine of complex number\.

## Atan
```jule
fn Atan(x: cmplx128): cmplx128
```
Returns the inverse tangent of complex number\.

## Atanh
```jule
fn Atanh(x: cmplx128): cmplx128
```
Returns the inverse hyperbolic tangent of complex number\.

## Conj
```jule
fn Conj(x: cmplx128): cmplx128
```
Returns conjugate of complex number\.

## IsInf
```jule
fn IsInf(x: cmplx128): bool
```
Reports whether either real or imag is an infinity\.

## IsNaN
```jule
fn IsNaN(x: cmplx128): bool
```
Reports whether either real or imag is NaN and neither is an infinity\.

## NaN
```jule
fn NaN(): cmplx128
```
Returns NaN complex number\.

## Inf
```jule
fn Inf(sign: int): cmplx128
```
Returns Inf complex number\. Uses positive infinity if sign &gt;= 0, negative infinity if \!sign &lt; 0\.

## Exp
```jule
fn Exp(x: cmplx128): cmplx128
```
Returns e\*\*x, the base\-e exponential of x\.

## Log
```jule
fn Log(x: cmplx128): cmplx128
```
Returns the natural logarithm of complex number\.

## Log10
```jule
fn Log10(x: cmplx128): cmplx128
```
Returns the decimal logarithm of complex number\.

## Phase
```jule
fn Phase(x: cmplx128): f64
```
Phase returns the phase \(also called the argument\) of x\. The returned value is in the range \[\-Pi, Pi\]\.

## Polar
```jule
fn Polar(x: cmplx128): (r: f64, theta: f64)
```
Polar returns the absolute value r and phase θ of x, such that x = r \* e\*\*θi\. The phase is in the range \[\-PI, PI\]\.

## Pow
```jule
fn Pow(x: cmplx128, y: cmplx128): cmplx128
```
Returns x\*\*y, the base\-x exponential of y\. For generalized compatibility with math::pow:

```
Pow(0, ±0) returns 1+0i
Pow(0, c) for real(c)<0 returns Inf+0i if imag(c) is zero, otherwise Inf+Inf i.
```


## Rect
```jule
fn Rect(r: f64, theta: f64): cmplx128
```
Returns the complex number with polar coordinates r, θ\.

## Sin
```jule
fn Sin(x: cmplx128): cmplx128
```
Returns the sine of complex number\.

## Sinh
```jule
fn Sinh(x: cmplx128): cmplx128
```
Returns the hyperbolic sine of complex number\.

## Cos
```jule
fn Cos(x: cmplx128): cmplx128
```
Returns the cosine of complex number\.

## Cosh
```jule
fn Cosh(x: cmplx128): cmplx128
```
Returns the hyperbolic cosine of complex number\.

## Sqrt
```jule
fn Sqrt(x: cmplx128): cmplx128
```
Returns the square root of complex number\. The result r is chosen so that real\(r\) ≥ 0 and imag\(r\) has the same sign as imag\(x\)\.

## Tan
```jule
fn Tan(x: cmplx128): cmplx128
```
Returns the tangent of complex number\.

## Tanh
```jule
fn Tanh(x: cmplx128): cmplx128
```
Returns the hyperbolic tangent of complex number\.

## Cot
```jule
fn Cot(x: cmplx128): cmplx128
```
Returns the cotangent of complex number\.