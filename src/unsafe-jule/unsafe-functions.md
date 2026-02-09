# Unsafe Functions

Unsafe functions are defined with the `unsafe` keyword and are considered within the scope of Unsafe Jule. An unsafe function can access Unsafe Jule properties without defining any `unsafe` scope in the body.

Additionally, an unsafe function can only be called with Unsafe Jule.

For example:
```jule
unsafe fn myUnsafeFunc() { /* ... */ }
```

## When a Function is Unsafe?

You can declare a function unsafe under any conditions. Jule doesn't define any "requirements that must be met" for this. Whether a function is considered unsafe is entirely the developer's choice.

However, defining functions as unsafe will reduce the use of Safe Jule, so this should be done consciously. If you're unsure whether to declare a function unsafe, here are some suggestions for when you can declare a function as unsafe:
- The algorithm of the function depends on some important external data, such as parameters. For example, a function takes a raw pointer as a parameter; safety depends on this parameter since there is no guarantee that the raw pointer points to a valid address.
- The function defines a safe algorithm, but it has a behavior that may cause unsafety: For example, a mutable private buffer is provided with [mutability encapsulation](/memory/mutability#mutability-encapsulation). This function may return data safely, but mutating the received data unexpectedly poses the risk of causing significant safety problems.

In some cases, you can leave even functions that are clearly unsafe available with Safe Jule. For example, you made a package that gathers unsafe functions into a single point and named it `nosafe`. Based on the fact that every function you call from the `nosafe` package is unsafe, you may choose to simplify the code by eliminating the need for `unsafe` scopes for Unsafe Jule.