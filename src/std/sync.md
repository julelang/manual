# std::sync

## Structs
```jule
struct WaitGroup
```
Do not copy an instance of WaitGroup, use a ref or pointer instead.

usage: in main thread: wg: std::sync::WaitGroup\
"wg.add(delta)" before starting tasks with "co ..."\
"wg.wait()" to wait for all tasks to have finished

in each parallel job:\
"wg.done()" when finished

**Methods:**

`fn add(mut self, delta: int)` \
Increments (+delta) or decrements (-delta) task count by delta and unblocks any wait() calls if task count becomes zero. Panics if task count reaches below zero.

`fn done(mut self)` \
Decrements the WaitGroup counter by one.

`fn wait(mut self)` \
Blocks until all tasks are done (task count becomes zero) 

---

```jule
struct Mutex
```
Muxtex is a primitive used to protect memory in multi-threading situations such as concurrent access.

If you try to lock an already locked mutex again in the same thread or exhibit similar behavior, a system signal is likely to occur.

::: info
**Implemented Patterns**
- **Destructor method pattern**: Dispose all resources. After this function called, mutex will be uninitialized.
:::

**Methods:**

`static fn new(): &Mutex`\
Returns new initialized ready-for-use Mutex.

`fn lock(self)`\
Locks the mutex. If the mutex is locked by another thread, it stops the execution of the algorithm to seize it and waits to lock the mutex.

`fn unlock(self)`\
Unlock the mutex you locked and make it open to locking by the thread.

`fn try_lock(self): bool`\
Try locking the mutex. But unlike the lock method, it just tries to lock instead of waiting to lock. Returns true if the locking was successful, false otherwise.

---

```jule
struct once
```
Once is an object that will perform exactly one action.
A Once must not be copied after first use.

**Methods:**

`fn do(self, f: fn())`\
Calls the function f if and only if do is being called for the first time for this instance of Once. In other words, given `let once = Once{}`

if `once.do(f)` is called multiple times, only the first call will invoke f, even if f has a different value in each invocation. A new instance of Once is required for each function to execute.

do is intended for initialization that must be run exactly once. Since f is niladic, it may be necessary to use a function literal to capture the arguments to a function to be invoked by do:

`config.once.do(func() { config.init(filename) })`

Because no call to do returns until the one call to f returns, if f causes do to be called, it will deadlock.

If f panics, do considers it to have returned; future calls of do return without calling f.
