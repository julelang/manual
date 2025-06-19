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
    println(f(x, y)) // 30
    f = fn(a: int, b: int): int {
        ret a * b
    }
    println(f(x, y)) // 200
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
        println(f())
    }
}
```
The example above contains an example of fibonacci closure. The `fib` variable returns a new fibonacci closure. This closure uses the variables `a` and `b` defined in the scope of the `fib` function. Since Closure carries this scope within itself, mutations will be preserved in every subsequent invocation. In this way, the next Fibonacci number can be computed each time the returned closure is called. Based on this the above program computes the first 20 fibonacci numbers.

### Capturing

In some languages, it is the developer's choice how the captured variables can be captured, and in some languages, it should be specified which variables will be captured. For example, C++.

Jule does neither.
The compiler detects used varaibles and automatically captures them.
Accordingly, see these questions:
- [Why do not captured variables of closures need to be specified?](/some-questions/#why-do-not-captured-variables-of-closures-need-to-be-specified)
- [Why do not allow choose how to capture variables of closures?](/some-questions/#why-do-not-allow-choose-how-to-capture-variables-of-closures)