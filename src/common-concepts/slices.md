# Slices
Slices is a dynamic allocated array, for this reason not has constant size expression. Slices are heap allocated and use Jule's reference counting memory management. A slice can be `nil` and its default value is `nil`. Slices are mutable.

Slices are defined using `[ ]`. Actually, you might remember this from the array section of documentation. They actually mean slice by default. When used in arrays, so examples always use type annotation, which indicates that it's an array. If no type annotation is given, A slice literal defaults to the data type of its first element as element type.

Example to slices:
```
fn main() {
    let mut my_slice: []str = nil
    my_slice = ["Hello", "Jule", "slices!"]
    outln(my_slice)
}
```
The nil is the default value of slices.

Second statement is set value of `my_slice` variable as `["Hello", "Jule", "slices!"]`. Seen at second statement, slices is should be define with data type. Last statement is prints to console the `my_slice` variable.

Output of program:
```
[Hello Jule slices!]
```

## Passing Slices to Variadic Parameter
We know that `...` is used for Variadic parameters. We also know that each variadic parameter is actually an slices.
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
As seen in the example above, the owned variable `my_arr `holds an slice. Its elements are compatible with the variadic parameter. To send, it is sufficient to follow the `...` operator.
::: warning
If you pass slice to variadic parameter, you can't pass more value.
:::

## Slicing
You can slice compatible types with indexing. As a result of slicing a slice, a new allocation is not created, no copying is performed. The relevant memory section of the sliced slice is referenced and its length is limited by the length of the slice. 

### Syntax
```
EXPRESSION[START_EXPRESSION:TO_EXPRESSION]
```
For example:
```
my_slice[2:10]
```
The example at above, slices items starts at `2` to `10` The `10` index is not included. So if you want slice all components of slice after the index `2`, give length of slice.

### Auto Indexing
If you don't give the start index expression, accepts as `0`.
If you don't give the to index expression, accepts as length.

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
A certain size slice can be allocated with the builtin `make` function.

For example:
```
fn main() {
    let s = make([]int, 20)
    outln(s)
}
```
The example at above, the `s` variable is 20 sized slice. 