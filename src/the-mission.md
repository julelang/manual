# The Mission

There are many programming languages today. Some of them are truly successful and deserve appreciation. Jule is inspired by these successful languages and acknowledges the problems they solve.

Jule is a general-purpose programming language focused on systems programming. It aims to be fast, efficient, and safe.

Its goals may overlap with those of many other language. So why create a new one? Because different languages make different trade-offs between simplicity, safety, and performance. Jule explores a new balance based on its own design goals.

Even though there are many languages, there are also many ideas and philosophies. Jule is designed based on its own goals and perspectives, drawing inspiration from existing languages.

Some of these goals are explained below.

## Simplicity and Maintainability

In terms of simplicity and maintainability, Jule is heavily influenced by Go. Go succeeds in providing a simple and readable experience. Jule aims to achieve this as much as possible.
Some languages introduce design elements that increase the time cost for developers, usually for the sake of safety or other features such as Rust. Rust achieves its goals well, but its learning curve is steep and it may not be ideal for rapid development. Go, on the other hand, performs better in this regard.

When programming in Go, developers generally don't worry much about how the compiler will judge their algorithm, because the language doesn't impose algorithm-shaping constraints. You mostly write code the way you think, and Go guarantees memory safety for you, the experience is simple.

This is the kind of experience Jule aims to provide. Its design avoids imposing rules that increase the time cost for developers or require them to constantly consider constraints while writing algorithms. Design decisions regarding safety or performance must be made without introducing significant complexity to the language.

## Efficiency and Performance

To be efficient, Jule is designed to minimize memory usage while balancing performance. It should support high-performance development and enable the creation of fast software.
Rather than relying entirely on the backend compiler for optimization when generating IR, Jule includes an optimizing reference compiler to generate high-quality IR.
(See: [Why Jule has an optimizing compiler](/some-questions#why-does-jule-have-its-own-compiler-optimizations))

To achieve memory efficiency, some decisions must be made such as avoiding features like runtime reflection that are typically memory-intensive. However, Jule aims to provide satisfactory alternatives such as compile-time reflection for such powerful features.

## Safety

Rust is known for its strict safety guarantees, and it does an excellent job. However, as mentioned before, there are many different approaches.
Jule is not as rigid as Rust; it's designed to be more flexible, similar to Go.

Go provides runtime safety, catching errors like boundary violations and nil pointer dereferencing. However, it doesn’t enforce data race safety, even though concurrency is a key feature. This assumes the developer will act carefully and responsibly.

Jule adopts a similar philosophy but is slightly stricter than Go. While it assumes developers will avoid issues like data races, it also performs some static safety analysis at compile-time.

Like Go, Jule checks for boundary overflows and nil dereferences at runtime. But it also introduces compile-time checks for additional safety.

A major difference is that Jule adopts a immutable-by-default approach, similar to Rust. Variables are immutable unless explicitly declared otherwise. Under Safe Jule, the compiler enforces this strictly, immutable memory cannot be mutated.

Additionally, Jule introduces safe reference pointers. They are raw-pointers that are statically verified to be safe at compile-time. Go allows raw-pointers directly without such guarantees. In contrast, Jule performs static checks to ensure the safety of reference pointers, enhancing memory safety at the language level.

## Less Common Goals

The previous goals are shared by many modern programming languages. But Jule also pursues some less common objectives.

### Empowered Compile-Time

Jule emphasizes compile-time capabilities. This includes constant expression evaluation and compile-time reflection, offered as a powerful alternative to runtime reflection.
It supports iteration and pattern matching at compile-time. Combined with features like generics, this allows developers to write advanced compile-time algorithms, reducing runtime overhead.

Jule also exposes an interface to the semantic analyzer at compile-time, enabling inspection of program structure and source code during compilation.

### High C and C++ Interoperability

Jule is designed for interoperability with C and C++.
To achieve this, Jule compiles its code to C++ as an intermediate step and leverages powerful backend compilers like GCC and Clang.

But Jule doesn't stop at code translation. It provides built-in features to simplify interoperability.
(See: [Integrated Jule](/integrated-jule/))

Jule offers an official API for its [runtime](/runtime/) in C++. This makes it easier to extend Jule or integrate it with native C++ code.

In short, unlike many other languages that merely provide interop hooks, Jule is designed with interoperability in mind from the ground up.
