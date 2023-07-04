# std::os
## Globals
### `let ARGS: []str`
Holds the command-line arguments.\
Starts with the program name.

Special bytes trimmed if program name have any special byte at begin or end.\
Special bytes are: `" ' < >`
::: warning
Command-line arguments sets at runtime with init function.\
Initialize expression is nil.\
You got nil slice if used as initialize expression to any global.
:::

---

### `const PATH_SEPARATOR`
Operating system specific path separator.

---

### `const PATH_LIST_SEPARATOR`
Operating system specific path list separator.

## Functions
```
exit(code: int)
```
Causes the current program to exit with the given status code.\
Conventionally, code zero indicates success, non-zero an error.

---

```
fn getwd(): (str, OsError)
```
Returns an absolute path name of the current working directory of the calling process.

Possible errors: `Denied`

---

```
fn chdir(path: str): OsError
```
Changes the current working directory to the given directory.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `InsufficientMemory`

---

```
fn is_path_sep(c: u8): bool
```
Reports whether c is path separator.

---

```
fn executable(): str
```
Returns executable path.\
Returns empty string if any error occurs. 

## Enums
`enum OsError`

**Fields:**
- `Ok`: No problem
- `Denied`: Search permission is denied for a component of the path prefix
- `IO`: Input/Output error, an error occurred while reading from the file system
- `Loop`: A loop exists in symbolic links encountered during resolution of the path argument
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: A component of path does not name an existing file or path is an empty string
- `NotDir`: A component of the path prefix is not a directory
- `InsufficientMemory`: Insufficient memory to complete the operation
- `Divice`: Divice did not respond
