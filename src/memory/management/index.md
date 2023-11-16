# Memory Management
Jule does the memory management itself. But it's not fully automatic. You decide where and when to allocate, and it's self-evident which variables are heap-allocated. It guarantees memory safety.

Jule uses reference counting for heap allocations. It is automatically released when the reference count of the pointer reaches zero, that is, when it is certain that the heap allocation is no longer used. It is guaranteed that no allocation goes unnoticed and is also not released while the allocation is still in use. It can use reference counting for many different types. The most common of these are slice and smart pointer.

By default there is no memory space within Jule that needs to be managed manually. However, approaches such as manual memory management can also be adopted and are allowed.
