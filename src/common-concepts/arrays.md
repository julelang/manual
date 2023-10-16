# Arrays
The array for storing a fixed size sequence of elements. 

## Syntax
```
[CONST_SIZE_EXPRESSION]DATA_TYPE
```
For example:
```jule
[50]int
```

## Triple Dot for Auto Computing Size of Array Literals
You can use `...` for auto computing size of array literal at compile time.

For example:
```jule
let x: [...]int = [1, 2, 3, 4, 5] // [5]int
```

## Access to Elements and Indexing
Index system is simple. Starts at `0` and continue step by step. Negative and floating-point indexes are considered invalid / not allowed for indexing.

Arrays use indexes to access elements and assignment.

For example:
```jule
fn main() {
    let mut my_array: [3]str = ["Hello", "arrays", "indexes"]
    outln(my_array[0])
    my_array[0] = "Hi"
    outln(my_array)
}
```
For element access, index is written between brackets (`[]`). First statement declares our array. Second statement prints first element of our array. Next statement sets first element of our array as `"Hi"`. The last statement prints our array to console.

Output of program:
```
Hello
[Hi arrays indexes]
```

## Multidimensional Arrays
A multidimensional array is an array storing arrays.

For example:
```jule
fn main() {
    let my_array: [2][2]str = [
        ["Apple", "Banana"],
        ["Bred", "Cheese"],
    ]
    outln(my_array)
}
```

Output of program:
```
[[Apple Banana] [Bred Cheese]]
```