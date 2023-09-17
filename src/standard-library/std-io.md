# std::io
## Globals

```jule
static mut STDIN: &File
```
File handler for stdin.

---

```jule
static mut STDOUT: &File
```
File handler for stdout.

---

```jule
static mut STDERR: &File
```
File handler for stderr.

## Traits

```jule
trait Reader
```
Reader trait mask for stream reader.

**Methods:**

`pub fn read(mut self, mut buff: []byte): (n: int, err: Error)`\
Read bytes to buffer from stream and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow. Returns 0 if error occurs.

---

```jule
trait Writer
```
Reader trait mask for stream writer.

**Methods:**

`pub fn write(mut self, buff: []byte): (n: int, err: Error)`\
Writes bytes to stream and returns writed byte count. The number of bytes written can never exceed the length of the buff. Returns 0 if error occurs.

---

```jule
trait Writer
```
Stream trait mask for R/W streams.

**Methods:**

`pub fn read(mut self, mut buff: []byte): (n: int, err: Error)`\
Derived from `Reader` trait.

`pub fn write(mut self, buff: []byte): (n: int, err: Error)`\
Derived from `Writer` trait.

## Structures

```jule
struct FileStream
```
Stream implementation for file handles.
::: info
**Implemented Traits**
- Reader
- Writer
- Stream
:::

**Methods:**

`fn read_line(mut self): ([]byte, Error)`\
Reads line from file handle via &File.read method. Returns bytes until line delimiter (`\n`) byte. Returns zero-length byte slice and nil error when reached EOF.

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

`fn scan(self): Error`\
Reads line from handle via read method. Returns bytes until line delimiter (`\n`) byte, delimiter not included. Returns nil error and sets byte buffer to zero-length byte slice when there is no error and readed byte count is zero, so reached to EOF.
