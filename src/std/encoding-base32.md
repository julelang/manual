# std::encoding::base32

## Functions

```jule
fn encode(src: []byte, pad: bool): []byte
```
Encodes source bytes with standard base32 table. Returns encoded base64 bytes if success, nil slice if not. Adds padding if pad is true.

---

```jule
fn decode(src: []byte): []byte
```
Decodes source bytes with standard base32 table. Returns decoded bytes if success, nil slice if not. Detects padding by default, no required padding specification.
