# Any

The any type is a built-in type and is represented by the `any` keyword. It can be hold any data type and might be `nil`. Because its type is ambiguous at comptime, it can accept assignments from different types and, once assigned, can be reassigned with a different type.

It only supports equals (`==`) and not equals (`!=`) operators. 

`x == nil`: true if `any` is `nil`, not checks whether data is `nil`\
`x == y`: true if x and y is `nil`\
`x == y`: true if x and y has same data type and returns true of equals operator of data type for two value

Supports casting to any type.
You can get type-safe value of `any` with casting.
For example:
```jule
let myAny: any = 10
let x = (int)(myAny)
```

`any` type protects itself against mutability if necessary.
For example, you have slice value holds by any-typed variable.
And your variable is immutable.
So, if you cast your value to slice for assign to mutable variable, you will get error.
Because of slice is mutable type, so it's breaking immutability.

## Technical Details

The Any type always stores its data on the heap and is guaranteed to be released by the GC. Since the type is ambiguous, it has some additional costs on top of memory.

At runtime, an `any` stores and uses 2 different data;

- **Allocation**\
Allocation is a pointer to the data itself that the `any` stores. Managed by GC. The current implementation handles this well. If a pointer that is already traced by the GC is passed to the `any`, for example a smart pointer, the `any` uses it by directly referencing that smart pointer rather than making a new allocation. This helps reduce memory allocations and increases efficiency.
- **Type Pointer**\
An `any` maintains a general pointer and this pointer is not traced by the GC because it is guaranteed to always will point to static memory that will be available for the lifetime of the program. This pointer points directly to the type handler structure automatically created by the compiler.\
\
The handler structure includes the deallocator function required for the type. The deallocator function is the first field of the structure. Also contains 2 function pointer for string conversion and comparison functions for stored type.