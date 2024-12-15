# builtin
## Type Aliases
### `type byte: u8`
Is an alias for u8. It is used, by convention, to distinguish byte values from 8-bit unsigned integer values. 

---

### `type rune: i32`
Is an alias for i32. It is used, by convention, to distinguish character values from integer values.

## Functions
```jule
fn print(v)
```
Prints value to command line.

Before printing the value will be converted to string. For string conversion, Jule's runtime package will be used, always. For types that contain special string conversion functions, such as structures, those functions are called for conversion.

String conversion implementation of runtime package may not be exact for some types compared to other conversion implementations which is provided by other standard library packages such as `std/conv`.

---

```jule
fn println(v)
```
This function same with the `out` function. One difference, prints new line after print.

---

```jule
fn panic(message: str)
```
Panics program with given error message.
This panics are not recoverable.

---

```jule
fn new(T): &T
```
Returns new reference-type for `T` initialized with default for type. It may take two arguments. The second argument used as initialization expression for memory allocation.

---

```jule
fn make(T, ...V): T
```
Returns new instance of data type for supported types. 
- Slices:\
    Allocates slices dynamically.
    In addition to the slice type, it can take two more arguments. The first argument is mandatory. The first argument specifies the length of the slice. The second argument specifies the capacity of the slice and is optional. The slice is returned with its length, and the field within its length is initialized with the default value.

- Channels:\
    Channels can only take a type parameter or a buffer capacity length. When a channel is initialized without capacity, it creates an unbuffered channel. If a capacity is provided, a buffered channel is created. Capacities smaller than zero result in a panic. If capacity is equals to zero, then an unbuffered channel will be created.

---

```jule
fn copy(mut dest: Dest, mut src: Src): int
```
The copy built-in function copies elements from a source slice into a destination slice. (As a special case, it also will copy bytes from a string to a slice of bytes.) The source and destination may overlap, it is safe. Copy returns the number of elements copied, which will be the minimum of len(src) and len(dst).

---

```jule
fn append(mut dest: []T, mut items: ...T): []T
```
If there is enough capacity, it adds to the destination slice. If there is not enough capacity, it creates a copy of the destination slice with enough capacity and adds the new elements and returns the new allocation. For `[]byte` types, variadic strings are allowed, such as: `append(bytes, "foo"...)`

---

```jule
fn len(T): int
```
Return length of T.

For slices:\
Returns length of slice, aka count of slice elements. If slice is nil, returns zero.

For strings:\
Returns length of string, aka count of string's bytes.

For arrays:\
Returns length of array, also means total capacity of array.

For maps:\
Returns count of key-value pairs of map. If map is nil, returns zero.

---

```jule
fn cap(T): int
```
Returns capacity of T.

For slices:\
Returns capacity of slice, aka possible maximum count of slice elements without expanding buffer.

For strings:\
Returns capacity of string, aka possible maximum count of bytes without expanding buffer.

---

```jule
fn delete(mut map[K]V, ...)
```
Deletes key from map. It takes two argument. The first one is map, second one is the key. If just given one argument, this one is a map, and clears all keys of map.

---

```jule
fn close(c: chan T)
```
Closes channel c. It should be executed only by the sender, never the receiver, and has the effect of shutting down the channel after the last sent value is received. After the last value has been received from a closed channel c, any receive from c will succeed without blocking, returning the zero value for the channel element.