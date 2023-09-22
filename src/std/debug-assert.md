# std::debug::assert

## Functions
```jule
fn assert(expr: bool)
```
Writes default fail message to `cerr` and exit failure if assertion failed.

---

```jule
fn assert_message(expr: bool, msg: str)
```
Writes fail message to `cerr` and exit failure if assertion failed.

---

```jule
fn assert_panic(expr: bool, error: any)
```
Panics with given error data if assertion failed. 