# The Mission

There are many programming languages ​​today. Some of these are truly successful and deserve appreciation. Jule is also inspired by these successful languages ​​and appreciates the problems they solve.

Jule is designed as a general-purpose programming language focusing on systems programming. It aims to be fast, efficient and safe.

It overlaps with the goals of many other languages, so why a new language?

Even though we have many languages, there are so many ideas and approaches. Jule was developed according to its own goals and ideas, inspired by some programming languages.

Some of these are explained here.

## Simplicity and Maintainability

When it comes to simplicity and simplicity, Jule is heavily influenced by Go and it achieves this well with its simple and readable experience. Jule tries to achieve this itself as much as possible.

Some programming languages ​​have some designs that increase the time cost of developers due to safety and some other reasons. For example, Rust. Rust does what it wants to achieve quite well, but its learning curve is high and it is not suitable for fast production. But Go is successful in this regard.

When using the Go programming language, you generally do not care much about what the compiler will say and do not observe rules such as ownership. So you mostly code as you think, and Go guarantees memory safety for you and the experience is simple.

This is the experience Jule wants to provide. Jule's design should to be such that it avoids imposing constraints that increase time costs of developers, or having to think about the rules they must frequently follow when designing their algorithms. As much as possible, Jule's safety design and experience should be such that it prevents developers from thinking the way Jule wants them to and not the way they do. Design choices for safety or performance must be made without adding significant complexity to the Jule at the same time.

## Efficiency and Performance

To be efficient, Jule should try to behave in a way that uses the least memory consumption. In addition, it should be high-performance and be able to create fast software. Instead of relying entirely on the backend compiler that will be used when the IR is created, it should have an optimizing reference compiler to generate the best IR.

Of course, some important choices must be made to ensure memory efficiency. For example, not adding memory-intensive capabilities such as runtime-reflection. Of course, such important and powerful features should have alternatives that are as satisfactory as possible.

## Safety

Rust is very strict about safety, and it does it well. However, as we said, there are many ideas and approaches. Jule is not as rigid as Rust in this regard, but was designed to be more flexible. It is similar to Go in this regard.

Go is safe at runtime. It catches situations like boundary checking, nil pointer dereferencing, etc., but it doesn't even make a special effort to guarantee that there won't be a data race like Rust, even though concurrency is one of its main focuses. This is essentially like assuming the developer will be smart and careful enough.

Jule was designed like Go in this regard. It assumes that developers will be careful enough about issues such as data race. This is of course a choice to avoid significant analysis that would increase compilation time and to maintain simplicity.

Although Go is taken as an example in this regard, Jule is somewhere between Go and Rust. While not as strict as Rust, it is more stringent than Go in some respects and performs more safety analysis at compile time.

Just like Go, Jule checks for boundary or nil dereferencing errors that may occur at runtime. But it also performs some important analysis at compile time, the main reason for this is that Jule includes some additional security measures compared to Go.

The most obvious of these measures is that Jule has an immutable by default approach, just like Rust. Jule defines variables as immutable by default and is stubborn about it. Under Safe Jule, your compiler will never allow you to mutate immutable memory.

Of course, there are some additional measures too, but some of them are that Jule has some abilities that Go does not have. For example, references. References are simply raw pointers that are guaranteed to be safe at compile time. Accordingly, Jule performs additional analysis to ensure this at compile time. Since Go has raw pointers directly, it doesn't take any additional precautions in this regard. Raw pointers are a fundamental part of Go.

## Non-Common Goals

The reasons above are the goals that many modern programming languages ​​address and try to achieve in different ways. Jule also tries to achieve some less common things.

### Empowered Compile-Time

Jule aims to provide a good compile time. This compile time provides basic capabilities such as evaluation of constant expressions, as well as comptime-reflection as a powerful alternative to shortcomings such as runtime-reflection.

It provides functionalities such as iterations and pattern matching at compile time. It aims to make some algorithms that require runtime-reflection as implementable as possible, with additional capabilities such as the generics.

It also provides a compile-time interface to the semantic analyzer to ensure that the source code and program structure can be examined at compile time.

### High C and C++ Interoperability

Jule aims to provide good interoperability with C/C++ programming languages. To achieve this, Jule compiles its code to C++ code in the background and supports powerful backend compilers such as GNU Compiler Collection and Clang to compile generated C++ code.

Jule tries to optimize performance and efficiency by optimizing this generated C++ IR code as much as possible with its optimizing compiler.

There are languages ​​that compile to C and C++ in the background. But Jule doesn't try to achieve this by simply compiling it to C++ code in the background. It also provides built-in utilities for this. These utilities packages, called [Integrated Jule](/integrated-jule/), aim to make C/C++ interoperability as painless and easy as possible.

So unlike most languages that aim to provide interoperability, Jule has some efforts built in to support interoperability and make it more effortless. It also provides an API written in C++, in this way, it becomes easier to extend Jule by writing C++ using API.