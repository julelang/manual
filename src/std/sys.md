# std/sys

This package may not be fully viewable as it is documented using `juledoc`. Due to its low-level nature, it contains many specific definitions. For more detailed documentation, refer to the source code.

::: danger
This package contains low-level implementations for the system calls with low abstraction. Use the safe implementations from the stdlib for corresponding functionality instead of direct syscalls. This package is under the terms of the [Unsafe Jule](/unsafe-jule/). Be careful using API of this package. Although many syscall provided with abstraction, the level of this abstraction is quite low and doing things correct is developer's responsibility.
:::

This packages includes some built-in powered functions:
- [Addrcall](/low-level-helpers/syscalls/addrcalls)

## Index

[fn NewTimeval\(sec: i64, usec: i64, mut &amp;out: Timeval\): bool](#newtimeval)\
[type Errno](#errno)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)\
[type Signal](#signal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-1)



## NewTimeval
```jule
fn NewTimeval(sec: i64, usec: i64, mut &out: Timeval): bool
```
Creates new Timeval by sec and usec\. Sets fields of the out\. Reports whether sec and usec have valid range\. If sec or usec have invalid range, out will not be mutated\.

## Errno
```jule
type Errno: uintptr
```
Type of error number\.

### Str
```jule
fn Str(self): str
```


## Signal
```jule
type Signal: int
```
A Signal is a number describing a process signal\.

### Str
```jule
fn Str(self): str
```