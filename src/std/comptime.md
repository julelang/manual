# std::comptime

## Functions

```jule
fn TypeOf(TYPE || EXPRESSION): comptimeTypeInfo
```
Returns compile-time type information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine type in compile-time and will not executed at runtime.

---

```jule
fn ValueOf(EXPRESSION): comptimeValue
```
Returns compile-time value information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine and handle value in compile-time and will not executed at runtime.

---

```jule
fn Match(EXPR|TYPE): comptimeMatch
```
Returns compile-time wrapper for compile-time matching.
Supports only expressions and `comptimeTypeInfo`.

---

```jule
fn Range(EXPR): comptimeRange
```
Returns compile-time wrapper for compile-time iterations. Supports only iterable compile-time expressions.

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
struct comptimeMatch
```
Private compile-time wrapper for compile-time matching.

---

```jule
struct comptimeRange
```
Private compile-time wrapper for compile-time iterations.

---

```jule
struct comptimeTypeInfos {}
```
Private compile-time information wrapper for type infos. Supports iterable implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeTypeInfo
```
Private compile-time type information wrapper.
Supports the `==` and `!=` operators to compare types.

**Methods:**

`fn Kind(self): Kind`\
Returns Kind of type.
Returns as constant expression.

`fn Str(self): str`\
Returns string value of type.
Returns as constant expression.

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

`fn Public(self): bool`\
Reports whether type is public as constant expression. Supports only structures, enums, type enums, and traits.

`fn Binded(self): bool`\
Reports whether type is binded as constant expression.

`fn Ordered(self): bool`\
Reports whether kind supports ordered constrait as constant expression.

`fn Comparable(self): bool`\
Reports whether kind supports comparable constrait as constant expression.

`fn Mutable(self): bool`\
Reports whether kind is mutable as constant expression.

`fn Exceptional(self): bool`\
Reports whether function type is exceptional as constant expression. Only supports function types.

`fn CanNil(self): bool`\
Reports whether kind is nil-compatible as constant expression.

`fn RC(self): bool`\
Reports whether kind performs RC as constant expression.

---

```jule
struct comptileStructFields
```
Private compile-time information wrapper for struct fields.
Supports iterable implementations.
Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptileStructaField
```
Private compile-time struct field information wrapper.

**Methods:**

`fn Name(self): str`\
Returns name of field.
Returns as constant expression.

`fn Public(self): bool`\
Reports whether field is public as constant expression.

`fn Type(self): comptimeTypeInfo`\
Returns type information for field.

---

```jule
struct comptileEnumFields
```
Private compile-time information wrapper for enum fields.
Supports iterable implementations.
Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptileEnumField
```
Private compile-time enum field information wrapper.

**Methods:**

`fn Name(self): str`\
Returns name of field.
Returns as constant expression.

---

```jule
struct comptimeParams
```
Private compile-time information wrapper for function parameters. Supports iterable implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeParam
```
Private compile-time function parameter information wrapper.

**Methods:**

`fn Name(self): str`\
Returns name of parameter.
Returns as constant expression.

`fn Variadic(self): bool`\
Reports whether parameter is variadic as constant expression.

`fn Reference(self): bool`\
Reports whether parameter is reference as constant expression.

`fn Type(self): comptimeTypeInfo`\
Returns type information for parameter.

---

```jule
struct comptimeStatics
```
Private compile-time information wrapper for static fields. Supports iterable implementations. Using with built-in len function returns count of fields as constant expression.

---

```jule
struct comptimeStatic
```
Private compile-time static field information wrapper.

**Methods:**

`fn Name(self): str`\
Returns name of field.
Returns as constant expression.

`fn Public(self): bool`\
Reports whether field is public as constant expression.

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

`fn Unwrap(self)`\
Unwraps expression for runtime execution.

---

```jule
struct comptimeFiles
```
Private compile-time information wrapper for source files.
Supports iterable implementations.
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
- `Ptr`: Raw pointer
- `UnsafePtr`: Unsafe raw pointer
- `SmartPtr`: Smart pointer
- `Func`: Function
- `Tuple`: Tuple