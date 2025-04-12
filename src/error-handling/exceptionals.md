# Exceptionals

Exceptions are a standard way of error handling for Jule. It can be considered like Optional types. An exceptional function must be specified as exceptional, otherwise it is not considered as exceptional. Exceptions are not related to return values. An exceptional function may return or throw an exception, but not both.

Exceptions must be handled. The runtime cost is until the end of the call. After the call, if there is an exception, your program will panic or the handler will be executed. All relevant exceptional data then goes out of memory.

::: tip
This section focuses on explaining exceptional functions. Be sure to check out the [Errors](/error-handling/errors) section to learn how to use exceptional functions for error handling in the recommended way.
:::

Exceptional functions must be used alone, it does not supports combining such as binary or unary expressions. It just returns the result and handles the exception.

You can use exceptionals in;
- Assignment to variable
- Initializing a variable
- `use` expressions in the exceptional handler scope
- Return statements
- Expression statements of scope

## Defining

The operator `!` is used to define an exceptional function.

For example:
```jule
fn myExceptional()! { /* ... */ }
```

If you want to give a return value, the syntax is not much different. Just define an exceptional function and give it the result type as if it were a normal function.

For example:
```jule
fn myExceptional()!: int { /* ... */ }
```

## Exceptions

An exceptional has a special `error` keyword designed for lifetime use of an exceptional. The `error` keyword is used to throw an exception within an exceptional scope. The ordinary return statements mean a healthy return without exception. No return statement is required to throw an exception, return statements cannot throw an exception. You just need to use the `error` keyword keyword to do this.

For example:
```jule
fn myExceptional()!: int {
    error("my error")
}
```
In the example code above, `myExceptional` function throws an exceptional with `"my error"` value.

Exceptions are essentially of the `any` type. This means they behave exactly like an `any` type. Therefore, you can use any valid type just like `any` and throw it as an exception.

## Handling

Jule says that for safety reasons, when any exceptional function are used, it must be handled. There are various methods of handling an exceptional.

### Ignoring Errors

In some cases, you are sure that your exceptional access will return without any problems. In this case, there will be no exception, so you can complete the call without a handler so that you do not need to perform exceptional handling. To do this, just use the `!` operator after the call.

For example:
```jule
myExceptional()!
```

::: info
If things don't go as expected and an exception occurs, your program will panic.
:::

### Handling Errors

`else` scopes are used to handle errors for exceptional calls. These scopes are considered a sub-scope of the same scope and after the handler scopes are executed, the scope statements will continue to execute. The special `error` keyword still exists here. In this context, it represents the exception if used like expression rather than call. So if you want to get the exception, you use the `error` keyword as a variable.

For example:
```jule
fn myExceptional()! {
	error("my error")
}

fn main() {
	myExceptional() else {
		println(error)
	}
}
```
In the example code above, `println` call will print value of the exception.

#### Handling with Returns Values

Regarding the handling of return values of exceptional calls, it is necessary to provide a default value in case of error or a value to recover the situation. The point to remember is that the return values ​​are always in the last statement and not required `ret` keyword, just write `use` keyword instead of `ret` keyword.

For example:
```jule
fn myExceptional()!: int {
    error("my error")
}

fn main() {
    let x = myExceptional() else {
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

Exceptions can be forwarded just using the `error` keyword.

For example:
```jule
fn exceptional0()!: int {
	error("my error")
}

fn exceptional1()!: int {
	ret exceptional0() else { error(error) }
}

fn main() {
	let x = exceptional1() else {
		println(error)
		use 20
	}
	println(x)
}
```

In the code above, the `exceptional1` function is explicitly forwarding the exception of the `exceptional0` function call. In fact, the return statement requires an integer, but thanks to forwarding, the current function eliminates this requirement by forwarding the exception.

::: info
One thing to remember is that your compiler may place a temporary expression there for correct backend compilation. However, this shouldn't affect how your program runtime behavior; it may just be a must-have knowledge for extreme memory efficiency requirements.
:::

## Concurrency

Exceptions cannot be used in concurrent calls. It is recommended to use an anonymous function or define a separate function for their handling.

For example:

```jule
fn myExceptional()! {
    error("my error")
}

fn main() {
    co fn() {
        myExceptional()!
    }()
}
```
