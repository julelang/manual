# Coroutines
<div class="warning-badge">experimental</div>

Jule coroutines are async functions managed by the scheduler. Since async functions are fundamentally state machines, they support suspend and resume semantics. However, they are all connected through an `await` chain and execute synchronously. Multiple async function calls cannot execute simultaneously. Coroutines are designed to implement this behavior.

Jule coroutines are stackless and return control to the scheduler at each suspension point, allowing the scheduler to run another coroutine. Because they are very lightweight, it is theoretically possible to create millions of coroutines.

Coroutines can be created by making coroutine calls to async functions.\
For example:
```jule
co myfunc()
```
In the call above, `myfunc` is an async function. The `co` keyword (short for `coroutine`) creates a coroutine from the corresponding call to `myfunc`. Async function calls used to create coroutines cannot be `await`ed. The arguments passed to the function are evaluated immediately, if any. The created coroutine may be executed by the scheduler at any time.

The following fundamental rules apply when working with coroutines:
- Coroutines can only be created from calls to `async` functions.
- Calls used to create coroutines cannot be awaited.
- Coroutines can only be created within async functions.
- A coroutine is managed by the scheduler and may be executed at any time.

## Coroutine Resource Management

When a coroutine call is made, the arguments are stored in a heap-allocated area in the background. When the coroutine starts running, it invokes the corresponding function using the arguments stored in the heap. Once the coroutine completes, the associated heap allocations are automatically freed. An async function can be invoked both normally and via a coroutine call. In such cases, normal calls to the function do not incur any additional runtime cost. Only coroutine calls will have an extra cost.

## Suspension of Coroutines

According to the principles of Jule’s async runtime, the root async function is always a coroutine. This means that an `async main` function is effectively equivalent to a coroutine created with `co`. At the lowest level of the program, the runtime scheduler is always present. When a coroutine is suspended, control returns to the scheduler that is executing it; in other words, the scheduler is the final return point of every `await` chain.

However, in the Jule async runtime, each `await` only represents a *potential* suspension point. When an async function is called, its execution begins immediately. If no suspension occurs, the function continues executing in a synchronous manner.

A suspension can occur only in the following cases:
- The coroutine is parked by the runtime (for example, when acquiring a mutex, waiting for a message from a channel, or performing I/O).
- The coroutine is explicitly yielded by the developer.
