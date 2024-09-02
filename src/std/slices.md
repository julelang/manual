# std::slices
## Functions
```jule
fn Sort[S: []E, E: ordered](mut s: S)
```
Sorts a slice of any ordered type in ascending order. When sorting floating-point numbers, NaNs are ordered before other values.

---

```jule
fn SortFunc[S: []E, E](mut s: S, cmp: fn(a: E, b: E): int)
```
Sorts the slice s in ascending order as determined by the `cmp`
function. This sort is not guaranteed to be stable. `cmp(a, b)` should return a negative number when `a < b`, a positive number when `a > b` and zero when `a == b`.

`SortFunc` requires that `cmp` is a [strict weak ordering](https://en.wikipedia.org/wiki/Weak_ordering#Strict_weak_orderings).

---

```jule
fn IsSorted[S: []E, E: ordered](mut s: S): bool
```
Reports whether x is sorted in ascending order.

---

```jule
fn Equal[S: []E, E: comparable](s1: S, s2: S): bool
```
Reports whether slices are the same length and contains same elements. The nil slices considered as zero-length slices. The floating-point NaNs are not considered equal.

---

```jule
fn Find[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn FindLast[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn Contains[S: []E, E: comparable](s: S, e: E): bool
```
Reports whether slice includes e.

---

```jule
fn Count[S: []E, E: comparable](s: S, e: E): (n: int)
```
Counts the number of matched elements with e in s.

---

```jule
fn Replace[S: []E, E: comparable](mut s: S, old: E, mut new: E): (n: int)
```
Replaces matched slice elements with old to new.\
Returns count of replacements.

---

```jule
fn Reverse[S: []E, E](mut s: S)
```
Reverses elements of the slice.