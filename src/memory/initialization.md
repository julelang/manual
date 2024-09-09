# Initialization

Jule automatically initializes memory for memory safety. If memory is not initialized with a value, it initializes it with the default value of the type to eliminate the risk of uninitialized memory. The default value is determined by the compiler and is constant for each type.

## Slices

When slices are allocated with `make` call, all allocated space is automatically initialized with the default value.

Initialization is based on capacity, not length, as slice elements must be ready including capacity. That is, the entire capacity of the allocated slice will be initialized with the default value.

## Arrays

Since arrays are fixed-length structures, all their elements are initialized with the default value according to their length. In the case of any literal, elements initialized with value are not initialized with default value. If a literal does not initialize all elements of the array, the remaining elements are automatically initialized with the default value.

## Structs

Default initialization of structures includes initializing all fields to the default value. In the case of a struct literal, unassigned fields are initialized with the default value.

A struct field can have a special default initialization value. In this case, your compiler does not evaluate each expression once and cache it. The expression is like a template and is evaluated just-in-time for each default initialization.

For example, accordingly, if a function increases a static integer memory every time it is called, the relevant static variable is mutated as it will be called during each default initialization.

## Interoperability and Binded Types

Since the types cannot be known with certainty regarding interoperability, binded types are not treated like Jule types. Binded types are independent of default initialization rules, that is, they are not initialized automatically. When using interoperability, problems may occur due to uninitialized memory.