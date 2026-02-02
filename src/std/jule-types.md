# std/jule/types

## Index

[Variables](#variables)\
[fn RealKindOf\(kind: str\): str](#realkindof)\
[fn BitSizeOf\(k: str\): int](#bitsizeof)\
[fn IntFromBits\(bits: int\): str](#intfrombits)\
[fn UintFromBits\(bits: int\): str](#uintfrombits)\
[fn FloatFromBits\(bits: int\): str](#floatfrombits)\
[fn CheckBitInt\(v: str, bit: int\): bool](#checkbitint)\
[fn CheckBitUint\(v: str, bit: int\): bool](#checkbituint)\
[fn CheckBitFloat\(val: str, bit: int\): bool](#checkbitfloat)\
[fn BitSizeOfFloat\(x: f64\): int](#bitsizeoffloat)\
[fn BitSizeOfInt\(x: i64\): int](#bitsizeofint)\
[fn BitSizeOfUint\(x: u64\): int](#bitsizeofuint)\
[fn UpdateTarget\(\)](#updatetarget)\
[fn IsSigInt\(mut k: str\): bool](#issigint)\
[fn IsUnsigInt\(mut k: str\): bool](#isunsigint)\
[fn IsInt\(k: str\): bool](#isint)\
[fn IsFloat\(k: str\): bool](#isfloat)\
[fn IsCmplx\(k: str\): bool](#iscmplx)\
[fn IsNum\(k: str\): bool](#isnum)\
[fn IsSigNum\(k: str\): bool](#issignum)\
[fn MinI\(mut k: str\): i64](#mini)\
[fn MaxI\(mut k: str\): i64](#maxi)\
[fn MaxU\(mut k: str\): u64](#maxu)\
[fn Min\(mut k: str\): f64](#min)\
[fn Max\(mut k: str\): f64](#max)

## Variables

```jule
let BitSize = 0
```
Bit\-size of target architecture\. Possible values are: 32, and 64\. Initialized using build::Arch by the package when imported\.

---

```jule
let SysInt = ""
```
Signed integer kind of target architecture\. Is equivalent to &#34;int&#34;, but specific bit\-sized integer kind\. Initialized using build::Arch by the package when imported\.

---

```jule
let SysUint = ""
```
Unsigned integer kind of target architecture\. Is equivalent to &#34;uint&#34; and &#34;uintptr&#34;, but specific bit\-sized integer kind\. Initialized using build::Arch by the package when imported\.

---

```jule
const (
	I8       = "i8"
	I16      = "i16"
	I32      = "i32"
	I64      = "i64"
	U8       = "u8"
	U16      = "u16"
	U32      = "u32"
	U64      = "u64"
	F32      = "f32"
	F64      = "f64"
	Cmplx64  = "cmplx64"
	Cmplx128 = "cmplx128"
	Uint     = "uint"
	Int      = "int"
	Uintptr  = "uintptr"
	Bool     = "bool"
	Str      = "str"
	Any      = "any"
)
```
Type kinds of primitive types\. These kinds are must match keyword form itself\.

---

```jule
const (
	MaxF32             = 0x1p127 * (1 + (1 - 0x1p-23))
	MinF32             = -0x1p127 * (1 + (1 - 0x1p-23))
	SmallestNonzeroF32 = 0x1p-126 * 0x1p-23

	MaxF64             = 0x1p1023 * (1 + (1 - 0x1p-52))
	MinF64             = -0x1p1023 * (1 + (1 - 0x1p-52))
	SmallestNonzeroF64 = 0x1p-1022 * 0x1p-52
)
```
Floating\-point limit values\. Max is the largest finite value representable by the type\. SmallestNonzero is the smallest positive, non\-zero value representable by the type\.

---

```jule
const (
	MaxI8  = 1<<7 - 1  // 127
	MinI8  = -1 << 7   // -128
	MaxI16 = 1<<15 - 1 // 32767
	MinI16 = -1 << 15  // -32768
	MaxI32 = 1<<31 - 1 // 2147483647
	MinI32 = -1 << 31  // -2147483648
	MaxI64 = 1<<63 - 1 // 9223372036854775807
	MinI64 = -1 << 63  // -9223372036854775808
	MaxU8  = 1<<8 - 1  // 255
	MaxU16 = 1<<16 - 1 // 65535
	MaxU32 = 1<<32 - 1 // 4294967295
	MaxU64 = 1<<64 - 1 // 18446744073709551615
)
```
Integer limit values\.

## RealKindOf
```jule
fn RealKindOf(kind: str): str
```
Returns kind&#39;s bit\-specific kind if bit\-specific like int, uint, and uintptr\. Returns kind if not bit\-specific\. Bit\-size is determined by runtime\.

## BitSizeOf
```jule
fn BitSizeOf(k: str): int
```
Returns kind&#39;s bit\-size\. Returns \-1 if kind is not numeric\.

## IntFromBits
```jule
fn IntFromBits(bits: int): str
```
Returns signed integer kind by bit\-size\. Possible bit\-sizes are: 8, 16, 32, and 64\. Returns empty string if bits is invalid\.

## UintFromBits
```jule
fn UintFromBits(bits: int): str
```
Returns unsigned integer kind by bit\-size\. Possible bit\-sizes are: 8, 16, 32, and 64\. Panics if bits is invalid\.

## FloatFromBits
```jule
fn FloatFromBits(bits: int): str
```
Returns floating\-point kind by bit\-size\. Possible bit\-sizes are: 32, and 64\. Panics if bits is invalid\.

## CheckBitInt
```jule
fn CheckBitInt(v: str, bit: int): bool
```
Reports whether signed integer literal is compatible given bit\-size\.

## CheckBitUint
```jule
fn CheckBitUint(v: str, bit: int): bool
```
Reports whether unsigned integer literal is compatible given bit\-size\.

## CheckBitFloat
```jule
fn CheckBitFloat(val: str, bit: int): bool
```
Reports whether float literal is compatible given bit\-size\.

## BitSizeOfFloat
```jule
fn BitSizeOfFloat(x: f64): int
```
Reports minimum bit\-size of given floating\-point\.

Possible values are:<br>

- 32 for 32\-bit
- 64 for 64\-bit

## BitSizeOfInt
```jule
fn BitSizeOfInt(x: i64): int
```
Reports minimum bit\-size of given signed integer\.

Possible values are:<br>

- 8 for 8\-bit
- 16 for 16\-bit
- 32 for 32\-bit
- 64 for 64\-bit

## BitSizeOfUint
```jule
fn BitSizeOfUint(x: u64): int
```
Reports minimum bit\-size of given unsigned integer\.

Possible values are:<br>

- 8 for 8\-bit
- 16 for 16\-bit
- 32 for 32\-bit
- 64 for 64\-bit

## UpdateTarget
```jule
fn UpdateTarget()
```
Updates platform\-specific information based on the target\. If you will update target configuration, you should call this function\. In other words, new configurations is not applied for types\.

## IsSigInt
```jule
fn IsSigInt(mut k: str): bool
```
Reports whether kind is signed integer\.

## IsUnsigInt
```jule
fn IsUnsigInt(mut k: str): bool
```
Reports kind is unsigned integer\.

## IsInt
```jule
fn IsInt(k: str): bool
```
Reports whether kind is signed/unsigned integer\.

## IsFloat
```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float\.

## IsCmplx
```jule
fn IsCmplx(k: str): bool
```
Reports whether kind is complex\.

## IsNum
```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric\.

## IsSigNum
```jule
fn IsSigNum(k: str): bool
```
Reports whether kind is signed numeric\.

## MinI
```jule
fn MinI(mut k: str): i64
```
Returns minimum value of signed integer kinds\. Panics if kind is invalid\.

## MaxI
```jule
fn MaxI(mut k: str): i64
```
Returns minimum value of signed integer kinds\. Panics if kind is invalid\.

## MaxU
```jule
fn MaxU(mut k: str): u64
```
Returns maximum value of unsigned integer kinds\. Panics if kind is invalid\.

## Min
```jule
fn Min(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating\-point kinds\. Panics if kind is invalid\.

## Max
```jule
fn Max(mut k: str): f64
```
Returns maximum value of signed/unsigned integer and floating\-point kinds\. Panics if kind is invalid\.