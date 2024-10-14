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
Reads from stdin. Returns readed byte count if success, `-1` otherwise.

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
Drops strong reference from reference pointer. Passing nil pointer is not safe. Reports wheter allocation still alive.

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
A low level API function for threads. It doesn't provide much abstraction. It just creates and detaches a thread using API. Reports whether the thread created successfully. The created thread is a native-thread. The `func` parameter should point to the valid function for operating system thread API. The `args` parameter may be nil and should point to the argument data.

```jule
fn runeCount(s: str): int
```
Returns rune count of the string.