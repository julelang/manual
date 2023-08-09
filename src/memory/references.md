# References

References can be confused with the reference types described in memory management, but they are completely different things. References are like an alias for an lvalue, but this lvalue is no ordinary lvalue. It should always be a variable. You can think of them as pointers but they are safer because of compiler's safety obsessions.

They are used with `&` operator in syntax. You can't have nested references, for example you can have a pointer pointing to a pointer but not a reference referencing to a reference.

References point to the value from which they were initialized and must receive an initialize expression. The lvalue pointing to later references cannot be changed. Any assignment statement is always about changing the data they refer to.

## Reference Variables

Reference variables are variables that reference an lvalue. Any assignment made affects the referenced lvalue. Declared with `&` operator.

For example:
```jule
fn main() {
    let mut a = 20
    let mut &b = a
    b += 20
    outln(a) // 40
}
```

Also you can use reference types in mult-declarative assignments.

For example:
```jule
fn main() {
    let mut a = 20
    let (mut &x, mut y) = a, 20
    x += y
    outln(a) // 40
}
```

### Anonymous Functions with References

Anonymous functions copies instead of referencing the definitions of the scope in which they are defined, for safety reasons. Thus, a possible danger of dangling is prevented. But some copied things can be undsgr, one of them being references. Even if the references are copied, they will still continue to point to the same address as it is an address alias in nature. Therefore, there is a danger of dangling the reference if it goes out of scope. To avoid this, Safe Jule does not allow you to use references from parent scopes.

If you're sure it's safe to do so, [Unsafe Jule](/unsafe-jule/) lets you access such dangerous references.

## Reference Parameters

Reference parameters must take an lvalue as an argument. To specify a reference parameter, the parameter identifier must be preceded by the `&` operator.

For example:
```jule
fn add_20(mut &a: int) {
    a += 20
}

fn main() {
    let mut a = 20
    add_20(a)
    outln(a) // 40
}
```

## Why References Accept Lvalues as Variable

This is the result of the compiler trying to make sure things are safe. It always asks to reference a variable to keep a good watch on your reference and make sure it's safe. This is an effort to guarantee that your reference will never be dangling because the scope of your variable is traceable.

## Concurrency

Concurrency imposes a number of process-intensive conditions that are difficult to trace at compile time and further increase compile times. Using references in a concurrent call means that the scope of the variable cannot be properly traced. Therefore, concurrent calls do not support functions with reference parameters.

Of course, if you want to do this even though you know it's unsafe, [Unsafe Jule](/unsafe-jule/) lets you do it.
