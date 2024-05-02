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

`static fn New(cap: int): Stack[T]`\
Returns new stack instance with capacity.

`fn Fit(mut self)`\
Set capacity to length.
Removes additional capacity that waiting to use.
Allocates new memory to cut additional capacity.

`fn Len(self): int`\
Returns length of stack.
Another meaning is count of elements.

`fn Cap(self): int`\
Returns capacity of stack.
Another meaning is additional redy-to-use allocation size.

`fn Empty(self): bool`\
Reports whether stack is empty.

`fn Clear(mut self)`\
Removes all elements.
Does not deallocates buffer, keeps capacity.

`fn Push(mut self, mut t: T)`\
Pushes element to top of the stack.

`fn Pop(mut self): T`\
Returns top element of stack, then removes top element.
Panics if stack is empty.

`fn Top(mut self): T`\
Returns top element of stack.
Panics if stack is empty.

`fn Slice(mut self): []T`\
Returns slice that contains elements of stack. Slice is not mutable reference to internal buffer, but can effect internal buffer if T is mutable type. Appends elements in top-to-bottom order.