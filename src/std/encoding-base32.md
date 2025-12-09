# std/encoding/base32

## Index

[Variables](#variables)\
[fn NewEncoder\(mut enc: &amp;Encoding, mut w: io::Writer\): io::WriteCloser](#newencoder)\
[fn NewDecoder\(mut enc: &amp;Encoding, mut r: io::Reader\): io::Reader](#newdecoder)\
[type CorruptInputError](#corruptinputerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
[struct Encoding](#encoding)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(table: str, padding: byte\): &amp;Encoding](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EncodedLen\(\*self, n: int\): int](#encodedlen)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DecodedLen\(\*self, n: int\): int](#decodedlen)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Encode\(\*self, mut dst: \[\]byte, src: \[\]byte\)](#encode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendEncode\(\*self, mut dst: \[\]byte, src: \[\]byte\): \[\]byte](#appendencode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EncodeToStr\(\*self, src: \[\]byte\): str](#encodetostr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decode\(\*self, mut dst: \[\]byte, src: \[\]byte\)\!: \(n: int\)](#decode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendDecode\(\*self, mut dst: \[\]byte, src: \[\]byte\)\!: \[\]byte](#appenddecode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DecodeStr\(\*self, s: str\)\!: \[\]byte](#decodestr)

## Variables

```jule
let mut StdEncoding = Encoding.New("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", StdPadding)
```
The standard base32 encoding, as defined in RFC 4648\.

---

```jule
let mut HexEncoding = Encoding.New("0123456789ABCDEFGHIJKLMNOPQRSTUV", StdPadding)
```
The “Extended Hex Alphabet” defined in RFC 4648\. It is typically used in DNS\.

---

```jule
const (
	StdPadding: byte = '=' // Standard padding character.
	NoPadding:  byte = 0   // No padding.
)
```


## NewEncoder
```jule
fn NewEncoder(mut enc: &Encoding, mut w: io::Writer): io::WriteCloser
```
Returns a new base32 stream encoder\. Data written to the returned writer will be encoded using enc and then written to w\. Base32 encodings operate in 5\-byte blocks; when finished writing, the caller must Close the returned encoder to flush any partially written blocks\.

## NewDecoder
```jule
fn NewDecoder(mut enc: &Encoding, mut r: io::Reader): io::Reader
```
Constructs a new base32 stream decoder\.

## CorruptInputError
```jule
type CorruptInputError: i64
```


### Str
```jule
fn Str(*self): str
```


## Encoding
```jule
struct Encoding {
	// NOTE: contains filtered hidden or unexported fields
}
```
A radix 32 encoding/decoding scheme, defined by a 32\-character alphabet\. The most common is the &#34;base32&#34; encoding introduced for SASL GSSAPI and standardized in RFC 4648\. The alternate &#34;base32hex&#34; encoding is used in DNSSEC\.

### New
```jule
fn New(table: str, padding: byte): &Encoding
```
Returns a new padded Encoding defined by the given alphabet, which must be a 32\-byte string that contains unique byte values and does not contain the padding character or CR / LF \(&#39;\\r&#39;, &#39;\\n&#39;\)\. The alphabet is treated as a sequence of byte values without any special treatment for multi\-byte UTF\-8\.

### EncodedLen
```jule
fn EncodedLen(*self, n: int): int
```
Returns the length in bytes of the base32 encoding of an input buffer of length n\.

### DecodedLen
```jule
fn DecodedLen(*self, n: int): int
```
Returns the maximum length in bytes of the decoded data corresponding to n bytes of base32\-encoded data\.

### Encode
```jule
fn Encode(*self, mut dst: []byte, src: []byte)
```
Encodes src using the encoding, writing \[Encoding\.EncodedLen\]\(len\(src\)\) bytes to dst\.

The encoding pads the output to a multiple of 8 bytes, so Encode is not appropriate for use on individual blocks of a large data stream\. Use \[NewEncoder\] instead\.

It panics if len\(dst\) is not enough for encoded length\.

### AppendEncode
```jule
fn AppendEncode(*self, mut dst: []byte, src: []byte): []byte
```
Appends the base32 encoded src to dst and returns the extended buffer\.

### EncodeToStr
```jule
fn EncodeToStr(*self, src: []byte): str
```
Returns the base32 encoding of src\.

### Decode
```jule
fn Decode(*self, mut dst: []byte, src: []byte)!: (n: int)
```
Decodes src using the encoding\. It writes at most \[Encoding\.DecodedLen\]\(len\(src\)\) bytes to dst and returns the number of bytes written\. The caller must ensure that dst is large enough to hold all the decoded data\.

It panics if len\(dst\) is not enough for decoded length\.

### AppendDecode
```jule
fn AppendDecode(*self, mut dst: []byte, src: []byte)!: []byte
```
Appends the base32 decoded src to dst and returns the extended buffer\. If the input is malformed, it returns the partially decoded src and an error\.

### DecodeStr
```jule
fn DecodeStr(*self, s: str)!: []byte
```
Returns the bytes represented by the base32 string s\. If the input is malformed, it returns the partially decoded data\.