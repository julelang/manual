# std::vector
## Functions
```
fn new_vector[T](cap: int): Vector[T]
```
Allocate new vector. 

## Structs
```
struct Vector[T]
```
Wrapper for dynamic array.\
Uses capacity for performanc\e.\
Grows capacity if necessary.\
But always allocates more for future \pushes.\
The elements are stored contiguously.

Deallocates itself when destroyed.

Vectors aren't use shared allocation between them.\
Allocates new space and copies (not deep copy) items into space.

**Methods:**

`fn len(self): int`\
Returns length.

`fn cap(self): int`\
Returns capacity.

`set_len(mut self, n: int)`\
Sets length.\
Sets length to zero if n < 0.\
Don't set length if n >= length of vector.

`fn at(mut self, i: int): T`\
Returns item by index.

`fn set(mut self, i: int, mut item: T)`\
Set element by index.

`fn dealloc(mut self)`\
Deallocates heap.

`fn push(mut self, mut item: T)`\
Push item to end of heap.

`fn push(mut self, mut items: ...T)`\
Push items to end of heap.

`fn push_front(mut self, mut item: T)`\
Push item to front of heap.

`fn merge(mut self, mut vec: Vector[T])`\
Merge items to end of heap.

`fn merge_front(mut self, mut vec: Vector[T])`\
Merge items to front of heap.

`fn remove_range(mut self, start: int, n: int)`\
Remove range from heap.

`fn insert(mut self, i: int, mut item: T)`\
Insert item by index.

`fn insert(mut self, start: int, end: int): Vector[T]`\
Slice between indexes except end position.
