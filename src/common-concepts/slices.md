# Slices
A slice is a dynamic allocated array, for this reason it doesn't have a constant size expression. Slices are heap allocated and use Jule's reference counting memory management. A slice can be `nil` and its default value is `nil`. Slices are mutable.

Slices are defined using `[ ]`. Actually, you might remember this from the array section of documentation. They actually mean slice by default. When used in arrays, so examples always use type annotation, which indicates that it's an array. If no type annotation is given, a slice literal defaults to the data type of its first element as element type.

Example to slices:
```jule
fn main() {
    let mut mySlice: []str = nil
    mySlice = ["Hello", "Jule", "slices!"]
    outln(mySlice)
}
```
Nil is the default value of slices.

As seen at the first statement, slices should be defined with a data type. The second statement sets the value of `my_slice` as `["Hello", "Jule", "slices!"]`.  The last statement prints `my_slice` to console.

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

## Passing Slices to Variadic Parameter
We know that `...` is used for Variadic parameters. We also know that each variadic parameter is actually a slice.
So can we pass an slice to a variadic parameter? Yes. Again, the `...` operator is used for this.

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
    outln(result)
}
```
As seen in the example above, the owned variable `mySlice` holds a slice. Its elements are compatible with the variadic parameter. To send, it is sufficient to follow the `...` operator.
::: warning
If you pass slice to variadic parameter, you can't pass more value.
:::

## Length and Capacity of Slices

Slices are have two size in different concept: first one is the length and second one is the capacity.

The length of slice means count of slice elements. Length is always in `0>= && <=capacity` range. The zero-length means the slice is not have any element.

The capacity is the number of maximum elements before the rellocation automatically. If length reaches/overflows the capacity somehow, buffer will be reallocated with more capacity to store more elements.

You can use the built-in `len` function to get length of the slice. And also there is the built-in `cap` function to get capacity of the slice.

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

## Copy Slices

For copy slices, here is the built-in `copy` function. The built-in `copy` function copies source elements into destination slice and returns count of copied elements.

For example:
```jule
let mut slice1 = [1, 2, 3, 4, 5]
let mut slice2 = make([]int, 5)
copy(slice2, slice1)
```

## Append Elements into Slices

For append elements into slice, here is the built-in `append` function. The built-in `append` function appends elements into slice if slice already have enough capacity for new elements. If slice have not enough capacity for new elements, the `copy` function makes new allocation with new capacity, copies source slice elements to new allocation and then appends elements to new allocation. Returns appended slice.

For example:
```jule
let mut s = [1, 2, 3, 4, 5]
outln(uintptr(&s[0]))
s = append(s, 6, 7, 8, 9)
outln(uintptr(&s[0]))
```

The example above, shows basic append operation. The slice `s` has 5 element with 5 length and 5 capacity. Then we appending new elements into slice. The slice `s` has 9 elements with 9 length now. But remember capacity thing. In the beginning, slice `s` have not enough capacity for more 4 elements. Therefore, the `append` function returns new allocated slice, so you can see there is difference between addresses of slice's first element.

Same example with capacity:
```jule
let mut s = make([]int, 0, 10)
s = append(s, 1, 2, 3, 4, 5)
outln(uintptr(&s[0]))
s = append(s, 6, 7, 8, 9)
outln(uintptr(&s[0]))
```

This time, you can see there is no difference between addresses of first slice's element. Because slice `s` allocated with 10 capacity, so the `append` function just copies new elements to slice and returns same destination slice allocation.