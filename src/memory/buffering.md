# Buffering

In Jule, some built-in types have a buffer inside them. This buffer can be pre-sized for more efficient uses. Each types use this buffer differently, and its manipulability may vary by type.

Buffers are managed automatically. If they need to grow, they will expand automatically. However, downsizing is not done automatically.

## Slices
A specifically sized slice can be allocated with the builtin `make` function.

For example:
```jule
fn main() {
    let s = make([]int, 20)
    outln(s)
}
```
At the example above, the `s` variable is 20 sized slices and all elements initialized with default value.

The `make` function can also allocate slices with capacity.

For example:
```jule
fn main() {
    let s = make([]int, 20, 100)
    outln(s)
}
```
At the example above, the `s` variable is 20 sized slices and first 20 elements initialized with default value. Slice capacity is `100`.

## Strings

Jule strings are mutable and have a buffer. String literal can be used to create a string. However, the built-in `make` function can be used to create a string with a preset buffer size.

For example:
```jule
fn main() {
    let mut s = make(str, 20)
    s += "hello"
    s += " "
    s += "julenour"
    outln(s)
}
```

At the example above, `s` will not allocate new buffer for two concatenation. Because buffer is pre-allocated and already have enough size to store complete value.
