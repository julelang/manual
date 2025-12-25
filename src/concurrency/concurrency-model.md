# Concurrency Model

The concurrency model defines how Jule handles memory and coroutine management in concurrency. Any behavior contrary to the model is `undefined` and may cause the program not to work as expected.

## References

You cannot use any function that has reference parameters for concurrency. At least with Safe Jule. Because the scopes of the references must be traceable by compiler, a kind of safety obsession of compiler. Coroutine calls break this. During concurrency, your reference may fall into a dangling position, which can be a serious problem. To avoid this, Safe Jule does not allow this, but if you are aware of what you are doing, Unsafe Jule will allow you to use a function with reference parameters for concurrency.

For example:
```jule
unsafe { co myFunction(myVar) }
```

## Raw Pointers

Although raw pointers run the risk of pointing to dangling values, Safe Jule allows coroutine calls using pointers. This is mainly because raw pointers are part of Unsafe Jule. A problematic use of the pointer can be made with Unsafe Jule only, so the compiler won't complain.

## Self Receivers

Methods can be used to make coroutine calls. But your compiler can only use smart pointer (`&self`) receiver or static methods. Otherwise, it is necessary to use Unsafe Jule to make a call.

## Data Races

Data races are undefined and must be prevented by the developer. Any data race present in the program can be handled by the compiler in any way. In some cases, this can lead the compiler to apply optimizations by relying on the data with the data race. Some optimizations can also make debugging difficult. Therefore, data race situations in concurrent programming must be carefully considered and synchronized.

## Channels

Channels are designed with the assumption that they will be closed once data transmission is complete. For this reason, when all sender coroutines finish their work, the channel must be closed. Otherwise, receiver coroutines may remain asleep indefinitely. Closing the channel wakes any waiting receiver coroutines. Failing to close the channel can cause the program to behave unexpectedly.

If you are certain that the usage is strictly synchronous, you may choose not to close the channel, for example, when using an unbuffered channel solely to signal that a coroutine has finished. However, even in such cases, closing the channel is still recommended. Otherwise, undefined program behavior may occur.