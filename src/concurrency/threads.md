# Threads

There is a standard library `std::thread` to create and manage threads. This library allows you to create native OS threads. In some cases, it may be more useful than the concurrency provided by the `co` keyword.

Below you can see the example shown in the [Atomicity](/concurrency/atomicity) section using Thread:

```jule
use std::thread::{Thread}
use std::sync::{WaitGroup}
use std::sync::atomic::{AtomicInt, MemoryOrder}

static mut n: AtomicInt = AtomicInt.new(0)

fn add_to_n(mut &wg: &WaitGroup) {
    defer { wg.done() }
    n.add(1, MemoryOrder.Relaxed)
}

fn main() {
    let mut wg = &WaitGroup{}

    let mut j = 0
    for j < 1000000; j++ {
        wg.add(1)
        Thread.spawn(fn() {
            add_to_n(wg)
        }).detach()
    }

    wg.wait()
    outln(n.load(MemoryOrder.Relaxed))
}
```

In the example above, the function is called for each Thread detach created. This is important to ensure that it matches the concurrency of the `co` keyword as much as possible. Because the threads created by the `co` keyword are like this.
