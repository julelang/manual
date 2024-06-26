# std::comptime

## Functions

```jule
fn TypeOf(TYPE || EXPRESSION): comptimeTypeInfo
```
Returns compile-time type information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine type in compile-time and will not executed at runtime.

```jule
fn Range(EXPR): comptimeRange
```
Returns compile-time wrapper for compile-time iterations. Supports only iterable compile-time expressions.

## Structures

```jule
struct comptimeRange
```
Private compile-time wrapper for compile-time iterations.

```jule
struct comptimeTypeInfo
```
Private compile-time type information wrapper.

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
Returns comptimeTypeInfo for element type. Supports only pointers (except unsafe pointer), smart pointers, arrays, and slices.

`fn Size(self): int`\
Returns size of array. Returns as constant expression.
Returns zero if array type is auto-sized declaration.

`fn Key(self): comptimeTypeInfo`\
Returns type information for key type.
Supports only map types.

`fn Value(self): comptimeTypeInfo`\
Returns type information for value type.
Supports only map types.

`fn Fields(self): comptimeFields`\
Returns field informations for type.
Supports only structure types.
Using with built-in len function returns count of fields as constant expression.

`fn Public(self): bool`\
Reports whether type is public as constant expression. Supports only structures, enums, type enums, and traits.

`fn Binded(self): bool`\
Reports whether type is binded as constant expression. Supports only structures.

---

```jule
struct comptileFields
```
Private compile-time information wrapper for field.
Supports iterable implementations.

---

```jule
struct comptileField
```
Private compile-time field information wrapper.

**Methods:**

`fn Name(self): str`\
Returns name of field.
Returns as constant expression.

`fn Public(self): bool`\
Reports whether field is public as constant expression.

`fn Type(self): comptimeTypeInfo`\
Returns type information for field.

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
- `Ref`: Smart pointer
- `Func`: Function