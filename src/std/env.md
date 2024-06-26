# std::env
## Globals
### `const Arch: str`
The running program's architecture target: one of i386, amd64 and so on.\
To view possible combinations of OS, run `julec tool distarch`

---

### `const Os: str`
The running program's operating system target: one of darwin, linux and so on.\
To view possible combinations of OS, run `julec tool distos`

## Functions

```jule
fn Args(): []str
```
Returns command-line arguments.
Starts with the program name.

---

```jule
fn Env(): []str
```
Returns envrionment variables.

---

```jule
fn WorkingDir()!: str
```
Returns an absolute path name of the current working directory of the calling process.

Possible errors: `Denied`

---

```jule
fn SetWorkingDir(path: str)!
```
Changes the current working directory to the given directory.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `InsufficientMemory`

---

```jule
fn Executable(): str
```
Returns executable path.\
Returns empty string if any error occurs. 

## Enums
`enum EnvError`

**Fields:**
- `Denied`: Search permission is denied for a component of the path prefix
- `IO`: Input/Output error, an error occurred while reading from the file system
- `Loop`: A loop exists in symbolic links encountered during resolution of the path argument
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: A component of path does not name an existing file or path is an empty string
- `NotDir`: A component of the path prefix is not a directory
- `InsufficientMemory`: Insufficient memory to complete the operation
- `Device`: Device did not respond