# Wait Groups

Synchronization is something you might want for concurrency. It has been mentioned that your concurrent calls are not traced and your program may terminate without waiting for all of them to execute.

For example:

```jule
fn sayHello() {
    outln("Hello World")
}

fn main() {
    co sayHello()
}
```

In the code above there is a concurrent call to a function that writes `Hello World` on the command line. It is possible that you will not see the result when you execute this code. This is probably because your program terminates before your concurrent call has finished executing, as described above. Your program may terminate before your call can print `Hello World` to command line.

Jule provides the `WaitGroup` struct in the `std::sync` standard library so that you can wait for your threads and trace their execution. The `WaitGroup` structure acts as a kind of counter for threads. It is simple to use. You basically use it for three tasks: increasing the counter for new threads, decreasing the counter for completed threads, and waiting for the counter to go down to zero, that is, for all threads to finish executing.

For example:

```jule
use std::sync::{WaitGroup}

fn sayHello(mut wg: &WaitGroup) {
    outln("Hello World")
    wg.Done()
}

fn main() {
    let mut wg = WaitGroup.new()
    wg.Add(1)
    co sayHello(wg)
    wg.Wait()
}
```

The above example is the first example using `WaitGroup`. Since this code watches threads thanks to `WaitGroup`, it waits for all threads to finish executing, thus guaranteeing that printing `Hello World` will definitely complete.

As can be seen in the example, the `WaitGroup` used with reference type. This is because counting needs to act on the original `WaitGroup`. To achieve this, you can also follow a different method such as using pointers.

Calling `wg.Add(1)` increments the counter of `WaitGroup` by one. In other words, it means we have a new thread. If there is an important point here, it is that the counting must be done correctly. For example, you have 1 thread but you are trying to count 10 threads, so if your counter never reaches 0, you may enter a continuous waiting loop.

Another important point is that the counter is incremented before the concurrent call. If the counter was even the first statement of the thread, problems with counting could occur. This might not be an accurate count. For this reason, counting should always be performed independently of the thread. Counting is also recommended before each thread is created.

`wg.Done` should be called when the thread terminates. If the thread is called before it terminates, you may still face a counting error. A call to `wg.Done()` decrements the counter by one, ie thread's execution has been completed.

The `wg.Wait()` call waits for all threads to terminate, in other words, for the counter to go down to zero, preventing the program from executing until then.
