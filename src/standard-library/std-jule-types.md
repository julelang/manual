# std::jule::types

## Globals
### `const BIT_SIZE: int`
Bit-size of runtime architecture.\
Possible values are: 32, and 64.

---

### `const SYS_INT: str`
Signed integer kind of runtime architecture.\
Is equavalent to `int`, but specific bit-sized integer kind.

---

### `const SYS_UINT: str`
Unsigned integer kind of runtime architecture.\
Is equavalent to `uint` and `uintptr`, but specific bit-sized integer kind.

---

### `MAX_F32`
Maximum positive value of 32-bit floating-points.

---

### `MIN_F32`
Maximum negative value of 32-bit floating-points.

---

### `MAX_F64`
Maximum positive value of 64-bit floating-points.

---

### `MIN_F64`
Maximum negative value of 64-bit floating-points.

---

### `MAX_I8`
Maximum positive value of 8-bit signed integers.

---

### `MIN_I8`
Maximum negative value of 8-bit signed integers.

---

### `MAX_I16`
Maximum positive value of 16-bit signed integers.

---

### `MIN_I16`
Maximum negative value of 16-bit signed integers.

---

### `MAX_I32`
Maximum positive value of 32-bit signed integers.

---

### `MIN_I32`
Maximum negative value of 32-bit signed integers.

---

### `MAX_I64`
Maximum positive value of 64-bit signed integers.

---

### `MIN_I64`
Maximum negative value of 64-bit signed integers.

---

### `MAX_U8`
Maximum value of 8-bit unsigned integers.

---

### `MAX_U16`
Maximum value of 16-bit unsigned integers.

---

### `MAX_U32`
Maximum value of 32-bit unsigned integers.

---

### `MAX_U64`
Maximum value of 64-bit unsigned integers.

## Functions
```
fn real_kind_of(kind: str): str
```
Returns kind's bit-specific kind if bit-specific like int, uint, and uintptr.\
Returns kind if not bit-specific.\
Bit-size is determined by runtime.

---

```
fn bitsize_of(k: str): int
```
Returns kind's bit-size.\
Returns -1 if kind is not numeric.

---

```
fn int_from_bits(bits: u64): str
```
Returns signed integer kind by bit-size.\
Possible bit-sizes are: 8, 16, 32, and 64.\
Returns empty string if bits is invalid.

---

```
fn uint_from_bits(bits: u64): str
```
Returns unsigned integer kind by bit-size.\
Possible bit-sizes are: 8, 16, 32, and 64.\
Returns empty string if bits is invalid.

---

```
fn float_from_bits(bits: u64): str
```
Returns floating-point kind by bit-size.\
Possible bit-sizes are: 32, and 64.\
Returns empty string if bits is invalid.

---

```
fn check_bit_int(v: str, bit: int): bool
```
Reports whether signed integer literal is compatible given bit-size.

---

```
fn check_bit_uint(v: str, bit: int): bool
```
Reports whether unsigned integer literal is compatible given bit-size.

---

```
fn check_bit_float(val: str, bit: int): bool
```
Reports whether float literal is compatible given bit-size. 

---

```
fn bitsize_of_float(x: f64): u64
```
Reports minimum bit-size of given floating-point.

Possible values are:
- 32 for 32-bit
- 64 for 64-bit

---

```
fn bitsize_of_int(x: i64): u64
```
Reports minimum bit-size of given signed integer.

Possible values are:
- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

---

```
fn bitsize_of_uint(x: u64): u64
```
Reports minimum bit-size of given unsigned integer.

Possible values are:
- 8 for 8-bit
- 16 for 16-bit
- 32 for 32-bit
- 64 for 64-bit

---

```
fn min_of(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating-point kinds.\
Returns 0 if kind is invalid.

---

```
fn max_of(mut k: str): f64
```
Returns minimum value of signed/unsigned integer and floating-point kinds.\
Returns 0 if kind is invalid.

---

```
fn is_sig_int(mut k: str): bool
```
Reports whether kind is signed integer.

---

```
fn is_unsig_int(mut k: str): bool
```
Reports kind is unsigned integer.

---

```
fn is_int(k: str): bool
```
Reports whether kind is signed/unsigned integer.

---

```
fn is_float(k: str): bool
```
Reports whether kind is float.

---

```
fn is_num(k: str): bool
```
Reports whether kind is numeric.

---

```
fn is_sig_num(k: str): bool
```
Reports whether kind is signed numeric.

---

```
fn is_i8_compatible(mut k: str): bool
```
Reports whether i8 is compatible with kind.

---

```
fn is_i16_compatible(mut k: str): bool
```
Reports whether i16 is compatible with kind.

---

```
fn is_i32_compatible(mut k: str): bool
```
Reports whether i32 is compatible with kind.

---

```
fn is_i64_compatible(mut k: str): bool
```
Reports whether i64 is compatible with kind.

---

```
fn is_u8_compatible(mut k: str): bool
```
Reports whether u8 is compatible with kind.

---

```
fn is_u16_compatible(mut k: str): bool
```
Reports whether u16 is compatible with kind.

---

```
fn is_u32_compatible(mut k: str): bool
```
Reports whether u32 is compatible with kind.

---

```
fn is_u64_compatible(mut k: str): bool
```
Reports whether u64 is compatible with kind.

---

```
fn is_f32_compatible(mut k: str): bool
```
Reports whether f32 is compatible with kind.

---

```
fn is_f64_compatible(mut k: str): bool
```
Reports whether f64 is compatible with kind.

---

```
fn types_are_compatible(mut k1: str, k2: str): bool
```
Reports types are compatible.\
k1 is the destination type, k2 is the source type.\
Return false if k2 is unsupported kind.

---

```
fn is_i16_greater(mut k: str): bool
```
Reports whether i16 is greater than given kind.

---

```
fn is_i32_greater(mut k: str): bool
```
Reports whether i32 is greater than given kind.

---

```
fn is_i64_greater(mut k: str): bool
```
Reports whether i64 is greater than given kind.

---

```
fn is_u8_greater(mut k: str): bool
```
Reports whether u8 is greater than given kind.

---

```
fn is_u16_greater(mut k: str): bool
```
Reports whether u16 is greater than given kind.

---

```
fn is_u32_greater(mut k: str): bool
```
Reports whether u32 is greater than given kind.

---

```
fn is_u64_greater(mut k: str): bool
```
Reports whether u64 is greater than given kind.

---

```
fn is_f32_greater(k: str): bool
```
Reports whether f32 is greater than given kind.

---

```
fn is_f64_greater(k: str): bool
```
Reports whether f64 is greater than given kind.

---

```
fn is_greater(mut k1: str, k2: str): bool
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