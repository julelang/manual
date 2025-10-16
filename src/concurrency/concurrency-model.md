# Concurrency Model

The concurrency model defines how Jule handles memory in concurrency. Any behavior contrary to the model is `undefined` and may cause the program not to work as expected.

## References

You cannot use any function that has reference parameters for concurrency. At least with Safe Jule. Because the scopes of the references must be traceable by compiler, a kind of safety obsession of compiler. Concurrent calls break this. During concurrency, your reference may fall into a dangling position, which can be a serious problem. To avoid this, Safe Jule does not allow this, but if you are aware of what you are doing, Unsafe Jule will allow you to use a function with reference parameters for concurrency.

For example:
```jule
unsafe { co myFunction(myVar) }
```

## Raw Pointers

Although raw pointers run the risk of pointing to dangling values, Safe Jule allows concurrent calls using pointers. This is mainly because raw pointers are part of Unsafe Jule. A problematic use of the pointer can be made with Unsafe Jule only, so the compiler won't complain.

## Self Receivers

Methods can be used to make concurrent calls. But your compiler can only use smart pointer (`&self`) receiver or static methods. Otherwise, it is necessary to use Unsafe Jule to make a call.

## Data Races

Data races are undefined and must be prevented by the developer. Any data race present in the program can be handled by the compiler in any way. In some cases, this can lead the compiler to apply optimizations by relying on the data with the data race. Some optimizations can also make debugging difficult. Therefore, data race situations in concurrent programming must be carefully considered and synchronized.