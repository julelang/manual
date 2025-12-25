# Public API

The runtime library is not completely internal, also provides a public API. This API is mostly safe, and they may influence common runtime behavior or provide some additional opportunities.

## Index

[Variables](#variables)\
[fn COMAXPROCS(): int](#comaxprocs)\
[fn NumCPU(): int](#numcpu)\
[async fn Yield()](#yield)

## Variables

```jule
const BigEndian: bool
```
Whether the running program's architecture is big-endian.

```jule
const LittleEndian: bool
```
Whether the running program's architecture is little-endian.

```jule
const OS: str
```
The running program's operating system target: one of darwin, linux and so on.\
To view possible combinations of OS, run `julec tool distos`

```jule
const Arch: str
```
The running program's architecture target: one of i386, amd64 and so on.\
To view possible combinations of OS, run `julec tool distarch`

```jule
const RCDelta: untyped integer
```
The reference counting data delta value that must occur per each reference counting operation.

## COMAXPROCS
```jule
fn COMAXPROCS(): int
```
Returns the maximum number of CPUs that can be executing simultaneously.

## NumCPU
```jule
fn NumCPU(): int
```
Returns the number of logical CPUs usable by the current process.

The set of available CPUs is checked by querying the operating system at process startup. Changes to operating system CPU allocation after process startup are not reflected.

## Yield
```jule
async fn Yield()
```
// Yields the processor, allowing other coroutines to run. It does not
// suspend the current coroutine, so execution resumes automatically.