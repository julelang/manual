# std/sync

## Index

[trait Locker](#locker)\
[struct Once](#once)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(\): Once](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Do\(\*self, f: fn\(\)\)](#do)\
[struct WaitGroup](#waitgroup)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(\): &amp;WaitGroup](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, delta: int\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Done\(mut \*self\)](#done)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait\(mut \*self\)](#wait)\
[struct RWMutex](#rwmutex)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RLock\(\*self\)](#rlock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn TryRLock\(\*self\): bool](#tryrlock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RUnlock\(\*self\)](#runlock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lock\(\*self\)](#lock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn TryLock\(\*self\): bool](#trylock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unlock\(\*self\)](#unlock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RLocker\(mut &amp;self\): Locker](#rlocker)\
[struct Cond](#cond)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(l: Locker\): &amp;Cond](#new-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lock\(\*self\)](#lock-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unlock\(\*self\)](#unlock-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait\(\*self\)](#wait-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Signal\(\*self\)](#signal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Broadcast\(\*self\)](#broadcast)\
[struct Mutex](#mutex)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lock\(\*self\)](#lock-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn TryLock\(\*self\): bool](#trylock-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unlock\(\*self\)](#unlock-2)



## Locker
```jule
trait Locker {
	fn Lock(*self)
	fn Unlock(*self)
}
```
Represents an object that can be locked and unlocked\.

## Once
```jule
struct Once {
	// NOTE: contains filtered hidden or unexported fields
}
```
Once is an object that will perform exactly one action\. A Once must not be copied after first use\.

### New
```jule
fn New(): Once
```
Returns new instance for Once\.

### Do
```jule
fn Do(*self, f: fn())
```
Calls the function f if and only if Do is being called for the first time for this instance of Once\. In other words, given

```
once := Once{}
```
if once\.Do\(f\) is called multiple times, only the first call will invoke f, even if f has a different value in each invocation\. A new instance of Once is required for each function to execute\.

Do is intended for initialization that must be run exactly once\. Since f is niladic, it may be necessary to use a function literal to capture the arguments to a function to be invoked by Do:

```
config.once.Do(func() { config.init(filename) })
```
Because no call to Do returns until the one call to f returns, if f causes Do to be called, it will deadlock\.

If f panics, Do considers it to have returned; future calls of Do return without calling f\.

## WaitGroup
```jule
struct WaitGroup {
	// NOTE: contains filtered hidden or unexported fields
}
```
A WaitGroup waits for a collection of threads to finish\. The main thread calls \[WaitGroup\.Add\] to set the number of threads to wait for\. Then each of the threads runs and calls \[WaitGroup\.Done\] when finished\. At the same time, \[WaitGroup\.Wait\] can be used to block until all goroutines have finished\.

A WaitGroup must not be copied after first use\.

### New
```jule
fn New(): &WaitGroup
```
Returns new \[WaitGroup\] instance\.

### Add
```jule
fn Add(mut *self, delta: int)
```
Adds delta, which may be negative, to the \[WaitGroup\] counter\. If the counter becomes zero, all threads blocked on \[WaitGroup\.Wait\] are released\. If the counter goes negative, Add panics\.

Note that calls with a positive delta that occur when the counter is zero must happen before a Wait\. Calls with a negative delta, or calls with a positive delta that start when the counter is greater than zero, may happen at any time\. Typically this means the calls to Add should execute before the statement creating the thread or other event to be waited for\. If a \[WaitGroup\] is reused to wait for several independent sets of events, new Add calls must happen after all previous Wait calls have returned\.

### Done
```jule
fn Done(mut *self)
```
Decrements the \[WaitGroup\] counter by one\.

### Wait
```jule
fn Wait(mut *self)
```
Blocks until the \[WaitGroup\] counter is zero\.

## RWMutex
```jule
struct RWMutex {
	// NOTE: contains filtered hidden or unexported fields
}
```
A RWMutex is a reader/writer mutual exclusion lock\. The lock can be held by an arbitrary number of readers or a single writer\. The zero value for a RWMutex is an unlocked mutex\.

A RWMutex must not be copied after first use\.

If any thread calls \[RWMutex\.Lock\] while the lock is already held by one or more readers, concurrent calls to \[RWMutex\.RLock\] will block until the writer has acquired \(and released\) the lock, to ensure that the lock eventually becomes available to the writer\. Note that this prohibits recursive read\-locking\. A \[RWMutex\.RLock\] cannot be upgraded into a \[RWMutex\.Lock\], nor can a \[RWMutex\.Lock\] be downgraded into a \[RWMutex\.RLock\]\.

The n&#39;th call to \[RWMutex\.Unlock\] “synchronizes before” the m&#39;th call to Lock for any n &lt; m, just as for \[Mutex\]\. For any call to RLock, there exists an n such that the n&#39;th call to Unlock “synchronizes before” that call to RLock, and the corresponding call to \[RWMutex\.RUnlock\] “synchronizes before” the n\+1&#39;th call to Lock\.

### Implemented Traits

- `Locker`

### RLock
```jule
fn RLock(*self)
```
Locks for reading\.

It should not be used for recursive read locking; a blocked Lock call excludes new readers from acquiring the lock\. See the documentation on the \[RWMutex\] type\.

### TryRLock
```jule
fn TryRLock(*self): bool
```
Tries to lock for reading and reports whether it succeeded\.

Note that while correct uses of TryRLock do exist, they are rare, and use of TryRLock is often a sign of a deeper problem in a particular use of mutexes\.

### RUnlock
```jule
fn RUnlock(*self)
```
RUnlock undoes a single \[RWMutex\.RLock\] call; it does not affect other simultaneous readers\. It is a run\-time error if it is not locked for reading on entry to RUnlock\.

### Lock
```jule
fn Lock(*self)
```
Locks for writing\. If the lock is already locked for reading or writing, Lock blocks until the lock is available\.

### TryLock
```jule
fn TryLock(*self): bool
```
Tries to lock for writing and reports whether it succeeded\.

Note that while correct uses of TryLock do exist, they are rare, and use of TryLock is often a sign of a deeper problem in a particular use of mutexes\.

### Unlock
```jule
fn Unlock(*self)
```
Unlocks for writing\. It is a run\-time error if it is not locked for writing on entry to Unlock\.

As with Mutexes, a locked \[RWMutex\] is not associated with a particular thread\. One thread may \[RWMutex\.RLock\] \(\[RWMutex\.Lock\]\) a RWMutex and then arrange for another thread to \[RWMutex\.RUnlock\] \(\[RWMutex\.Unlock\]\) it\.

### RLocker
```jule
fn RLocker(mut &self): Locker
```
Returns a \[Locker\] interface that implements the \[Locker\.Lock\] and \[Locker\.Unlock\] methods by calling RLock and RUnlock\.

## Cond
```jule
struct Cond {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements a condition variable, a rendezvous point for threads waiting for or announcing the occurrence of an event\.

Each Cond has an associated Locker L \(often a \[&amp;Mutex\]\), which must be held when changing the condition and when calling the \[Cond\.Wait\] method\.

A Cond must not be copied after first use\.

### New
```jule
fn New(l: Locker): &Cond
```
Returns a new Cond with locker l\.

### Lock
```jule
fn Lock(*self)
```
Locks the locker\.

### Unlock
```jule
fn Unlock(*self)
```
Unlocks the locker\.

### Wait
```jule
fn Wait(*self)
```
Atomically unlocks the locker and suspends execution of the calling thread\. After later resuming execution, Wait locks the locker before returning\. Unlike in other systems, Wait cannot return unless awoken by \[Cond\.Broadcast\] or \[Cond\.Signal\]\.

Because the locker is not locked while Wait is waiting, the caller typically cannot assume that the condition is true when Wait returns\. Instead, the caller should Wait in a loop:

```
self.Lock()
for !condition() {
	self.Wait()
}
... make use of condition ...
self.Unlock()
```


### Signal
```jule
fn Signal(*self)
```
Wakes one thread waiting on the condition, if there is any\.

It is allowed but not required for the caller to hold the locker during the call\.

Signal\(\) does not affect thread scheduling priority; if other threads are attempting to lock the locker, they may be awoken before a &#34;waiting&#34; thread\.

### Broadcast
```jule
fn Broadcast(*self)
```
Broadcast wakes all threads waiting on the condition\.

It is allowed but not required for the caller to hold the locker during the call\.

## Mutex
```jule
struct Mutex {
	// NOTE: contains filtered hidden or unexported fields
}
```
Muxtex is a primitive used to protect memory in multi\-threading situations such as concurrent access\.

Mutextes are uses internal mutability and internal states\. Locking, unlocking and etc is not mutable operations\. But there is no internal mutable memory, so mutexes are not use shared memory\. Therefore, for correct use, a mutex instance should not be copied after first use\. Otherwise internal state will be copied and not mutated by other instances\.

Mutexes are not implemented using API of operating system\. Implemented in pure Jule\. This mutex implementation will not check ownership of the mutex\. So, a locked Mutex is not associated with a particular thread\. It is allowed for one thread to lock a Mutex and then arrange for another thread to unlock it\.

### Implemented Traits

- `Locker`

### Lock
```jule
fn Lock(*self)
```
Locks mutex\. If the lock is already in use, the calling thread blocks until the mutex is available\.

### TryLock
```jule
fn TryLock(*self): bool
```
Tries to lock mutwx and reports whether it succeeded\.

Note that while correct uses of TryLock do exist, they are rare, and use of TryLock is often a sign of a deeper problem in a particular use of mutexes\.

### Unlock
```jule
fn Unlock(*self)
```
Unlocks mutex\. It is a runtime error if mutex is not locked on entry to Unlock\.