# Smart Pointers

Smart pointers are safer than raw pointers and have a structure that automates memory management. They implement reference counting, which is Jule's default memory management approach. A smart pointer is annotated by an `&` operator.

Smart pointers can be nil, and act just like a pointer. By default, they store heap-allocated data and perform reference counting. To access the pointed value, the unary `*` operator is used, just like in raw pointers.

Example to smart pointer declarations:
```jule
&int
```
```jule
&MyStruct
```

**Operators**

`x == y`: true if addresses are same \
`x == nil`: true if nil pointer

## Initialization
The built-in `new` function is used to make the smart pointer. Please refer to the [builtin](/std/builtin) library documentation for this function.

It can be used in two ways. The first parameter should be the type, which is a type of smart pointer. If you call the `new` function with a type, returns a smart pointer initialized with the default value.

For example:
```jule
fn main() {
    x := new(int)
    println(x)
}
```
The `x` variable is integer smart pointer, and stores zero.

The second parameter is initialization value of pointer.

For example:
```jule
fn main() {
    x := new(int, 100)
    println(x)
}
```
The `x` variable is a heap-allocated smart pointer initialized with `100`.

---

Smart pointers that are automatically initialized by the compiler are created as nil pointers.

For example:
```jule
fn main() {
    x := make([]&int, 1)
    println(x[0] == nil) // true
}
```

## Addresses and Conversions

A smart pointer can be cast to a raw pointer that points to the same type. When cast to uintptr, you get the address it points to, just like a raw pointer.

For example:

```jule
fn main() {
    a := new(int, 10)
    b := (*int)(a)
    unsafe { println(*b) }
}
```

## Allocation Management
Smart pointers can be `nil` (aka null). Since nil smart pointers are checked at runtime, this is safe. When a `nil` pointer is used unsafe it will give you a panic that it is nil. When a pointer is set to nil, the reference count continues to run. So when you assign to nil any smart pointer, its own reference count is decremented and deallocated if necessary.

Assigning a smart pointer to `nil` does not make all smart pointers which is uses same allocation to be set to nil. It simply ensures that the relevant smart pointer no longer performs reference counting for allocation and drops ownership of the allocation.

Assigning to the `nil` drops allocation and reference counting, sets the smart pointer to nil. If you want to check if the smart pointer points to an allocation, use the `ptr != nil` approach.

For example:
```jule
fn main() {
    mut x := new(int, 20)
    println(x != nil) // true
    x = nil
    println(x != nil) // false
}
```

## Understanding Reference Counting
A reference-counting heap counts each time it gets a reference to a dedicated pointer. It is deducted from the count when it loses its references. When the reference count reaches zero, it releases the allocation as it is no longer used.

Reference counting is not a program running in the background. Therefore, it does not host variable loads at runtime like the garbage collector, and its release times are always predictable. Reference counting offers the developer deterministic memory management.

For example:
```jule
fn main() {

    // Make heap-allocation, returns heap-allocated &int initialized with 100
    // Ref count is 1
    mut x := new(int, 100)

    // Prints 100
    println(*x)

    // Make new heap-allocation with 50, ref count is 1
    // Frees old allocation because ref count is 0 now
    x = new(int, 50)

    // Ref count is 2 now of current allocation
    // The y referencing to allocation of x
    y := x

    // Prints 50
    println(*y)

} // Frees allocation because ref count is 0, destroyed all references
```

## Using Smart Pointers with Reference-Counted Types
Data types that already perform reference counting can be used with smart pointers if supported. This does not pose any problem. Smart pointers perform reference counting in themselves; if the data they carry has reference counting, it does not interfere with them.

If the reference count of the migrated data has not reached zero, but the smart pointer carrying it has now released its allocation, there is no problem. This is because the reference counting and allocation control of the data it carries take place independently.

For example:
```jule
fn main() {
    mut ref := new([]int, [1, 2, 3, 4])
    s := *ref
    ref = nil
    println(s)
}
```
The `ref` variable holds a slice. Slices are data types that perform reference counting in themselves. The slice carried by the smart pointer is assigned to the variable `s,` and then the smart pointer is assigned as `nil`, then the reference counting of the smart pointer will reach zero and be deallocated.

This does not pose any problem. Everything works normally when the variable `s` is printed. The reference count of the slice did not reach zero, and therefore its allocation was not released. The allocation of the smart pointer passed to the variable `s` as a copy, not a pointer. For this reason, slice continued to protect its own allocation.
::: tip
This happens the same for all reference-counted data types empowered by smart pointers.
:::

## Reference Cycles
Jule does not handle pointer cycles. Obviously, this can create a significant overhead at runtime and is a negative factor in program runtime for performance-critical software development processes. Therefore, pointer cycles should be considered by the developer. What makes cycles so important is not that they cause any errors at runtime; it's that they can leak memory.

If the smart pointers point to each other or to themselves, a cycle occurs, and even if they go out of use, the allocation is not freed, so memory leaks may occur. The best way to avoid this is to consider cycles in the programming phase.

For example:
```jule
struct A {
    b: &B
}

struct B {
    a: &A
}

fn main() {
    mut a := &A{}
    mut b := &B{}
    a.b = b
    b.a = a
}
```
There is a cycle in the above code. Obviously, this cycle creates a memory leak. If there is such a cycle risk, the easiest and shortest solution is to drop the references so that the cycle will break.

For example:
```jule
struct A {
    b: &B
}

struct B {
    a: &A
}

fn main() {
    mut a := &A{}
    mut b := &B{}
    a.b = b
    b.a = a
    b.a = nil
}
```
The reference count cycle is broken as one of the parties causing the cycle is removed, so there shouldn't be any memory leaks in the above code.

Software developers may not always have code that they can cycle through. But when cycles do occur, they can be difficult to spot and locate. So just being a little more careful when there are potential cycle situations can make things a lot safer.

## Concurrency

Smart pointers guarantee that the reference counter is updated atomically in concurrent programming. This allows multiple smart pointer copies that share the same object to be safely passed across coroutines. Thanks to atomic reference counting, the lifetime of the object is tracked correctly, and the memory is freed exactly once when the reference count drops to zero. When used correctly, this mechanism guarantees the prevention of errors such as UAF (use-after-free) and double-free.

However, atomic reference counting does not prevent data races on the smart pointer object itself. In other words, performing concurrent read-write or write-write operations on the same smart pointer variable is a data race and results in undefined behavior. The issue is not that the reference counter is non-atomic, but that the smart pointer structure as a whole is not copied or updated atomically. If one coroutine is copying a smart pointer while another coroutine concurrently modifies the same variable, a partially copied or inconsistent pointer state may occur. Even if the reference counting algorithm is correct, this can effectively invalidate lifetime guarantees and lead to UAF or double-free-like errors.

If a smart pointer-related UAF or double-free is observed during debugging with tools such as ASan, the root cause is usually not the reference counting algorithm itself, but unsynchronized concurrent access to the smart pointer variable. These kinds of errors are especially common in lock-free data structures or when performing non-atomic pointer swaps.