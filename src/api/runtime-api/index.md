# Runtime API

If you want to get information about Jule runtime, read the [Runtime](/runtime/) section. This section only shows which API functions are declared to the backend and how. For documentation you need to look at the documentation of the functions.

## Globals

```cpp
__jule_Int __jule_argc
```
Declaration of: `argc`

```cpp
__jule_U8 **__jule_argv
```
Declaration of: `argv`

```cpp
__jule_U8 **__jule_envp
```
Declaration of: `envp`

## Functions

```cpp
__jule_Bool __jule_ptrEqual(void *a, void *b);
```
Declaration of: `ptrEqual`

```cpp
__jule_String __jule_ptrToString(void *p);
```
Declaration of: `ptrToStr`

```cpp
__jule_String __jule_boolToString(__jule_Bool b);
```
Declaration of: `boolToStr`

```cpp
__jule_String __jule_i64ToString(__jule_I64 x);
```
Declaration of: `i64ToStr`

```cpp
__jule_String __jule_u64ToString(__jule_U64 x);
```
Declaration of: `u64ToStr`

```cpp
__jule_String __jule_f64ToString(__jule_F64 x);
```
Declaration of: `f64ToStr`

```cpp
__jule_Uint *__jule_RCNew(void);
```
Declaration of: `_RCNew`

```cpp
__jule_Uint __jule_RCLoad(__jule_Uint *p);
```
Declaration of: `_RCLoad`

```cpp
__jule_Uint __jule_RCLoadAtomic(_jule_Uint *p);
```
Declaration of: `_RCLoadAtomic`

```cpp
void __jule_RCAdd(__jule_Uint *p);
```
Declaration of: `_RCAdd`

```cpp
void __jule_RCAddAtomic(__jule_Uint *p);
```
Declaration of: `_RCAddAtomic`

```cpp
__jule_Bool __jule_RCDrop(__jule_Uint *p);
```
Declaration of: `_RCDrop`

```cpp
__jule_Bool __jule_RCDropAtomic(__jule_Uint *p);
```
Declaration of: `_RCDropAtomic`

```cpp
void __jule_RCFree(__jule_Uint *p);
```
Declaration of: `_RCFree`

```cpp
__jule_Int __jule_compareString(__jule_String *a, __jule_String *b);
```
Declaration of: `compareStr`

```cpp
__jule_Int __jule_writeStdout(__jule_Slice<__jule_U8> buf);
```
Declaration of: `writeStdout`

```cpp
__jule_Int __jule_writeStderr(__jule_Slice<__jule_U8> buf);
```
Declaration of: `writeStderr`

```cpp
__jule_Int __jule_readStdin(__jule_Slice<__jule_U8> buf);
```
Declaration of: `readStdin`

```cpp
void __jule_panic(__jule_U8 *m, __jule_Int n);
```
Declaration of: `panic1`

```cpp
void __jule_panicString(__jule_String m);
```
Declaration of: `panicStr`

```cpp
__jule_String __jule_bytesToString(__jule_Slice<__jule_U8> bytes);
```
Declaration of: `bytesToStr`

```cpp
__jule_String __jule_runesToString(__jule_Slice<__jule_I32> runes);
```
Declaration of: `runesToStr`

```cpp
__jule_Slice<__jule_I32> __jule_stringToRunes(__jule_String s);
```
Declaration of: `strToRunes`

```cpp
__jule_Slice<__jule_U8> __jule_stringToBytes(__jule_String s);
```
Declaration of: `strToBytes`

```cpp
__jule_String __jule_stringFromByte(__jule_U8 b);
```
Declaration of: `strFromByte`

```cpp
__jule_String __jule_stringFromRune(__jule_I32 r);
```
Declaration of: `strFromRune`

```cpp
void __jule_runeStep(__jule_U8 *s, __jule_Int len, __jule_I32 *r, __jule_Int *outLen);
```
Declaration of: `runeStep`

```cpp
__jule_Bool __jule_coSpawn(void *func, void *args);
```
Declaration of: `coSpawn`

```cpp
__jule_Int __jule_runeCount(__jule_Str s);
```
Declaration of: `runeCount`

```cpp
void __jule_pseudoMalloc(__jule_Int n, __jule_Uint size);
```
Declaration of: `pseudoMalloc`

```cpp
__jule_String __jule_stringBytePtr(__jule_U8 *b, __jule_Int n);
```
Declaration of: `strBytePtr`

```cpp
__jule_Slice<__jule_U8> __jule_sliceBytePtr(__jule_U8 *b, __jule_Int len, __jule_Int cap);
```
Declaration of: `sliceBytePtr`

```cpp
__jule_Slice<__jule_U8> __jule_stringAsSlice(__jule_String s);
```
Declaration of: `strAsSlice`

```cpp
__jule_String __jule_sliceAsString(__jule_Slice<__jule_U8> b);
```
Declaration of: `sliceAsStr`

```cpp
void __jule_print(__jule_String s);
```
Declaration of: `zprint`

```cpp
void __jule_println(__jule_String s);
```
Declaration of: `zprintln`

```cpp
__jule_F64 __jule_NaN(void)
```
Declaration of `nan`

```cpp
__jule_F64 __jule_Inf(__jule_Int sign)
```
Declaration of `inf`