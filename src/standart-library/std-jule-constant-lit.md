# std::jule::constant::lit

## Functions
```
fn is_byte_lit(mut kind: str): (str, bool)
```
Reports whether kind is byte literal and returns literal without quotes.

Byte literal patterns:
- `0 <= r <= 255`
- `'\xhh'`
- `'\nnn'`

---

```
fn to_rune(bytes: []byte): rune
```
Returns rune value string from bytes, not includes quotes.\
Bytes are represents rune literal, allows escape sequences.\
Returns empty string if bytes.len == 0

---

```
fn to_raw_str(bytes: []byte): str
```
Returns raw-string value string from bytes, not includes quotes.\
Bytes are represents string characters.\
Returns empty string if bytes.len == 0

---

```
fn to_str(bytes: []byte): str
```
Returns string value string from bytes, not includes quotes.\
Bytes are represents string characters, allows escape sequences.\
Returns empty string if bytes.len == 0 