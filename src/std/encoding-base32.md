# std/encoding/base32

## Index

[fn EncodeLen\(b: \[\]byte, pad: bool\): int](#encodelen)\
[fn DecodeLen\(b: \[\]byte\): int](#decodelen)\
[fn Encode\(src: \[\]byte, pad: bool\): \[\]byte](#encode)\
[fn Decode\(src: \[\]byte\): \[\]byte](#decode)



## EncodeLen
```jule
fn EncodeLen(b: []byte, pad: bool): int
```
Returns length of encoded bytes of b\.

## DecodeLen
```jule
fn DecodeLen(b: []byte): int
```
Returns length of decoded bytes of b\.

## Encode
```jule
fn Encode(src: []byte, pad: bool): []byte
```
Encodes source bytes into dest with standard base32 table\. Returns encoded base32 bytes if success, nil slice if not\. Adds padding if pad is true\. Algorithm will call the append function to append dest\.

## Decode
```jule
fn Decode(src: []byte): []byte
```
Decodes source bytes into dest with standard base32 table\. Returns decoded bytes if success, nil slice if not\. Detects padding by default, no required padding specification\. Algorithm will call the append function to append dest\.