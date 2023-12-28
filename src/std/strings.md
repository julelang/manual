# std::strings

## Functions

```jule
pub fn repeat(s: str, mut n: int): str
```
Returns string that equals to concatenation of n-count s.
Returns empty string is n <= 0.

---

```jule
fn has_prefix(s: str, sub: str): bool
```
Reports string has prefix as specified substring or not.

---

```jule
fn has_suffix(s: str, sub: str): bool
```
Reports string has suffix as specified substring or not.

---

```jule
fn find(s: str, sub: str): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn find_last(s: str, sub: str): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn find_at(s: str, sub: str, mut i: int): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at left of string to right. Starts searching s at given index.
Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find_last_at(s: str, sub: str, i: int): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at right of string to left. Starts searching s at given index. Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find_fn(s: str, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn find_fn_at(s: str, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of string to right. Starts searching s at given index. Returns -1, if i < 0.

---

```jule
fn find_fn_last_at(s: str, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of string to left. Starts searching s at given index. Returns -1, if i < 0 || i >= s.len.

---

```jule
fn find_fn_last(s: str, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn split(s: str, sub: str, mut n: int): []str
```
Splits the string into the specified number of parts to the specified substring. Returns empty slice if n is equals to zero. Returns all parts if n less than zero.

---

```jule
fn contains(s: str, sub: str): bool
```
Reports whether string includes substring.

---

```jule
fn contains_byte(s: str, b: byte): bool
```
Reports whether string includes byte.

---

```jule
fn contains_rune(s: str, r: rune): bool
```
Reports whether string includes rune.

---

```jule
fn count(s: str, sub: str): int
```
Counts the number of non-overlapping instances of substring in s.
Returns zero if substring is empty.

---

```jule
fn replace(s: str, sub: str, new: str, mut n: int): str
```
Replaces all substrings matching sub in the string with new. Returns same string if n is equals to zero. Replaces all matches if n less than zero.

---

```jule
fn map(s: str, mapping: fn(mut rune): rune): str
```
Returns a copy of the string s with all its characters modified according to the mapping function. If mapping returns a negative value, the character is dropped from the string with no replacement.

---

```jule
fn to_lower(s: str): str
```
Returns s with all Unicode letters mapped to their lower case.

---

```jule
fn to_upper(s: str): str
```
Returns s with all Unicode letters mapped to their upper case.

---

```jule
fn find_rune(s: str, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn find_last_rune(s: str, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn find_byte(s: str, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn find_last_byte(s: str, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn trim_left(s: str, cutset: str): str
```
Trims string by specified runes at left.
Cutset should include runes to trim.

---

```jule
fn trim_right(s: str, cutset: str): str
```
Trims string by specified runes at right.
Cutset should include runes to trim.

---

```jule
fn trim(s: str, cutset: str): str
```
Trims string by specified runes at left and right.
Cutset should include runes to trim.

---

```jule
fn join(parts: []str, sep: str): str
```
Concatenates the parts of its first argument to create a single string.
The separator sep is placed between parts in the resulting string.
