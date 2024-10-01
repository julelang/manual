# std/math/rand

## Functions

```jule
fn NewSource(seed: u64): Source
```
Returns new default source by seed.

The order and numbers produced vary depending on the seed. Since PRNGs are inherently deterministic, using a fixed seed means your program will generate the same numbers every time.

If you want to achieve randomness somehow, use a variable seed. A simple solution for seeds that will create the illusion of randomness is to use time. Unix-time seconds would be a simple seed solution.

## Structs

```jule
struct Rand
```
Implements a type of pseudo random number generator (PRNG). Outputs might be easily predictable regardless of how it's seeded. For random numbers suitable for security-sensitive work, it is not recommended.

**Methods:**

`static fn New(src: Source): &Rand`\
Returns new `Rand` that uses random values from `src` to generate other random values.

`fn U64(self): u64`\
Returns a pseudo-random 64-bit value as `u64`.

`fn I64(self): u32`\
Returns a pseudo-random 32-bit value as `u32`.

`fn I64(self): i64`\
Returns a non-negative pseudo-random 64-bit value as `i64`.

`fn I32(self): i32`\
Returns a non-negative pseudo-random 32-bit value as `i32`.

`fn Int(self): int`\
Returns a non-negative pseudo-random int.

`fn U64n(self, n: u64): u64`\
Returns, as a `u64`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n == 0`.

`fn I64n(self, n: i64): i64`\
Returns, as an `i64`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n == 0`.

`fn I32n(self, n: i32): i32`\
Returns, as an `i32`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n <= 0`.

`fn U32n(self, n: u32): u32`\
Returns, as a `u32`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n == 0`.

`fn Intn(self, n: int): int`\
Returns, as an `int`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n <= 0`.

`fn Uintn(self, n: uint): uint`\
Returns, as a `uint`, a non-negative pseudo-random number in the half-open interval `[0,n)`. It panics if `n == 0`.

`fn F64(self): f64`\
Returns, as a `f64`, a pseudo-random number in the half-open interval `[0.0,1.0)`.

`fn F32(self): f32`\
Returns, as a `f32`, a pseudo-random number in the half-open interval `[0.0,1.0)`.

## Traits

```jule
trait Source {
	fn U64(self)
}
```
Source of uniformly-distributed pseudo-random u64 values in the range `[0, 1<<64)`. It is not safe for concurrent use by multiple threads.