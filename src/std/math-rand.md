# std/math/rand

## Index

[fn NewSource\(seed: u64\): Source](#newsource)\
[trait Source](#source)\
[struct Rand](#rand)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(src: Source\): &amp;Rand](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64\(self\): u64](#u64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U32\(self\): u32](#u32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I64\(self\): i64](#i64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I32\(self\): i32](#i32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Int\(self\): int](#int)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U64n\(self, n: u64\): u64](#u64n)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I64n\(self, n: i64\): i64](#i64n)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn I32n\(self, n: i32\): i32](#i32n)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn U32n\(self, n: u32\): u32](#u32n)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Intn\(self, n: int\): int](#intn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Uintn\(self, n: uint\): uint](#uintn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn F64\(self\): f64](#f64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn F32\(self\): f32](#f32)



## NewSource
```jule
fn NewSource(seed: u64): Source
```
Returns new default source by seed\.

The order and numbers produced vary depending on the seed\. Since PRNGs are inherently deterministic, using a fixed seed means your program will generate the same numbers every time\.

If you want to achieve randomness somehow, use a variable seed\. A simple solution for seeds that will create the illusion of randomness is to use time\. Unix\-time seconds would be a simple seed solution\.

## Source
```jule
trait Source {
	fn U64(self): u64
}
```
Source of uniformly\-distributed pseudo\-random u64 values in the range \[0, 1&lt;&lt;64\)\. It is not safe for concurrent use by multiple threads\.

## Rand
```jule
struct Rand {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements a type of pseudo random number generator \(PRNG\)\. Outputs might be easily predictable regardless of how it&#39;s seeded\. For random numbers suitable for security\-sensitive work, it is not recommended\.

### New
```jule
fn New(src: Source): &Rand
```
Returns new Rand that uses random values from src to generate other random values\.

### U64
```jule
fn U64(self): u64
```
Returns a pseudo\-random 64\-bit value as u64\.

### U32
```jule
fn U32(self): u32
```
Returns a pseudo\-random 32\-bit value as u32\.

### I64
```jule
fn I64(self): i64
```
Returns a non\-negative pseudo\-random 64\-bit value as i64\.

### I32
```jule
fn I32(self): i32
```
Returns a non\-negative pseudo\-random 32\-bit value as i32\.

### Int
```jule
fn Int(self): int
```
Returns a non\-negative pseudo\-random int\.

### U64n
```jule
fn U64n(self, n: u64): u64
```
Returns, as a u64, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### I64n
```jule
fn I64n(self, n: i64): i64
```
Returns, as an i64, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### I32n
```jule
fn I32n(self, n: i32): i32
```
Returns, as an i32, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n &lt;= 0\.

### U32n
```jule
fn U32n(self, n: u32): u32
```
Returns, as a u32, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### Intn
```jule
fn Intn(self, n: int): int
```
Returns, as an int, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n &lt;= 0\.

### Uintn
```jule
fn Uintn(self, n: uint): uint
```
Returns, as a uint, a non\-negative pseudo\-random number in the half\-open interval \[0,n\)\. It panics if n == 0\.

### F64
```jule
fn F64(self): f64
```
Returns, as a f64, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\)\.

### F32
```jule
fn F32(self): f32
```
Returns, as a f32, a pseudo\-random number in the half\-open interval \[0\.0,1\.0\)\.