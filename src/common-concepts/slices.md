# Slices
A slice is a dynamic allocated array, for this reason it doesn't have a constant size expression. Slices are heap allocated and use Jule's reference counting memory management. A slice can be `nil` and its default value is `nil`. Slices are mutable.

Slices are defined using `[ ]`. Actually, you might remember this from the array section of documentation. They actually mean slice by default. When used in arrays, so examples always use type annotation, which indicates that it's an array. If no type annotation is given, a slice literal defaults to the data type of its first element as element type.

Example to slices:
```
fn main() {
    let mut my_slice: []str = nil
    my_slice = ["Hello", "Jule", "slices!"]
    outln(my_slice)
}
```
Nil is the default value of slices.

As seen at the first statement, slices should be defined with a data type. The second statement sets the value of `my_slice` as `["Hello", "Jule", "slices!"]`.  The last statement prints `my_slice` to console.

Output of program:
```
[Hello Jule slices!]
```

## Passing Slices to Variadic Parameter
We know that `...` is used for Variadic parameters. We also know that each variadic parameter is actually a slice.
So can we pass an slice to a variadic parameter? Yes. Again, the `...` operator is used for this.

For example:
```
fn sum(values: ...int) int {
    let mut total: int = 0
    for _, i in values {
        total += i
    }
    ret total
}

fn main() {
    let my_slice = [90, 32, 6, 53]
    let result = sum(my_slice...)
    outln(result)
}
```
As seen in the example above, the owned variable `my_slice` holds a slice. Its elements are compatible with the variadic parameter. To send, it is sufficient to follow the `...` operator.
::: warning
If you pass slice to variadic parameter, you can't pass more value.
:::

## Slicing
You can slice compatible types with indexing. As a result of slicing a slice, no new allocation is created, no copying is performed. The relevant memory section of the sliced slice is referenced and its length is limited by the length of the slice. 

### Syntax
```
EXPRESSION[START_EXPRESSION:TO_EXPRESSION]
```
For example:
```
my_slice[2:10]
```
At the example above, slice items start at `2` to `10` The `10` index is not included. So if you want to slice all components of a slice after the index `2`, the length of the slice needs to be given.

### Auto Indexing
If you don't give the start index expression, `0` is assumed.
If you don't give the 'to index' expression, the whole length is assumed.

For example:
```
fn main() {
    let my_slice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[2:5]) // [3, 4, 5]
    outln(my_slice[:])   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[:10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(my_slice[4:])  // [5, 6, 7, 8, 9, 10]
}
```

### Supported Types
Arrays, slices and strings.

## Allocating Slices
A specifically sized slice can be allocated with the builtin `make` function.

For example:
```
fn main() {
    let s = make([]int, 20)
    outln(s)
}
```
At the example above, the `s` variable is 20 sized slices and all elements initialized with default value.

The `make` function can also allocate slices with capacity.

For example:
```
fn main() {
    let s = make([]int, 20, 100)
    outln(s)
}
```
At the example above, the `s` variable is 20 sized slices and first 20 elements initialized with default value. Slice capacity is `100`.
