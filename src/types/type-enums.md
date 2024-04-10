# Type Enums

Type enums give you sum type functionality. Sum types are actually treated as `any`, but they are safer. Just like an `any` type, its default value is always `nil` and nil must be checked. Only data compatible with the types set are allowed to be retained, other data types are not accepted. It is strict about type safety, even implicit casting is not accepted, type must be explicitly compatible.

Declaring a type-enum is easy. Declare it just like an enum. Just say the enum field type is type.

For example:
```jule
enum Signed: type {
    I8: i8,
    I16: i16,
    I32: i32,
    I64: i64,
}
```

You can also write only the types you want for the sum type without using a named field.

For example:
```jule
enum Signed: type {
    i8,
    i16,
    i32,
    i64,
}
```

There must always be at least one field. Other fields can point to the enum itself (which is bad practice but allowed) but there is one exception; If there is only one field and it points to its own type-enum declaration, this will lead to a pointless loop, so your compiler won't allow it.

Each field must have an explicit type declaration. For type safety, any of the fields are not allowed to point to type `any`. 

They can be used in match-type expressions. But they can only map to the types they support. Likewise, cast expressions can only be cast with the types they support.

In binary expressions, only compatible types can be used. And the only supported operators are `==` and `!=` operators.

With the advantage of being an enum, you can also use it for side purposes such as grouping types. When you use the type itself, you get a sum type that fits all of them collectively. However, when you treat it as a field, you get the type that that field points to.

For example:
```jule
enum Types: type {
    Bool: bool,
    String: str,
}

fn main() {
    let x: Types = "hello world"
    outln(x)
    let y: Types.String = "hello world"
    outln(y)
}
```

At example above, the variable `x` is `Types`, so it's type is `Types.Bool` or `Types.String` and handled as `any` at runtime. But the variable `y` is actual `str` type and handled as `str` at compile-time and runtime. 
