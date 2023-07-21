# References

References can be confused with the reference types described in memory management, but they are completely different things. References are like an alias for an lvalue. You can think of them as pointers but they are safer.

They are used with `&` operator in syntax. You can't have nested references, for example you can have a pointer pointing to a pointer but not a reference referencing to a reference.

References point to the value from which they were initialized and must receive an initialize expression. The lvalue pointing to later references cannot be changed. Any assignment statement is always about changing the data they refer to.

## Reference Variables

Reference variables are variables that reference an lvalue. Any assignment made affects the referenced lvalue. Declared with `&` operator.

For example:
```
fn main() {
    let mut a = 20
    let mut &b = a
    b += 20
    outln(a) // 40
}
```

Also you can use reference types in mult-declarative assignments.

For example:
```
fn main() {
    let mut a = 20
    let (mut &x, mut y) = a, 20
    x += y
    outln(a) // 40
}
```

## Reference Parameters

Reference parameters must take an lvalue as an argument. To specify a reference parameter, the parameter identifier must be preceded by the `&` operator.

For example:
```
fn add_20(mut &a: int) {
    a += 20
}

fn main() {
    let mut a = 20
    add_20(a)
    outln(a) // 40
}
```
