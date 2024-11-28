# std/encoding

## Traits

```jule
trait JSONEncoder {
	fn EncodeJSON(self)!: []byte
}
```
Implements custom encoder method for JSON encoding. For types with this method, this method is called instead of the default encoding strategy and custom encoding is performed. The returned bytes must be a valid JSON value. Otherwise, EncodeError.EncodeJSON exception is thrown. Throwing any exception is considered valid. The thrown exception will be forwarded by the Encode. Successful encoding should not throw any exceptions.

---

```jule
trait JSONDecoder {
	fn DecodeJSON(mut self, data: []byte)!
}
```
Implements custom decoder method for JSON decoding. For types with this method, this method is called instead of the default decoding strategy and custom decoding is performed. The data parameter is the corresponding data equivalent and is always a validated, error-free JSON data. It is a mutable copy taken from the data used for decoding, so any change may cause mutation in the main data. According to the defined behavior, decoder methods should not mutate the content of the data. Throwing any exception is considered valid. The thrown exception will be forwarded by the Decode. Successful decoding should not throw any exceptions and self should be changed as required.

---

```jule
trait TextEncoder {
	fn EncodeText(self)!: []byte
}
```
Implements custom encoder method for text encoding. For types with this method, this method is called instead of the default encoding strategy and custom encoding is performed. Throwing any exception is considered valid. The thrown exception will be forwarded by the encoder. Successful encoding should not throw any exceptions. It should return UTF-8 encoded text in bytes.

---

```jule
trait TextDecoder {
	fn DecodeText(mut self, data: []byte)!
}
```
Implements custom decoder method for text decoding. For types with this method, this method is called instead of the default decoding strategy and custom decoding is performed. The data parameter is the corresponding data equivalent and is always UTF-8 encoded text in bytes. It may be a mutable copy taken from the data used for decoding, so any change may cause mutation in the main data. According to the defined behavior, decoder methods should not mutate the content of the data. Throwing any exception is considered valid. The thrown exception will be forwarded by the decoder. Successful decoding should not throw any exceptions and self should be changed as required.