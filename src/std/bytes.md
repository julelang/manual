# std::bytes

Package std::bytes implements functions for the manipulation of byte slices. It is analogous to the facilities of the std::strings package. But optimized for byte slices, may provide more efficient functions. If you have byte slice form of strings, this package is the best option for most cases.

## Functions

```jule
fn repeat(s: []byte, mut n: int): []byte
```
Returns bytes that equals to concatenation of n-count s.
Returns nil slice is n <= 0.

---

```jule
fn has_prefix(s: []byte, sub: []byte): bool
```
Reports slice has prefix as specified sub-slice or not.

---

```jule
fn has_suffix(s: []byte, sub: []byte): bool
```
Reports slice has suffix as specified sub-slice or not.

---

```jule
fn find_at(s: []byte, sub: []byte, mut i: int): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at left of slice to right. Starts searching s at given index. Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find(s: []byte, sub: []byte): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn find_last_at(s: []byte, sub: []byte, i: int): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at right of slice to left. Starts searching s at given index. Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find_last(s: []byte, sub: []byte): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn find_byte(s: []byte, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn find_last_byte(s: []byte, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn find_rune(s: []byte, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn find_last_rune(s: []byte, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn find_fn_at(s: []byte, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of slice to right. Starts searching s at given index. Returns -1, if i < 0.

---

```jule
fn find_fn(s: []byte, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn find_fn_last_at(s: []byte, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of slice to left. Starts searching s at given index. Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find_fn_last(s: []byte, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn split(mut s: []byte, sub: []byte, mut n: int): [][]byte
```
Splits the slice into the specified number of parts to the specified sub-slice. Appends parts as immutable slice.
Returns empty slice if n is equals to zero. Returns all parts if n less than zero.

---

```jule
fn contains(s: []byte, sub: []byte): bool
```
Reports whether slice includes sub-slice.

---

```jule
fn contains_byte(s: []byte, b: byte): bool
```
Reports whether slice includes byte.

---

```jule
fn contains_rune(b: []byte, r: rune): bool
```
Reports whether slice includes rune.

---

```jule
fn count(s: []byte, sub: []byte): int
```
Counts the number of non-overlapping instances of sub-slice in s. Returns zero if sub-slice is empty.

---

```jule
fn replace(mut s: []byte, sub: []byte, new: []byte, mut n: int): []byte
```
Replaces all sub-slices matching sub in the slice with new. Returns same slice if n is equals to zero. Replaces all matches if n less than zero. This function may return mutable copy of s, of new slice allocation.

---

```jule
fn map(s: []byte, mapping: fn(mut rune): rune): []byte
```
Returns a immutable copy of the slice s with all its characters modified according to the mapping function. If mapping returns a negative value, the character is dropped from the slice with no replacement.

---

```jule
fn to_lower(s: []byte): []byte
```
Returns s with all Unicode letters mapped to their lower case. Returns immutable new slice allocation.

---

```jule
fn to_upper(s: []byte): []byte
```
Returns s with all Unicode letters mapped to their upper case. Returns immutable new slice allocation.

---

```jule
fn trim_left(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at left. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn trim_right(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at right. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn trim(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at left and right. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn join(parts: [][]byte, sep: []byte): []byte
```
Concatenates the parts of its first argument to create a single slice. The separator sep is placed between parts in the resulting slice.

---

```jule
fn runes(s: []byte): []rune
```
Returns runes from UTF-8 encoded bytes.
