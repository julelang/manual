# std/bufio

## Index

[Variables](#variables)\
[fn ScanLines\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanlines)\
[fn ScanBytes\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanbytes)\
[fn ScanWords\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanwords)\
[fn ScanRunes\(mut data: \[\]byte, atEOF: bool\)\!: \(advance: int, token: \[\]byte\)](#scanrunes)\
[type FinalToken](#finaltoken)\
[type SplitFunc](#splitfunc)\
[struct Scanner](#scanner)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut r: io::Reader\): &amp;Scanner](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Token\(mut self\): \[\]byte](#token)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Text\(self\): str](#text)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EOF\(self\): bool](#eof)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scan\(mut self\)\!: bool](#scan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Split\(mut self, split: SplitFunc\)](#split)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Buffer\(mut self, mut buf: \[\]byte, max: int\)](#buffer)

## Variables

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
fn Token(mut self): []byte
```
Returns the most recent token generated by a call to \[Scanner\.Scan\]\. The underlying array may point to data that will be overwritten by a subsequent call to Scan\. It does no allocation\.

### Text
```jule
fn Text(self): str
```
Returns the most recent token generated by a call to \[Scanner\.Scan\] as a newly allocated string holding its bytes\.

### EOF
```jule
fn EOF(self): bool
```
Reports whether scanner has reached EOF\.

### Scan
```jule
fn Scan(mut self)!: bool
```
Advances the \[Scanner\] to the next token, which will then be available through the \[Scanner\.Token\] or \[Scanner\.Text\] method\. It returns false when there are no more tokens, either by reaching the end of the input or an exceptional\. After Scan returns false, without any exceptional, it means EOF\. Any exceptional will be forwarded\. Scan panics if the split function returns too many empty tokens without advancing the input\. This is a common error mode for scanners\.

### Split
```jule
fn Split(mut self, split: SplitFunc)
```
Sets the split function for the \[Scanner\]\. The default split function is \[ScanLines\]\.

Panics if it is called after scanning has started\.

### Buffer
```jule
fn Buffer(mut self, mut buf: []byte, max: int)
```
Sets the initial buffer to use when scanning and the maximum size of buffer that may be allocated during scanning\. The maximum token size must be less than the larger of max and cap\(buf\)\. If max &lt;= cap\(buf\), \[Scanner\.Scan\] will use this buffer only and do no allocation\.

By default, \[Scanner\.Scan\] uses an internal buffer and sets the maximum token size to \[MaxTokenSize\]\.

Panics if it is called after scanning has started\.