# std/encoding/base64

## Index

[fn EncodeLen(b: \[\]byte, pad: bool): int](#encodelen)\
[fn DecodeLen(b: \[\]byte): int](#decodelen)\
[fn Encode(src: \[\]byte, pad: bool): \[\]byte](#encode)\
[fn EncodeUrl(src: \[\]byte): \[\]byte](#encodeurl)\
[fn Decode(src: \[\]byte): \[\]byte](#decode)\
[fn DecodeUrl(src: \[\]byte): \[\]byte](#decodeurl)



## EncodeLen
```jule
fn EncodeLen(b: []byte, pad: bool): int
```
Returns length of encoded bytes of b.

## DecodeLen
```jule
fn DecodeLen(b: []byte): int
```
Returns length of decoded bytes of b.

## Encode
```jule
fn Encode(src: []byte, pad: bool): []byte
```
Encodes source bytes with standard base64 table. Returns encoded base64 bytes if success, nil slice if not. Adds padding if pad is true.

## EncodeUrl
```jule
fn EncodeUrl(src: []byte): []byte
```
Encodes source bytes with url base64 table. It is typically used for URLs and file names. Returns encoded base64 bytes if success, nil slice if not.

## Decode
```jule
fn Decode(src: []byte): []byte
```
Decodes source bytes with standard base64 table. Returns decoded bytes if success, nil slice if not. Detects padding by default, no required padding specification.

## DecodeUrl
```jule
fn DecodeUrl(src: []byte): []byte
```
Decodes source bytes with url base64 table. It is typically used for URLs and file names. Returns decoded bytes if success, nil slice if not.