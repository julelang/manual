# std::mem
## Functions
```jule
fn SizeOf(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given expression, uses type of expression.

---

```jule
fn AlignOf(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is either complete object type. If given expression, uses type of expression. 

---

```jule
fn Free(h: T)
```
Frees memory. If reference counting is enabled, just countdowns reference and sets to nil. If reference counting is disabled, frees memory allocation immediately. This is migh be unsafe, because your another shared pointers will have invalid memory address after freed. You can use this function for only rc-performed types.

## Structures

```jule
struct Heap[T]
```
Wrapper for heap allocation. Should be freed, occurs memory leak if did not.

**Methods:**

`static fn New(): &Heap[T]`\
Allocates new `T` on heap, and returns `&Heap[T]` instance that points relevant allocation. Returns nil reference if allocation failed.

---

`fn Addr(self): uintptr`\
Returns address of allocation. Returns 0 if internal pointer is nil.

---

`fn Free(mut self)`\
Frees allocation and sets address as 0 (aka nil).

---

`fn Get(mut self): T`\
Dereferences and returns value of internal pointer. Panics if internal pointer is nil.

---

`fn Set(mut self, mut val: T)`\
Sets value of internal pointer. Panics if internal pointer is nil.