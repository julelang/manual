# std::mem::c
## Functions
```
fn malloc(size: uint): *unsafe
```
Allocates size bytes of memory. Memory does not initialize. Returns pointer to allocation if success, nil if not.

---

```
fn calloc(size: uint, n: uint): *unsafe
```
Allocates n elements of size bytes each, all initialized to zero. Returns pointer to allocation if success, nil if not.

---

```
unsafe fn realloc(mut ptr: *unsafe, size: uint): *unsafe
```
Re-allocates the previously allocated block in ptr, making the new block size bytes long. Returns pointer to allocation if success, nil if not.

---

```
unsafe fn free(mut ptr: *unsafe)
```
Free a block allocated by malloc, realloc or calloc. ptr is not setted as nil by function, therefore ptr is dangling after free. Set ptr as nil after free for more safety. 