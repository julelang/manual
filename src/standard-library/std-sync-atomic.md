# std::sync::atomic
## Functions
```
unsafe fn swap_i32(mut addr: *i32, new: i32): (old: i32)
```
Atomically stores new into *addr and returns the previous *addr value.

---

```
unsafe fn swap_i64(mut addr: *i64, new: i64): (old: i64)
```
Atomically stores new into *addr and returns the previous *addr value.

---

```
unsafe fn swap_u32(mut addr: *u32, new: u32): (old: u32)
```
Atomically stores new into *addr and returns the previous *addr value.

---

```
unsafe fn swap_u64(mut addr: *u64, new: u64): (old: u64)
```
Atomically stores new into *addr and returns the previous *addr value.

---

```
unsafe fn swap_uinptr(mut addr: *uintptr, new: uintptr): (old: uintptr)
```
Atomically stores new into *addr and returns the previous *addr value.

---

```
unsafe fn compare_swap_i32(mut addr *i32, old: i32, new: i32): (swapped: bool)
```
Executes the compare-and-swap operation for an i32 value.

---

```
unsafe fn compare_swap_i64(mut addr: *i64, old: i64, new: i64): (swapped: bool)
```
Executes the compare-and-swap operation for an i64 value.

---

```
unsafe fn compare_swap_u32(mut addr: *u32, old: u32, new: u32): (swapped: bool)
```
Executes the compare-and-swap operation for an u32 value.

---

```
unsafe fn compare_swap_u64(mut addr: *u64, old: u64, new: u64): (swapped: bool)
```
Executes the compare-and-swap operation for an u64 value.

---

```
unsafe fn compare_swap_uintptr(mut addr: *uintptr, old: uintptr, new: uintptr): (swapped: bool)
```
Executes the compare-and-swap operation for an uintptr value.

---

```
unsafe fn add_i32(mut addr: *i32, delta: i32): (old: i32)
```
Atomically adds delta to *addr and returns the previous *addr value.

---

```
unsafe fn add_i64(mut addr: *i64, delta: i64): (old: i64)
```
Atomically adds delta to *addr and returns the previous *addr value.

---

```
unsafe fn add_u32(mut addr: *u32, delta: u32): (old: u32)
```
Atomically adds delta to *addr and returns the previous *addr value.

---

```
unsafe fn add_u64(mut addr: *u64, delta: u64): (old: u64)
```
Atomically adds delta to *addr and returns the previous *addr value.

---

```
unsafe fn add_uinptr(mut addr: *uintptr, delta: uintptr): (old: uintptr)
```
Atomically adds delta to *addr and returns the previous *addr value.

---

```
unsafe fn load_i32(addr: *i32): i32
```
Atomically loads *addr.

---

```
unsafe fn load_i64(addr: *i64): i64
```
Atomically loads *addr.

---

```
unsafe fn load_u32(addr: *u32): u32
```
Atomically loads *addr.

---

```
unsafe fn load_u64(addr: *u64): u64
```
Atomically loads *addr.

---

```
unsafe fn load_uinptr(addr: *uintptr): uintptr
```
Atomically loads *addr.

---

```
unsafe fn store_i32(mut addr: *i32, val: i32)
```
Atomically stores val into *addr.

---

```
unsafe fn store_i64(mut addr: *i64, val: i64)
```
Atomically stores val into *addr.

---

```
unsafe fn store_u32(mut addr: *u32, val: u32)
```
Atomically stores val into *addr.

---

```
unsafe fn store_u64(mut addr: *u64, val: u64)
```
Atomically stores val into *addr.

---

```
unsafe fn store_uinptr(mut addr: *uintptr, val: uintptr)
```
Atomically stores val into *addr.