# std/maps

## Index

[fn Equal\[M: map\[K\]V, K: comparable, V: comparable\]\(m1: M, m2: M\): bool](#equal)\
[fn Keys\[M: map\[K\]V, K, V\]\(mut m: M\): \[\]K](#keys)\
[fn Values\[M: map\[K\]V, K, V\]\(mut m: M\): \[\]V](#values)



## Equal
```jule
fn Equal[M: map[K]V, K: comparable, V: comparable](m1: M, m2: M): bool
```
Reports whether maps are the same length and contains same keys and values\. The nil maps considered as zero\-length map\. The floating\-point NaNs are not considered equal\.

## Keys
```jule
fn Keys[M: map[K]V, K, V](mut m: M): []K
```
Returns all keys in a slice of map\. Returns nil if m == nil \|\| len\(m\) == 0\.

## Values
```jule
fn Values[M: map[K]V, K, V](mut m: M): []V
```
Returns all values in a slice of map\. Returns nil if m == nil \|\| len\(m\) == 0\.