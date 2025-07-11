# std/io

## Index

[Variables](#variables)\
[fn LimitReader\(mut r: Reader, n: i64\): Reader](#limitreader)\
[fn CopyN\(mut dst: Writer, mut src: Reader, n: i64\)\!: \(written: i64\)](#copyn)\
[fn Copy\(mut dst: Writer, mut src: Reader\)\!: \(written: i64\)](#copy)\
[fn CopyBuffer\(mut dst: Writer, mut src: Reader, mut buf: \[\]byte\)\!: \(written: i64\)](#copybuffer)\
[fn WriteStr\(mut w: Writer, s: str\)\!: \(n: int\)](#writestr)\
[fn WriteByte\(mut w: Writer, b: byte\)\!: \(n: int\)](#writebyte)\
[fn ReadAll\(mut r: Reader\)\!: \[\]byte](#readall)\
[trait Reader](#reader)\
[trait Writer](#writer)\
[trait StrWriter](#strwriter)\
[trait ByteReader](#bytereader)\
[trait ByteWriter](#bytewriter)\
[trait RuneReader](#runereader)\
[trait RuneWriter](#runewriter)\
[trait Closer](#closer)\
[trait ReaderAt](#readerat)\
[trait WriterTo](#writerto)\
[trait Seeker](#seeker)\
[trait ReadCloser](#readcloser)\
[trait WriteCloser](#writecloser)\
[trait ReadWriter](#readwriter)\
[trait Stream](#stream)

## Variables

```jule
let mut ErrShortWrite = errors::New("short write")
```
It means that a write accepted fewer bytes than requested but failed to return an explicit error\. Mutation is undefined behavior\.

---

```jule
let mut ErrShortBuffer = errors::New("short buffer")
```
It means that a read required a longer buffer than was provided\. Mutation is undefined behavior\.

---

```jule
let mut ErrUnexpectedEOF = errors::New("unexpected EOF")
```
It means that EOF was encountered in the middle of reading a fixed\-size block or data structure\. Mutation is undefined behavior\.

---

```jule
let mut ErrNoProgress = errors::New("multiple Read calls return no data or error")
```
It is returned by some clients of a \[Reader\] when many calls to Read have failed to return any data or error, usually the sign of a broken \[Reader\] implementation\. Mutation is undefined behavior\.

---

```jule
const (
	SeekStart   = 0 // seek relative to the origin of the file
	SeekCurrent = 1 // seek relative to the current offset
	SeekEnd     = 2 // seek relative to the end
)
```
Seek whence values\.

---

```jule
let mut Discard = discard{ ... }
```
A \[Writer\] on which all Write calls succeed without doing anything\.

## LimitReader
```jule
fn LimitReader(mut r: Reader, n: i64): Reader
```
Returns a Reader that reads from r but stops like EOF after n bytes\.

## CopyN
```jule
fn CopyN(mut dst: Writer, mut src: Reader, n: i64)!: (written: i64)
```
Copies n bytes \(or until an error\) from src to dst\. It returns the number of bytes copied and throws the earliest error encountered while copying\. On return, written == n if and only if no error\.

## Copy
```jule
fn Copy(mut dst: Writer, mut src: Reader)!: (written: i64)
```
Copies from src to dst until either EOF is reached on src or an error occurs\. It returns the number of bytes copied and the first error encountered while copying, if any\.

Forwards any exceptional and may be throw InvalidWrite or ShortWrite\.

## CopyBuffer
```jule
fn CopyBuffer(mut dst: Writer, mut src: Reader, mut buf: []byte)!: (written: i64)
```
Identical to Copy except that it stages through the provided buffer \(if one is required\) rather than allocating a temporary one\. If buf is nil, one is allocated; otherwise if it has zero length, it panics\.

## WriteStr
```jule
fn WriteStr(mut w: Writer, s: str)!: (n: int)
```
Writes the contents of the string s to w efficiently\. Guarantees a slice will not be allocated\.

## WriteByte
```jule
fn WriteByte(mut w: Writer, b: byte)!: (n: int)
```
Writes a single byte to w efficiently\. Guarantees a slice will not be allocated\.

## ReadAll
```jule
fn ReadAll(mut r: Reader)!: []byte
```
Reads from r until an error or EOF and returns the data it read\. A successful call throws no exception\.

## Reader
```jule
trait Reader {
	fn Read(mut *self, mut buf: []byte)!: (n: int)
}
```
Implements the basic Read method\.

Reads up to len\(buf\) bytes into buf\. It returns the number of bytes read \(0 &lt;= n &lt;= len\(buf\)\)\. Even if Read returns n &lt; len\(buf\), it may use all of buf as scratch space during the call\. If some data is available but not len\(buf\) bytes, Read conventionally returns what is available instead of waiting for more\.

If len\(buf\) == 0, Read should always return n == 0\. Implementations of Read are should return zero byte count for EOF\. If len\(buf\) \!= 0 and EOF reached, should return zero byte count to represent EOF\.

The Read method mutable because implementation may should do mutable operations, or this method may called needed from the mutable method, which is not cannot be internally mutable\. Such a mutable behaviors should be documented by the implementation\.

Implementations must not retain buf\. Exceptionals are not standardized\. Should be documented by implementations\.

## Writer
```jule
trait Writer {
	fn Write(mut *self, buf: []byte)!: (n: int)
}
```
Implements the basic Write method\.

Write writes len\(buf\) bytes from buf to the underlying data stream\. It returns the number of bytes written from buf \(0 &lt;= n &lt;= len\(buf\)\) and any error encountered that caused the write to stop early\. Write must remain the slice data without any mutation after call\.

Implementations must not retain buf\. Exceptionals are not standardized\. Should be documented by implementations\.

## StrWriter
```jule
trait StrWriter {
	fn WriteStr(mut *self, s: str)!: (n: int)
}
```
Implements the basic WriteStr method\.

The WriteStr method similar to Writer\.Write method but takes string\. Behavior should be same as the Writer\.Write method\.

Implementations must not retain s\. Exceptionals are not standardized\. Should be documented by implementations\.

## ByteReader
```jule
trait ByteReader {
	fn ReadByte(mut *self)!: (byte, n: int)
}
```
Implements the basic ReadByte method\.

It should read byte and return one for n without throwing exceptional if success\. It should return zero n for EOF, the EOF byte is implementation\-dependent\. If read failed, should throw exceptional\.

The ReadByte method mutable because of same reasons of the \`Reader\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## ByteWriter
```jule
trait ByteWriter {
	fn WriteByte(mut *self, b: byte)!
}
```
Implements the basic WriteByte method\.

It should write byte and return without throwing exceptional if success\. If write failed, should throw exceptional\.

Exceptionals are not standardized\. Should be documented by implementations\.

## RuneReader
```jule
trait RuneReader {
	fn ReadRune(mut *self)!: (r: rune, size: int)
}
```
Implements the basic ReadRune method\.

It reads a single encoded Unicode character and returns the rune and its size in bytes\. It should return zero size for EOF, the EOF rune is implementation\-dependent\.

The ReadRune method mutable because of same reasons of the \`Reader\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## RuneWriter
```jule
trait RuneWriter {
	fn WriteRune(mut *self, r: rune)!: (n: int)
}
```
Implements the basic WriteRune method\.

It should write rune and return written count without throwing exceptional if success\. If write failed, should throw exceptional\.

The return count may be based on bytes or runes by implementation\. For example, for bytes, it may return count of written bytes, or for runes returns one for a single rune\. It should be documented by the implementation\.

Exceptionals are not standardized\. Should be documented by implementations\.

## Closer
```jule
trait Closer {
	fn Close(mut *self)!
}
```
Implements the basic Close method\.

The behavior of the Close method is not standardized\. Specific implementations should document their own behavior\. After first call the Close method behavior may be undefined, but exceptional throw recommended if any error should be occur\.

The Close method mutable because of same reasons of the \`Reader\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## ReaderAt
```jule
trait ReaderAt {
	fn ReadAt(mut *self, mut p: []byte, off: i64)!: (n: int)
}
```
The trait that wraps the basic ReadAt method\.

It reads len\(p\) bytes into p starting at offset off in the underlying input source\. It returns the number of bytes read \(0 &lt;= n &lt;= len\(p\)\) and any error encountered\.

If n &lt; len\(p\), it throws an exception explaining why more bytes were not read\. In this respect, ReadAt is stricter than Read\.

Even if n &lt; len\(p\), it may use all of p as scratch space during the call\. If some data is available but not len\(p\) bytes, it blocks until either all the data is available or an error occurs\. In this respect ReadAt is different from Read\.

It should return zero n for EOF\.

If it is reading from an input source with a seek offset, it should not affect nor be affected by the underlying seek offset\.

Clients of ReadAt can execute parallel ReadAt calls on the same input source\.

The ReadAt method mutable because of same reasons of the \`Reader\` trait\.

Implementations must not retain p\. Exceptionals are not standardized\. Should be documented by implementations\.

## WriterTo
```jule
trait WriterTo {
	fn WriteTo(mut *self, mut w: Writer)!: (n: i64)
}
```
The trait that wraps the WriteTo method\.

It writes data to w until there&#39;s no more data to write or when an error occurs\. The return value n is the number of bytes written\. Any error encountered during the write is also forwarded\.

The WriteTo method mutable because of same reasons of the \`Reader\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## Seeker
```jule
trait Seeker {
	fn Seek(mut *self, offset: i64, whence: int)!: i64
}
```
The trait that wraps the basic Seek method\.

It sets the offset for the next Read or Write to offset, interpreted according to whence: \[SeekStart\] means relative to the start of the file, \[SeekCurrent\] means relative to the current offset, and \[SeekEnd\] means relative to the end \(for example, offset = \-2 specifies the penultimate byte of the file\)\. It returns the new offset relative to the start of the file or throws an error, if any\.

Seeking to an offset before the start of the file is an error\. Seeking to any positive offset may be allowed, but if the new offset exceeds the size of the underlying object the behavior of subsequent I/O operations is implementation\-dependent\.

The Seek method mutable because of same reasons of the \`Reader\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## ReadCloser
```jule
trait ReadCloser {
	Reader
	Closer
}
```
Inheritance group for the Reader and Closer traits\.

## WriteCloser
```jule
trait WriteCloser {
	Writer
	Closer
}
```
Inheritance group for the Writer and Closer traits\.

## ReadWriter
```jule
trait ReadWriter {
	Reader
	Writer
}
```
Inheritance group for the Reader and Writer traits\.

## Stream
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
Inheritance group for the Reader, ReadCloser, Writer, WriteCloser, ReadWriter and Closer traits\.