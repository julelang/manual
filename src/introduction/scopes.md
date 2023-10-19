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
Deferred scopes are scopes whose execution is deferred until the scope they are in expires. Declares with the `defer` keyword.

For example:
```jule
fn main() {
    defer {
        outln("Hello Defer")
    }
    outln("Hello World")
}
```
In the example above, the output `Hello World` appears before. This is because the deferred scope is defined in the scope of the function and its execution is deferred until the scope of the function exits.

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