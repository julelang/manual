# The Mission

There are many programming languages today, and many of them are successful in their own domains. Jule is inspired by these languages and acknowledges the problems they solve, as well as the trade-offs they make.

Jule is a general-purpose programming language with a strong focus on systems programming. It is designed to deliver native-level performance, predictable behavior, and practical safety, without sacrificing clarity or developer productivity.

Many modern languages aim for similar goals, so why create a new one? Because each language chooses a different balance between simplicity, safety, performance, and control. Jule explores a different balance, guided by a clear set of design principles rather than attempting to maximize a single dimension.

Jule is not built to replace existing languages or invalidate their ideas. Instead, it is designed around its own perspective, informed by successful designs, but shaped by different priorities.

Some of these goals are outlined below.

## Simplicity and Maintainability

In terms of simplicity and maintainability, Jule is heavily influenced by Go. Go succeeds in providing a clear, readable, and productive development experience, and Jule aims to preserve that level of simplicity as much as possible.

Some languages introduce additional complexity in exchange for stronger guarantees, most notably Rust. Rust achieves its safety goals exceptionally well, but its strict model can significantly increase the cognitive and time cost for developers, especially during rapid development.

In Go, developers rarely need to shape their algorithms to satisfy the compiler. You generally write code the way you think, and the language handles memory safety through runtime checks. This results in a smooth and predictable experience.

Jule aims to provide a similar experience. Its design avoids imposing rules that force developers to constantly reason about compiler constraints while writing algorithms. Safety and performance-related decisions are made carefully, with the goal of minimizing their impact on language complexity and developer workflow.

## Efficiency and Performance

Jule is designed to deliver high performance while keeping memory usage low. It targets systems-level workloads where efficiency, predictability, and control matter.

Rather than relying solely on the backend for performance, Jule's reference compiler performs its own optimizations to generate high-quality intermediate representation (IR).\
(See: [Why Jule has an optimizing compiler](/some-questions#why-does-jule-have-its-own-compiler-optimizations))

To achieve memory efficiency, Jule avoids certain runtime-heavy features, such as traditional runtime reflection. Instead, it provides powerful alternatives like compile-time reflection, preserving expressiveness without incurring runtime cost.

## Safety

Rust is widely known for its strict and comprehensive safety guarantees, and it addresses safety concerns effectively. However, strictness is only one possible approach.

Jule follows a more flexible safety model, closer to Go’s philosophy, while still being stricter in key areas. Like Go, Jule performs runtime checks for boundary violations and nil dereferencing, ensuring baseline memory safety.

At the same time, Jule introduces additional compile-time safety analysis. While it assumes that developers will act responsibly in areas such as concurrency and data races, it performs static checks to catch common classes of errors early.

A key distinction is that Jule adopts an immutable-by-default model, similar to Rust. Variables are immutable unless explicitly declared mutable. Under Safe Jule, this rule is enforced strictly: immutable memory cannot be mutated.

Jule also introduces safe reference pointers. These are raw pointers that are statically verified for safety at compile-time. Unlike Go, which allows unrestricted use of raw pointers, Jule applies static analysis to ensure reference pointer safety, strengthening memory guarantees without imposing a rigid ownership system.

## Less Common Goals

In addition to its core goals, Jule also pursues some less common objectives.

### Empowered Compile-Time

Jule places strong emphasis on compile-time capabilities. This includes constant expression evaluation and compile-time reflection as a powerful alternative to runtime reflection.

It supports compile-time iteration and pattern matching. When combined with generics, these features enable advanced compile-time algorithms, reducing runtime overhead and improving performance predictability.

Jule also exposes interfaces to its semantic analyzer at compile-time, allowing inspection of program structure and source code during compilation.

### High C and C++ Interoperability

Interoperability with C and C++ is a first-class design goal in Jule.

To support this, Jule compiles to C++ as an intermediate representation and leverages mature backend compilers such as GCC and Clang.

However, Jule goes beyond simple code translation. It provides built-in language features specifically designed to simplify and strengthen interoperability.\
(See: [Integrated Jule](/integrated-jule/))

Jule also offers an official C++ API for its [runtime](/runtime/), making it easier to extend Jule or integrate it directly into existing native codebases.

Rather than treating interoperability as an afterthought or a workaround, Jule is designed to coexist with existing C and C++ ecosystems from the ground up.
