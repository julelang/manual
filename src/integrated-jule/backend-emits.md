# Backend Emits

Your compiler allows you to emit backend code wherever you want. Integrated Jule should be used for this. The `std/jule/integrated` standard library included in Jule provides you with useful tools and functionalities for Integrated Jule. The `Emit` function in the library allows you to emit backend code with Unsafe Jule.

When working with Integrated Jule, sometimes using use declarations and linking definitions may not be useful, or you may want to write as much Jule code as possible, in which case emitting backend code with the `Emit` function can help you.

::: danger
This is not a recommended way to use C++ code in Jule. For more safe approach, see the [wrappers](/integrated-jule/interoperability/jule-wrappers). This is just might be useful for a minimal use cases, but mid/large scale C++ codes should be use wrappers for safety and maintainability.

- Your error messages might be confusing for your emitted C++ code. For example, the line numbers of the error messages cannot be predictable since the emitted code placed in the IR.
- Hard to maintain and investigate emitted C++ code in the IR. You cannot predict the output of the code completely and where the emitted code be placed in the IR. Your emitted C++ code may unexpectedly mix with the Jule.
- You will lost tools, editor/IDE support and other things for your C++ code. This means you will no longer have static analysis, code completion and others. Using separate C++ source files can still provide editor and tool support, which is more safe and maintainable.
:::

## Emit Backend Code

To emit backend code, use Unsafe Jule to call the `Emit` function as the code you want as a constant string.

For example:
```jule
use integ "std/jule/integrated"

fn main() {
    unsafe {
        integ::Emit(`std::cout << "Hello World!" << std::endl;`)
    }
}
```

## Read from Backend Code

To emit backend code and read result, use Unsafe Jule to call the `emit` function as the code you want as a constant string. Pass single generic type to specify return type of backend code.

For example:
```jule
use integ "std/jule/integrated"

fn main() {
    let x = unsafe {
        integ::Emit[f64](`0.3`)
    }
    println(x)
    println(x == 0.3)
}
```

## Emit from Jule Source Code

You may also want to use the variables or types you wrote in the Jule code in the emit. In this context, pass what you want by using the variadic parameter. In such a case your code will be assumed to be a format, the same formatting rules provided by standard [`std/fmt`](/std/fmt) library will apply.

The arguments you pass are evaluated by your compiler as they are in the backend, and placed in your emit code.

For example:
```jule
use integ "std/jule/integrated"

fn main() {
    let y = 40;
    unsafe {
        integ::Emit("{} x = {};", int, 20)
        integ::Emit("std::cout << x + {} << std::endl;", y)
    }
}
```

In the example above, the variable `x` is defined in the backend. However, its type and value are evaluated by the compiler and placed in the backend. This is a more compatible example of code emitting. What follows is the use of a variable `y` defined in Jule source code in the backend.
