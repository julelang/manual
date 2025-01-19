# std/hash/adler32

## Index

[Variables](#variables)\
[fn New(): hash::Hash32](#new)\
[fn Checksum(data: \[\]byte): u32](#checksum)

## Variables

```jule
const Size = 4
```
The size of an Adler-32 checksum in bytes.

## New
```jule
fn New(): hash::Hash32
```
Returns a new hash::Hash32 computing the Adler-32 checksum. Its Sum method will lay the value out in big-endian byte order.

## Checksum
```jule
fn Checksum(data: []byte): u32
```
Returns the Adler-32 checksum of data.