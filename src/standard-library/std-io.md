# std::io
## Globals

```jule
static mut STDIN: &File
```
File handler for stdin.

---

```jule
static mut STDOUT: &File
```
File handler for stdout.

---

```jule
static mut STDERR: &File
```
File handler for stderr.

## Functions
```jule
fn readln(): str
```
Reads full-complete line from command-line. 