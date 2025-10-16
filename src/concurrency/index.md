# Concurrency

Concurrency is something that is built into Jule. Threads are OS threads and are empowered by Jule Runtime. See the [Threads](/concurrency/threads) section for more information.

In Jule, concurrent calls spawn a new thread.\
Concurrent calls are made with the `co` keyword.

For example:
```jule
co myFunction()
```

Now your call to `myFunction` is running concurrently.
You can call any function for concurrency with some safety constraints.