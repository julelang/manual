# std/sys

This package may not be fully viewable as it is documented using `juledoc`. Due to its low-level nature, it contains many specific definitions. For more detailed documentation, refer to the source code.

## Index

[fn GetLastErrno\(\): Errno](#getlasterrno)\
[fn NewTimeval\(sec: i64, usec: i64, mut &amp;out: Timeval\): bool](#newtimeval)\
[fn Seek\(handle: int, offset: i64, origin: int\): i64](#seek)\
[unsafe fn Read\(handle: int, mut buff: \*unsafe, n: uint\): int](#read)\
[fn Close\(handle: int\): int](#close)\
[unsafe fn Write\(handle: int, buff: \*unsafe, n: uint\): int](#write)\
[fn Exit\(code: int\)](#exit)\
[fn Htons\(x: int\): u16](#htons)\
[fn Ntohs\(x: int\): u16](#ntohs)\
[unsafe fn Select\(nfds: int, mut read: \*Fd, mut write: \*Fd, mut err: \*Fd, mut timeout: \*Timeval\): int](#select)\
[type Errno](#errno)\
[type Timeval](#timeval)\
[type Sockaddr](#sockaddr)\
[type SockaddrIn](#sockaddrin)\
[type SockaddrIn6](#sockaddrin6)\
[type Fd](#fd)



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

## Seek
```jule
fn Seek(handle: int, offset: i64, origin: int): i64
```
Wrapper for C&#39;s lseek function\.

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

## Htons
```jule
fn Htons(x: int): u16
```
C&#39;s htons macro\.

## Ntohs
```jule
fn Ntohs(x: int): u16
```
C&#39;s ntohs macro\.

## Select
```jule
unsafe fn Select(nfds: int, mut read: *Fd, mut write: *Fd, mut err: *Fd, mut timeout: *Timeval): int
```
C&#39;s select function\.

## Errno
```jule
type Errno: int
```
Type of error numbers\.

## Timeval
```jule
type Timeval: cpp.timeval
```
C&#39;s timeval structure\.

## Sockaddr
```jule
type Sockaddr: cpp.sockaddr
```
C&#39;s sockaddr structure\.

## SockaddrIn
```jule
type SockaddrIn: cpp.sockaddr_in
```
C&#39;s sockaddr\_in structure\.

## SockaddrIn6
```jule
type SockaddrIn6: cpp.sockaddr_in6
```
C&#39;s sockaddr\_in6 structure\.

## Fd
```jule
type Fd: cpp.fd_set
```
C&#39;s fd\_set structure\.