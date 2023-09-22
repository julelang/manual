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
