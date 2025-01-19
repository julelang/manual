# std/io

## Index

[trait Reader](#reader)\
[trait Writer](#writer)\
[trait StrWriter](#strwriter)\
[trait ByteReader](#bytereader)\
[trait ByteWriter](#bytewriter)\
[trait RuneReader](#runereader)\
[trait RuneWriter](#runewriter)\
[trait Closer](#closer)\
[trait ReadCloser](#readcloser)\
[trait WriteCloser](#writecloser)\
[trait ReadWriter](#readwriter)\
[trait Stream](#stream)



## Reader
```jule
trait Reader {
	fn Read(mut self, mut buf: []byte)!: (n: int)
}
```
Implements the basic Read method.

Reads up to len(buf) bytes into buf. It returns the number of bytes read (0 &lt;= n &lt;= len(buf)). Even if Read returns n &lt; len(buf), it may use all of buf as scratch space during the call. If some data is available but not len(buf) bytes, Read conventionally returns what is available instead of waiting for more.

If len(buf) == 0, Read should always return n == 0. Implementations of Read are should return zero byte count for EOF. If len(buf) != 0 and EOF reached, should return zero byte count to represent EOF.

The Read method mutable because implementation may should do mutable operations, or this method may called needed from the mutable method, which is not cannot be internally mutable. Such a mutable behaviors should be documented by the implementation.

Implementations must not retain buf. Exceptionals are not standardized. Should be documented by implementations.

## Writer
```jule
trait Writer {
	fn Write(mut self, buf: []byte)!: (n: int)
}
```
Implements the basic Write method.

Write writes len(buf) bytes from buf to the underlying data stream. It returns the number of bytes written from buf (0 &lt;= n &lt;= len(buf)) and any error encountered that caused the write to stop early. Write must remain the slice data without any mutation after call.

Implementations must not retain buf. Exceptionals are not standardized. Should be documented by implementations.

## StrWriter
```jule
trait StrWriter {
	fn WriteStr(mut self, s: str)!: (n: int)
}
```
Implements the basic WriteStr method.

The WriteStr method similar to Writer.Write method but takes string. Behavior should be same as the Writer.Write method.

Implementations must not retain s. Exceptionals are not standardized. Should be documented by implementations.

## ByteReader
```jule
trait ByteReader {
	fn ReadByte(mut self)!: (byte, n: int)
}
```
Implements the basic ReadByte method.

It should read byte and return one for n without throwing exceptional if success. Is should return zero for n for EOF. If read failed, should throw exceptional.

The ReadByte method mutable because of same reasons of the \`Writer\` trait.

Exceptionals are not standardized. Should be documented by implementations.

## ByteWriter
```jule
trait ByteWriter {
	fn WriteByte(mut self, b: byte)!
}
```
Implements the basic WriteByte method.

It should write byte and return without throwing exceptional if success. If write failed, should throw exceptional.

Exceptionals are not standardized. Should be documented by implementations.

## RuneReader
```jule
trait RuneReader {
	fn ReadRune(mut self)!: rune
}
```
Implements the basic ReadRune method.

It should read rune and return without throwing exceptional if success. If read failed, should throw exceptional.

The ReadRune method mutable because of same reasons of the \`Writer\` trait.

Exceptionals are not standardized. Should be documented by implementations.

## RuneWriter
```jule
trait RuneWriter {
	fn WriteRune(mut self, r: rune)!: (n: int)
}
```
Implements the basic WriteRune method.

It should write rune and return written count without throwing exceptional if success. If write failed, should throw exceptional.

The return count may be based on bytes or runes by implementation. For example, for bytes, it may return count of written bytes, or for runes returns one for a single rune. It should be documented by the implementation.

Exceptionals are not standardized. Should be documented by implementations.

## Closer
```jule
trait Closer {
	fn Close(mut self)!
}
```
Implements the basic Close method.

The behavior of the Close method is not standardized. Specific implementations should document their own behavior. After first call the Close method behavior may be undefined, but exceptional throw recommended if any error should be occur.

The Close method mutable because of same reasons of the \`Writer\` trait.

Exceptionals are not standardized. Should be documented by implementations.

## ReadCloser
```jule
trait ReadCloser {
	Reader
	Closer
}
```
Inheritance group for the Reader and Closer traits.

## WriteCloser
```jule
trait WriteCloser {
	Writer
	Closer
}
```
Inheritance group for the Writer and Closer traits.

## ReadWriter
```jule
trait ReadWriter {
	Reader
	Writer
}
```
Inheritance group for the Reader and Writer traits.

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
Inheritance group for the Reader, ReadCloser, Writer, WriteCloser, ReadWriter and Closer traits.