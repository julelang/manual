# std/math/cmplx

## Structures

```jule
struct Cmplx
```
Complex number.

**Methods:**

`static fn New(real: f64, imag: f64): Cmplx`\
Returns new complex number.

`static fn Nan(): Cmplx`\
Returns complex number that assigned to NaN.

`static fn Inf(sign: int): Cmplx`\
Returns Inf complex number. Uses positive infinity if sign >= 0, negative infinity if !sign < 0.

`static fn Zero(): Cmplx`\
Returns zero complex number.

`static fn Rect(r: f64, theta: f64): Cmplx`\
Returns the complex number with polar coordinates r, θ.

`fn Real(self): f64`\
Returns real part of complex number.

`fn Imag(self): f64`\
Returns imag part of complex number.

`fn Conj(self): Cmplx`\
Returns conjugate of complex number.

`fn Add(self, c: Cmplx): Cmplx`\
Returns addition of complex numbers.

`fn Sub(self, c: Cmplx): Cmplx`\
Returns subtraction of complex numbers.

`fn Mul(self, c: Cmplx): Cmplx`\
Returns multiplication of complex numbers.

`fn Div(self, c: Cmplx): Cmplx`\
Returns division of complex numbers. \
Returns NaN complex number if denominator is zero.

`fn Neg(self): Cmplx`\
Unary minus operator.

`fn IsInf(self): bool`\
Reports whether either real or imag is an infinity.

`fn IsNan(self): bool`\
Reports whether either real or imag is NaN and neither is an infinity.

`fn IsZero(self): bool`\
Reports whether real and imag is zero.

`fn Abs(self): f64`\
Returns the absolute value (also called the modulus) of x.

`fn Sqrt(self): Cmplx`\
Returns the square root of complex number. The result r is chosen so that r.real() ≥ 0 and r.imag() has the same sign as self.imag().

`fn Phase(self): f64`\
Phase returns the phase (also called the argument) of x. The returned value is in the range [-Pi, Pi].

`fn Polar(self): (r: f64, theta: f64)`\
Polar returns the absolute value r and phase θ of x, such that x = r * e**θi. The phase is in the range [-Pi, Pi].

`fn Log(self): Cmplx`\
Returns the natural logarithm of complex number.

`fn Log10(self): Cmplx`\
Returns the decimal logarithm of complex number.

`fn Exp(self): Cmplx`\
Returns e**x, the base-e exponential of x.

`fn Pow(self, y: Cmplx): Cmplx`\
Returns x**y, the base-x (self) exponential of y.
For generalized compatibility with [math::Pow]:

Pow(0, ±0) returns 1+0i\
Pow(0, c) for c.real()<0 returns Inf+0i if c.imag() is zero, otherwise Inf+Inf i.

`fn Sin(self): Cmplx`\
Returns the sine of complex number.

`fn Sinh(self): Cmplx`\
Returns the hyperbolic sine of complex number.

`fn Cos(self): Cmplx`\
Returns the cosine of complex number.

`fn Cosh(self): Cmplx`\
Returns the hyperbolic cosine of complex number.

`fn Tan(self): Cmplx`\
Returns the tangent of complex number.

`fn Tanh(self): Cmplx`\
Returns the hyperbolic tangent of complex number.

`fn Cot(self): Cmplx`\
Returns the cotangent of complex number.

`fn Asin(self): Cmplx`\
Returns the inverse sine of complex number.

`fn Asinh(self): Cmplx`\
Returns the inverse hyperbolic sine of complex number.

`fn Acos(self): Cmplx`\
Returns the inverse cosine of complex number.

`fn Acosh(self): Cmplx`\
Returns the inverse hyperbolic cosine of complex number.

`fn Atan(self): Cmplx`\
Returns the inverse tangent of complex number.

`fn Atanh(self): Cmplx`\
Returns the inverse hyperbolic tangent of complex number.