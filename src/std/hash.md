# std::hash

## Traits

```jule
trait Hash {
    // Implements same mehod as io::Writer trait.
    // But it will not throws any exceptional.
    fn Write(mut self, b: []byte)!: (n: int)

    // Appends the current hash to b and returns the resulting slice.
    // It does not change the underlying hash state.
    fn Sum(self, mut b: []byte): []byte

    // Resets the Hash to its initial state.
    fn Reset(mut self)

    // Returns the number of bytes Sum will return.
    fn Size(self): int

    // Returns the hash's underlying block size.
    // The Write method must be able to accept any amount
    // of data, but it may operate more efficiently if all writes
    // are a multiple of the block size.
    fn BlockSize(self): int
}
```
The common trait implemented by all hash functions.

---

```jule
trait Hash32 {
        // Implements same mehod as io::Writer trait.
    // But it will not throws any exceptional.
    fn Write(mut self, b: []byte)!: (n: int)

    // Appends the current hash to b and returns the resulting slice.
    // It does not change the underlying hash state.
    fn Sum(self, mut b: []byte): []byte

    // Resets the Hash to its initial state.
    fn Reset(mut self)

    // Returns the number of bytes Sum will return.
    fn Size(self): int

    // Returns the hash's underlying block size.
    // The Write method must be able to accept any amount
    // of data, but it may operate more efficiently if all writes
    // are a multiple of the block size.
    fn BlockSize(self): int

    fn Sum32(self): u32
}
```
Common trait implemented by all 32-bit hash functions.

---

```jule
// Common trait implemented by all 64-bit hash functions.
trait Hash64 {
        // Implements same mehod as io::Writer trait.
    // But it will not throws any exceptional.
    fn Write(mut self, b: []byte)!: (n: int)

    // Appends the current hash to b and returns the resulting slice.
    // It does not change the underlying hash state.
    fn Sum(self, mut b: []byte): []byte

    // Resets the Hash to its initial state.
    fn Reset(mut self)

    // Returns the number of bytes Sum will return.
    fn Size(self): int

    // Returns the hash's underlying block size.
    // The Write method must be able to accept any amount
    // of data, but it may operate more efficiently if all writes
    // are a multiple of the block size.
    fn BlockSize(self): int

    fn Sum64(self): u64
}
```