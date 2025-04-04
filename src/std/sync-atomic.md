# std/sync/atomic

## Index

[Variables](#variables)\
[fn Swap\[T: int \| uint \| i8 \| i16 \| i32 \| i64 \| u8 \| u16 \| u32 \| u64 \| uintptr\]\(mut &amp;addr: T, new: T, order: memoryOrder\): \(old: T\)](#swap)\
[fn CompareAndSwap\[T: int \| uint \| i8 \| i16 \| i32 \| i64 \| u8 \| u16 \| u32 \| u64 \| uintptr\]\(mut &amp;addr: T, old: T, new: T, order: memoryOrder\): \(swapped: bool\)](#compareandswap)\
[fn Add\[T: int \| uint \| i8 \| i16 \| i32 \| i64 \| u8 \| u16 \| u32 \| u64 \| uintptr\]\(mut &amp;addr: T, delta: T, order: memoryOrder\): \(new: T\)](#add)\
[fn Load\[T: int \| uint \| i8 \| i16 \| i32 \| i64 \| u8 \| u16 \| u32 \| u64 \| uintptr\]\(&amp;addr: T, order: memoryOrder\): T](#load)\
[fn Store\[T: int \| uint \| i8 \| i16 \| i32 \| i64 \| u8 \| u16 \| u32 \| u64 \| uintptr\]\(mut &amp;addr: T, val: T, order: memoryOrder\)](#store)\
[type I8](#i8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: i8, order: memoryOrder\): \(old: i8\)](#swap-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: i8, new: i8, order: memoryOrder\): \(swapped: bool\)](#compareandswap-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: i8, order: memoryOrder\): \(new: i8\)](#add-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): i8](#load-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: i8, order: memoryOrder\)](#store-1)\
[type I16](#i16)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: i16, order: memoryOrder\): \(old: i16\)](#swap-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: i16, new: i16, order: memoryOrder\): \(swapped: bool\)](#compareandswap-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: i16, order: memoryOrder\): \(new: i16\)](#add-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): i16](#load-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: i16, order: memoryOrder\)](#store-2)\
[type I32](#i32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: i32, order: memoryOrder\): \(old: i32\)](#swap-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: i32, new: i32, order: memoryOrder\): \(swapped: bool\)](#compareandswap-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: i32, order: memoryOrder\): \(new: i32\)](#add-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): i32](#load-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: i32, order: memoryOrder\)](#store-3)\
[type I64](#i64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: i64, order: memoryOrder\): \(old: i64\)](#swap-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: i64, new: i64, order: memoryOrder\): \(swapped: bool\)](#compareandswap-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: i64, order: memoryOrder\): \(new: i64\)](#add-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): i64](#load-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: i64, order: memoryOrder\)](#store-4)\
[type Int](#int)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: int, order: memoryOrder\): \(old: int\)](#swap-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: int, new: int, order: memoryOrder\): \(swapped: bool\)](#compareandswap-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: int, order: memoryOrder\): \(new: int\)](#add-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): int](#load-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: int, order: memoryOrder\)](#store-5)\
[type U8](#u8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: u8, order: memoryOrder\): \(old: u8\)](#swap-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: u8, new: u8, order: memoryOrder\): \(swapped: bool\)](#compareandswap-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: u8, order: memoryOrder\): \(new: u8\)](#add-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): u8](#load-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: u8, order: memoryOrder\)](#store-6)\
[type U16](#u16)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: u16, order: memoryOrder\): \(old: u16\)](#swap-7)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: u16, new: u16, order: memoryOrder\): \(swapped: bool\)](#compareandswap-7)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: u16, order: memoryOrder\): \(new: u16\)](#add-7)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): u16](#load-7)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: u16, order: memoryOrder\)](#store-7)\
[type U32](#u32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: u32, order: memoryOrder\): \(old: u32\)](#swap-8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: u32, new: u32, order: memoryOrder\): \(swapped: bool\)](#compareandswap-8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: u32, order: memoryOrder\): \(new: u32\)](#add-8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): u32](#load-8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: u32, order: memoryOrder\)](#store-8)\
[type U64](#u64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: u64, order: memoryOrder\): \(old: u64\)](#swap-9)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: u64, new: u64, order: memoryOrder\): \(swapped: bool\)](#compareandswap-9)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: u64, order: memoryOrder\): \(new: u64\)](#add-9)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): u64](#load-9)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: u64, order: memoryOrder\)](#store-9)\
[type Uint](#uint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: uint, order: memoryOrder\): \(old: uint\)](#swap-10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: uint, new: uint, order: memoryOrder\): \(swapped: bool\)](#compareandswap-10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: uint, order: memoryOrder\): \(new: uint\)](#add-10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): uint](#load-10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: uint, order: memoryOrder\)](#store-10)\
[type Uintptr](#uintptr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Swap\(mut self, new: uintptr, order: memoryOrder\): \(old: uintptr\)](#swap-11)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CompareAndSwap\(mut self, old: uintptr, new: uintptr, order: memoryOrder\): \(swapped: bool\)](#compareandswap-11)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, delta: uintptr, order: memoryOrder\): \(new: uintptr\)](#add-11)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Load\(self, order: memoryOrder\): uintptr](#load-11)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Store\(mut self, val: uintptr, order: memoryOrder\)](#store-11)

## Variables

```jule
const (
	// The weakest memory order.
	// There no synchronization or ordering on read/write access.
	// Only the operation is guaranteed to be atomic.
	// Usually performs fastest atomicity performance.
	Relaxed = memoryOrder(runtime::atomicRelaxed)

	// Combined with a load, if the loaded value was written
	// by a store operation with a Release or stronger order,
	// all subsequent operations are ordered after that store.
	// Especially all subsequent uploads will see the data
	// written before the repository.
	Acquire = memoryOrder(runtime::atomicAcquire)

	// When combined with a store, all previous operations are
	// ordered with the Acquire or stronger order before any load
	// of that value. In particular, all previous writes become
	// visible to all threads that perform an Acquire or stronger
	// load of this value.
	Release = memoryOrder(runtime::atomicRelease)

	// Acquire and Release combined.
	// Aka acquire/release.
	// For loads it uses Acquire, for stores it uses Release ordering.
	AcqRel = memoryOrder(runtime::atomicAcqRel)

	// Default memory order for most things.
	// Aka sequentially consistent.
	// Operations are sequenced consistently.
	SeqCst = memoryOrder(runtime::atomicSeqCst)
)
```
Atomic memory orders\.

## Swap
```jule
fn Swap[T: int | uint | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | uintptr](mut &addr: T, new: T, order: memoryOrder): (old: T)
```
Atomically stores new into addr and returns the previous addr value\. Only integer types are supported\.

## CompareAndSwap
```jule
fn CompareAndSwap[T: int | uint | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | uintptr](mut &addr: T, old: T, new: T, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation for value\. Only integer types are supported\.

## Add
```jule
fn Add[T: int | uint | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | uintptr](mut &addr: T, delta: T, order: memoryOrder): (new: T)
```
Atomically adds delta to addr and returns the new addr value\. Only integer types are supported\.

## Load
```jule
fn Load[T: int | uint | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | uintptr](&addr: T, order: memoryOrder): T
```
Atomically loads addr\. Only integer types are supported\.

## Store
```jule
fn Store[T: int | uint | i8 | i16 | i32 | i64 | u8 | u16 | u32 | u64 | uintptr](mut &addr: T, val: T, order: memoryOrder)
```
Atomically stores val into addr\. Only integer types are supported\.

## I8
```jule
type I8: i8
```
The atomic box for i8 type\.

### Swap
```jule
fn Swap(mut self, new: i8, order: memoryOrder): (old: i8)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: i8, new: i8, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: i8, order: memoryOrder): (new: i8)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): i8
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: i8, order: memoryOrder)
```
Atomically assigns to value\.

## I16
```jule
type I16: i16
```
The atomic box for i16 type\.

### Swap
```jule
fn Swap(mut self, new: i16, order: memoryOrder): (old: i16)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: i16, new: i16, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: i16, order: memoryOrder): (new: i16)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): i16
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: i16, order: memoryOrder)
```
Atomically assigns to value\.

## I32
```jule
type I32: i32
```
The atomic box for i32 type\.

### Swap
```jule
fn Swap(mut self, new: i32, order: memoryOrder): (old: i32)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: i32, new: i32, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: i32, order: memoryOrder): (new: i32)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): i32
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: i32, order: memoryOrder)
```
Atomically assigns to value\.

## I64
```jule
type I64: i64
```
The atomic box for i64 type\.

### Swap
```jule
fn Swap(mut self, new: i64, order: memoryOrder): (old: i64)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: i64, new: i64, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: i64, order: memoryOrder): (new: i64)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): i64
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: i64, order: memoryOrder)
```
Atomically assigns to value\.

## Int
```jule
type Int: int
```
The atomic box for int type\.

### Swap
```jule
fn Swap(mut self, new: int, order: memoryOrder): (old: int)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: int, new: int, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: int, order: memoryOrder): (new: int)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): int
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: int, order: memoryOrder)
```
Atomically assigns to value\.

## U8
```jule
type U8: u8
```
The atomic box for u8 type\.

### Swap
```jule
fn Swap(mut self, new: u8, order: memoryOrder): (old: u8)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: u8, new: u8, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: u8, order: memoryOrder): (new: u8)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): u8
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: u8, order: memoryOrder)
```
Atomically assigns to value\.

## U16
```jule
type U16: u16
```
The atomic box for u16 type\.

### Swap
```jule
fn Swap(mut self, new: u16, order: memoryOrder): (old: u16)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: u16, new: u16, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: u16, order: memoryOrder): (new: u16)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): u16
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: u16, order: memoryOrder)
```
Atomically assigns to value\.

## U32
```jule
type U32: u32
```
The atomic box for u32 type\.

### Swap
```jule
fn Swap(mut self, new: u32, order: memoryOrder): (old: u32)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: u32, new: u32, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: u32, order: memoryOrder): (new: u32)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): u32
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: u32, order: memoryOrder)
```
Atomically assigns to value\.

## U64
```jule
type U64: u64
```
The atomic box for u64 type\.

### Swap
```jule
fn Swap(mut self, new: u64, order: memoryOrder): (old: u64)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: u64, new: u64, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: u64, order: memoryOrder): (new: u64)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): u64
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: u64, order: memoryOrder)
```
Atomically assigns to value\.

## Uint
```jule
type Uint: uint
```
The atomic box for uint type\.

### Swap
```jule
fn Swap(mut self, new: uint, order: memoryOrder): (old: uint)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: uint, new: uint, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: uint, order: memoryOrder): (new: uint)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): uint
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: uint, order: memoryOrder)
```
Atomically assigns to value\.

## Uintptr
```jule
type Uintptr: uintptr
```
The atomic box for uintptr type\.

### Swap
```jule
fn Swap(mut self, new: uintptr, order: memoryOrder): (old: uintptr)
```
Atomically stores new value and returns the previous value\.

### CompareAndSwap
```jule
fn CompareAndSwap(mut self, old: uintptr, new: uintptr, order: memoryOrder): (swapped: bool)
```
Executes the compare\-and\-swap operation\.

### Add
```jule
fn Add(mut self, delta: uintptr, order: memoryOrder): (new: uintptr)
```
Atomically adds delta to value and returns the new value\.

### Load
```jule
fn Load(self, order: memoryOrder): uintptr
```
Atomically reads and returns value\.

### Store
```jule
fn Store(mut self, val: uintptr, order: memoryOrder)
```
Atomically assigns to value\.