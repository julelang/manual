# std/strings

## Functions

```jule
fn Compare(a: str, b: str): int
```
Returns an integer comparing two strings lexicographically. The result will be 0 if a == b, -1 if a < b, and +1 if a > b.

Use compare when you need to perform a three-way comparison (with \[slices::SortFunc\], for example). It is usually clearer and always faster to use the built-in string comparison operators ==, <, >, and so on.

---

```jule
fn Count(s: str, substr: str): int
```
Counts the number of non-overlapping instances of substr in s. If substr is an empty string, returns 1 + the number of Unicode code points in s.

---

```jule
fn Contains(s: str, substr: str): bool
```
Reports whether substr is within s.

---

```jule
fn ContainsAny(s: str, chars: str): bool
```
Reports whether any of the UTF-8-encoded code points in chars are within s.

---

```jule
fn ContainsRune(s: str, r: rune): bool
```
Reports whether the rune is contained in the UTF-8-encoded byte slice s.

---

```jule
fn ContainsFunc(s: str, f: fn(rune): bool): bool
```
Reports whether any of the UTF-8-encoded code points r within b satisfy f(r).

---

```jule
fn IndexByte(s: str, c: byte): int
```
Returns the index of the first instance of c in b, or -1 if c is not present in s.

---

```jule
fn LastIndex(s: str, substr: str): int
```
Returns the index of the last instance of substr in s, or -1 if substr is not present in s.

---

```jule
fn LastIndexByte(s: str, c: byte): int
```
Returns the index of the last instance of c in s, or -1 if c is not present in s.

---

```jule
fn IndexRune(s: str, r: rune): int
```
Returns the index of the first instance of the Unicode code point r, or -1 if rune is not present in s. If r is \[utf8::RuneError\], it returns the first instance of any invalid UTF-8 byte sequence.

---

```jule
fn IndexAny(s: str, chars: str): int
```
Returns the index of the first instance of any Unicode code point from chars in s, or -1 if no Unicode code point from chars is present in s.

---

```jule
fn LastIndexAny(s: str, chars: str): int
```
Returns the index of the last instance of any Unicode code point from chars in s, or -1 if no Unicode code point from chars is present in s.

---

```jule
fn SplitN(mut s: str, sep: str, n: int): []str
```
Slices s into substrings separated by sep and returns a slice of the substrings between those separators.

The count determines the number of substrings to return:
   - n > 0: at most n substrings; the last substring will be the unsplit remainder;
   - n == 0: the result is nil (zero substrings);
   - n < 0: all substrings.

Edge cases for s and sep (for example, empty strings) are handled as described in the documentation for \[Split\].

To split around the first instance of a separator, see \[Cut\].

---

```jule
fn SplitAfterN(mut s: str, sep: str, n: int): []str
```
Slices s into substrings after each instance of sep and returns a slice of those substrings.

The count determines the number of substrings to return:
   - n > 0: at most n substrings; the last substring will be the unsplit remainder;
   - n == 0: the result is nil (zero substrings);
   - n < 0: all substrings.

Edge cases for s and sep (for example, empty strings) are handled as described in the documentation for \[SplitAfter\].

---

```jule
fn Split(mut s: str, sep: str): []str
```
Slices s into all substrings separated by sep and returns a slice of the substrings between those separators.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s.

If sep is empty, splits after each UTF-8 sequence. If both s and sep are empty, returns an empty slice.

It is equivalent to \[SplitN\] with a count of -1.

To split around the first instance of a separator, see \[Cut\].

---

```jule
fn SplitAfter(mut s: str, sep: str): []str
```
Slices s into all substrings after each instance of sep and returns a slice of those substrings.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s.

If sep is empty, splits after each UTF-8 sequence. If both s and sep are empty, returns an empty slice.

It is equivalent to \[SplitAfterN\] with a count of -1.

---

```jule
fn Join(elems: []str, sep: str): str
```
Concatenates the elements of its first argument to create a single string. The separator string sep is placed between elements in the resulting string.

---

```jule
fn HasPrefix(s: str, prefix: str): bool
```
Reports whether the string s begins with prefix.

---

```jule
fn HasSuffix(s: str, suffix: str): bool
```
Reports whether the string s ends with suffix.

---

```jule
fn Map(mapping: fn(rune): rune, mut s: str): str
```
Returns a copy of the string s with all its characters modified according to the mapping function. If mapping returns a negative value, the character is dropped from the string with no replacement.

---

```jule
fn Repeat(s: str, count: int): str
```
Returns a new string consisting of count copies of the string s.

It panics if count is negative or if the result of (len(s) * count) overflows.

---

```jule
fn IndexFunc(s: str, f: fn(rune): bool): int
```
Returns the index into s of the first Unicode code point satisfying f(c), or -1 if none do.

---

```jule
fn LastIndexFunc(s: str, f: fn(rune): bool): int
```
Returns the index into s of the last Unicode code point satisfying f(c), or -1 if none do.

---

```jule
fn TrimLeftFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all leading Unicode code points c satisfying f(c) removed.

---

```jule
fn TrimRight(s: str, cutset: str): str
```
Returns a slice of the string s, with all trailing Unicode code points contained in cutset removed.

To remove a suffix, use \[TrimSuffix\] instead.

---

```jule
fn TrimRightFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all trailing Unicode code points c satisfying f(c) removed.

---

```jule
fn TrimFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all leading and trailing Unicode code points c satisfying f(c) removed.

---

```jule
fn TrimPrefix(s: str, prefix: str): str
```
Returns s without the provided leading prefix string. If s doesn't start with prefix, s is returned unchanged.

---

```jule
fn TrimSuffix(s: str, suffix: str): str
```
Returns s without the provided trailing suffix string. If s doesn't end with suffix, s is returned unchanged.

---

```jule
fn Trim(s: str, cutset: str): str
```
Returns a slice of the string s with all leading and trailing Unicode code points contained in cutset removed.

---

```jule
fn TrimLeft(s: str, cutset: str): str
```
Returns a slice of the string s with all leading Unicode code points contained in cutset removed.

To remove a prefix, use \[TrimPrefix\] instead.

---

```jule
fn TrimSpace(s: str): str
```
Returns a slice of the string s, with all leading and trailing white space removed, as defined by Unicode.

---

```jule
fn Replace(s: str, old: str, new: str, mut n: int): str
```
Returns a copy of the string s with the first n non-overlapping instances of old replaced by new. If old is empty, it matches at the beginning of the string and after each UTF-8 sequence, yielding up to k+1 replacements for a k-rune string. If n < 0, there is no limit on the number of replacements.

---

```jule
fn ReplaceAll(s: str, old: str, new: str): str
```
Returns a copy of the string s with all non-overlapping instances of old replaced by new. If old is empty, it matches at the beginning of the string and after each UTF-8 sequence, yielding up to k+1 replacements for a k-rune string.

---

```jule
fn EqualFold(mut s: str, mut t: str): bool
```
Reports whether s and t, interpreted as UTF-8 strings, are equal under simple Unicode case-folding, which is a more general form of case-insensitivity.

---

```jule
fn Index(s: str, substr: str): int
```
Returns the index of the first instance of substr in s, or -1 if substr is not present in s.

---

```jule
fn Cut(s: str, sep: str): (before: str, after: str, found: bool)
```
Slices s around the first instance of sep, returning the text before and after sep. The found result reports whether sep appears in s. If sep does not appear in s, returns s, "", false.

---

```jule
fn CutPrefix(s: str, prefix: str): (after: str, found: bool)
```
Returns s without the provided leading prefix string and reports whether it found the prefix. If s doesn't start with prefix, returns s, false. If prefix is the empty string, returns s, true.

---

```jule
fn CutSuffix(s: str, suffix: str): (before: str, found: bool)
```
Returns s without the provided ending suffix string and reports whether it found the suffix. If s doesn't end with suffix, returns s, false. If suffix is the empty string, returns s, true.

---

```jule
fn ToUpper(s: str): str
```
Returns s with all Unicode letters mapped to their upper case.

---

```jule
fn ToLower(s: str): str
```
Returns s with all Unicode letters mapped to their lower case.

## Structs

```jule
struct Builder
```
String builder for efficient concatenation.
Optimized for single string building not for repeated use.

A Builder must not be copied after first use.

::: info
**Implemented Traits**
- `io::Writer`
- `io::ByteWriter`
- `io::RuneWriter`
- `io::StrWriter`
:::

**Methods:**

`fn Write(mut self, b: []byte)!: (n: int)`\
Writes bytes to buffer. Never throws an exceptional.

`fn WriteStr(mut self, s: str)!: (n: int)`\
Writes bytes to buffer. Never throws an exceptional.

`fn WriteByte(mut self, b: byte)!`\
Writes byte to buffer. Never throws an exceptional.

`fn WriteRune(mut self, r: rune)!: (n: int)`\
Writes rune into buffer. Returns written byte count. Never throws an exceptional.

`fn Grow(mut self, n: int)`\
Grows b's capacity, if necessary, to guarantee space for another n bytes. After Grow(n), at least n bytes can be written to b without another allocation. If n is negative, panics.

`fn Str(self): str`\
Returns buffer as string. Will not reset the underlying content.

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