# std::jule::constant::lit

## Functions
```jule
fn is_ascii(r: rune): bool
```
Reports whether rune is byte actually. In other words, whether rune is ACII.

---

```jule
fn to_rune(bytes: []byte): rune
```
Returns rune value string from bytes, not includes quotes.\
Bytes are represents rune literal, allows escape sequences.\
Returns empty string if bytes.len == 0

---

```jule
fn to_raw_str(bytes: []byte): str
```
Returns raw-string value string from bytes, not includes quotes.\
Bytes are represents string characters.\
Returns empty string if bytes.len == 0

---

```jule
fn to_str(bytes: []byte): str
```
Returns string value string from bytes, not includes quotes.\
Bytes are represents string characters, allows escape sequences.\
Returns empty string if bytes.len == 0 