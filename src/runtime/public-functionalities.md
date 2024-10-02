# Public Runtime Functionalities

The runtime library provides some public definitions. These definitions are mostly safe, and they may influence common runtime behavior or provide some additional opportunities.

## Globals

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