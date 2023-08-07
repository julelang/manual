# Atomicity

Jule provides C-style macro functions for atomicity in `atomic.hpp` header. While you can't normally use the `stdatomic.h` header with C++, the definitions are pretty similar to the `stdatomic.h` implementation.

## Macro Defines for Memory Ordering

```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__RELAXED
```
```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__RELEASE
```
```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__CONSUME
```
```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__ACQUIRE
```
```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__ACQ_REL
```
```cpp
#define __JULE_ATOMIC_MEMORY_ORDER__SEQ_CST
```

## Macro Functions

```cpp
#define __jule_atomic_store_explicit(ADDR, VAL, MO)
```
Atomically stores val into addr by memory ordering.

---

```cpp
#define __jule_atomic_store(ADDR, VAL)
```
Calls `__jule_atomic_store_explicit` with SeqCst memory ordering.

---

```cpp
#define __jule_atomic_load_explicit(ADDR, MO)
```
Atomically loads value of addr by memory ordering.

---

```cpp
#define __jule_atomic_load(ADDR)
```
Calls `__jule_atomic_load_explicit` with SeqCst memory ordering.

---

```cpp
#define __jule_atomic_swap_explicit(ADDR, NEW, MO)
```
Atomically stores new into addr and returns the previous addr value by memory ordering.

---

```cpp
#define __jule_atomic_swap(ADDR, NEW)
```
Calls `__jule_atomic_swap` with SeqCst memory ordering.

---

```cpp
#define __jule_atomic_compare_swap_explicit(ADDR, OLD, NEW, SUC, FAIL)
```
Executes the compare-and-swap operation for addr by memory ordering.

---

```cpp
#define __jule_atomic_compare_swap(ADDR, OLD, NEW)
```
Calls `__jule_atomic_compare_swap_explicit` with SeqCst memory ordering.

---

```cpp
#define __jule_atomic_add_explicit(ADDR, DELTA, MO)
```
Atomically adds delta to addr and returns the previous addr value by memory ordering.

---

```cpp
#define __jule_atomic_add(ADDR, DELTA)
```
Calls `__jule_atomic_add` with SeqCst memory ordering.
