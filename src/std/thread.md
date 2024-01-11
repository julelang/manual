# std::thread

## Structures

```jule
struct Thread
```
Thread is a wrapper structure for native threads. It uses C++ threads in itself. It automatically detaches when destroyed. It supports the use of common interface. For this, it allocates the related thread object on the heap and provides memory safety with reference counting. It is destroyed when the internal thread reference count reaches to zero. In assignment operations, all thread instances point to the same allocation.

::: warning
It is experimental.
:::

::: info
**Implemented Patterns**
- **Destructor method pattern**: Detaches thread if thread is still executing.
:::

**Methods:**

`static fn spawn(routine: fn()): &Thread`\
Spawns new thread by routine. Panics if routine is nil. Thread starts execution of routine when spawned.

`static fn sleep(ns: u64)`\
Stop execution of caller thread by nanoseconds. This functions only affects execution of caller thread, not process.

`fn wait(self)`\
Wait for complete execution of thread if active. Returns when the thread execution has completed. So program stops execution until thread's execution has completed. Panics if thread is not active.

`fn detach(self)`\
Detach thread and make it independent. After this, this thread object can no longer identify thread.

`fn active(self): bool`\
Reports whether thread object identifies an active thread of execution.
