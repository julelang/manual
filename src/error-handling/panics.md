# Panics
Panics immediately terminate program execution by aborting the process. If an issue represents a condition that will inevitably crash the program at runtime, using `panic` is appropriate. `panic` is provided as a built-in function ([see the builtin documentation](/std/builtin#panic)).

Panic handling deliberately avoids mechanisms such as stack unwinding. As a result, panic situations are not recoverable: there is no guarantee that `defer` scopes will run, and no cleanup is guaranteed. The program is terminated directly via an abort.

This design reflects Jule's philosophy that the primary mechanism for error handling is *exceptional functions*. A panic should only be used when the program state is corrupted or undefined, and attempting recovery would be meaningless or unsafe.

In addition to explicit `panic` calls written by the programmer, the compiler may also emit panics for unrecoverable runtime errors. Common examples include nil-pointer dereferencing, out-of-bounds access, or ignoring the result of an exceptional function.

In practice, a panic represents a condition that should never occur in a correct program. If a situation is recoverable, it must be handled using standard error-handling mechanisms such as exceptional functions-not panic.

::: tip
Relevant Questions:
- [Why doesn't Jule perform stack unwinding in panic situations?](/some-questions#why-doesn-t-jule-perform-stack-unwinding-in-panic-situations)
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