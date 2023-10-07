# Panics
Panics abruptly stop program execution and "abort" it. If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice. The panic function is the builtin function. See the [builtin documentations](/std/builtin).

For example:
```jule
fn add_to_ref(rate: int, mut i: &int) {
    if i == nil {
        panic("i is nil reference")
    }
    i += rate
}

fn main() {
    add_to_ref(10, nil)
}
```
The code above is an example of panicking.