# std/jule/integrated

This packages includes some built-in powered functions:
- [Emit](/integrated-jule/backend-emits)

## Index

[fn Malloc\(size: uint\): \*unsafe](#malloc)\
[fn Calloc\(size: uint, n: uint\): \*unsafe](#calloc)\
[unsafe fn Realloc\(mut ptr: \*unsafe, size: uint\): \*unsafe](#realloc)\
[unsafe fn Free\(mut ptr: \*unsafe\)](#free)\
[fn New\[T\]\(\): \*T](#new)\
[fn NewArray\[T\]\(size: int\): \*T](#newarray)\
[unsafe fn Delete\[T\]\(heap: \*T\)](#delete)\
[unsafe fn DeleteArray\[T\]\(heap: \*T\)](#deletearray)\
[fn UTF16FromStr\(mut s: str\): \[\]u16](#utf16fromstr)\
[fn UTF16ToStr\(s: \[\]u16\): str](#utf16tostr)\
[unsafe fn UTF16PtrToStr\(s: \*u16\): str](#utf16ptrtostr)\
[unsafe fn BytePtrToStr\(s: \*byte\): str](#byteptrtostr)\
[fn StrToBytes\(s: str\): \[\]byte](#strtobytes)\
[type Char](#char)\
[type Wchar](#wchar)\
[type SignedChar](#signedchar)\
[type UnsignedChar](#unsignedchar)\
[type Short](#short)\
[type ShortInt](#shortint)\
[type SignedShort](#signedshort)\
[type SignedShortInt](#signedshortint)\
[type UnsignedShort](#unsignedshort)\
[type UnsignedShortInt](#unsignedshortint)\
[type Int](#int)\
[type Signed](#signed)\
[type SignedInt](#signedint)\
[type Unsigned](#unsigned)\
[type UnsignedInt](#unsignedint)\
[type Long](#long)\
[type LongInt](#longint)\
[type SignedLong](#signedlong)\
[type SignedLongInt](#signedlongint)\
[type UnsignedLong](#unsignedlong)\
[type UnsignedLongInt](#unsignedlongint)\
[type LongLong](#longlong)\
[type LongLongInt](#longlongint)\
[type SignedLongLong](#signedlonglong)\
[type SignedLongLongInt](#signedlonglongint)\
[type UnsignedLongLong](#unsignedlonglong)\
[type UnsignedLongLongInt](#unsignedlonglongint)\
[type Float](#float)\
[type Double](#double)\
[type LongDouble](#longdouble)\
[type Bool](#bool)



## Malloc
```jule
fn Malloc(size: uint): *unsafe
```
Allocates size bytes of memory\. Memory does not initialize\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## Calloc
```jule
fn Calloc(size: uint, n: uint): *unsafe
```
Allocates n elements of size bytes each, all initialized to zero\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## Realloc
```jule
unsafe fn Realloc(mut ptr: *unsafe, size: uint): *unsafe
```
Re\-allocates the previously allocated block in ptr, making the new block size bytes long\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## Free
```jule
unsafe fn Free(mut ptr: *unsafe)
```
Free a block allocated by malloc, realloc or calloc\. ptr is not set as nil by function, therefore ptr is dangling after free\. Set ptr as nil after free for more safety\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## New
```jule
fn New[T](): *T
```
Allocates new memory\. Equivalent to: new T in C\+\+

## NewArray
```jule
fn NewArray[T](size: int): *T
```
Allocates new array memory\. Equivalent to: new T\[size\] in C\+\+

## Delete
```jule
unsafe fn Delete[T](heap: *T)
```
Deallocates memory allocation\. Equivalent to: delete heap in C\+\+

## DeleteArray
```jule
unsafe fn DeleteArray[T](heap: *T)
```
Deallocates array memory allocation\. Equivalent to: delete\[\] heap in C\+\+

## UTF16FromStr
```jule
fn UTF16FromStr(mut s: str): []u16
```
Returns the UTF\-16 encoding of the UTF\-8 string s, with a terminating NULL added\. If s includes NULL character at any location, ignores followed characters\.

## UTF16ToStr
```jule
fn UTF16ToStr(s: []u16): str
```
Returns the UTF\-8 encoding of the UTF\-16 sequence s, with a terminating NULL removed\. Returns empty string if s is nil\.

## UTF16PtrToStr
```jule
unsafe fn UTF16PtrToStr(s: *u16): str
```
Returns the UTF\-8 encoding of the UTF\-16 sequence s in \*u16 form, with a terminating NULL removed\. Returns empty string if s is nil\.

## BytePtrToStr
```jule
unsafe fn BytePtrToStr(s: *byte): str
```
Returns the string of s, with a terminating NULL removed\. Returns empty string if pointer is nil\.

## StrToBytes
```jule
fn StrToBytes(s: str): []byte
```
Returns s as NULL terminated byte slice which is able to be used safely as NULL terminated string pointer\. If s contains NULL termination at any location, accepts NULL termination is the end of s and skips following bytes\.

## Char
```jule
type Char: cpp.char
```
Type alias for char type\.

Supports casting for:<br>

- byte / u8
- i8

## Wchar
```jule
type Wchar: cpp.wchar_t
```
Type alias for wchar\_t type\.

Supports casting for:<br>

- u16

## SignedChar
```jule
type SignedChar: cpp.__jule_signed_char
```
Type alias for signed char type\.

## UnsignedChar
```jule
type UnsignedChar: cpp.__jule_unsigned_char
```
Type alias for signed char type\.

## Short
```jule
type Short: cpp.short
```
Type alias for short type\.

## ShortInt
```jule
type ShortInt: Short
```
Type alias for short int type\.

## SignedShort
```jule
type SignedShort: Short
```
Type alias for signed short type\.

## SignedShortInt
```jule
type SignedShortInt: Short
```
Type alias for signed short int type\.

## UnsignedShort
```jule
type UnsignedShort: cpp.__jule_unsigned_short
```
Type alias for unsigned short type\.

## UnsignedShortInt
```jule
type UnsignedShortInt: UnsignedShort
```
Type alias for unsigned short int type\.

## Int
```jule
type Int: cpp.signed
```
Type alias for int type\.

## Signed
```jule
type Signed: Int
```
Type alias for signed type\.

## SignedInt
```jule
type SignedInt: Int
```
Type alias for signed int type\.

## Unsigned
```jule
type Unsigned: cpp.unsigned
```
Type alias for unsigned type\.

## UnsignedInt
```jule
type UnsignedInt: Unsigned
```
Type alias for unsigned int type\.

## Long
```jule
type Long: cpp.long
```
Type alias for long type\.

## LongInt
```jule
type LongInt: Long
```
Type alias for long int type\.

## SignedLong
```jule
type SignedLong: Long
```
Type alias for signed long type\.

## SignedLongInt
```jule
type SignedLongInt: Long
```
Type alias for signed long int type\.

## UnsignedLong
```jule
type UnsignedLong: cpp.__jule_unsigned_long
```
Type alias for unsigned long type\.

## UnsignedLongInt
```jule
type UnsignedLongInt: UnsignedLong
```
Type alias for unsigned long int type\.

## LongLong
```jule
type LongLong: cpp.__jule_unsigned_long
```
Type alias for long long type\.

## LongLongInt
```jule
type LongLongInt: LongLong
```
Type alias for long long int type\.

## SignedLongLong
```jule
type SignedLongLong: LongLong
```
Type alias for signed long long type\.

## SignedLongLongInt
```jule
type SignedLongLongInt: LongLong
```
Type alias for signed long long int type\.

## UnsignedLongLong
```jule
type UnsignedLongLong: cpp.__jule_unsigned_long_long
```
Type alias for unsigned long long type\.

## UnsignedLongLongInt
```jule
type UnsignedLongLongInt: UnsignedLongLong
```
Type alias for unsigned long long int type\.

## Float
```jule
type Float: cpp.float
```
Type alias for float type\.

## Double
```jule
type Double: cpp.double
```
Type alias for double type\.

## LongDouble
```jule
type LongDouble: cpp.__jule_long_double
```
Type alias for long double type\.

## Bool
```jule
type Bool: cpp.__jule_bool
```
Type alias for bool type\.