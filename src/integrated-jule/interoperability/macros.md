# Macros

## Linking Macro Defines
Macro definitions are declared just like variables. Let's assume that the tickrate variable is macro define literal.

For example:\
**tickrate.hpp**
```cpp
#define TICKRATE 256
```
**sum.jule**
```jule
extern use "tickrate.hpp"

extern let TICKRATE: int
```

---

A few points:
- The data type must be specified when linking a variable
- Cannot give expression when linking a variable
- All variables linkings are immutable by default
- They cannot be constant, leave immutable if linking a constant variable
- Take macro definition literals as constants and leave them immutable

## Linking Macro Functions
It is possible report macros to Jule. However, type protection must be provided exactly. Function-like macros must be declared as a function.

For example:\
**sum.hpp**
```cpp
#define SUM(X, Y) (X+Y)
```
**sum.jule**
```jule
extern use "sum.hpp"

#cdef
extern fn SUM(int, int): int
```
The `cdef` attribute must be used for correct parsing of preprocessor defines.