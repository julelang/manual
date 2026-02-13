# std/jule/resource

## Index

[trait File](#file)



## File
```jule
trait File {
	// Returns path of the file.
	fn Path(*self): str

	// Returns file content in bytes.
	// The return value may be mutable reference to the internal buffer,
	// and mutation is not allowed.
	fn Bytes(*self): []byte

	// Returns file content in text.
	fn Text(*self): str
}
```
A general file instance for compile\-time embed files\.