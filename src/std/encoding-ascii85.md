# std::encoding::ascii85

## Functions

```jule
fn max_encoded_len(n: int): int
```
Returns the maximum length of an encoding of n source bytes.

----

```jule
fn new_encoder(mut w: io::Writer): io::WriterCloser
```
Returns new Ascii85 encoder for stream.
Encoder forwards any exception.

---

```jule
fn new_decoder(mut r: io::Reader): io::Reader
```
Returns new Ascii85 decoder for stream.
Decoder forwards any exception.

---

```jule
fn encode(mut dest: []byte, src: []byte): int
```
Encodes src into at most max_encoded_len(src.len) bytes of dest, returning the actual number of bytes written.

The encoding handles 4-byte chunks, using a special encoding for the last fragment, so encode is not appropriate for use on individual blocks of a large data stream. Use new_encoder() instead.

Often, ascii85-encoded data is wrapped in <~ and ~> symbols. The encode does not add these.

---

```jule
fn decode(mut dest: []byte, src: []byte, flush: bool)!: (ndst: int, nsrc: int)
```
Decodes src into dest, returning both the number of bytes written to dest and the number consumed from src. If src contains invalid ascii85 data, eecode will throw exception with DecodeError.Format. Decode ignores space and control characters in src. Often, ascii85-encoded data is wrapped in <~ and ~> symbols. Decode expects these to have been stripped by the caller.

If flush is true, decode assumes that src represents the end of the input stream and processes it completely rather than wait for the completion of another 32-bit block.

new_decoder wraps an std::io::Reader trait around decode.

## Enums

```jule
enum DecodeError
```
Error codes of decode operations.

**Fields:**

- `Format`
