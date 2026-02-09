# Panics
Panics abruptly stop program execution and "abort" it. If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice. The panic function is the built-in function. See the [builtin documentations](/std/builtin).

::: warning
Panics are not recoverable.
:::

For example:
```jule
fn addToRef(rate: int, mut i: &int) {
	if i == nil {
		panic("i is nil")
	}
	*i += rate
}

fn main() {
	addToRef(10, nil)
}
```
The code above is an example of panicking.