# Reserved Methods

Reserved methods are methods that standardize certain functions of structures. When the appropriate pattern is provided, the reserved method provides the functionality it is set to the structure.

In order for the reserved method to be implemented by the compiler, the pattern must be followed. This pattern can affect many points such as the name of the method, number of parameters, and return type.

Patterns should only be followed so that the compiler implements the relevant functionalities. They are not things that must be followed compulsorily. Therefore they do not cause any compiler errors.

## `fn Str(self): str`

The `Str` reserved method implements a special string conversion algorithm, replacing the structure's default string formatting applied by the compiler.

### The Pattern

- Method should not be `unsafe` and static
- Return type should be `str`
- Method should only have immutable non-reference `self` parameter
- Method should do not have generics

### Example
```jule
use "std/conv"

struct Num {
    x: int
}

struct SNum {
    x: int
}

impl SNum {
    fn Str(self): str {
        ret conv::Itoa(self.x)
    }
}

fn main() {
    // [Num{x:0} Num{x:0} Num{x:0} Num{x:0} Num{x:0}]
    println(make([]Num, 5))

    // [0 0 0 0 0]
    println(make([]SNum, 5))
}
```