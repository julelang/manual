# std/slices

## Index

[fn Insert\[S: \~\[\]E, E\]\(mut s: S, i: int, mut v: \.\.\.E\): S](#insert)\
[fn Equal\[S: \~\[\]E, E: comparable\]\(s1: S, s2: S\): bool](#equal)\
[fn Index\[S: \~\[\]E, E: comparable\]\(s: S, e: E\): int](#index)\
[fn IndexLast\[S: \~\[\]E, E: comparable\]\(s: S, e: E\): int](#indexlast)\
[fn Contains\[S: \~\[\]E, E: comparable\]\(s: S, e: E\): bool](#contains)\
[fn Count\[S: \~\[\]E, E: comparable\]\(s: S, e: E\): \(n: int\)](#count)\
[fn Replace\[S: \~\[\]E, E: comparable\]\(mut s: S, old: E, mut new: E\): \(n: int\)](#replace)\
[fn Reverse\[S: \~\[\]E, E\]\(mut s: S\)](#reverse)\
[fn Grow\[S: \~\[\]E, E\]\(mut s: S, mut n: int\): S](#grow)\
[fn Sort\[S: \~\[\]E, E: ordered\]\(mut s: S\)](#sort)\
[fn SortFunc\[S: \~\[\]E, E\]\(mut x: S, cmp: fn\(a: E, b: E\): int\)](#sortfunc)\
[fn SortStableFunc\[S: \~\[\]E, E\]\(mut x: S, cmp: fn\(a: E, b: E\): int\)](#sortstablefunc)\
[fn IsSorted\[S: \~\[\]E, E: ordered\]\(mut s: S\): bool](#issorted)



## Insert
```jule
fn Insert[S: ~[]E, E](mut s: S, i: int, mut v: ...E): S
```
Inserts the values v\.\.\. into s at index i, returning the modified slice\. The elements at s\[i:\] are shifted up to make room\. In the returned slice r, r\[i\] == v\[0\], and, if i &lt; len\(s\), r\[i\+len\(v\)\] == value originally at r\[i\]\. Insert panics if i &gt; len\(s\)\. This function is O\(len\(s\) \+ len\(v\)\)\.

## Equal
```jule
fn Equal[S: ~[]E, E: comparable](s1: S, s2: S): bool
```
Reports whether slices are the same length and contains same elements\. The nil slices considered as zero\-length slices\. The floating\-point NaNs are not considered equal\.

## Index
```jule
fn Index[S: ~[]E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns \-1 if not exist any match\. Starts searching at left of slice to right\.

## IndexLast
```jule
fn IndexLast[S: ~[]E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns \-1 if not exist any match\. Starts searching at right of slice to left\.

## Contains
```jule
fn Contains[S: ~[]E, E: comparable](s: S, e: E): bool
```
Reports whether slice includes e\.

## Count
```jule
fn Count[S: ~[]E, E: comparable](s: S, e: E): (n: int)
```
Counts the number of matched elements with e in s\.

## Replace
```jule
fn Replace[S: ~[]E, E: comparable](mut s: S, old: E, mut new: E): (n: int)
```
Replaces matched slice elements with old to new\. Returns count of replacements\.

## Reverse
```jule
fn Reverse[S: ~[]E, E](mut s: S)
```
Reverses elements of the slice\.

## Grow
```jule
fn Grow[S: ~[]E, E](mut s: S, mut n: int): S
```
Increases the slice&#39;s capacity, if necessary, to guarantee space for another n elements\. After Grow\(n\), at least n elements can be appended to the slice without another allocation\. If n is negative or too large to allocate the memory, Grow panics\.

## Sort
```jule
fn Sort[S: ~[]E, E: ordered](mut s: S)
```
Sorts a slice of any ordered type in ascending order\. When sorting floating\-point numbers, NaNs are ordered before other values\.

## SortFunc
```jule
fn SortFunc[S: ~[]E, E](mut x: S, cmp: fn(a: E, b: E): int)
```
Sorts the slice x in ascending order as determined by the cmp function\. This sort is not guaranteed to be stable\. cmp\(a, b\) should return a negative number when a &lt; b, a positive number when a &gt; b and zero when a == b or a and b are incomparable in the sense of a strict weak ordering\.

Ir requires that cmp is a strict weak ordering\. See https://en\.wikipedia\.org/wiki/Weak\_ordering\#Strict\_weak\_orderings\. The function should return 0 for incomparable items\.

## SortStableFunc
```jule
fn SortStableFunc[S: ~[]E, E](mut x: S, cmp: fn(a: E, b: E): int)
```
Sorts the slice x while keeping the original order of equal elements, using cmp to compare elements in the same way as \[SortFunc\]\.

## IsSorted
```jule
fn IsSorted[S: ~[]E, E: ordered](mut s: S): bool
```
Reports whether x is sorted in ascending order\.