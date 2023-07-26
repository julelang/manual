# Functions
Functions are common in Jule code. Previously, the entry point function was mentioned in the basics. We have seen partially there how to define a function.

To remember:
```
fn example() {
    // ...
}
```
For functions, the name of the function comes first, followed by the parentheses. The braces indicate the block of the function.

So how can we call this function?\
For example:
```
example()
```
The name of the function comes first and then the parentheses again. 

## Function Parameters
Functions can have parameters. These parameters must be specified with arguments at the time the function is called.

For example:
```
fn print_int(i: int) {
    outln(i)
}

fn main() {
    print_int(50)
}
```
It is similar to normal function definition. Parameters are written between parentheses If there is more than one parameter, they are separated by commas. The name of the parameter is written first, followed by the data-type.

When calling the function, as seen in the example in the entry point, arguments are written in parentheses, and if they are more than one, they are separated from each other with commas. The given arguments must be compatible with the data-type of the corresponding parameters.

### Mutable Parameters
Parameters are immutable by default. For mutability, use the `mut` keyword.

For example:
```
fn my_func(mut i: int) { /* ... */ }
```

### Variadic Parameters
Variadic parameters can contain more than one value. The `...` operator is used for this.

For example: 
```
fn str_out(values: ...str) {
    for _, s in values {
        out(s)
    }
}

fn main() {
    str_out("Hello", "World", "Variadic")
}
```
As seen in the example above, many arguments could be given to the function even though it was a single parameter. This is a result of the variadic parameter. Putting the `...` operator before its name makes parameter variadic. 
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
```
fn main() {
    outln(div(10, 2))
}

fn div(a: f64, b: f64): f64 { ret a / b }
```
The `div` function divides the two parameters and returns the result as a value. To return a value, the function must have the data type for the return. Otherwise, it is considered a function that does not return data. The returned data must also be compatible with the return data type.

Return values are written with the `ret` keyword. Although the keyword `return` is widely used, `ret` was considered as an alternative to this keyword, which is both shorter and without losing its meaning.

## Using Function as Data Type
Functions can be used as data type. It is similar to defining a function. Just parameters and return value are necessary.

For example:
```
let my_function: fn(int, int): int
```
The example at above, is a variable definition with function data type. The compatible function values is a have two `int` parameter and returns `int` value.

## Anonymous Functions
Anonymous functions are like standard functions, but they are anonymous and are usually defined as a value. Anonymous functions is not have any name. Defining anonymous function is like declaring a function as a value type. Just in addition, the block of the function must be written.

For example:
```
fn main() {
    let make_hello = fn(name: str): str {
        ret "Hello " + name + "!"
    };
    outln(make_hello("Jule"))
}
```

---

Anonymous functions can access the definitions of the block in which they are defined. But doesn't referring them, copies all definition for itself. Therefore, you can't affect to parent scope definitions in most case.

For example: 
```
fn main() {
    let message = "Hello, World!"
    let func = fn() { outln(message) }
    func()
}
```
The anonymous function defined in the example above uses the message variable belonging to the block it is defined in. Definitions used from outer blocks can be shadowed within the anonymous function.

## Multiple Returnable Functions
Functions can returns more then one values. For that, specify return data-type with multiple type.

For example:
```
my_func(): (int, int) { ret 18, 96 }
```
Parentheses are used to specify multiple data types, seen as example at above. This option, only valid for function returns.

---

What happens when specified single data type with parentheses? Nothing, you not see compiler error. But not compile as multi type, compiles single data type.

For example:
```
fn less_than(x: int, y: int): (bool) { ret x < y }
```
The example at above, accepted as one type return. 

### Return Type Identifiers
To give an identifier to the return types, it's enough to make them look like multiple returns. The only addition is to give that return value an identifier before the return type.

For example:
```
fn example(): (x: int, y: int) {
    x = 10
    y = 20
    ret x, y
}
```
As in the example above. These identifiers also cause a variable to be created. For each identifier, the function has a variable initialized in its scope.

As noticed, they are mutable variables by default. This is because of some of compiler obsessions. Please refer to the [immutability documentations](/memory/immutability) if you don't know anything about it.

---

Also, a function that has at least one return type identifier does not have to have a return expression.

For example:
```
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
```
fn example(): (x: int, y: int) { ret 90, 100 }
```

### Multiple Assignment with Multiple Returned Functions
It's too similar to normal assignment. Give much identifier same count with function return values and give function call as value.

For example:
```
fn compare_int(x: int, y: int): (bool, bool) { ret x < y, x == y }

fn main() {
    let (less, equals) = compare_int(10, 20)
    outln(less)
    outln(equals)
}
```
::: warning
You can't use multiple returnable functions combined with normal multiple assignments.
:::

### Multiple Returns as Multiple Return
When you have a function that returns more than one value, and to use these return values as a return value in another function that returns exactly the same, using a variable too is not a necessity but a preference. Jule allows you to use the return values of a multi-return function as the return value and automatically maps the values if the return values and data types match exactly.

For example:
```
fn example1(): (int, str, byte) { ret 143, "STR", 'W' }
fn example2(): (int, str, byte) { ret example1() }

fn main() {
    let (a, b, c) = test2()
    outln(a)
    outln(b)
    outln(c)
}
```

## Concurrent Calls
Concurrency works on performing multiple tasks at the same time. This means that you are working on multiple tasks simultaneously in one time frame. However, you can only do one task for the same time. This tends to happen in programs where a task is waiting and the program has determined to run another task at idle time.

The keyword `co` is used to do a concurrent call.

For example:
```
fn hello_world() { outln("Hello World") }

fn main() {
    co hello_world()
}
```
::: warning
The concurrent calls spawns real threads that managed by kernel and the program does not automatically wait for the execution of concurrent calls to terminate.
:::

Please see [concurrency](/concurrency/) page of manual for more information.

## Valid Return Statements
A return expression need not always be specified in the main scope of the function. The only criterion is that the function returns under all conditions. Return statements in inner scopes are considered valid if they guarantee the return under all conditions.

For example:
```
fn get_rate(x: int): int {
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