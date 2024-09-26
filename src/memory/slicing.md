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