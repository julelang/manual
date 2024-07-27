# std::encoding::base64

## Functions

```jule
fn EncodeLen(b: []byte, pad: bool): int
```
Returns length of encoded bytes of b.

---

```jule
fn DecodeLen(b: []byte, pad: bool): int
```
Returns length of decoded bytes of b.

---

```jule
fn Encode(src: []byte, pad: bool): []byte
```
Encodes source bytes with standard base64 table. Returns encoded base64 bytes if success, nil slice if not. Adds padding if pad is true.

---

```jule
fn Decode(src: []byte): []byte
```
Decodes source bytes with standard base64 table. Returns decoded bytes if success, nil slice if not. Detects padding by default, no required padding specification.

---

```jule
fn EncodeUrl(src: []byte): []byte
```
Encodes source bytes with url base64 table. It is typically used for URLs and file names. Returns encoded base64 bytes if success, nil slice if not.

---

```jule
fn DecodeUrl(src: []byte): []byte
```
Decodes source bytes with url base64 table. It is typically used for URLs and file names. Returns decoded bytes if success, nil slice if not.