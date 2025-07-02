# std/strings

## Index

[fn Count\(s: str, substr: str\): int](#count)\
[fn Contains\(s: str, substr: str\): bool](#contains)\
[fn ContainsAny\(s: str, chars: str\): bool](#containsany)\
[fn ContainsRune\(s: str, r: rune\): bool](#containsrune)\
[fn ContainsFunc\(s: str, f: fn\(rune\): bool\): bool](#containsfunc)\
[fn IndexByte\(s: str, c: byte\): int](#indexbyte)\
[fn LastIndex\(s: str, substr: str\): int](#lastindex)\
[fn LastIndexByte\(s: str, c: byte\): int](#lastindexbyte)\
[fn IndexRune\(s: str, r: rune\): int](#indexrune)\
[fn IndexAny\(s: str, chars: str\): int](#indexany)\
[fn LastIndexAny\(s: str, chars: str\): int](#lastindexany)\
[fn SplitN\(mut s: str, sep: str, n: int\): \[\]str](#splitn)\
[fn SplitAfterN\(mut s: str, sep: str, n: int\): \[\]str](#splitaftern)\
[fn Split\(mut s: str, sep: str\): \[\]str](#split)\
[fn SplitAfter\(mut s: str, sep: str\): \[\]str](#splitafter)\
[fn Join\(elems: \[\]str, sep: str\): str](#join)\
[fn HasPrefix\(s: str, prefix: str\): bool](#hasprefix)\
[fn HasSuffix\(s: str, suffix: str\): bool](#hassuffix)\
[fn Map\(mapping: fn\(rune\): rune, mut s: str\): str](#map)\
[fn Repeat\(s: str, count: int\): str](#repeat)\
[fn IndexFunc\(s: str, f: fn\(rune\): bool\): int](#indexfunc)\
[fn LastIndexFunc\(s: str, f: fn\(rune\): bool\): int](#lastindexfunc)\
[fn TrimLeftFunc\(s: str, f: fn\(rune\): bool\): str](#trimleftfunc)\
[fn TrimRight\(s: str, cutset: str\): str](#trimright)\
[fn TrimRightFunc\(s: str, f: fn\(rune\): bool\): str](#trimrightfunc)\
[fn TrimFunc\(s: str, f: fn\(rune\): bool\): str](#trimfunc)\
[fn TrimPrefix\(s: str, prefix: str\): str](#trimprefix)\
[fn TrimSuffix\(s: str, suffix: str\): str](#trimsuffix)\
[fn Trim\(s: str, cutset: str\): str](#trim)\
[fn TrimLeft\(s: str, cutset: str\): str](#trimleft)\
[fn TrimSpace\(s: str\): str](#trimspace)\
[fn Replace\(s: str, old: str, new: str, mut n: int\): str](#replace)\
[fn ReplaceAll\(s: str, old: str, new: str\): str](#replaceall)\
[fn EqualFold\(mut s: str, mut t: str\): bool](#equalfold)\
[fn Index\(s: str, substr: str\): int](#index)\
[fn Cut\(s: str, sep: str\): \(before: str, after: str, found: bool\)](#cut)\
[fn CutPrefix\(s: str, prefix: str\): \(after: str, found: bool\)](#cutprefix)\
[fn CutSuffix\(s: str, suffix: str\): \(before: str, found: bool\)](#cutsuffix)\
[fn ToUpper\(s: str\): str](#toupper)\
[fn ToLower\(s: str\): str](#tolower)\
[fn Clone\(s: str\): str](#clone)\
[fn Compare\(a: str, b: str\): int](#compare)\
[struct Replacer](#replacer)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(oldnew: \.\.\.str\): &amp;Replacer](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Replace\(\*self, s: str\): str](#replace-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr\(\*self, s: str, mut w: io::StrWriter\)\!: \(n: int\)](#writestr)\
[struct Reader](#reader)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(s: str\): &amp;Reader](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): i64](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(\*self, mut b: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadAt\(\*self, mut b: \[\]byte, off: i64\)\!: \(n: int\)](#readat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadByte\(mut \*self\)\!: \(byte, int\)](#readbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadByte\(\*self\)\!](#unreadbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadRune\(\*self\)\!: \(ch: rune, size: int\)](#readrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadRune\(\*self\)\!](#unreadrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek\(\*self, offset: i64, whence: int\)\!: i64](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteTo\(\*self, mut w: io::Writer\)\!: \(n: i64\)](#writeto)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, s: str\)](#reset)\
[struct Builder](#builder)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, b: \[\]byte\)\!: \(n: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr\(mut \*self, s: str\)\!: \(n: int\)](#writestr-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteByte\(mut \*self, b: byte\)\!](#writebyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteRune\(mut \*self, r: rune\)\!: \(n: int\)](#writerune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Grow\(mut \*self, n: int\)](#grow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Clear\(mut \*self\)](#clear)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cap\(\*self\): int](#cap)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn Buf\(mut \*self\): \[\]byte](#buf)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn SetBuf\(mut \*self, mut buf: \[\]byte\)](#setbuf)



## Count
```jule
fn Count(s: str, substr: str): int
```
Counts the number of non\-overlapping instances of substr in s\. If substr is an empty string, returns 1 \+ the number of Unicode code points in s\.

## Contains
```jule
fn Contains(s: str, substr: str): bool
```
Reports whether substr is within s\.

## ContainsAny
```jule
fn ContainsAny(s: str, chars: str): bool
```
Reports whether any of the UTF\-8\-encoded code points in chars are within s\.

## ContainsRune
```jule
fn ContainsRune(s: str, r: rune): bool
```
Reports whether the rune is contained in the UTF\-8\-encoded byte slice s\.

## ContainsFunc
```jule
fn ContainsFunc(s: str, f: fn(rune): bool): bool
```
Reports whether any of the UTF\-8\-encoded code points r within b satisfy f\(r\)\.

## IndexByte
```jule
fn IndexByte(s: str, c: byte): int
```
Returns the index of the first instance of c in b, or \-1 if c is not present in s\.

## LastIndex
```jule
fn LastIndex(s: str, substr: str): int
```
Returns the index of the last instance of substr in s, or \-1 if substr is not present in s\.

## LastIndexByte
```jule
fn LastIndexByte(s: str, c: byte): int
```
Returns the index of the last instance of c in s, or \-1 if c is not present in s\.

## IndexRune
```jule
fn IndexRune(s: str, r: rune): int
```
Returns the index of the first instance of the Unicode code point r, or \-1 if rune is not present in s\. If r is \[utf8::RuneError\], it returns the first instance of any invalid UTF\-8 byte sequence\.

## IndexAny
```jule
fn IndexAny(s: str, chars: str): int
```
Returns the index of the first instance of any Unicode code point from chars in s, or \-1 if no Unicode code point from chars is present in s\.

## LastIndexAny
```jule
fn LastIndexAny(s: str, chars: str): int
```
Returns the index of the last instance of any Unicode code point from chars in s, or \-1 if no Unicode code point from chars is present in s\.

## SplitN
```jule
fn SplitN(mut s: str, sep: str, n: int): []str
```
Slices s into substrings separated by sep and returns a slice of the substrings between those separators\.

The count determines the number of substrings to return:<br>

- n &gt; 0: at most n substrings; the last substring will be the unsplit remainder;
- n == 0: the result is nil \(zero substrings\);
- n &lt; 0: all substrings\.

Edge cases for s and sep \(for example, empty strings\) are handled as described in the documentation for \[Split\]\.

To split around the first instance of a separator, see \[Cut\]\.

## SplitAfterN
```jule
fn SplitAfterN(mut s: str, sep: str, n: int): []str
```
Slices s into substrings after each instance of sep and returns a slice of those substrings\.

The count determines the number of substrings to return:<br>

- n &gt; 0: at most n substrings; the last substring will be the unsplit remainder;
- n == 0: the result is nil \(zero substrings\);
- n &lt; 0: all substrings\.

Edge cases for s and sep \(for example, empty strings\) are handled as described in the documentation for \[SplitAfter\]\.

## Split
```jule
fn Split(mut s: str, sep: str): []str
```
Slices s into all substrings separated by sep and returns a slice of the substrings between those separators\.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s\.

If sep is empty, splits after each UTF\-8 sequence\. If both s and sep are empty, returns an empty slice\.

It is equivalent to \[SplitN\] with a count of \-1\.

To split around the first instance of a separator, see \[Cut\]\.

## SplitAfter
```jule
fn SplitAfter(mut s: str, sep: str): []str
```
Slices s into all substrings after each instance of sep and returns a slice of those substrings\.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s\.

If sep is empty, splits after each UTF\-8 sequence\. If both s and sep are empty, returns an empty slice\.

It is equivalent to \[SplitAfterN\] with a count of \-1\.

## Join
```jule
fn Join(elems: []str, sep: str): str
```
Concatenates the elements of its first argument to create a single string\. The separator string sep is placed between elements in the resulting string\.

## HasPrefix
```jule
fn HasPrefix(s: str, prefix: str): bool
```
Reports whether the string s begins with prefix\.

## HasSuffix
```jule
fn HasSuffix(s: str, suffix: str): bool
```
Reports whether the string s ends with suffix\.

## Map
```jule
fn Map(mapping: fn(rune): rune, mut s: str): str
```
Returns a copy of the string s with all its characters modified according to the mapping function\. If mapping returns a negative value, the character is dropped from the string with no replacement\.

## Repeat
```jule
fn Repeat(s: str, count: int): str
```
Returns a new string consisting of count copies of the string s\.

It panics if count is negative or if the result of \(len\(s\) \* count\) overflows\.

## IndexFunc
```jule
fn IndexFunc(s: str, f: fn(rune): bool): int
```
Returns the index into s of the first Unicode code point satisfying f\(c\), or \-1 if none do\.

## LastIndexFunc
```jule
fn LastIndexFunc(s: str, f: fn(rune): bool): int
```
Returns the index into s of the last Unicode code point satisfying f\(c\), or \-1 if none do\.

## TrimLeftFunc
```jule
fn TrimLeftFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all leading Unicode code points c satisfying f\(c\) removed\.

## TrimRight
```jule
fn TrimRight(s: str, cutset: str): str
```
Returns a slice of the string s, with all trailing Unicode code points contained in cutset removed\.

To remove a suffix, use \[TrimSuffix\] instead\.

## TrimRightFunc
```jule
fn TrimRightFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all trailing Unicode code points c satisfying f\(c\) removed\.

## TrimFunc
```jule
fn TrimFunc(s: str, f: fn(rune): bool): str
```
Returns a slice of the string s with all leading and trailing Unicode code points c satisfying f\(c\) removed\.

## TrimPrefix
```jule
fn TrimPrefix(s: str, prefix: str): str
```
Returns s without the provided leading prefix string\. If s doesn&#39;t start with prefix, s is returned unchanged\.

## TrimSuffix
```jule
fn TrimSuffix(s: str, suffix: str): str
```
Returns s without the provided trailing suffix string\. If s doesn&#39;t end with suffix, s is returned unchanged\.

## Trim
```jule
fn Trim(s: str, cutset: str): str
```
Returns a slice of the string s with all leading and trailing Unicode code points contained in cutset removed\.

## TrimLeft
```jule
fn TrimLeft(s: str, cutset: str): str
```
Returns a slice of the string s with all leading Unicode code points contained in cutset removed\.

To remove a prefix, use \[TrimPrefix\] instead\.

## TrimSpace
```jule
fn TrimSpace(s: str): str
```
Returns a slice of the string s, with all leading and trailing white space removed, as defined by Unicode\.

## Replace
```jule
fn Replace(s: str, old: str, new: str, mut n: int): str
```
Returns a copy of the string s with the first n non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the string and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune string\. If n &lt; 0, there is no limit on the number of replacements\.

## ReplaceAll
```jule
fn ReplaceAll(s: str, old: str, new: str): str
```
Returns a copy of the string s with all non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the string and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune string\.

## EqualFold
```jule
fn EqualFold(mut s: str, mut t: str): bool
```
Reports whether s and t, interpreted as UTF\-8 strings, are equal under simple Unicode case\-folding, which is a more general form of case\-insensitivity\.

## Index
```jule
fn Index(s: str, substr: str): int
```
Returns the index of the first instance of substr in s, or \-1 if substr is not present in s\.

## Cut
```jule
fn Cut(s: str, sep: str): (before: str, after: str, found: bool)
```
Slices s around the first instance of sep, returning the text before and after sep\. The found result reports whether sep appears in s\. If sep does not appear in s, returns s, &#34;&#34;, false\.

## CutPrefix
```jule
fn CutPrefix(s: str, prefix: str): (after: str, found: bool)
```
Returns s without the provided leading prefix string and reports whether it found the prefix\. If s doesn&#39;t start with prefix, returns s, false\. If prefix is the empty string, returns s, true\.

## CutSuffix
```jule
fn CutSuffix(s: str, suffix: str): (before: str, found: bool)
```
Returns s without the provided ending suffix string and reports whether it found the suffix\. If s doesn&#39;t end with suffix, returns s, false\. If suffix is the empty string, returns s, true\.

## ToUpper
```jule
fn ToUpper(s: str): str
```
Returns s with all Unicode letters mapped to their upper case\.

## ToLower
```jule
fn ToLower(s: str): str
```
Returns s with all Unicode letters mapped to their lower case\.

## Clone
```jule
fn Clone(s: str): str
```
Returns a fresh copy of s\. It guarantees to make a copy of s into a new allocation, which can be important when retaining only a small substring of a much larger string\. Using Clone can help such programs use less memory\. Of course, since using Clone makes a copy, overuse of Clone can make programs use more memory\. Clone should typically be used only rarely, and only when profiling indicates that it is needed\. For strings of length zero the string &#34;&#34; will be returned and no allocation is made\.

## Compare
```jule
fn Compare(a: str, b: str): int
```
Returns an integer comparing two strings lexicographically\. The result will be 0 if a == b, \-1 if a &lt; b, and \+1 if a &gt; b\.

Use compare when you need to perform a three\-way comparison \(with \[slices::SortFunc\], for example\)\. It is usually clearer and always faster to use the built\-in string comparison operators ==, &lt;, &gt;, and so on\.

## Replacer
```jule
struct Replacer {
	// NOTE: contains filtered hidden or unexported fields
}
```
Replaces a list of strings with replacements\. It is more efficient than Replace function for multiple replacements on one string\. It is safe for concurrent use by multiple threads\.

### New
```jule
fn New(oldnew: ...str): &Replacer
```
Returns a new \[Replacer\] from a list of old, new string pairs\. Replacements are performed in the order they appear in the target string, without overlapping matches\. The old string comparisons are done in argument order\.

Panics if given an odd number of arguments\.

### Replace
```jule
fn Replace(*self, s: str): str
```
Replaces s and returns the result\.

### WriteStr
```jule
fn WriteStr(*self, s: str, mut w: io::StrWriter)!: (n: int)
```
Applies replace on s and writes result to w\. Forwards any exception if any\.

## Reader
```jule
struct Reader {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements the io::Reader, io::ReaderAt, io::ByteReader, io::RuneReader, io::Seeker, and io::WriterTo traits by reading from a string\. The zero value for Reader operates like a Reader of an empty string\.

### Implemented Traits

- `io::Reader`
- `io::ReaderAt`
- `io::ByteReader`
- `io::RuneReader`
- `io::Seeker`
- `io::WriterTo`

### New
```jule
fn New(s: str): &Reader
```
Returns a new Reader reading from s\.

### Len
```jule
fn Len(*self): int
```
Returns the number of bytes of the unread portion of the string\.

### Size
```jule
fn Size(*self): i64
```
Returns the original length of the underlying string\. Size is the number of bytes available for reading via ReadAt\. The returned value is always the same and is not affected by calls to any other method\.

### Read
```jule
fn Read(*self, mut b: []byte)!: (n: int)
```
Implements the io::Reader trait\.

### ReadAt
```jule
fn ReadAt(*self, mut b: []byte, off: i64)!: (n: int)
```
Implements the io::ReaderAt trait\.

### ReadByte
```jule
fn ReadByte(mut *self)!: (byte, int)
```
Implements the io::ByteReader trait\.

### UnreadByte
```jule
fn UnreadByte(*self)!
```
Implements the io::ByteScanner trait\.

### ReadRune
```jule
fn ReadRune(*self)!: (ch: rune, size: int)
```
Implements the io::RuneReader trait\.

### UnreadRune
```jule
fn UnreadRune(*self)!
```
Implements the io::RuneScanner trait\.

### Seek
```jule
fn Seek(*self, offset: i64, whence: int)!: i64
```
Implements the io::Seeker trait\.

### WriteTo
```jule
fn WriteTo(*self, mut w: io::Writer)!: (n: i64)
```
Implements the io:\.WriterTo trait\.

### Reset
```jule
fn Reset(mut *self, s: str)
```
Resets the Reader to be reading from s\.

## Builder
```jule
struct Builder {
	// NOTE: contains filtered hidden or unexported fields
}
```
String builder for efficient concatenation\. Optimized for single string building not for repeated use\.

A Builder must not be copied after first use\.

### Implemented Traits

- `io::Writer`
- `io::ByteWriter`
- `io::RuneWriter`
- `io::StrWriter`

### Write
```jule
fn Write(mut *self, b: []byte)!: (n: int)
```
Writes bytes to buffer\. Never throws an exceptional\.

### WriteStr
```jule
fn WriteStr(mut *self, s: str)!: (n: int)
```
Writes bytes to buffer\. Never throws an exceptional\.

### WriteByte
```jule
fn WriteByte(mut *self, b: byte)!
```
Writes byte to buffer\. Never throws an exceptional\.

### WriteRune
```jule
fn WriteRune(mut *self, r: rune)!: (n: int)
```
Writes rune into buffer\. Returns written byte count\. Never throws an exceptional\.

### Grow
```jule
fn Grow(mut *self, n: int)
```
Grows b&#39;s capacity, if necessary, to guarantee space for another n bytes\. After Grow\(n\), at least n bytes can be written to b without another allocation\. If n is negative, panics\.

### Str
```jule
fn Str(*self): str
```
Returns buffer as string\. Will not reset the underlying content\.

### Clear
```jule
fn Clear(mut *self)
```
Clears buffer\. After calling this function, write calls will allocate new buffer\.

### Len
```jule
fn Len(*self): int
```
Returns length of buffer\.

### Cap
```jule
fn Cap(*self): int
```
Returns capacity of buffer\.

### Buf
```jule
unsafe fn Buf(mut *self): []byte
```
Returns mutable buffer for low\-level interactions\.

### SetBuf
```jule
unsafe fn SetBuf(mut *self, mut buf: []byte)
```
Sets mutable internal buffer for low\-level interactions\.