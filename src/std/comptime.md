# std::comptime

## Functions

```jule
fn TypeOf(TYPE || EXPRESSION): comptimeTypeInfo
```
Returns compile-time type information. Cannot assign to memory, just available in compile-time. The expression is evaluated to determine type in compile-time and will not executed at runtime.

## Structures

```jule
struct comptimeTypeInfo
```
Private compile-time type information wrapper.

**Methods:**

`fn Kind(self): Kind`\
Returns Kind of type.

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