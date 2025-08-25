# Reference Counting

Jule's reference counting functionality for allocations is provided in the API. The `ptr.hpp` header contains the `Ptr` for reference counting.

## Functions

```cpp
template<typename T>
__jule_Ptr<T> __jule_new_ptr(void);
```
Equavelent of Jule's `new(T)` call.

---

```cpp
template<typename T>
__jule_Ptr<T> __jule_new_ptr(const T &init);
```

Equavelent of Jule's `new(T, EXPR)` call.

## Structures

```cpp
template<typename T>
struct Ptr;
```

Wrapper structure for raw pointer of JuleC. This structure is the used by Jule references for reference-counting and memory management.

### Statics

```cpp
static __jule_Ptr<T>
make(T *ptr, __jule_Uint *ref);
```
Creates new reference from allocation and reference counting allocation. Reference does not counted if reference count allocation is null, so allocation never will be deallocated by Ptr. The ref pointer should be allocated by the runtime `__jule_RCNew` function.

---

```cpp
static __jule_Ptr<T>
make(T *ptr);
```
Creates new reference from allocation. Allocates new allocation for reference counting data and starts counting to reference counting delta of runtime.

### Methods

```cpp
void dealloc(void);
```
Drops reference. This function will destruct this instance for reference counting. Frees memory if reference counting reaches to zero.
