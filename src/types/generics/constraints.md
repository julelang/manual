# Constraints

Generic type constraints are a kind of mask that tells which types the generic type will be compatible with. Generic strains will not accept any strain that is not compatible with this mask. Any generic type that does not contain a constraint by default will accept any type.

To define a constraint, use colon after the generic type and specify the mask. To give more than one mask, define the masks with the `|` operator. Each mask separated by `|` means a separate acceptability. That is, the constraint does not expect it to match all of them, if any of the masks are valid it ensures the match.

For example:
```jule
fn example[T: int | uint]() {
    match type T {
    | int:
        println("int")
    | uint:
        println("uint")
    }
}
```

In the example above, the `T` generic will only accept `int` and `uint` types.

---

Constraints can use generics.

For example:
```jule
fn sum[S: []T, T: int | uint](s: S): T {
    let mut n: T = 0
    for _, x in s {
        n += x
    }
    ret n
}
```

In the above example, the `T` generic accepts a slice using the `E` generic. The 'E' generic accepts only 'int' and 'uint' types with its constraint.

In some cases, this usage may result in impractical attributions. The software developer cannot overcome the type mismatch error at compile time. The compiler does not guarantee that it will catch such errors.

## Masking with Deep Match

By default, a constraint mask is only compatible with the mask type.
But sometimes strict type aliases should be able to pass the constraint.
Since strict type aliases considered totally a different type, using an ordinary mask in the constraint is not proper for that.
Because type will not be matched.

To achieve this, jule provides the tilde `~` operator.
This operator enables the deep matching for the mask.
So strict type aliases can pass the constraint.

For example:
```jule
type Float: f64

fn foo[T: int | f64]() {}

fn main() {
	foo[Float]()
}
```
In the example above, the compiler will complain about constraint of the type `T`.
Because the strict type alias `Float` will not pass the constraint.
For the proper use, type `T` must be `f64`.

The tilde `~` operator allows strict type aliases in such cases.

For example:
```jule
fn foo[T: int | ~f64]() {}
```
In the example above, the `Float` type can pass the costraint thanks to the tilde `~` operator.
But this is only applied for the `f64` type, not for `int`.
The tilde `~` operator enables deep matching for only single mask, where it used.

::: info
When the tilde `~` operator used, the mask type should be a primitive type.
Strict type aliases, builtin constraints, structs ant others will not be accepted as mask.
:::

## Builtin Constraints

Your compiler has some built-in constraint statements to make things easier. These expressions can be used just like a type, but can also be shaded. If you have a valid type with the same identifier as the built-in constraint you want to use, that type will be considered the constraint.

| Identifier   | Constraint                                                                  |
| -------------|-----------------------------------------------------------------------------|
| `signed`     | Signed number types (deep match)                                            |
| `unsigned`   | Unsigned number types (deep match)                                          |
| `integer`    | Integer number types (deep match)                                           |
| `float`      | Floating-point number types (deep match)                                    |
| `cmplx`      | Complex number types (deep match)                                           |
| `numeric`    | All numeric types (deep match)                                              |
| `mutable`    | Mutable types (deep match)                                                  |
| `immutable`  | Immutable types (deep match)                                                |
| `comparable` | All types which is supports the `==`, `!=` operators (deep match)           |
| `ordered`    | All types which is supports the `<`, `<=`, `>=`, `>` operators (deep match) |