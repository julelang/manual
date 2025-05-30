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

## Auto-Sized Arrays
You can use `...` for auto computing size of array literal at compile time.

For example:
```jule
let x: [...]int = [1, 2, 3, 4, 5] // [5]int
```

::: info
Only works as expected with variables. Other declarations supports this syntax, but always uses zero length arrays, not auto-sized arrays.
:::

## Array Literals with Explicit Type

You can combine casting and array literals for explicit typed array literals.

For example:
```jule
x := [5]int([1, 2, 3, 4, 5])
```

## Filling Arrays

You can use `...` for filling arrays with special expression.

For example:
```jule
let x: [1000]int = [100, ...]
```

The array in the example above holds `1000` integers and each integer is set to `100`.

::: info
This method cannot be used for auto-sized arrays.
:::

## Access to Elements and Indexing
Index system is simple. Starts at `0` and continue step by step. Negative and floating-point indexes are considered invalid / not allowed for indexing.

Arrays use indexes to access elements and assignment.

For example:
```jule
fn main() {
    let mut myArray: [3]str = ["Hello", "arrays", "indexes"]
    println(myArray[0])
    myArray[0] = "Hi"
    println(myArray)
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
    let myArray: [2][2]str = [
        ["Apple", "Banana"],
        ["Bred", "Cheese"],
    ]
    println(myArray)
}
```

Output of program:
```
[[Apple Banana] [Bred Cheese]]
```

## Length of Arrays

Arrays are always have compile-time evaluated fixed size. To get this fixed size, use the common built-in `len` function.

For example:

```jule
len(myArray)
```

## Arrays and Memory

Arrays are allocated on the stack and this is guaranteed. But they are not implemented with references and common allocations. So when an array is copied, a copy that shares the common allocation is not created. A new array is created on the stack.

The copies are not deep copy. Just allocates new stack with size of array and copies all elements with default copy semantics, not deep copy semantics.

### Range Iterations

Arrays can be used with range iteration. The first variable in the iteration is an integer-type index variable. This variable represents the index of the element, while the second variable is the element currently pointed to in the iteration.