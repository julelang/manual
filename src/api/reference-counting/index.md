# Reference Counting

Jule's reference counting functionality for allocations is provided in the API. The `ref.hpp` header contains the `Ptr` struct for reference counting.

## Variables

```cpp
constexpr signed int REFERENCE_DELTA;
```
The reference counting data delta value that must occur per each reference counting operation.

## Functions

```cpp
template<typename T>
jule::Ptr<T> new_ptr(void);
```
Equavelent of Jule's `new(T)` call.

---

```cpp
template<typename T>
jule::Ptr<T> new_ptr(const T &init);
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
static jule::Ptr<T>
make(T *ptr, jule::Uint *ref);
```
Creates new reference from allocation and reference counting allocation. Reference does not counted if reference count allocation is null.

---

```cpp
static jule::Ptr<T>
make(T *ptr);
```
Creates new reference from allocation. Allocates new allocation for reference counting data and starts counting to `jule::REFERENCE_DELTA`.

### Methods

```cpp
void drop(void);
```
Drops reference. This function will destruct this instace for reference counting. Frees memory if reference counting reaches to zero.
