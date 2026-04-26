# std/encoding/base64

## Index

[Variables](#variables)\
[fn NewEncoder\(mut enc: &amp;Encoding, mut w: io::Writer\): io::WriteCloser](#newencoder)\
[fn NewDecoder\(mut enc: &amp;Encoding, mut r: io::Reader\): io::Reader](#newdecoder)\
[type CorruptInputError](#corruptinputerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
[struct Encoding](#encoding)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(encoder: str\): &amp;Encoding](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EncodedLen\(\*self, n: int\): int](#encodedlen)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DecodedLen\(\*self, n: int\): int](#decodedlen)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Clone\(\*self\): &amp;Encoding](#clone)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WithPadding\(mut &amp;self, padding: rune\): &amp;Encoding](#withpadding)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Strict\(mut &amp;self\): &amp;Encoding](#strict)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Encode\(\*self, mut dst: \[\]byte, src: \[\]byte\)](#encode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendEncode\(\*self, mut dst: \[\]byte, src: \[\]byte\): \[\]byte](#appendencode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EncodeToStr\(\*self, src: \[\]byte\): str](#encodetostr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decode\(\*self, mut dst: \[\]byte, src: \[\]byte\)\!: \(n: int\)](#decode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendDecode\(\*self, mut dst: \[\]byte, src: \[\]byte\)\!: \[\]byte](#appenddecode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DecodeStr\(\*self, s: str\)\!: \[\]byte](#decodestr)

## Variables

```jule
const (
	StdPadding: rune = '=' // Standard padding character
	NoPadding:  rune = -1  // No padding
)
```


---

```jule
let mut StdEncoding = Encoding.New("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
```
The standard base64 encoding, as defined in RFC 4648\. Mutation is undefined behavior\.

---

```jule
let mut URLEncoding = Encoding.New("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
```
The alternate base64 encoding defined in RFC 4648\. It is typically used in URLs and file names\. Mutation is undefined behavior\.

---

```jule
let mut RawStdEncoding = StdEncoding.Clone().WithPadding(NoPadding)
```
The standard raw, unpadded base64 encoding, as defined in RFC 4648 section 3\.2\. This is the same as \[StdEncoding\] but omits padding characters\. Mutation is undefined behavior\.

---

```jule
let mut RawURLEncoding = URLEncoding.Clone().WithPadding(NoPadding)
```
The unpadded alternate base64 encoding defined in RFC 4648\. It is typically used in URLs and file names\. This is the same as \[URLEncoding\] but omits padding characters\. Mutation is undefined behavior\.

## NewEncoder
```jule
fn NewEncoder(mut enc: &Encoding, mut w: io::Writer): io::WriteCloser
```
NewEncoder returns a new base64 stream encoder\. Data written to the returned writer will be encoded using enc and then written to w\. Base64 encodings operate in 4\-byte blocks; when finished writing, the caller must Close the returned encoder to flush any partially written blocks\.

## NewDecoder
```jule
fn NewDecoder(mut enc: &Encoding, mut r: io::Reader): io::Reader
```
Returns a new base64 stream decoder\.

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
A radix 64 encoding/decoding scheme, defined by a 64\-character alphabet\. The most common encoding is the &#34;base64&#34; encoding defined in RFC 4648 and used in MIME \(RFC 2045\) and PEM \(RFC 1421\)\. RFC 4648 also defines an alternate encoding, which is the standard encoding with \- and \_ substituted for \+ and /\.

### New
```jule
fn New(encoder: str): &Encoding
```
Returns a new padded Encoding defined by the given alphabet, which must be a 64\-byte string that contains unique byte values and does not contain the padding character or CR / LF \(&#39;\\r&#39;, &#39;\\n&#39;\)\. The alphabet is treated as a sequence of byte values without any special treatment for multi\-byte UTF\-8\. The resulting Encoding uses the default padding character \(&#39;=&#39;\), which may be changed or disabled via \[Encoding\.WithPadding\]\.

### EncodedLen
```jule
fn EncodedLen(*self, n: int): int
```
Returns the length in bytes of the base64 encoding of an input buffer of length n\.

### DecodedLen
```jule
fn DecodedLen(*self, n: int): int
```
Returns the maximum length in bytes of the decoded data corresponding to n bytes of base64\-encoded data\.

### Clone
```jule
fn Clone(*self): &Encoding
```
Returns clone of the self\.

### WithPadding
```jule
fn WithPadding(mut &self, padding: rune): &Encoding
```
Sets encoding padding to a specified padding character, or \[NoPadding\] to disable padding\. The padding character must not be &#39;\\r&#39; or &#39;\\n&#39;, must not be contained in the encoding&#39;s alphabet, must not be negative, and must be a rune equal or below &#39;\\xff&#39;\. Padding characters above &#39;\\x7f&#39; are encoded as their exact byte value rather than using the UTF\-8 representation of the codepoint\.

Returns self\.

### Strict
```jule
fn Strict(mut &self): &Encoding
```
Sets strict decoding enabled\. In this mode, the decoder requires that trailing padding bits are zero, as described in RFC 4648 section 3\.5\.

Note that the input is still malleable, as new line characters \(CR and LF\) are still ignored\.

Returns self\.

### Encode
```jule
fn Encode(*self, mut dst: []byte, src: []byte)
```
Encodes src using the encoding self, writing \[Encoding\.EncodedLen\]\(len\(src\)\) bytes to dst\.

The encoding pads the output to a multiple of 4 bytes, so Encode is not appropriate for use on individual blocks of a large data stream\. Use \[NewEncoder\] instead\.

### AppendEncode
```jule
fn AppendEncode(*self, mut dst: []byte, src: []byte): []byte
```
Appends the base64 encoded src to dst and returns the extended buffer\.

### EncodeToStr
```jule
fn EncodeToStr(*self, src: []byte): str
```
Returns the base64 encoding of src\.

### Decode
```jule
fn Decode(*self, mut dst: []byte, src: []byte)!: (n: int)
```
Decodes src using the encoding self\. It writes at most \[Encoding\.DecodedLen\]\(len\(src\)\) bytes to dst and returns the number of bytes written\. The caller must ensure that dst is large enough to hold all the decoded data\. If src contains invalid base64 data, it will return the number of bytes successfully written and \[CorruptInputError\]\. New line characters \(\\r and \\n\) are ignored\.

### AppendDecode
```jule
fn AppendDecode(*self, mut dst: []byte, src: []byte)!: []byte
```
Appends the base64 decoded src to dst and returns the extended buffer\. If the input is malformed, it returns the partially decoded src and an error\. New line characters \(\\r and \\n\) are ignored\.

### DecodeStr
```jule
fn DecodeStr(*self, s: str)!: []byte
```
Returns the bytes represented by the base64 string s\. If the input is malformed, it returns the partially decoded data and \[CorruptInputError\]\. New line characters \(\\r and \\n\) are ignored\.