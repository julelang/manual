# Functions
Functions are common in Jule code. Previously, the entry point function was mentioned in the basics. We have seen partially there how to define a function.

To remember:
```jule
fn example() {
    // ...
}
```
For functions, the name of the function comes first, followed by the parentheses. The braces indicate the block of the function.

So how can we call this function?\
For example:
```jule
example()
```
The name of the function comes first and then the parentheses again. 

## Function Parameters
Functions can have parameters. These parameters must be specified with arguments at the time the function is called.

For example:
```jule
fn printInt(i: int) {
    outln(i)
}

fn main() {
    printInt(50)
}
```
It is similar to normal function definition. Parameters are written between parentheses If there is more than one parameter, they are separated by commas. The name of the parameter is written first, followed by the data-type.

When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas. The given arguments must be compatible with the data-type of the corresponding parameters.

### Mutable Parameters
Parameters are immutable by default. For mutability, use the `mut` keyword.

For example:
```jule
fn myFunc(mut i: int) { /* ... */ }
```

### Variadic Parameters
Variadic parameters can contain more than one value. The `...` operator is used for this.

For example: 
```jule
fn strOut(values: ...str) {
    for _, s in values {
        out(s)
    }
}

fn main() {
    strOut("Hello", "World", "Variadic")
}
```
As seen in the example above, many arguments could be given to the function even though it was a single parameter. This is a result of the variadic parameter. Putting the `...` operator before its type makes parameter variadic. 
::: tip
- Each variadic parameter, actually is an slice.
- Variadic parameters is not must have an argument in calling.
:::
::: warning
- A function, can have only one variadic parameter.
- Variadic parameters must be defined as last parameter.
:::

## Functions with Return Values
Functions can return values.

For example:
```jule
fn main() {
    outln(div(10, 2))
}

fn div(a: f64, b: f64): f64 { ret a / b }
```
The `div` function divides the two parameters and returns the result as a value. To return a value, the function must have the data type for the return. Otherwise, it is considered a function that does not return data. The returned data must also be compatible with the return data type.

Return values are written with the `ret` keyword. Although the keyword `return` is widely used, `ret` was considered as an alternative to this keyword, which is both shorter and without losing its meaning.

## Multiple Returnable Functions
Functions can returns more then one values. For that, specify return data-type with multiple type.

For example:
```jule
myFunc(): (int, int) { ret 18, 96 }
```
Parentheses are used to specify multiple data types, seen as example at above. This option, only valid for function returns.

---

What happens when specified single data type with parentheses? Nothing, you not see compiler error. But not compile as multi type, compiles single data type.

For example:
```jule
fn lessThan(x: int, y: int): (bool) { ret x < y }
```
The example at above, accepted as one type return. 

### Forwarding Return Values

If another function is doing multiple returns and wants to pass the return of a different function that returns the same types, it can do this by simply calling the function.

For example:
```jule
fn foo(): (int, f64, str) {
    ret 10, 3.14, "foo"
}

fn bar(): (int, f64, str) {
    ret foo()
}
```
In the example above, the functions `foo` and `bar` return the same types. Therefore, the `bar` function can forward the values ​​returned by the `foo` function with a simple `ret foo()` statement.

### Return Type Identifiers
To give an identifier to the return types, it's enough to make them look like multiple returns. The only addition is to give that return value an identifier before the return type.

Each identifier is treated as a mutable variable declaration and is declared and initialized at the beginning of the function for the scope of the function. They are mutable variables because of some of compiler obsessions. Please refer to the [immutability documentations](/memory/immutability) if you don't know anything about it.

For example:
```jule
fn example(): (x: int, y: int) {
    x = 10
    y = 20
    ret x, y
}
```
As in the example above. These identifiers also cause a variable to be created. For each identifier, the function has a variable initialized in its scope.

---

Also, a function that has at least one return type identifier does not have to have a return expression.

For example:
```jule
fn example(): (x: int, y: int) {
    x = 10
    y = 20
    ret
}
```
Respectively the related variables will be treated as the return statement.

---

If you provide a return expression while there are return identifiers, the expressions you provide as the expression of the identifiers will be accepted.

For example:
```jule
fn example(): (x: int, y: int) { ret 90, 100 }
```

### Multiple Assignment with Multiple Returned Functions
It's too similar to normal assignment. Give much identifier same count with function return values and give function call as value.

For example:
```jule
fn compareInt(x: int, y: int): (bool, bool) { ret x < y, x == y }

fn main() {
    let (less, equal) = compareInt(10, 20)
    outln(less)
    outln(equal)
}
```
::: warning
You can't use multiple returnable functions combined with normal multiple assignments.
:::

## Concurrent Calls
Concurrency works on performing multiple tasks at the same time. This means that you are working on multiple tasks simultaneously in one time frame. However, you can only do one task for the same time. This tends to happen in programs where a task is waiting and the program has determined to run another task at idle time.

The keyword `co` is used to do a concurrent call.

For example:
```jule
fn helloWorld() { outln("Hello World") }

fn main() {
    co helloWorld()
}
```
::: warning
The concurrent calls spawns real threads that managed by kernel and the program does not automatically wait for the execution of concurrent calls to terminate.
:::

Please see [concurrency](/concurrency/) page of manual for more information.

## Valid Return Statements
A return expression need not always be specified in the main scope of the function. The only criterion is that the function returns under all conditions. Return statements in inner scopes are considered valid if they guarantee the return under all conditions.

For example:
```jule
fn getRate(x: int): int {
    match {
    | x <= 30:
        ret 0
    | x <= 50
        ret 1
    | x <= 100:
        ret 3
    |:
        ret 8
    }
}
```
The function does not have to return in the main scope, as the match expression above returns a return for every condition. 

## Using Function as Data Type
Functions can be used as data type. It is similar to defining a function. Just parameters and return value are necessary.

For example:
```jule
let myFunction: fn(int, int): int
```
The example at above, is a variable definition with function data type. The compatible function values is a have two `int` parameter and returns `int` value.

The fact that functions can be used as data types makes it possible to use and store [anonymous functions and closures](/common-concepts/functions/anonymous-functions) with type safety.