# Manual Compilation
JuleC is written in Jule!

::: warning
These example assume you are in the root directory of the JuleC.
This example also accepts you already have JuleC in global path.
:::

```
julec build -o ./bin/julec ./src/julec
```

## Compile Tips

There are a few recommendations for getting the best JuleC build for manual compilation and Jule developers.
Considering these recommendations can help the JuleC build you use during development to offer the best performance.

### C++ Standard

Compile with `c++20`.\
This is the the minimum required C++ version.

### Optimization Level

Jule compiles at zero optimization (``O0``) level by default.
But this is not recommended if you are compiling for use.
Zero optimization level will produce the dumbest code possible and you can suffer serious performance losses.
It is recommended to compile JuleC's C++ IR with ``O3`` to get the fastest and most performing JuleC compilation.

#### Notice about `Ofast` Optimization Level

The `Ofast` optimization is quite an aggressive level and can break language standards. For example, it has been observed that a JuleC build with `Ofast` produces different numbers than expected due to probably math optimizations.

Therefore, we recommend using `O3` as the highest optimization level to get a more reliable build.
