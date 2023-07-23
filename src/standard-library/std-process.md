# std::process

## Functions

```
fn executable(): str
```
Returns executable path.\
Returns empty string if any error occurs. 

---

```
exit(code: int)
```
Causes the current program to exit with the given status code.\
Conventionally, code zero indicates success, non-zero an error.
