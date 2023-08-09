# builtin
## Type Aliases
### `type byte: u8`
Is an alias for u8. It is used, by convention, to distinguish byte values from 8-bit unsigned integer values. 

---

### `type rune: i32`
Is an alias for i32. It is used, by convention, to distinguish character values from integer values.

## Functions
```jule
fn out(v)
```
Prints value to command line. Uses built-in formatter.

---

```jule
fn outln(v)
```
This function same with the `out` function. One difference, prints new line after print. 

---

```jule
fn panic(error: any)
```
Panics program with given error data. The data converting to str and panics with Error trait compatible structure instance. 

---

```jule
fn recover(handler: fn(Error))
```
Recovers errors if exist and call given function with handled error instance. 

---

```jule
fn new(T): &T
```
Returns nil reference of data type. 

---

```jule
fn new(T, mut v: T): &T
```
Returns reference to new heap-allocation initialized with expression of data type if allocation is success, panics if not.

---

```jule
fn drop(ref: mut &T)
```
Drops allocation and reference counting of reference. 

---

```jule
fn real(ref: mut &T): bool
```
Reports reference is not nil. 

---

```jule
fn make(T, ...V): T
```
Returns new instance of data type for supported types. 
- Slices:\
    Allocates slices dynamically.
    In addition to the slice type, it can take two more arguments. The first argument is mandatory. The first argument specifies the length of the slice. The second argument specifies the capacity of the slice and is optional. The slice is returned with its length, and the field within its length is initialized with the default value.

---

```jule
fn copy(mut dest: []T, mut src: []T): int
```
Copies elements of source to destination slice.\
Returns number of copied elements.\
Source can be any data type that supported by destination type. 

Special cases are:
- `copy(dest, src) = length accepts as src.len if dest.len > src.len`
- `copy(dest, src) = length accepts as dest.len if src.len > dest.len`

---

```jule
fn append(mut src: []T, mut items: ...T): []T
```
If there is enough capacity, it adds to the target slice. If there is not enough capacity, it creates a copy of the target slice with enough capacity and adds the new elements and returns the new allocation.

---

```jule
fn clone(expr: T): T
```
Returns mutable deep-clone of expression.

Allowed types:
- `[]T`
- `[...]T`
- `[K:V]`
- `&T`
- `*T:`
- `jule:derive Clone`
::: tip
[See more cloning information.](/memory/immutability#cloning)
:::

## Traits
```jule
trait Error {
    pub fn error(self): str
}
```
This is a error handling trait of standard library.\
It is used for error handling and panics.

Example to error handling:\
You have a `div` method have two `f64` parameter: `x` and `y`.\
This function returns division of given arguments.\
Actually returns: `(f64, Error)`\
The first return value naturally result of computation.\
Returns result and empty Error for if the `x` and `y` is not equals to `0`.\
If not, returns `0` and returns `Error` instance with error message.\

You can handle errors like that:
```jule
let (result, err) = div(x, y)
if err != nil {
    // If has error...
}
```