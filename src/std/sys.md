# std/sys

This package may not be fully viewable as it is documented using `juledoc`. Due to its low-level nature, it contains many specific definitions. For more detailed documentation, refer to the source code.

::: danger
This package contains low-level implementations for the system calls with low abstraction. Use the safe implementations from the stdlib for corresponsing functionality instead of direct syscalls. This package is under the terms of the [Unsafe Jule](/unsafe-jule/). Be careful using API of this package. Althought many syscall provided with abstraction, the level of this abstraction is quite low and doing things correct is developer's responsibility.
:::

## Index

[fn GetLastErrno\(\): Errno](#getlasterrno)\
[fn NewTimeval\(sec: i64, usec: i64, mut &amp;out: Timeval\): bool](#newtimeval)\
[unsafe fn Read\(handle: int, mut buff: \*unsafe, n: uint\): int](#read)\
[fn Close\(handle: int\): int](#close)\
[unsafe fn Write\(handle: int, buff: \*unsafe, n: uint\): int](#write)\
[fn Exit\(code: int\)](#exit)\
[unsafe fn Select\(nfds: int, mut read: \*FdSet, mut write: \*FdSet, mut err: \*FdSet, mut timeout: \*Timeval\): int](#select)\
[type Errno](#errno)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)



## GetLastErrno
```jule
fn GetLastErrno(): Errno
```
Returns number of last error\.

## NewTimeval
```jule
fn NewTimeval(sec: i64, usec: i64, mut &out: Timeval): bool
```
Creates new Timeval by sec and usec\. Sets fields of the out\. Reports whether sec and usec have valid range\. If sec or usec have invalid range, out will not be mutated\.

## Read
```jule
unsafe fn Read(handle: int, mut buff: *unsafe, n: uint): int
```
Wrapper for C&#39;s read function\.

## Close
```jule
fn Close(handle: int): int
```
Wrapper for C&#39;s close function\.

## Write
```jule
unsafe fn Write(handle: int, buff: *unsafe, n: uint): int
```
Wrapper for C&#39;s write function\.

## Exit
```jule
fn Exit(code: int)
```
Wrapper for C&#39;s exit\.

## Select
```jule
unsafe fn Select(nfds: int, mut read: *FdSet, mut write: *FdSet, mut err: *FdSet, mut timeout: *Timeval): int
```
C&#39;s select function\.

## Errno
```jule
type Errno: errno
```
Type of error number\.

### Str
```jule
fn Str(self): str
```