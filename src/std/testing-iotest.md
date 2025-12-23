# std/testing/iotest

## Index

[fn OneByteReader\(mut r: io::Reader\): io::Reader](#onebytereader)\
[fn HalfReader\(mut r: io::Reader\): io::Reader](#halfreader)\
[fn DataErrReader\(mut r: io::Reader\): io::Reader](#dataerrreader)



## OneByteReader
```jule
fn OneByteReader(mut r: io::Reader): io::Reader
```
Returns a Reader that implements each non\-empty Read by reading one byte from r\.

## HalfReader
```jule
fn HalfReader(mut r: io::Reader): io::Reader
```
Returns a Reader that implements Read by reading half as many requested bytes from r\.

## DataErrReader
```jule
fn DataErrReader(mut r: io::Reader): io::Reader
```
Changes the way errors are handled by a Reader\. Normally, a Reader returns an error from the first Read call after the last piece of data is read\. DataErrReader wraps a Reader and changes its behavior so the final error is returned along with the final data, instead of in the first call after the final data\.