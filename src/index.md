# The Jule Programming Language

Welcome to the manual of the Jule programming language. \
This manual is here to get started, learn or reference Jule programming.

In this section, you will briefly learn about the Jule programming language.
In the following sections, you will discover Jule programming.

## The Mission

The mission is to develop a reliable and safe programming language that focuses on systems programming. While doing this, performance should not be compromised too much. Jule should be a balanced language that keeping the cost to a minimum for safety purposes. Even if it is a new language design, the popular C and C++ languages, which are frequently used in system programming, should not be ignored. Therefore, good interoperability support should be provided for these languages.

To be safe, Jule should adopt approaches that serve the purpose in a balanced way, rather than having a design that contains a lot of complexity in the language. It should be a language that is significantly safe as well as being satisfactorily efficient and performant for developers.

- **Simplicity and Maintainability**: Jule's design should to be such that it avoids imposing constraints that increase time costs of developers, or having to think about the rules they must frequently follow when designing their algorithms. As much as possible, Jule's safety design and experience should be such that it prevents developers from thinking the way Jule wants them to and not the way they do. Design choices for safety or performance must be made without adding significant complexity to the Jule at the same time.

- **Safety**: Jule code must be safe at both compile time and runtime. This requires measures such as bounds checking and nil dereferencing checking at compile time and runtime. Jule also should adopt immutability and disallow shadowing by default as safety measures. Anything that might be unsafe should be blocked or checked. If unsafe behavior is desired, this should be clearly stated and awareness should be made.

- **Efficiency and Performance**: To be efficient, Jule should try to behave in a way that uses the least memory consumption. In addition, it should be high-performance and be able to create fast software. Instead of relying entirely on the backend compiler that will be used when the IR is created, it should have an optimizing reference compiler to generate the best IR.

- **High C/C++ Interoperability**: C and C++ are languages ​​that are popular in system programming, widely used and have a wide ecosystem. Therefore, Jule should embrace and collaborate with the existing ecosystem rather than completely ignoring it. Jule developers should also be able to use and interoperate with C/C++ within Jule if they wish. Therefore, Jule is compiled by creating C++ IR. It supports different compilers such as Clang, GNU GCC. It has an API developed in C++ to make things easier for Jule developers and make things more standardized.

- **Compile Time**: Jule should have a good compile time that serves the mission. For this, it must have capabilities such as having compile-time constants, avoiding repetitive checks by checking generics once for each instance, and performing safety-related checks whenever possible. The compiler should support developers with safety checks at compile-time and give some optimization options such as constant evaluations.

- **Brand-New**: Jule should be like a truly brand-new language. For example, it should have UTF-8 strings, support Unicode and type inference, and a cross-platform portable standard library. Unless the developer really wants to do platform specific programming, shouldn't worry about the portability of the standard library, should have Unicode support and a common standard like UTF-8 should be easy to handle.


## Version Specific

This version of the text assumes you're using the latest version of the JuleC compiler (compiled from source).

If you want to see the current manual version for the release, you can select the relevant version from the list below. But for this you will be redirected to the source code on GitHub and you will need to read the content from markdown.

List of manual version for each Jule releases:
- [Beta 0.0.6](https://github.com/julelang/manual/tree/jule-beta-0.0.6/src)
- [Beta 0.0.5](https://github.com/julelang/manual/tree/jule-beta-0.0.5/src)
- [Beta 0.0.4](https://github.com/julelang/manual/tree/jule-beta-0.0.4/src)
- [Beta 0.0.3](https://github.com/julelang/manual/tree/jule-beta-0.0.3/src)
