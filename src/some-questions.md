# Some Questions

### Why an another language?

Please read [The Mission](/the-mission) section.\
TL;DR; Jule have different ideas for goals.

### What about future of Jule?

Please read the [Future of Jule](https://jule.dev/future-of-jule) page.\
TL;DR; We will continue to develop and improve Jule.

### Is Jule the C++ successor?

No. It's not.

### Is Jule experimental?

No. Jule himself is not experimental. But it may contain some experimental ideas in itself. However, we often avoid adding experimental things to the language before they are sufficiently well designed and implemented.

### What languages inspired Jule the most?

Only two languages: Go and Rust. Mostly Go.

### Why exceptionals designed instead of using optional types?

Exceptionals was evaluated as more suitable in terms of readability and safety. Optional types can be checked at any time. Exceptionals are particularly useful for error handling and can be used somewhat like optionals. It is required to be checked by the developer and this must be done instantly, that is, the check is not postponed, unlike optional types.

Exceptional handling is considered more successful in using an alternative value or handling exceptional and returning in elegant way.

### Will Jule always use C++ as backend?

It's hard to say anything about this. C++ backend allows supporting many things. For example, using Clang for LLVM backend. In this case, it is debatable what the gain of writing a separate LLVM backend for Jule would be.

Native backend may be an exception. Native backend can be added for supported platforms. However, since Jule aims to be fast, the native backend must be well optimized and creating a good enough native backend requires a lot of time and knowledge.

Only time can give a definitive answer to this question.

### Why Jule have not built-in methods?

Jule have built-in functions for some critical operations like memory allocation, but not built-in methods. Because it is considered bad design. Having methods for built-in types is vague and resembles functional programming and Jule is not a functional language.

Some languages ​​do this plausibly. For example, C# has methods of type `string`, but these are not built-in, they are actually an alias for `System.String` and are actually an implemented class. So the algorithm is truly reviewable, there is no runtime algorithm provided by the compiler in the background.

Jule is not like C#, `str` is just a type, not an alias for a different implementation. In this case, the `myStr.bytes()` method or something similar that will be added to it is a method implemented in the background.

We think it is more reasonable to do this by casting instead of doing it this way, for example: `[]byte(myStr)`. The standard library `std::strings` package designed for the remaining common algorithms. This is exactly what many other languages ​​do, see: Go, Nim, or Odin.

### Why are null values ​allowed?

In most cases it is similar to optional types, but requires trust that the developer will be careful enough. Check before use. Go, which Jule is heavily inspired by, also allows null values, and frankly, it doesn't feel bad in terms of experience.

If you prefer optional types, take a look at Jule's exceptionals.

### Why is shadowing allowed for global scope?

Variable shading only applies to variables that form their own parent scope, such as a function. Therefore, what comes from the global scope can be shadowed, but child scopes do not allows shadowing.

This is a design choice. Jule disabled variable shadowing by default. However, it also provides the option of disabling it. We also don't want to make variable shadowing too strict, because we're not sure there are good enough arguments for even adding it.

### Will function overloading be added?

No. This is one of the ideas that is strictly rejected.
We think adding function overloading will make the language more complex and make things harder rather than easier.

### Will different memory management methods be added?

Not plannded but may be.
Jule have smart pointers and they are suitable for many different memory management methods such as Tracing GC or might be ownership.

### Will runtime reflection be added?

Probably no. One of the goals of Jule is to provide functionalities at compile time to reduce the need for runtime-reflection as much as possible.

But let's assume there is a strong RFC or something different, and it will be added. It probably wouldn't be enabled by default. Runtime-Reflection would require a compiler option or something similar.

Jule aims to be memory efficient. Runtime reflection can make this significantly more difficult. Because there is no solid way to predict what will be available to runtime reflection at compile time, especially mixed with interoperability. This would require generating reflection data for all types and such, and could add significant memory usage.