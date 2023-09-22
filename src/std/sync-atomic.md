# std::sync::atomic
## Functions
```jule
fn swap_i32(mut &addr: i32, new: i32, order: MemoryOrder): (old: i32)
```
Atomically stores new into addr and returns the previous addr value.

---

```jule
fn swap_i64(mut &addr: i64, new: i64, order: MemoryOrder): (old: i64)
```
Atomically stores new into addr and returns the previous addr value.

---

```jule
fn swap_u32(mut &addr: u32, new: u32, order: MemoryOrder): (old: u32)
```
Atomically stores new into addr and returns the previous addr value.

---

```jule
fn swap_u64(mut &addr: u64, new: u64, order: MemoryOrder): (old: u64)
```
Atomically stores new into addr and returns the previous addr value.

---

```jule
fn swap_uinptr(mut &addr: uintptr, new: uintptr, order: MemoryOrder): (old: uintptr)
```
Atomically stores new into addr and returns the previous addr value.

---

```jule
fn compare_swap_i32(mut &addr i32, old: i32, new: i32, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for an i32 value.

---

```jule
fn compare_swap_i64(mut &addr: i64, old: i64, new: i64, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for an i64 value.

---

```jule
fn compare_swap_u32(mut &addr: u32, old: u32, new: u32, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for an u32 value.

---

```jule
fn compare_swap_u64(mut &addr: u64, old: u64, new: u64, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for an u64 value.

---

```jule
fn compare_swap_uintptr(mut &addr: uintptr, old: uintptr, new: uintptr, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for an uintptr value.

---

```jule
fn add_i32(mut &addr: i32, delta: i32, order: MemoryOrder): (old: i32)
```
Atomically adds delta to addr and returns the previous addr value.

---

```jule
fn add_i64(mut &addr: i64, delta: i64, order: MemoryOrder): (old: i64)
```
Atomically adds delta to addr and returns the previous addr value.

---

```jule
fn add_u32(mut &addr: u32, delta: u32, order: MemoryOrder): (old: u32)
```
Atomically adds delta to addr and returns the previous addr value.

---

```jule
fn add_u64(mut &addr: u64, delta: u64, order: MemoryOrder): (old: u64)
```
Atomically adds delta to addr and returns the previous addr value.

---

```jule
fn add_uinptr(mut &addr: uintptr, delta: uintptr, order: MemoryOrder): (old: uintptr)
```
Atomically adds delta to addr and returns the previous addr value.

---

```jule
fn load_i32(&addr: i32, order: MemoryOrder): i32
```
Atomically loads addr.

---

```jule
fn load_i64(&addr: i64, order: MemoryOrder): i64
```
Atomically loads addr.

---

```jule
fn load_u32(&addr: u32, order: MemoryOrder): u32
```
Atomically loads addr.

---

```jule
fn load_u64(&addr: u64, order: MemoryOrder): u64
```
Atomically loads addr.

---

```jule
fn load_uinptr(&addr: uintptr, order: MemoryOrder): uintptr
```
Atomically loads addr.

---

```jule
fn store_i32(mut &addr: i32, val: i32, order: MemoryOrder)
```
Atomically stores val into addr.

---

```jule
fn store_i64(mut &addr: i64, val: i64, order: MemoryOrder)
```
Atomically stores val into addr.

---

```jule
fn store_u32(mut &addr: u32, val: u32, order: MemoryOrder)
```
Atomically stores val into addr.

---

```jule
fn store_u64(mut &addr: u64, val: u64, order: MemoryOrder)
```
Atomically stores val into addr.

---

```jule
fn store_uinptr(mut &addr: uintptr, val: uintptr, order: MemoryOrder)
```
Atomically stores val into addr.

## Structures

```jule
struct AtomicInt
```
Type alias for private wrapper structure for int type.

**Methods:**

`static fn new(n: int): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn swap(mut self, new: int, order: MemoryOrder): (old: int)`\
Atomically stores new value and returns the previous value.

`fn compare_swap(mut self, old: int, new: int, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn add(mut self, delta: int, order: MemoryOrder): (old: int)`\
Atomically adds delta to value and returns the previous value.

`fn load(self, order: MemoryOrder): int`\
Atomically reads and returns value.

`fn store(mut self, val: int, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct AtomicUint
```
Type alias for private wrapper structure for uint type.

**Methods:**

`static fn new(n: uint): AtomicUint` \
Returns new atomic instance for type with initializer value.

`fn swap(mut self, new: uint, order: MemoryOrder): (old: uint)`\
Atomically stores new value and returns the previous value.

`fn compare_swap(mut self, old: uint, new: uint, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn add(mut self, delta: uint, order: MemoryOrder): (old: uint)`\
Atomically adds delta to value and returns the previous value.

`fn load(self, order: MemoryOrder): uint`\
Atomically reads and returns value.

`fn store(mut self, val: uint, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct AtomicUintptr
```
Type alias for private wrapper structure for uintptr type.

**Methods:**

`static fn new(n: uintptr): AtomicUintptr` \
Returns new atomic instance for type with initializer value.

`fn swap(mut self, new: uintptr, order: MemoryOrder): (old: uintptr)`\
Atomically stores new value and returns the previous value.

`fn compare_swap(mut self, old: uintptr, new: uintptr, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn add(mut self, delta: uintptr, order: MemoryOrder): (old: uintptr)`\
Atomically adds delta to value and returns the previous value.

`fn load(self, order: MemoryOrder): uintptr`\
Atomically reads and returns value.

`fn store(mut self, val: uintptr, order: MemoryOrder)`\
Atomically assigns to value.

## Enums
`enum MemoryOrder`

Memory order for atomic operations. \
Specifies how memory accesses.

**Fields:**
- `Relaxed`:  The weakest memory order. There no synchronization or ordering on read/write access. Only the operation is guaranteed to be atomic. Usually performs fastest atomicity performance.
- `Acquire`: Combined with a load, if the loaded value was written by a store operation with a Release or stronger order, all subsequent operations are ordered after that store. Especially all subsequent uploads will see the data written before the repository.
- `Release`: When combined with a store, all previous operations are ordered with the Acquire or stronger order before any load of that value. In particular, all previous writes become visible to all threads that perform an Acquire or stronger load of this value.
- `AcqRel`: Acquire and Release combined. Aka acquire/release. For loads it uses Acquire, for stores it uses Release ordering.
- `SeqCst`: Default memory order for most things. Aka sequentially consistent. Operations are sequenced consistently.
