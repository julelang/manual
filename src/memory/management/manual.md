# Manual Memory Management

Jule has functionalities that enable manual memory management. But this has some points that create unsafety.

## With `std::mem`

The `Heap` struct included in the standard library allows you to manually allocate and release space. It is relatively safer than raw pointers.

For example:

```jule
use std::mem::{Heap}

fn main() {
    let mut i = Heap[int].new()
    i.set(20)
    outln(i.get())
    i.free()
}
```

## With Integrated Jule

The standard library part of Integrated Jule provides various functions for memory management methods provided by C/C++. This method is based entirely on raw pointers and is quite unsafe.

```jule
use integrated for std::jule::integrated

fn main() {
    unsafe {
        let mut i = integrated::new[int]()
        *i = 20
        outln(*i)
        integrated::delete[int](i)
        i = nil
    }
}
```
