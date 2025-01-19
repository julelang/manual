# std/mem

## Index

[fn SizeOf(TYPE || EXPRESSION): uint](#sizeof)\
[fn AlignOf(TYPE || EXPRESSION): uint](#alignof)\
[fn Free(h: T)](#free)\
[struct Heap](#heap)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New(): &amp;Heap\[T\]](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Addr(self): uintptr](#addr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Free(mut self)](#free)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Get(mut self): T](#get)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set(mut self, mut val: T)](#set)

## SizeOf
```jule
fn SizeOf(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given expression, uses type of expression. Void and function types are not supported. The expression is evaluated to determine type in compile-time and will not executed at runtime.

## AlignOf
```jule
fn AlignOf(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is either complete object type. If given expression, uses type of expression. Void and function types are not supported. The expression is evaluated to determine type in compile-time and will not executed at runtime.

## Free
```jule
fn Free(h: T)
```

## Heap
```jule
struct Heap[T] {
	// NOTE: contains filtered hidden or unexported fields
}
```
Wrapper for heap allocation. Should be freed, occurs memory leak if did not.

### New
```jule
static fn New(): &Heap[T]
```
Allocates new T on heap, and returns &amp;Heap\[T\] instance that points relevant allocation. Returns nil if allocation failed.

### Addr
```jule
fn Addr(self): uintptr
```
Returns address of allocation. Returns 0 if internal pointer is nil.

### Free
```jule
fn Free(mut self)
```
Frees allocation and sets address as 0 (aka nil).

### Get
```jule
fn Get(mut self): T
```
Dereferences and returns value of internal pointer. Panics if internal pointer is nil.

### Set
```jule
fn Set(mut self, mut val: T)
```
Sets value of internal pointer. Panics if internal pointer is nil.