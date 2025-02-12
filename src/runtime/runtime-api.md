# Runtime API

The runtime library provides some definitions as APIs to be used in the backend. This section includes which functions are provided as APIs and their documentation. If you want to see how they are declared in the backend, see the [API](/api/runtime-api) documentation.

## Globals

```jule
static mut argc: int
```
Assigned by entry point.

```jule
static mut argv: **byte
```
Assigned by entry point.

```jule
static mut envp: **byte
```
Assigned by entry point.

## Functions

```jule
fn ptrToStr(p: *unsafe): str
```
Returns pointer in string form.

```jule
fn boolToStr(b: bool): str
```
Returns boolean in string form.

```jule
fn i64ToStr(x: i64): str
```
Returns x in decimal string format.

```jule
fn u64ToStr(mut x: u64): str
```
Returns x in decimal string format.

```jule
fn f64ToStr(mut f: f64): str
```
Returns x in decimal string format.

```jule
fn writeStdout(mut buf: []byte): int
```
Writes to stdout. Returns written byte count if success, `-1` otherwise.

```jule
fn writeStderr(mut buf: []byte): int
```
Writes to stderr. Returns written byte count if success, `-1` otherwise.

```jule
fn readStdin(mut buf: []byte): int
```
Reads from stdin. Returns read byte count if success, `-1` otherwise.

```jule
fn ptrEqual(a: *unsafe, b: *unsafe): bool
```
Reports whether pointer allocations are points to same address.

```jule
fn _RCNew(): _RCPtr
```
Returns new initialized ready-to-use reference counting data allocation pointer.

```jule
unsafe fn _RCLoad(p: _RCPtr): _RCType
```
Reads reference counting data. Passing nil pointer is not safe.

Implemented with no thread-safety by default. If thread-safety necessary, compiler will update implementation implicitly. See memory model of concurrency.

```jule
unsafe fn _RCLoadAtomic(p: _RCPtr): _RCType
```
Same as `_RCLoad` but have thread-safe implementation.

```jule
unsafe fn _RCAdd(mut p: _RCPtr)
```
Adds strong reference to reference pointer. Passing nil pointer is not safe.

Implemented with no thread-safety by default. If thread-safety necessary, compiler will update implementation implicitly. See memory model of concurrency.

```jule
unsafe fn _RCAddAtomic(mut p: _RCPtr)
```
Same as `_RCAdd` but have thread-safe implementation.

```jule
unsafe fn _RCDrop(mut p: _RCPtr): bool
```
Drops strong reference from reference pointer. Passing nil pointer is not safe. Reports whether allocation still alive.

Implemented with no thread-safety by default. If thread-safety necessary, compiler will update implementation implicitly. See memory model of concurrency.

```jule
unsafe fn _RCDropAtomic(mut p: _RCPtr): bool
```
Same as `_RCDrop` but have thread-safe implementation.

```jule
unsafe fn _RCFree(p: _RCPtr)
```
Deallocates reference counting data allocation.

```jule
unsafe fn panic1(m: *byte, n: int)
```
The built-in panic call.

```jule
unsafe fn panic1(m: *byte, n: int)
```
The built-in panic call.

```jule
fn panicStr(m: str)
```
Calls the panic1 function by m.

```jule
fn compareStr(&a: str, &b: str): int
```
See `strings::{Compare}` function for documentation.

```jule
fn bytesToStr(bytes: []byte): str
```
Converts `[]byte` to `str`.

```jule
fn runesToStr(runes: []rune): str
```
Converts `[]rune` to `str`.

```jule
fn strToRunes(s: str): []rune
```
Converts `str` to `[]rune`.

```jule
fn strToBytes(s: str): []byte
```
Converts `str` to `[]byte`.

```jule
fn strFromByte(b: byte): str
```
Converts `byte` to `str`.

```jule
fn strFromRune(r: rune): str
```
Converts `rune` to `str`.

```jule
unsafe fn runeStep(s: *byte, n: int, mut r: *rune, mut outLen: *int)
```
Designed for `[]rune(s)` iterations. Takes pointer to string withl length and sets output pointers by first rune of string. Passing nil pointer for any parameter is not safe except `r`.

```jule
unsafe fn coSpawn(func: *unsafe, args: *unsafe)
```
A low level API function for threads. It doesn't provide much abstraction. It just creates and detaches a thread using API. Reports whether the thread created successfully. The created thread is a native-thread. The `func` parameter should point to the valid function for operating system thread API. The `args` parameter may be nil and should point to the argument data. The thread data, should be fit into the threadData struct. So, the head fields of the thread data should be matched fields of the threadData.

```jule
fn runeCount(s: str): int
```
Returns rune count of the string.

```jule
fn pseudoMalloc(n: i64, size: uint)
```
Pseudo memory allocation, for allocation checking and documentation purposes. Any runtime allocation must be follow this implementation documentation. Pseudo allocates linear memory on the heap. The |n| is non-negative count of elements. The |size| is size in bytes of the single instance of a type which is will be allocated. Panics if |n*size > maxAlloc || n > max(int)|, also panics if allocation failed. Returns pointer to the allocation (pointer to the first cell if n>1). The allocated memory will not be initialized by default.

Calling this function, performs allocation size checking as described and panics if conditions are met.

```jule
unsafe fn strBytePtr(b: *byte, n: int): str
```
Returns string based on b, the parameter b means first byte of string. The returned string uses n as length. Will not perform garbage collection.

```jule
unsafe fn sliceBytePtr(mut b: *byte, len: int, cap: int): []byte
```
Returns slice based on b, the parameter b means first element of slice. Will not perform garbage collection.

```jule
fn strAsSlice(s: str): []byte
```
Equals to sliceBytePtr(&s[0], len(s), len(s)) call.
Returns nil slice for empty string.

```jule
fn sliceAsStr(b: []byte): str
```
Returns byte slice as str.
Equals to strBytePtr(&b[0], len(b)) call.
Returns empty string if len(b) == 0.

```jule
fn zprint(s: str)
```
The runtime implementation of the built-in print function.

```jule
fn zprintln(s: str)
```
The runtime implementation of the built-in println function.