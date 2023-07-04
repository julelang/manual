# Panics
Panics abruptly stop program execution and "abort" it. If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice. The panic function is the builtin function. See the [builtin documentations](/standart-library/builtin).

For example:
```
fn add_pointer(rate: int, mut ptr: *int) {
    if ptr == nil {
        panic("pointer is nil")
    }
    unsafe { *ptr += rate }
}

fn main() {
    add_pointer(10, nil)
}
```
The code above is an example of panicking.