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

### Why Jule have an optimizing compiler?

Must have. Jule aims to be fast and efficient. It provides an infrastructure to optimize the code in the future when different backends are supported such as native. But that's not the only reason, even if Jule always uses only C++ backend, it inevitably needs an optimizing compiler.


Jule can't achieve performance goals by relying on a backend compiler alone. Abviously, the most language can't achieve this if they are using a language as backend. Yes, advanced and mature backend compilers like Clang are very good at optimizing C++ code, but that's exactly the problem; They optimize C++ code, not Jule code.

Languages ​​that use a language as a backend often have different designs than that language. Although compiler tries to create code that is as efficient as possible, it is not possible to create code that is good enough for the backend compiler without additional optimizations of the compiler.

In short, the backend compiler may be good at optimizing the code it generates, but it won't do it knowing it's Jule code, it will do it for the language used as the backend language. In this case, some problems arise; Behaviors that are possible to optimize for Jule may not be possible for that language.

Let's take a closer look at this with some Jule code;
```jule
let mut arr: [8]int
for i in arr {
    arr[i] = arr
}
```
There is a simple iteration in the simple code above. Typically, Jule needs to check that the `i` variable is within the boundary to ensure safety. However, with a simple inference, it can be understood that the variable `i` is always within the boundary. This type of checks can lead to a significant performance loss, especially in very large iterations and similar situations. If Jule wasn't optimizing this and bypassing safety checks, would the backend compiler optimize this?

Let's look at a different, more complex example;
```jule
use utf8 for std::unicode::utf8

fn Exist(s: str, c: any): bool {
    for _, r in []rune(s) {
        match type c {
        | byte:
            if r < utf8::RuneSelf && byte(r) == byte(c) {
                ret true
            }
        | rune:
            if r == rune(c) {
                ret true
            }
        |:
            panic("Exist: invalid character type")
        }
    }
    ret false
}
```
The above Jule code could probably be considered bad practice in most cases. But it's not bad to discuss. Assuming the Jule compiler has all its optimizations turned on. For the code above, Jule applies some optimizations. These optimizations are aimed at reducing memory usage and improving performance.

Some optimizations are (based on Jule 0.0.15):
- Iteration obviously requires converting the string variable `s` into a rune slice. But Jule prevents this. There is no need to create a new allocation for runes and deallocate it after iteration. May be the entire slice won't even be handled in the iteration. So instead of actually doing a `[]rune` conversion in the background, Jule iterates through the string's runes as needed. This eliminates memory allocation and means it will process the required rune at each iteration step.
- It is often not possible to know at compile time what type of data the `any` type stores. Therefore, it requires type checking at run time for operations such as casting. But there are some ways to know. In the example code, the algorithm already checks the type and then performs a casting. In this case there is no need to do type checking for casting. This is a different little optimization.

The above two optimizations are also possible to be done by the Jule compiler. The Jule compiler has mastered understanding Jule, and that is undoubtedly its job. Of course the backend compiler cannot do this because it is not optimized for Jule like the Jule compiler and cannot think in terms of Jule at compile time. In this case it is not possible to have the optimizations applied.