# std/encoding/binary

## Index

[struct LittleEndian](#littleendian)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU16(mut b: \[\]byte, x: u16)](#putu16)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU16(mut b: \[\]byte, x: u16): \[\]byte](#appendu16)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU16(b: \[\]byte): u16](#decodeu16)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU32(mut b: \[\]byte, x: u32)](#putu32)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU32(mut b: \[\]byte, x: u32): \[\]byte](#appendu32)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU32(b: \[\]byte): u32](#decodeu32)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU64(mut b: \[\]byte, x: u64)](#putu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU64(mut b: \[\]byte, x: u64): \[\]byte](#appendu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU64(b: \[\]byte): u64](#decodeu64)\
[struct BigEndian](#bigendian)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU16(mut b: \[\]byte, x: u16)](#putu16-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU16(mut b: \[\]byte, x: u16): \[\]byte](#appendu16-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU16(b: \[\]byte): u16](#decodeu16-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU32(mut b: \[\]byte, x: u32)](#putu32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU32(mut b: \[\]byte, x: u32): \[\]byte](#appendu32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU32(b: \[\]byte): u32](#decodeu32-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn PutU64(mut b: \[\]byte, x: u64)](#putu64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn AppendU64(mut b: \[\]byte, x: u64): \[\]byte](#appendu64-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn DecodeU64(b: \[\]byte): u64](#decodeu64-1)



## LittleEndian
```jule
struct LittleEndian{}
```
Binary encoding implementation for little-endian order.

### PutU16
```jule
static fn PutU16(mut b: []byte, x: u16)
```
Encodes unsigned 16-bit integer into 2-bytes slice.

### AppendU16
```jule
static fn AppendU16(mut b: []byte, x: u16): []byte
```
Encodes unsigned 16-bit integer and appends to slice.

### DecodeU16
```jule
static fn DecodeU16(b: []byte): u16
```
Decodes unsigned 16-bit integer from 2-bytes.

### PutU32
```jule
static fn PutU32(mut b: []byte, x: u32)
```
Encodes unsigned 32-bit integer into 4-bytes slice.

### AppendU32
```jule
static fn AppendU32(mut b: []byte, x: u32): []byte
```
Encodes unsigned 32-bit integer and appends to slice.

### DecodeU32
```jule
static fn DecodeU32(b: []byte): u32
```
Decodes unsigned 32-bit integer from 4-bytes.

### PutU64
```jule
static fn PutU64(mut b: []byte, x: u64)
```
Encodes unsigned 64-bit integer into 8-bytes slice.

### AppendU64
```jule
static fn AppendU64(mut b: []byte, x: u64): []byte
```
Encodes unsigned 64-bit integer and appends to slice.

### DecodeU64
```jule
static fn DecodeU64(b: []byte): u64
```
Decodes unsigned 64-bit integer from 8-bytes.

## BigEndian
```jule
struct BigEndian{}
```
Binary encoding implementation for big-endian order.

### PutU16
```jule
static fn PutU16(mut b: []byte, x: u16)
```
Encodes unsigned 16-bit integer into 2-bytes slice.

### AppendU16
```jule
static fn AppendU16(mut b: []byte, x: u16): []byte
```
Encodes unsigned 16-bit integer and appends to slice.

### DecodeU16
```jule
static fn DecodeU16(b: []byte): u16
```
Decodes unsigned 16-bit integer from 2-bytes.

### PutU32
```jule
static fn PutU32(mut b: []byte, x: u32)
```
Encodes unsigned 32-bit integer into 4-bytes slice.

### AppendU32
```jule
static fn AppendU32(mut b: []byte, x: u32): []byte
```
Encodes unsigned 32-bit integer and appends to slice.

### DecodeU32
```jule
static fn DecodeU32(b: []byte): u32
```
Decodes unsigned 32-bit integer from 4-bytes.

### PutU64
```jule
static fn PutU64(mut b: []byte, x: u64)
```
Encodes unsigned 64-bit integer into 8-bytes slice.

### AppendU64
```jule
static fn AppendU64(mut b: []byte, x: u64): []byte
```
Encodes unsigned 64-bit integer and appends to slice.

### DecodeU64
```jule
static fn DecodeU64(b: []byte): u64
```
Decodes unsigned 64-bit integer from 8-bytes.