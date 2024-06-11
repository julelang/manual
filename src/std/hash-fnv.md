# std:\:hash\::fnv

## Structs

```jule
struct Fnv
```
Static method wrapper for FNV-1 algorithms.

**Methods**

`static fn New32(): hash::Hash32`\
Returns a new 32-bit FNV-1 [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.

`static fn New64(): hash::Hash64`\
Returns a new 64-bit FNV-1 [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.

`static fn New128(): hash::Hash`\
Returns a new 128-bit FNV-1 [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.

`static fn New32a(): hash::Hash32`\
Returns a new 32-bit FNV-1a [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.

`static fn New64a(): hash::Hash64`\
Returns a new 64-bit FNV-1a [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.

`static fn New128a(): hash::Hash`\
Returns a new 128-bit FNV-1a [`hash::Hash`]. Its Sum method will lay the value out in big-endian byte order.