# std::unicode::utf16
## Globals
### `const RUNE_ERROR`
The "error" rune or "Unicode replacement character" 

---

### `const RUNE_SELF`
Characters below RUNE_SELF are represented as themselves in a single byte. 

---

### `const MAX_RUNE`
Maximum valid Unicode code point. 

---

### `const UTF_MAX`
Maximum number of bytes of a UTF-8 encoded Unicode character. 

## Functions
```
fn full_rune(p: []byte): bool
```
Reports whether the bytes in p begin with a full UTF-8 encoding of a rune. An invalid encoding is considered a full Rune since it will convert as a width-1 error rune.

---

```
pub fn full_rune_str(s: str): bool
```
Is like full_rune but its input is a string.

---

```
fn decode_rune(p: []byte): (r: rune, size: int)
```
Unpacks the first UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```
fn decode_rune_str(s: str): (r: rune, size: int)
```
Is like decode_rune but its input is a string. If s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```
fn decode_last_rune(p: []byte): (r: rune, size: int)
```
Unpacks the last UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```
fn decode_last_rune_str(s: str): (r: rune, size: int)
```
Is like decode_last_rune but its input is a string. If s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```
fn rune_len(r: rune): int
```
Returns the number of bytes required to encode the rune. It returns -1 if the rune is not a valid value to encode in UTF-8.

---

```
fn encode_rune(mut p: []byte, mut r: rune): int
```
Writes into p (which must be large enough) the UTF-8 encoding of the rune. If the rune is out of range, it writes the encoding of RUNE_ERROR. It returns the number of bytes written.

---

```
fn append_rune(p: []byte, r: rune): []byte
```
Appends the UTF-8 encoding of r to the end of p and returns the extended buffer. If the rune is out of range, it appends the encoding of RUNE_ERROR.

---

```
fn rune_count(p: []byte): (n: int)
```
Returns the number of runes in p. Erroneous and short encodings are treated as single runes of width 1 byte.

---

```
fn rune_count_str(s: str): (n: int)
```
Is like rune_count but its input is a string.

---

```
fn rune_start(b: byte): bool
```
Reports whether the byte could be the first byte of an encoded, possibly invalid rune. Second and subsequent bytes always have the top two bits set to 10.

---

```
fn valid(p: []byte): bool
```
Reports whether p consists entirely of valid UTF-8-encoded runes.

---

```
fn valid_str(mut s: str): bool
```
Reports whether s consists entirely of valid UTF-8-encoded runes.

---

```
fn valid_rune(r: rune): bool
```
Reports whether r can be legally encoded as UTF-8. Code points that are out of range or a surrogate half are illegal. 