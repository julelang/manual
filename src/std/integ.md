# std/integ

Supplementer package for Integrated Jule. Provides helper API to make interoperability easy and defines standards for common operations.

::: info
This packages includes some built-in powered functions:
- [Emit](/integrated-jule/backend-emits)
:::

## Index

[fn AnyToUnsafeptr\(x: any\): \*unsafe](#anytounsafeptr)\
[fn UTF16FromStr\(mut s: str\): \[\]u16](#utf16fromstr)\
[fn UTF16ToStr\(s: \[\]u16\): str](#utf16tostr)\
[fn UTF16PtrToStr\(s: \*u16\): str](#utf16ptrtostr)\
[fn BytePtrToStr\(s: \*byte\): str](#byteptrtostr)\
[fn BytesFromStr\(s: str\): \[\]byte](#bytesfromstr)



## AnyToUnsafeptr
```jule
fn AnyToUnsafeptr(x: any): *unsafe
```
Returns unsafe pointer to the allocation of the type any\. It may be handled like C&#39;s voidptr type\. It does not ensure safety of the allocation, so x may be deallocated while memory pointer is still alive\. Make sure the allocation will not be deallocated until unsafe pointer being unreachable, otherwise any memory access may lead SEGFAULT\.

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
fn UTF16PtrToStr(s: *u16): str
```
Returns the UTF\-8 encoding of the UTF\-16 sequence s in \*u16 form, with a terminating NULL removed\. Returns empty string if s is nil\.

## BytePtrToStr
```jule
#disable boundary
fn BytePtrToStr(s: *byte): str
```
Returns the string of s, with a terminating NULL removed\. Returns empty string if pointer is nil\.

## BytesFromStr
```jule
fn BytesFromStr(s: str): []byte
```
Returns s as NULL terminated byte slice which is able to be used safely as NULL terminated string pointer\. If s contains NULL termination at any location, accepts NULL termination is the end of s and skips following bytes\.