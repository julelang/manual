# std::maps

## Functions

```jule
fn Keys[M: map[K]V, K, V](mut m: M): []K
```
Returns all keys in a slice of map. Returns nil if `m == nil || len(m) == 0`.

---

```jule
fn Values[M: map[K]V, K, V](mut m: M): []V
```
Returns all values in a slice of map. Returns nil if `m == nil || len(m) == 0`.
