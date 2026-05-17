# std/integ

Supplementer package for Integrated Jule. Provides helper API to make interoperability easy and defines standards for common operations.

::: info
This packages includes some built-in powered functions:
- [Emit](/integrated-jule/backend-emits)
:::

## Index

[fn AnyToUnsafeptr\(x: any\): \*unsafe](#anytounsafeptr)\
[fn UTF16FromString\(mut s: string\): \[\]u16](#utf16fromstring)\
[fn UTF16ToString\(s: \[\]u16\): string](#utf16tostring)\
[fn UTF16PtrToString\(s: \*u16\): string](#utf16ptrtostring)\
[fn BytePtrToString\(s: \*byte\): string](#byteptrtostring)\
[fn BytesFromString\(s: string\): \[\]byte](#bytesfromstring)



## AnyToUnsafeptr
```jule
fn AnyToUnsafeptr(x: any): *unsafe
```
Returns unsafe pointer to the allocation of the type any\. It may be handled like C&#39;s voidptr type\. It does not ensure safety of the allocation, so x may be deallocated while memory pointer is still alive\. Make sure the allocation will not be deallocated until unsafe pointer being unreachable, otherwise any memory access may lead SEGFAULT\.

## UTF16FromString
```jule
fn UTF16FromString(mut s: string): []u16
```
Returns the UTF\-16 encoding of the UTF\-8 string s, with a terminating NULL added\. If s includes NULL character at any location, ignores followed characters\.

## UTF16ToString
```jule
fn UTF16ToString(s: []u16): string
```
Returns the UTF\-8 encoding of the UTF\-16 sequence s, with a terminating NULL removed\. Returns empty string if s is nil\.

## UTF16PtrToString
```jule
fn UTF16PtrToString(s: *u16): string
```
Returns the UTF\-8 encoding of the UTF\-16 sequence s in \*u16 form, with a terminating NULL removed\. Returns empty string if s is nil\.

## BytePtrToString
```jule
#disable boundary
fn BytePtrToString(s: *byte): string
```
Returns the string of s, with a terminating NULL removed\. Returns empty string if pointer is nil\.

## BytesFromString
```jule
fn BytesFromString(s: string): []byte
```
Returns s as NULL terminated byte slice which is able to be used safely as NULL terminated string pointer\. If s contains NULL termination at any location, accepts NULL termination is the end of s and skips following bytes\.