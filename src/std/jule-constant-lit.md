# std::jule::constant::lit

## Functions
```jule
fn IsAscii(r: rune): bool
```
Reports whether rune is byte actually. In other words, whether rune is ASCII.

---

```jule
fn ToRune(lit: str): rune
```
Returns rune value string from literal, includes quotes.
Bytes are represents rune literal, allows escape sequences.
Returns zero rune if `len(lit) == 0`.
Assumes lit is syntaticaly and semantically correct.

---

```jule
fn ToRawStr(lit: str): str
```
Returns raw-string value string from literal, includes quotes.
Bytes are represents string characters.
Returns empty string if `len(lit) == 0`.
Assumes lit is syntaticaly and semantically correct.

---

```jule
fn ToStr(lit: str): str
```
Returns string value string from literal, includes quotes.
Bytes are represents string characters, allows escape sequences.
Returns empty string if `len(lit) == 0`.
Assumes lit is syntaticaly and semantically correct.