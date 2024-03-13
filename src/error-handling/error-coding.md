# Error Coding
Error coding is Jule's primary recommended method for error handling. In this method, integer constants are used to encode errors. Each integer is arranged to represent a unique error. The best way to accomplish this is to use an enum, a constant variable can be used depending on the developer's design preference.

For example:
```jule
enum DivError {
    Ok,
    DividedByZero,
}

fn my_div(a: f64, b: f64): (f64, DivError) {
    if b == 0 {
        ret 0, DivError.DividedByZero
    }
    ret a/b, DivError.Ok
}

fn main() {
    let (result, err) = my_div(5, 0)
    match err {
    | DivError.DividedByZero:
        outln("error: divided by zero")
    |:
        outln(result)
    }
}
```