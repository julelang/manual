# std/unsafe

::: danger
This package is under the terms of the [Unsafe Jule](/unsafe-jule/). Be careful using API of this package. Doing things correct is developer's responsibility.
:::

## Index

[fn String\(b: \*byte, n: int\): string](#string)\
[fn Slice\[Elem\]\(mut e: \*Elem, len: int, cap: int\): \[\]Elem](#slice)\
[fn Bytes\(mut b: \*byte, n: int\): \[\]byte](#bytes)\
[fn StringBytes\(s: string\): \[\]byte](#stringbytes)\
[fn BytesString\(b: \[\]byte\): string](#bytesstring)\
[fn StringFromBytes\(b: \[\]byte\): string](#stringfrombytes)\
[fn BytesFromString\(s: string\): \[\]byte](#bytesfromstring)



## String
```jule
fn String(b: *byte, n: int): string
```
Returns string based on b, the parameter b means first byte of string\. The returned string uses n as length\. Will not perform garbage collection\.

## Slice
```jule
fn Slice[Elem](mut e: *Elem, len: int, cap: int): []Elem
```
Returns slice based on e, the parameter e means first element of slice\. Will not perform garbage collection\.

## Bytes
```jule
fn Bytes(mut b: *byte, n: int): []byte
```
Alias for Slice\(b, n, n\)\.

## StringBytes
```jule
fn StringBytes(s: string): []byte
```
Alias for Slice\(&amp;s\[0\], len\(s\), len\(s\)\)\. Returns nil if len\(s\) == 0\.

## BytesString
```jule
fn BytesString(b: []byte): string
```
Alias for String\(&amp;b\[0\], len\(b\), len\(b\)\)\. Returns empty string if len\(b\) == 0\.

## StringFromBytes
```jule
fn StringFromBytes(b: []byte): string
```
Same as \[BytesString\] but keeps garbage collection\.

## BytesFromString
```jule
fn BytesFromString(s: string): []byte
```
Same as \[StringBytes\] but keeps garbage collection\.