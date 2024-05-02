# Mutexes

In the previous section, atomics were explained and when atomicity was required was mentioned. When it comes to shared data, atomicity may not always be a solution or may be insufficient. For example, if you are working with a data type that is not atomically supported, or if your algorithm needs safe execution, atomic types will not be enough to solve your problem.

For example:
```jule
use std::sync::{WaitGroup}

static mut n = 0

fn addToN(mut wg: &WaitGroup) {
    defer { wg.Done() }
    outln("incrementing")
    n++
    outln("incremented")
}

fn main() {
    let mut wg = WaitGroup.New()

    let mut j = 0
    for j < 1000000; j++ {
        wg.Add(1)
        co addToN(wg)
    }

    wg.Wait()
    outln(n)
}
```

In the above code, not only the value of `n` variables is manipulated, but some functions are also called. Atomic types are not a good approach in such cases.

To solve this problem we can use a mutex. Mutexes are locking mechanisms that allow you to do this. They can only be locked by a single thread at a time. If a locking attempt is made by a different thread when they are locked, the execution of the thread will be stopped until the locking thread releases the lock.

For example:

```jule
use std::sync::{WaitGroup, Mutex} // [!code ++]

static mut n = 0
static mtx = Mutex.New() // [!code ++]

fn addToN(mut wg: &WaitGroup) {
    defer { wg.Done() }
    mtx.Lock() // [!code ++]
    outln("incrementing")
    n++
    outln("incremented")
    mtx.Unlock() // [!code ++]
}

fn main() {
    let mut wg = WaitGroup.New()

    let mut j = 0
    for j < 1000000; j++ {
        wg.Add(1)
        co addToN(wg)
    }

    wg.Wait()
    outln(n)
}
```

In the code above, synchronization between threads is achieved by using mutex. Thanks to Mutex, only one thread can continue executing the relevant function at a time, and the others are waiting to take over the lock. This means that another thread cannot continue execution until one thread has completely completed its execution. In this way, race condition is prevented.
