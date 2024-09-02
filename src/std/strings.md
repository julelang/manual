# std::strings

## Functions

```jule
fn Compare(a: str, b: str): int
```
Returns an integer comparing two strings lexicographically.
The result will be `0` if `a == b`, `-1` if `a < b`, and `+1` if `a > b`.

Use compare when you need to perform a three-way comparison (with
`slices::SortFunc`, for example). It is usually clearer and always faster
to use the built-in string comparison operators `==`, `<`, `>`, and so on.

---

```jule
fn Repeat(s: str, mut n: int): str
```
Returns string that equals to concatenation of n-count s.
Returns empty string is n <= 0.

---

```jule
fn HasPrefix(s: str, sub: str): bool
```
Reports string has prefix as specified substring or not.

---

```jule
fn HasSuffix(s: str, sub: str): bool
```
Reports string has suffix as specified substring or not.

---

```jule
fn Find(s: str, sub: str): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn FindLast(s: str, sub: str): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn FindAt(s: str, sub: str, mut i: int): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at left of string to right. Starts searching s at given index.
Returns -1, if i < 0 || i >= len(s).

---

```jule
fn FindLastAt(s: str, sub: str, i: int): int
```
Returns index of first matched item with specified substring, returns -1 if not exist any match. Starts searching at right of string to left. Starts searching s at given index. Returns -1, if i < 0 || i >= len(s).

---

```jule
fn FindFn(s: str, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn FindFnAt(s: str, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at left of string to right. Starts searching s at given index. Returns -1, if i < 0.

---

```jule
fn FindFnLastAt(s: str, mut i: int, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of string to left. Starts searching s at given index. Returns -1, if i < 0 || i >= len(s).

---

```jule
fn FindFnLast(s: str, f: fn(mut rune): bool): int
```
Returns index of first matched item with finder function, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn FindAny(s: str, runes: str): int
```
Returns index of first matched item with any of runes, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn FindLastAny(s: str, runes: str): int
```
Returns index of first matched item with any of runes, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn Split(s: str, sub: str, mut n: int): []str
```
Splits the string into the specified number of parts to the specified substring. Returns empty slice if n is equals to zero. Returns all parts if n less than zero.

---

```jule
fn Contains(s: str, sub: str): bool
```
Reports whether string includes substring.

---

```jule
fn ContainsByte(s: str, b: byte): bool
```
Reports whether string includes byte.

---

```jule
fn ContainsRune(s: str, r: rune): bool
```
Reports whether string includes rune.

---

```jule
fn ContainsAny(s: str, runes: str): bool
```
Reports whether string includes any of runes.

---

```jule
fn Count(s: str, sub: str): int
```
Counts the number of non-overlapping instances of substring in s.
Returns zero if substring is empty.

---

```jule
fn Replace(s: str, sub: str, new: str, mut n: int): str
```
Replaces all substrings matching sub in the string with new. Returns same string if n is equals to zero. Replaces all matches if n less than zero.

---

```jule
fn Map(s: str, mapping: fn(mut rune): rune): str
```
Returns a copy of the string s with all its characters modified according to the mapping function. If mapping returns a negative value, the character is dropped from the string with no replacement.

---

```jule
fn ToLower(s: str): str
```
Returns s with all Unicode letters mapped to their lower case.

---

```jule
fn ToUpper(s: str): str
```
Returns s with all Unicode letters mapped to their upper case.

---

```jule
fn FindRune(s: str, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn FindLastRune(s: str, r: rune): int
```
Returns index of first matched item with specified rune, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn FindByte(s: str, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at left of string to right.

---

```jule
fn FindLastByte(s: str, b: byte): int
```
Returns index of first matched item with specified byte, returns -1 if not exist any match. Starts searching at right of string to left.

---

```jule
fn TrimLeft(s: str, cutset: str): str
```
Trims string by specified runes at left.
Cutset should include runes to trim.

---

```jule
fn TrimRight(s: str, cutset: str): str
```
Trims string by specified runes at right.
Cutset should include runes to trim.

---

```jule
fn Trim(s: str, cutset: str): str
```
Trims string by specified runes at left and right.
Cutset should include runes to trim.

---

```jule
fn Join(parts: []str, sep: str): str
```
Concatenates the parts of its first argument to create a single string.
The separator sep is placed between parts in the resulting string.

---

```jule
fn Cut(s: str, sep: str): (before: str, after: str, found: bool)
```
Cut slices s around the first instance of sep, returning the text before and after sep.
The found result reports whether sep appears in s.
If sep does not appear in s, cut returns s, "", false.

## Structs

```jule
struct StrBuilder
```
String builder for efficient concatenation.
Optimized for single string building not for repeated use.

**Methods:**

`static fn New(cap: int): StrBuilder`\
Returns new string builder with capacity.

`fn Write(mut self, b: []byte)`\
Writes bytes to buffer.

`fn WriteStr(mut self, s: str)`\
Writes bytes to buffer.

`fn WriteByte(mut self, b: byte)`\
Writes byte to buffer.

`fn WriteRune(mut self, r: rune)`\
Writes rune into buffer.

`fn Str(mut self): str`\
Returns as string, then calls the `Clear` method.

`fn Clear(mut self)`\
Clears buffer.
After calling this function, write calls will allocate new buffer.

`fn Len(self): int`\
Returns length of buffer.

`fn Cap(self): int`\
Returns capacity of buffer.

`unsafe fn Buf(mut self): []byte`\
Returns mutable buffer for low-level interactions.

`unsafe fn SetBuf(mut self, mut buf: []byte)`\
Sets mutable internal buffer for low-level interactions.