# Async Runtime

The async runtime, although specifically designed for use with Jule and deeply integrated with the runtime, can be partially used through C++ interoperability. Only a very small portion of the async runtime and coroutine infrastructure is safe to use, and only when handled with great care.

You cannot interact with the scheduler directly, and doing so is not recommended. The runtime and scheduler are designed to interact only with the compiler. However, you can write async functions on the C++ side, and calling them from Jule code is permitted.

The Jule API provides two different types: `__jule_VoidAsync` and `__jule_Async<T>`.

If you are designing an async function that does not return a value, you should use `__jule_VoidAsync`.
If you are designing an async function that returns a value, you should use `__jule_Async<T>`.

For the `await` keyword on the Jule side, you can use the `__jule_AsyncAwait` macro, and for the `ret` keyword, you can use the `__jule_AsyncRet` macro.

Here is an example:
```cpp
__jule_VoidAsync checkdiv(__jule_Int z) {
	if (z == 0) {
		__jule_panicStr("divide by zero");
	}
	__jule_AsyncRet;
}

__jule_Async<__jule_Int> mydiv(__jule_Int x, __jule_Int y) {
	__jule_AsyncAwait checkdiv(y);
	__jule_AsyncRet x + y;
}
```
Alright, this is not a real "async" example, but it is sufficient to understand the concept. This is the code for a simple division function that checks for division by zero. As shown, `__jule_AsyncAwait` is used to wait for the async `checkdiv` function, which is equivalent to the Jule's `await` keyword. Both functions use `__jule_AsyncRet`. Although `checkdiv` does not actually return a value, you might think this is optional, but it is in fact mandatory.

For C++ interoperability, Jule async functions are lowered to C++20 coroutines at the code-generation level. As a result, the generated C++ code relies on standard coroutine state machinery.

`__jule_AsyncRet` marks the logical completion point of a Jule async function and is required to correctly finalize the underlying coroutine promise. Omitting it may cause the generated code to violate the expected async ABI and lead to undefined behavior at runtime.

Therefore, all control-flow paths of an async function must terminate with `__jule_AsyncRet`.