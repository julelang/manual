# std/bytes

Package `std/bytes` implements functions for the manipulation of byte slices. It is analogous to the facilities of the `std/strings` package. But optimized for byte slices, may provide more efficient functions. If you have byte slice form of strings, this package is the best option for most cases.

## Functions

```jule
fn Equal(s1: []byte, s2: []byte): bool
```
Reports whether two byte slices are the same length and contains same bytes. The nil slice considered as zero-length empty slice.

---

```jule
fn Repeat(s: []byte, mut n: int): []byte
```
Returns bytes that equals to concatenation of n-count s.
Returns nil slice is n <= 0.

---

```jule
fn HasPrefix(s: []byte, sub: []byte): bool
```
Reports slice has prefix as specified sub-slice or not.

---

```jule
fn HasSuffix(s: []byte, sub: []byte): bool
```
Reports slice has suffix as specified sub-slice or not.

---

```jule
fn FindAt(s: []byte, sub: []byte, mut i: int): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at left of slice to right. Starts searching s at given index. Returns -1, if i < 0 || i >= len(s).

---

```jule
fn Find(s: []byte, sub: []byte): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindLastAt(s: []byte, sub: []byte, i: int): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at right of slice to left. Starts searching s at given index. Returns -1, if i < 0 || i >= len(s).

---

```jule
fn FindLast(s: []byte, sub: []byte): int
```
Returns index of first matched item with specified sub-slice, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn FindByte(s: []byte, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindLastByte(s: []byte, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn FindRune(s: []byte, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindLastRune(s: []byte, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn FindFnAt(s: []byte, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of slice to right. Starts searching s at given index. Returns -1, if i < 0.

---

```jule
fn FindFn(s: []byte, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindFnLastAt(s: []byte, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of slice to left. Starts searching s at given index. Returns -1, if i < 0 || i >= len(s).

---

```jule
fn FindFnLast(s: []byte, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn FindAny(s: []byte, runes: []byte): int
```
Returns index of first matched item with any of runes, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindLastAny(s: []byte, runes: []byte): int
```
Returns index of first matched item with any of runes, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn Split(mut s: []byte, sub: []byte, mut n: int): [][]byte
```
Splits the slice into the specified number of parts to the specified sub-slice. Appends parts as immutable slice.
Returns empty slice if n is equals to zero. Returns all parts if n less than zero.

---

```jule
fn SplitAll(mut s: []byte, sub: []byte): [][]byte
```
Same as the Split function. But splits all parts.
Basically equals to `Split(s, sub, -1)` call.

---

```jule
fn Contains(s: []byte, sub: []byte): bool
```
Reports whether slice includes sub-slice.

---

```jule
fn ContainsByte(s: []byte, b: byte): bool
```
Reports whether slice includes byte.

---

```jule
fn ContainsRune(b: []byte, r: rune): bool
```
Reports whether slice includes rune.

---

```jule
fn ContainsAny(s: []byte, runes: []byte): bool
```
Reports whether slice includes any of runes.

---

```jule
fn Count(s: []byte, sub: []byte): int
```
Counts the number of non-overlapping instances of sub-slice in s. Returns zero if sub-slice is empty.

---

```jule
fn Replace(mut s: []byte, sub: []byte, new: []byte, mut n: int): []byte
```
Replaces all sub-slices matching sub in the slice with new. Returns same slice if n is equals to zero. Replaces all matches if n less than zero. This function may return mutable copy of s, of new slice allocation.

---

```jule
fn ReplaceAll(mut s: []byte, sub: []byte, new: []byte): []byte
```
Same as the Replace function. But replaces all matched subs.
Basically equals to `Replace(s, sub, new, -1)` call.

---

```jule
fn Map(s: []byte, mapping: fn(mut rune): rune): []byte
```
Returns a immutable copy of the slice s with all its characters modified according to the mapping function. If mapping returns a negative value, the character is dropped from the slice with no replacement.

---

```jule
fn ToLower(s: []byte): []byte
```
Returns s with all Unicode letters mapped to their lower case. Returns immutable new slice allocation.

---

```jule
fn ToUpper(s: []byte): []byte
```
Returns s with all Unicode letters mapped to their upper case. Returns immutable new slice allocation.

---

```jule
fn TrimLeft(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at left. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn TrimRight(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at right. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn Trim(mut s: []byte, cutset: []byte): []byte
```
Trims slice by specified runes at left and right. Cutset should include runes to trim. Returns mutable copy of s.

---

```jule
fn Join(parts: [][]byte, sep: []byte): []byte
```
Concatenates the parts of its first argument to create a single slice. The separator sep is placed between parts in the resulting slice.

---

```jule
fn Runes(s: []byte): []rune
```
Returns runes from UTF-8 encoded bytes.

---

```jule
fn Cut(mut s: []byte, sep: []byte): (before: []byte, after: []byte, found: bool)
```
Cut slices s around the first instance of sep, returning the text before and after sep.
The found result reports whether sep appears in s.
If sep does not appear in s, cut returns s, nil, false.

Cut returns slices of the original slice s, not copies.