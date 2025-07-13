# std/math/rand

## Index

[fn New\(src: Source\): &amp;Rand](#new)\
[fn I64\(\): i64](#i64)\
[fn U32\(\): u32](#u32)\
[fn U64N\(n: u64\): u64](#u64n)\
[fn U32N\(n: u32\): u32](#u32n)\
[fn U64\(\): u64](#u64)\
[fn I32\(\): i32](#i32)\
[fn Int\(\): int](#int)\
[fn Uint\(\): uint](#uint)\
[fn I64N\(n: i64\): i64](#i64n)\
[fn Int32N\(n: i32\): i32](#int32n)\
[fn IntN\(n: int\): int](#intn)\
[fn UintN\(n: uint\): uint](#uintn)\
[fn F64\(\): f64](#f64)\
[fn F32\(\): f32](#f32)\
[fn Perm\(n: int\): \[\]int](#perm)\
[fn Shuffle\(n: int, swap: fn\(i: int, j: int\)\)](#shuffle)\
[fn NormF64\(\): f64](#normf64)\
[fn ExpFloat64\(\): f64](#expfloat64)\
[fn NewZipf\(r: &amp;Rand, s: f64, v: f64, imax: u64\): &amp;Zipf](#newzipf)\
[fn NewPCG\(seed1: u64, seed2: u64\): &amp;PCG](#newpcg)\
[trait Source](#source)\
[struct Rand](#rand)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NormF64\(\*self\): f64](#normf64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64\(\*self\): u64](#u64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U32\(\*self\): u32](#u32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I64\(\*self\): i64](#i64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I32\(\*self\): i32](#i32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Int\(\*self\): int](#int-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Uint\(\*self\): uint](#uint-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64N\(\*self, n: u64\): u64](#u64n-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I64N\(\*self, n: i64\): i64](#i64n-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I32N\(\*self, n: i32\): i32](#i32n)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U32N\(\*self, n: u32\): u32](#u32n-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IntN\(\*self, n: int\): int](#intn-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UintN\(\*self, n: uint\): uint](#uintn-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn F64\(\*self\): f64](#f64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn F32\(\*self\): f32](#f32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Perm\(\*self, n: int\): \[\]int](#perm-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Shuffle\(\*self, n: int, swap: fn\(i: int, j: int\)\)](#shuffle-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ExpF64\(\*self\): f64](#expf64)\
[struct Zipf](#zipf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64\(\*self\): u64](#u64-2)\
[struct PCG](#pcg)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seed\(\*self, seed1: u64, seed2: u64\)](#seed)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64\(\*self\): u64](#u64-3)



## New
```jule
fn New(src: Source): &Rand
```
Returns new Rand that uses random values from src to generate other random values\.

## I64
```jule
fn I64(): i64
```
Returns a non\-negative pseudo\-random 63\-bit integer as an i64 from the default Source\.

## U32
```jule
fn U32(): u32
```
Returns a pseudo\-random 32\-bit value as a u32 from the default Source\.

## U64N
```jule
fn U64N(n: u64): u64
```
Returns, as a u64, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n == 0\.

## U32N
```jule
fn U32N(n: u32): u32
```
Returns, as a u32, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n == 0\.

## U64
```jule
fn U64(): u64
```
Returns a pseudo\-random 64\-bit value as a u64 from the default Source\.

## I32
```jule
fn I32(): i32
```
Returns a non\-negative pseudo\-random 31\-bit integer as an i32 from the default Source\.

## Int
```jule
fn Int(): int
```
Returns a non\-negative pseudo\-random int from the default Source\.

## Uint
```jule
fn Uint(): uint
```
Returns a pseudo\-random uint from the default Source\.

## I64N
```jule
fn I64N(n: i64): i64
```
Returns, as an i64, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n &lt;= 0\.

## Int32N
```jule
fn Int32N(n: i32): i32
```
Returns, as an i32, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n &lt;= 0\.

## IntN
```jule
fn IntN(n: int): int
```
Returns, as an int, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n &lt;= 0\.

## UintN
```jule
fn UintN(n: uint): uint
```
Returns, as a uint, a pseudo\-random number in the half\-open interval \[0,n\) from the default Source\. It panics if n == 0\.

## F64
```jule
fn F64(): f64
```
Returns, as a f64, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\) from the default Source\.

## F32
```jule
fn F32(): f32
```
Returns, as a f32, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\) from the default Source\.

## Perm
```jule
fn Perm(n: int): []int
```
Returns, as a slice of n ints, a pseudo\-random permutation of the integers in the half\-open interval \[0,n\) from the default Source\.

## Shuffle
```jule
fn Shuffle(n: int, swap: fn(i: int, j: int))
```
Shuffle pseudo\-randomizes the order of elements using the default Source\. n is the number of elements\. It panics if n &lt; 0\. swap swaps the elements with indexes i and j\.

## NormF64
```jule
fn NormF64(): f64
```
Returns a normally distributed f64 in the range \[\-f64\.Max, \+f64\.Max\] with standard normal distribution \(mean = 0, stddev = 1\) from the default Source\. To produce a different normal distribution, callers can adjust the output using:

```
sample = NormF64() * desiredStdDev + desiredMean
```


## ExpFloat64
```jule
fn ExpFloat64(): f64
```
Returns an exponentially distributed f64 in the range \(0, \+f64\.Max\] with an exponential distribution whose rate parameter \(lambda\) is 1 and whose mean is 1/lambda \(1\) from the default Source\. To produce a distribution with a different rate parameter, callers can adjust the output using:

```
sample = ExpF64() / desiredRateParameter
```


## NewZipf
```jule
fn NewZipf(r: &Rand, s: f64, v: f64, imax: u64): &Zipf
```
Returns a Zipf variate generator\. The generator generates values k ∈ \[0, imax\] such that P\(k\) is proportional to \(v \+ k\) \*\* \(\-s\)\. Requirements: s &gt; 1 and v &gt;= 1\.

## NewPCG
```jule
fn NewPCG(seed1: u64, seed2: u64): &PCG
```
Returns a new PCG seeded with the given values\.

## Source
```jule
trait Source {
	fn U64(*self): u64
}
```
A Source is a source of uniformly\-distributed pseudo\-random u64 values in the range \[0, 1&lt;&lt;64\)\.

It is not safe for concurrent use by multiple threads\.

## Rand
```jule
struct Rand {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements a type of pseudo random number generator \(PRNG\)\. Outputs might be easily predictable regardless of how it&#39;s seeded\. For random numbers suitable for security\-sensitive work, it is not recommended\.

### NormF64
```jule
fn NormF64(*self): f64
```
Returns a normally distributed f64 in the range \[\-f64\.Max, \+f64\.Max\] with standard normal distribution \(mean = 0, stddev = 1\) from the default Source\. To produce a different normal distribution, callers can adjust the output using:

```
sample = NormF64() * desiredStdDev + desiredMean
```


### U64
```jule
fn U64(*self): u64
```
Returns a pseudo\-random 64\-bit value as u64\.

### U32
```jule
fn U32(*self): u32
```
Returns a pseudo\-random 32\-bit value as u32\.

### I64
```jule
fn I64(*self): i64
```
Returns a non\-negative pseudo\-random 64\-bit value as i64\.

### I32
```jule
fn I32(*self): i32
```
Returns a non\-negative pseudo\-random 32\-bit value as i32\.

### Int
```jule
fn Int(*self): int
```
Returns a non\-negative pseudo\-random int\.

### Uint
```jule
fn Uint(*self): uint
```
Returns a pseudo\-random uint\.

### U64N
```jule
fn U64N(*self, n: u64): u64
```
Returns, as a u64, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### I64N
```jule
fn I64N(*self, n: i64): i64
```
Returns, as an i64, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### I32N
```jule
fn I32N(*self, n: i32): i32
```
Returns, as an i32, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n &lt;= 0\.

### U32N
```jule
fn U32N(*self, n: u32): u32
```
Returns, as a u32, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### IntN
```jule
fn IntN(*self, n: int): int
```
Returns, as an int, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n &lt;= 0\.

### UintN
```jule
fn UintN(*self, n: uint): uint
```
Returns, as a uint, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### F64
```jule
fn F64(*self): f64
```
Returns, as a f64, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\)\.

### F32
```jule
fn F32(*self): f32
```
Returns, as a f32, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\)\.

### Perm
```jule
fn Perm(*self, n: int): []int
```
Returns, as a slice of n ints, a pseudo\-random permutation of the integers in the half\-open interval \[0,n\)\.

### Shuffle
```jule
fn Shuffle(*self, n: int, swap: fn(i: int, j: int))
```
Shuffle pseudo\-randomizes the order of elements\. n is the number of elements\. It panics if n &lt; 0\. swap swaps the elements with indexes i and j\.

### ExpF64
```jule
fn ExpF64(*self): f64
```
Returns an exponentially distributed f64 in the range \(0, \+f64\.Max\] with an exponential distribution whose rate parameter \(lambda\) is 1 and whose mean is 1/lambda \(1\) from the default Source\. To produce a distribution with a different rate parameter, callers can adjust the output using:

```
sample = ExpF64() / desiredRateParameter
```


## Zipf
```jule
struct Zipf {
	// NOTE: contains filtered hidden or unexported fields
}
```
A Zipf generates Zipf distributed variates\.

### Implemented Traits

- `Source`

### U64
```jule
fn U64(*self): u64
```
Returns a value drawn from the Zipf distribution described by the Zipf object\.

## PCG
```jule
struct PCG {
	// NOTE: contains filtered hidden or unexported fields
}
```
A PCG is a PCG generator with 128 bits of internal state\. A zero PCG is equivalent to NewPCG\(0, 0\)\.

### Implemented Traits

- `Source`

### Seed
```jule
fn Seed(*self, seed1: u64, seed2: u64)
```
Resets the PCG to behave the same way as NewPCG\(seed1, seed2\)\.

### U64
```jule
fn U64(*self): u64
```
Return a uniformly\-distributed random u64 value\.