# std/jule/types

## Index

[Variables](#variables)\
[fn RealKindOf(kind: str): str](#realkindof)\
[fn BitSizeOf(k: str): int](#bitsizeof)\
[fn IntFromBits(bits: int): str](#intfrombits)\
[fn UintFromBits(bits: int): str](#uintfrombits)\
[fn FloatFromBits(bits: int): str](#floatfrombits)\
[fn CheckBitInt(v: str, bit: int): bool](#checkbitint)\
[fn CheckBitUint(v: str, bit: int): bool](#checkbituint)\
[fn CheckBitFloat(val: str, bit: int): bool](#checkbitfloat)\
[fn BitSizeOfFloat(x: f64): int](#bitsizeoffloat)\
[fn BitSizeOfInt(x: i64): int](#bitsizeofint)\
[fn BitSizeOfUint(x: u64): int](#bitsizeofuint)\
[fn UpdateTarget()](#updatetarget)\
[fn MinI(mut k: str): i64](#mini)\
[fn MaxI(mut k: str): i64](#maxi)\
[fn MaxU(mut k: str): u64](#maxu)\
[fn Min(mut k: str): f64](#min)\
[fn Max(mut k: str): f64](#max)\
[fn IsSigInt(mut k: str): bool](#issigint)\
[fn IsUnsigInt(mut k: str): bool](#isunsigint)\
[fn IsInt(k: str): bool](#isint)\
[fn IsFloat(k: str): bool](#isfloat)\
[fn IsNum(k: str): bool](#isnum)\
[fn IsSigNum(k: str): bool](#issignum)\
[enum Kind](#kind)

## Variables

```jule
static BitSize = 0
```
Bit-size of target architecture. Possible values are: 32, and 64. Initialized using build::Arch by the package when imported.

---

```jule
static SysInt = ""
```
Signed integer kind of target architecture. Is equivalent to &#34;int&#34;, but specific bit-sized integer kind. Initialized using build::Arch by the package when imported.

---

```jule
static SysUint = ""
```
Unsigned integer kind of target architecture. Is equivalent to &#34;uint&#34; and &#34;uintptr&#34;, but specific bit-sized integer kind. Initialized using build::Arch by the package when imported.

---

```jule
const MaxF32 = 0x1p127 * (1 + (1 - 0x1p-23))
```
Maximum positive value of 32-bit floating-points.

---

```jule
const MinF32 = -0x1p127 * (1 + (1 - 0x1p-23))
```
Maximum negative value of 32-bit floating-points.

---

```jule
const SmallestNonZeroF32 = 0x1p-126 * 0x1p-23
```
The smallest positive non-zero value representable by the 32-bit floating-points.

---

```jule
const MaxF64 = 0x1p1023 * (1 + (1 - 0x1p-52))
```
Maximum positive value of 64-bit floating-points.

---

```jule
const MinF64 = -0x1p1023 * (1 + (1 - 0x1p-52))
```
Maximum negative value of 64-bit floating-points.

---

```jule
const SmallestNonZeroF64 = 0x1p-1022 * 0x1p-52
```
The smallest positive non-zero value representable by the 64-bit floating-points.

---

```jule
const MaxI8 = 127
```
Maximum positive value of 8-bit signed integers.

---

```jule
const MinI8 = -128
```
Maximum negative value of 8-bit signed integers.

---

```jule
const MaxI16 = 32767
```
Maximum positive value of 16-bit signed integers.

---

```jule
const MinI16 = -32768
```
Maximum negative value of 16-bit signed integers.

---

```jule
const MaxI32 = 2147483647
```
Maximum positive value of 32-bit signed integers.

---

```jule
const MinI32 = -2147483648
```
Maximum negative value of 32-bit signed integers.

---

```jule
const MaxI64 = 9223372036854775807
```
Maximum positive value of 64-bit signed integers.

---

```jule
const MinI64 = -9223372036854775808
```
Maximum negative value of 64-bit signed integers.

---

```jule
const MaxU8 = 255
```
Maximum value of 8-bit unsigned integers.

---

```jule
const MaxU16 = 65535
```
Maximum value of 16-bit unsigned integers.

---

```jule
const MaxU32 = 4294967295
```
Maximum value of 32-bit unsigned integers.

---

```jule
const MaxU64 = 18446744073709551615
```
Maximum value of 64-bit unsigned integers.

## RealKindOf
```jule
fn RealKindOf(kind: str): str
```
Returns kind&#39;s bit-specific kind if bit-specific like int, uint, and uintptr. Returns kind if not bit-specific. Bit-size is determined by runtime.

## BitSizeOf
```jule
fn BitSizeOf(k: str): int
```
Returns kind&#39;s bit-size. Returns -1 if kind is not numeric.

## IntFromBits
```jule
fn IntFromBits(bits: int): str
```
Returns signed integer kind by bit-size. Possible bit-sizes are: 8, 16, 32, and 64. Returns empty string if bits is invalid.

## UintFromBits
```jule
fn UintFromBits(bits: int): str
```
Returns unsigned integer kind by bit-size. Possible bit-sizes are: 8, 16, 32, and 64. Returns empty string if bits is invalid.

## FloatFromBits
```jule
fn FloatFromBits(bits: int): str
```
Returns floating-point kind by bit-size. Possible bit-sizes are: 32, and 64. Returns empty string if bits is invalid.

## CheckBitInt
```jule
fn CheckBitInt(v: str, bit: int): bool
```
Reports whether signed integer literal is compatible given bit-size.

## CheckBitUint
```jule
fn CheckBitUint(v: str, bit: int): bool
```
Reports whether unsigned integer literal is compatible given bit-size.

## CheckBitFloat
```jule
fn CheckBitFloat(val: str, bit: int): bool
```
Reports whether float literal is compatible given bit-size.

## BitSizeOfFloat
```jule
fn BitSizeOfFloat(x: f64): int
```
Reports minimum bit-size of given floating-point.

Possible values are:<br>

- 32 for 32-bit
- 64 for 64-bit

## BitSizeOfInt
```jule
fn BitSizeOfInt(x: i64): int
```
Reports minimum bit-size of given signed integer.

Possible values are:<br>

- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

## BitSizeOfUint
```jule
fn BitSizeOfUint(x: u64): int
```
Reports minimum bit-size of given unsigned integer.

Possible values are:<br>

- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

## UpdateTarget
```jule
fn UpdateTarget()
```
Updates platform-specific information based on the target. If you will update target configuration, you should call this function. In other words, new configurations is not applied for types.

## MinI
```jule
fn MinI(mut k: str): i64
```
Returns minimum value of signed integer kinds. Returns 0 if kind iss invalid.

## MaxI
```jule
fn MaxI(mut k: str): i64
```
Returns minimum value of signed integer kinds. Returns 0 if kind is invalid.

## MaxU
```jule
fn MaxU(mut k: str): u64
```
Returns maximum value of unsigned integer kinds. Returns 0 if kind is invalid.

## Min
```jule
fn Min(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating-point kinds. Returns 0 if kind is invalid.

## Max
```jule
fn Max(mut k: str): f64
```
Returns maximum value of signed/unsigned integer and floating-point kinds. Returns 0 if kind is invalid.

## IsSigInt
```jule
fn IsSigInt(mut k: str): bool
```
Reports whether kind is signed integer.

## IsUnsigInt
```jule
fn IsUnsigInt(mut k: str): bool
```
Reports kind is unsigned integer.

## IsInt
```jule
fn IsInt(k: str): bool
```
Reports whether kind is signed/unsigned integer.

## IsFloat
```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float.

## IsNum
```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric.

## IsSigNum
```jule
fn IsSigNum(k: str): bool
```
Reports whether kind is signed numeric.

## Kind
```jule
enum Kind: str {
	I8: "i8",           // Kind of signed 8-bit integer
	I16: "i16",         // Kind of signed 16-bit integer
	I32: "i32",         // Kind of signed 32-bit integer
	I64: "i64",         // Kind of signed 64-bit integer
	U8: "u8",           // Kind of unsigned 8-bit integer
	U16: "u16",         // Kind of unsigned 16-bit integer
	U32: "u32",         // Kind of unsigned 32-bit integer
	U64: "u64",         // Kind of unsigned 64-bit integer
	F32: "f32",         // Kind of 32-bit floating-point
	F64: "f64",         // Kind of 64-bit floating-point
	Uint: "uint",       // Kind of system specific bit-size unsigned integer
	Int: "int",         // Kind of system specific bit-size signed integer
	Uintptr: "uintptr", // Kind of system specific bit-size unsigned integer
	Bool: "bool",       // Kind of boolean
	Str: "str",         // Kind of string
	Any: "any",         // Kind of any type
}
```
Type kinds of primitive types. These kinds are must match keyword form itself.