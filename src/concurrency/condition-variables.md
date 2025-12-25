# Condition Variables

Condition variables allow one or more coroutines to wait until a specific condition is met. They are a concurrency primitive provided by the Jule standard library via `sync::Cond`. A condition variable must be created using `Cond.New` and associated with a `Locker` during creation. This `Locker` is often a primitive like,`sync::Mutex`. Once a condition variable is used, it should not be copied again, as this could lead to inconsistencies and unexpected outcomes.

The `Signal` method is used to send a signal to a single waiting coroutine, while the `Broadcast` method is used to signal all waiting coroutines. To wait for a signal, the `Wait` method is used.

Additionally, `sys::Cond` provides the `Lock` and `Unlock` methods for the associated `Locker`. For consistency, it is recommended to use these methods to manage the locking mechanism, even if the mechanism is stored in a separate variable. Furthermore, unless absolutely necessary—which is rare—it is advised not to store the locking mechanism associated with the condition variable separately.

For example:
```jule
use "std/sync"
use "std/time"

async fn main() {
	mut wg := sync::WaitGroup.New()
	cond := sync::Cond.New(new(sync::Mutex))
	wg.Add(2)
	co async fn() {
		cond.Lock().await
		println("Coroutine 1 waits...")
		cond.Wait().await
		println("Coroutine 1 notified!")
		cond.Unlock()
		wg.Done()
	}()
	co async fn() {
		time::Sleep(2 * time::Second).await
		cond.Lock().await
		println("Coroutine 2 notifies coroutine 1!")
		cond.Signal()
		cond.Unlock()
		wg.Done()
	}()
	wg.Wait().await
}
```
In the example code above, a `WaitGroup` and a condition variable are used to wait and signal for coroutines. As recommended, the locking mechanism to be used with the condition variable (in this case, a `sync::Mutex`) is directly associated and used through the condition variable. The coroutine 1 waits for a signal with the `Wait` call, while coroutine 2 sends this signal with the `Signal` call. As a result, coroutine 1 is awakened and continues execution.

When waiting for a condition, the `Wait` method should called within a loop which checks the condition. This ensures that unexpected wakeups or notifications are handled correctly (see: [Spurious Wakeups](https://en.wikipedia.org/wiki/Spurious_wakeup)). A `Wait` call, considers the associated `Locker` is locked. Releases the locking mechanism and waits until it is notified by a signal. After being notified, it tries to reacquire the lock.

For example:
```jule
use "std/sync"
use "std/time"

let cond = sync::Cond.New(new(sync::Mutex))
let mut ready = false

async fn waitForCondition(mut wg: &sync::WaitGroup) {
	cond.Lock().await
	for !ready {
		println("Waiting for the condition...")
		cond.Wait().await
	}
	println("Condition met!")
	cond.Unlock()
	wg.Done()
}

async fn signalCondition() {
	time::Sleep(time::Second * 3).await
	cond.Lock().await
	ready = true
	cond.Signal()
	cond.Unlock()
}

async fn main() {
	mut wg := sync::WaitGroup.New()
	wg.Add(1)
	co waitForCondition(wg)
	signalCondition().await
	wg.Wait().await
}
```

In the above code example, the `waitForCondition` function works with a coroutine and waits for the `ready` variable to become `true`. As mentioned, the waiting is done within a loop. The `signalCondition` function, on the other hand, waits for 3 seconds before setting the required condition and waking up the coroutine.