# std/encoding/ascii85

## Index

[fn MaxEncodeLen\(n: int\): int](#maxencodelen)\
[fn NewEncoder\(mut w: io::Writer\): io::WriteCloser](#newencoder)\
[fn NewDecoder\(mut r: io::Reader\): io::Reader](#newdecoder)\
[fn Encode\(mut dest: \[\]byte, src: \[\]byte\): int](#encode)\
[fn Decode\(mut dest: \[\]byte, src: \[\]byte, flush: bool\)\!: \(ndst: int, nsrc: int\)](#decode)\
[type CorruptInputError](#corruptinputerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)



## MaxEncodeLen
```jule
fn MaxEncodeLen(n: int): int
```
Returns the maximum length of an encoding of n source bytes\.

## NewEncoder
```jule
fn NewEncoder(mut w: io::Writer): io::WriteCloser
```
Returns new Ascii85 encoder for stream\. Encoder forwards any exception\. The Close method of the encoder flushes any pending output\. It is an error to call write after calling close\.

## NewDecoder
```jule
fn NewDecoder(mut r: io::Reader): io::Reader
```
Returns new Ascii85 decoder for stream\. Decoder forwards any exception\.

## Encode
```jule
fn Encode(mut dest: []byte, src: []byte): int
```
Encodes src into at most MaxEncodeLen\(len\(src\)\) bytes of dest, returning the actual number of bytes written\.

The encoding handles 4\-byte chunks, using a special encoding for the last fragment, so encode is not appropriate for use on individual blocks of a large data stream\. Use NewEncoder\(\) instead\.

Often, ascii85\-encoded data is wrapped in &lt;\~ and \~&gt; symbols\. The encode does not add these\.

## Decode
```jule
fn Decode(mut dest: []byte, src: []byte, flush: bool)!: (ndst: int, nsrc: int)
```
Decodes src into dest, returning both the number of bytes written to dest and the number consumed from src\. If src contains invalid ascii85 data, encode will throw exception with CorruptInputError\. Decode ignores space and control characters in src\. Often, ascii85\-encoded data is wrapped in &lt;\~ and \~&gt; symbols\. Decode expects these to have been stripped by the caller\.

If flush is true, decode assumes that src represents the end of the input stream and processes it completely rather than wait for the completion of another 32\-bit block\.

NewDecoder wraps an io::Reader trait around decode\.

## CorruptInputError
```jule
type CorruptInputError: i64
```
If src was short, discard the low destination bytes\.

### Str
```jule
fn Str(self): str
```