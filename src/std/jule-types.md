# std::jule::types

## Globals
### `static BitSize: int`
Bit-size of target architecture.\
Possible values are: 32, and 64.

---

### `static SysInt: str`
Signed integer kind of target architecture.\
Is equavalent to `int`, but specific bit-sized integer kind.

---

### `static SysUint: str`
Unsigned integer kind of target architecture.\
Is equavalent to `uint` and `uintptr`, but specific bit-sized integer kind.

---

### `MaxF32`
Maximum positive value of 32-bit floating-points.

---

### `MinF32`
Maximum negative value of 32-bit floating-points.

---

### `MaxF64`
Maximum positive value of 64-bit floating-points.

---

### `MinF64`
Maximum negative value of 64-bit floating-points.

---

### `MaxI8`
Maximum positive value of 8-bit signed integers.

---

### `MinI8`
Maximum negative value of 8-bit signed integers.

---

### `MaxI16`
Maximum positive value of 16-bit signed integers.

---

### `MinI16`
Maximum negative value of 16-bit signed integers.

---

### `MaxI32`
Maximum positive value of 32-bit signed integers.

---

### `MinI32`
Maximum negative value of 32-bit signed integers.

---

### `MaxI64`
Maximum positive value of 64-bit signed integers.

---

### `MinI64`
Maximum negative value of 64-bit signed integers.

---

### `MaxU8`
Maximum value of 8-bit unsigned integers.

---

### `MaxU16`
Maximum value of 16-bit unsigned integers.

---

### `MaxU32`
Maximum value of 32-bit unsigned integers.

---

### `MaxU64`
Maximum value of 64-bit unsigned integers.

## Functions
```jule
fn UpdateTarget()
```
Updates platform-specific informations by target. If you will update target configuration, you should call this function. In other words, new configurations is not applied for types.

```jule
fn RealKindOf(kind: str): str
```
Returns kind's bit-specific kind if bit-specific like int, uint, and uintptr.\
Returns kind if not bit-specific.\
Bit-size is determined by runtime.

---

```jule
fn BitsizeOf(k: str): int
```
Returns kind's bit-size.\
Returns -1 if kind is not numeric.

---

```jule
fn IntFromBits(bits: int): str
```
Returns signed integer kind by bit-size.\
Possible bit-sizes are: 8, 16, 32, and 64.\
Returns empty string if bits is invalid.

---

```jule
fn UintFromBits(bits: int): str
```
Returns unsigned integer kind by bit-size.\
Possible bit-sizes are: 8, 16, 32, and 64.\
Returns empty string if bits is invalid.

---

```jule
fn FloatFromVits(bits: int): str
```
Returns floating-point kind by bit-size.\
Possible bit-sizes are: 32, and 64.\
Returns empty string if bits is invalid.

---

```jule
fn CheckBitInt(v: str, bit: int): bool
```
Reports whether signed integer literal is compatible given bit-size.

---

```jule
fn CheckBitUint(v: str, bit: int): bool
```
Reports whether unsigned integer literal is compatible given bit-size.

---

```jule
fn CheckBitFloat(val: str, bit: int): bool
```
Reports whether float literal is compatible given bit-size. 

---

```jule
fn BitsizeOfFloat(x: f64): int
```
Reports minimum bit-size of given floating-point.

Possible values are:
- 32 for 32-bit
- 64 for 64-bit

---

```jule
fn BitsizeOfInt(x: i64): int
```
Reports minimum bit-size of given signed integer.

Possible values are:
- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

---

```jule
fn BitsizeOfUint(x: u64): int
```
Reports minimum bit-size of given unsigned integer.

Possible values are:
- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

---

```jule
fn MinOf(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating-point kinds.\
Returns 0 if kind is invalid.

---

```jule
fn MaxOf(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating-point kinds.\
Returns 0 if kind is invalid.

---

```jule
fn IsSigInt(mut k: str): bool
```
Reports whether kind is signed integer.

---

```jule
fn IsUnsigInt(mut k: str): bool
```
Reports kind is unsigned integer.

---

```jule
fn IsInt(k: str): bool
```
Reports whether kind is signed/unsigned integer.

---

```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float.

---

```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric.

---

```jule
fn IsSigNum(k: str): bool
```
Reports whether kind is signed numeric.

---

```jule
fn IsI8Compatible(mut k: str): bool
```
Reports whether i8 is compatible with kind.

---

```jule
fn IsI16Compatible(mut k: str): bool
```
Reports whether i16 is compatible with kind.

---

```jule
fn IsI32Compatible(mut k: str): bool
```
Reports whether i32 is compatible with kind.

---

```jule
fn IsI64Compatible(mut k: str): bool
```
Reports whether i64 is compatible with kind.

---

```jule
fn IsU8Compatible(mut k: str): bool
```
Reports whether u8 is compatible with kind.

---

```jule
fn IsU16Compatible(mut k: str): bool
```
Reports whether u16 is compatible with kind.

---

```jule
fn IsU32Compatible(mut k: str): bool
```
Reports whether u32 is compatible with kind.

---

```jule
fn IsU64Compatible(mut k: str): bool
```
Reports whether u64 is compatible with kind.

---

```jule
fn IsF32Compatible(mut k: str): bool
```
Reports whether f32 is compatible with kind.

---

```jule
fn IsF64Compatible(mut k: str): bool
```
Reports whether f64 is compatible with kind.

---

```jule
fn TypesAreCompatible(mut k1: str, k2: str): bool
```
Reports types are compatible.\
k1 is the destination type, k2 is the source type.\
Return false if k2 is unsupported kind.

---

```jule
fn IsI16Greater(mut k: str): bool
```
Reports whether i16 is greater than given kind.

---

```jule
fn IsI32Greater(mut k: str): bool
```
Reports whether i32 is greater than given kind.

---

```jule
fn IsI64Greater(mut k: str): bool
```
Reports whether i64 is greater than given kind.

---

```jule
fn IsU8Greater(mut k: str): bool
```
Reports whether u8 is greater than given kind.

---

```jule
fn IsU16Greater(mut k: str): bool
```
Reports whether u16 is greater than given kind.

---

```jule
fn IsU32Greater(mut k: str): bool
```
Reports whether u32 is greater than given kind.

---

```jule
fn IsU64Greater(mut k: str): bool
```
Reports whether u64 is greater than given kind.

---

```jule
fn IsF32Greater(k: str): bool
```
Reports whether f32 is greater than given kind.

---

```jule
fn IsF64Greater(k: str): bool
```
Reports whether f64 is greater than given kind.

---

```jule
fn IsGreater(mut k1: str, k2: str): bool
```
Reports whether k1 kind greater than k2 kind. 

## Enums
`enum TypeKind: str`

Type kinds of primitive types.
These kinds are must match keyword form itself.

**Fields:**
- `I8`: Kind of signed 8-bit integer
- `I16`: Kind of signed 16-bit integer
- `I32`: Kind of signed 32-bit integer
- `I64`: Kind of signed 64-bit integer
- `U8`: Kind of unsigned 8-bit integer
- `U16`: Kind of unsigned 16-bit integer
- `U32`: Kind of unsigned 32-bit integer
- `U64`: Kind of unsigned 64-bit integer
- `F32`: Kind of 32-bit floating-point
- `F64`: Kind of 64-bit floating-point
- `Uint`: Kind of system specific bit-size unsigned integer
- `Int`: Kind of system specific bit-size signed integer
- `Uintptr`: Kind of system specific bit-size unsigned integer
- `Bool`: Kind of boolean
- `Str`: Kind of string
- `Any`: Kind of any type