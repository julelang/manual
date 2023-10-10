# Raw Pointers

## Derefence a Raw Pointer
Unsafe Jule allows deference raw pointers.

For example:
```jule
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
```jule
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
- `*int` = `[]int`
-  `*str` = `[]str`

For example:
```jule
ptr[9]
```
Suppose the variable `ptr` is `*int`. Let this pointer be an array pointer. The above expression takes the data at index 9 of this array.

## Cast Raw Pointers
You can cast a pointer to an integer with valid integer types or cast a raw pointer from an integer. However, you can also cast a pointer to a pointer of different type.

For example:
```jule
let ptr: int = 0
let unsafe_ptr = unsafe { (*str)(ptr) }
```

## Get Smart Pointer from Raw Pointer

From raw pointers, you can obtain smart pointers (aka reference types). One casting is sufficient for this. Of course, this conversion is not safe. Dangling pointers are not checked. Smart pointers continue to protect you only regarding nil pointers. However, smart pointers obtained in this way do not perform reference counting.

It is an Unsafe Jule feature that can be used to achieve optimization for purposes such as eliminating reference counting for a statically stored reference type. In addition, you legitimize the use of raw pointers in Safe Jule and eliminate the need to use Unsafe Jule for issues such as dereferencing.

For example:
```jule
fn main() {
    let x: int = 0
    let mut y = unsafe { (&int)(&x) }
    *y = 20
    outln(x)
}
```

## Pass Pointer to Reference

If you want to send your pointers to a reference parameter, you can do so with a simple pointer dereferencing. You are aware of the insecurity as this is already an action you would take using Unsafe Jule.

For example:
```jule
my_function(unsafe { *my_pointer })
```
