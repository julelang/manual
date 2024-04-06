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
fn panic(message: str)
```
Panics program with given error message.
This panics are not recoverable.

---

```jule
fn assert(expr: bool, ...)
```
Call panic function if expression is evaluated false at runtime. You can also give custom assertion fail log message with second argument. The log message should be constant string.

---

```jule
fn new(T): &T
```
Returns new reference-type for T initialized with default.

---

```jule
fn new(T, expr: T): &T
```
Returns new reference-type for T initialized with expression.

---

```jule
fn make(T, ...V): T
```
Returns new instance of data type for supported types. 
- Slices:\
    Allocates slices dynamically.
    In addition to the slice type, it can take two more arguments. The first argument is mandatory. The first argument specifies the length of the slice. The second argument specifies the capacity of the slice and is optional. The slice is returned with its length, and the field within its length is initialized with the default value.
- Strings:\
    Allocates buffered strings. In addition to the str type, it can one more argument. This additional argument is the capacity of the string's buffer.

---

```jule
fn copy(mut dest: Dest, mut src: Src): int
```
Copies elements of source to destination.\
Returns number of copied elements.\
Source can be any data type that supported by destination type. 

Special cases are:
- `copy(dest, src) = length accepts as src.len if dest.len > src.len`
- `copy(dest, src) = length accepts as dest.len if src.len > dest.len`

Slice destination:\
&nbsp;&nbsp;&nbsp;&nbsp;In slice destinations, source should be compatible type slice.\
&nbsp;&nbsp;&nbsp;&nbsp;If destination slice is `[]byte`, source might be `str` also.

Str destination:\
&nbsp;&nbsp;&nbsp;&nbsp;In `str` destinations, source should be `str`.\
&nbsp;&nbsp;&nbsp;&nbsp;But source also might be a `[]byte`.

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

::: tip
[See more cloning information.](/memory/immutability#cloning)
:::
