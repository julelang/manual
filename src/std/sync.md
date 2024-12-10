# std/sync

## Structs
```jule
struct WaitGroup
```
Do not copy an instance of WaitGroup, use a ref or pointer instead.

usage: in main thread: wg: `sync::WaitGroup`\
"wg.Add(delta)" before starting tasks with "co ..."\
"wg.Wait()" to wait for all tasks to have finished

in each parallel job:\
"wg.Done()" when finished

**Methods:**

`static fn New(): &WaitGroup`\
Returns new WaitGroup instance.

`fn Add(mut self, delta: int)` \
Increments (+delta) or decrements (-delta) task count by delta and unblocks any Wait() calls if task count becomes zero. Panics if task count reaches below zero.

`fn Done(mut self)` \
Decrements the WaitGroup counter by one.

`fn Wait(mut self)` \
Blocks until all tasks are done (task count becomes zero) 

---

```jule
struct Mutex
```
Muxtex is a primitive used to protect memory in multi-threading situations such as concurrent access.

Mutextes are uses internal mutability and internal states. Locking, unlocking and etc is not mutable operations. But there is no internal mutable memory, so mutexes are not use shared memory. Therefore, for correct use, a mutex instance should not be copied after first use. Otherwise internal state will be copied and not mutated by other instances.

Mutexes are not implemented using API of operating system. Implemented in pure Jule. This mutex implementation will not check ownership of the mutex. So, a locked Mutex is not associated with a particular thread. It is allowed for one thread to lock a Mutex and then arrange for another thread to unlock it.

::: info
**Implemented Traits**
- `Locker`
:::

**Methods:**

`fn Lock(self)`\
Locks mutex. If the lock is already in use, the calling thread blocks until the mutex is available.

`fn Unlock(self)`\
Unlocks mutex. It is a run-time error if mutex is not locked on entry to Unlock.

`fn TryLock(self): bool`\
Tries to lock mutwx and reports whether it succeeded.

Note that while correct uses of TryLock do exist, they are rare, and use of TryLock is often a sign of a deeper problem in a particular use of mutexes.

---

```jule
struct Once
```
Once is an object that will perform exactly one action.
A Once must not be copied after first use.

**Methods:**

`static fn New(): Once`\
Returns new instance for Once.

`fn Do(self, f: fn())`\
Calls the function f if and only if do is being called for the first time for this instance of Once. In other words, given `let once = Once{}`

if `once.Do(f)` is called multiple times, only the first call will invoke f, even if f has a different value in each invocation. A new instance of Once is required for each function to execute.

do is intended for initialization that must be run exactly once. Since f is niladic, it may be necessary to use a function literal to capture the arguments to a function to be invoked by do:

`config.once.Do(Func() { config.Init(filename) })`

Because no call to do returns until the one call to f returns, if f causes do to be called, it will deadlock.

If f panics, do considers it to have returned; future calls of do return without calling f.

---

```jule
struct Cond
```
Implements a condition variable, a rendezvous point for threads waiting for or announcing the occurrence of an event.

Each Cond has an associated Locker L (often a \[&Mutex\]), which must be held when changing the condition and when calling the \[Cond.Wait\] method.

A Cond must not be copied after first use.

**Methods:**

`static fn New(l: Locker): &Cond`\
Returns a new Cond with locker l.

`fn Lock(self)`\
Locks the locker.

`fn Unlock(self)`\
Unlocks the locker.

`fn Wait(self)`\
Atomically unlocks the locker and suspends execution of the calling thread. After later resuming execution, Wait locks the locker before returning. Unlike in other systems, Wait cannot return unless awoken by \[Cond.Broadcast\] or \[Cond.Signal\].

Because the locker is not locked while Wait is waiting, the caller typically cannot assume that the condition is true when Wait returns. Instead, the caller should Wait in a loop:

	self.Lock()
	for !condition() {
	    self.Wait()
	}
	... make use of condition ...
	self.Unlock()

`fn Signal(self)`\
Wakes one thread waiting on the condition, if there is any.

It is allowed but not required for the caller to hold the locker during the call.

Signal() does not affect thread scheduling priority; if other threads are attempting to lock the locker, they may be awoken before a "waiting" thread.

`fn Broadcast(self)`\
Broadcast wakes all threads waiting on the condition.

It is allowed but not required for the caller to hold the locker during the call.

## Traits

```jule
trait Locker {
	fn Lock(self)
	fn Unlock(self)
}
```
Represents an object that can be locked and unlocked.