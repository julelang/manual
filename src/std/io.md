# std::io
## Functions

```jule
fn stdin(): &File
```
Returns File handler for stdin.

---

```jule
fn stdout(): &File
```
Returns File handler for stdout.

---

```jule
fn stderr(): &File
```
Returns File handler for stderr.

## Traits

```jule
trait Reader
```
Reader trait mask for stream reader.

**Methods:**

`pub fn read(mut self, mut buff: []byte)!: (n: int)`

---

```jule
trait Writer
```
Reader trait mask for stream writer.

**Methods:**

`pub fn write(mut self, buff: []byte)!: (n: int)`

---

```jule
trait Stream
```
Stream trait mask for R/W streams.

**Methods:**

`pub fn read(mut self, mut buff: []byte)!: (n: int)`\
`pub fn write(mut self, buff: []byte)!: (n: int)`

---

```jule
trait WriterCloser
```
Reader and closer trait mask for read/close streams.

**Methods:**

`pub fn read(mut self, mut buff: []byte)!: (n: int)`\
`pub fn close(mut self)!`

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

`fn read(mut self, mut buff: []byte)!: (n: int)`\
Read bytes to buffer from stream and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow.

`fn write(mut self, buff: []byte)!: (n: int)`\
Writes bytes to stream and returns writed byte count. The number of bytes written can never exceed the length of the buff.

`fn read_line(mut self)!: []byte`\
Reads line from file handle via &File.read method. Returns bytes until line delimiter (`\n`) byte. Returns zero-length byte slice when reached EOF.

---

```jule
struct Scanner
```
Scanner for files or etc.
Scans bytes line-by-line.

**Methods:**

`static fn new(mut r: Reader): &Scanner`\
New `&Scanner` from `Reader`.

`static fn newf(mut f: &File): &Scanner`\
New `&Scanner` from `&File`.
Uses `&FileStream` for `Reader` trait compatibility.

`fn bytes(self): []byte`\
Returns bytes of recent scan.
Returned slice is mutable copy of buffer.

`fn text(self): str`\
Returns text from bytes of recent scan.

`fn scan(self)!: bool`\
Scans line from handle via read method. Scans bytes until line delimiter (`\n`) byte, delimiter not included. Reports whether readed byte into buffer.

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

`static fn new(): &ByteStream`\
Returns new ByteStream instance.

`fn data(self): bool`\
Reports whether buffer have readable data.

`fn fit(mut self)`\
Removes readed bytes from buffer.
Maybe help to reduce memory usage for large buffers.

`fn read(mut self, mut buff: []byte)!: (n: int)`\
Read bytes to buffer from stream and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow.

`fn write(mut self, buff: []byte)!: (n: int)`\
Writes bytes to stream and returns writed byte count. The number of bytes written can never exceed the length of the buff.
