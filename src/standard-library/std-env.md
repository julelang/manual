# std::env
## Globals
### `static ARGS: []str`
Holds the command-line arguments.\
Starts with the program name.
::: warning
Command-line arguments sets at runtime with init function.\
Initialize expression is nil.\
You got nil slice if used as initialize expression to any global.
:::

---

### `static ENV: []str`
Holds the environment variables.
::: warning
Environment variables sets at runtime with init function. \
Initialize expression is nil. \
You got nil slice if used as initialize expression to any global.
:::

## Functions

```
fn getwd(): (str, EnvError)
```
Returns an absolute path name of the current working directory of the calling process.

Possible errors: `Denied`

---

```
fn chdir(path: str): EnvError
```
Changes the current working directory to the given directory.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `InsufficientMemory`

## Enums
`enum EnvError`

**Fields:**
- `Ok`: No problem
- `Denied`: Search permission is denied for a component of the path prefix
- `IO`: Input/Output error, an error occurred while reading from the file system
- `Loop`: A loop exists in symbolic links encountered during resolution of the path argument
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: A component of path does not name an existing file or path is an empty string
- `NotDir`: A component of the path prefix is not a directory
- `InsufficientMemory`: Insufficient memory to complete the operation
- `Device`: Device did not respond
