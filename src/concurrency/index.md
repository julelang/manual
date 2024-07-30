# Concurrency

Concurrency is something that is built into Jule. There is nothing to be afraid of, Jule safety tries to keep your safety quite high in terms of concurrency due to its compiler, which is obsessed with it.

Jule uses real threads. That is, threads scheduled by the kernel. Jule does not use any coroutine/green threads. And also concurrent calls are not traced or synchronized. Therefore, your program may terminate before all your concurrent calls have finished executing.

In Jule, concurrent calls spawn a new thread.
Concurrent calls are made with the `co` keyword.

For example:
```jule
co myFunction()
```

Now your call to `myFunction` is running concurrently.
You can call any function for concurrency with some safety constraints.

## References

You cannot use any function that has reference parameters for concurrency. At least with Safe Jule. Because the scopes of the references must be traceable by compiler, a kind of safety obsession of compiler. Concurrent calls break this. During concurrency, your reference may fall into a dangling position, which can be a serious problem. To avoid this, Safe Jule does not allow this, but if you are aware of what you are doing, Unsafe Jule will allow you to use a function with reference parameters for concurrency.

For example:
```jule
unsafe { co myFunction(my_var) }
```

## Raw Pointers

Although raw pointers run the risk of pointing to dangling values, Safe Jule allows concurrent calls using pointers. This is mainly because raw pointers are part of Unsafe Jule. A problematic use of the pointer can be made with Unsafe Jule only, so the compiler won't complain.

## Self Receivers

Methods can be used to make concurrent calls. But your compiler can only use smart pointer (`&self`) receiver or static methods. Otherwise, it is necessary to use Unsafe Jule to make a call.
