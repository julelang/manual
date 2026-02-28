# std/integ/c

Supplementer package for C interoperability of Integrated Jule. Provides helper API to make C interoperability easy and defines standards for common operations. Most C interoperable programs should use this package to make the program reliable and standardized. This is an elementary package to write C interoperable programs and packages with any scale.

::: danger
This package contains low-level implementations and is under the terms of the [Unsafe Jule](/unsafe-jule/). Be careful using API of this package.
:::

## Index

[fn Malloc\(size: uint\): \*unsafe](#malloc)\
[fn Calloc\(size: uint, n: uint\): \*unsafe](#calloc)\
[fn Realloc\(mut ptr: \*unsafe, size: uint\): \*unsafe](#realloc)\
[fn Free\(mut ptr: \*unsafe\)](#free)\
[type ConstChar](#constchar)\
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
[type Size](#size)\
[type SSize](#ssize)\
[type Uintptr](#uintptr)\
[type Intptr](#intptr)\
[type Ptrdiff](#ptrdiff)



## Malloc
```jule
fn Malloc(size: uint): *unsafe
```
Allocates size bytes of memory\. Memory does not initialize\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It might be very dangerous\.

## Calloc
```jule
fn Calloc(size: uint, n: uint): *unsafe
```
Allocates n elements of size bytes each, all initialized to zero\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## Realloc
```jule
fn Realloc(mut ptr: *unsafe, size: uint): *unsafe
```
Re\-allocates the previously allocated block in ptr, making the new block size bytes long\. Returns pointer to allocation if success, nil if not\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## Free
```jule
fn Free(mut ptr: *unsafe)
```
Free a block allocated by malloc, realloc or calloc\. ptr is not set as nil by function, therefore ptr is dangling after free\. Set ptr as nil after free for more safety\.

This function is part of the C\-style memory management\. It can be very dangerous\.

## ConstChar
```jule
type ConstChar: extern.__jule_const_char
```
Type alias for const char type\.

## Char
```jule
type Char: extern.char
```
Type alias for char type\.

## Wchar
```jule
type Wchar: extern.wchar_t
```
Type alias for wchar\_t type\.

## SignedChar
```jule
type SignedChar: extern.__jule_signed_char
```
Type alias for signed char type\.

## UnsignedChar
```jule
type UnsignedChar: extern.__jule_unsigned_char
```
Type alias for signed char type\.

## Short
```jule
type Short: extern.short
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
type UnsignedShort: extern.__jule_unsigned_short
```
Type alias for unsigned short type\.

## UnsignedShortInt
```jule
type UnsignedShortInt: UnsignedShort
```
Type alias for unsigned short int type\.

## Int
```jule
type Int: extern.signed
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
type Unsigned: extern.unsigned
```
Type alias for unsigned type\.

## UnsignedInt
```jule
type UnsignedInt: Unsigned
```
Type alias for unsigned int type\.

## Long
```jule
type Long: extern.long
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
type UnsignedLong: extern.__jule_unsigned_long
```
Type alias for unsigned long type\.

## UnsignedLongInt
```jule
type UnsignedLongInt: UnsignedLong
```
Type alias for unsigned long int type\.

## LongLong
```jule
type LongLong: extern.__jule_unsigned_long
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
type UnsignedLongLong: extern.__jule_unsigned_long_long
```
Type alias for unsigned long long type\.

## UnsignedLongLongInt
```jule
type UnsignedLongLongInt: UnsignedLongLong
```
Type alias for unsigned long long int type\.

## Float
```jule
type Float: extern.float
```
Type alias for float type\.

## Double
```jule
type Double: extern.double
```
Type alias for double type\.

## LongDouble
```jule
type LongDouble: extern.__jule_long_double
```
Type alias for long double type\.

## Size
```jule
type Size: extern.size_t
```
Type alias for size\_t type\.

## SSize
```jule
type SSize: extern.ssize_t
```
Type alias for ssize\_t type\.

## Uintptr
```jule
type Uintptr: extern.uintptr_t
```
Type alias for uintptr\_t type\.

## Intptr
```jule
type Intptr: extern.intptr_t
```
Type alias for intptr\_t type\.

## Ptrdiff
```jule
type Ptrdiff: extern.ptrdiff_t
```
Type alias for ptrdiff\_t type\.