# std/encoding/json

## Index

[fn Encode\[T\]\(t: T\)\!: \[\]byte](#encode)\
[fn EncodeIndent\[T\]\(t: T, indent: str\)\!: \[\]byte](#encodeindent)\
[fn Valid\(data: \[\]byte\): bool](#valid)\
[fn Decode\[T\]\(data: \[\]byte, mut &amp;t: T\)\!](#decode)\
[type Object](#object)\
[type Array](#array)\
[type Bool](#bool)\
[type Number](#number)\
[type String](#string)\
[enum EncodeError](#encodeerror)\
[enum DecodeError](#decodeerror)\
[enum Value: type ](#value)



## Encode
```jule
fn Encode[T](t: T)!: []byte
```
Implements encoding of JSON as defined in RFC 7159\.

The algorithm is optimized for efficiency, performance and minimum runtime\. Uses generics and Jule&#39;s comptime\. Type analysis guaranteed to be completed at compile\-time\. Also this function is no\-overhead guaranteed\. So just implements plain encoding algorithm without unnecessary algorithms such as indentation handling\.

Implementation supports only Jule types, excluding binded types\.

Encoding details:<br>
```
Since this function designed for comptime type analysis, the type [T] should
be valid type for comptime. The type [any], which is stores dynamic type, is not valid.
Any unsupported type causes exceptional with [EncodeError.UnsupportedType].

Signed/Unsigned Integers, Floating-Points:
	Encode as JSON numbers.
	For floating-points, NaN or ±Inf will cause exceptional with [EncodeError.UnsupportedFloatValue].

Booleans:
	Encode as JSON booleans.

Strings:
	Encode as JSON strings coerced to valid UTF-8, replacing invalid bytes
	with the Unicode replacement rune. So that the JSON will be safe to embed
	inside HTML <script> tags, the string is encoded using [HTMLEscape],
	which replaces "<", ">", "&", U+2028, and U+2029 are escaped
	to "\u003c", "\u003e", "\u0026", "\u2028", and "\u2029".

Structs:
	Encode as JSON objects with only public fields of struct.

Arrays:
	Encode as JSON array.

Slices:
	Encode as JSON array.
	If slice is nil, encode as null JSON value.
	For the []byte type, encodes as a base64-encoded string.

Maps:
	Encode as JSON object.
	If map is nil, encode as null JSON value.
	The keys of the map always will be quoted.
	Also map's key type only can be: signed integer, unsigned integer and string.
	Other types will cause exceptional with [EncodeError.UnsupportedType].

Smart Pointers:
	If smart pointer is nil, encode as null JSON value.
	Otherwise, will encode dereferenced value.
```
Encode cannot represent cyclic data structures and does not handle them\. Passing cyclic structures for encoding will result in an cycle at runtime\. Too many nested types are not specifically checked and may cause too many recursive function calls, resulting in a crash at runtime\. As a result of the tests, it is recommended that a data type can carry a maximum of 10000 nested data\. However, tousands of nested\-data is always risky even below 10000\.

Supported trait implementations by higher\-to\-lower precedence \(having methods without implementing the trait is valid\):<br>
```
JSONEncoder, TextEncoder
```


## EncodeIndent
```jule
fn EncodeIndent[T](t: T, indent: str)!: []byte
```
Same as Encode\[T\] function but enables indentation\.

## Valid
```jule
fn Valid(data: []byte): bool
```
Reports whether data is a valid JSON\.

## Decode
```jule
fn Decode[T](data: []byte, mut &t: T)!
```
Implements decoding of JSON as defined in RFC 7159\.

The algorithm is optimized for efficiency, performance and minimum runtime\. Uses generics and Jule&#39;s comptime\. Type analysis guaranteed to be completed at compile\-time\.

Implementation supports only Jule types, excluding binded types\.

Decoding details:<br>
```
Since this function designed for comptime type analysis, the type [T] should
be valid type for comptime. The type [any], which is stores dynamic type, is not valid.
Any unsupported type causes exceptional with [DecodeError.UnsupportedType].
Any incompatible value for type, invalid literal or something else causes
exceptional with [DecodeError.UnsupportedType].

Signed/Unsigned Integers, Floating-Points:
	Decode as JSON numbers.

Booleans:
	Decode as JSON booleans.

Strings:
	Decode as JSON strings. Invalid UTF-8 or invalid UTF-16 surrogate pairs
	are not treated as an exception. Instead, they are replaced by the
	Unicode replacement character U+FFFD.

Structs:
	Decode as JSON objects with only public fields of struct.

Arrays:
	Decode as JSON array.
	If array size is larger than JSON array, algorithm will change the
	remain data to zero-value for data-type.

Slices:
	Decode as JSON array.
	For the []byte type, decodes strings as a base64-encoded string if the input
	is string, otherwise decodes as JSON array.

Maps:
	Decode as JSON object.
	Map's key type only can be: signed integer, unsigned integer and string.
	Other types will cause exceptional with [DecodeError.UnsupportedType].

Smart Pointers:
	If smart pointer is nil, will be allocated by the algorithm for decoding.
	Otherwise, will decode into dereferenced value.
```
Dynamic decoding details:<br>
```
Dynamic JSON decoding uses dynamic JSON types:
Value, Object, Array, Bool, Number, and String.
No dynamic decoding can be achieved outside of these types;
for example, the [any] type is not supported.
If you want to obtain any JSON value, use [Value] instead.

Dynamic decoding will always decode using dynamic types;
	nil    -> for JSON null
	Object -> for JSON object
	Array  -> for JSON array
	Bool   -> for JSON boolean
	Number -> for JSON number
	String -> for JSON string

If you use Value as destination type, it may store any JSON value,
and the type will be determined dynamically based on the JSON value.
```
Too many nested types are not specifically checked and may cause too many recursive function calls, resulting in a crash at runtime\. As a result of the tests, it is recommended that a data type can carry a maximum of 10000 nested data\. However, tousands of nested\-data is always risky even below 10000\.

Supported trait implementations by higher\-to\-lower precedence \(having methods without implementing the trait is valid\):<br>
```
JSONDecoder, TextDecoder
```


## Object
```jule
type Object: map[str]Value
```
Dynamic JSON object type\.

## Array
```jule
type Array: []Value
```
Dynamic JSON array type\.

## Bool
```jule
type Bool: bool
```
Dynamic JSON boolean type\.

## Number
```jule
type Number: f64
```
Dynamic JSON number type\.

## String
```jule
type String: str
```
Dynamic JSON string type\.

## EncodeError
```jule
enum EncodeError {
	UnsupportedType,
	UnsupportedFloatValue, // NaN or ±Inf
	EncodeJSON,            // EncodeJSON returned invalid JSON value
}
```
JSON encoding error codes\.

## DecodeError
```jule
enum DecodeError {
	UnsupportedType,
	UnexpectedEnd, // Unexpected end of JSON input.
	ExceededMaxDepth,
	MissingBeginningOfValue,
	InvalidToken,
	InvalidValue,
}
```
JSON decoding error codes\.

## Value
```jule
enum Value: type {
	Object,
	Array,
	Bool,
	Number,
	String,
}
```
Dynamic JSON value type\. Can store any JSON value\.