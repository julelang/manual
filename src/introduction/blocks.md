# Blocks
Blocks are indicated by braces, except in exceptional cases. Each block represents a scope. Although a block is often used to denote an algorithm domain, it is also used for other purposes. 

## Anonymous Blocks
Anonymous blocks are blocks that do not belong to a definition (function, etc.).

For example:
```
fn main() {
    {
      // Anonymous block
    }
}
```
The above example shows an anonymous block (scope) contained within the block (scope) of the `main` function. 

## Deferred Blocks
Deferred blocks are blocks whose execution is deferred until the scope they are in expires. Declares with the `defer` keyword.

For example:
```
fn main() {
    defer {
        outln("Hello Defer")
    }
    outln("Hello World")
}
```
In the example above, the output `Hello World` appears before. This is because the deferred block is defined in the scope of the function and its execution is deferred until the scope of the function exits.

## Unsafe Blocks
Unsafe blocks allows to use Unsafe Jule. Declares with the `unsafe` keyword.

For example:
```
fn main() {
    unsafe {
      // Unsafe anonymous block
    }
}
```
[See more information about Unsafe Jule](/unsafe-jule/)

## Deferred Unsafe Blocks
You may want to use Unsafe Jule and deferred blocks at the same time. You can do this.

For example: 
```
fn main() {
    unsafe defer {
      // Deferred unsafe anonymous block
    }
}
```