# Compiler Hints

In certain cases, the compiler may need to receive hints. These situations are mostly necessary for advanced usage or interoperability scenarios involving external code that the compiler cannot inspect or analyze on its own.

The [`std/runtime`](/runtime/) package defines the necessary flags to provide these hints to the compiler, along with a function named `Hint`. The arguments accepted by the `Hint` function must be constant, and multiple flags can be combined.

For example:
```jule
runtime::Hint(runtime::H_CONCURRENT)
```

::: warning
The compiler does not care how the flags passed to the Hint function were calculated. That is, you can add, subtract, or apply various arithmetic operations to the flags as you see fit. The compiler simply processes them as bitwise flags and assumes a flag is passed if the corresponding bit matches.

Safe and idiomatic usage is to pass flags individually or to combine them using bitwise OR.
:::

## Hint Flags

### `H_CONCURRENT`
Indicates that the function performs or may perform concurrent/parallel operations.

If the compiler detects no concurrency/parallelism within your normal Jule program, it may drop atomic overhead to speed up mechanisms such as reference counting. In this case, various memory management errors may occur.

To prevent this, you must provide the compiler with the `H_CONCURRENT` hint. This allows the compiler to recognize that unknown concurrency exists here and adjust its optimizations accordingly.