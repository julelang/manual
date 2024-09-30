# std/sync/atomic
## Functions

```jule
fn Swap[T](mut &addr: T, new: T, order: MemoryOrder): (old: T)
```
Atomically stores new into addr and returns the previous addr value.
Only integer types are supported.

---

```jule
fn CompareSwap[T](mut &addr: T, old: T, new: T, order: MemoryOrder): (swapped: bool)
```
Executes the compare-and-swap operation for value.
Only integer types are supported.

---

```jule
fn Add[T](mut &addr: T, delta: T, order: MemoryOrder): (old: T)
```
Atomically adds delta to addr and returns the previous addr value.
Only integer types are supported.

---

```jule
fn Load[T](&addr: T, order: MemoryOrder): T
```
Atomically loads addr.
Only integer types are supported.

---

```jule
fn Store[T](mut &addr: T, val: T, order: MemoryOrder)
```
Atomically stores val into addr.
Only integer types are supported.

## Structures

```jule
struct I8
```
Type alias for private wrapper structure for i8 type.

**Methods:**

`static fn New(n: i8): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: i8, order: MemoryOrder): (old: i8)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: i8, new: i8, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: i8, order: MemoryOrder): (old: i8)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): i8`\
Atomically reads and returns value.

`fn Store(mut self, val: i8, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct I16
```
Type alias for private wrapper structure for i16 type.

**Methods:**

`static fn New(n: i16): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: i16, order: MemoryOrder): (old: i16)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: i16, new: i16, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: i16, order: MemoryOrder): (old: i16)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): i16`\
Atomically reads and returns value.

`fn Store(mut self, val: i16, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct I32
```
Type alias for private wrapper structure for i32 type.

**Methods:**

`static fn New(n: i32): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: i32, order: MemoryOrder): (old: i32)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: i32, new: i32, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: i32, order: MemoryOrder): (old: i32)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): i32`\
Atomically reads and returns value.

`fn Store(mut self, val: i32, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct I64
```
Type alias for private wrapper structure for i64 type.

**Methods:**

`static fn New(n: i64): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: i64, order: MemoryOrder): (old: i64)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: i64, new: i64, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: i64, order: MemoryOrder): (old: i64)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): i64`\
Atomically reads and returns value.

`fn Store(mut self, val: i64, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct Int
```
Type alias for private wrapper structure for int type.

**Methods:**

`static fn New(n: int): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: int, order: MemoryOrder): (old: int)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: int, new: int, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: int, order: MemoryOrder): (old: int)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): int`\
Atomically reads and returns value.

`fn Store(mut self, val: int, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct U8
```
Type alias for private wrapper structure for u8 type.

**Methods:**

`static fn New(n: u8): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: u8, order: MemoryOrder): (old: u8)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: u8, new: u8, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: u8, order: MemoryOrder): (old: u8)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): u8`\
Atomically reads and returns value.

`fn Store(mut self, val: u8, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct U16
```
Type alias for private wrapper structure for u16 type.

**Methods:**

`static fn New(n: u16): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: u16, order: MemoryOrder): (old: u16)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: u16, new: u16, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: u16, order: MemoryOrder): (old: u16)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): u16`\
Atomically reads and returns value.

`fn Store(mut self, val: u16, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct U32
```
Type alias for private wrapper structure for u32 type.

**Methods:**

`static fn New(n: u32): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: u32, order: MemoryOrder): (old: u32)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: u32, new: u32, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: u32, order: MemoryOrder): (old: u32)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): u32`\
Atomically reads and returns value.

`fn Store(mut self, val: u32, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct U64
```
Type alias for private wrapper structure for u64 type.

**Methods:**

`static fn New(n: u64): AtomicInt` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: u64, order: MemoryOrder): (old: u64)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: u64, new: u64, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: u64, order: MemoryOrder): (old: u64)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): u64`\
Atomically reads and returns value.

`fn Store(mut self, val: u64, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct Uint
```
Type alias for private wrapper structure for uint type.

**Methods:**

`static fn New(n: uint): AtomicUint` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: uint, order: MemoryOrder): (old: uint)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: uint, new: uint, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: uint, order: MemoryOrder): (old: uint)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): uint`\
Atomically reads and returns value.

`fn Store(mut self, val: uint, order: MemoryOrder)`\
Atomically assigns to value.

---

```jule
struct Uintptr
```
Type alias for private wrapper structure for uintptr type.

**Methods:**

`static fn New(n: uintptr): AtomicUintptr` \
Returns new atomic instance for type with initializer value.

`fn Swap(mut self, new: uintptr, order: MemoryOrder): (old: uintptr)`\
Atomically stores new value and returns the previous value.

`fn CompareSwap(mut self, old: uintptr, new: uintptr, order: MemoryOrder): (swapped: bool)`\
Executes the compare-and-swap operation.

`fn Add(mut self, delta: uintptr, order: MemoryOrder): (old: uintptr)`\
Atomically adds delta to value and returns the previous value.

`fn Load(self, order: MemoryOrder): uintptr`\
Atomically reads and returns value.

`fn Store(mut self, val: uintptr, order: MemoryOrder)`\
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