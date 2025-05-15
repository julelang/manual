# JSON

JSON (JavaScript Object Notation) is a widely used lightweight data interchange format. It is based on a subset of the JavaScript programming language, but is language-independent and widely used in many programming environments. JSON represents data as key-value pairs and arrays of values ​​within objects using a simple and clean syntax.

Jule supports encoding and decoding in JSON with the [`std/encoding/json`](/std/encoding-json) package. This package is comptime empowered, designed for efficient JSON handling. Unlike runtime-based reflection implementations, all type analysis will be done at comptime.

**Visibility Rules of Structs**
Structures are most commonly used to work with JSON data. By default, Jule structures follow specific visibility rules during JSON encoding and decoding:

- Only public (exported) fields are processed.
- The field name is directly used as the JSON key name.
- The field name is treated in a case-sensitive manner.

## Encoding

The [Encode](/std/encoding-json#encode) function will encode the type and return the data in bytes. This is an exceptional function, so error handling needed.

For example:
```jule
use "std/encoding/json"

struct User {
	ID:    int
	Name:  str
	Email: str
}

fn main() {
	u := User{
		ID: 123,
		Name: "John",
		Email: "john@example.com",
	}
	data := json::Encode(u)!
	println(str(data))
}
```
In the example above, an instance of the `User` structure is encoded into JSON and the resulting output is written to stdout as a string.

### Encoding with Indentation

The [EncodeIndent](/std/encoding-json#encodeindent) function will encode like the Encode function, but it will adds identation where it needed. The indentation string determinated by the function caller. Tabs or spaces are recommended for indentation.

For example:
```jule
json::EncodeIndent(u, "\t")!
```
In the example above, an instance of the `User` structure from previous example is encoded into JSON and the resulting output is written to stdout as a string. But the output will be more pretty and indented with tabs.

## Decoding

The [Decode](/std/encoding-json#decode) function will decode the JSON data to destination type. This is an exceptional function, so error handling needed.

For example:
```jule
json := []byte(`{"ID":123,"Name":"John","Email":"john@example.com"}`)
mut u := User{}
json::Decode(json, u)!
println(u)
```
In the example above, an instance of the `User` structure from previous example is decoded to variable `u` from the JSON representation.

### Dynamic JSON Types

Since the JSON package does not use runtime-based reflection, it cannot handle dynamic types at runtime. Therefore, you can process JSON data dynamically by using the dynamic types provided by the JSON package.

Mapping of JSON values and dynamic types:
- `nil`: JSON null
- `json::Object`: JSON object
- `json::Array`: JSON array
- `json::Bool`: JSON boolean
- `json::Number`: JSON number
- `json::String`: JSON string
- `json::Value`: all possible dynamic JSON values

For example:
```jule
json := []byte(`{"ID":123,"Name":"John","Email":"john@example.com"}`)
mut v := json::Value(nil)
json::Decode(json, v)!
u := v.(json::Object)
println(u["ID"])
println(u["Name"])
println(u["Email"])
```
In the example above, an instance of the `User` structure from previous example is decoded to variable `v` from the JSON representation. As shown in the example, the `v` variable uses the `json::Value` type. This makes it suitable for dynamically decoding any kind of JSON data. Subsequently, the `u` variable is assigned the `json::Object` value obtained from `v`. This is because the incoming JSON data is an object, and the `json::Value` type represents it internally using the `json::Object` dynamic type. Then, by using string key names, the field values can be accessed as `json::Value`. In this case, the `ID` field will be of type `json::Number`, while the `Name` and `Email` fields will be of type `json::String`.

If it is known that the incoming type is an object, the `v` variable could be used directly as a `json::Object`. The decoder will successfully return as long as the incoming JSON data is an object. However, if the incoming JSON is not an object, the decoding will fail.

## Tags

The JSON encoder and decoder support a special tag naming convention. By adding a `json` tag to struct fields (see [Field Tags](/common-concepts/structures#field-tags)), you can specify the name under which each field should be encoded or decoded.

For example:
```jule
use "std/encoding/json"

struct User {
	ID:    int `json:"id"`
	Name:  str `json:"name"`
	Email: str `json:"email"`
}

fn main() {
	u := User{
		ID: 123,
		Name: "John",
		Email: "john@example.com",
	}
	data := json::Encode(u)!
	println(str(data))
}
```

In the example above, the fields of the `User` struct will be encoded and decoded using the names `id`, `name`, and `email`, instead of the default field names. By using a `json` tag as shown in the example, you can assign a custom JSON key name to each field as needed.

### Rules of Tags

Tags must follow specific rules. JSON key names can include any punctuation marks except for backslashes (`\`) and quotation marks (`"`), which are reserved and therefore not allowed. Beyond that, key names should consist of Unicode letters and numbers. Additionally, tags must be unique within the same struct—no two fields should share the same JSON key name to avoid duplication and conflict during encoding or decoding.

If a field's JSON key name is duplicated, all fields sharing that same key name will be ignored during encoding and decoding. If you assign a tag name to a non-public (unexported) field, it will still be included in the encode and decode processes despite being non-public. If you use the tag `json:"-"`, the field will be explicitly ignored and excluded from both encoding and decoding. If your tag is not valid, falling back to default naming and visibility behavior.