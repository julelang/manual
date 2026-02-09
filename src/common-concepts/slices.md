# Slices
A slice is a dynamically allocated array; for this reason, it doesn't have a constant size expression. Slices are heap-allocated and use Jule's reference-counting memory management. A slice can be `nil,` and its default value is `nil`. Slices are mutable.

Slices are defined using `[ ]`. Actually, you might remember this from the array section of the documentation. They actually mean slice by default. When used in arrays, the examples always use type annotation, which indicates that it's an array. If no type annotation is given, a slice literal defaults to the data type of its first element as the element type.

Example to slices:
```jule
fn main() {
    let mut mySlice: []str = nil
    mySlice = ["Hello", "Jule", "slices!"]
    println(mySlice)
}
```
Nil is the default value of slices.

As seen in the first statement, slices should be defined with a data type. The second statement sets the value of `my_slice` as `["Hello", "Jule", "slices!"]`. The last statement prints `my_slice` to the console.

Output of program:
```
[Hello Jule slices!]
```

## Slice Literals with Explicit Type

You can combine casting and slice literals for explicit typed slice literals.

For example:
```jule
let x = []f64([1, 2, 3, 4, 5])
```

At example above, the variable `x` has the `[]f64` type.

### Range Iterations

Slices can be used with range iteration. The first variable in the iteration is an integer-type index variable. This variable represents the index of the element, while the second variable is the element currently pointed to in the iteration.

## Passing Slices to Variadic Parameter
We know that `...` is used for Variadic parameters. We also know that each variadic parameter is actually a slice.

So, can we pass a slice to a variadic parameter? Yes. Again, the `...` operator is used for this.

For example:
```jule
fn sum(values: ...int) int {
    let mut total: int = 0
    for _, i in values {
        total += i
    }
    ret total
}

fn main() {
    let mySlice = [90, 32, 6, 53]
    let result = sum(mySlice...)
    println(result)
}
```
As seen in the example above, the owned variable `mySlice` holds a slice. Its elements are compatible with the variadic parameter. To send, it is sufficient to follow the `...` operator.
::: warning
If you pass slice to variadic parameter, you can't pass more value.
:::

## Length and Capacity of Slices

Slices have two sizes in different concepts: the first one is the length, and the second one is the capacity.

The length of the slice means the number of slice elements. Length is always in `0>= && <=capacity` range. The zero-length means the slice does not have any elements.

The capacity is the maximum number of elements before the reallocation is automatically performed. If the length reaches/overflows the capacity somehow, the buffer will be reallocated with more capacity to store more elements.

You can use the built-in `len` function to get the length of the slice. And also, there is the built-in `cap` function to get the capacity of the slice.

The `nil` slices are considered as zero-length and zero-capacity.

For example:

```jule
len(mySlice)
```

```jule
cap(mySlice)
```

## Buffering

In Jule, slice types have a buffer inside them. This buffer can be pre-sized for more efficient uses.

Buffers are managed automatically. If they need to grow, they will expand automatically. However, downsizing is not done automatically.

A specifically sized slice can be allocated with the builtin `make` function.

For example:
```jule
fn main() {
    let s = make([]int, 20)
    println(s)
}
```
At the example above, the `s` variable is 20 sized slices and all elements initialized with default value.

The `make` function can also allocate slices with capacity.

For example:
```jule
fn main() {
    let s = make([]int, 20, 100)
    println(s)
}
```
At the example above, the `s` variable is 20 sized slices and first 20 elements initialized with default value. Slice capacity is `100`.

## Copy Slices

For copy slices, here is the built-in `copy` function. The built-in `copy` function copies source elements into destination slice and returns count of copied elements.

For example:
```jule
let mut slice1 = [1, 2, 3, 4, 5]
let mut slice2 = make([]int, 5)
copy(slice2, slice1)
```

## Append Elements into Slices

For append elements into slice, here is the built-in `append` function. The built-in `append` function appends elements to a slice if the slice already has enough capacity for new elements. If the slice does not have enough capacity for new elements, the `copy` function makes a new allocation with new capacity, copies the source slice elements to the new allocation, and then appends elements to the new allocation. Returns appended slice.

For example:
```jule
let mut s = [1, 2, 3, 4, 5]
println(uintptr(&s[0]))
s = append(s, 6, 7, 8, 9)
println(uintptr(&s[0]))
```

The example above shows a basic append operation. The slice `s` has 5 elements with 5 length and 5 capacity. Then we append new elements into slice. The slice `s` has 9 elements with 9 length now. But remember the capacity thing. In the beginning, slice `s` have not enough capacity for more than 4 elements. Therefore, the `append` function returns a new allocated slice, so you can see there is a difference between the addresses of the slice's first element.

Same example with capacity:
```jule
let mut s = make([]int, 0, 10)
s = append(s, 1, 2, 3, 4, 5)
println(uintptr(&s[0]))
s = append(s, 6, 7, 8, 9)
println(uintptr(&s[0]))
```

This time, you can see there is no difference between the addresses of the first slice's element. Because slice `s` allocated with 10 capacity, the `append` function just copies new elements to the slice and returns the same destination slice allocation.