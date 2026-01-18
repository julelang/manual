# Functions

## Linking Functions
Like variables, after the header file containing the C++ functions is passed to Jule, C++ functions must be declared to Jule. Not all, just the ones you will use. But remember, julec does not check header files still.

To declare a C++ function, it must be stated that it is a C++ declaration. Then just represent the prototype of the function.

For example:
```jule
extern fn myFunction(int, int): f64
```
External functions can only be used within the respective package and can't overload. 
