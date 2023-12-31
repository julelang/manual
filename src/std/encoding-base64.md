# std::encoding::base64

## Functions

```jule
fn encode(src: []byte, pad: bool): []byte
```
Encodes source bytes with standard base64 table. Returns encoded base64 bytes if success, nil slice if not. Adds padding if pad is true.

---

```jule
fn decode(src: []byte): []byte
```
Decodes source bytes with standard base64 table. Returns decoded bytes if success, nil slice if not. Detects padding by default, no required padding specification.

---

```jule
fn encode_url(src: []byte): []byte
```
Encodes source bytes with url base64 table. It is typically used for URLs and file names. Returns encoded base64 bytes if success, nil slice if not.

---

```jule
fn decode_url(src: []byte): []byte
```
Decodes source bytes with url base64 table. It is typically used for URLs and file names. Returns decoded bytes if success, nil slice if not.
