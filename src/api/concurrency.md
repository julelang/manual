# Concurrency

The Jule API provides functionalities for concurrency. For example, it provides a macro function to make a concurrent function call.

Relevant macro define (in `fn.hpp`):
```cpp
#define __JULE_CO(EXPR)
```

This macro creates a native thread and calls `detach`.
