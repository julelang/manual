# Scopes
Scopes (aka code blocks or blocks) are indicated by braces, except in exceptional cases. Although a scope is often used to denote an algorithm domain, it is also used for other purposes. 

## Anonymous Scopes
Anonymous scopes are scopes that do not belong to a definition (function, etc.).

For example:
```jule
fn main() {
    {
        // Anonymous scope
    }
}
```
The above example shows an anonymous scope contained within the scope of the `main` function.

## Deferred Scopes

A deferred scope defers the execution of statements until the surrounding function returns.

The deferred scope variables evaluated immediately, but statements is not executed until the surrounding function returns.

Deferred scopes are pushed onto a stack. When a function returns, its deferred calls are executed in LIFO (last-in-first-out) order.

For example:
```jule
use "std/fmt"

fn main() {
	defer { fmt::Println("\nAll numbers printed.") }
	mut i := 0
	for i < 10; i++ {
		defer { fmt::Printf(" {}", i) }
	}
	fmt::Print("Numbers:")
}

/* OUTPUT:
Numbers: 9 8 7 6 5 4 3 2 1 0
All numbers printed.
*/
```
In the code above, the deferred scope inside the iteration records the current value of the variable `i` each time, effectively capturing a snapshot of the state. Before the function returns, it writes `Numbers:` to stdout. Then, as the function terminates, the statements in the deferred scopes start executing in LIFO (Last In, First Out) order. Accordingly, the deferred scopes inside the iteration are executed first, and finally, the initial deferred scope at the beginning of the function is executed.

**See Also**\
\- [Anonymous Functions and Closures](/common-concepts/functions/anonymous-functions)\
\- [Memory Model of Deferred Scopes](/memory/memory-model#deferred-scopes)

> Deferred scopes are always synchronous.
> They execute just before function return and cannot be async.

## Unsafe Scopes
Unsafe scopes allows to use Unsafe Jule. Declares with the `unsafe` keyword.

For example:
```jule
fn main() {
    unsafe {
        // Unsafe anonymous scope
    }
}
```
[See more information about Unsafe Jule](/unsafe-jule/)

## Deferred Unsafe Scopes
You may want to use Unsafe Jule and deferred scopes at the same time. You can do this.

For example: 
```jule
fn main() {
    unsafe defer {
        // Deferred unsafe anonymous scope
    }
}
```