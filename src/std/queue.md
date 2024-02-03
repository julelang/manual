# std::queue

## Structs
```jule
struct Queue[T]
```
FIFO data structure which is commonly called as queue.

Deallocates itself when destroyed.

Queues aren't use shared allocation between themselves.
Allocates new space and copies (not deep copy) items into space.

::: info
**Implemented Patterns**
- **Destructor method pattern**: Deallocate heap.
:::

**Methods:**

`static fn new(cap: int): Queue[T]`\
Returns new queue instance with capacity.

`fn fit(mut self)`\
Set capacity to length.
Removes additional capacity that waiting to use.
Allocates new memory to cut additional capacity.

`fn len(self): int`\
Returns length of queue.
Another meaning is count of elements.

`fn cap(self): int`\
Returns capacity of queue.
Another meaning is additional redy-to-use allocation size.

`fn empty(self): bool`\
Reports whether queue is empty.

`fn clear(mut self)`\
Removes all elements.
Does not deallocates buffer, keeps capacity.

`fn push(mut self, mut t: T)`\
Pushes element to rear of the queue.

`fn pop(mut self): T`\
Returns element front of the queue, then removes front element. Panics if queue is empty.

`fn front(mut self): T`\
Returns front element of the queue.
Panics if queue is empty.

`fn slice(mut self): []T`\
Returns slice that contains elements of queue.
Slice is not mutable reference to internal buffer, but can effect internal buffer if T is mutable type.
Appends elements in front-to-rear order.
