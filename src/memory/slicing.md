# Slicing

Slicing simply refers to retrieving some of the data in memory for supported types. This is generally supported for data types such as arrays or slices that are stored continuously. The limit of slicing is the first index and the last index. Exceeding these will result in a runtime panic. Slicing cost and behavior may vary for data types.

### Syntax
```
DATA[START:TO]
```
For example:
```jule
foo[2:10]
```
In the example above, slice items start at `2` to `10`. The `10` index is not included. So if you want to slice all components of the data after the index `2`, the length of the data needs to be given.

### Auto Indexing
If you don't give the start index expression, `0` is assumed.
If you don't give the 'to index' expression, the whole length is assumed.

For example:
```jule
fn main() {
    let mySlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    println(mySlice[2:5]) // [3, 4, 5]
    println(mySlice[:])   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    println(mySlice[:10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    println(mySlice[4:])  // [5, 6, 7, 8, 9, 10]
}
```

### 3-Index Slicing
3-index slicing is only supported by slices. The third index specifies the capacity limit of the slice. This method can be used to ensure the memory safety of shared slices. For example, it allows sharing the same memory with a slice until an append operation occurs. When an append operation happens, if the slice's capacity is capped to its length, a new slice allocation occurs, preventing the append operation from affecting the capacity of the original slice.

#### Syntax
```
DATA[START:TO:CAP]
```
For example:
```jule
foo[2:10:10]
```
In the example above, slice items start at `2` to `10`. The `10` index is not included. So if you want to slice all components of the data after the index `2`, the length of the data needs to be given. Slice capacity will be capped to `10`.

::: warning
For 3-index slicing, the middle and final index must be given.
:::