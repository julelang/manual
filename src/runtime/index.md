# Runtime

Jule does not have a special runtime like virtual machine. However, every Jule program has a implicit use declaration for standard package that defines critical and important functions as well as some API functions by default. This package is the `std/runtime` package.

API functions are mostly functions that can be used by the backend and require a great deal of low-level programming awareness. Called low-level because it is possible to access types that require careful handling, such as pointers, as well as behavior that can affect the behavior of the entire program. This means you also have access to critical common runtime functions of the Jule programs.

In addition to providing an API for the backend, the package also contains some definitions that can be accessed directly from within Jule. These definitions grant access to some permitted functions at runtime, but typically most programs do not need this.