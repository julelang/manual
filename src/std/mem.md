# std::mem
## Functions
```jule
fn size_of(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given expression, uses type of expression.

---

```jule
fn align_of(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is either complete object type. If given expression, uses type of expression. 

## Structures

```jule
struct Heap[T]
```
Wrapper for heap allocation. Should be freed, occurs memory leak if did not.

**Methods:**

`static fn new(): &Heap[T]`\
Allocates new `T` on heap, and returns `&Heap[T]` instance that points relevant allocation. Returns nil reference if allocation failed.

---

`fn addr(self): uintptr`\
Returns address of allocation. Returns 0 if internal pointer is nil.

---

`fn free(mut self)`\
Frees allocation and sets address as 0 (aka nil).

---

`fn get(mut self): T`\
Dereferences and returns value of internal pointer. Panics if internal pointer is nil.

---

`fn set(mut self, mut val: T)`\
Sets value of internal pointer. Panics if internal pointer is nil.

