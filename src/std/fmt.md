# std::fmt

## Functions
```jule
fn Format(fmt: str, args: ...any): str
```
It places the passes arguments in the string relative to the corresponding format string. The ToStr function provided by the API is used for string conversion. Returns format string if `args.len == 0`. If the arguments have ended, the remaining part of format string is not processed and is returned as is.

**Formatting:**

Arguments are processed sequentially. That is, when an argument encounters a format string parameter, it will be processed according to how many parameters it is. The 5th parameter uses the 5th argument as the value.

Each format parameter is represented as `{}` in the format string. These parameters will then be deleted according to the processing algorithm and replaced with arguments.

The parameter `{{}}` is formatted as `{}` actually,
And does not increase argument list offset.

**Examples:**

- `Format("{} {}!", "Hello", "World")` = `"Hello World!"`
- `Format("{} {}")` = `"{} {}"`
- `Format("{} is the {}", "Pi Number")` = `"Pi Number is the {}"`

---

```jule
fn Printf(fmt: str, args: ...any)
```
Prints result of formatting to stdout. See documentation of format function for formatting.

---

```jule
fn Print(args: ...any)
```
Prints arguments by default formatting to stdout.

---

```jule
fn Println(args: ...any)
```
Prints arguments by default formatting to stdout.
Prints new-line after arguments.

---

```jule
fn Fprint(mut f: &File, args: ...any)
```
Prints arguments to file by default formatting. See documentation of format function for formatting.

---

```jule
fn Fprintln(mut f: &File, args: ...any)
```
Prints arguments to file by default formatting. Prints new-line after arguments. See documentation of format function for formatting.

---

```jule
fn Fprintf(mut f: &File, fmt: str, args: ...any)
```
Prints result of formatting to file. See documentation of format function for formatting.

---

```jule
fn Sprint(args: ...any): str
```
Returns string result of arguments by default formatting.