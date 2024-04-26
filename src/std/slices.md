# std::slices
## Functions
```jule
fn find[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns -1 if not exist any match. Starts searching at left of slice to right.

---

```jule
fn find_last[S: []E, E: comparable](s: S, e: E): int
```
Returns index of first matched element with specified element, returns -1 if not exist any match. Starts searching at right of slice to left.

---

```jule
fn contains[S: []E, E: comparable](s: S, e: E): bool
```
Reports whether slice includes e.

---

```jule
fn count[S: []E, E: comparable](s: S, e: E): (n: int)
```
Counts the number of matched elements with e in s.

---

```jule
fn replace[S: []E, E: comparable](mut s: S, old: E, mut new: E): (n: int)
```
Replaces matched slice elements with old to new.\
Returns count of replacements.

---

```jule
fn reverse[S: []E, E](mut s: S)
```
Reverses elements of the slice.
