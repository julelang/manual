# Disable Reference Counting

Jule provides an option that theoretically allows you to turn off the entire reference counting mechanism. When you give the `--disable-rc` option to your compiler, it takes over this disabling task for you.

When this is activated, the `__JULE_DISABLE__REFERENCE_COUNTING` configuration of the API is enabled. There should be no differences in any part of the code produced by the compiler. This is theoretically a disable because reference counting may continue to work for code that is not sufficiently integrated or contains additional behavior that would enable reference counting. Turning off reference counting is achieved by not making the necessary counting allocation for reference counting. If any developer provides this as a 3rd party act, they can still get the reference count for that allocation.

## Memory Leaks

This may lead to memory leaks for you, because it disables automatic release. Since Jule can no longer track the references, it doesn't know which one should be released where. The program does not intervene so as not to affect your behavior. Therefore, your allocations will leak.

::: warning
Disabling RC is not accepted as standard behavior. The standard library uses RC and is designed accordingly. Therefore, standard library algorithms will trust RC instead of releasing internal allocations. So you have a memory leak risk anyhow when you are using the standard library.
:::