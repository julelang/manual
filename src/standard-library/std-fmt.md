# std::fmt

## Functions
```jule
fn format(fmt: str, args: ...any): str
```
It places the passes arguments in the string relative to the corresponding format string. The to_str function provided by the API is used for string conversion. Returns format string if `args.len == 0`. If the arguments have ended, the remaining part of format string is not processed and is returned as is.

**Formatting:**

Arguments are processed sequentially. That is, when an argument encounters a format string parameter, it will be processed according to how many parameters it is. The 5th parameter uses the 5th argument as the value.

Each format parameter is represented as `{}` in the format string. These parameters will then be deleted according to the processing algorithm and replaced with arguments.

The parameter `{{}}` is formatted as `{}` actually,
And does not increase argument list offset.

**Examples:**

- `format("{} {}!", "Hello", "World")` = `"Hello World!"`
- `format("{} {}")` = `"{} {}"`
- `format("{} is the {}", "PI Number")` = `"PI Number is the {}"`

---

```jule
fn printf(fmt: str, args: ...any)
```
Prints result of formatting. See documentation of format function for formatting.
