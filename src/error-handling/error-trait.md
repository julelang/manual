# Error Trait
The Error trait is a builtin definition. It is a way of handling errors. While the program is executing, if the functions are designed to return this structure when a problem occurs, providing error handling.

If a function does not panic when there is an error, it can return the error with the Error trait and provides handle it. Returns nil when there is no error.

For example:
```
use std::errors

fn my_div(a: f64, b: f64): (f64, Error) {
    if b == 0 {
        ret 0, std::errors::new("divide by zero")
    }
    ret a/b, nil
}

fn main() {
    let (result, err) = my_div(5, 0)
    if err != nil {
        outln(err)
        ret
    }
    outln(result)
}
```
In the example above, a potential error is handled with the Error trait.

## Creating Custom Errors
You can create your own error structure for error handling by implementing the Error trait.

For example:
```
struct MyError {
    message: str
}

impl Error in MyError {
    fn error(self): str {
        ret self.message
    }
}

fn my_div(a: f64, b: f64): (f64, Error) {
    if b == 0 {
        ret 0, MyError{"divide by zero"}
    }
    ret a/b, nil
}

fn main() {
    let (result, err) = my_div(10, 0)
    if err != nil {
        outln(err.error())
        ret
    }
    outln(result)
}
```