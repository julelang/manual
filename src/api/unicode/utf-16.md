# UTF-16

The `utf16.hpp` header of the API provides functionality for UTF-16 encoding.

## Variables

```cpp
constexpr signed int UTF16_REPLACEMENT_CHAR;
```
Unicode replacement character.

---

```cpp
constexpr signed int UTF16_SURR1;
```
```cpp
constexpr signed int UTF16_SURR2
```
```cpp
constexpr signed int UTF16_SURR3
```
`0xd800`-`0xdc00` encodes the high 10 bits of a pair. \
`0xdc00`-`0xe000` encodes the low 10 bits of a pair. \
the value is those 20 bits plus `0x10000`.

---

```cpp
constexpr signed int UTF16_SURR_SELF
```

---

```cpp
constexpr signed int UTF16_MAX_RUNE;
```
Maximum valid Unicode code point.


## Functions

```cpp
jule::I32
utf16_decode_rune(const jule::I32 r1, const jule::I32 r2);
```
Returns the UTF-16 decoding of a surrogate pair. If the pair is not a valid UTF-16 surrogate pair, decode_rune returns the Unicode replacement code point U+FFFD.

---

```cpp
jule::Slice<jule::I32>
utf16_decode(const jule::Slice<jule::I32> s);
```
Returns the Unicode code point sequence represented by the UTF-16 encoding s.

---

```cpp
jule::Str
utf16_to_utf8_str(const wchar_t *wstr, const std::size_t len);
```
Convert UTF-16 string pointer to UTF-8 encoded string.

---

```cpp
std::tuple<jule::I32, jule::I32>
utf16_encode_rune(jule::I32 r);
```
Returns the UTF-16 surrogate pair r1, r2 for the given rune. If the rune is not a valid Unicode code point or does not need encoding, encode_rune returns U+FFFD, U+FFFD.

---

```cpp
jule::Slice<jule::U16>
utf16_encode(const jule::Slice<jule::I32> &runes);
```
Returns the UTF-16 encoding of the Unicode code point sequence s.

---

```cpp
jule::Slice<jule::U16>
utf16_append_rune(jule::Slice<jule::U16> &a, const jule::I32 &r);
```
Appends the UTF-16 encoding of the Unicode code point r to the end of p and returns the extended buffer. If the rune is not a valid Unicode code point, it appends the encoding of U+FFFD.

---

```cpp
jule::Slice<jule::U16>
utf16_from_str(const jule::Str &s);
```
Convert UTF-8 encoded string to UTF-16 codepage.
