# Disable Reference Counting

Jule provides an option that theoretically allows you to turn off the entire reference counting mechanism. When you give the `--disable-rc` option to your compiler, it takes over this disabling task for you.

When this is activated, the `__JULE_DISABLE__REFERENCE_COUNTING` configuration of the API is enabled. There should be no differences in any part of the code produced by the compiler. This is theoretically a disable because reference counting may continue to work for code that is not sufficiently integrated or contains additional behavior that would enable reference counting. Turning off reference counting is achieved by not making the necessary counting allocation for reference counting. If any developer provides this as a 3rd party act, they can still get the reference count for that allocation.

## Memory Leaks

This may lead to memory leaks for you. Because this disables automatic release. Since Jule can no longer track the references, it doesn't know which one should be released where. The program does not intervene so as not to affect your behavior. Therefore your allocations will leak.

To avoid this, you must undertake the release yourself. Jule doesn't provide a standard way for you to do this. `std/mem` provides you with some functionality for manual memory management and reference counting is a default feature and is assumed to be on. Therefore, you must provide the necessary offloading algorithms for reference counting and call them where necessary.

::: warning
Disabling RC is not accepted as standard behavior. The standard library uses RC and designed accordingly. Therefore, standard library algorithms will trust to RC instead of releasing internal allocations. So you have anyhow memory leak risk when you are using standard library.
:::

Please read [relevant section of manual memory management](/memory/management/manual#disable-reference-counting) topic for more information.
