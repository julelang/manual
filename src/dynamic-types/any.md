# Any

The `any` type is a built-in type and is represented by the `any` keyword. It can hold any data type and might be `nil`. Because its type is ambiguous at comptime, it can accept assignments from different types and, once assigned, can be reassigned with a different type.

It only supports equals (`==`) and not equals (`!=`) operators. Panics if the type is incomparable.

`x == nil`: true if `any` is `nil`, not checks whether data is `nil`\
`x == y`: true if x and y is `nil`\
`x == y`: true if x and y has same data type and returns true of equals operator of data type for two value