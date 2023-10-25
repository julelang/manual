# Debugging Outputs

Debugging outputs are calls that contain information to help you while debugging or provide some data for some reason. In fact, they are the equivalent of the built-in `out` and `outln` functions, but they are not included in the production compilation.

They are defined in the `std::debug` standard library and must be imported to be used.

For example:

```jule
use debug for std::debug

fn main() {
    outln("I am always here")
    debug::outln("I will not be here in production builds")
}
```
