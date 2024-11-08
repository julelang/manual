# std/io

## Traits

```jule
trait Reader {
    fn Read(mut self, mut buf: []byte)!: (n: int)
}
```
Implements the basic Read method.

Reads up to `len(buf)` bytes into buf. It returns the number of bytes read `(0 <= n <= len(buf))`. Even if Read returns `n < len(buf)`, it may use all of buf as scratch space during the call. If some data is available but not `len(buf)` bytes, Read conventionally returns what is available instead of waiting for more.

If `len(buf) == 0`, Read should always return `n == 0`. Implementations of Read are should return zero byte count for EOF. If `len(buf) != 0` and EOF reached, should return zero byte count to represent EOF.

The Read method mutable because implementation may should do mutable operations, or this method may called needed from the mutable method, which is not cannot be internally mutable. Such a mutable behaviors should be documented by the implementation.

Implementations must not retain buf. Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait Writer {
    fn Write(mut self, buf: []byte)!: (n: int)
}
```
Implements the basic Write method.

Write writes `len(buf)` bytes from buf to the underlying data stream. It returns the number of bytes written from `buf (0 <= n <= len(buf))` and any error encountered that caused the write to stop early. Write must remain the slice data without any mutation after call.

Implementations must not retain buf. Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait StrWriter {
    fn WriteStr(mut self, s: str)!: (n: int)
}
```
Implements the basic WriteStr method.

The WriteStr method similar to `Writer.Write` method but takes string. Behavior should be same as the `Writer.Write` method.

Implementations must not retain s. Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait ByteReader {
    fn ReadByte(mut self)!: (byte, n: int)
}
```
Implements the basic ReadByte method.

It should read byte and return one for n without throwing exceptional if success. Is should return zero for n for EOF. If read failed, should throw exceptional.

The ReadByte method mutable because of same reasons of the `Writer` trait.

Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait ByteWriter {
    fn WriteByte(mut self, b: byte)!
}
```
Implements the basic WriteByte method.

It should write byte and return without throwing exceptional if success. If write failed, should throw exceptional.

Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait RuneReader {
    fn ReadRune(mut self)!: rune
}
```
Implements the basic ReadRune method.

It should read rune and return without throwing exceptional if success. If read failed, should throw exceptional.

The ReadRune method mutable because of same reasons of the `Writer` trait.

Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait RuneWriter {
    fn WriteRune(mut self, r: rune)!: (n: int)
}
```
Implements the basic WriteRune method.

It should write rune and return written count without throwing exceptional if success. If write failed, should throw exceptional.

The return count may be based on bytes or runes by implementation. For example, for bytes, it may return count of written bytes, or for runes returns one for a single rune. It should be documented by the implementation.

Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait Closer {
    fn Close(mut self)!
}
```
Implements the basic Close method.

The behavior of the Close method is not standardized. Specific implementations should document their own behavior. After first call the Close method behavior may be undefined, but exceptional throw recommended if any error should be occur.

The Close method mutable because of same reasons of the Writer trait.

Exceptionals are not standardized. Should be documented by implementations.

---

```jule
trait ReadCloser {
    Reader
    Closer
}
```
Inheritance group for the `Reader` and `Closer` traits.

---

```jule
trait WriteCloser {
    Writer
    Closer
}
```
Inheritance group for the `Writer` and `Closer` traits.

---

```jule
trait ReadWriter {
    Reader
    Writer
}
```
Inheritance group for the `Reader` and `Writer` traits.

---

```jule
trait Stream {
    Reader
    ReadCloser
    Writer
    WriteCloser
    ReadWriter
    Closer
}
```
Inheritance group for the `Reader`, `ReadCloser`, `Writer`, `WriteCloser`, `ReadWriter` and `Closer` traits.

## Structs

```jule
struct Scanner
```
Scanner for files or etc.
Scans bytes line-by-line.

**Methods:**

`static fn New(mut r: Reader): &Scanner`\
New `&Scanner` from `Reader`.

`static fn Newf(mut f: &os::File): &Scanner`\
New `&Scanner` from `&File`.
Uses `&FileStream` for `Reader` trait compatibility.

`fn Bytes(self): []byte`\
Returns bytes of recent scan.
Returned slice is mutable copy of buffer.
The next `Scan` call will write into same internal allocation.

`fn Text(self): str`\
Returns text from bytes of recent scan.

`fn Scan(self)!: bool`\
Scans line from handle via read method. Scans bytes until end of the line, line delimiter is not included. Reports whether readed byte into buffer. Forwards any exceptional.