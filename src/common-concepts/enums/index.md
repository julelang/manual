# Enums
Enumerations are a structure that allows to collect numeric constant values together. This increases the readability of the code and makes it easier to maintain. The keyword enum is used to declare an enum.

For example:
```jule
enum FileMode {
    Read:  35,
    Write: 89,
    Both,
}

fn main() {
    outln(FileMode.Read)
}
```
As seen in the example above, there is an enumeration definition.
::: info
- You can use an element before them as a value in enumerations.
- Enumerations has `int` data type by default.
:::
::: warning
You can't use any global, function or etc. in custom value expressions.
:::

## Value Assignments

The value assignments are based on previous field. The first element is assigned to zero by default. If you give an expression to a field, the next field is uses your expression after increased once.

For example:
```jule
enum MyEnum: int {
    A: -20,
    B,
    C,
    D: 20,
    E,
    F: 1,
    G,
    H,
}
```
The example above, here is list of the field values:
- `A`: `-20`
- `B`: `-19`
- `C`: `-18`
- `D`: `20`
- `E`: `21`
- `F`: `1`
- `G`: `2`
- `H`: `3`

## Custom Data Types
If you want to give enums a data type other than the default, it is possible to do so.

For example:
```jule
enum FileMode: u8 {
    Read,
    Write,
    Both,
}

fn main() {
    outln(FileMode.Read)
}
```
The above enumeration has the data type `u8`.
::: warning
You can use only integer or str data types.
:::

## Default Values
The default values ​​of enums are always what is the default value of the data type they use. For example, `0` for `int` and empty string for `str`. If your enum definition should always define a default field, set its first field to the default value. In this way, your compiler-initiated enum value will be exist in fields. If you don't do this, the developers will not be able to match the enum value in code at all if the default value is not present in the fields. 

## Casting
You may want to cast your enum for various reasons. Normal casting rules apply here. When casting an enum value, it is based on the enum value type.

```jule
enum MyEnum {
    MyVal: 10
}

fn main() {
    _ = (int)(MyEnum.MyVal)
    _ = (u8)(MyEnum.MyVal)
}
```

## Type Safety
Enums consider themselves a data type. Therefore, even an enum with an int data type cannot be handled directly with an int data type. Enum type only considers itself as a valid type. Assignments should always be of their own type.

Enum basically supports `==` and `!=` operators. But for enum types using integer, you can also use the `|`, `&`, `>`, `<`, `>=`, and `<=` operators. The `==` and `!=` logical operators can be used for compatible types for enum's type. It's safe. But others needs casting or it's own type.

For the amper operator, you can use only when you define a default enum field with a zero value. Otherwise, the amper (`&`) operator is not available for relevant enum.

### Maps

Maps doen't support enums for type safety. You can use enums for key type, but not for value type.

### Any Type

The `any` type can store enums. You can use `==` and `!=` operators, it is safe. But you cannot cast an enum type from `any` type because this is unsafe and the type is lost at compile time. To get the value, you can try to cast it to the type pointed to by the enum, but if you are using a value such as an integer, it may be converted to different types at compile time because of enum items are constant literals actually. So, even though the enum is `i32`, `any` may be storing it as `i64` in compile time code generation, so casting may fail.
