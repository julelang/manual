# Backend Emits

Your compiler allows you to emit backend code wherever you want. Integrated Jule should be used for this. The `std::jule::integrated` standard library included in Jule provides you with useful tools and functionalities for Integrated Jule. The `emit` function in the library allows you to emit backend code with Unsafe Jule.

When working with Integrated Jule, sometimes using use declarations and linking definitions may not be useful, or you may want to write as much Jule code as possible, in which case emitting backend code with the `emit` function can help you.

## Emit Backend Code

To emit backend code, use Unsafe Jule to call the `emit` function as the code you want as a constant string.

For example:
```jule
use integ for std::jule::integrated

fn main() {
    unsafe {
        integ::emit(`std::cout << "Hello World!" << std::endl;`)
    }
}
```

## Read from Backend Code

To emit backend code and read result, use Unsafe Jule to call the `emit` function as the code you want as a constant string. Pass single generic type to specify return type of backend code.

For example:
```jule
use integ for std::jule::integrated

fn main() {
    let x = unsafe { integ::emit[f64](`jule::MAX_F64`) }
    outln(x)
    outln(x == f64.MAX)
}
```
