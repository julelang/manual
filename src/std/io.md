# std::io
## Functions

```jule
fn Stdin(): &FileStream
```
Returns FileStream for stdin.

---

```jule
fn Stdout(): &FileStream
```
Returns FileStream for stdout.

---

```jule
fn Stderr(): &FileStream
```
Returns FileStream for stderr.

## Traits

```jule
trait Reader
```
Reader trait mask for stream reader.

**Methods:**

`fn Read(mut self, mut buff: []byte)!: (n: int)`

---

```jule
trait Writer
```
Reader trait mask for stream writer.

**Methods:**

`fn Write(mut self, buff: []byte)!: (n: int)`

---

```jule
trait Stream
```
Stream trait mask for R/W streams.

**Methods:**

`fn Read(mut self, mut buff: []byte)!: (n: int)`\
`fn Write(mut self, buff: []byte)!: (n: int)`

---

```jule
trait WriterCloser
```
Reader and closer trait mask for read/close streams.

**Methods:**

`fn Read(mut self, mut buff: []byte)!: (n: int)`\
`fn Close(mut self)!`

## Structures

```jule
struct FileStream
```
Stream implementation for file handles.
Uses internally mutable buffer.
::: info
**Implemented Traits**
- Reader
- Writer
- Stream
:::

**Methods:**

`fn File(mut self): &File`\
Returns internal file buffer.

`fn Read(mut self, mut buff: []byte)!: (n: int)`\
Read bytes to buffer from stream and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow.

`fn Write(mut self, buff: []byte)!: (n: int)`\
Writes bytes to stream and returns writed byte count. The number of bytes written can never exceed the length of the buff.

`fn WriteStr(mut self, buff: []byte)!: (n: int)`\
Same as write, but writes string.
This method is more efficient than write method for strings.

`fn ReadLineBytes(mut self)!: []byte`\
Same as ReadLine method, but returns in bytes.

`fn ReadLine(mut self)!: str`\
Reads line from file handle via &File.read method.
Returns bytes until end of the line, line delimiter is not included.
Returns zero-length string when reached EOF.

---

```jule
struct Scanner
```
Scanner for files or etc.
Scans bytes line-by-line.

**Methods:**

`static fn New(mut r: Reader): &Scanner`\
New `&Scanner` from `Reader`.

`static fn Newf(mut f: &File): &Scanner`\
New `&Scanner` from `&File`.
Uses `&FileStream` for `Reader` trait compatibility.

`fn Bytes(self): []byte`\
Returns bytes of recent scan.
Returned slice is mutable copy of buffer.

`fn Text(self): str`\
Returns text from bytes of recent scan.

`fn Scan(self)!: bool`\
Scans line from handle via read method. Scans bytes until end of the line, line delimiter is not included. Reports whether readed byte into buffer.

---

```jule
struct ByteStream
```
Stream implementation for bytes.
Uses internally mutable buffer.
Does not clearing internal buffer at all.
Large buffers can be memory hungry.

::: info
**Implemented Traits**
- Reader
- Writer
- Stream
:::

**Methods:**

`static fn New(): &ByteStream`\
Returns new ByteStream instance.

`fn Data(self): bool`\
Reports whether buffer have readable data.

`fn Fit(mut self)`\
Removes readed bytes from buffer.
Maybe help to reduce memory usage for large buffers.

`fn Read(mut self, mut buff: []byte)!: (n: int)`\
Read bytes to buffer from stream and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow.

`fn Write(mut self, buff: []byte)!: (n: int)`\
Writes bytes to stream and returns writed byte count. The number of bytes written can never exceed the length of the buff.

`fn WriteStr(mut self, buff: []byte)!: (n: int)`\
Same as write, but writes string.
This method is more efficient than write method for strings.