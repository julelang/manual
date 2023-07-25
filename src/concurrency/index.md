# Concurrency

Concurrency is something that is built into Jule. There is nothing to be afraid of, Jule safety tries to keep your security quite high in terms of concurrency due to its compiler, which is obsessed with it.

Jule uses real threads. That is, threads scheduled by the kernel. Jule does not use any coroutine/green threads. And also concurrent calls are not traced or synchronized. Therefore, your program may terminate before all your concurrent calls have finished executing.

## Concurrent Calls

In Jule, concurrent calls spawn a new thread.
Concurrent calls are made with the `co` keyword.

For example:
```
co my_function()
```

Now your call to "my_function" is running concurrently.
You can call any function for concurrency with some safety constraints.

## References

You cannot use any function that has reference parameters for concurrency. At least with Safe Jule. Because the scopes of the references must be traceable by compiler, a kind of safety obsession of compiler. Concurrent calls break this. During concurrency, your reference may fall into a dangling position, which can be a serious problem. To avoid this, Safe Jule does not allow this, but if you are aware of what you are doing, Unsafe Jule will allow you to use a function with reference parameters for concurrency.

For example:
```
unsafe { co my_function(my_var) }
```
