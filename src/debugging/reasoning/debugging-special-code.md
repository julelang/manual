# Debugging Special Code

In some cases it may be good to have special algorithms that exist only in debug and do not affect the actual operation of the program, but disappear in production compilation. This section tells you how to get them.

## Debugging Outputs

Debugging outputs are calls that contain information to help you while debugging or provide some data for some reason. In fact, they are the equivalent of the built-in `out` and `outln` functions, but they are not included in the production compilation.

They are defined in the `std::debug` standard library and must be imported to be used.

For example:

```jule
use debug for std::debug

fn main() {
    outln("I am always here")
    debug::Outln("I will not be here in production builds")
}
```

## Debugging Special Algorithms

The `Call` function provided by `std::debug` calls the given function immediately at no additional cost. This call is eliminated in production compilation. Using this call you can implement some of your algorithms required for debugging.

::: warning
It is not recommended to use algorithms that interfere with the operation of your program. Doing so will cause your program's behavior to differ between debugging and production compilation and may cause you to have more bugs.
:::

For example:
```jule
use debug for std::debug

fn getMagicNumber(): int { ret 42 }

fn main() {
    let x = getMagicNumber()
    debug::Call(fn() {
        if x == 20 {
            panic("Magic number is 20, and I do not like this")
        }
    })
    outln(x)
}
```
