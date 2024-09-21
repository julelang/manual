# Public Runtime Functionalities

The runtime library provides some public definitions. These definitions are mostly safe, and they may influence common runtime behavior or provide some additional opportunities.

## Globals

```jule
const RCDelta: untyped integer
```
The reference counting data delta value that must occur per each reference counting operation.