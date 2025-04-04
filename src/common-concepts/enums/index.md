# Enums


[The `iota` variable](/common-concepts/variables#the-iota-variable)

Enums are typically grouped constant variables bound to a strict type. Therefore, it is recommended to read the [Grouped Variables and Enumeration](/common-concepts/variables#grouped-variables-and-enumeration) section before using enums. All enum members are constant and typed literals.

For example to defining enum:
```jule
enum FileMode {
    Read,
    Write,
    Both,
}

fn main() {
    println(FileMode.Read)
}
```
As seen in the example above, there is an enum definition. Enum types default to the `int` type. For numeric types, the default value of the first member of enum is the `iota` variable.

## Value Assignments

The value assignments are based on previous field. The first element is assigned to zero by default. If you give an expression to a field, the next field is uses your expression after increased once.

For example:
```jule
enum MyEnum {
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
- `B`: `-20`
- `C`: `-20`
- `D`: `20`
- `E`: `20`
- `F`: `1`
- `G`: `1`
- `H`: `1`

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
    println(FileMode.Read)
}
```
The above enumeration has the data type `u8`.
::: warning
You can use only signed/unsigned integer or str data types.
:::

## Default Values
Enums should always define a default value for safety reasons. This default value is the first field of the enum. The first field always represents the default value, and your compiler will initialize an enum type with its default value when necessary.

The first member of an enum with no custom expression is always have a default value, unlike enumeration of grouped variables. If you are using a numeric type, this default value is `iota`. If you are using a string, the default value will be directly the same as the identifier of the first field. Other fields will evaluated based on the first member's expressions, following the explained behavior in the [Grouped Variables and Enumeration](/common-concepts/variables#grouped-variables-and-enumeration) section.

Your compiler does not automatically define the default field. Therefore, every time you define an enum, it must have at least one field and this field will be used as the default field.

## Casting
You may want to cast your enum for various reasons. Normal casting rules apply here. When casting an enum value, it is based on the enum value type. This means you can cast to all types supported by the base type. 

```jule
enum MyEnum {
    MyVal: 10,
}

fn main() {
    _ = int(MyEnum.MyVal)
    _ = u8(MyEnum.MyVal)
}
```

## Type Safety
Enums consider themselves a data type. Therefore, even an enum with an int data type cannot be handled directly with an int data type. Enum type only considers itself as a valid type. Assignments should always be of their own type.

Enum basically supports `==` and `!=` operators. But for enum types using integer, you can also use the `|`, `&`, `>`, `<`, `>=`, and `<=` operators. The `==` and `!=` logical operators can be used for compatible types for enum's type. It's safe. But others needs casting or it's own type.

For the amper operator, you can use only when you define a default enum field with a zero value. Otherwise, the amper (`&`) operator is not available for relevant enum.

### Maps

Maps doesn't support enums for type safety. You can use enums for key type, but not for value type.

### Comparing Enums

It only allows you to use the base type for the `==` and `!=` operators when comparing enums. This means you can compare base types of enums for simple equality checks without having to constantly cast. But this is only true if the base type of comparison is being made. If you are trying to compare an enum in situations that require strict matching, such as a match statement, implicit casting is not done.

For example:
```jule
enum MyEnum: str {
    Foo: "foo",
    Bar: "bar",
    Baz: "baz",
}
```
You will see the above enum definition used in the codes below.

Below are examples of valid comparisons:
```jule
MyEnum.Foo == "FooBarBaz"
"FooBarBaz" == MyEnum.Foo
MyEnum.Foo != "FooBarBaz"
"FooBarBaz" != MyEnum.Foo
```
In these comparisons, implicit casting is performed regardless of whether the enum is a right or left operator. However, having enums on both operands still doesn't change anything. If you are comparing two different enums and their base types are the same, implicit casting performed.

If you are matching with a match statement, implicit casting occurs if the base type is the main type you are matching with.

For example:
```jule
match "FooBarBaz" {
| MyEnum.Foo:
    println("case1")
| "bar":
    println("case2")
| MyEnum.Baz:
    println("case3")
}
```
In the example above, the base type being matched is the same as the base type of the enum type `MyEnum`. Therefore, implicit casting is applied for the enum.

In the opposite case, you cannot achieve implicit casting. So if the main type you use to match is an enum, you can only match enum's itself.

For example:
```jule
match MyEnum.Foo {
| MyEnum.Foo:
    println("case1")
| "bar":
    println("case2")
| MyEnum.Baz:
    println("case3")
}
```
In the example above, the type of the actual expression matched is enum. Therefore implicit conversion is not allowed. So the code above is incorrect, the expression `"bar"` is not a valid expression for matching.