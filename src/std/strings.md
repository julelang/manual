# std/strings

## Functions

```jule
fn Compare(a: str, b: str): int
```
Returns an integer comparing two strings lexicographically. The result will be 0 if a == b, -1 if a < b, and +1 if a > b.

Use compare when you need to perform a three-way comparison (with \[slices::SortFunc\], for example). It is usually clearer and always faster to use the built-in string comparison operators ==, <, >, and so on.

## Structs

```jule
struct Builder
```
String builder for efficient concatenation.
Optimized for single string building not for repeated use.

::: info
**Implemented Traits**
- `io::Writer`
- `io::ByteWriter`
- `io::RuneWriter`
- `io::StrWriter`
:::

**Methods:**

`static fn New(cap: int): Builder`\
Returns new string builder with capacity.

`fn Write(mut self, b: []byte)!: (n: int)`\
Writes bytes to buffer. Never throws an exceptional.

`fn WriteStr(mut self, s: str)!: (n: int)`\
Writes bytes to buffer. Never throws an exceptional.

`fn WriteByte(mut self, b: byte)!`\
Writes byte to buffer. Never throws an exceptional.

`fn WriteRune(mut self, r: rune)!: (n: int)`\
Writes rune into buffer. Returns written byte count. Never throws an exceptional.

`fn Str(mut self): str`\
Returns as string, then calls the `Clear` method.

`fn Clear(mut self)`\
Clears buffer.
After calling this function, write calls will allocate new buffer.

`fn Len(self): int`\
Returns length of buffer.

`fn Cap(self): int`\
Returns capacity of buffer.

`unsafe fn Buf(mut self): []byte`\
Returns mutable buffer for low-level interactions.

`unsafe fn SetBuf(mut self, mut buf: []byte)`\
Sets mutable internal buffer for low-level interactions.