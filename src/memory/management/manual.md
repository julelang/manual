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

## Disable Rereference Counting

> Read relevant section to [disable reference counting](/memory/management/disable-reference-counting).

You can use manual memory management method with disable reference counting. Advantage of that, Jule has allocation functions for smart pointers, so reference counted types, and when you disable reference counting, you have smart pointers that must be freed manually. So you can use primitive smart pointers with manual memory management. This approach migh be more flexible and readable. Also easy to return reference counting.

The `free` function of `std::mem` library, provides deallocation functionality types which is performs reference counting internally. The `free` function just assigns to nil and decrases rereference counting data when reference counting enabled. In other words, assigns to nil and deallocates allocation.

Risk of that, you should trace dependencies of allocations befıre deallocating. Because dependencies cannot traced by automatically because of reference counting disabled. So you will have invalid memory addresses when you deallocates in-use allocations.

For example:

```jule
fn main() {
    {
        let mut x = [1, 2, 3, 4, 5]
        outln(x)
    } // x leaked
}
```

In this example above, variable `x` is leaked because of disabled reference counting. Variable `x` is a slice, and slice performs internal reference counting. Therefore, you must free variable `x` manually.

```jule
use mem for std::mem

fn main() {
    {
        let mut x = [1, 2, 3, 4, 5]
        outln(x)
        mem::free(x)
    }
}
```

In this updated example above, calls `free` function from `std::mem` library for variable `x`. So, allocation freed, there is no leak.
