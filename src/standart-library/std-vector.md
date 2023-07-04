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
Uses capacity for performance. Grows capacity if necessary.\
But always allocates more for future pushes.

Does not deallocates itself.\
Use the dealloc() method for deallocate.

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

`fn dealloc(mut self)`\
Deallocates heap.

`fn push(mut self, mut items: ...T)`\
Push items.

`fn push_front(mut self, mut items: ...T)`\
Push items to front of heap. 