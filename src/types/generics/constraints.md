# Constraints

Generic type constraints are a kind of mask that tells which types the generic type will be compatible with. Generic strains will not accept any strain that is not compatible with this mask. Any generic type that does not contain a constraint by default will accept any type.

To define a constraint, use colon after the generic type and specify the mask. To give more than one mask, define the masks with the `|` operator. Each mask separated by `|` means a separate acceptability. That is, the constraint does not expect it to match all of them, if any of the masks are valid it ensures the match.

For example:
```jule
fn example[T: int | uint]() {
    match type T {
    | int:
        outln("int")
    | uint:
        outln("uint")
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

## Builtin Constraints

Your compiler has some built-in constraint statements to make things easier. These expressions can be used just like a type, but can also be shaded. If you have a valid type with the same identifier as the built-in constraint you want to use, that type will be considered the constraint.

| Identifier   | Constraint                                                     |
| -------------|----------------------------------------------------------------|
| `signed`     | Signed number types                                            |
| `unsigned`   | Unsigned number types                                          |
| `float`      | Floating-point number types                                    |
| `numeric`    | All numeric types                                              |
| `mutable`    | Mutable types                                                  |
| `immutable`  | Immutable types                                                |
| `comparable` | All types which is supports the `==`, !=` operators            |
| `ordered`    | All types which is supports the `<`, `<=`, `>=`, `>` operators |