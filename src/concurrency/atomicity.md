# Atomicity

Atomicity is important for concurrency. An atomic operation guarantees that the memory accesses will be sequential. At the very least, you can be sure that their in-memory operation will produce the correct result.

Here is an example code:

```jule
static mut n: int = 0

fn addToN() {
    n++
}

fn main() {
    let mut j = 0
    for j < 1000000; j++ {
        co addToN()
    }
    outln(n)
}
```

What is missing in the above code? You probably noticed that the `WaitGroup` struct described in the previous section should be used. Because exactly `1000000` thread is created, but there is no guarantee that any of them will finish their execution.

Well, we will wait for the threads to finish executing with `WaitGroup` structure. So is there another problem? Of course we do, we need atomic access because we have a race condition for `n` variable.

The above code creates threads that increment the global `n` variable by 1. As a result, when all threads are completed, the value of the `n` variable should have the value `1000000`. However, contrary to expectations, even if all threads are expected to be executed, the result may not be `1000000` in a healthy way. The reason for this is the race condition. Race condition occurs when more than one thread tries to access a data field at the same time. In other words, according to the scenario above, two or more threads can read data of variable `n` at the same time. This means that because a thread reads the same data, it will increase the old data by one, that is, it does not take any action that will affect the result.

Atomic accesses can be used to synchronize memory accesses. An atomic process locks the corresponding memory space so that it can only be accessed by one thread at a time. This causes the increment and read operations to be performed safely. Because threads wait for the relevant memory area to be unlocked, and only one of them can take over this lock and perform operations at a time.

Jule provides the `std::sync::atomic` package for atomicity as standard. Now let's take a look at the above code secured with `WaitGroup` and atomic operations:

```jule
use sync for std::sync
use atomic for std::sync::atomic

static mut n = atomic::AtomicInt.New(0)

fn addToN(mut wg: &sync::WaitGroup) {
    defer { wg.Done() }
    n.Add(1, atomic::MemoryOrder.Relaxed)
}

fn main() {
    let mut wg = sync::WaitGroup.New()

    let mut j = 0
    for j < 1000000; j++ {
        wg.Add(1)
        co addToN(wg)
    }

    wg.Wait()

    outln(n.Load(atomic::MemoryOrder.Relaxed))
}
```

The above code is waiting for all threads to terminate with `WaitGroup`. That's nice, but is the variable `n` safely incremented? The answer is yes, it is now an atomic operation.
