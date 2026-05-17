# std/strings

## Index

[fn Compare\(a: string, b: string\): int](#compare)\
[fn Count\(s: string, substr: string\): int](#count)\
[fn Contains\(s: string, substr: string\): bool](#contains)\
[fn ContainsAny\(s: string, chars: string\): bool](#containsany)\
[fn ContainsRune\(s: string, r: rune\): bool](#containsrune)\
[fn ContainsFunc\(s: string, f: fn\(rune\): bool\): bool](#containsfunc)\
[fn IndexByte\(s: string, c: byte\): int](#indexbyte)\
[fn LastIndex\(s: string, substr: string\): int](#lastindex)\
[fn LastIndexByte\(s: string, c: byte\): int](#lastindexbyte)\
[fn IndexRune\(s: string, r: rune\): int](#indexrune)\
[fn IndexAny\(s: string, chars: string\): int](#indexany)\
[fn LastIndexAny\(s: string, chars: string\): int](#lastindexany)\
[fn SplitN\(mut s: string, sep: string, n: int\): \[\]string](#splitn)\
[fn SplitAfterN\(mut s: string, sep: string, n: int\): \[\]string](#splitaftern)\
[fn Split\(mut s: string, sep: string\): \[\]string](#split)\
[fn SplitAfter\(mut s: string, sep: string\): \[\]string](#splitafter)\
[fn Join\(elems: \[\]string, sep: string\): string](#join)\
[fn HasPrefix\(s: string, prefix: string\): bool](#hasprefix)\
[fn HasSuffix\(s: string, suffix: string\): bool](#hassuffix)\
[fn Map\(mapping: fn\(rune\): rune, mut s: string\): string](#map)\
[fn Repeat\(s: string, count: int\): string](#repeat)\
[fn IndexFunc\(s: string, f: fn\(rune\): bool\): int](#indexfunc)\
[fn LastIndexFunc\(s: string, f: fn\(rune\): bool\): int](#lastindexfunc)\
[fn TrimLeftFunc\(s: string, f: fn\(rune\): bool\): string](#trimleftfunc)\
[fn TrimRight\(s: string, cutset: string\): string](#trimright)\
[fn TrimRightFunc\(s: string, f: fn\(rune\): bool\): string](#trimrightfunc)\
[fn TrimFunc\(s: string, f: fn\(rune\): bool\): string](#trimfunc)\
[fn TrimPrefix\(s: string, prefix: string\): string](#trimprefix)\
[fn TrimSuffix\(s: string, suffix: string\): string](#trimsuffix)\
[fn Trim\(s: string, cutset: string\): string](#trim)\
[fn TrimLeft\(s: string, cutset: string\): string](#trimleft)\
[fn TrimSpace\(s: string\): string](#trimspace)\
[fn Replace\(s: string, old: string, new: string, mut n: int\): string](#replace)\
[fn ReplaceAll\(s: string, old: string, new: string\): string](#replaceall)\
[fn EqualFold\(mut s: string, mut t: string\): bool](#equalfold)\
[fn Index\(s: string, substr: string\): int](#index)\
[fn Cut\(s: string, sep: string\): \(before: string, after: string, found: bool\)](#cut)\
[fn CutPrefix\(s: string, prefix: string\): \(after: string, found: bool\)](#cutprefix)\
[fn CutSuffix\(s: string, suffix: string\): \(before: string, found: bool\)](#cutsuffix)\
[fn ToUpper\(s: string\): string](#toupper)\
[fn ToLower\(s: string\): string](#tolower)\
[fn Clone\(s: string\): string](#clone)\
[struct Builder](#builder)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, b: \[\]byte\)\!: \(n: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteString\(mut \*self, s: string\)\!: \(n: int\)](#writestring)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteByte\(mut \*self, b: byte\)\!](#writebyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteRune\(mut \*self, r: rune\)\!: \(n: int\)](#writerune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Grow\(mut \*self, n: int\)](#grow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Clear\(mut \*self\)](#clear)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cap\(\*self\): int](#cap)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Buf\(mut \*self\): \[\]byte](#buf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetBuf\(mut \*self, mut buf: \[\]byte\)](#setbuf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Async\(mut &amp;self\): asyncBuilder](#async)\
[struct Reader](#reader)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(s: string\): &amp;Reader](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): i64](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(\*self, mut b: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadAt\(\*self, mut b: \[\]byte, off: i64\)\!: \(n: int\)](#readat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadByte\(mut \*self\)\!: \(byte, int\)](#readbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadByte\(\*self\)\!](#unreadbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadRune\(\*self\)\!: \(ch: rune, size: int\)](#readrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadRune\(\*self\)\!](#unreadrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek\(\*self, offset: i64, whence: int\)\!: i64](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteTo\(\*self, mut w: io::Writer\)\!: \(n: i64\)](#writeto)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, s: string\)](#reset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Async\(mut &amp;self\): asyncReader](#async-1)\
[struct Replacer](#replacer)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(oldnew: \.\.\.string\): &amp;Replacer](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Replace\(&amp;self, s: string\): string](#replace-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteString\(&amp;self, mut w: io::Writer, s: string\)\!: \(n: int\)](#writestring-1)



## Compare
```jule
fn Compare(a: string, b: string): int
```
Returns an integer comparing two strings lexicographically\. The result will be 0 if a == b, \-1 if a &lt; b, and \+1 if a &gt; b\.

Use compare when you need to perform a three\-way comparison \(with \[slices::SortFunc\], for example\)\. It is usually clearer and always faster to use the built\-in string comparison operators ==, &lt;, &gt;, and so on\.

## Count
```jule
fn Count(s: string, substr: string): int
```
Counts the number of non\-overlapping instances of substr in s\. If substr is an empty string, returns 1 \+ the number of Unicode code points in s\.

## Contains
```jule
fn Contains(s: string, substr: string): bool
```
Reports whether substr is within s\.

## ContainsAny
```jule
fn ContainsAny(s: string, chars: string): bool
```
Reports whether any of the UTF\-8\-encoded code points in chars are within s\.

## ContainsRune
```jule
fn ContainsRune(s: string, r: rune): bool
```
Reports whether the rune is contained in the UTF\-8\-encoded byte slice s\.

## ContainsFunc
```jule
fn ContainsFunc(s: string, f: fn(rune): bool): bool
```
Reports whether any of the UTF\-8\-encoded code points r within b satisfy f\(r\)\.

## IndexByte
```jule
fn IndexByte(s: string, c: byte): int
```
Returns the index of the first instance of c in b, or \-1 if c is not present in s\.

## LastIndex
```jule
fn LastIndex(s: string, substr: string): int
```
Returns the index of the last instance of substr in s, or \-1 if substr is not present in s\.

## LastIndexByte
```jule
fn LastIndexByte(s: string, c: byte): int
```
Returns the index of the last instance of c in s, or \-1 if c is not present in s\.

## IndexRune
```jule
fn IndexRune(s: string, r: rune): int
```
Returns the index of the first instance of the Unicode code point r, or \-1 if rune is not present in s\. If r is \[utf8::RuneError\], it returns the first instance of any invalid UTF\-8 byte sequence\.

## IndexAny
```jule
fn IndexAny(s: string, chars: string): int
```
Returns the index of the first instance of any Unicode code point from chars in s, or \-1 if no Unicode code point from chars is present in s\.

## LastIndexAny
```jule
fn LastIndexAny(s: string, chars: string): int
```
Returns the index of the last instance of any Unicode code point from chars in s, or \-1 if no Unicode code point from chars is present in s\.

## SplitN
```jule
fn SplitN(mut s: string, sep: string, n: int): []string
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
fn SplitAfterN(mut s: string, sep: string, n: int): []string
```
Slices s into substrings after each instance of sep and returns a slice of those substrings\.

The count determines the number of substrings to return:<br>

- n &gt; 0: at most n substrings; the last substring will be the unsplit remainder;
- n == 0: the result is nil \(zero substrings\);
- n &lt; 0: all substrings\.

Edge cases for s and sep \(for example, empty strings\) are handled as described in the documentation for \[SplitAfter\]\.

## Split
```jule
fn Split(mut s: string, sep: string): []string
```
Slices s into all substrings separated by sep and returns a slice of the substrings between those separators\.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s\.

If sep is empty, splits after each UTF\-8 sequence\. If both s and sep are empty, returns an empty slice\.

It is equivalent to \[SplitN\] with a count of \-1\.

To split around the first instance of a separator, see \[Cut\]\.

## SplitAfter
```jule
fn SplitAfter(mut s: string, sep: string): []string
```
Slices s into all substrings after each instance of sep and returns a slice of those substrings\.

If s does not contain sep and sep is not empty, returns a slice of length 1 whose only element is s\.

If sep is empty, splits after each UTF\-8 sequence\. If both s and sep are empty, returns an empty slice\.

It is equivalent to \[SplitAfterN\] with a count of \-1\.

## Join
```jule
fn Join(elems: []string, sep: string): string
```
Concatenates the elements of its first argument to create a single string\. The separator string sep is placed between elements in the resulting string\.

## HasPrefix
```jule
fn HasPrefix(s: string, prefix: string): bool
```
Reports whether the string s begins with prefix\.

## HasSuffix
```jule
fn HasSuffix(s: string, suffix: string): bool
```
Reports whether the string s ends with suffix\.

## Map
```jule
fn Map(mapping: fn(rune): rune, mut s: string): string
```
Returns a copy of the string s with all its characters modified according to the mapping function\. If mapping returns a negative value, the character is dropped from the string with no replacement\.

## Repeat
```jule
fn Repeat(s: string, count: int): string
```
Returns a new string consisting of count copies of the string s\.

It panics if count is negative or if the result of \(len\(s\) \* count\) overflows\.

## IndexFunc
```jule
fn IndexFunc(s: string, f: fn(rune): bool): int
```
Returns the index into s of the first Unicode code point satisfying f\(c\), or \-1 if none do\.

## LastIndexFunc
```jule
fn LastIndexFunc(s: string, f: fn(rune): bool): int
```
Returns the index into s of the last Unicode code point satisfying f\(c\), or \-1 if none do\.

## TrimLeftFunc
```jule
fn TrimLeftFunc(s: string, f: fn(rune): bool): string
```
Returns a slice of the string s with all leading Unicode code points c satisfying f\(c\) removed\.

## TrimRight
```jule
fn TrimRight(s: string, cutset: string): string
```
Returns a slice of the string s, with all trailing Unicode code points contained in cutset removed\.

To remove a suffix, use \[TrimSuffix\] instead\.

## TrimRightFunc
```jule
fn TrimRightFunc(s: string, f: fn(rune): bool): string
```
Returns a slice of the string s with all trailing Unicode code points c satisfying f\(c\) removed\.

## TrimFunc
```jule
fn TrimFunc(s: string, f: fn(rune): bool): string
```
Returns a slice of the string s with all leading and trailing Unicode code points c satisfying f\(c\) removed\.

## TrimPrefix
```jule
fn TrimPrefix(s: string, prefix: string): string
```
Returns s without the provided leading prefix string\. If s doesn&#39;t start with prefix, s is returned unchanged\.

## TrimSuffix
```jule
fn TrimSuffix(s: string, suffix: string): string
```
Returns s without the provided trailing suffix string\. If s doesn&#39;t end with suffix, s is returned unchanged\.

## Trim
```jule
fn Trim(s: string, cutset: string): string
```
Returns a slice of the string s with all leading and trailing Unicode code points contained in cutset removed\.

## TrimLeft
```jule
fn TrimLeft(s: string, cutset: string): string
```
Returns a slice of the string s with all leading Unicode code points contained in cutset removed\.

To remove a prefix, use \[TrimPrefix\] instead\.

## TrimSpace
```jule
fn TrimSpace(s: string): string
```
Returns a slice of the string s, with all leading and trailing white space removed, as defined by Unicode\.

## Replace
```jule
fn Replace(s: string, old: string, new: string, mut n: int): string
```
Returns a copy of the string s with the first n non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the string and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune string\. If n &lt; 0, there is no limit on the number of replacements\.

## ReplaceAll
```jule
fn ReplaceAll(s: string, old: string, new: string): string
```
Returns a copy of the string s with all non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the string and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune string\.

## EqualFold
```jule
fn EqualFold(mut s: string, mut t: string): bool
```
Reports whether s and t, interpreted as UTF\-8 strings, are equal under simple Unicode case\-folding, which is a more general form of case\-insensitivity\.

## Index
```jule
fn Index(s: string, substr: string): int
```
Returns the index of the first instance of substr in s, or \-1 if substr is not present in s\.

## Cut
```jule
fn Cut(s: string, sep: string): (before: string, after: string, found: bool)
```
Slices s around the first instance of sep, returning the text before and after sep\. The found result reports whether sep appears in s\. If sep does not appear in s, returns s, &#34;&#34;, false\.

## CutPrefix
```jule
fn CutPrefix(s: string, prefix: string): (after: string, found: bool)
```
Returns s without the provided leading prefix string and reports whether it found the prefix\. If s doesn&#39;t start with prefix, returns s, false\. If prefix is the empty string, returns s, true\.

## CutSuffix
```jule
fn CutSuffix(s: string, suffix: string): (before: string, found: bool)
```
Returns s without the provided ending suffix string and reports whether it found the suffix\. If s doesn&#39;t end with suffix, returns s, false\. If suffix is the empty string, returns s, true\.

## ToUpper
```jule
fn ToUpper(s: string): string
```
Returns s with all Unicode letters mapped to their upper case\.

## ToLower
```jule
fn ToLower(s: string): string
```
Returns s with all Unicode letters mapped to their lower case\.

## Clone
```jule
fn Clone(s: string): string
```
Returns a fresh copy of s\. It guarantees to make a copy of s into a new allocation, which can be important when retaining only a small substring of a much larger string\. Using Clone can help such programs use less memory\. Of course, since using Clone makes a copy, overuse of Clone can make programs use more memory\. Clone should typically be used only rarely, and only when profiling indicates that it is needed\. For strings of length zero the string &#34;&#34; will be returned and no allocation is made\.

## Builder
```jule
struct Builder {
	// NOTE: contains filtered hidden or unexported fields
}
```
String builder for efficient concatenation\. Optimized for single string building not for repeated use\.

A Builder must not be copied after first use\.

### Write
```jule
fn Write(mut *self, b: []byte)!: (n: int)
```
Writes bytes to buffer\. Never throws an error\.

### WriteString
```jule
fn WriteString(mut *self, s: string)!: (n: int)
```
Writes bytes to buffer\. Never throws an error\.

### WriteByte
```jule
fn WriteByte(mut *self, b: byte)!
```
Writes byte to buffer\. Never throws an error\.

### WriteRune
```jule
fn WriteRune(mut *self, r: rune)!: (n: int)
```
Writes rune into buffer\. Returns written byte count\. Never throws an error\.

### Grow
```jule
fn Grow(mut *self, n: int)
```
Grows b&#39;s capacity, if necessary, to guarantee space for another n bytes\. After Grow\(n\), at least n bytes can be written to b without another allocation\. If n is negative, panics\.

### String
```jule
fn String(*self): string
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

### Async
```jule
fn Async(mut &self): asyncBuilder
```
Returns async wrapper for the Builder\. Useful to satisfy behavior implemented \`io\` traits\.

## Reader
```jule
struct Reader {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements the io::Reader, io::ReaderAt, io::ByteReader, io::RuneReader, io::Seeker, and io::WriterTo traits by reading from a string\. The zero value for Reader operates like a Reader of an empty string\.

### New
```jule
fn New(s: string): &Reader
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
Implements behavior the io::Reader trait\.

### ReadAt
```jule
fn ReadAt(*self, mut b: []byte, off: i64)!: (n: int)
```
Implements behavior the io::ReaderAt trait\.

### ReadByte
```jule
fn ReadByte(mut *self)!: (byte, int)
```
Implements behavior the io::ByteReader trait\.

### UnreadByte
```jule
fn UnreadByte(*self)!
```
Implements behavior the io::ByteScanner trait\.

### ReadRune
```jule
fn ReadRune(*self)!: (ch: rune, size: int)
```
Implements behavior the io::RuneReader trait\.

### UnreadRune
```jule
fn UnreadRune(*self)!
```
Implements behavior the io::RuneScanner trait\.

### Seek
```jule
fn Seek(*self, offset: i64, whence: int)!: i64
```
Implements behavior of the io::Seeker trait\.

### WriteTo
```jule
async fn WriteTo(*self, mut w: io::Writer)!: (n: i64)
```
Implements behavior the io::WriterTo trait\.

### Reset
```jule
fn Reset(mut *self, s: string)
```
Resets the Reader to be reading from s\.

### Async
```jule
fn Async(mut &self): asyncReader
```
Returns async wrapper for the Reader\. Useful to satisfy behavior implemented \`io\` traits\.

## Replacer
```jule
struct Replacer {
	// NOTE: contains filtered hidden or unexported fields
}
```
Replaces a list of strings with replacements\. It is more efficient than Replace function for multiple replacements on one string\. It is safe for concurrent use by multiple coroutines\.

### New
```jule
fn New(oldnew: ...string): &Replacer
```
Returns a new \[Replacer\] from a list of old, new string pairs\. Replacements are performed in the order they appear in the target string, without overlapping matches\. The old string comparisons are done in argument order\.

Panics if given an odd number of arguments\.

### Replace
```jule
fn Replace(&self, s: string): string
```
Returns a copy of s with all replacements performed\.

### WriteString
```jule
async fn WriteString(&self, mut w: io::Writer, s: string)!: (n: int)
```
Writes s to w with all replacements performed\.