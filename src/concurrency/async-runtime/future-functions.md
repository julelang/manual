# Future Functions

Async functions are compiled as state machines and always incur an extra overhead to accommodate a potential suspension. For frequently called async functions that do not always need to wait, this overhead can accumulate and become much greater than necessary.

To solve this, Jule features async functions capable of returning futures. These functions are not purely async functions in the conventional sense. That is, they largely avoid being compiled into a state machine under the hood and grant you the ability to proceed without waiting whenever possible.

To create an async function that returns a future, you must define it using the `#future` directive. Async functions declared with this directive can only contain a single statement: a call to the built-in `future` function.

A call to `future` takes two functions. The first function is used for the ready state, and the second is the suspend function triggered when waiting is or may be required. Writing a future function is straightforward, as the ready and suspend functions share a signature very similar to that of the future function itself. The ready function is a non-async function, but its return type, fallibility, and parameters are identical. The suspend function, on the other hand, shares the exact same signature as the future function.

The ready function is defined with the `#ready` directive and can set whether the async function is ready by using a call to the built-in `ready` function. If it is ready, the suspend function is not executed at all, allowing the execution overhead of the async function to be reduced.

Here is a simple addition example:
```jule
#ready
fn getNum_Ready(): int {
	ready(true)
	return 1
}

async fn getNum_Suspend(): int {
	panic("this function will never work")
}

#future
async fn getNum(): int {
	future(getNum_Ready, getNum_Suspend)
}

async fn main() {
	mut i, mut x := 0, 0
	for i < 1_000_000; i++ {
		x += getNum().await
	}
	println(x)
}
```
In the example above, an addition operation is performed using the value returned from the async function. The async function is called exactly 1 million times. If a state machine ran every single time with its associated overhead, the cost of this operation could be quite high.

However, thanks to the future-based async function above, the suspend function is never executed because the ready function reports its state as true and returns the value 1 directly. While this is not as fast as doing it with a simple sync function, it is certainly a much faster approach than using a pure async function.