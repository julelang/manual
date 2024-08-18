# std::encoding::json

## Functions

```jule
fn Valid(data: []byte): bool
```
Reports whether data is a valid JSON.

---

```jule
fn Decode[T](data: []byte, mut &t: T)!
```
Implements decoding of JSON as defined in RFC 7159.

The algorithm is optimized for efficiency, performance and minimum runtime. Uses generics and Jule's comptime. Type analysis guaranteed to be completed at compile-time.

Implementation supports only Jule types, excluding binded types.

**Decoding details:**\
Since this function designed for comptime type analysis, the type `T` should be valid type for comptime. The type `any`, which is stores dynamic type, is not valid. Any unsupported type causes exceptional with `JSONDecodeError.UnsupportedType`. Any incompatible value for type, invalid literal or something else causes exceptional with `JSONDecodeError.UnsupportedType`.

**Signed/Unsigned Integers, Floating-Points:**\
Decode as JSON numbers.

**Booleans:**\
Decode as JSON booleans.

**Strings:**\
Decode as JSON strings. Invalid UTF-8 or invalid UTF-16 surrogate pair are not treated as an exception. Instead, they are replaced by the Unicode replacement character U+FFFD.

**Structs:**\
Decode as JSON objects with only public fields of struct.

**Arrays:**\
Decode as JSON array. If array size is larger than JSON array, algorithm will change the remain data to zero-value for data-type.

**Slices:**\
Decode as JSON array. For the `[]byte` type, decodes strings as a base64-encoded string if the input is string, otherwise decodes as JSON array.

**Maps:**\
Decode as JSON object. Map's key type only can be: signed integer, unsigned integer and string. Other types will cause exceptional with `JSONDecodeError.UnsupportedType`.

**Smart Pointers:**\
If smart pointer is nil, will be allocated by the algorithm for decoding. Otherwise, will decode into dereferenced value.

Too many nested types are not specifically checked and may cause too many recursive function calls, resulting in a crash at runtime. As a result of the tests, it is recommended that a data type can carry a maximum of 10000 nested data. However, tousands of nested-data is always risky even below 10000.

---

```jule
fn Encode[T](t: T)!: []byte
```
Implements encoding of JSON as defined in RFC 7159.

The algorithm is optimized for efficiency, performance and minimum runtime. Uses generics and Jule's comptime. Type analysis guaranteed to be completed at compile-time. Also this function is no-overhead guaranteed. So just implements plain encoding algorithm without unnecessary algorithms such as indentation handling.

Implementation supports only Jule types, excluding binded types.

**Encoding details:**\
Since this function designed for comptime type analysis, the type `T` should be valid type for comptime. The type `any`, which is stores dynamic type, is not valid. Any unsupported type causes exceptional with `JSONEncodeError.UnsupportedType`.

**Signed/Unsigned Integers, Floating-Points:**\
Encode as JSON numbers. For floating-points, NaN or ±Inf will cause exceptional with `JSONEncodeError.UnsupportedFloatValue`.

**Booleans:**
Encode as JSON booleans.

**Strings:**\
Encode as JSON strings coerced to valid UTF-8, replacing invalid bytes with the Unicode replacement rune. So that the JSON will be safe to embed inside HTML `<script>` tags, the string is encoded using `HTMLEscape`, which replaces `<`, `>`, `&`, `U+202,8`, and `U+2029` are escaped to `\u003c`, `\u003e`, `\u0026`, `\u2028`, and `\u2029`.

**Structs:**\
Encode as JSON objects with only public fields of struct.

**Arrays:**\
Encode as JSON array.

**Slices:**\
Encode as JSON array. If slice is nil, encode as null JSON value. For the `[]byte` type, encodes as a base64-encoded string.

**Maps:**\
Encode as JSON object. If map is nil, encode as null JSON value. The keys of the map always will be quoted. Also map's key type only can be: signed integer, unsigned integer and string. Other types will cause exceptional with `JSONEncodeError.UnsupportedType`.

**Smart Pointers:**\
If smart pointer is nil, encode as null JSON value. Otherwise, will encode dereferenced value.

Encode cannot represent cyclic data structures and does not handle them. Passing cyclic structures for encoding will result in an cycle at runtime. Too many nested types are not specifically checked and may cause too many recursive function calls, resulting in a crash at runtime. As a result of the tests, it is recommended that a data type can carry a maximum of 10000 nested data. However, tousands of nested-data is always risky even below 10000.

---

```jule
fn EncodeIndent[T](t: T, indent: str)!: []byte
```
Same as the `Encode[T]` function but enables identation.

## Enums

```jule
enum JSONEncodeError
```
JSON encoding error codes.

**Fields:**
- `UnsupportedType`
- `UnsupportedFloatValue`: `NaN` or `±Inf`

---

```jule
enum JSONDecodeError
```
JSON decoding error codes.

**Fields:**
- `UnsupportedType`
- `UnexpectedEnd`
- `ExceededMaxDepth`
- `MissingBeginningOfValue`
- `InvalidToken`
- `InvalidValue`