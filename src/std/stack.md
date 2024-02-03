# std::stack

## Structs
```jule
struct Stack[T]
```
LIFO data structure which is commonly called as stack.

Deallocates itself when destroyed.

Stacks aren't use shared allocation between themselves.
Allocates new space and copies (not deep copy) items into space.

::: info
**Implemented Patterns**
- **Destructor method pattern**: Deallocate heap.
:::

**Methods:**

`static fn new(cap: int): Stack[T]`\
Returns new stack instance with capacity.

`fn fit(mut self)`\
Set capacity to length.
Removes additional capacity that waiting to use.
Allocates new memory to cut additional capacity.

`fn len(self): int`\
Returns length of stack.
Another meaning is count of elements.

`fn cap(self): int`\
Returns capacity of stack.
Another meaning is additional redy-to-use allocation size.

`fn empty(self): bool`\
Reports whether stack is empty.

`fn clear(mut self)`\
Removes all elements.
Does not deallocates buffer, keeps capacity.

`fn push(mut self, mut t: T)`\
Pushes element to top of the stack.

`fn pop(mut self): T`\
Returns top element of stack, then removes top element.
Panics if stack is empty.

`fn top(mut self): T`\
Returns top element of stack.
Panics if stack is empty.

`fn slice(mut self): []T`\
Returns slice that contains elements of stack. Slice is not mutable reference to internal buffer, but can effect internal buffer if T is mutable type. Appends elements in top-to-bottom order.
