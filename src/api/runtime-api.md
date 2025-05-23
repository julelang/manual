# Runtime API

If you want to get information about Jule runtime, read the [Runtime](/runtime/) section. This section only shows which API functions are declared to the backend and how. For documentation you need to look at the documentation of the functions.

## Globals

```cpp
jule::Int __jule_argc
```
Declaration of: `argc`

```cpp
jule::U8 **__jule_argv
```
Declaration of: `argv`

```cpp
jule::U8 **__jule_envp
```
Declaration of: `envp`

## Functions

```cpp
jule::Bool __jule_ptrEqual(void *a, void *b);
```
Declaration of: `ptrEqual`

```cpp
jule::Str __jule_ptrToStr(void *p);
```
Declaration of: `ptrToStr`

```cpp
jule::Str __jule_boolToStr(jule::Bool b);
```
Declaration of: `boolToStr`

```cpp
jule::Str __jule_i64ToStr(jule::I64 x);
```
Declaration of: `i64ToStr`

```cpp
jule::Str __jule_u64ToStr(jule::U64 x);
```
Declaration of: `u64ToStr`

```cpp
jule::Str __jule_f64ToStr(jule::F64 x);
```
Declaration of: `f64ToStr`

```cpp
jule::Uint *__jule_RCNew(void);
```
Declaration of: `_RCNew`

```cpp
jule::Uint __jule_RCLoad(jule::Uint *p);
```
Declaration of: `_RCLoad`

```cpp
jule::Uint __jule_RCLoadAtomic(jule::Uint *p);
```
Declaration of: `_RCLoadAtomic`

```cpp
void __jule_RCAdd(jule::Uint *p);
```
Declaration of: `_RCAdd`

```cpp
void __jule_RCAddAtomic(jule::Uint *p);
```
Declaration of: `_RCAddAtomic`

```cpp
jule::Bool __jule_RCDrop(jule::Uint *p);
```
Declaration of: `_RCDrop`

```cpp
jule::Bool __jule_RCDropAtomic(jule::Uint *p);
```
Declaration of: `_RCDropAtomic`

```cpp
void __jule_RCFree(jule::Uint *p);
```
Declaration of: `_RCFree`

```cpp
jule::Int __jule_compareStr(jule::Str *a, jule::Str *b);
```
Declaration of: `compareStr`

```cpp
jule::Int __jule_writeStdout(jule::Slice<jule::U8> buf);
```
Declaration of: `writeStdout`

```cpp
jule::Int __jule_writeStderr(jule::Slice<jule::U8> buf);
```
Declaration of: `writeStderr`

```cpp
jule::Int __jule_readStdin(jule::Slice<jule::U8> buf);
```
Declaration of: `readStdin`

```cpp
void __jule_panic(jule::U8 *m, jule::Int n);
```
Declaration of: `panic1`

```cpp
void __jule_panicStr(jule::Str m);
```
Declaration of: `panicStr`

```cpp
jule::Str __jule_bytesToStr(jule::Slice<jule::U8> bytes);
```
Declaration of: `bytesToStr`

```cpp
jule::Str __jule_runesToStr(jule::Slice<jule::I32> runes);
```
Declaration of: `runesToStr`

```cpp
jule::Slice<jule::I32> __jule_strToRunes(jule::Str s);
```
Declaration of: `strToRunes`

```cpp
jule::Slice<jule::U8> __jule_strToBytes(jule::Str s);
```
Declaration of: `strToBytes`

```cpp
jule::Str __jule_strFromByte(jule::U8 b);
```
Declaration of: `strFromByte`

```cpp
jule::Str __jule_strFromRune(jule::I32 r);
```
Declaration of: `strFromRune`

```cpp
void __jule_runeStep(jule::U8 *s, jule::Int len, jule::I32 *r, jule::Int *outLen);
```
Declaration of: `runeStep`

```cpp
jule::Bool __jule_coSpawn(void *func, void *args);
```
Declaration of: `coSpawn`

```cpp
jule::Int __jule_runeCount(jule::Str s);
```
Declaration of: `runeCount`

```cpp
void __jule_pseudoMalloc(jule::Int n, jule::Uint size);
```
Declaration of: `pseudoMalloc`

```cpp
jule::Str __jule_strBytePtr(jule::U8 *b, jule::Int n);
```
Declaration of: `strBytePtr`

```cpp
jule::Slice<jule::U8> __jule_sliceBytePtr(jule::U8 *b, jule::Int len, jule::Int cap);
```
Declaration of: `sliceBytePtr`

```cpp
jule::Slice<jule::U8> __jule_strAsSlice(jule::Str s);
```
Declaration of: `strAsSlice`

```cpp
jule::Str __jule_sliceAsStr(jule::Slice<jule::U8> b);
```
Declaration of: `sliceAsStr`

```cpp
void __jule_print(jule::Str s);
```
Declaration of: `zprint`

```cpp
void __jule_println(jule::Str s);
```
Declaration of: `zprintln`

```cpp
jule::F64 __jule_NaN(void)
```
Declaration of `nan`

```cpp
jule::F64 __jule_Inf(jule::Int sign)
```
Declaration of `inf`