# std/jule/integrated

## Type Aliases

```jule
type Char: byte
```
Type alias for `char` type.

Supports casting for:
- `byte` / `u8`
- `i8`

---

```jule
type Wchar: u16
```
Type alias for `wchar_t` type.

Supports casting for:
- `u16`

---

```jule
type SignedChar: i8
```
Type alias for `signed char` type.

---

```jule
type UnsignedChar: u8
```
Type alias for `unsigned char` type.

---

```jule
type Short: i16
```
Type alias for `short` type.

---

```jule
type ShortInt: Short
```
Type alias for `short int` type.

---

```jule
type SignedShort: Short
```
Type alias for `signed short` type.

---

```jule
type SignedShortInt: Short
```
Type alias for `signed short int` type.

---

```jule
type UnsignedShort: u16
```
Type alias for `unsigned short` type.

---

```jule
type UnsignedShortInt: UnsignedShort
```
Type alias for `unsigned short int` type.

---

```jule
type Int: i32
```
Type alias for `int` type.

---

```jule
type Signed: Int
```
Type alias for `signed` type.

---

```jule
type SignedInt: Int
```
Type alias for `signed int` type.

---

```jule
type Unsigned: u32
```
Type alias for `unsigned` type.

---

```jule
type UnsignedInt: Unsigned
```
Type alias for `unsigned int` type.

---

```jule
type Long: i32
```
Type alias for `long` type.

---

```jule
type LongInt: Long
```
Type alias for `long int` type.

---

```jule
type SignedLong: Long
```
Type alias for `signed long` type.

---

```jule
type SignedLongInt: Long
```
Type alias for `signed long int` type.

---

```jule
type UnsignedLong: u32
```
Type alias for `unsigned long` type.

---

```jule
type UnsignedLongInt: UnsignedLong
```
Type alias for `unsigned long int` type.

---

```jule
type LongLong: i64
```
Type alias for `long long` type.

---

```jule
type LongLongInt: LongLong
```
Type alias for `long long int` type.

---

```jule
type SignedLongLong: LongLong
```
Type alias for `signed long long` type.

---

```jule
type SignedLongLongInt: LongLong
```
Type alias for `signed long long int` type.

---

```jule
type UnsignedLongLong: u64
```
Type alias for `unsigned long long` type.

---

```jule
type UnsignedLongLongInt: UnsignedLongLong
```
Type alias for `unsigned long long int` type.

---

```jule
type Float: f32
```
Type alias for `float` type.

---

```jule
type Double: f64
```
Type alias for `double` type.

---

```jule
type LongDouble: f64
```
Type alias for `long double` type.

---

```jule
type Bool: bool
```
Type alias for `bool` type.

## Functions

```jule
unsafe fn Emit(const code: str, args: ...any)
```
Emit inline code for backend.\
[See more information about back-end emits](/integrated-jule/backend-emits)

---

```jule
unsafe fn Emit[T](const code: str, args: ...any): T
```
Emit inline code for backend and read result.\
[See more information about back-end emits](/integrated-jule/backend-emits)

---

```jule
fn UTF16FromStr(s: str): []u16
```
Returns the UTF-16 encoding of the UTF-8 string s, with a terminating NULL added. If s includes NULL character at any location, ignores followed characters.

---

```jule
fn UTF16ToStr(s: []u16): str
```
Returns the UTF-8 encoding of the UTF-16 sequence s, with a terminating NULL removed. Returns empty string if s is nil.

---

```jule
unsafe fn U16PtrToStr(s: *u16): str
```
Returns the UTF-8 encoding of the UTF-16 sequence s in *u16 form, with a terminating NULL removed. Returns empty string if s is nil.

---

```jule
unsafe fn BytePtrToStr(s: *byte): str
```
Returns the string of s, with a terminating NULL removed.
Returns empty string if pointer is nil.

---

```jule
fn StrToBytes(s: str): []byte
```
Returns s as NULL terminated byte slice which is able to be used safely as NULL terminated string pointer. If s contatins NULL termination at any location, accepts NULL termination is the end of s and skips following bytes.

---

```jule
fn Malloc(size: uint): *unsafe
```
Allocates size bytes of memory. Memory does not initialize. Returns pointer to allocation if success, nil if not.

::: warning
This function is part of the C-style memory management. It can be very dangerous.
:::

---

```jule
fn Calloc(size: uint, n: uint): *unsafe
```
Allocates n elements of size bytes each, all initialized to zero. Returns pointer to allocation if success, nil if not.

::: warning
This function is part of the C-style memory management. It can be very dangerous.
:::

---

```jule
unsafe fn Realloc(mut ptr: *unsafe, size: uint): *unsafe
```
Re-allocates the previously allocated block in ptr, making the new block size bytes long. Returns pointer to allocation if success, nil if not.

::: warning
This function is part of the C-style memory management. It can be very dangerous.
:::

---

```jule
unsafe fn Free(mut ptr: *unsafe)
```
Free a block allocated by malloc, realloc or calloc. ptr is not setted as nil by function, therefore ptr is dangling after free. Set ptr as nil after free for more safety. 

::: warning
This function is part of the C-style memory management. It can be very dangerous.
:::

---

```jule
fn New[T](): *T
```
Allocates new memory.
Equavalent to: `new T` in C++

---

```jule
fn NewArray[T](size: int): *T
```
Allocates new array memory.
Equavalent to: `new T[size]` in C++

---

```jule
unsafe fn Delete[T](heap: *T)
```
Deallocates memory allocation.
Equavalent to: `delete heap` in C++

---

```jule
unsafe fn DeleteArray[T](heap: *T)
```
Deallocates array memory allocation.
Equavalent to: `delete[] heap` in C++