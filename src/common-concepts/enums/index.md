# Enums

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
Enums consider themselves a data type. Therefore, even an enum with an int data type cannot be handled directly with an int data type. Enum type only considers itself as a valid type. Assignments and comparisons should always be of their own type.

### Maps

Maps doesn't support enums for type safety. You can use enums for key type, but not for value type.

## Matching

In match statements for enum types, you only need to use the field names of the enum type. For example, instead of writing `Foo.Bar` as you would in a regular expression, you simply use `Bar` to represent the enum value.

For example:
```jule
enum Foo {
	A,
	B,
	C,
}

fn main() {
	x := Foo.A
	match x {
	| A:
		println("Foo.A")
	| B:
		println("Foo.B")
	| C:
		println("Foo.C")
	}
}
```