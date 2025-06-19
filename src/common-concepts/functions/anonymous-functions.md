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

## Short Literals

Short literals allow anonymous functions to be quickly defined without specifying their parameter and return types. To enable this, a function type is required, as the short literal provides a prototype based on the target function type.

For example:
```jule
fn main() {
	let mut f: fn(x: int, y: int)
	f = fn|x, y| println(x * y)
	f(10, 20)
}
```
In the example above, the type of the variable `f` is a function. Accordingly, you can use a short literal. For instance, in the assignment expression, there is a short literal that defines the parameters `x` and `y` and writes the product of their values to stdout. Here, the parameters `x` and `y` will be automatically mapped to the `int` type.

For short literals, parameter types, return type, whether parameters are passed by reference, and exceptional behavior are automatically prototyped. However, mutability is not prototyped. If you want a parameter to be mutable, you must explicitly specify it.

For example:
```jule
fn|x, y, mut z| /* ... */
```
In the example above, the parameters `x` and `y` are immutable, while the parameter `z` is defined as mutable.

### One-Liner Literals

One-liner literals are a usage form that consists of only a single statement, and this statement must be an expression. If the function returns a value, the expression is treated as the return value.

For example:
```jule
fn main() {
	let mut f1: fn(x: int, y: int)
	let mut f2: fn(x: int, y: int): int
	f1 = fn|x, y| println(x * y)
	f2 = fn|x, y| x * y
}
```
In the example above, since the function `f1` is void, the short literal makes a `println` call. However, `f2` returns an `int` type and uses `x * y` as the return expression.

### Scoped Literals

Scoped literals are literals that have a scope, just like plain anonymous functions.

For example:
```jule
fn main() {
	let mut f1: fn(x: int, y: int)
	let mut f2: fn(x: int, y: int): int
	f1 = fn|x, y| { println(x * y) }
	f2 = fn|x, y| { ret x * y }
}
```
In the example above, short literals have a scope and are not limited to a single statement. However, unlike one-liner literals, they must use standard return statements to return a value.

### Generics and Type Inference

The use of short literals in generic types is limited. Short literals are not supported for constraints; even if the only constraint is a function type, the use of short literals is not allowed.

If the type is partially known, short literals are allowed. For this, the type must be explicit function type, the parameter types of the function, if any, must be known. Type inference is permitted only for the return type.

For example:
```jule
struct User {
	Name: str
	Root: bool
}

fn printUserData[T](f: fn(User): T) {
	r := f(User{"jule", true})
	println(r)
}

fn main() {
	printUserData(fn|user| user.Name)
	printUserData(fn|user| user.Root)
}
```
In the example above, the return type of the function is determined through type inference based on the return type of the short literal.