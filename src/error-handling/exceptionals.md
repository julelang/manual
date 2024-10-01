# Exceptionals

Exceptions are a way of error handling for Jule. It can be considered as Optional. An exceptional must be specified as exceptional, otherwise it is not considered exceptional. Exceptions, unlike error coding, are not related to return values. Returns an exceptional return value or throws an exception.

Exceptions must be handled. The runtime cost is until the end of the call. After the call, if there is an exception, your program will panic or the handler will be executed. All relevant exceptional data then goes out of memory.

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

An exceptional has a special `error` keyword designed for lifetime use. The `error` keyword is used to return an exception within an exceptional scope. Normal `ret` statements mean a healthy return without exception. No `ret` statement is required to throw an exception. You just need to call an exception with the `error` keyword.

For example:
```jule
fn myExceptional()!: int {
    error("my error")
}
```

## Handling

Jule says that for safety reasons, when any exceptions are used, they must be handled. There are various methods of handling an exceptional.

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

`else` scopes are used to handle errors for exceptional calls. These scopes are considered a sub-scope of the same scope. The special `error` keyword still exists here. In this context, it represents the exception. So if you want to get the exception, you use the `error` keyword as a variable.

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
Since the Handler scope is a subscope, you can use `ret` statements to the main scope function.
:::

### Error Classification

Error coding can be used to determine the type of exceptions. The `error` call can accept any type, its parameter is of tyoe `any`. Custom error structures make it possible to do error coding for classification and so on.

For example:
```jule
enum DivError {
    ByZero,
    Overflow,
}

fn magicDiv(a: int, b: int)!: int {
    if b == 0 {
        error(DivError.ByZero)
    }
    if b > 100 {
        error(DivError.Overflow)
    }
    ret a / b
}

fn main() {
    let x = magicDiv(5, 200) else {
        match error {
        | DivError.ByZero:
            println("divided by zero")
        | DivError.Overflow:
            println("denominator higher than 100")
        }
        use -1
    }
    println(x) // -1
}
```

### Forwarding

Exceptions can be forwarded. However, a `goto`, `continue`, `break` or `ret` statement also provides this forwarding and eliminates the requirement for a return value for assignments.

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

As said above, any expression that eliminates the possibility of using the value, such as a `ret` or `continue` expression, also eliminates the need for an assignment expression due to forwarding rules.

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
