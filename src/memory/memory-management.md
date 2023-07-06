# Memory Management
Jule does the memory management itself. But it's not fully automatic. You decide where and when to allocate, and it's self-evident which variables are heap-allocated. It guarantees memory safety.

Jule uses reference counting for heap allocations. It is automatically released when the reference count of the pointer reaches zero, that is, when it is certain that the heap allocation is no longer used. It is guaranteed that no allocation goes unnoticed and is also not released while the allocation is still in use.

## References
References are heap allocation data types. A reference is annotated by an `&` operator.

A reference is always heap-allocation and is always within the reference counting. When a pointer to a reference is taken, you don't get a pointer to the reference. You get a pointer to the address of the heap allocation that the reference is using.

Because:

**Reference Pointer is Unnecessary**
It is unnecessary for a pointer to point to a reference. You're probably doing this to share the same address. The truth is, references already do that. So instead of getting a pointer to a reference, using the reference directly gives the same experience. Therefore, pointers to a reference are not supported.

**More Productive**
As explained above, you are probably doing this to share the same address. Getting a pointer to a reference and getting a pointer pointing to the address that reference is pointing to should then be the same for you. If you had a pointer to a reference, that would raise issues for you. Because the references you point to are also variables, for example, when using the atomicity functions in the standard library, instead of performing an atomic operation for the allocation of that reference, you have to perform an atomic operation for the reference itself. This atomicity is unnecessary because what you need is the atomicity that is above the allocation of the reference.

Example to reference data type anotations:
```
&int
```
```
&MyStruct
```

You can't use as reference these types:
- Enum
- Pointer
- Reference
- Array

### Initialization
The built-in `new` function is used to make the reference. Please refer to the [builtin](/standart-library/builtin) library documentation for this function.

It can be used in two ways. The first type allows you to get only one reference, but that reference is an uninitialized reference (aka nil reference), meaning it does not point to any allocation and does not perform reference counting.

For example:
```
fn main() {
    let x = new(int)
    outln(x)
}
```
The `x` variable is integer reference, but not have allocation.

The second type is references initialized with a value. These references are initialized with an allocation when they are created and perform reference counting, the given value is assigned to the created allocation. 

For example:
```
fn main() {
    let x = new(int, 100)
    outln(x)
}
```
The `x` variable is a heap-allocated reference initialized with 100.

---

References that are automatically initialized by the compiler are created as null references. 

For example:
```
fn main() {
    let x = make([]&int, 1)
    outln(real(x[0])) // false
}
```

### Allocation Management
 References can be `nil` (aka null). This is safe, when a `nil` reference is used unsafe it will give you a panic that it is nil. When a reference is set to nil, the reference count continues to run. So when you assign to nil any reference, this reference countdown by reference count and deallocates if necessary.

Classic assignment cannot be made to assign a reference to nil. Classic assignments are always assignments to the data carried by the reference. If the data type carried by the reference is nil compatible, the nil assignment is made to the data it contains.

Assigning a reference to nil does not make all references to be set to nil. It simply ensures that the relevant reference no longer performs reference counting and disposes of ownership of the allocation.

The built-in `drop` function drops allocation and reference counting, sets reference to nil. If you want to check if the reference is zero and has allocation, use the built-in real function. The real function returns boolean.

For example:
```
fn main() {
    let mut x = new(int, 20)
    outln(real(x)) // true
    drop(x)
    outln(real(x)) // false
}
```

### Understanding Reference Counting
A reference counting heap counts each time it gets a reference to a dedicated pointer. It is deducted from the count when it loses its references. When the reference count reaches zero, it releases the allocation as it is no longer used.

Reference counting is not a program running in the background. Therefore, it does not host variable loads at runtime like the garbage collector and its release times are always specific. Reference counting offers the developer a deterministic memory management.

For example:
```
fn test() {

    // Make heap-allocation, returns heap-allocated &int initialized with 100
    // Ref count is 1
    let mut x = new(int, 100)

    // Prints 100
    outln(x)

    // Make new heap-allocation with 50, ref count is 1
    // Frees old allocation because ref count is 0 now
    x = new(int, 50)

    // Ref count is 2 now of current allocation
    // The y referencing to allocation of x
    let y = x

    // Prints 50
    outln(y)

} // Frees allocation because ref count is 0, destroyed all references
```

### Critical Points
Jule has language-integrated concurrency and for concurrency, reference counting should be atomic. Reference counting may not occur correctly if there is no atomicity in concurrency. That is, when a reference is referenced by a different reference, it must do so in an atomic way. But the fact that this happens all the time raises a problem: the critical impact on performance.

Atomic operations are essential for references to be thread-safe, but in cases where this is not necessary? Atomicity means overhead, which means loss of performance. It is inherently unnecessary to have atomicity when atomicity is not required. Jule references works atomic because thread-safe must be guaranteed.

This means that references will use atomicity for reference counting on each copy. This atomicity creates an atomicity overhead in memory with each copy operation. Obviously this shouldn't be a major cause of performance degradation in your runtime in most cases. However, references also contain a memory footprint. This memory footprint is the memory space allocated separately for the counter used in reference counting.

All of these are minor overheads, but for performance-critical software, the developer may want to eliminate them. There is no way to do this using references as the runtime paradigm of references cannot be changed. Therefore, the developer should use to the less safe manual memory management. 

---

Some data types of Jule also use references in the background. This is because they reference each other the space they allocate. This is why some types use background references to minimize the amount of allocations. Therefore, they have additional overhead such as the additional atomicity of references and the memory space allocated for reference counting.

List of all types which is performs reference counting:
- Reference
- Slice
- Any
- Trait

### Using References with Reference-Counted Types
Data types that already perform reference counting can be used with references if supported. This does not pose any problem. References perform a reference counting in themselves, if the data they carry has a reference counting, it does not interfere with them.

If the reference count of the migrated data has not reached zero, but the reference carrying it has now released its allocation, there is no problem. This is because the reference counting and allocation control of the data it carries take place independently.

For example:
```
fn main() {
    let ref = new([]int, [1, 2, 3, 4])
    let s: []int = ref
    drop(ref)
    outln(s)
}
```
The `ref` variable holds a slice. Slices are data types that perform reference counting in themselves. The slice carried by the reference is assigned to the variable `s` and then the reference is dropped, this reference will make the counting zero, so the allocation of the reference is freed.

This does not pose any problem. Everything works normally when the variable `s` is printed. The reference count of the slice did not reach zero and therefore its allocation was not released. The allocation of the reference passed to the variable `s` as a copy, not a pointer. For this reason, slice continued to protect its own allocation.
::: tip
This happens the same for all reference-counted data types supported by references. 
:::

### Reference Cycles
Jule does not handle reference cycles. Obviously this can create a significant overhead at runtime and is a negative factor in program runtime for performance-critical software development processes. Therefore, reference cycles should be considered by the developer. What makes cycles so important is not that they cause any errors at runtime, it's that they can leak memory.

If the references point to each other or to themselves, a cycle occurs, and even if it goes out of use, the allocation is not freed, so memory leaks can occur. The best way to avoid this is to consider cycles in the programming phase.

For example:
```
struct A {
    b: &B
}

struct B {
    a: &A
}

fn main() {
    let mut a = &A{}
    let mut b = &B{}
    a.b = b
    b.a = a
}
```
There is a cycle in the above code. Obviously this cycle is creates a memory leak. If there is such a cycle risk, the easiest and shortest solution is to drop the references so that the cycle will break.

For example:
```
struct A {
    b: &B
}

struct B {
    a: &A
}

fn main() {
    let mut a = &A{}
    let mut b = &B{}
    a.b = b
    b.a = a
    drop(b.a)
}
```
The reference count cycle is broken as one of the parties causing the cycle is removed, so there shouldn't be any memory leaks in the above code.

Software developers may not always have code that they can cycle through. But when cycles do occur, they can be difficult to spot and locate. So just being a little more careful when there are potential cycle situations can make things a lot safer.

## Slices
Slices have a capacity, but don't free unused capacities. This capacity can be used during slicing. If you have a slice with a length of 5 but its capacity is 8, you can expand the slice to use all the capacity by giving 8 during slicing.

For example:
```
fn main() {
    let mut s = [1, 2, 3]
    s = append(s, 4, 5)
    s = s[:s.len-2]
    outln(s)  // [1 2 3]
    s = s[:]
    outln(s)  // [1 2 3]
    s = s[:5] // [1 2 3 4 5]
    outln(s)
}
```