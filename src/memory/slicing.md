# Slicing

Slicing simply refers to retrieving some of the data in memory for supported types. This is generally supported for data types such as array or slice that are stored continuously. The limit of slicing is the first index and the last index. Exceeding these will result in a runtime panic. Slicing cost and behavior may vary for data types.

### Syntax
```
DATA[START:TO]
```
For example:
```jule
foo[2:10]
```
At the example above, slice items start at `2` to `10` The `10` index is not included. So if you want to slice all components of the data after the index `2`, the length of the data needs to be given.

### Auto Indexing
If you don't give the start index expression, `0` is assumed.
If you don't give the 'to index' expression, the whole length is assumed.

For example:
```jule
fn main() {
    let mySlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(mySlice[2:5]) // [3, 4, 5]
    outln(mySlice[:])   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(mySlice[:10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    outln(mySlice[4:])  // [5, 6, 7, 8, 9, 10]
}
```

## Slices

Slices are perfect for slicing, suprisingly. Since the slices have mutable memory, the slicing cost is relatively cheap. A slice is created based on the relevant range and no new allocation or copying is performed due to the mutable buffer, only the cost of organizing the memory range pointed to by the returned slice.

The last index of slices is limited by their capacity. If you specify a value that exceeds length but does not exceed capacity when slicing a slice, the length of the slice will be expanded. In this way, if there is sufficient capacity, the slice can be expanded without having to reallocate.

## Arrays

In arrays, the last index is limited to the length of the array. Slicing behavior is like slices. Arrays do not support direct slicing and their sizes are fixed at compile time. Since the use of dynamic values ​​is allowed in slicing, the result of slicing is slice, not array. The returned slice will be allocated according to the relevant array range.

## Strings

In strings, the last index is limited to the length of the string. Slicing behavior is simply like substring. A new string is allocated from the relevant range.

Some compiler optimizations can prevent the allocation of new strings under appropriate conditions by mutably slicing string memories that slice themselves and assign the result to themselves.