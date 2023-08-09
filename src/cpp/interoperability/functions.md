# Functions

## Linking Functions
Like variable linking, after the header file containing the C++ functions is passed to Jule, C++ functions must be declared to Jule. Not all, just the ones you will use. But remember, JuleC does not check header files still.

To declare a C++ function, it must be stated that it is a C++ declaration. Then just represent the prototype of the function.

For example:
```jule
cpp fn my_function(int, int): f64
```
Linked functions can only be used within the respective package and can't overload. 
