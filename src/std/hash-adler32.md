# std/hash/adler32

## Constant

```
const Size: untyped integer
```

## Functions

```jule
fn New(): hash::Hash32
```
Returns a new `hash::Hash32` computing the Adler-32 checksum. Its Sum method will lay the value out in big-endian byte order.

```jule
fn Checksum(data: []byte): u32
```
Returns the Adler-32 checksum of data.