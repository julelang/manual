# Panics
Panics abruptly stop program execution and "abort" it. If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice. The panic function is the builtin function. See the [builtin documentations](/standard-library/builtin).

For example:
```jule
fn add_to_ref(rate: int, mut i: &int) {
    if !real(i) {
        panic("i is nil reference")
    }
    i += rate
}

fn main() {
    add_to_ref(10, new(int))
}
```
The code above is an example of panicking.