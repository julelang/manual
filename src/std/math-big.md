# std/math/big

## Index

[Variables](#variables)\
[fn CmpFloat\(&amp;x: \*float, &amp;y: \*float\): int](#cmpfloat)\
[type Accuracy](#accuracy)\
[struct Int](#int)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(x: i64\): Int](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Jacobi\(&amp;x: \*Int, &amp;y: \*Int\): int](#jacobi)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulRange\(mut \*self, mut a: i64, mut b: i64\)](#mulrange)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Binomial\(mut \*self, n: i64, mut k: i64\)](#binomial)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sqrt\(mut \*self, &amp;x: \*Int\)](#sqrt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn QuoRem\(mut \*self, &amp;x: \*Int, &amp;y: \*Int, mut &amp;r: \*Int\)](#quorem)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Quo\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#quo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Div\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#div)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mod\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#mod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivMod\(mut \*self, mut &amp;x: \*Int, mut &amp;y: \*Int\): \(q: Int, m: Int\)](#divmod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lsh\(mut \*self, &amp;x: \*Int, y: uint\)](#lsh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rsh\(mut \*self, &amp;x: \*Int, y: uint\)](#rsh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Or\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#or)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn And\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#and)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Xor\(mut \*self, &amp;x: \*Int, &amp;y: \*Int\)](#xor)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set\(mut \*self, &amp;x: \*Int\)](#set)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exp\(mut \*self, &amp;x: \*Int, &amp;y: \*Int, &amp;m: \*Int\)](#exp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GCD\(mut \*self, mut &amp;x: \*Int, mut &amp;y: \*Int, &amp;a: \*Int, &amp;b: \*Int\)](#gcd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ModInverse\(mut \*self, &amp;g: \*Int, &amp;n: \*Int\)](#modinverse)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ProbablyPrime\(\*self, n: int\): bool](#probablyprime)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn TrailingZeroBits\(\*self\): uint](#trailingzerobits)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn BitLen\(\*self\): int](#bitlen)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bit\(\*self, i: int\): uint](#bit)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs\(mut \*self, &amp;x: \*Int\)](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Not\(mut \*self, &amp;x: \*Int\)](#not)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Neg\(mut \*self, &amp;x: \*Int\)](#neg)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Odd\(\*self\): bool](#odd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Even\(\*self\): bool](#even)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sign\(\*self\): int](#sign)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cmp\(\*self, &amp;y: \*Int\): \(r: int\)](#cmp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CmpAbs\(\*self, &amp;y: \*Int\): int](#cmpabs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetU64\(mut \*self, x: u64\)](#setu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetI64\(mut \*self, x: i64\)](#seti64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetStr\(mut \*self, mut s: str, base: int\): \(ok: bool\)](#setstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I64\(\*self\): i64](#i64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64\(\*self\): u64](#u64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsI64\(\*self\): bool](#isi64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsU64\(\*self\): bool](#isu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Format\(\*self, b: int\): str](#format)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn F64\(\*self\): \(f64, Accuracy\)](#f64)\
[type Word](#word)

## Variables

```jule
const (
	Below: Accuracy = -1
	Exact: Accuracy = 0
	Above: Accuracy = +1
)
```
Constants describing the \[Accuracy\] of a \[Float\]\.

---

```jule
const (
	MaxBase = 10 + ('z' - 'a' + 1) + ('Z' - 'A' + 1)
)
```
The largest number base accepted for string conversions\.

## CmpFloat
```jule
fn CmpFloat(&x: *float, &y: *float): int
```
Compares x and y and returns:<br>

- \-1 if x &lt; y;
- 0 if x == y \(incl\. \-0 == 0, \-Inf == \-Inf, and \+Inf == \+Inf\);
- \+1 if x &gt; y\.

## Accuracy
```jule
type Accuracy: i8
```
Describes the rounding error produced by the most recent operation that generated a \[Float\] value, relative to the exact value\.

## Int
```jule
struct Int {
	// NOTE: contains filtered hidden or unexported fields
}
```
An Int represents a signed multi\-precision integer\. The zero value for an Int represents the value 0\.

The Int type is optimized for high\-performance and efficiency\. Implementation focuses to reduce allocations as much as possible and suitable for stack\-based use cases by default\. Int instances use internal mutable slice to store data\. Computations may use available capacity of the underlying slice to avoid making new allocation\. So shared data needs extra attention\. Any mutable operation may be reflected to shared common data\. If you need to share same Int instance, using smart pointers is a best naive way\. If you need to have guaranteed independent copy, use Set on a zero instance\.

Note that methods may leak the Int&#39;s value through timing side\-channels\. Because of this and because of the scope and complexity of the implementation, Int is not well\-suited to implement cryptographic operations\. The standard library avoids exposing non\-trivial Int methods to attacker\-controlled inputs and the determination of whether a bug in the big package is considered a security vulnerability might depend on the impact on the standard library\.

### New
```jule
fn New(x: i64): Int
```


### Jacobi
```jule
fn Jacobi(&x: *Int, &y: *Int): int
```
Returns the Jacobi symbol \(x/y\), either \+1, \-1, or 0\. The y argument must be an odd integer\.

### MulRange
```jule
fn MulRange(mut *self, mut a: i64, mut b: i64)
```
Sets self to the product of all integers in the range \[a, b\] inclusively\. If a &gt; b \(empty range\), the result is 1\.

### Binomial
```jule
fn Binomial(mut *self, n: i64, mut k: i64)
```
Sets self to the binomial coefficient C\(n, k\)\.

### Add
```jule
fn Add(mut *self, &x: *Int, &y: *Int)
```
Sets self = x \+ y

### Sub
```jule
fn Sub(mut *self, &x: *Int, &y: *Int)
```
Sets self = x \+ y

### Mul
```jule
fn Mul(mut *self, &x: *Int, &y: *Int)
```
Sets self = x \* y\.

### Sqrt
```jule
fn Sqrt(mut *self, &x: *Int)
```
Sets self to square root \|√x\|\. Panics if number is negative\.

### QuoRem
```jule
fn QuoRem(mut *self, &x: *Int, &y: *Int, mut &r: *Int)
```
Sets self to the quotient x/y and r to the remainder x%y\. If y == 0, a division\-by\-zero run\-time panic occurs\.

Implements T\-division and modulus \(like Jule\):

```
q = x/y      with the result truncated to zero
r = x - y*q
```
\(See Daan Leijen, “Division and Modulus for Computer Scientists”\.\) See \[DivMod\] for Euclidean division and modulus \(unlike Jule\)\.

### Quo
```jule
fn Quo(mut *self, &x: *Int, &y: *Int)
```
Sets self to the quotient x/y for y \!= 0\. If y == 0, a division\-by\-zero run\-time panic occurs\. Implements truncated division \(like Jule\); see \[Int\.QuoRem\] for more details\.

### Div
```jule
fn Div(mut *self, &x: *Int, &y: *Int)
```
Sets self to the quotient x/y for y \!= 0\. If y == 0, a division\-by\-zero runtime panic occurs\. Implements Euclidean division; see \[Int\.DivMod\] for more details\.

### Mod
```jule
fn Mod(mut *self, &x: *Int, &y: *Int)
```
Sets self to the modulus x%y for y \!= 0\. If y == 0, a division\-by\-zero run\-time panic occurs\. Implements Euclidean modulus \(unlike Jule\); see \[Int\.DivMod\] for more details\.

### DivMod
```jule
fn DivMod(mut *self, mut &x: *Int, mut &y: *Int): (q: Int, m: Int)
```
Sets self to the quotient x div y and m to the modulus x mod y and returns the pair \(q, m\) for y \!= 0\. If y == 0, a division\-by\-zero run\-time panic occurs\.

Implements Euclidean division and modulus \(unlike Jule\):

```
q = x div y  such that
m = x - y*q  with 0 <= m < |y|
```
\(See Raymond T\. Boute, “The Euclidean definition of the functions div and mod”\. ACM Transactions on Programming Languages and Systems \(TOPLAS\), 14\(2\):127\-144, New York, NY, USA, 4/1992\. ACM press\.\) See \[Int\.QuoRem\] for T\-division and modulus \(like Jule\)\.

### Lsh
```jule
fn Lsh(mut *self, &x: *Int, y: uint)
```
Sets self = x &lt;&lt; y

### Rsh
```jule
fn Rsh(mut *self, &x: *Int, y: uint)
```
Sets self = x &gt;&gt; y

### Or
```jule
fn Or(mut *self, &x: *Int, &y: *Int)
```
Sets self = x \| y

### And
```jule
fn And(mut *self, &x: *Int, &y: *Int)
```
Sets self = x &amp; y

### Xor
```jule
fn Xor(mut *self, &x: *Int, &y: *Int)
```
Sets self = x ^ y

### Set
```jule
fn Set(mut *self, &x: *Int)
```
Sets self to copy of x\.

### Exp
```jule
fn Exp(mut *self, &x: *Int, &y: *Int, &m: *Int)
```
Sets self = x\*\*y mod \|m\| \(i\.e\. the sign of m is ignored\)\. If m == nil or m == 0, self = x\*\*y unless y &lt;= 0 then self = 1\. If m \!= 0, y &lt; 0, and x and m are not relatively prime, self is zero\.

Modular exponentiation of inputs of a particular size is not a cryptographically constant\-time operation\.

### GCD
```jule
fn GCD(mut *self, mut &x: *Int, mut &y: *Int, &a: *Int, &b: *Int)
```
Sets self to the greatest common divisor of a and b\. If x or y are not nil, GCD sets their value such that self = a\*x \+ b\*y\.

a and b may be positive, zero or negative\. \(Before Go 1\.14 both had to be &gt; 0\.\) Regardless of the signs of a and b, self is always &gt;= 0\.

If a == b == 0, GCD sets self = x = y = 0\.

If a == 0 and b \!= 0, GCD sets self = \|b\|, x = 0, y = sign\(b\) \* 1\.

If a \!= 0 and b == 0, GCD sets self = \|a\|, x = sign\(a\) \* 1, y = 0\.

### ModInverse
```jule
fn ModInverse(mut *self, &g: *Int, &n: *Int)
```
Sets self to the multiplicative inverse of g in the ring ℤ/nℤ\. If g and n are not relatively prime, g has no multiplicative inverse in the ring ℤ/nℤ\. In this case, self is zero\. If n == 0, a division\-by\-zero run\-time panic occurs\.

### ProbablyPrime
```jule
fn ProbablyPrime(*self, n: int): bool
```
Reports whether self is probably prime, applying the Miller\-Rabin test with n pseudorandomly chosen bases as well as a Baillie\-PSW test\.

If self is prime, returns true\. If self is chosen randomly and not prime, probably returns false\. The probability of returning true for a randomly chosen non\-prime is at most ¼ⁿ\.

It is 100% accurate for inputs less than 2⁶⁴\. See Menezes et al\., Handbook of Applied Cryptography, 1997, pp\. 145\-149, and FIPS 186\-4 Appendix F for further discussion of the error probabilities\.

It is not suitable for judging primes that an adversary may have crafted to fool the test\.

### TrailingZeroBits
```jule
fn TrailingZeroBits(*self): uint
```
Returns the number of consecutive least significant zero bits of \|self\|\.

### BitLen
```jule
fn BitLen(*self): int
```
Returns the length of the absolute value of int in bits\. The bit length of 0 is 0\.

### Bit
```jule
fn Bit(*self, i: int): uint
```
Returns the value of the i&#39;th bit of integer\. That is, it returns \(x&gt;&gt;i\)&amp;1\. The bit index i must be &gt;= 0\.

### Abs
```jule
fn Abs(mut *self, &x: *Int)
```
Sets self to \|x\| \(the absolute value of x\)\.

### Not
```jule
fn Not(mut *self, &x: *Int)
```
Sets self = ^x

### Neg
```jule
fn Neg(mut *self, &x: *Int)
```
Sets self to \-x\.

### Odd
```jule
fn Odd(*self): bool
```
Reports whether x\(self\) is odd\.

### Even
```jule
fn Even(*self): bool
```
Reports whether x\(self\) is even\.

### Sign
```jule
fn Sign(*self): int
```
Returns, x = self:<br>
```
Sign() = -1 if x < 0
Sign() = 0 if x == 0
Sign() = +1 if x > 0
```


### Cmp
```jule
fn Cmp(*self, &y: *Int): (r: int)
```
Compares integers\.<br>
```
Returns +1 if self > y
Returns 0 if self == y
Returns -1 if self < y
```


### CmpAbs
```jule
fn CmpAbs(*self, &y: *Int): int
```
Compares absolute value\.<br>
```
Returns +1 if |self| > |y|
Returns 0 if |self| == |y|
Returns -1 if |self| < |y|
```


### SetU64
```jule
fn SetU64(mut *self, x: u64)
```
Sets self to x\.

### SetI64
```jule
fn SetI64(mut *self, x: i64)
```
Sets self to x\.

### SetStr
```jule
fn SetStr(mut *self, mut s: str, base: int): (ok: bool)
```
Sets self to the value of s, interpreted in the given base, and returns a boolean indicating success\. The entire string \(not just a prefix\) must be valid for success\. If SetStr fails, the value of self is undefined\.

The base argument must be 0 or a value between 2 and \[MaxBase\]\. For base 0, the number prefix determines the actual base: A prefix of “0b” or “0B” selects base 2, “0”, “0o” or “0O” selects base 8, and “0x” or “0X” selects base 16\. Otherwise, the selected base is 10 and no prefix is accepted\.

For bases &lt;= 36, lower and upper case letters are considered the same: The letters &#39;a&#39; to &#39;z&#39; and &#39;A&#39; to &#39;Z&#39; represent digit values 10 to 35\. For bases &gt; 36, the upper case letters &#39;A&#39; to &#39;Z&#39; represent the digit values 36 to 61\.

For base 0, an underscore character “\_” may appear between a base prefix and an adjacent digit, and between successive digits; such underscores do not change the value of the number\. Incorrect placement of underscores is reported as an error if there are no other errors\. If base \!= 0, underscores are not recognized and act like any other character that is not a valid digit\.

### I64
```jule
fn I64(*self): i64
```
Returns the i64 representation of x\(self\)\. If x cannot be represented in an i64, the result is undefined\.

### U64
```jule
fn U64(*self): u64
```
Returns the u64 representation of x\(self\)\. If x cannot be represented in a u64, the result is undefined\.

### IsI64
```jule
fn IsI64(*self): bool
```
Reports whether x\(self\) can be represented as an i64\.

### IsU64
```jule
fn IsU64(*self): bool
```
Reports whether x\(self\) can be represented as a u64\.

### Str
```jule
fn Str(*self): str
```
Returns string representation of x\(self\) in decimal format\.

### Format
```jule
fn Format(*self, b: int): str
```
Returns the string representation of x\(self\) in the given base\. Base must be between 2 and 62, inclusive\. The result uses the lower\-case letters &#39;a&#39; to &#39;z&#39; for digit values 10 to 35, and the upper\-case letters &#39;A&#39; to &#39;Z&#39; for digit values 36 to 61\. No prefix \(such as &#34;0x&#34;\) is added to the string\.

### F64
```jule
fn F64(*self): (f64, Accuracy)
```
Returns the f64 value nearest x\(self\), and an indication of any rounding that occurred\.

## Word
```jule
type Word: uint
```
Represents a single digit of a multi\-precision unsigned integer\.