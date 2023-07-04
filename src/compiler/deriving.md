# Deriving
Deriving is a set of behaviors or extensions that the compiler must implement for types. These are implemented by the compiler, the developer should only request them to be implemented.

## Derive: Clone
`Clone` adds support to structs for the built-in `clone` function.
The compiler adds an algorithm that can deep copy every field of the structure at runtime.

\
For example:
```
//jule:derive Clone
struct SliceWrapper {
    buffer: []int
}
```
This may not always be possible. If the structure defines fields with a data type that does not support deep copy, the `Clone` derive will fail. 
::: tip
See more information about [clonning supported types](/memory/immutability).
:::