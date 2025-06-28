# std/slices

## Index

[fn Equal\[S: \[\]E, E: comparable\]\(s1: S, s2: S\): bool](#equal)\
[fn Index\[S: \[\]E, E: comparable\]\(s: S, e: E\): int](#index)\
[fn IndexLast\[S: \[\]E, E: comparable\]\(s: S, e: E\): int](#indexlast)\
[fn Contains\[S: \[\]E, E: comparable\]\(s: S, e: E\): bool](#contains)\
[fn Count\[S: \[\]E, E: comparable\]\(s: S, e: E\): \(n: int\)](#count)\
[fn Replace\[S: \[\]E, E: comparable\]\(mut s: S, old: E, mut new: E\): \(n: int\)](#replace)\
[fn Reverse\[S: \[\]E, E\]\(mut s: S\)](#reverse)\
[fn Sort\[S: \[\]E, E: ordered\]\(mut s: S\)](#sort)\
[fn IsSorted\[S: \[\]E, E: ordered\]\(mut s: S\): bool](#issorted)\
[fn SortFunc\[S: \[\]E, E\]\(mut s: S, cmp: fn\(a: E, b: E\): int\)](#sortfunc)\
[fn Insert\[S: \[\]E, E\]\(mut s: S, i: int, mut v: \.\.\.E\): S](#insert)



## Equal
```jule
fn Equal[S: []E, E: comparable](s1: S, s2: S): bool
```
Reports whether slices are the same length and contains same elements\. The nil slices considered as zero\-length slices\. The floating\-point NaNs are not considered equal\.

## Index
```jule
fn Index[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns \-1 if not exist any match\. Starts searching at left of slice to right\.

## IndexLast
```jule
fn IndexLast[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns \-1 if not exist any match\. Starts searching at right of slice to left\.

## Contains
```jule
fn Contains[S: []E, E: comparable](s: S, e: E): bool
```
Reports whether slice includes e\.

## Count
```jule
fn Count[S: []E, E: comparable](s: S, e: E): (n: int)
```
Counts the number of matched elements with e in s\.

## Replace
```jule
fn Replace[S: []E, E: comparable](mut s: S, old: E, mut new: E): (n: int)
```
Replaces matched slice elements with old to new\. Returns count of replacements\.

## Reverse
```jule
fn Reverse[S: []E, E](mut s: S)
```
Reverses elements of the slice\.

## Sort
```jule
fn Sort[S: []E, E: ordered](mut s: S)
```
Sorts a slice of any ordered type in ascending order\. When sorting floating\-point numbers, NaNs are ordered before other values\.

## IsSorted
```jule
fn IsSorted[S: []E, E: ordered](mut s: S): bool
```
Reports whether x is sorted in ascending order\.

## SortFunc
```jule
fn SortFunc[S: []E, E](mut s: S, cmp: fn(a: E, b: E): int)
```
Sorts the slice s in ascending order as determined by the cmp function\. This sort is not guaranteed to be stable\. cmp\(a, b\) should return a negative number when a &lt; b, a positive number when a &gt; b and zero when a == b\.

SortFunc requires that cmp is a strict weak ordering\. See https://en\.wikipedia\.org/wiki/Weak\_ordering\#Strict\_weak\_orderings\.

## Insert
```jule
fn Insert[S: []E, E](mut s: S, i: int, mut v: ...E): S
```
Inserts the values v\.\.\. into s at index i, returning the modified slice\. The elements at s\[i:\] are shifted up to make room\. In the returned slice r, r\[i\] == v\[0\], and, if i &lt; len\(s\), r\[i\+len\(v\)\] == value originally at r\[i\]\. Insert panics if i &gt; len\(s\)\. This function is O\(len\(s\) \+ len\(v\)\)\.