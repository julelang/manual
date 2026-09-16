# Threads

In Jule, threads are OS threads. They are scheduled and managed by the operating system. Threads are powerful and fast but consume system resources and must be used in a controlled manner. Overusing threads can result in excessive resource consumption and may lead to more performance loss than gains. Therefore, it is recommended to work with an optimal number of threads based on the program's needs and the hardware.

For effective use of threads, it is recommended to divide tasks appropriately among threads. While languages like Go allow the creation of thousands of lightweight threads (goroutines), in languages like Jule that use OS threads, creating thousands of threads is not beneficial. Therefore, it is advisable to distribute workloads among threads as efficiently as possible.

To spawn a thread, use spawn calls.\
For example:
```jule
spawn myTask(arg1, arg2)
```
Now your call to `myTask` is running concurrently.\
You can call any function for concurrency with some safety constraints.

## Stack Size of Threads

Jule does not interfere with the stack size of threads, including the main thread of the program. Therefore, the stack size of threads can vary depending on the operating system. If this stack size is exceeded, it usually results in a segmentation fault (segfault).