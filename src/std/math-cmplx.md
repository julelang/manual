# std::math::cmplx

## Structures

```jule
struct Cmplx
```
Complex number.

**Methods:**

`static fn new(real: f64, imag: f64): Cmplx`\
Returns new complex number.

`static fn nan(): Cmplx`\
Returns complex number that assigned to NaN.

`static fn inf(sign: int): Cmplx`\
Returns Inf complex number. Uses positive infinity if sign >= 0, negative infinity if !sign < 0.

`static fn zero(): Cmplx`\
Returns zero complex number.

`static fn rect(r: f64, theta: f64): Cmplx`\
Returns the complex number with polar coordinates r, θ.

`fn real(self): f64`\
Returns real part of complex number.

`fn imag(self): f64`\
Returns imag part of complex number.

`fn conj(self): Cmplx`\
Returns conjugate of complex number.

`fn add(self, c: Cmplx): Cmplx`\
Returns addition of complex numbers.

`fn sub(self, c: Cmplx): Cmplx`\
Returns subtraction of complex numbers.

`fn mul(self, c: Cmplx): Cmplx`\
Returns multiplication of complex numbers.

`fn div(self, c: Cmplx): Cmplx`\
Returns division of complex numbers. \
Returns NaN complex number if denominator is zero.

`fn is_inf(self): bool`\
Reports whether either real or imag is an infinity.

`fn is_nan(self): bool`\
Reports whether either real or imag is NaN and neither is an infinity.

`fn is_zero(self): bool`\
Reports whether real and imag is zero.

`fn abs(self): f64`\
Returns the absolute value (also called the modulus) of x.

`fn sqrt(self): Cmplx`\
Returns the square root of complex number. The result r is chosen so that r.real() ≥ 0 and r.imag() has the same sign as self.imag().

`fn phase(self): f64`\
Phase returns the phase (also called the argument) of x. The returned value is in the range [-PI, PI].

`fn polar(self): (r: f64, theta: f64)`\
Polar returns the absolute value r and phase θ of x, such that x = r * e**θi. The phase is in the range [-PI, PI].

`fn log(self): Cmplx`\
Returns the natural logarithm of complex number.

`fn log10(self): Cmplx`\
Returns the decimal logarithm of complex number.

`fn exp(self): Cmplx`\
Returns e**x, the base-e exponential of x.

`fn pow(self, y: Cmplx): Cmplx`\
Returns x**y, the base-x (self) exponential of y.
For generalized compatibility with [math::pow]:

pow(0, ±0) returns 1+0i\
pow(0, c) for c.real()<0 returns inf+0i if c.imag() is zero, otherwise inf+inf i.

`fn sin(self): Cmplx`\
Returns the sine of complex number.

`fn sinh(self): Cmplx`\
Returns the hyperbolic sine of complex number.

`fn cos(self): Cmplx`\
Returns the cosine of complex number.

`fn cosh(self): Cmplx`\
Returns the hyperbolic cosine of complex number.

`fn tan(self): Cmplx`\
Returns the tangent of complex number.

`fn tanh(self): Cmplx`\
Returns the hyperbolic tangent of complex number.

`fn cot(self): Cmplx`\
Returns the cotangent of complex number.

`fn asin(self): Cmplx`\
Returns the inverse sine of complex number.

`fn asinh(self): Cmplx`\
Returns the inverse hyperbolic sine of complex number.

`fn acos(self): Cmplx`\
Returns the inverse cosine of complex number.

`fn acosh(self): Cmplx`\
Returns the inverse hyperbolic cosine of complex number.

`fn atan(self): Cmplx`\
Returns the inverse tangent of complex number.

`fn atanh(self): Cmplx`\
Returns the inverse hyperbolic tangent of complex number.
