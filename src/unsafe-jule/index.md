# Unsafe Jule
We know, Jule is safe. But you are a developer who knows what you are doing, you are confident. There is the `unsafe` keyword for you. With this keyword, you can circumvent Jule's safety and engage in unsafe behavior. This is understandably insecure and can compromise your program's safety. All responsibility in this matter belongs to you as the developer.

The reason for the unsafe Jule is that the computer is basically unsafe by nature. Sometimes you need this unsafety. If Jule didn't provide this, it would take more effort to solve some things with Jule. Maybe you could take an approach like using C++ interoperability, but is the effort really necessary? C++ interoperability is a nice feature and in some cases provides significant benefits. But having a C++ dependency of your Jule code exposed isn't always a good thing. It is very important that you can write pure Jule. As a developer, the only time you should feel like you should use C++ interoperability is when you really need to use C++ code.

Unsafe Jule can also allow you to get performance gains and better memory optimization. For example, if you are sure that a pointer never, ever needs to be guaranteed, you can achieve significant gains by obtaining this pointer with Unsafe Jule. Because that means there will be no new memory allocations and reference counting.

## Unsafe Benefits
The mentioned `unsafe` keyword allows us to use these powers. If you don't switch to insecure Jule, secure Jule will not allow you to engage in unsafe behavior.

Benefits of Unsafe Jule:
- Break immutability
- Deference a raw pointer
- Postfixes for raw pointers
- Indexing with raw pointers
- Cast raw pointers
- Get smart pointer from raw pointer
- Call unsafe functions or methods
- Concurrent calls with reference parameters
- Pass pointer to reference
- Access reference from parent scope
- [Emit backend code](/integrated-jule/backend-emits)
- [Use deprecated code](/packages/3rd-party-packages/deprecation)

Note that this does not lead to a completely unsafe use of Jule. Other than the listed unsafe behaviors, Safe Jule will continue to show itself. This means you get a level of safety even with unsafe blocks.
