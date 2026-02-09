# Type Enums

Type enums give you sum type functionality. Sum types are actually treated as `any`, but they are safer. Just like an `any` type, its default value is always `nil`, and nil must be checked. Only data compatible with the types set are allowed to be retained; other data types are not accepted. It is strict about type safety; even implicit casting is not accepted, and the type must be explicitly compatible.

Declaring a type-enum is easy. Declare it just like an enum, with the minor difference that type-enums do not support named fields, and they take type declarations instead of constant values.

For example:
```jule
enum Signed: type {
    i8,
    i16,
    i32,
    i64,
}
```

There must always be at least one field. Each field must be an explicit type declaration. For type safety, none of the fields are allowed to point to type `any`.

They can be used in match-type expressions. But they can only map to the types they support. Likewise, cast expressions can only be cast with the types they support.

In binary expressions, only compatible types can be used. And the only supported operators are `==` and `!=` operators like type `any`.

## Type Inheritance

Type enums can inherit from each other. To do this, give a type enum a different type enum as a field. From this point on, the other type enum will be supported directly, and all fields of the other type enum will also be supported by inheriting.

For example:
```jule
enum Signed: type {
    int,
}

enum Unsigned: type {
    uint,
}

enum Int: type {
    Signed,
    Unsigned,
}

fn main() {
    let a: Int = 20
    println(a)
}
```

In the example above, `Int` does not directly support the `int` type. However, the `Signed` enum it supports includes support for `int`. So `Int` supports the `int` type which it inherits from.

::: info
Strict type alias to a type-enum, will not be inherited.
:::


## Type Matching

Type Enums are safer than the `any` type when performing type matching because they have a fundamental requirement: all possible types must be handled within the type matching. If you don't need to match every type individually, you can define a default case.