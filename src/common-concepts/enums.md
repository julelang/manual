# Enums
Enumerations are a structure that allows to collect numeric constant values together. This increases the readability of the code and makes it easier to maintain. The keyword enum is used to declare an enum.

For example:
```jule
enum FileMode {
    Read  = 35,
    Write = 89,
    Both,
}

fn main() {
    outln(FileMode.Read)
}
```
As seen in the example above, there is an enumeration definition. If you do not assign a value to the enumeration elements, the index value is automatically assigned. In this case, the element `both` in the example above has the value `2`.
::: info
- You can use an element before them as a value in enumerations.
- Enumerations has `int` data type by default.
:::
::: warning
You can't use any global, function or etc. in custom value expressions.
:::

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
    MyVal = 10
}

fn main() {
    _ = (int)(MyEnum.MyVal)
    _ = (u8)(MyEnum.MyVal)
}
```

## Type Safety
Enums consider themselves a data type. Therefore, even an enum with an int data type cannot be handled directly with an int data type. Enum type only considers itself as a valid type.

It must be cast in order to be processed with different types, but due to type safety. However, you also cannot cast an integer value to an enum that uses the integer type. Assignments should always be of their own type.

Enum basically supports `==` and `!=` operators. But for enum types using integer, you can also use the `|`, `&`, `>`, `<`, `>=`, and `<=` operators.

::: tip
The `==` and `!=` logical operators can be used for compatible types for enum's type. It's safe.
:::

### Maps

Maps doen't support enums for type safety. You can use enums for key type, but not for value type.

### Any Type

The `any` type can store enums. You can use `==` and `!=` operators, it is safe. But you cannot cast an enum type from `any` type because this is unsafe and the type is lost at compile time. To get the value, you can try to cast it to the type pointed to by the enum, but if you are using a value such as an integer, it may be converted to different types at compile time because of enum items are constant literals actually. So, even though the enum is `i32`, `any` may be storing it as `i64` in compile time code generation, so casting may fail.
