# Raw Pointers
Each location at memory have an address. These addresses points to location at memory. Pointers (aka raw pointers) are variables can store this memory addresses.

To declare a pointer data type, use `*` operator.

For example:
```jule
let x: *int = nil
```
That's pointer for `int` type.

### Getting Pointer of Variables
The `&` operator used to get pointer of variable.

For example:
```jule
fn main() {
    let x: int = 10
    let y: *int = &x
    println(y)
}
```
The `y` variable is now store memory address of `x` variable. 
::: warning
Pointers are taken as each mutable.
:::

---

::: warning
What follows is related to Unsafe Jule. If you're not familiar with this topic, check out the [Unsafe Jule documentations](/unsafe-jule/).
:::

### Accessing Values on Pointers
The `*` operator is used to access the value in the memory address that the pointer store.

For example:
```jule
fn main() {
    let x: int = 10
    let y: *int = &x
    println(y)            // Prints stored address
    unsafe { println(*y) } // Prints value at address (so 10)
}
```

### Assign Values to Pointers
Pointers can take on value assignment just like a variable, with values of the appropriate data type, because they are already variables.

For example:
```jule
fn main() {
    let x: int = 10
    let z: *int = &x // The 'z' store now memory address of the 'x' variable.
    let y: int = 98
    z = &y           // The 'z' store now memory address of the 'y' variable.
}
```

---

Additionally, pointers can assign the value of the memory address they store.
The `*` operator used for that too.

For example:
```jule
fn main() {
    let x: int = 10
    let y: *int = &x
    unsafe { *y = 59 } // Assign value
    println(x)          // Prints 59
}
```

## Unsafe Pointers
Developers who have previously worked with programming languages such as C and C++ are probably familiar with void pointers. Jule has void pointers. To obtain a void pointer, an unsafe pointer is used. Unsafe pointers can receive assignments from any pointer type. It is general-purpose. An unsafe pointer is not an explicit pointer; it cannot be used with postfix and cannot be dereferenced.

These pointers are known as unsafe pointers in Jule because they are actually more unsafe than regular pointers. This is mainly because they are not pointers to a data type. It is assumed that they simply point to a memory location. Therefore, there is no guarantee that it is correct, even if cast to a datatype pointer. The developer must know the data type at the pointed address. Unsafe pointers are not helpful in this regard.

For example:
```jule
fn main() {
    let a: int = 20
    let ptr: *unsafe = &a
    unsafe { println(*( (*int)(ptr) )) }
}
```
 In this example, the variable `ptr` is an unsafe pointer and points to the variable `a`. Then we see that this pointer is cast to the `int` pointer and dereference. As a result, we get the value the `20` because was done right. 

## Pointer Arithmetic

Pointer arithmetic is available for typed pointers other than `*unsafe`. Thanks to pointer arithmetic, you can shift your pointers with the help of integers. It only supports `int` and `uint` types.

For example, summing a pointer to the integer `1` means that it will be shifted forward by the size of the data type it points to in memory. This means that if you point to a block of memory, the pointer will point to the next block element.

For example:
```jule
fn main() {
    let s = [1, 2, 3, 4, 5]
    let mut p = &s[0]
    let end = p + len(s)
    for p != end; p++ {
        unsafe { println(*p) }
    }
}
```

In the example above, the elements of the slice are written to stdout with the help of pointers and pointer arithmetic.
