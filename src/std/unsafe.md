# std/unsafe

::: danger
This package is under the terms of the [Unsafe Jule](/unsafe-jule/). Be careful using API of this package. Doing things correct is developer's responsibility.
:::

## Index

[fn Str(b: \*byte, n: int): str](#str)\
[fn Slice\[Elem\](e: \*Elem, len: int, cap: int): \[\]Elem](#slice)\
[fn Bytes(b: \*byte, n: int): \[\]byte](#bytes)\
[fn StrBytes(s: str): \[\]byte](#strbytes)\
[fn BytesStr(b: \[\]byte): str](#bytesstr)\
[fn StrFromBytes(b: \[\]byte): str](#strfrombytes)\
[fn BytesFromStr(s: str): \[\]byte](#bytesfromstr)



## Str
```jule
fn Str(b: *byte, n: int): str
```
Returns string based on b, the parameter b means first byte of string. The returned string uses n as length. Will not perform garbage collection.

## Slice
```jule
fn Slice[Elem](e: *Elem, len: int, cap: int): []Elem
```
Returns slice based on e, the parameter e means first element of slice. Will not perform garbage collection.

## Bytes
```jule
fn Bytes(b: *byte, n: int): []byte
```
Alias for Slice(b, n, n).

## StrBytes
```jule
fn StrBytes(s: str): []byte
```
Alias for Slice(&amp;s\[0\], len(s), len(s)). Returns nil if len(s) == 0.

## BytesStr
```jule
fn BytesStr(b: []byte): str
```
Alias for Str(&amp;b\[0\], len(b), len(b)). Returns empty string if len(b) == 0.

## StrFromBytes
```jule
fn StrFromBytes(b: []byte): str
```
Same as \[BytesStr\] but keeps garbage collection.

## BytesFromStr
```jule
fn BytesFromStr(s: str): []byte
```
Same as \[StrBytes\] but keeps garbage collection.