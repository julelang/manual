# std/comptime

## Functions

```jule
fn TypeOf(TYPE || EXPRESSION): comptimeTypeInfo
```
Returns compile-time type information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine type in compile-time and will not executed at runtime.

::: info
All type information functionalities uses actual type (may there are exception cases). To examine and match actual types, comptime type information handling is useful.

For example:
```jule
type ByteSlice: []byte
const t = comptime::TypeOf(ByteSlice)
const match type t.Kind() {
| comptime::Kind.Slice:
	const match type t.Elem().Kind() {
	| comptime::Kind.Byte:
		// ...
	}
}
```
In the example code above, the ByteSlice type is a strict type alias. But we can examine the actual type with comptime type information api.
:::

---

```jule
fn ValueOf(EXPRESSION): comptimeValue
```
Returns compile-time value information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine and handle value in compile-time and will not executed at runtime.

---

```jule
fn TypeAlias(ident, t)
```
Emplaces a type alias declaration to statement which is this function called. Defines a type alias with ident which is alias for t. The parameter t can take type declarations or comptimeTypeInfo only.

---

```jule
fn Line(): int
```
Returns line number of statement which is this function called.
Returns as constant expression.

---

```jule
fn File(): comptimeFile
```
Returns file wrapper of source file which is this function called.

---

```jule
fn Files(): comptimeFiles
```
Returns file wrappers for source files of package which is this function called.

## Structures

```jule
struct comptimeTypeInfos
```
Private compile-time information wrapper for type infos. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeTypeInfo
```
Private compile-time type information wrapper.
Supports the `==` and `!=` operators to compare types.

**Methods:**

`fn Strict(self): bool`\
Reports whether type is constructed by a strict type alias as constant expression.

`fn Kind(self): Kind`\
Returns Kind of type.
Returns as constant expression.

`fn Str(self): str`\
Returns string value of type.
Returns as constant expression.

`fn Decl(self): comptimeDecl`\
Returns declaration information for type.
Supports only structs, traits, enums, type enums, and functions. For structures that constructed by the strict type alias, it returns declaration information for the relevant implicit struct declaration.

`fn Bits(self): int`\
Returns bitsize of type.
Supports only primitive integer and floating-point types.
Returns as constant expression.

`fn Elem(self): comptimeTypeInfo`\
Returns comptimeTypeInfo for element type. Supports only pointers (except unsafe pointer), smart pointers, arrays, slices and enums.

`fn Size(self): int`\
Returns size of array. Returns as constant expression.
Returns zero if array type is auto-sized declaration.

`fn Key(self): comptimeTypeInfo`\
Returns type information for key type.
Supports only map types.

`fn Value(self): comptimeTypeInfo`\
Returns type information for value type.
Supports only map types.

`fn Fields(self): comptimeStructFields | comptimeEnumFields`\
Returns field informations for type.
Supports only structure and enum types.
Using with built-in len function returns count of fields as constant expression.

`fn Statics(self): comptimeStatics`\
Returns static fields of type.
Supports only structure types.

`fn Params(self): comptimeParams`\
Returns parameter information for function's parameters. Supports only function types.

`fn Types(self): comptimeTypeInfos`\
Returns comptime-type information datas for tuple types.
Supports only tuple types.

`fn Result(self): comptimeTypeInfo`\
Returns compile-time information data for result type of function. Only supports function types.

`fn Binded(self): bool`\
Reports whether type is binded as constant expression.

`fn Ordered(self): bool`\
Reports whether kind supports ordered constrait as constant expression.

`fn Comparable(self): bool`\
Reports whether kind supports comparable constrait as constant expression.

`fn Mutable(self): bool`\
Reports whether kind is mutable as constant expression.

`fn CanNil(self): bool`\
Reports whether kind is nil-compatible as constant expression.

`fn GC(self): bool`\
Reports whether kind performs garbage collection as constant expression.

---

```jule
struct comptileStructFields
```
Private compile-time information wrapper for struct fields.
Supports iterable and indexing implementations.
Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptileStructField
```
Private compile-time struct field information wrapper.

**Methods:**

`fn Decl(self): comptimeDecl`\
Returns declaration information for field.

`fn Type(self): comptimeTypeInfo`\
Returns type information for field.

---

```jule
struct comptileEnumFields
```
Private compile-time information wrapper for enum fields.
Supports iterable and indexing implementations.
Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptileEnumField
```
Private compile-time enum field information wrapper.

**Methods:**

`fn Decl(self): comptimeDecl`\
Returns declaration information for field.

---

```jule
struct comptimeParams
```
Private compile-time information wrapper for function parameters. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeParam
```
Private compile-time function parameter information wrapper.

**Methods:**

`fn Decl(self): comptimeDecl`\
Returns declaration information for parameter.

`fn Recv(self): bool`\
Reports whether parameter is receiver as constant expression.

`fn Type(self): comptimeTypeInfo`\
Returns type information for parameter.

---

```jule
struct comptimeStatics
```
Private compile-time information wrapper for static fields. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeStatic
```
Private compile-time static field information wrapper.

**Methods:**

`fn Decl(self): comptimeDecl`\
Returns declaration information for parameter.

`fn Type(self): comptimeTypeInfo`\
Returns type information for parameter.

---

```jule
struct comptimeValue
```
Private compile-time value information wrapper.
Only supports classic expressions.

**Methods:**

`fn Type(self): comptimeTypeInfo`\
Returns type information for value.

`fn Lvalue(self): bool`\
Reports whether value is lvalue as constant expression.

`fn Mutable(self): bool`\
Reports whether value is mutable as constant expression.

`fn Const(self): bool`\
Reports whether value is constant as constant expression.

`fn Field(self, ident: str): comptimeValue`\
Returns comptimeValue for field access expression.
Supports only structure types.
Parameter ident should be constant.
It allows access to private fields.

`fn Method(self, ident: str): comptimeValue`\
Returns comptimeValue for method access expression.
Supports only structure types.
Parameter ident should be constant.
It allows access to private methods.
It will not use the actual kind, so this method an provide access to methods of the any strict type alias.

`fn Unwrap(self)`\
Unwraps expression for runtime execution.

---

```jule
struct comptimeFiles
```
Private compile-time information wrapper for source files.
Supports iterable and indexing implementations.
Using with built-in len function returns count of files as constant expression.

---

```jule
struct comptimeFile
```
Private compile-time file information wrapper. Provides interface for source file representation of compiler analysis.

**Methods:**

`fn Path(self): str`\
Returns path of file as constant expression.

`fn Name(self): str`\
Returns name of file as constant expression.

`fn Dir(self): str`\
Returns directory of file as constant expression.

---

```jule
struct comptimeDecls
```
Private compile-time information wrapper for `comptimeDecl`. Supports iterable and indexing implementations. Using with built-in len function returns count of files as constant expression.

---

```jule
struct comptimeDecl
```
Private compile-time declaration information wrapper. Designed for general declarations, not for instantiated/analyzed types.

List of supported types;
- variables
- functions (with parameters)
- traits (with methods)
- enums (with fields)
- type enums
- structs (with fields and methods)
- type aliases

**Methods:**

`fn Name(self): str`\
Returns name of declaration.
Returns as constant expression.

`fn Public(self): bool`\
Reports whether type is public as constant expression.

`fn Binded(self): bool`\
Reports whether type is binded as constant expression.

`fn Exceptional(self): bool`\
Reports whether function type is exceptional as constant expression. Only supports function types.

`fn Mutable(self): bool`\
Reports whether declaration is mutable as constant expression.
Supports variables, fields, and parameters.

`fn Variadic(self): bool`\
Reports whether declaration is variadic as constant expression. Supports parameters.

`fn Reference(self): bool`\
Reports whether declaration is reference as constant expression. Supports variables, and parameters.

`fn Params(self): comptimeDecls`\
Returns declaration information wrappers for function's parameters. Supports only function types.

`fn Fields(self): comptimeDecls`\
Returns declaration information wrappers for fields. Supports only structure and enum types.

`fn Statics(self): comptimeDecls`\
Returns declaration information wrappers for static fields. Supports only structure types.

`fn Methods(self): comptimeDecls`\
Returns declaration information wrappers for methods. Supports only structures and traits.

## Enums

```jule
enum Kind
```
Type kinds.

**Fields:**
- `Void`: Void
- `Int`: int
- `Uint`: uint
- `Uintptr`: uintptr
- `I8`: i8
- `I16`: i16
- `I32`: i32
- `I64`: i64
- `U8`: u8
- `U16`: u16
- `U32`: u32
- `U64`: u64
- `F32`: f32
- `F64`: f64
- `Str`: str
- `Bool`: bool
- `Any`: any
- `Array`: Array
- `Slice`: Slice
- `Map`: Map
- `Struct`: Structure
- `Trait`: Trait
- `Enum`: Enum
- `TypeEnum`: Type Enum
- `Ptr`: Raw pointer
- `UnsafePtr`: Unsafe raw pointer
- `SmartPtr`: Smart pointer
- `Func`: Function
- `Tuple`: Tuple