# Interoperability
Jule can interop with C++. A code written in C++ compatible with Jule can be transferred to Jule, used and compiled without any problems. Everything needed is readily available, as JuleC imports APIs by default to every generated code.

## Using Binded Definitions
C++ links are stored separately. So to access C++ definitions it is necessary to use the C++ scope. The keyword `cpp` is used to use the C++ scope. The binded identifier can be used after the expression `cpp.`.

For example:
```jule
cpp.myVariable
```
```jule
cpp.myStruct{}
```
```jule
cpp.myFunction(x, y, z)
```

## Example to Interoperability

**sum.hpp**
```cpp
#include "api/jule.hpp"

jule::Int sum(const jule::Slice<jule::Int> slice) {
    jule::Int total = 0;
    for (const jule::Int x: slice)
        total += x;
    return total;
}
```
**main.jule**
```jule
cpp use "sum.hpp"

cpp fn sum([]int): int

fn main() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    let total = cpp.sum(numbers)
    println(total)
}
```
The above example demonstrates the interoperability of Jule with a C++ function that returns total of all values of an integer slice. The C++ header file is written entirely using the Jule API. The `Int`, and `Slice` types used are part of the API. The `Int` data type is equally sensitive to system architecture as in Jule. The Jule source code declares to use `sum.hpp` first and binds the C++ function in it to Jule accordingly. Then a call is made from Jule and the result of the function is written to the command line.
