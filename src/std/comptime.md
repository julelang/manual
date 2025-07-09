# std/comptime

## Index

[Variables](#variables)\
[fn TypeAlias(name: str, t: T)](#typealias)\
[fn Line(): int](#line)\
[fn File(): comptimeFile](#file)\
[fn Files(): comptimeFiles](#files)\
[fn TypeOf(t: Type): comptimeTypeInfo](#typeof)\
[fn ValueOf(v: V): comptimeValue](#valueof)\
[struct comptimeFiles](#comptimeFiles)\
[struct comptimeFile](#comptimeFile)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Path(\*self): str](#path)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name(\*self): str](#name)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dir(\*self): str](#dir)\
[struct comptimeDecls](#comptimeDecls)\
[struct comptimeDecl](#comptimeDecl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name(\*self): str](#name-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Public(\*self): bool](#public)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bind(\*self): bool](#bind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exceptional(\*self): bool](#exceptional)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mutable(\*self): bool](#mutable)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Variadic(\*self): bool](#variadic)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reference(\*self): bool](#reference)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Params(\*self): comptimeDecls](#params)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fields(\*self): comptimeDecls](#fields)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Methods(\*self): comptimeDecls](#methods)\
[struct comptimeTypeInfos](#comptimeTypeInfos)\
[struct comptimeTypeInfo](#comptimeTypeInfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Strict(\*self): bool](#strict)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Kind(\*self): int](#kind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str(\*self): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decl(\*self): comptimeDecl](#decl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bits(\*self): int](#bits)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size(\*self): int](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Key(\*self): comptimeTypeInfo](#key)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Value(\*self): comptimeTypeInfo](#value)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fields(\*self): comptimeStructFields | comptimeEnumFields](#fields-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Params(\*self): comptimeParams](#params-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Types(\*self): comptimeTypeInfos](#types)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Result(\*self): comptimeTypeInfo](#result)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Bind(\*self): bool](#bind-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Ordered(\*self): bool](#ordered)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Comparable(\*self): bool](#comparable)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mutable(\*self): bool](#mutable-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CanNil(\*self): bool](#cannil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GC(\*self): bool](#gc)\
[struct comptimeStructFields](#comptimeStructFields)\
[struct comptimeStructField](#comptimeStructField)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decl(\*self): comptimeDecl](#decl-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type(\*self): comptimeTypeInfo](#type)\
[struct comptimeEnumFields](#comptimeEnumFields)\
[struct comptimeEnumField](#comptimeEnumField)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decl(\*self): comptimeDecl](#decl-2)\
[struct comptimeParams](#comptimeParams)\
[struct comptimeParam](#comptimeParam)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Decl(\*self): comptimeDecl](#decl-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Recv(\*self): bool](#recv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type(\*self): comptimeTypeInfo](#type-1)\
[struct comptimeValue](#comptimeValue)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type(\*self): comptimeTypeInfo](#type-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lvalue(\*self): bool](#lvalue)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mutable(\*self): bool](#mutable-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Const(\*self): bool](#const)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Field(\*self, name: str): comptimeValue](#field)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FieldByIndex(\*self, index: int): comptimeValue](#fieldbyindex)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Method(\*self, name: str): comptimeValue](#method)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unwrap(\*self)](#unwrap)\
[enum Kind](#Kind)

## Variables

```jule
const (
	Void = iota // Void
	Int         // int
	Uint        // uint
	Uintptr     // uinptr
	I8          // i8
	I16         // i16
	I32         // i32
	I64         // i64
	U8          // u8
	U16         // u16
	U32         // u32
	U64         // u64
	F32         // f32
	F64         // f64
	Str         // str
	Bool        // bool
	Any         // any
	Array       // Array
	Slice       // Slice
	Map         // Map
	Struct      // Structure
	Trait       // Trait
	Enum        // Enum
	TypeEnum    // Type Enum
	Ptr         // Raw pointer
	Unsafeptr   // Unsafe raw pointer
	Smartptr    // Smart pointer
	Func        // Function
	Tuple       // Tuple
	Chan        // Channel
	Cmplx64     // cmplx64
	Cmplx128    // cmplx128
)
```
Type kinds.

## TypeAlias
```jule
fn TypeAlias(name: str, t: T)
```
Emplaces a type alias declaration to statement which is this function called. Defines a type alias with identifier which is alias for t. The parameter t can take type declarations or comptimeTypeInfo only.

## Line
```jule
fn Line(): int
```
Returns line number of statement which is this function called. Returns as constant expression.

## File
```jule
fn File(): comptimeFile
```
Returns file wrapper of source file which is this function called.

## Files
```jule
fn Files(): comptimeFiles
```
Returns file wrappers for source files of package which is this function called.

## TypeOf
```jule
fn TypeOf(t: T): comptimeTypeInfo
```
Returns compile-time type information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine type in compile-time and will not executed at runtime.

::: info
All type information functionalities uses actual type (may there are exception cases). To examine and match actual types, comptime type information handling is useful.

For example:
```jule
type ByteSlice: []byte
const t = comptime::TypeOf(ByteSlice)
const match type t.Kind() {
| comptime::Slice:
	const match type t.Value().Kind() {
	| comptime::Byte:
		// ...
	}
}
```
In the example code above, the ByteSlice type is a strict type alias. But we can examine the actual type with comptime type information API.
:::

## ValueOf
```jule
fn ValueOf(v: V): comptimeValue
```
Returns compile-time value information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine and handle value in compile-time and will not executed at runtime.

## comptimeFiles
```jule
struct comptimeFiles
```
Private compile-time information wrapper for source files. Supports iterable and indexing implementations. Using with built-in len function returns count of files as constant expression.

## comptimeFile
```jule
struct comptimeFile
```
Private compile-time file information wrapper. Provides interface for source file representation of compiler analysis.

### Path
```jule
fn Path(*self): str
```
Returns path of file as constant expression.

### Name
```jule
fn Name(*self): str
```
Returns name of file as constant expression.

### Dir
```jule
fn Dir(*self): str
```
Returns directory of file as constant expression.

## comptimeDecls
```jule
struct comptimeDecls
```
Private compile-time information wrapper for comptimeDecl. Supports iterable and indexing implementations. Using with built-in len function returns count of files as constant expression.

## comptimeDecl
```jule
struct comptimeDecl
```
Private compile-time declaration information wrapper. Designed for general declarations, not for instantiated/analyzed types.

List of supported types:
- variables
- functions (with parameters)
- traits (with methods)
- enums (with fields)
- type enums
- structs (with fields and methods)
- type aliases

### Name
```jule
fn Name(*self): str
```
Returns name of declaration. Returns as constant expression.

### Public
```jule
fn Public(*self): bool
```
Reports whether type is public as constant expression.

### Bind
```jule
fn Bind(*self): bool
```
Reports whether type is bind as constant expression.

### Exceptional
```jule
fn Exceptional(*self): bool
```
Reports whether function type is exceptional as constant expression. Only supports function types.

### Mutable
```jule
fn Mutable(*self): bool
```
Reports whether declaration is mutable as constant expression. Supports variables, fields, and parameters.

### Variadic
```jule
fn Variadic(*self): bool
```
Reports whether declaration is variadic as constant expression. Supports parameters.

### Reference
```jule
fn Reference(*self): bool
```
Reports whether declaration is reference as constant expression. Supports variables, and parameters.

### Params
```jule
fn Params(*self): comptimeDecls
```
Returns declaration information wrappers for function's parameters. Supports only function types.

### Fields
```jule
fn Fields(*self): comptimeDecls
```
Returns declaration information wrappers for fields. Supports only structure and enum types.

### Methods
```jule
fn Methods(*self): comptimeDecls
```
Returns declaration information wrappers for methods. Supports only structures and traits.

###
```jule
fn Tags(*self): int
```
Returns count of tags as constant expression. Supports only structure fields.

### Tag
```jule
fn Tag(*self, key: str): str
```
Returns the value of the tag corresponding to the key as a constant expression. Supports only structure fields. Parameter key should be constant. Returns empty string if key is not exist in the tags.

### IsTag
```jule
fn IsTag(*self, key: str): bool
```
Reports whether the key is exist in tags as a constant expression. Supports only structure fields. Parameter key should be constant.

## comptimeTypeInfos
```jule
struct comptimeTypeInfos
```
Private compile-time information wrapper for type infos. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

## comptimeTypeInfo
```jule
struct comptimeTypeInfo
```
Private compile-time type information wrapper. Supports the == and != operators to compare types.

### Hash
```jule
fn Hash(*self): uintptr
```
Returns unique hash for type as constant uintptr expression. Hash value is not fixed, it changes with each compilation.

### Strict
```jule
fn Strict(*self): bool
```
Reports whether type is constructed by a strict type alias as constant expression.

### Source
```jule
fn Source(*self): comptimeTypeInfo
```
Returns source type of strict type alias.

### ActualSource
```jule
fn ActualSource(*self): comptimeTypeInfo
```
Returns actual source type of strict type alias.

### Kind
```jule
fn Kind(*self): Kind
```
Returns Kind of type. Returns as constant expression.

### Str
```jule
fn Str(*self): str
```
Returns string value of type (not actual type). Returns as constant expression.

### Decl
```jule
fn Decl(*self): comptimeDecl
```
Returns declaration information for type. Supports only structs, traits, enums, type enums, and functions. For structures that constructed by the strict type alias, it returns declaration information for the relevant implicit struct declaration.

### Bits
```jule
fn Bits(*self): int
```
Returns bitsize of type. Supports only primitive integer and floating-point types. Returns as constant expression.

### Size
```jule
fn Size(*self): int
```
Returns size of array. Returns as constant expression. Returns zero if array type is auto-sized declaration.

### Key
```jule
fn Key(*self): comptimeTypeInfo
```
Returns type information for key type. Supports only map types.

### Value
```jule
fn Value(*self): comptimeTypeInfo
```
Returns type information for value type. Supports only raw pointers (except unsafe pointer), smart pointers, arrays, slices, channels, enums, and maps.

### Fields
```jule
fn Fields(*self): comptimeStructFields | comptimeEnumFields
```
Returns field information for type. Supports only structure and enum types.

### Params
```jule
fn Params(*self): comptimeParams
```
Returns parameter information for function's parameters. Supports only function types.

### Types
```jule
fn Types(*self): comptimeTypeInfos
```
Returns comptime-type information for tuple types. Supports only tuple types.

### Result
```jule
fn Result(*self): comptimeTypeInfo
```
Returns compile-time information data for result type of function. Only supports function types.

### Bind
```jule
fn Bind(*self): bool
```
Reports whether type is bind as constant expression.

### Ordered
```jule
fn Ordered(*self): bool
```
Reports whether kind supports ordered constraint as constant expression.

### Comparable
```jule
fn Comparable(*self): bool
```
Reports whether kind supports comparable constraint as constant expression.

### Mutable
```jule
fn Mutable(*self): bool
```
Reports whether kind is mutable as constant expression.

### CanNil
```jule
fn CanNil(*self): bool
```
Reports whether kind is nil-compatible as constant expression.

### GC
```jule
fn GC(*self): bool
```
Reports whether kind performs garbage collection as constant expression.

## comptimeStructFields
```jule
struct comptimeStructFields
```
Private compile-time information wrapper for struct fields. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

## comptimeStruct
```jule
struct comptimeStructField
```
Private compile-time struct field information wrapper.

### Decl
```jule
fn Decl(*self): comptimeDecl
```
Returns declaration information for field.

### Type
```jule
fn Type(*self): comptimeTypeInfo
```
Returns type information for field.

## comptimeEnumFields
```jule
struct comptimeEnumFields
```
Private compile-time information wrapper for enum fields. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

## comptimeEnumField
```jule
struct comptimeEnumField
```

### Decl
```jule
fn Decl(*self): comptimeDecl
```
Returns declaration information for field.

## comptimeParams
```jule
struct comptimeParams
```
Private compile-time information wrapper for function parameters. Supports iterable and indexing implementations. Using with built-in len function returns count of fields as constant expression.

## comptimeParam
```jule
struct comptimeParam
```
Private compile-time function parameter information wrapper.

### Decl
```jule
fn Decl(*self): comptimeDecl
```
Returns declaration information for parameter.

### Recv
```jule
fn Recv(*self): bool
```
Reports whether parameter is receiver as constant expression.

### Type
```jule
fn Type(*self): comptimeTypeInfo
```
Returns type information for parameter.

## comptimeValue
```jule
struct comptimeValue
```
Private compile-time value information wrapper. Only supports classic expressions.

### Type
```jule
fn Type(*self): comptimeTypeInfo
```
Returns type information for value.

### Lvalue
```jule
fn Lvalue(*self): bool
```
Reports whether value is lvalue as constant expression.

### Mutable
```jule
fn Mutable(*self): bool
```
Reports whether value is mutable as constant expression.

### Const
```jule
fn Const(*self): bool
```
Reports whether value is constant as constant expression.

### Field
```jule
fn Field(*self, name: str): comptimeValue
```
Returns comptimeValue for field access expression. Supports only structure types. Parameter name should be constant. It allows access to private fields.

### FieldByIndex
```jule
fn FieldByIndex(*self, index: int): comptimeValue
```
Same as the Field method, but takes constant index instead of name.

### Method
```jule
fn Method(*self, name: str): comptimeValue
```
Returns comptimeValue for method access expression. Supports only structure types. Parameter name should be constant. It allows access to private methods. It will not use the actual kind, so this method an provide access to methods of the any strict type alias.

### Unwrap
```jule
fn Unwrap(*self)
```
Unwraps expression for runtime execution.