# UTF-8

The `utf8.hpp` header of the API provides functionality for UTF-8 encoding.

## Variables

```cpp
constexpr signed int UTF8_RUNE_ERROR;
```
The "error" rune or "Unicode replacement character".

---


```cpp
constexpr signed int UTF8_LOCB;
```
The default lowest continuation byte.

---


```cpp
constexpr signed int UTF8_HICB;
```
The default highest continuation byte.

---


```cpp
constexpr signed int UTF8_MAX_RUNE;
```
Maximum valid Unicode code point.

---


```cpp
constexpr signed int UTF8_SURROGATE_MAX;
```
```cpp
constexpr signed int UTF8_SURROGATE_MIN;
```
Code points in the surrogate range are not valid for UTF-8.


## Functions

```cpp
std::tuple<jule::I32, jule::Int>
utf8_decode_rune_str(const char *s, const jule::Int &len);
```
Unpacks the first UTF-8 encoding in s and returns the rune and its width in string. If s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

---

```cpp
jule::Slice<jule::U8>
utf8_rune_to_bytes(const jule::I32 &r);
```
Returns byte slice for the UTF-8 encoding of the rune. If the rune is out of range, it writes the encoding of RUNE_ERROR. It returns bytes of rune.
