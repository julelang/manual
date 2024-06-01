# std:\:hash\::adler32

## Structs

```jule
struct Adler32
```

::: info
**Implemented Traits**
- hash::Hash
- hash::Hash32
- io::Writer
:::

**Methods**

`static fn New(): hash::Hash32`\
Returns a new `hash::Hash32` computing the Adler-32 checksum. Its Sum method will lay the value out in big-endian byte order.

`static fn Checksum(data: []byte): u32`\
Returns the Adler-32 checksum of data.

`fn Reset(mut self)`

`fn Size(self)`

`fn BlockSize(self)`

`fn Sum(self, mut dest: []byte): []byte`

`fn Sum32(self): u32`

`fn Write(mut self, p: []byte)!: (n: int)`
