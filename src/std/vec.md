# std::vec

## Structs
```jule
struct Vec[T]
```
Wrapper for dynamic array.\
Uses capacity for performanc\e.\
Grows capacity if necessary.\
But always allocates more for future \pushes.\
The elements are stored contiguously.

Deallocates itself when destroyed.

Vectors aren't use shared allocation between themselves.\
Allocates new space and copies (not deep copy) items into space.

::: info
**Implemented Patterns**
- **Destructor method pattern**: Deallocate heap.
:::

**Methods:**

`static fn New(cap: int): Vec[T]` \
Allocate new vector with capacity. 

`fn Fit(mut self)`\
Set capacity to length. Removes additional capacity that waiting to use. Allocates new memory to cut additional capacity.

`fn Len(self): int`\
Returns length.

`fn Cap(self): int`\
Returns capacity.

`fn SetLen(mut self, n: int)`\
Sets length.\
Sets length to zero if n < 0.\
Don't set length if n >= length of vector.

`fn At(mut self, i: int): T`\
Returns item by index.

`fn Set(mut self, i: int, mut item: T)`\
Set element by index.

`fn Clear(mut self)`
Removes all elements.
Does not deallocates buffer, keeps capacity.

`fn Dealloc(mut self)`\
Deallocates heap.

`fn Push(mut self, mut item: T)`\
Push item to end of heap.

`fn Push(mut self, mut items: ...T)`\
Push items to end of heap.

`fn PushFront(mut self, mut item: T)`\
Push item to front of heap.

`fn Merge(mut self, mut vec: Vec[T])`\
Merge items to end of heap.

`fn MergeFront(mut self, mut vec: Vec[T])`\
Merge items to front of heap.

`fn RemoveRange(mut self, start: int, n: int)`\
Remove range from heap.

`fn Insert(mut self, i: int, mut item: T)`\
Insert item by index.

`fn Slice(mut self, start: int, end: int): Vec[T]`\
Slice between indexes except end position. Not clones internal buffer, so slice vector can effect to internal buffer if type is mutable.