# Unsafe Package

The Unsafe package is a package provided by the standard library and contains unsafe algorithms. Unsafe is part of Jule. To be able to use it, it must be declared just like a use declaration. However, different use declaration styles cannot be used, only a single style is allowed to be imported.

For example:
```jule
use std::unsafe
```

To access the package's definitions it must always be accessed via the `unsafe` namespace. To do this, it is enough to use the `unsafe` keyword.

For example:
```jule
use std::unsafe

fn main() {
    mut b := []byte("hello world")
    s := unsafe::BytesStr(b)
    b[0] = 'H'
    outln(s) // Hello world
}
```

::: info
There is no need to use unsafe scope as you will know that what you are doing is unsafe when using the unsafe package. But when calling functions from the unsafe package you don't have Unsafe Jule for arguments. This means that for argument expressions that require the use of Unsafe Jule, you must use Unsafe Jule.
:::