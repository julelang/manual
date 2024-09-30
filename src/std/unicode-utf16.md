# std/unicode/utf16
## Functions
```jule
fn IsSurrogate(r: rune): bool
```
Reports whether the specified Unicode code point can appear in a surrogate pair.

---

```jule
fn DecodeRune(r1: rune, r2: rune): rune
```
Returns the UTF-16 decoding of a surrogate pair. If the pair is not a valid UTF-16 surrogate pair, DecodeRune returns the Unicode replacement code point U+FFFD.

---

```jule
fn EncodeRune(mut r: rune): (r1: rune, r2: rune)
```
Returns the UTF-16 surrogate pair r1, r2 for the given rune. If the rune is not a valid Unicode code point or does not need encoding, EncodeRune returns U+FFFD, U+FFFD.

---

```jule
fn Encode(s: []rune): []u16
```
Returns the UTF-16 encoding of the Unicode code point sequence s.

---

```jule
fn Decode(s: []u16): []rune
```
Returns the Unicode code point sequence represented by the UTF-16 encoding s.

---

```jule
fn AppendRune(mut a: []u16, r: rune): []u16
```
Appends the UTF-16 encoding of the Unicode code point r to the end of p and returns the extended buffer. If the rune is not a valid Unicode code point, it appends the encoding of U+FFFD. 