# std::unsafe

## Functions

```jule
fn Str(b: *byte, n: int): str
```
Returns string based on `b`, the parameter `b` means first byte of string. The returned string uses `n` as length. Will not perform garbage collection.

---

```jule
fn Slice[Elem](e: *Elem, len: int, cap: int): []Elem
```
Returns slice based on `e`, the parameter `e` means first element of slice. Will not perform garbage collection.

---

```jule
fn Bytes(b: *byte, n: int): []byte
```
Alias for `Slice(b, n, n)`.

---

```jule
fn StrBytes(s: str): []byte
```
Alias for `Slice(&s[0], len(s), len(s))`. Returns `nil` if `len(s) == 0`.

---

```jule
fn BytesStr(b: []byte): str
```
Alias for `Str(&b[0], len(b), len(b))`. Returns empty string if `len(b) == 0`.

---

```jule
fn StrFromBytes(b: []byte): str
```
Same as `BytesStr` but keeps garbage collection.

---

```jule
fn BytesFromStr(s: str): []byte
```
Same as `StrBytes` but keeps garbage collection.