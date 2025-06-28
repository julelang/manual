# std/bytes

Package `std/bytes` implements functions for the manipulation of byte slices. It is analogous to the facilities of the `std/strings` package. But optimized for byte slices, may provide more efficient functions. If you have byte slice form of strings, this package is the best option for most cases.

## Index

[fn Equal\(a: \[\]byte, b: \[\]byte\): bool](#equal)\
[fn Compare\(a: \[\]byte, b: \[\]byte\): int](#compare)\
[fn Count\(s: \[\]byte, sep: \[\]byte\): int](#count)\
[fn Contains\(b: \[\]byte, subslice: \[\]byte\): bool](#contains)\
[fn ContainsAny\(b: \[\]byte, chars: str\): bool](#containsany)\
[fn ContainsRune\(b: \[\]byte, r: rune\): bool](#containsrune)\
[fn ContainsFunc\(b: \[\]byte, f: fn\(rune\): bool\): bool](#containsfunc)\
[fn IndexByte\(b: \[\]byte, c: byte\): int](#indexbyte)\
[fn LastIndex\(s: \[\]byte, sep: \[\]byte\): int](#lastindex)\
[fn LastIndexByte\(s: \[\]byte, c: byte\): int](#lastindexbyte)\
[fn IndexRune\(s: \[\]byte, r: rune\): int](#indexrune)\
[fn IndexAny\(s: \[\]byte, chars: str\): int](#indexany)\
[fn LastIndexAny\(s: \[\]byte, chars: str\): int](#lastindexany)\
[fn SplitN\(mut s: \[\]byte, sep: \[\]byte, n: int\): \[\]\[\]byte](#splitn)\
[fn SplitAfterN\(mut s: \[\]byte, sep: \[\]byte, n: int\): \[\]\[\]byte](#splitaftern)\
[fn Split\(mut s: \[\]byte, sep: \[\]byte\): \[\]\[\]byte](#split)\
[fn SplitAfter\(mut s: \[\]byte, sep: \[\]byte\): \[\]\[\]byte](#splitafter)\
[fn Join\(s: \[\]\[\]byte, sep: \[\]byte\): \[\]byte](#join)\
[fn HasPrefix\(s: \[\]byte, prefix: \[\]byte\): bool](#hasprefix)\
[fn HasSuffix\(s: \[\]byte, suffix: \[\]byte\): bool](#hassuffix)\
[fn Map\(mapping: fn\(rune\): rune, s: \[\]byte\): \[\]byte](#map)\
[fn Repeat\(b: \[\]byte, count: int\): \[\]byte](#repeat)\
[fn IndexFunc\(s: \[\]byte, f: fn\(rune\): bool\): int](#indexfunc)\
[fn LastIndexFunc\(s: \[\]byte, f: fn\(rune\): bool\): int](#lastindexfunc)\
[fn TrimLeftFunc\(mut s: \[\]byte, f: fn\(rune\): bool\): \[\]byte](#trimleftfunc)\
[fn TrimRight\(mut s: \[\]byte, cutset: str\): \[\]byte](#trimright)\
[fn TrimRightFunc\(mut s: \[\]byte, f: fn\(rune\): bool\): \[\]byte](#trimrightfunc)\
[fn TrimFunc\(mut s: \[\]byte, f: fn\(rune\): bool\): \[\]byte](#trimfunc)\
[fn TrimPrefix\(mut s: \[\]byte, prefix: \[\]byte\): \[\]byte](#trimprefix)\
[fn TrimSuffix\(mut s: \[\]byte, suffix: \[\]byte\): \[\]byte](#trimsuffix)\
[fn Trim\(mut s: \[\]byte, cutset: str\): \[\]byte](#trim)\
[fn TrimLeft\(mut s: \[\]byte, cutset: str\): \[\]byte](#trimleft)\
[fn TrimSpace\(mut s: \[\]byte\): \[\]byte](#trimspace)\
[fn Runes\(s: \[\]byte\): \[\]rune](#runes)\
[fn Replace\(s: \[\]byte, old: \[\]byte, new: \[\]byte, mut n: int\): \[\]byte](#replace)\
[fn ReplaceAll\(s: \[\]byte, old: \[\]byte, new: \[\]byte\): \[\]byte](#replaceall)\
[fn EqualFold\(s: \[\]byte, t: \[\]byte\): bool](#equalfold)\
[fn Index\(s: \[\]byte, sep: \[\]byte\): int](#index)\
[fn Cut\(mut s: \[\]byte, sep: \[\]byte\): \(before: \[\]byte, after: \[\]byte, found: bool\)](#cut)\
[fn Clone\(b: \[\]byte\): \[\]byte](#clone)\
[fn CutPrefix\(mut s: \[\]byte, prefix: \[\]byte\): \(after: \[\]byte, found: bool\)](#cutprefix)\
[fn CutSuffix\(mut s: \[\]byte, suffix: \[\]byte\): \(before: \[\]byte, found: bool\)](#cutsuffix)\
[fn ToUpper\(s: \[\]byte\): \[\]byte](#toupper)\
[fn ToLower\(s: \[\]byte\): \[\]byte](#tolower)



## Equal
```jule
fn Equal(a: []byte, b: []byte): bool
```
Reports whether a and b are the same length and contain the same bytes\. A nil argument is equivalent to an empty slice\.

## Compare
```jule
fn Compare(a: []byte, b: []byte): int
```
Returns an integer comparing two byte slices lexicographically\. The result will be 0 if a == b, \-1 if a &lt; b, and \+1 if a &gt; b\. A nil argument is equivalent to an empty slice\.

## Count
```jule
fn Count(s: []byte, sep: []byte): int
```
Counts the number of non\-overlapping instances of sep in s\. If sep is an empty slice, returns 1 \+ the number of UTF\-8\-encoded code points in s\.

## Contains
```jule
fn Contains(b: []byte, subslice: []byte): bool
```
Reports whether subslice is within b\.

## ContainsAny
```jule
fn ContainsAny(b: []byte, chars: str): bool
```
Reports whether any of the UTF\-8\-encoded code points in chars are within b\.

## ContainsRune
```jule
fn ContainsRune(b: []byte, r: rune): bool
```
Reports whether the rune is contained in the UTF\-8\-encoded byte slice b\.

## ContainsFunc
```jule
fn ContainsFunc(b: []byte, f: fn(rune): bool): bool
```
Reports whether any of the UTF\-8\-encoded code points r within b satisfy f\(r\)\.

## IndexByte
```jule
fn IndexByte(b: []byte, c: byte): int
```
Returns the index of the first instance of c in b, or \-1 if c is not present in b\.

## LastIndex
```jule
fn LastIndex(s: []byte, sep: []byte): int
```
Returns the index of the last instance of sep in s, or \-1 if sep is not present in s\.

## LastIndexByte
```jule
fn LastIndexByte(s: []byte, c: byte): int
```
Returns the index of the last instance of c in s, or \-1 if c is not present in s\.

## IndexRune
```jule
fn IndexRune(s: []byte, r: rune): int
```
Interprets s as a sequence of UTF\-8\-encoded code points\. It returns the byte index of the first occurrence in s of the given rune\. It returns \-1 if rune is not present in s\. If r is \[utf8::RuneError\], it returns the first instance of any invalid UTF\-8 byte sequence\.

## IndexAny
```jule
fn IndexAny(s: []byte, chars: str): int
```
Interprets s as a sequence of UTF\-8\-encoded Unicode code points\. It returns the byte index of the first occurrence in s of any of the Unicode code points in chars\. It returns \-1 if chars is empty or if there is no code point in common\.

## LastIndexAny
```jule
fn LastIndexAny(s: []byte, chars: str): int
```
Interprets s as a sequence of UTF\-8\-encoded Unicode code points\. It returns the byte index of the last occurrence in s of any of the Unicode code points in chars\. It returns \-1 if chars is empty or if there is no code point in common\.

## SplitN
```jule
fn SplitN(mut s: []byte, sep: []byte, n: int): [][]byte
```
Slices s into subslices separated by sep and returns a slice of the subslices between those separators\. If sep is empty, SplitN splits after each UTF\-8 sequence\. The count determines the number of subslices to return:<br>

- n &gt; 0: at most n subslices; the last subslice will be the unsplit remainder;
- n == 0: the result is nil \(zero subslices\);
- n &lt; 0: all subslices\.

To split around the first instance of a separator, see \[Cut\]\.

## SplitAfterN
```jule
fn SplitAfterN(mut s: []byte, sep: []byte, n: int): [][]byte
```
Slices s into subslices after each instance of sep and returns a slice of those subslices\. If sep is empty, SplitAfterN splits after each UTF\-8 sequence\. The count determines the number of subslices to return:<br>

- n &gt; 0: at most n subslices; the last subslice will be the unsplit remainder;
- n == 0: the result is nil \(zero subslices\);
- n &lt; 0: all subslices\.

## Split
```jule
fn Split(mut s: []byte, sep: []byte): [][]byte
```
Slices s into all subslices separated by sep and returns a slice of the subslices between those separators\. If sep is empty, Split splits after each UTF\-8 sequence\. It is equivalent to SplitN with a count of \-1\.

To split around the first instance of a separator, see \[Cut\]\.

## SplitAfter
```jule
fn SplitAfter(mut s: []byte, sep: []byte): [][]byte
```
Slices s into all subslices after each instance of sep and returns a slice of those subslices\. If sep is empty, SplitAfter splits after each UTF\-8 sequence\. It is equivalent to SplitAfterN with a count of \-1\.

## Join
```jule
fn Join(s: [][]byte, sep: []byte): []byte
```
Concatenates the elements of s to create a new byte slice\. The separator sep is placed between elements in the resulting slice\.

## HasPrefix
```jule
fn HasPrefix(s: []byte, prefix: []byte): bool
```
Reports whether the byte slice s begins with prefix\.

## HasSuffix
```jule
fn HasSuffix(s: []byte, suffix: []byte): bool
```
Reports whether the byte slice s ends with suffix\.

## Map
```jule
fn Map(mapping: fn(rune): rune, s: []byte): []byte
```
Returns a copy of the byte slice s with all its characters modified according to the mapping function\. If mapping returns a negative value, the character is dropped from the byte slice with no replacement\. The characters in s and the output are interpreted as UTF\-8\-encoded code points\.

## Repeat
```jule
fn Repeat(b: []byte, count: int): []byte
```
Returns a new byte slice consisting of count copies of b\.

It panics if count is negative or if the result of \(len\(b\) \* count\) overflows\.

## IndexFunc
```jule
fn IndexFunc(s: []byte, f: fn(rune): bool): int
```
Interprets s as a sequence of UTF\-8\-encoded code points\. It returns the byte index in s of the first Unicode code point satisfying f\(c\), or \-1 if none do\.

## LastIndexFunc
```jule
fn LastIndexFunc(s: []byte, f: fn(rune): bool): int
```
Interprets s as a sequence of UTF\-8\-encoded code points\. It returns the byte index in s of the last Unicode code point satisfying f\(c\), or \-1 if none do\.

## TrimLeftFunc
```jule
fn TrimLeftFunc(mut s: []byte, f: fn(rune): bool): []byte
```
Treats s as UTF\-8\-encoded bytes and returns a subslice of s by slicing off all leading UTF\-8\-encoded code points c that satisfy f\(c\)\.

## TrimRight
```jule
fn TrimRight(mut s: []byte, cutset: str): []byte
```
Returns a subslice of s by slicing off all trailing UTF\-8\-encoded code points that are contained in cutset\.

## TrimRightFunc
```jule
fn TrimRightFunc(mut s: []byte, f: fn(rune): bool): []byte
```
Returns a subslice of s by slicing off all trailing UTF\-8\-encoded code points c that satisfy f\(c\)\.

## TrimFunc
```jule
fn TrimFunc(mut s: []byte, f: fn(rune): bool): []byte
```
Returns a subslice of s by slicing off all leading and trailing UTF\-8\-encoded code points c that satisfy f\(c\)\.

## TrimPrefix
```jule
fn TrimPrefix(mut s: []byte, prefix: []byte): []byte
```
Returns s without the provided leading prefix string\. If s doesn&#39;t start with prefix, s is returned unchanged\.

## TrimSuffix
```jule
fn TrimSuffix(mut s: []byte, suffix: []byte): []byte
```
Returns s without the provided trailing suffix string\. If s doesn&#39;t end with suffix, s is returned unchanged\.

## Trim
```jule
fn Trim(mut s: []byte, cutset: str): []byte
```
Returns a subslice of s by slicing off all leading and trailing UTF\-8\-encoded code points contained in cutset\.

## TrimLeft
```jule
fn TrimLeft(mut s: []byte, cutset: str): []byte
```
Returns a subslice of s by slicing off all leading UTF\-8\-encoded code points contained in cutset\.

## TrimSpace
```jule
fn TrimSpace(mut s: []byte): []byte
```
Returns a subslice of s by slicing off all leading and trailing white space, as defined by Unicode\.

## Runes
```jule
fn Runes(s: []byte): []rune
```
Interprets s as a sequence of UTF\-8\-encoded code points\. It returns a slice of runes \(Unicode code points\) equivalent to s\.

## Replace
```jule
fn Replace(s: []byte, old: []byte, new: []byte, mut n: int): []byte
```
Returns a copy of the slice s with the first n non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the slice and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune slice\. If n &lt; 0, there is no limit on the number of replacements\.

## ReplaceAll
```jule
fn ReplaceAll(s: []byte, old: []byte, new: []byte): []byte
```
Returns a copy of the slice s with all non\-overlapping instances of old replaced by new\. If old is empty, it matches at the beginning of the slice and after each UTF\-8 sequence, yielding up to k\+1 replacements for a k\-rune slice\.

## EqualFold
```jule
fn EqualFold(s: []byte, t: []byte): bool
```
Reports whether s and t, interpreted as UTF\-8 strings, are equal under simple Unicode case\-folding, which is a more general form of case\-insensitivity\.

## Index
```jule
fn Index(s: []byte, sep: []byte): int
```
Returns the index of the first instance of sep in s, or \-1 if sep is not present in s\.

## Cut
```jule
fn Cut(mut s: []byte, sep: []byte): (before: []byte, after: []byte, found: bool)
```
Slices s around the first instance of sep, returning the text before and after sep\. The found result reports whether sep appears in s\. If sep does not appear in s, returns s, nil, false\.

Returns slices of the original slice s, not copies\.

## Clone
```jule
fn Clone(b: []byte): []byte
```
Returns a copy of b\[:len\(b\)\]\. The result may have additional unused capacity\. Clone\(nil\) returns nil\.

## CutPrefix
```jule
fn CutPrefix(mut s: []byte, prefix: []byte): (after: []byte, found: bool)
```
Returns s without the provided leading prefix byte slice and reports whether it found the prefix\. If s doesn&#39;t start with prefix, returns s, false\. If prefix is the empty byte slice, returns s, true\.

Returns slices of the original slice s, not copies\.

## CutSuffix
```jule
fn CutSuffix(mut s: []byte, suffix: []byte): (before: []byte, found: bool)
```
Returns s without the provided ending suffix byte slice and reports whether it found the suffix\. If s doesn&#39;t end with suffix, returns s, false\. If suffix is the empty byte slice, returns s, true\.

Returns slices of the original slice s, not copies\.

## ToUpper
```jule
fn ToUpper(s: []byte): []byte
```
Returns a copy of the byte slice s with all Unicode letters mapped to their upper case\.

## ToLower
```jule
fn ToLower(s: []byte): []byte
```
Returns a copy of the byte slice s with all Unicode letters mapped to their lower case\.