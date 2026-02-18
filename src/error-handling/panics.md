# Panics
Panics abruptly stop program execution and "abort" it. If you're talking about an issue that will cause the program to crash while executing, using panic would be a good choice. The panic function is the built-in function. See the [builtin documentations](/std/builtin).

Panic situations do not use naïve approaches such as stack unwinding, so there is no chance to recover from them. There is no guarantee that things like defer scopes will run, and there is no cleanup guarantee. The program is terminated directly with an “abort”.

The reason for this is that Jule's primary mechanism for error handling is exceptional functions. Panic cases should only be used when the program state is corrupted/undefined and attempting recovery is no longer meaningful.

In addition to `panic` calls triggered by the programmer, the compiler will also generally use panic for unrecoverable errors. The most common examples are nil pointer dereferencing, boundary violations, or an ignored exceptional function error.

In practice, a `panic` situation is something that should never occur, because when a program hits a panic it means it has encountered a state that was never supposed to happen. For recoverable situations, error-handling approaches such as exceptional functions should always be used instead.

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