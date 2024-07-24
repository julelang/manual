# std::unicode::utf8
## Globals
### `const RuneError`
The "error" rune or "Unicode replacement character" 

---

### `const RuneSelf`
Characters below RuneSelf are represented as themselves in a single byte. 

---

### `const MaxRune`
Maximum valid Unicode code point. 

---

### `const UTFMax`
Maximum number of bytes of a UTF-8 encoded Unicode character. 

## Functions
```jule
fn FullRune(p: []byte): bool
```
Reports whether the bytes in p begin with a full UTF-8 encoding of a rune. An invalid encoding is considered a full Rune since it will convert as a width-1 error rune.

---

```jule
fn FullRuneStr(s: str): bool
```
Is like FullRune but its input is a string.

---

```jule
fn DecodeRune(p: []byte): (r: rune, size: int)
```
Unpacks the first UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```jule
fn DecodeRuneStr(s: str): (r: rune, size: int)
```
Is like DecodeRune but its input is a string. If s is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```jule
fn DecodeLastRune(p: []byte): (r: rune, size: int)
```
Unpacks the last UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```jule
fn DecodeLastRuneStr(s: str): (r: rune, size: int)
```
Is like DecodeLastRune but its input is a string. If s is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```jule
fn RuneLen(r: rune): int
```
Returns the number of bytes required to encode the rune. It returns -1 if the rune is not a valid value to encode in UTF-8.

---

```jule
fn EncodeRune(mut p: []byte, mut r: rune): int
```
Writes into p (which must be large enough) the UTF-8 encoding of the rune. If the rune is out of range, it writes the encoding of RuneError. It returns the number of bytes written.

---

```jule
fn AppendRune(mut p: []byte, r: rune): []byte
```
Appends the UTF-8 encoding of r to the end of p and returns the extended buffer. If the rune is out of range, it appends the encoding of RuneError.

---

```jule
fn RuneCount(p: []byte): (n: int)
```
Returns the number of runes in p. Erroneous and short encodings are treated as single runes of width 1 byte.

---

```jule
fn RuneCountStr(s: str): (n: int)
```
Is like RuneCount but its input is a string.

---

```jule
fn RuneStart(b: byte): bool
```
Reports whether the byte could be the first byte of an encoded, possibly invalid rune. Second and subsequent bytes always have the top two bits set to 10.

---

```jule
fn Valid(p: []byte): bool
```
Reports whether p consists entirely of valid UTF-8-encoded runes.

---

```jule
fn ValidStr(mut s: str): bool
```
Reports whether s consists entirely of valid UTF-8-encoded runes.

---

```jule
fn ValidRune(r: rune): bool
```
Reports whether r can be legally encoded as UTF-8. Code points that are out of range or a surrogate half are illegal.