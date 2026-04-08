# Fallible Functions

Fallible functions are a standard way of error handling for Jule. It can be considered like optional types. A fallible function must be specified as fallible. Errors are not related to return values. A fallible function may return or throw an error, but not both.

Errors must be handled. The runtime cost is until the end of the call. After the call, if there is an error, your program will panic, or the handler will be executed. All relevant error data then goes out of memory.

::: tip
This section focuses on explaining fallible functions. Be sure to check out the [Errors](/error-handling/fallible-functions/errors) section to learn how to use fallible functions for error handling in the recommended way.
:::

Fallible functions must be used alone; they do not support combining, such as binary or unary expressions. It just returns the result and handles the error.

You can use fallible functions in;
- Assignment to variable
- Initializing a variable (except static variables)
- `use` expressions in the error handler scope
- Return statements
- Expression statements of scope

## Defining

The operator `!` is used to define a fallible function.

For example:
```jule
fn myFallible()! { /* ... */ }
```

If you want to give a return value, the syntax is not much different. Just define a fallible function and give it the result type as if it were a normal function.

For example:
```jule
fn myFallible()!: int { /* ... */ }
```

## Throwing Errors

The `throw` keyword is used to throw an error within a fallible function scope. The ordinary return statements mean a healthy return without error. No return statement is required to throw an error; return statements cannot throw an error. You just need to use the `throw` keyword to do this.

For example:
```jule
fn myFallible()!: int {
    throw "my error"
}
```
In the example code above, `myFallible` function throws an error with `"my error"` value.

Errors are essentially of the `any` type. This means they behave exactly like an `any` type. Therefore, you can use any valid type just like `any` and throw it as an error.

Error data in Jule must not be `nil` nor an unknown `any` type. At compile time, it is strictly guaranteed that an error cannot resolve to an `any(nil) == nil` state. While this safety mechanism may present challenges in scenarios where you need to store an error for deferred throwing, wrapping the error in a custom type provides an effective architectural solution.

However, for cases where explicit low-level control is required and the developer is fully aware of the memory implications, Jule also provides the `unsafe throw` statement. An `unsafe throw` statement accepts any value as an argument, including a `nil` literal.

For example:
```jule
unsafe throw nil
```

::: info
An unsafe throw statement must be explicitly declared. Within an unsafe scope, standard throw expressions are not automatically treated as unsafe throws, nor does the general [Unsafe Jule](/unsafe-jule/) context apply to the error value by default. The unsafe throw keyword serves as a surgical override, specifically lifting the safety constraints only for the error value itself.
:::

## Handling Fallible Functions

Jule says that for safety reasons, when any fallible function are used, it must be handled. There are various methods of handling a fallible function call.

### Ignoring Errors

In some cases, you are sure that your fallible function call will return without any problems. In this case, there will be no error, so you can complete the call without a handler so that you do not need to perform error handling. To do this, just use the `!` operator after the call.

For example:
```jule
myFallible()!
```

::: info
If things don't go as expected and an error occurs, your program will panic.
:::

### Handling Errors

`else` scopes are used to handle errors for fallible function calls. These scopes are considered a sub-scope of the same scope, and after the handler scopes are executed, the scope statements will continue to execute. The special `error` keyword still exists here. In this context, it represents the error if used as an expression rather than a call. So if you want to get the error, you use the `error` keyword as a read-only variable.

For example:
```jule
fn myFallible()! {
	throw "my error"
}

fn main() {
	myFallible() else {
		println(error)
	}
}
```
In the example code above, `println` call will print value of the error.

#### Handling with Returns Values

Regarding the handling of return values of fallible function calls, it is necessary to provide a default value in case of error or a value to recover the situation. The point to remember is that the return values ​​are always in the last statement and do not require the `ret` keyword; just write the `use` keyword instead of the `ret` keyword.

For example:
```jule
fn myFallible()!: int {
    throw "my error"
}

fn main() {
    let x = myFallible() else {
        println(error)
        use 10
    }
    println(x) // 10
}
```

::: tip
If you want to return a value and prevent the algorithm from continuing, an alternative option is to terminate the scope using keywords like `ret`, `continue`, or `break` instead of `use`.
:::

### Forwarding

Errors can be forwarded just using the `throw` keyword.

For example:
```jule
fn fallible0()!: int {
	throw "my error"
}

fn fallible1()!: int {
	ret fallible0() else { throw error }
}

fn main() {
	let x = fallible1() else {
		println(error)
		use 20
	}
	println(x)
}
```

In the code above, the `fallible1` function is explicitly forwarding the error of the `fallible0` function call. In fact, the return statement requires an integer, but thanks to forwarding, the current function eliminates this requirement by forwarding the error.

If your fallible function will not handle an error, just forward it, then you can forward the error in a shorter way. With the question-mark operator, you can forward error directly.

For example:
```jule
fn fallible0()!: int {
	throw "my error"
}

fn fallible1()!: int {
	ret fallible0()?
}
```
In the example above, the function `fallible1` return the result and forwards error of the `fallible0` function.

::: info
One thing to remember is that your compiler may place a temporary expression there for correct backend compilation. However, this shouldn't affect how your program's runtime behavior; it may just be a must-have knowledge for extreme memory efficiency requirements.
:::

## Coroutines

Fallible functions cannot be used in coroutine calls. It is recommended to use an anonymous function or define a separate function for their handling.

For example:

```jule
async fn myFallible()! {
	throw "my error"
}

async fn main() {
	co async fn() {
		myFallible().await!
	}()
}
```

## Global Scope

Fallible functions are disallowed for the global scope. To use them in global scope, wrap with non-fallible function.

For example:
```jule
fn foo()!: int {
	ret 10
}

fn fooMust(): int { ret foo()! }

let a = fooMust()

fn main() {
	println(a)
}
```