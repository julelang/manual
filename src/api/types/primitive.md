# Primitive Types

The Jule API contains definitions for primitive types in the `types.hpp` header.

## Variables

```cpp
constexpr decltype(nullptr) nil{ nullptr };
```
Equavalent of Jule's `nil`

## Type Aliases

```cpp
typedef signed char I8;
```
Equavalent of Jule's `i8` type.

---

```cpp
typedef signed short int I16;
```
Equavalent of Jule's `i16` type.

---

```cpp
typedef signed long int I32;
```
Equavalent of Jule's `i32` type.

---

```cpp
typedef signed long long int I64;
```
Equavalent of Jule's `i64` type.

---

```cpp
typedef unsigned char U8;
```
Equavalent of Jule's `u8` type.

---

```cpp
typedef unsigned short int U16;
```
Equavalent of Jule's `u16` type.

---

```cpp
typedef unsigned long int U32;
```
Equavalent of Jule's `u32` type.

---

```cpp
typedef unsigned long long int U64;
```
Equavalent of Jule's `u64` type.

---

```cpp
typedef float F32;
```
Equavalent of Jule's `f32` type.

---

```cpp
typedef double F64;
```
Equavalent of Jule's `f64` type.

---

```cpp
typedef bool Bool;
```
Equavalent of Jule's `bool` type.


### For 64-bit Architecture

```cpp
typedef unsigned long long int Uint;
```
Equavalent of Jule's `uint` type.

---

```cpp
typedef signed long long int Int;
```
Equavalent of Jule's `int` type.

---

```cpp
typedef unsigned long long int Uintptr;
```
Equavalent of Jule's `uintptr` type.

### For 32-bit Architecture

```cpp
typedef unsigned long int Uint;
```
Equavalent of Jule's `uint` type.

---

```cpp
typedef signed long int Int;
```
Equavalent of Jule's `int` type.

---

```cpp
typedef unsigned long int Uintptr;
```
Equavalent of Jule's `uintptr` type.
