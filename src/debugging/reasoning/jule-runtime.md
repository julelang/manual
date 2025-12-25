# Jule Runtime

The errors you will get in Jule runtime are mostly panics. When your schedule gets panicky, Jule tries to be as descriptive and helpful as possible.

## Program Panics

Your compiler adds helpful information for panics when compiling Jule source code. For example, when a panic occurs, it allows you to know in which file, row and column this panic occurred.

When you encounter such a panic, it is likely that you will receive an informational message about why it is happening, as it is mostly due to a manual panic call.

Another common possibility is that an exception that you did not handle ends with an exception rather than completing its execution smoothly. In this context, since you are sure that there will be no problem, it may be useful for you to check the exceptions that you use without handling them. If it uses error coding as an exceptional exception, you will get its code and you can understand what the problem might be thanks to these codes. Even otherwise, since you will have location information, you can make a good start by identifying the relevant place.

### Production Compilation

Production compilations tell you the error due to optimizations, but they do not contain important information that will help debug file information and line information. This is one of the reasons why it is recommended to use the debug compilation for debugging.

## Common Runtime Panics

`invalid memory address or nil pointer deference`\
Tried to access invalid memory. Mostly occurs with nil memory usage. You may need to review how you handle data that may be nil in your program.

---

`incompatible type`\
Occurs when an incompatible type is used when working with a type that can hold many potential types, such as any or trait. Casting to a wrong type often causes this panic.

---

`memory allocation failed`\
An attempt was made to allocate memory via the heap at runtime but failed. This is mostly an operating system related issue and appears to be quite rare.

---

`index out of range`\
One or more of the indexes you used in an indexing or slicing operation were outside memory limits. Possibly the length of the memory chunk was exceeded or a negative value was used.

---

`divide by zero`\
In a division or modulo operation, the denominator was zero.

---

`runtime: all coroutines are asleep - deadlock!`\
Your program is concurrent (or not?) and your concurrency management has issues.
All coroutines are asleep, so waiting to be triggered by another coroutines, which causes deadlock.