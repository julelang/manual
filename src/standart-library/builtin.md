# builtin
## Type Aliases
### `type byte: u8`
Is an alias for u8. It is used, by convention, to distinguish byte values from 8-bit unsigned integer values. 

---

### `type rune: i32`
Is an alias for i32. It is used, by convention, to distinguish character values from integer values.

## Functions
```
fn out(v)
```
Prints value to command line. Uses built-in formatter.

---

```
fn outln(v)
```
This function same with the `out` function. One difference, prints new line after print. 

---

```
fn panic(error: any)
```
Panics program with given error data. The data converting to str and panics with Error trait compatible structure instance. 

---

```
fn recover(handler: fn(Error))
```
Recovers errors if exist and call given function with handled error instance. 

---

```
fn new(T): &T
```
Returns nil reference of data type. 

---

```
fn new(T, mut v: T): &T
```
Returns reference to new heap-allocation initialized with expression of data type if allocation is success, panics if not.

---

```
fn drop(ref: mut &T)
```
Drops allocation and reference counting of reference. 

---

```
fn real(ref: mut &T): bool
```
Reports reference is not nil. 

---

```
fn make(T, ...V): T
```
Returns new instance of data type for supported types. 
- Slices:\
    Allocates slice with dynamic size.\
    Negative sizes will be accepted as 0-sized. 

---

```
fn copy(mut dest: []T, mut src: []T): int
```
Copies elements of source to destination slice.\
Returns number of copied elements.\
Source can be any data type that supported by destination type. 

Special cases are:
- `copy(dest, src) = length accepts as src.len if dest.len > src.len`
- `copy(dest, src) = length accepts as dest.len if src.len > dest.len`

---

```
fn append(src: []T, mut values: ...T): []T
```
Creates new required sized slice. Copies all elements of given source slice and appends given values to end of new slice. Returns new slice, not changes given source slice. If you want append values to source slice, assign returned slice. 

---

```
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
[See more clonning information.](/memory/immutability#clonning)
:::

## Traits
```
trait Error {
    fn error(self): str
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
```
let (result, err) = div(x, y)
if err != nil {
    // If has error...
}
```