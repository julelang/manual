# Threads

In Jule, threads are OS threads. They are scheduled and managed by the operating system. Threads are powerful and fast but consume system resources and must be used in a controlled manner. Overusing threads can result in excessive resource consumption and may lead to more performance loss than gains. Therefore, it is recommended to work with an optimal number of threads based on the program's needs and the hardware.

For effective use of threads, it is recommended to divide tasks appropriately among threads. While languages like Go allow the creation of thousands of lightweight threads (goroutines), in languages like Jule that use OS threads, creating thousands of threads is not beneficial. Therefore, it is advisable to distribute workloads among threads as efficiently as possible.

For example:
```jule
use "std/runtime"

fn task() {
	// ...
}

fn main() {
	mut k := 0
	for k := 0; k < runtime::NumCPU(); k++ {
		co task()
	}
}
```
The simple example code above uses the keyword `co` (which stands for `concurrent`) to make concurrent calls to the `task` function equal to the number of CPUs. Dividing such tasks by the number of CPUs or some other optimal number can be useful for maximizing resource utilization and improving performance.

### Stack Size of Threads

Jule does not interfere with the stack size of threads, including the main thread of the program. Therefore, the stack size of threads can vary depending on the operating system. If this stack size is exceeded, it usually results in a segmentation fault (segfault).

## Thread Management
<div class="warning-badge">experimental</div>

Although Jule uses OS threads and leaves their management to the operating system, the Jule Runtime includes an additional control mechanism over these threads. This mechanism does not interfere with the scheduling and management of threads but tries to optimize the process by partially directing it through the operating system's provided APIs. With the compiler's assistance, it simplifies resource management as much as possible.

When a concurrent call is made, the arguments are stored in a heap-allocated area in the background. When the thread starts running, it invokes the corresponding function using the arguments stored in the heap. Once the thread completes, the associated heap allocations are automatically freed. A function can be invoked both normally and via a concurrent call. In such cases, normal calls to the function do not incur any additional runtime cost. Only concurrent calls will have an extra cost.

The Jule Runtime detaches every spawned thread but continues to monitor them. It is aware of all threads as long as they are running and recognizes when they terminate. Additionally, due to its built-in concurrency model, the Jule Runtime performs certain extra management. As a result, besides the thread cost imposed by the operating system, the runtime mechanism employed by Jule incurs an additional cost. However, in most cases, this overhead is negligible.

Jule does not use synchronization tools provided by the operating system (such as mutexes and condition variables); instead, these are implemented at the user level. These implementations attempt to use threads in an optimized manner, allowing the suspension and awakening of threads, and may request the operating system to yield CPU to other thread.

The synchronization mechanisms provided built-in by Jule are also uses low-level API provided by the Jule Runtime. So, when a condition variable puts a thread into a waiting state, Jule Runtime records this for the corresponding thread, allowing it to track which threads are suspended in such situations. As a result of these checks, Jule Runtime gives you the opportunity to catch scenarios like deadlocks.

For example:
```jule
fn main() {
	c := make(chan int)
	<-c
}
```
In the example code above, there are no threads, and the channel attempts to read data. According to the channel's behavior, this program will lock indefinitely, and there will be no chance to receive data. As a result, the runtime will panic with a deadlock error.

### Deadlock Analysis

Jule runtime performs deadlock analysis and results in a panic when a deadlock occurs. This analysis attempts to detect locked states as thoroughly as possible, but it is not an exhaustive or in-depth analysis. 

For example, a thread might be trying to receive data from an unbuffered channel, but no other thread will ever send data to that channel. In this case, the thread will remain in an infinite wait state. However, the Jule runtime will not consider this a deadlock because it assumes that another running thread(s) may eventually send data to the channel. However, if all threads become suspended in a way that they cannot wake each other, it results in a deadlock.

In other words, deadlock analysis only considers it a deadlock when all threads are inevitably locked. Otherwise, it is possible to have threads waiting indefinitely. For this reason, concurrency requires careful management as always.

The runtime does not always result in a panic due to a deadlock when there is a potential risk of one occurring. During execution, threads might not be executed in an order that leads to a deadlock, but this does not mean a deadlock cannot happen. The same program might encounter a deadlock and trigger a panic during a different runtime execution.

This means it is not a debugging mechanism but rather an auxiliary hint. If a program encounters a definitive deadlock, instead of waiting indefinitely, you get a deadlock panic. This indicates that something is fundamentally wrong with the concurrency in your program.