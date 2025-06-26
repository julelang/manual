# Unsafe Package

The [`std/unsafe`](/std/unsafe) package is a package provided by the standard library and contains unsafe algorithms. The Unsafe package is part of Jule. To be able to use it, it must be declared just like a use declaration. However, different use declaration styles cannot be used, only a single style is allowed to be imported.

For example:
```jule
use "std/unsafe"
```

To access the package's definitions it must always be accessed via the `unsafe` namespace. To do this, it is enough to use the `unsafe` keyword.

For example:
```jule
use "std/unsafe"

fn main() {
    mut b := []byte("hello world")
    s := unsafe::BytesStr(b)
    b[0] = 'H'
    println(s) // Hello world
}
```