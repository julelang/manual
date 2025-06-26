# Low-Level Helpers

Low-Level Helpers are supplementary functionalities for low-level programming provided by the Jule and the standard library. They are under the terms of the Unsafe Jule. Be careful when using them.

There is no need to use unsafe scope as you will know that what you are doing is unsafe when using the low-level helpers. But when calling functions from the any [unsafe package](/unsafe-jule/#unsafe-packages) you don't have Unsafe Jule for arguments. This means that for argument expressions that require the use of Unsafe Jule, you must use Unsafe Jule with explicit unsafe scope.