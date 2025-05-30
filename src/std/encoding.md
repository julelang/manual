# std/encoding

## Index

[trait TextEncoder](#textencoder)\
[trait TextDecoder](#textdecoder)



## TextEncoder
```jule
trait TextEncoder {
	fn EncodeText(self)!: []byte
}
```
Implements custom encoder method for text encoding\. For types with this method, this method is called instead of the default encoding strategy and custom encoding is performed\. Throwing any exception is considered valid\. The thrown exception will be forwarded by the encoder\. Successful encoding should not throw any exceptions\. It should return UTF\-8 encoded text in bytes\.

## TextDecoder
```jule
trait TextDecoder {
	fn DecodeText(mut self, data: []byte)!
}
```
Implements custom decoder method for text decoding\. For types with this method, this method is called instead of the default decoding strategy and custom decoding is performed\. The data parameter is the corresponding data equivalent and is always UTF\-8 encoded text in bytes\. It may be a mutable copy taken from the data used for decoding, so any change may cause mutation in the main data\. According to the defined behavior, decoder methods should not mutate the content of the data\. Throwing any exception is considered valid\. The thrown exception will be forwarded by the decoder\. Successful decoding should not throw any exceptions and self should be changed as required\.