# Atomicity

Atomicity is important for concurrency. An atomic operation guarantees that the memory accesses will be sequential. At the very least, you can be sure that their in-memory operation will produce the correct result.

Here is an example code:

```jule
let mut n: int = 0

async fn addToN() {
	n++
}

async fn main() {
	const Total = 1_000_000
	mut j := 0
	for j < Total; j++ {
		co addToN()
	}
	println(n)
}
```

What is missing in the above code? You probably noticed that the `WaitGroup` struct described in the previous section should be used. Because exactly `1000000` coroutine is created, but there is no guarantee that any of them will finish their execution.

Well, we will wait for the coroutines to finish executing with `WaitGroup` structure. So is there another problem? Of course we do, we need atomic access because we have a race condition for `n` variable.

The above code creates coroutines that increment the global `n` variable by 1. As a result, when all coroutines are completed, the value of the `n` variable should have the value `1000000`. However, contrary to expectations, even if all corotuines are expected to be executed, the result may not be `1000000` in a healthy way. The reason for this is the race condition. Race condition occurs when more than one coroutine tries to access a data field at the same time. In other words, according to the scenario above, two or more coroutines can read data of variable `n` at the same time. This means that because a coroutine reads the same data, it will increase the old data by one, that is, it does not take any action that will affect the result.

Atomic accesses can be used to synchronize memory accesses. An atomic process locks the corresponding memory space so that it can only be accessed by one coroutine at a time. This causes the increment and read operations to be performed safely. Because coroutines wait for the relevant memory area to be unlocked, and only one of them can take over this lock and perform operations at a time.

Jule provides the `std/sync/atomic` package for atomicity as standard. Now let's take a look at the above code secured with `WaitGroup` and atomic operations:

```jule
use "std/sync"
use "std/sync/atomic"

let mut n = atomic::Int(0)

async fn addToN(mut wg: &sync::WaitGroup) {
	n.Add(1, atomic::Relaxed)
	wg.Done()
}

async fn main() {
	mut wg := sync::WaitGroup.New()
	const Total = 1_000_000
	mut j := 0
	for j < Total; j++ {
		wg.Add(1)
		co addToN(wg)
	}
	wg.Wait().await
	println(n.Load(atomic::Relaxed))
}
```

The above code is waiting for all coroutines to terminate with `WaitGroup`. That's nice, but is the variable `n` safely incremented? The answer is yes, it is now an atomic operation.
