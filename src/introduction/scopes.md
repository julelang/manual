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

Deferred scopes are scopes whose execution is postponed until the end of the scope in which they are defined. They run at the end of the scope, or in any situation that requires that scope to terminate, such as a return statement. The execution order is LIFO (Last-In, First-Out).

In Jule, defer scopes are typically used for resource management as a form of RAII. Closing files or releasing a mutex are among the most common examples.

A pseudo code example to help you understand how they work:
```jule
fn readFile(path: str): []byte {
	ioMutex.Lock()
	defer { ioMutex.Unlock() }
	mut f := OpenFile(path)?
	defer { f.Close() }
	ret f.Read()?
}
```
In the example above, releasing the mutex and closing the file are guaranteed by the defer scopes. This prevents an edge case where one of them might be forgotten in a future change.

This example code compiles to the following:
```jule
fn readFile(path: str): []byte {
	ioMutex.Lock()
	mut f := OpenFile(path) else {
		ioMutex.Unlock()
		error(error)
	}
	mut data := f.Read() else {
		f.Close()
		ioMutex.Unlock()
		error(error)
	}
	f.Close()
	ioMutex.Unlock()
	ret data
}
```

Defer scopes are technically not closures. They refer to all variables within the scope by reference. That is, they do not use copies; they modify the actual variables directly. Return values and use values are not affected by this. In other words, when you write `ret x`, even if a defer scope that runs after the return statement changes the value of `x`, the return value does not change. There is one exception: if the return values themselves are variables, then the return value is affected.

For example, in this code, the defer scope will not affect the value returned by the function:
```jule
fn myfunc(x: int, y: int): int {
	mut r := 0
	defer { r *= 2 }
	r = x + y
	ret r
}
```
The return value does not change because when the variable `r` is used for return, its value at that moment is recorded for the return. Therefore, when the defer scope later changes the value of `r`, it does not affect the returned value.

However, in this example, it does affect the return value:
```jule
fn myfunc(x: int, y: int): (r: int) {
	defer { r *= 2 }
	r = x + y
	ret
}
```
In this case, the return value is affected because there is a variable name designated for the return value. It is guaranteed that this variable will be used as the return value. Therefore, when the defer scope changes the value of that variable, it also changes the return value.

This is not only true for assignments; the same would apply even if `ret x + y` were used directly, because the compiler uses that variable as the memory for the return value. In other words, it is guaranteed that the value will be written there, and that any mutation to that memory will affect the return value.

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