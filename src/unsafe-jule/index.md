# Unsafe Jule
We know, Jule is safe. But you are a developer who knows what you are doing, you are confident. There is the `unsafe` keyword for you. With this keyword, you can circumvent Jule's safety and engage in unsafe behavior. This is understandably insecure and can compromise your program's safety. All responsibility in this matter belongs to you as the developer.

The reason for the unsafe Jule is that the computer is basically unsafe by nature. Sometimes you need this unsafety. If Jule didn't provide this, it would take more effort to solve some things with Jule. Maybe you could take an approach like using C++ interoperability, but is the effort really necessary? C++ interoperability is a nice feature and in some cases provides significant benefits. But having a C++ dependency of your Jule code exposed isn't always a good thing. It is very important that you can write pure Jule. As a developer, the only time you should feel like you should use C++ interoperability is when you really need to use C++ code.

Unsafe Jule can also allow you to get performance gains and better memory optimization. For example, if you are sure that a pointer never, ever needs to be guaranteed, you can achieve significant gains by obtaining this pointer with Unsafe Jule. Because that means there will be no new memory allocations and reference counting.

## Unsafe Benefits
The mentioned `unsafe` keyword allows us to use these powers. If you don't switch to insecure Jule, secure Jule will not allow you to engage in unsafe behavior.

Benefits of Unsafe Jule:
- Break immutability
- Deference a raw pointer
- Postfixes for raw pointers
- Indexing with raw pointers
- Cast raw pointers
- Call unsafe functions or methods

Note that this does not lead to a completely unsafe use of Jule. Other than the listed unsafe behaviors, Safe Jule will continue to show itself. This means you get a level of safety even with unsafe blocks.

Let's take a look at the unsafe behaviors listed above:

## Break Immutability
If a variable is immutable and has mutable data type, Safe Jule does not allow assigning it to a mutable variable. Memory safety on this is mentioned in the [immutability](/memory/immutability) documentations. There is a way to break it. It naturally means breaking safety as well, but you are conscious of it. Unsafe Jule does not encourage you to be safe about it.

The knowledge that the pointers are obtained as mutable when they are received is important in this regard. So if you take the pointer of an immutable variable and use it mutable, you can change the data of the immutable variable. Since you can only assign to pointers with Unsafe Jule, you will be aware that this is already an action that can create unsafety.

For example:
```
fn main() {
    let x = 10
    let mut xp = &x
    unsafe { *xp += 20 }
    outln(x) // 30
}
```

## Derefence a Raw Pointer
Unsafe Jule allows deference raw pointers.

For example:
```
fn main() {
    let x = 200
    let ptr = &x
    unsafe { outln(*ptr) }
}
```
Note that no safety is provided in this regard. Pointers can benefit you, but you have to provide safety yourself. You need to be wary of dangling pointers, buffer overflows, and similar memory issues.

## Postfixes for Raw Pointers
Unsafe Jule supports postfixes for raw pointers.

For example:
```
fn print_slice_components_with_unsafe(slc: []int) {
    unsafe {
        let mut ptr = &slc[0]
        let mut end = &slc[slc.len-1]
        end++
        for ptr < end {
            outln(*ptr)
            ptr++
        }
    }
}
```

## Indexing with Raw Pointers
This is especially true if you have a pointer to an array (for example, an array pointer allocated with `std::mem::c` package), which allows you to use the pointer just like an array. Maybe you would prefer to use a wrapper to help with the length for the offset, as they are just raw pointers and don't have a way to get the lengths right away like in Jule's slice or array structures.

The fact that this operation is covered by Unsafe Jule is not only because it has widespread pointer unsafety, but also because there is a possibility of overflow and this is not checked. For example, slice and array are safe and controlled in this regard.

When you have an array of pointers, it can be interpreted semantically like this: It is a pointer to the component type, as the pointer usually points to one of the memory areas. So think of it like a pointer to the field of an element of an array. Indexing is sensitive to the data type according to the offset, skipping that much space in the memory, finding the position of the offset and selecting that area. 

To better understand data type sampling, array pointers can be interpreted as:
- `*int` = `[]int `
-  `*str` = `[]str`

For example:
```
ptr[9]
```
Suppose the variable `ptr` is `*int`. Let this pointer be an array pointer. The above expression takes the data at index 9 of this array.

## Cast Raw Pointers
You can cast a pointer to an integer with valid integer types or cast a raw pointer from an integer. However, you can also cast a pointer to a pointer of different type.

For example:
```
let ptr: int = 0
let unsafe_ptr = unsafe { (*str)(ptr) }
```

## Call Unsafe Functions or Methods
You can call unsafe functions with Unsafe Jule. Functions or methods that qualify as unsafe can only be called with Unsafe Jule. Functions that qualify as unsafe can only be called with an Unsafe Jule and have an Unsafe Jule throughout their entire body.

For example:
```
unsafe fn my_unsafe_fn() { /* ... */ }
```
::: tip
Before qualifying a function or method as unsafe, make sure that the function is not safe all time. Even if it performs unsafe operations, it is better for the function to act as a safe wrapper than to qualify as unsafe if safety is guaranteed.

If safety depends on parameters and other external factors then it is better to qualify as unsafe. 
:::