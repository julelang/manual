# std::unicode::utf16
## Functions
```jule
fn is_surrogate(r: rune): bool
```
Reports whether the specified Unicode code point can appear in a surrogate pair.

---

```jule
fn decode_rune(r1: rune, r2: rune): rune
```
Returns the UTF-16 decoding of a surrogate pair. If the pair is not a valid UTF-16 surrogate pair, decode_rune returns the Unicode replacement code point U+FFFD.

---

```jule
fn encode_rune(mut r: rune): (r1: rune, r2: rune)
```
Returns the UTF-16 surrogate pair r1, r2 for the given rune. If the rune is not a valid Unicode code point or does not need encoding, encode_rune returns U+FFFD, U+FFFD.

---

```jule
fn encode(s: []rune): []u16
```
Returns the UTF-16 encoding of the Unicode code point sequence s.

---

```jule
fn decode(s: []u16): []rune
```
Returns the Unicode code point sequence represented by the UTF-16 encoding s.

---

```jule
fn append_rune(mut a: []u16, r: rune): []u16
```
Appends the UTF-16 encoding of the Unicode code point r to the end of p and returns the extended buffer. If the rune is not a valid Unicode code point, it appends the encoding of U+FFFD. 