# std/encoding/json

## Index

[fn Decode\[T\]\(data: \[\]byte, mut &amp;v: \*T\)\!](#decode)\
[fn Encode\[T\]\(v: T\)\!: \[\]byte](#encode)\
[fn EncodeIndent\[T\]\(v: T, indent: string\)\!: \[\]byte](#encodeindent)\
[fn Valid\(data: \[\]byte\): bool](#valid)\
[type Object](#object)\
[type Array](#array)\
[type Bool](#bool)\
[type Number](#number)\
[type String](#string)\
[struct UnsupportedTypeError](#unsupportedtypeerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string-1)\
[struct UnsupportedValueError](#unsupportedvalueerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string-2)\
[struct EncodeError](#encodeerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string-3)\
[struct Encoder](#encoder)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut w: io::Writer\): &amp;Encoder](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Encode\[T\]\(\*self, v: T\)\!](#encode-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetIndent\(mut \*self, indent: string\)](#setindent)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetMaxNestedDepth\(mut \*self, depth: int\)](#setmaxnesteddepth)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetEscapeHTML\(mut \*self, escape: bool\)](#setescapehtml)\
[struct Decoder](#decoder)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut r: io::Reader\): &amp;Decoder](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decode\[T\]\(\*self, mut &amp;v: \*T\)\!: int](#decode-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetMaxNestedDepth\(mut \*self, depth: int\)](#setmaxnesteddepth-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn InputOffset\(\*self\): i64](#inputoffset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DisallowUnknownFields\(\*self\)](#disallowunknownfields)\
[enum Value: type ](#value)



## Decode
```jule
fn Decode[T](data: []byte, mut &v: *T)!
```
Implements decoding of JSON as defined in RFC 7159\.

The algorithm is optimized for efficiency, performance and minimum runtime\. Uses generics and Jule&#39;s comptime\. Type analysis guaranteed to be completed at compile\-time\.

Implementation supports only Jule types, excluding external types\.

Decoding details:<br>
```
Since this function designed for comptime type analysis, the type [T] should
be valid type for comptime. The type [any], which is stores dynamic type, is not valid.
Any unsupported type causes error with [UnsupportedTypeError].
Any incompatible value for type, invalid literal or something else causes
error with [UnsupportedTypeError].

Signed/Unsigned Integers, Floating-Points:
	Decode as JSON numbers.

Booleans:
	Decode as JSON booleans.

Strings:
	Decode as JSON strings. Invalid UTF-8 or invalid UTF-16 surrogate pairs
	are not treated as an error. Instead, they are replaced by the
	Unicode replacement character U+FFFD.

Structs:
	Decode as JSON objects with only visible fields of struct.

	The private and anonymous fields will be ignored.
	If the field is public, the field name will be used.
	If the field have a json tag, the json tag will be used even if field is private or anonymous.
	If the field have json tag but it is duplicate, the field will be ignored.
	A valid JSON tag must contain only Unicode letter, digit or punctuation
	except quote chars and backslash.

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
	Other types will cause error with [UnsupportedTypeError].

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
Decode cannot handle cyclic data structures and will enforce a strict nesting limit\. Passing cyclic structures or data exceeding 256 nested levels will throw an error to prevent recursive call stack overflow and system crashes\.

Supported trait implementations by higher\-to\-lower precedence \(having methods without implementing the trait is valid\):<br>
```
JSONDecoder, TextDecoder
```
Decode validates the JSON data on the fly rather than beforehand\. As a result, when decoding invalid JSON data, certain modifications may be made to the target memory until an error is encountered, which can lead to partially decoded data\. If you require absolute accuracy beforehand, validate the JSON data using the \`Valid\` function\.

## Encode
```jule
fn Encode[T](v: T)!: []byte
```
Implements encoding of JSON as defined in RFC 7159\.

The algorithm is optimized for efficiency, performance and minimum runtime\. Uses generics and Jule&#39;s comptime\. Type analysis guaranteed to be completed at compile\-time\. Also this function is no\-overhead guaranteed\. So just implements plain encoding algorithm without unnecessary algorithms such as indentation handling\.

Implementation supports only Jule types, excluding external types\.

Encoding details:<br>
```
Since this function designed for comptime type analysis, the type [T] should
be valid type for comptime. The type [any], which is stores dynamic type, is not valid.
Any unsupported type causes error with [UnsupportedTypeError].

Signed/Unsigned Integers, Floating-Points:
	Encode as JSON numbers.
	For floating-points, NaN or ±Inf will cause error with [UnsupportedValueError].

Booleans:
	Encode as JSON booleans.

Strings:
	Encode as JSON strings coerced to valid UTF-8, replacing invalid bytes
	with the Unicode replacement rune. So that the JSON will be safe to embed
	inside HTML <script> tags, the string is encoded using [HTMLEscape],
	which replaces "<", ">", "&", U+2028, and U+2029 are escaped
	to "\u003c", "\u003e", "\u0026", "\u2028", and "\u2029".

Structs:
	Encode as JSON objects with only visible fields of struct.

	The private and anonymous fields will be ignored.
	If the field is public, the field name will be used.
	If the field have a json tag, the json tag will be used even if field is private or anonymous.
	If the field have json tag but it is duplicate, the field will be ignored.
	A valid JSON tag must contain only Unicode letter, digit or punctuation
	except quote chars and backslash.

Arrays:
	Encode as JSON array.

Slices:
	Encode as JSON array.
	If slice is nil, encode as empty array [] JSON value.
	For the []byte type, encodes as a base64-encoded string.

Maps:
	Encode as JSON object.
	If map is nil, encode as empty object {} JSON value.
	The keys of the map always will be quoted.
	Also map's key type only can be: signed integer, unsigned integer and string.
	Other types will cause error with [UnsupportedTypeError].

Smart Pointers:
	If smart pointer is nil, encode as null JSON value.
	Otherwise, will encode dereferenced value.
```
Encode cannot handle cyclic data structures and will enforce a strict nesting limit\. Passing cyclic structures or data exceeding 256 nested levels will throw an error to prevent recursive call stack overflow and system crashes\.

Supported trait implementations by higher\-to\-lower precedence \(having methods without implementing the trait is valid\):<br>
```
JSONEncoder, TextEncoder
```


## EncodeIndent
```jule
fn EncodeIndent[T](v: T, indent: string)!: []byte
```
Same as Encode\[T\] function but enables indentation\.

## Valid
```jule
fn Valid(data: []byte): bool
```
Reports whether data is a valid JSON encoding\.

## Object
```jule
type Object: map[string]Value
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
type String: string
```
Dynamic JSON string type\.

## UnsupportedTypeError
```jule
struct UnsupportedTypeError {
	Type: string
}
```
Returned by \[Encode\] and \[EncodeIndent\] when attempting to encode an unsupported value type\.

### String
```jule
fn String(*self): string
```


## UnsupportedValueError
```jule
struct UnsupportedValueError {
	Value: string
}
```
Returned by \[Encode\] and \[EncodeIndent\] when attempting to encode an unsupported value\.

### String
```jule
fn String(*self): string
```


## EncodeError
```jule
struct EncodeError {
	Type:       string
	Err:        any
	// NOTE: contains filtered hidden or unexported fields
}
```
Represents an error from calling a reserved \[EncodeText\] method\.

### String
```jule
fn String(*self): string
```


## Encoder
```jule
struct Encoder {
	// NOTE: contains filtered hidden or unexported fields
}
```
An Encoder writes JSON values to an output stream\.

### New
```jule
fn New(mut w: io::Writer): &Encoder
```
Returns a new encoder that writes to w\.

### Encode
```jule
async fn Encode[T](*self, v: T)!
```
Writes the JSON encoding of v to the stream, followed by a newline character\.

See the documentation for \[Encode\] for details about the conversion of Jule values to JSON\.

### SetIndent
```jule
fn SetIndent(mut *self, indent: string)
```
Enables indentation for each subsequent encoded value\. Calling SetIndent\(&#34;&#34;\) disables indentation\.

### SetMaxNestedDepth
```jule
fn SetMaxNestedDepth(mut *self, depth: int)
```
Sets maximum nested depth limit\. Panics if depth is a negative value\.

### SetEscapeHTML
```jule
fn SetEscapeHTML(mut *self, escape: bool)
```
Specifies whether problematic HTML characters should be escaped inside JSON quoted strings\. The default behavior is to escape &amp;, &lt;, and &gt; to \\u0026, \\u003c, and \\u003e to avoid certain safety problems that can arise when embedding JSON in HTML\.

In non\-HTML settings where the escaping interferes with the readability of the output, SetEscapeHTML\(false\) disables this behavior\.

## Decoder
```jule
struct Decoder {
	// NOTE: contains filtered hidden or unexported fields
}
```
A Decoder reads and decodes JSON values from an input stream\.

### New
```jule
fn New(mut r: io::Reader): &Decoder
```
Returns a new decoder that reads from r\.

The decoder introduces its own buffering and may read data from r beyond the JSON values requested\.

### Decode
```jule
#disable boundary
async fn Decode[T](*self, mut &v: *T)!: int
```
Reads the next JSON\-encoded value from its input and stores it in the value pointed to by v\.

See the documentation for \[Decode\] for details about the conversion of JSON into a Jule value\.

### SetMaxNestedDepth
```jule
fn SetMaxNestedDepth(mut *self, depth: int)
```
Sets maximum nested depth limit\. Panics if depth is a negative value\.

### InputOffset
```jule
fn InputOffset(*self): i64
```
Returns the input stream byte offset of the current decoder position\. The offset gives the location of the end of the most recently returned token and the beginning of the next token\.

### DisallowUnknownFields
```jule
fn DisallowUnknownFields(*self)
```
Causes the Decoder to throw an error when the destination is a struct and the input contains object keys which do not match any non\-ignored, exported fields in the destination\.

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