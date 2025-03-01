# std/io

## Index

[Variables](#variables)\
[fn Copy\(mut dst: Writer, mut src: Reader\)\!: \(written: i64\)](#copy)\
[fn CopyBuffer\(mut dst: Writer, mut src: Reader, mut buf: \[\]byte\)\!: \(written: i64\)](#copybuffer)\
[fn WriteStr\(mut w: Writer, s: str\)\!: \(n: int\)](#writestr)\
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
static mut ErrShortWrite = errors::New("short write")
```
It means that a write accepted fewer bytes than requested but failed to return an explicit error\. Mutation is undefined behavior\.

---

```jule
static mut ErrShortBuffer = errors::New("short buffer")
```
It means that a read required a longer buffer than was provided\. Mutation is undefined behavior\.

---

```jule
static mut ErrUnexpectedEOF = errors::New("unexpected EOF")
```
It means that EOF was encountered in the middle of reading a fixed\-size block or data structure\. Mutation is undefined behavior\.

---

```jule
static mut ErrNoProgress = errors::New("multiple Read calls return no data or error")
```
It is returned by some clients of a \[Reader\] when many calls to Read have failed to return any data or error, usually the sign of a broken \[Reader\] implementation\. Mutation is undefined behavior\.

---

```jule
const SeekStart = 0   // seek relative to the origin of the file
const SeekCurrent = 1 // seek relative to the current offset
const SeekEnd = 2     // seek relative to the end
```
Seek whence values\.

---

```jule
static mut Discard = discard{ ... }
```
A \[Writer\] on which all Write calls succeed without doing anything\.

## Copy
```jule
fn Copy(mut dst: Writer, mut src: Reader)!: (written: i64)
```
Copy copies from src to dst until either EOF is reached on src or an error occurs\. It returns the number of bytes copied and the first error encountered while copying, if any\.

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
Writes the contents of the string s to w, which accepts a slice of bytes\. The \[Writer\.write\] is invoked directly\.

## Reader
```jule
trait Reader {
	fn Read(mut self, mut buf: []byte)!: (n: int)
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
	fn Write(mut self, buf: []byte)!: (n: int)
}
```
Implements the basic Write method\.

Write writes len\(buf\) bytes from buf to the underlying data stream\. It returns the number of bytes written from buf \(0 &lt;= n &lt;= len\(buf\)\) and any error encountered that caused the write to stop early\. Write must remain the slice data without any mutation after call\.

Implementations must not retain buf\. Exceptionals are not standardized\. Should be documented by implementations\.

## StrWriter
```jule
trait StrWriter {
	fn WriteStr(mut self, s: str)!: (n: int)
}
```
Implements the basic WriteStr method\.

The WriteStr method similar to Writer\.Write method but takes string\. Behavior should be same as the Writer\.Write method\.

Implementations must not retain s\. Exceptionals are not standardized\. Should be documented by implementations\.

## ByteReader
```jule
trait ByteReader {
	fn ReadByte(mut self)!: (byte, n: int)
}
```
Implements the basic ReadByte method\.

It should read byte and return one for n without throwing exceptional if success\. It should return zero n for EOF\. If read failed, should throw exceptional\.

The ReadByte method mutable because of same reasons of the \`Writer\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## ByteWriter
```jule
trait ByteWriter {
	fn WriteByte(mut self, b: byte)!
}
```
Implements the basic WriteByte method\.

It should write byte and return without throwing exceptional if success\. If write failed, should throw exceptional\.

Exceptionals are not standardized\. Should be documented by implementations\.

## RuneReader
```jule
trait RuneReader {
	fn ReadRune(mut self)!: rune
}
```
Implements the basic ReadRune method\.

It should read rune and return without throwing exceptional if success\. If read failed, should throw exceptional\.

The ReadRune method mutable because of same reasons of the \`Writer\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## RuneWriter
```jule
trait RuneWriter {
	fn WriteRune(mut self, r: rune)!: (n: int)
}
```
Implements the basic WriteRune method\.

It should write rune and return written count without throwing exceptional if success\. If write failed, should throw exceptional\.

The return count may be based on bytes or runes by implementation\. For example, for bytes, it may return count of written bytes, or for runes returns one for a single rune\. It should be documented by the implementation\.

Exceptionals are not standardized\. Should be documented by implementations\.

## Closer
```jule
trait Closer {
	fn Close(mut self)!
}
```
Implements the basic Close method\.

The behavior of the Close method is not standardized\. Specific implementations should document their own behavior\. After first call the Close method behavior may be undefined, but exceptional throw recommended if any error should be occur\.

The Close method mutable because of same reasons of the \`Writer\` trait\.

Exceptionals are not standardized\. Should be documented by implementations\.

## ReaderAt
```jule
trait ReaderAt {
	fn ReadAt(mut self, mut p: []byte, off: i64)!: (n: int)
}
```
The trait that wraps the basic ReadAt method\.

It reads len\(p\) bytes into p starting at offset off in the underlying input source\. It returns the number of bytes read \(0 &lt;= n &lt;= len\(p\)\) and any error encountered\.

If n &lt; len\(p\), it throws an exception explaining why more bytes were not read\. In this respect, ReadAt is stricter than Read\.

Even if n &lt; len\(p\), it may use all of p as scratch space during the call\. If some data is available but not len\(p\) bytes, it blocks until either all the data is available or an error occurs\. In this respect ReadAt is different from Read\.

It should return zero n for EOF\.

If it is reading from an input source with a seek offset, it should not affect nor be affected by the underlying seek offset\.

Clients of ReadAt can execute parallel ReadAt calls on the same input source\.

Implementations must not retain p\.

## WriterTo
```jule
trait WriterTo {
	fn WriteTo(mut self, mut w: Writer)!: (n: i64)
}
```
The trait that wraps the WriteTo method\.

It writes data to w until there&#39;s no more data to write or when an error occurs\. The return value n is the number of bytes written\. Any error encountered during the write is also forwarded\.

## Seeker
```jule
trait Seeker {
	fn Seek(mut self, offset: i64, whence: int)!: i64
}
```
The trait that wraps the basic Seek method\.

It sets the offset for the next Read or Write to offset, interpreted according to whence: \[SeekStart\] means relative to the start of the file, \[SeekCurrent\] means relative to the current offset, and \[SeekEnd\] means relative to the end \(for example, offset = \-2 specifies the penultimate byte of the file\)\. It returns the new offset relative to the start of the file or throws an error, if any\.

Seeking to an offset before the start of the file is an error\. Seeking to any positive offset may be allowed, but if the new offset exceeds the size of the underlying object the behavior of subsequent I/O operations is implementation\-dependent\.

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