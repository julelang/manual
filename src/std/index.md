# Standard Library

The standard library is language's own library. Usually each programming language have a standard library. This libraries, provides common functions to developer. Free time!

Developers can write functions of standard library if they want. But they usually prefer to use the standard library. Because usually every developer learns the standard library while learning a language. For this reason, standard library provides readability for developers. Since developers do not rewrite their functions every time, developers who already know the standard library can understand the code more easily.

Standard library implementations may not satisfy every developer. Accordingly, the community develops 3rd party libraries for similar purposes. But mostly these libraries use some functions provided by the standard library for their implementations. So even while a 3rd party develops an alternative package, the standard library can continue to make things easier.

## About Implementations

The standard library is developed together with the compiler and released with each compiler version, not distributed separately. Therefore, using the standard library between different compiler versions may create various incompatibility problems. This is especially true for critical packages like `std/runtime` and can therefore affect the behavior of programs in unexpected ways. Therefore, it is not recommended to use different standard library distributions between compiler versions.

Algorithms in the standard library can rely on various compiler optimizations for performance and efficiency. Therefore, significant performance differences can occur when optimizations are turned off.