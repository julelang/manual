# std::env
## Functions

```jule
fn args(): []str
```
Returns command-line arguments.
Starts with the program name.

---

```jule
fn env(): []str
```
Returns envrionment variables.

---

```jule
fn working_dir(): (str, EnvError)
```
Returns an absolute path name of the current working directory of the calling process.

Possible errors: `Denied`

---

```jule
fn set_working_dir(path: str): EnvError
```
Changes the current working directory to the given directory.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `InsufficientMemory`

---

```jule
fn executable(): str
```
Returns executable path.\
Returns empty string if any error occurs. 

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
