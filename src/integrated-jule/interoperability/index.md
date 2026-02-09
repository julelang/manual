# Interoperability
Jule can interop with C++. A code written in C++ compatible with Jule can be transferred to Jule, used, and compiled without any problems. Everything needed is readily available, as julec imports APIs by default to every generated code.

## Using External Definitions
C++ links are stored separately. So, to access C++ definitions, it is necessary to use the C++ scope. The keyword `extern` is used to define the C++ scope. The external identifier can be used after the expression `extern.`.

For example:
```jule
extern.myVariable
```
```jule
extern.myStruct{}
```
```jule
extern.myFunction(x, y, z)
```

## Example to Interoperability

**sum.hpp**
```cpp
#include "api/jule.hpp"

__jule_Int sum(const __jule_Slice<__jule_Int> slice) {
    __jule_Int total = 0;
    for (const __jule_Int x: slice)
        total += x;
    return total;
}
```
**main.jule**
```jule
extern use "sum.hpp"

extern fn sum([]int): int

fn main() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    let total = extern.sum(numbers)
    println(total)
}
```
The above example demonstrates the interoperability of Jule with a C++ function that returns the total of all values of an integer slice. The C++ header file is written entirely using the Jule API. The `Int` and `Slice` types used are part of the API. The `Int` data type is equally sensitive to system architecture as in Jule. The Jule source code declares to use `sum.hpp` first and binds the C++ function in it to Jule accordingly. Then a call is made from Jule, and the result of the function is written to the command line.

## Error Handling

The language you are using may have its own error-handling mechanism, such as C++ exceptions, but these are undefined from Jule's perspective. You must not let any error-handling mechanisms leak into the Jule side. If Jule runtime encounters this kind of behavior, the behavior is undefined.