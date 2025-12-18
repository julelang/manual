# std/bufio

## Index

[Variables](#variables)\
[fn ScanLines\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanlines)\
[fn ScanBytes\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanbytes)\
[fn ScanWords\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanwords)\
[fn ScanRunes\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanrunes)\
[struct Reader](#reader)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NewSize\(mut rd: io::Reader, size: int\): &amp;Reader](#newsize)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut rd: io::Reader\): &amp;Reader](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): int](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, mut r: io::Reader\)](#reset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Peek\(mut \*self, mut n: int\)\!: \(data: \[\]byte, full: bool, eof: bool\)](#peek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Discard\(mut \*self, n: int\)\!: \(discarded: int\)](#discard)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut \*self, mut p: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadByte\(mut \*self\)\!: \(byte, int\)](#readbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadByte\(mut \*self\)\!](#unreadbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadRune\(mut \*self\)\!: \(r: rune, size: int\)](#readrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnreadRune\(mut \*self\)\!](#unreadrune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Buffered\(\*self\): int](#buffered)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadSlice\(mut \*self, delim: byte\)\!: \(line: \[\]byte, full: bool, eof: bool\)](#readslice)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadLine\(mut \*self\)\!: \(line: \[\]byte, isPrefix: bool, eof: bool\)](#readline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadBytes\(mut \*self, delim: byte\)\!: \(buf: \[\]byte, eof: bool\)](#readbytes)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadStr\(mut \*self, delim: byte\)\!: \(str, eof: bool\)](#readstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteTo\(mut \*self, mut w: io::Writer\)\!: \(n: i64\)](#writeto)\
[struct Writer](#writer)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NewSize\(mut w: io::Writer, mut size: int\): &amp;Writer](#newsize-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut w: io::Writer\): &amp;Writer](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): int](#size-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, mut w: io::Writer\)](#reset-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Flush\(mut \*self\)\!](#flush)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Available\(\*self\): int](#available)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AvailableBuffer\(mut \*self\): \[\]byte](#availablebuffer)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Buffered\(\*self\): int](#buffered-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, p: \[\]byte\)\!: \(nn: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteByte\(mut \*self, c: byte\)\!](#writebyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteRune\(mut \*self, r: rune\)\!: \(size: int\)](#writerune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr\(mut \*self, mut s: str\)\!: int](#writestr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadFrom\(mut \*self, mut r: io::Reader\)\!: \(n: i64\)](#readfrom)\
[type FinalToken](#finaltoken)\
[type SplitFunc](#splitfunc)\
[struct Scanner](#scanner)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut r: io::Reader\): &amp;Scanner](#new-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Token\(mut \*self\): \[\]byte](#token)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Text\(\*self\): str](#text)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EOF\(\*self\): bool](#eof)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scan\(mut \*self\)\!: bool](#scan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Split\(mut \*self, split: SplitFunc\)](#split)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Buffer\(mut \*self, mut buf: \[\]byte, max: int\)](#buffer)

## Variables

```jule
let mut ErrInvalidUnreadByte = errors::New("bufio: invalid use of UnreadByte")
let mut ErrInvalidUnreadRune = errors::New("bufio: invalid use of UnreadRune")
let mut ErrBufferFull = errors::New("bufio: buffer full")
let mut ErrNegativeCount = errors::New("bufio: negative count")
```
Any mutation is undefined\.

---

```jule
let mut ErrTooLong = errors::New("bufio::Scanner: token too long")
let mut ErrNegativeAdvance = errors::New("bufio::Scanner: SplitFunc returns negative advance count")
let mut ErrAdvanceTooFar = errors::New("bufio::Scanner: SplitFunc returns advance count beyond input")
let mut ErrBadReadCount = errors::New("bufio::Scanner: Read returned impossible count")
```
Errors returned by Scanner\. Mutation is undefined behavior\.

---

```jule
const MaxTokenSize = 1 << 16 // 64 * 1024
```
The default maximum token size of the Scanner\.

## ScanLines
```jule
fn ScanLines(mut data: []byte, atEOF: bool)!: (advance: int, token: []byte)
```
The split function for a \[Scanner\] that returns each line of text, stripped of any trailing end\-of\-line marker\. The returned line may be empty\. The end\-of\-line marker is one optional carriage return followed by one mandatory newline\. In regular expression notation, it is \`\\r?\\n\`\. The last non\-empty line of input will be returned even if it has no newline\.

## ScanBytes
```jule
fn ScanBytes(mut data: []byte, atEOF: bool)!: (advance: int, token: []byte)
```
The split function for a \[Scanner\] that returns each byte as a token\.

## ScanWords
```jule
fn ScanWords(mut data: []byte, atEOF: bool)!: (advance: int, token: []byte)
```
The split function for a \[Scanner\] that returns each space\-separated word of text, with surrounding spaces deleted\. It will never return an empty string\. The definition of space is set by unicode::IsSpace\.

## ScanRunes
```jule
fn ScanRunes(mut data: []byte, atEOF: bool)!: (advance: int, token: []byte)
```
ScanRunes is a split function for a \[Scanner\] that returns each UTF\-8\-encoded rune as a token\. The sequence of runes returned is equivalent to that from a range loop over the input as a string, which means that erroneous UTF\-8 encodings translate to U\+FFFD = &#34;\\xef\\xbf\\xbd&#34;\. Because of the Scan interface, this makes it impossible for the client to distinguish correctly encoded replacement runes from encoding errors\.

## Reader
```jule
struct Reader {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements buffering for an io::Reader object\. A new Reader is created by calling \[Reader\.New\] or \[Reader\.NewSize\]; alternatively the zero value of a Reader may be used after calling \[Reset\] on it\.

### Implemented Traits

- `io::Reader`
- `io::ByteReader`
- `io::ByteScanner`
- `io::RuneReader`
- `io::RuneScanner`
- `io::WriterTo`

### NewSize
```jule
fn NewSize(mut rd: io::Reader, size: int): &Reader
```
Returns a new \[Reader\] whose buffer has at least the specified size\. If the argument io::Reader is already a \[Reader\] with large enough size, it returns the underlying \[Reader\]\.

### New
```jule
fn New(mut rd: io::Reader): &Reader
```
Returns a new \[Reader\] whose buffer has the default size\.

### Size
```jule
fn Size(*self): int
```
Returns the size of the underlying buffer in bytes\.

### Reset
```jule
fn Reset(mut *self, mut r: io::Reader)
```
Discards any buffered data, resets all state, and switches the buffered reader to read from r\. Calling Reset on the zero value of \[Reader\] initializes the internal buffer to the default size\. Calling self\.Reset\(self\) \(that is, resetting a \[Reader\] to itself\) does nothing\.

### Peek
```jule
fn Peek(mut *self, mut n: int)!: (data: []byte, full: bool, eof: bool)
```
Returns the next n bytes without advancing the reader\. The bytes stop being valid at the next read call\. If necessary, it will read more bytes into the buffer in order to make n bytes available\. If it reads fewer than n bytes, it throws an error explaining why the read is short\. If n is larger than Reader&#39;s buffer size, reports it with full and returns all the data in the buffer\.

Calling Peek prevents a \[Reader\.UnreadByte\] or \[Reader\.UnreadRune\] call from succeeding until the next read operation\.

### Discard
```jule
fn Discard(mut *self, n: int)!: (discarded: int)
```
Skips the next n bytes, returning the number of bytes discarded\.

If Discard skips fewer than n bytes, it throws an error\. If 0 &lt;= n &lt;= self\.Buffered\(\), Discard is guaranteed to succeed without reading from the underlying io::Reader\.

### Read
```jule
fn Read(mut *self, mut p: []byte)!: (n: int)
```
Reads data into p\. It returns the number of bytes read into p\. The bytes are taken from at most one Read on the underlying \[Reader\], hence n may be less than len\(p\)\. To read exactly len\(p\) bytes, use io::ReadFull\(self, p\)\. If the underlying \[Reader\] can return a non\-zero count, then this Read method can do so as well; see the \[io::Reader\] docs\.

### ReadByte
```jule
fn ReadByte(mut *self)!: (byte, int)
```
Reads and returns a single byte\. If no byte is available, returns an error\.

### UnreadByte
```jule
fn UnreadByte(mut *self)!
```
Unreads the last byte\. Only the most recently read byte can be unread\.

Returns an error if the most recent method called on the \[Reader\] was not a read operation\. Notably, \[Reader\.Peek\], \[Reader\.Discard\], and \[Reader\.WriteTo\] are not considered read operations\.

### ReadRune
```jule
fn ReadRune(mut *self)!: (r: rune, size: int)
```
Reads a single UTF\-8 encoded Unicode character and returns the rune and its size in bytes\. If the encoded rune is invalid, it consumes one byte and returns unicode\.ReplacementChar \(U\+FFFD\) with a size of 1\.

### UnreadRune
```jule
fn UnreadRune(mut *self)!
```
Unreads the last rune\. If the most recent method called on the \[Reader\] was not a \[Reader\.ReadRune\], \[Reader\.UnreadRune\] returns an error\. \(In this regard it is stricter than \[Reader\.UnreadByte\], which will unread the last byte from any read operation\.\)

### Buffered
```jule
fn Buffered(*self): int
```
Returns the number of bytes that can be read from the current buffer\.

### ReadSlice
```jule
fn ReadSlice(mut *self, delim: byte)!: (line: []byte, full: bool, eof: bool)
```
Reads until the first occurrence of delim in the input, returning a slice pointing at the bytes in the buffer\. The bytes stop being valid at the next read\. If it encounters an error before finding a delimiter, forwards it\. It fails with full=true if the buffer fills without a delim\. Because the data returned from ReadSlice will be overwritten by the next I/O operation, most clients should use \[Reader\.ReadBytes\] or ReadStr instead\. Throws error if and only if line does not end in delim because of an error\. If it encounters EOF before finding a delimiter, it returns all the data in the buffer\.

### ReadLine
```jule
fn ReadLine(mut *self)!: (line: []byte, isPrefix: bool, eof: bool)
```
Low\-level line\-reading primitive\. Most callers should use \[Reader\.ReadBytes\]\(&#39;\\n&#39;\) or \[Reader\.ReadStr\]\(&#39;\\n&#39;\) instead or use a \[Scanner\]\.

It tries to return a single line, not including the end\-of\-line bytes\. If the line was too long for the buffer then isPrefix is set and the beginning of the line is returned\. The rest of the line will be returned from future calls\. isPrefix will be false when returning the last fragment of the line\. The returned buffer is only valid until the next call to ReadLine\.

The text returned from ReadLine does not include the line end \(&#34;\\r\\n&#34; or &#34;\\n&#34;\)\. No indication or error is given if the input ends without a final line end\. Calling \[Reader\.UnreadByte\] after ReadLine will always unread the last byte read \(possibly a character belonging to the line end\) even if that byte is not part of the line returned by ReadLine\.

### ReadBytes
```jule
fn ReadBytes(mut *self, delim: byte)!: (buf: []byte, eof: bool)
```
Reads until the first occurrence of delim in the input, returning a slice containing the data up to and including the delimiter\. If it encounters an error before finding a delimiter, forwards it\. Throws error if and only if line does not end in delim because of an error\. Returns zero\-length slice for EOF\. If it encounters EOF before finding a delimiter, it returns all the data in the buffer\. For simple uses, a Scanner may be more convenient\.

### ReadStr
```jule
fn ReadStr(mut *self, delim: byte)!: (str, eof: bool)
```
Reads until the first occurrence of delim in the input, returning a string containing the data up to and including the delimiter\. If it encounters an error before finding a delimiter, forwards it\. Throws error if and only if line does not end in delim because of an error\. Returns empty string for EOF\. If it encounters EOF before finding a delimiter, it returns all the data in the buffer\. For simple uses, a Scanner may be more convenient\.

### WriteTo
```jule
fn WriteTo(mut *self, mut w: io::Writer)!: (n: i64)
```
Implements io::WriterTo\. This may make multiple calls to the \[Reader\.Read\] method of the underlying \[Reader\]\.

## Writer
```jule
struct Writer {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements buffering for an \[io::Writer\] object\. If an error occurs writing to a \[Writer\], no more data will be accepted and all subsequent writes, and \[Writer\.Flush\], will throw the error\. After all data has been written, the client should call the \[Writer\.Flush\] method to guarantee all data has been forwarded to the underlying \[io::Writer\]\.

### Implemented Traits

- `io::Writer`
- `io::ByteWriter`
- `io::RuneWriter`
- `io::StrWriter`
- `io::ReaderFrom`

### NewSize
```jule
fn NewSize(mut w: io::Writer, mut size: int): &Writer
```
Returns a new \[Writer\] whose buffer has at least the specified size\. If the argument io::Writer is already a \[Writer\] with large enough size, it returns the underlying \[Writer\]\.

### New
```jule
fn New(mut w: io::Writer): &Writer
```
Returns a new \[Writer\] whose buffer has the default size\. If the argument io::Writer is already a \[Writer\] with large enough buffer size, it returns the underlying \[Writer\]\.

### Size
```jule
fn Size(*self): int
```
Returns the size of the underlying buffer in bytes\.

### Reset
```jule
fn Reset(mut *self, mut w: io::Writer)
```
Discards any unflushed buffered data, clears any error, and resets writer to write its output to w\. Calling Reset on the zero value of \[Writer\] initializes the internal buffer to the default size\. Calling w\.Reset\(w\) \(that is, resetting a \[Writer\] to itself\) does nothing\.

### Flush
```jule
fn Flush(mut *self)!
```
Writes any buffered data to the underlying \[io::Writer\]\.

### Available
```jule
fn Available(*self): int
```
Returns how many bytes are unused in the buffer\.

### AvailableBuffer
```jule
fn AvailableBuffer(mut *self): []byte
```
Returns an empty buffer with Reader\.Available\(\) capacity\. This buffer is intended to be appended to and passed to an immediately succeeding \[Writer\.Write\] call\. The buffer is mutable and it si only valid until the next write operation\.

### Buffered
```jule
fn Buffered(*self): int
```
Returns the number of bytes that have been written into the current buffer\.

### Write
```jule
fn Write(mut *self, p: []byte)!: (nn: int)
```
Writes the contents of p into the buffer\. It returns the number of bytes written\. If nn &lt; len\(p\), it throws for short\-write reason\.

### WriteByte
```jule
fn WriteByte(mut *self, c: byte)!
```
Writes a single byte\.

### WriteRune
```jule
fn WriteRune(mut *self, r: rune)!: (size: int)
```
Writes a single Unicode code point, returning the number of bytes written and throws any error\.

### WriteStr
```jule
fn WriteStr(mut *self, mut s: str)!: int
```
Writes a string\. It returns the number of bytes written\. If the count is less than len\(s\), it throws an error explaining why the write is short\.

### ReadFrom
```jule
fn ReadFrom(mut *self, mut r: io::Reader)!: (n: i64)
```
Implements \[io::ReaderFrom\]\.

## FinalToken
```jule
type FinalToken: []byte
```
Special sentinel exception value type\. It is intended to be thrown exception by a Split function to indicate that the scanning should stop with no error\. If the token being delivered with this exception, the token is the last token\.

The value is useful to stop processing early or when it is necessary to deliver a final empty token \(which is different from a nil token\)\. One could achieve the same behavior with a custom error value but providing one here is tidier\.

## SplitFunc
```jule
type SplitFunc: fn(mut data: []byte, atEOF: bool)!: (advance: int, token: []byte)
```
The signature of the split function used to tokenize the input\. The arguments are an initial substring of the remaining unprocessed data and a flag, atEOF, that reports whether the \[Reader\] has no more data to give\. The return values are the number of bytes to advance the input and the next token to return to the user, if any\. It throws error as exceptional, if any\.

Any exceptional scanning will stop and data may be lost\. A successful read should always return successfully, any exceptional means it failed\. If that exceptional is \[FinalToken\], scanning stops with no error\. A non\-nil token delivered with \[FinalToken\] will be the last token, and a nil token with \[FinalToken\] immediately stops the scanning\.

Otherwise, the \[Scanner\] advances the input\. If the token is not nil, the \[Scanner\] returns it to the user\. If the token is nil, the \[Scanner\] reads more data and continues scanning; if there is no more data\-\-if atEOF was true\-\-the \[Scanner\] returns\. If the data does not yet hold a complete token, for instance if it has no newline while scanning lines, a \[SplitFunc\] can return \(0, nil\) to signal the \[Scanner\] to read more data into the slice and try again with a longer slice starting at the same point in the input\.

The function is never called with an empty data slice unless atEOF is true\. If atEOF is true, however, data may be non\-empty and, as always, holds unprocessed text\.

The data is a mutable copy into the relevant range of the Scanner&#39;s internal buffer\. It is considered mutable because it is considered legal for this function to return a mutable slice from the relevant data\. However, mutating the data is definitely not recommended\. A safe \[SplitFunc\] should handle data without mutating it\.

## Scanner
```jule
struct Scanner {
	// NOTE: contains filtered hidden or unexported fields
}
```
Provides a convenient interface for reading data such as a file of newline\-delimited lines of text\. Successive calls to the \[Scanner\.Scan\] method will step through the &#39;tokens&#39; of a file, skipping the bytes between the tokens\. The specification of a token is defined by a split function of type \[SplitFunc\]; the default split function breaks the input into lines with line termination stripped\. The split functions are defined in this package for scanning a file into lines, bytes, UTF\-8\-encoded runes, and space\-delimited words\. The client may instead provide a custom split function\.

Scanning stops unrecoverably at EOF, the first I/O error, or a token too large to fit in the buffer\. When a scan stops, the reader may have advanced arbitrarily far past the last token\.

### New
```jule
fn New(mut r: io::Reader): &Scanner
```
Returns new Scanner for r with the default configuration\.

### Token
```jule
fn Token(mut *self): []byte
```
Returns the most recent token generated by a call to \[Scanner\.Scan\]\. The underlying array may point to data that will be overwritten by a subsequent call to Scan\. It does no allocation\.

### Text
```jule
fn Text(*self): str
```
Returns the most recent token generated by a call to \[Scanner\.Scan\] as a newly allocated string holding its bytes\.

### EOF
```jule
fn EOF(*self): bool
```
Reports whether scanner has reached EOF\.

### Scan
```jule
fn Scan(mut *self)!: bool
```
Advances the \[Scanner\] to the next token, which will then be available through the \[Scanner\.Token\] or \[Scanner\.Text\] method\. It returns false when there are no more tokens, either by reaching the end of the input or an exceptional\. After Scan returns false, without any exceptional, it means EOF\. Any exceptional will be forwarded\. Scan panics if the split function returns too many empty tokens without advancing the input\. This is a common error mode for scanners\.

### Split
```jule
fn Split(mut *self, split: SplitFunc)
```
Sets the split function for the \[Scanner\]\. The default split function is \[ScanLines\]\.

Panics if it is called after scanning has started\.

### Buffer
```jule
fn Buffer(mut *self, mut buf: []byte, max: int)
```
Sets the initial buffer to use when scanning and the maximum size of buffer that may be allocated during scanning\. The maximum token size must be less than the larger of max and cap\(buf\)\. If max &lt;= cap\(buf\), \[Scanner\.Scan\] will use this buffer only and do no allocation\.

By default, \[Scanner\.Scan\] uses an internal buffer and sets the maximum token size to \[MaxTokenSize\]\.

Panics if it is called after scanning has started\.