# Any

The `any` type is a built-in type and is represented by the `any` keyword. It can hold any data type and might be `nil`. Because its type is ambiguous at comptime, it can accept assignments from different types and, once assigned, can be reassigned with a different type.

It only supports equals (`==`) and not equals (`!=`) operators. Panics if the type is incomparable.

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
For example, you have a slice value held by any-typed variable.
And your variable is immutable.
So, if you cast your value to slice for assignment to a mutable variable, you will get an error.
Because a slice is a mutable type, it's breaking immutability.