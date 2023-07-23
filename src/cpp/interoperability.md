# Interoperability
Jule can interop with C++. A code written in C++ compatible with Jule can be transferred to Jule, used and compiled without any problems. Everything needed is readily available, as JuleC imports APIs by default to every generated code.

## Including C++ Headers into Jule
The use declarations of Jule are used to include C++ headers in the Jule code to be generated. It's just a little different. A use declaration should be told that this is a C++ include and the path should be given as a string.

For example:
```
use cpp "<stdlib.h>"
```
```
use cpp "<iostream>"
```
```
use cpp "header.hpp"
```
The correctness and validity of the file path is checked by the compiler.
Valid header extensions; `.h`, `.hh`, `.hpp`, `.hxx`

## Including C++ Header Implementations into Jule
You may not write your header files to include all the code (with implementation of declarations). Typical usage is in the form of a header file and a separate source code file for implementation of declarations. For this reason, you can also link your implementation C++ source code files just like header files.

For example:
```
use cpp "myfile.cpp"
```
```
use cpp "implementation.cxx"
```
The correctness and validity of the file path is checked by the compiler.
Valid source file extensions; `.cpp`, `.cc`, `.cxx`, `.mm`

## Linking C++ Variables to Jule
After the header file containing the C++ variables is passed to Jule, C++ variables must be declared to Jule. Not all, just the ones you will use. But remember, JuleC does not check header files. Your declarations are reliable. The compiler assumes that the definitions exist and are correctly defined.

For example:
```
cpp let tickrate: int
```

### Linking Macro Defines to Jule
Macro definitions are declared just like variables. Let's assume that the tickrate variable is macro define literal.

For example:\
**tickrate.hpp**
```cpp
#define TICKRATE 256
```
**sum.jule**
```
use cpp "tickrate.hpp"

cpp let tickrate: int
```

---

A few points:
- The data type must be specified when linking a variable
- Cannot give expression when linking a variable
- All variables linkings are immutable by default
- They cannot be constant, leave immutable if linking a constant variable
- Take macro definition literals as constants and leave them immutable

## Linking C++ Functions to Jule
Like variable linking, after the header file containing the C++ functions is passed to Jule, C++ functions must be declared to Jule. Not all, just the ones you will use. But remember, JuleC does not check header files still.

To declare a C++ function, it must be stated that it is a C++ declaration. Then just represent the prototype of the function.

For example:
```
cpp fn my_function(int, int): f64
```
Linked functions can only be used within the respective package and can't overload. 

### Linking Function-Like Macros to Jule
It is possible report macros to Jule. However, type protection must be provided exactly. Function-like macros must be declared as a function.

For example:\
**sum.hpp**
```cpp
#define SUM(X, Y) (X+Y)
```
**sum.jule**
```
use cpp "sum.hpp"

//jule:cdef
cpp fn SUM(int, int): int
```
The `cdef` attribute must be used for correct parsing of preprocessor defines.

## Linking C++ Structures to Jule
As always, your links are reliable. Generics are supported in linking a structure. Not all fields have to be specified. If you're only going to use the struct by name, you can also declare it without the fields. The requirements here are limited to your needs and what needs to be declared for compliance.

For example:
```
cpp struct my_struct{}
```
```
cpp struct my_struct {
    x: int
    y: str
}
```

::: warning
Your compiler will not automatically initialize with default value to fields that are not assigned in the struct literal for C++ linked structs.
:::

### Linking Methods to Jule

Your C++ structures may have methods and you want to link them to Jule. To do this, struct fields might be a trick for you. You can define struct fields with the name of your methods in the function type.

For example:

Our `mystruct.hpp` file:
```cpp
struct MyStruct {
    jule::Str text;

    void my_method(void) {
        std::cout << "My text is: " << text << std::endl;
    }
};
```

Our `main.jule` file:
```
use cpp "mystruct.hpp"

//jule:typedef
cpp struct MyStruct {
    text:      str
    my_method: fn()
}

fn main() {
    let ms = cpp.MyStruct{
        text: "Hello World",
    }
    ms.my_method()
}
```

---

If the struct is a typedef, say it's a typedef with attribute `typedef` for correct linking:
```
//jule:typedef
cpp struct my_struct {}
```

## Linking C++ Types to Jule
Although it is possible to link any typedef, these type aliases are not like standard aliases, for example they cannot be used as an alias for a struct if you use them in an expression. These type aliases are for linking unavoidable types to Jule.

For example: 
```
cpp type wchar_t: u16
```
::: warning
You bind bound types from C++ in accordance with the types they target. But that doesn't mean you can use them directly in that type. Linked types are internally compatible. They must be cast when they are intended to be used with the type they are targeted when linking. 
:::

## Using Linked Definitions
C++ links are stored separately. So to access C++ definitions it is necessary to use the C++ scope. The keyword `cpp` is used to use the C++ scope. The linked identifier can be used after the expression `cpp.`.

For example:
```
cpp.my_variable
```
```
cpp.my_struct{}
```
```
cpp.my_function(x, y, z)
```

## Example to Interoperability
**sum.hpp**
```cpp
using namespace jule;

Int sum(const Slice<Int> slice) {
    Int total{ 0 };
    for (const Int x: slice)
        total += x;
    return total;
}
```
**main.jule**
```
use cpp "sum.hpp"

cpp fn sum([]int): int

fn main() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    let total = cpp.sum(numbers)
    outln(total)
}
```
The above example demonstrates the interoperability of Jule with a C++ function that returns total of all values of an integer slice. The C++ header file is written entirely using the Jule API. The `Int`, and `Slice` types used are part of the API. The `Int` data type is equally sensitive to system architecture as in Jule. The Jule source code declares to use `sum.hpp` first and binds the C++ function in it to Jule accordingly. Then a call is made from Jule and the result of the function is written to the command line. 