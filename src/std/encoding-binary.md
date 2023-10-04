# std::encoding::binary

## Structures

```jule
struct BigEndian
```
Binary encoding implementation for big-endian order.

**Methods:**

`static fn encode_u16(mut b: []byte, x: u16)`\
Encodes unsigned 16-bit integer into 2-bytes slice.

`static fn decode_u16(b: []byte): u16`\
Decodes unsigned 16-bit integer from 2-bytes.

`static fn encode_u32(mut b: []byte, x: u32)`\
Encodes unsigned 32-bit integer into 4-bytes slice.

`static fn decode_u32(b: []byte): u32`\
Decodes unsigned 32-bit integer from 4-bytes.

`static fn encode_u64(mut b: []byte, x: u64)`\
Encodes unsigned 64-bit integer into 8-bytes slice.

`static fn decode_u64(b: []byte): u64`\
Decodes unsigned 64-bit integer from 8-bytes.

---

```jule
struct LittleEndian
```
Binary encoding implementation for little-endian order.

**Methods:**

`static fn encode_u16(mut b: []byte, x: u16)`\
Encodes unsigned 16-bit integer into 2-bytes slice.

`static fn decode_u16(b: []byte): u16`\
Decodes unsigned 16-bit integer from 2-bytes.

`static fn encode_u32(mut b: []byte, x: u32)`\
Encodes unsigned 32-bit integer into 4-bytes slice.

`static fn decode_u32(b: []byte): u32`\
Decodes unsigned 32-bit integer from 4-bytes.

`static fn encode_u64(mut b: []byte, x: u64)`\
Encodes unsigned 64-bit integer into 8-bytes slice.

`static fn decode_u64(b: []byte): u64`\
Decodes unsigned 64-bit integer from 8-bytes.
