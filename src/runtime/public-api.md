# Public API

The runtime library is not completely internal, also provides a public API. This API is mostly safe, and they may influence common runtime behavior or provide some additional opportunities.

## Index

[Variables](#variables)\
[fn NumCPU(): int](#numcpu)\
[fn Yield()](#yield)\
[fn Task()](#task)

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
const OS: string
```
The running program's operating system target: one of macos, linux and so on.\
To view possible combinations of OS, run `julec tool distos`

```jule
const Arch: string
```
The running program's architecture target: one of i386, amd64 and so on.\
To view possible combinations of OS, run `julec tool distarch`

```jule
const RCDelta: untyped integer
```
The reference counting data delta value that must occur per each reference counting operation.

## NumCPU
```jule
fn NumCPU(): int
```
Returns the number of logical CPUs usable by the current process.

The set of available CPUs is checked by querying the operating system at process startup. Changes to operating system CPU allocation after process startup are not reflected.

## Yield
```jule
fn Yield()
```
Cooperatively gives up a timeslice to the OS scheduler.

This calls the underlying OS scheduler's yield primitive, signaling that the calling thread is willing to give up its remaining timeslice so that the OS may schedule other threads on the CPU.

## Task
```jule
fn Task(job: fn())
```
Designed for CPU-bound work, where each task is executed on a thread pool. It is designed to enable synchronous programs to perform concurrent computations for CPU-bound tasks without thread management concerns. Uses a common thread pool for all jobs.