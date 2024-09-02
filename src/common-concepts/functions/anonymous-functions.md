# Anonymous Functions

Anonymous functions are basically like normal functions, but they are anonymous. In some cases, syntactically anonymous functions may be more useful. Especially when it comes to temporary functions that are called a small number of times or serve a specific purpose.

Anonymous functions are defined just like regular functions. But they have no names.

For example:
```jule
fn main() {
    x, y := 10, 20
    mut f := fn(a: int, b: int): int {
        ret a + b
    }
    outln(f(x, y)) // 30
    f = fn(a: int, b: int): int {
        ret a * b
    }
    outln(f(x, y)) // 200
}
```
As seen in the example above, two different anonymous functions are used for two different purposes. The syntax is very similar to function definitions, just don't give it a name. So you will have an anonymous function.

Anonymous functions can be portable and used without losing type safety thanks to [function type declarations](/common-concepts/functions/#using-function-as-data-type).

## Closures

Closures are similar to anonymous functions. However, they can access variables within the scope in which they are defined. Necessary variables are captured and stored with the anonymous function. It can access the captured variables even if the scope of the function defined in it ends.

Closures are syntactically no different from anonymous functions. When an anonymous function is defined, the compiler can determine whether it is a closure or not. Every time you define an anonymous function, you have access to the variables of the scope you define. If you use any of the variables you have access to, the anonymous function becomes a closure and your compiler captures the necessary variables for you.

For example:
```jule
fn fib(): fn(): int {
    mut a, mut b := 0, 1
    ret fn(): int {
        a, b = b, a+b
        ret a
    }
}

fn main() {
    f := fib()
    mut i := 0
    for i < 20; i++ {
        outln(f())
    }
}
```
The example above contains an example of fibonacci closure. The `fib` variable returns a new fibonacci closure. This closure uses the variables `a` and `b` defined in the scope of the `fib` function. Since Closure carries this scope within itself, mutations will be preserved in every subsequent invocation. In this way, the next Fibonacci number can be computed each time the returned closure is called. Based on this the above program computes the first 20 fibonacci numbers.

### Capturing

In some languages, it is the developer's choice how the captured variables can be captured, and in some languages, it should be specified which variables will be captured. For example, C++.

Jule does neither. \
Accordingly, let's handle two questions;

**Why do not captured variables need to be specified?**

Because it is not simple. \
Compiler can handle it instead of developer.

**Why do not allow choose how to capture variables?**

Because of safety. Jule doesn't have certain things to avoid adding too much responsibility to the runtime. One of these is to decide which variable in your runtime will be moved to the heap or not.

For example, let's say a closure accesses variables within its scope by reference. If closure's lifetime is ended before the scope in which it is defined, it is safe. However, if the closure lives longer, a special runtime must be relied upon. However, if the shutdown takes longer, a special operating time must be relied upon. Because figuring out at compile time whether the closure will last longer may be completely impossible/require too much static analysis or involve adding significant complexity to the language. Therefore, there must be a runtime trust in the background.

To prevent these problems, Jule captures all variables by copying instead of references. However, capturing with references may be possible if you know what you are doing. Jule has reference variables. For safety reasons, they cannot be used with Safe Jule from within the closure, but they can eliminate the need to capture by reference.

For example:
```jule
fn foo(f: fn()) {
    f()
    f()
}

fn main() {
    mut i := 0
    {
        mut &ri := i
        foo(fn() { unsafe { ri++ } })
    }
    outln(i) // 2
}
```
In the above example, we know that the closure will live shorter than the scope and we want to capture by reference. A child scope is created, but this is not necessary. This is an improvement to prevent the reference variables we created for the variables we want to capture by reference from surviving in the rest of the scope. The `ri` variable is used to reference the `i` variable and is mutated with Unsafe Jule in the closure. In this way, the `i` variable is also affected.

## Technical Details

Anonymous functions and closures are usually cheap. An anonymous function or closure is not much different from ordinary functions. They are implemented the same way in the background, only the name is automatically chosen by the compiler.

Anonymous functions and closures are stored and moved with pointers, just like ordinary functions. An anonymous function or closure has no additional cost to call. For anonymous functions, there is not additional execution cost, unlike closures.

Closures impose some additional costs. One of these is captured variables. A heap allocation is created for captured variables and is guaranteed to be traced and deallocated by the GC. There is no risk of memory leak. A closure is automatically deallocated when it is no longer reachable. There are no other memory footprints.

Captured variables are automatically detected by the compiler and captured by copy. More variables than necessary are not captured; the compiler captures only the variables used in the closure.

Due to the use of closures, all anonymously used functions have an additional hidden parameter. This hidden parameter is a pointer with common type traced by the GC and is null for functions other than other closures. If a ordinary function is used as an anonymous function, the compiler adds this hidden parameter for it. This parameter is only required for closures and is handled only by closures, other functions will ignore it.

A few additional instructions are added to the closure to handle this parameter. These instructions are usually cheap and do not impose significant runtime costs. The instructions usually include converting the hidden parameter to the closure's environment data.