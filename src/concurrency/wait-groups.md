# Wait Groups

Synchronization is something you might want for concurrency. It has been mentioned that your coroutines are not traced and your program may terminate without waiting for all of them to execute. Wait groups allow you to wait for your coroutines to finish.

For example:

```jule
async fn sayHello() {
	println("Hello World")
}

async fn main() {
	co sayHello()
}
```

In the code above there is a coroutine to a function that writes `Hello World` on the command line. It is possible that you will not see the result when you execute this code. This is probably because your program terminates before your coroutine has finished executing, as described above. Your program may terminate before your call can print `Hello World` to command line.

Jule provides the `WaitGroup` struct in the `std/sync` standard library so that you can wait for your coroutines and trace their execution. The `WaitGroup` structure acts as a kind of counter for coroutines. It is simple to use. You basically use it for three tasks: increasing the counter for new coroutines, decreasing the counter for completed coroutines, and waiting for the counter to go down to zero, that is, for all coroutines to finish executing.

For example:

```jule
use "std/sync"

async fn sayHello(mut wg: &sync::WaitGroup) {
	println("Hello World")
	wg.Done()
}

async fn main() {
	let mut wg = sync::WaitGroup.New()
	wg.Add(1)
	co sayHello(wg)
	wg.Wait().await
}
```

The above example is the first example using `WaitGroup`. Since this code watches coroutines thanks to `WaitGroup`, it waits for all coroutines to finish executing, thus guaranteeing that printing `Hello World` will definitely complete.

As can be seen in the example, the `WaitGroup` used with reference type. This is because counting needs to act on the original `WaitGroup`. To achieve this, you can also follow a different method such as using pointers.

Calling `wg.Add(1)` increments the counter of `WaitGroup` by one. In other words, it means we have a new coroutine. If there is an important point here, it is that the counting must be done correctly. For example, you have 1 coroutine but you are trying to count 10 coroutines, so if your counter never reaches 0, you may enter a continuous waiting loop.

Another important point is that the counter is incremented before the coroutine. If the counter was even the first statement of the coroutine, problems with counting could occur. This might not be an accurate count. For this reason, counting should always be performed independently of the coroutine. Counting is also recommended before each coroutine is created.

`wg.Done` should be called when the coroutine terminates. If the coroutine is called before it terminates, you may still face a counting error. A call to `wg.Done()` decrements the counter by one, ie coroutine's execution has been completed.

The `wg.Wait()` call waits for all coroutines to terminate, in other words, for the counter to go down to zero, preventing the program from executing until then.