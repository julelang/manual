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

## Functions
```jule
fn readln(): str
```
Reads full-complete line from command-line. 

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
