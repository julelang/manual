# std/math/big

## Type Aliases

```jule
type Word: uint
```
Represents a single digit of a multi-precision unsigned integer.

## Structures

```jule
struct Int
```
An Int represents a signed multi-precision integer. The zero value for an Int represents the value 0.

Copying is completely safe and there is no additional allocation cost. A common buffer is used within the scope of interior mutability. The value returned as a result of any calculation must be independent of the parameters taken or must not change it. Therefore, even a simple addition or subtraction operation can realize a new internal allocation. Some methods may continue to use common allocation without any changes if possible, but this is not a guarantee. This implementation cares adhering to Jule's mechanics, such as immutability, and keeping side effects on common buffers as minimal as possible. If more control over common allocations is required at the expense of ignoring that points, this implementation may not be a good choice.

Note that methods may leak the Int's value through timing side-channels. Because of this and because of the scope and complexity of the implementation, Int is not well-suited to implement cryptographic operations. The standard library avoids exposing non-trivial Int methods to attacker-controlled inputs and the determination of whether a bug in std/math/big is considered a security vulnerability might depend on the impact on the standard library.

**Methods:**

`static fn Parse(mut s: str, base: int)!: Int`\
Returns int with the value of s, interpreted in the given base, and returns int and a boolean indicating success. The entire string (not just a prefix) must be valid for success. If Parse fails, it panics. The first byte is optional to determine sign of value of s. This first byte is not sign, it assumes value as positive. The `-` sign handled as negative number, `+` is valid also.

The base argument must be 0 or a value between 2 and \[MaxBase\]. For base 0, the number prefix determines the actual base: A prefix of “0b” or “0B” selects base 2, “0”, “0o” or “0O” selects base 8, and “0x” or “0X” selects base 16. Otherwise, the selected base is 10 and no prefix is accepted.

For bases <= 36, lower and upper case letters are considered the same: The letters 'a' to 'z' and 'A' to 'Z' represent digit values 10 to 35. For bases > 36, the upper case letters 'A' to 'Z' represent the digit values 36 to 61.

For base 0, an underscore character “_” may appear between a base prefix and an adjacent digit, and between successive digits; such underscores do not change the value of the number. Incorrect placement of underscores is reported as an error if there are no other errors. If base != 0, underscores are not recognized and act like any other character that is not a valid digit.

`static fn FromU64(x: u64): Int`\
Returns Int by x.

`static fn FromI64(x: i64): Int`\
Returns Int by x.

`static fn MulRange(mut a: i64, mut b: i64): Int`\
Returns the product of all integers in the range [a, b] inclusively. If a > b (empty range), the result is 1.

`static fn Jacobi(x: Int, y: Int): int`\
Returns the Jacobi symbol (x/y), either +1, -1, or 0. The y argument must be an odd integer.

`static fn Binomial(n: i64, mut k: i64): Int`\
Returns the binomial coefficient C(n, k).

`fn Add(self, y: Int): Int`\
Returns x(self) + y.

`fn Sub(self, y: Int): Int`\
Returns x(self) - y.

`fn Mul(self, y: Int): Int`\
Returns x(self) * y.

`fn Sqrt(self): Int`\
Returns square root |√x(self)|. Panics if number is negative.

`fn QuoRem(self, y: Int): (q: Int, r: Int)`\
Returns the quotient x(self)/y and r to the remainder x%y and returns the pair (z, r) for y != 0. If y == 0, a division-by-zero run-time panic occurs.

Implements T-division and modulus (like Jule):

q = x/y      with the result truncated to zero \
r = x - y*q

(See Daan Leijen, “Division and Modulus for Computer Scientists”.) See \[DivMod\] for Euclidean division and modulus (unlike Jule).

`fn Quo(self, y: Int): (q: Int)`\
Returns the quotient x(self)/y for y != 0. If y == 0, a division-by-zero run-time panic occurs. Implements truncated division (like Jule); see \[Int.QuoRem\] for more details.

`fn Div(self, y: Int): Int`\
Returns the quotient x(self)/y for y != 0. If y == 0, a division-by-zero runtime panic occurs. Implements Euclidean division; see \[Int.DivMod\] for more details.

`fn Mod(self, y: Int): Int`\
Returns the modulus x(self)%y for y != 0. If y == 0, a division-by-zero run-time panic occurs. Implements Euclidean modulus (unlike Jule); see \[Int.DivMod\] for more details.

`fn DivMod(self, y: Int): (q: Int, m: Int)`\
Returns the quotient x(self) div y and m to the modulus x mod y and returns the pair (z, m) for y != 0. If y == 0, a division-by-zero run-time panic occurs.

Implements Euclidean division and modulus (unlike Jule):

q = x div y  such that \
m = x - y*q  with 0 <= m < |y|

(See Raymond T. Boute, “The Euclidean definition of the functions div and mod”. ACM Transactions on Programming Languages and Systems (TOPLAS), 14(2):127-144, New York, NY, USA, 4/1992. ACM press.) See \[Int.QuoRem\] for T-division and modulus (like Jule).

`fn Lsh(self, y: uint): Int`\
Returns x(self) << y.

`fn Rsh(self, y: uint): Int`\
Returns x(self) >> y.

`fn Or(self, y: Int): Int`\
Returns x(self) | y.

`fn And(self, y: Int): Int`\
Returns x(self) & y.

`fn Xor(self, y: Int): Int`\
Returns x(self) ^ y.

`fn ExpMod(self, y: Int, m: Int): Int`\
Returns x(self)\*\*y mod |m| (i.e. the sign of m is ignored). If m == 0, returns x\*\*y unless y <= 0 then returns 1. If m != 0, y < 0, and self and m are not relatively prime, returns zero.

Modular exponentiation of inputs of a particular size is not a cryptographically constant-time operation.

`fn Exp(self, y: Int): Int`\
Calls the \[Int.ExpMod\] method with zero mod.

`fn GCD1(self, mut &x: Int, mut &y: Int, b: Int): Int`\
Returns the greatest common divisor of a(self) and b. For x and y, GCD sets their value such that z (result) = a\*x + b\*y.

a and b may be positive, zero or negative. Regardless of the signs of a and b, z is always >= 0.

If a == b == 0, GCD returns x = y = 0.

If a == 0 and b != 0, GCD returns |b|, x = 0, y = sign(b) * 1.

If a != 0 and b == 0, GCD returns |a|, x = sign(a) * 1, y = 0.

`fn GCD(self, b: Int): Int`\
Same as the \[Int.GCD1\] method, but not takes the |x| and |y| parameters.

`fn ModInverse(self, mut n: Int): Int`\
Returns the multiplicative inverse of g(self) in the ring ℤ/nℤ. If g and n are not relatively prime, g has no multiplicative inverse in the ring ℤ/nℤ.  In this case, z is unchanged and the return value is zero. If n == 0, a division-by-zero run-time panic occurs.

`fn ProbablyPrime(self, n: int): bool`\
Reports whether x(self) is probably prime, applying the Miller-Rabin test with n pseudorandomly chosen bases as well as a Baillie-PSW test.

If x is prime, returns true. If x is chosen randomly and not prime, probably returns false. The probability of returning true for a randomly chosen non-prime is at most ¼ⁿ.

It is 100% accurate for inputs less than 2⁶⁴. See Menezes et al., Handbook of Applied Cryptography, 1997, pp. 145-149, and FIPS 186-4 Appendix F for further discussion of the error probabilities.

It is not suitable for judging primes that an adversary may have crafted to fool the test.

`fn TrailingZeroBits(self): uint`\
Returns the number of consecutive least significant zero bits of |x(self)|.

`fn BitLen(self): int`\
Returns the length of the absolute value of int in bits. The bit length of 0 is 0.

`fn Bit(self, i: int): uint`\
Returns the value of the i'th bit of integer. That is, it returns (x>>i)&1. The bit index i must be >= 0.

`fn Abs(self): Int`\
Returns absolute value of x(self).

`fn BitNot(self): Int`\
Returns ^x(self).

`fn Neg(self): Int`\
Returns -x(self).

`fn Odd(self): bool`\
Reports whether x(self) is odd.

`fn Even(self): bool`\
Reports whether x(self) is even.

`fn Sign(self): int`\
Sign returns, x = self:
- -1 if x < 0;
- 0 if x == 0;
- +1 if x > 0.

`fn I64(self): i64`\
Returns the i64 representation of x(self). If x cannot be represented in an i64, the result is undefined.

`fn U64(self): u64`\
Returns the u64 representation of x(self). If x cannot be represented in a u64, the result is undefined.

`fn IsI64(self): bool`\
Reports whether x(self) can be represented as an i64.

`fn IsU64(self): bool`\
Reports whether x(self) can be represented as a u64.

`fn Str(self): str`\
Returns string representation of x(self) in decimal format.

`fn Format(self, b: int): str`\
Returns the string representation of x(self) in the given base. Base must be between 2 and 62, inclusive. The result uses the lower-case letters 'a' to 'z' for digit values 10 to 35, and the upper-case letters 'A' to 'Z' for digit values 36 to 61. No prefix (such as "0x") is added to the string.

`fn Cmp(self, y: Int): (r: int)`\
Compares integers. x = self.\
Returns +1 if x > y\
Returns 0 if x == y\
Returns -1 if x < y

`fn CmpAbs(self, y: Int): int`\
Compares absolute value. x = self.\
Returns +1 if |x| > |y|\
Returns 0 if |x| == |y|\
Returns -1 if |x| < |y|

## Enums

```jule
enum ConvError
```
Conversion error codes.

**Fields:**

- `NoDigits`: Number has no digits.
- `InvalidSep`: '_' must separate successive digits.