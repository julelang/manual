# Some Questions



**List of all questions:**
- [Why an another language?](#why-an-another-language)
- [What about future of Jule?](#what-about-future-of-jule)
- [Is Jule the C++ successor?](#is-jule-the-c-successor)
- [Is Jule experimental?](#is-jule-experimental)
- [What is the experimental feature?](#what-is-the-experimental-feature)
- [What languages inspired Jule the most?](#what-languages-inspired-jule-the-most)
- [Why Jule uses exceptionals instead other error handling methods?](#why-jule-uses-exceptionals-instead-other-error-handling-methods)
- [Why do exceptionals not support combining?](#why-do-exceptionals-not-support-combining)
- [Will Jule always use C++ as backend?](#will-jule-always-use-c-as-backend)
- [Why Jule have not built-in methods?](#why-jule-have-not-built-in-methods)
- [Why are null values ​allowed?](#why-are-null-values-%E2%80%8Ballowed)
- [Why is shadowing allowed for global scope?](#why-is-shadowing-allowed-for-global-scope)
- [Will function overloading be added?](#will-function-overloading-be-added)
- [Will different memory management methods be added?](#will-different-memory-management-methods-be-added)
- [Will runtime reflection be added?](#will-runtime-reflection-be-added)
- [Why Jule have an optimizing compiler?](#why-jule-have-an-optimizing-compiler)
- [Jule have a runtime?](#jule-have-a-runtime)
- [Why receiver parameters always named as self?](#why-receiver-parameters-always-named-as-self)
- [Why some packages in the standard library adopted from Go?](#why-some-packages-in-the-standard-library-adopted-from-go)
- [Why were the default values ​​of the fields removed?](#why-were-the-default-values-of-the-fields-removed)

### Why an another language?

Please read [The Mission](/the-mission) section.\
TL;DR; Jule have different ideas for goals.

### What about future of Jule?

Please read the [Future of Jule](https://jule.dev/future-of-jule) page.\
TL;DR; We will continue to develop and improve Jule.

### Is Jule the C++ successor?

No. It's not.

### Is Jule experimental?

No. Jule itself is not experimental. But it may contain some experimental ideas in itself. However, we often avoid adding experimental things to the language before they are sufficiently well designed and implemented.

### What is the experimental feature?

Experimental features are those that are not yet stable or expected to be, and are still in the development phase. These features may have various issues and are not guaranteed to become stable in the final version. In other words, experimental features may be cancelled and removed.

### What languages inspired Jule the most?

Only two languages: Go and Rust. Mostly Go.

### Why Jule uses exceptionals instead other error handling methods?

Because exceptional handling is considered more successful and safe in using an alternative value or handling exceptional and returning in elegant.

Exceptionals was evaluated as more suitable in terms of readability and safety. Optional types can be checked at any time. Exceptionals are particularly useful for error handling and can be used somewhat like optionals. It is required to be checked by the developer and this must be done instantly, that is, the check is not postponed, unlike optional types.

Exceptionals are typically similar to Go's `error` returns. However, in Go, error returns can be easily ignored, and it is easy to forget this because it is necessary to know the return type to understand that the ignored return is an error. Although this is especially true for functions that do not return errors and always return a nil error because they implement an interface, such as `strings.Builder`, the relevant function may return an error in future implementations. Ignoring this may cause various problems when switching between versions. This is also an uncertainty for new contributors until they look at the documentation.

Due to these problems, Jule adopted the exceptionals design. They basically provide a hybrid experience of Go's error-handling method and optional types. Exceptions due to strict behavior aim to solve all these problems.

Its most obvious feature is that even if an exception is not discussed, it remains clear that it is an exception. This solves the ignore issue mentioned for Go's method.

Simply placing `!` at the end of an exceptional function call indicates that there is no special handling for that exception, but that a possible exception will result in panic. This makes it easier to spot potential exceptions in the future, and a senior or new contributor can easily tell when reading the code that whether a function is exceptional.

**The Proposal for Go's Error Handling**

An issue ([#71203](https://github.com/golang/go/issues/71203)) was opened for the Go language on January 10, 2025, and was later converted into a discussion ([#71460](https://github.com/golang/go/discussions/71460)). This proposal suggests a new syntax for error handling in Go, which bears similarities to Jule's exceptional syntax, with some important differences. The fact that Jule is largely influenced by Go and the opening of such a proposal supports our belief that adopting the exceptional design for error handling may be a good approach.

Although this proposal is not related to Jule, with this proposal and the contributions of Go's large community, we now have more insights into this type of design. Therefore, we thank the Go community.

### Why do exceptionals not support combining?

Calls to exceptional functions must always form the entire expression. They cannot be used in conjunction with binary expressions, unary expressions, or combined with multiple operators, even for function arguments. There are two reasons for this design choice: simplicity and compiler costs.

#### Simplicity

Allowing any exceptional call without restrictions opens the door to having overly complex expressions. Honestly, we want to ensure that exceptional functions are only used in specific ways, as this is one of the most straightforward ways to keep error handling understandable and simple. Therefore, exceptional functions are only permitted under certain conditions, such as being used as a return expression, as a standalone call, as an assignment, or as part of a use statement.

For example:
```jule
fn foo()!: int {
	// ...
}

fn bar(x: int, y: int, z: int, j: int) {
	// ...
}

fn main() {
	fiz := true
	bar(foo() else { use 90 }, foo() else { use 80 }, foo()!,
		foo() else {
			mut r := 0
			if fiz {
				r = 1
			} else {
				r = 0
			}
			use r
		})
}
```

The example above has a negative impact on maintainability. However, since your compiler does not allow this, you cannot write such code. This will encourage you to write more readable and maintainable code like the following;

```jule
fn main() {
	fiz := true
	x := foo() else { use 90 }
	y := foo() else { use 80 }
	z := foo()!
	j := foo() else {
		mut r := 0
		if fiz {
			r = 1
		} else {
			r = 0
		}
		use r
	}
	bar(x, y, z, j)
}
```

#### Compiler Costs

Calls to exceptional functions must be handled immediately. As a result, the compiler implicitly places certain control mechanisms at each call site. With this design choice, it is determined where an exceptional function can be called, and the cost of developing the compiler for only those situations is lower. Since it encourages writing code that is less complex and thus doesn't incur higher compilation costs, optimizing the compiler becomes easier.

### Will Jule always use C++ as backend?

It's hard to say anything about this. C++ backend allows supporting many things. For example, using Clang for LLVM backend. In this case, it is debatable what the gain of writing a separate LLVM backend for Jule would be.

Native backend may be an exception. Native backend can be added for supported platforms. However, since Jule aims to be fast, the native backend must be well optimized and creating a good enough native backend requires a lot of time and knowledge.

Only time can give a definitive answer to this question.

### Why Jule have not built-in methods?

Jule have built-in functions for some critical operations like memory allocation, but not built-in methods. Because it is considered bad design. Having methods for built-in types is vague and resembles functional programming and Jule is not a functional language.

Some languages ​​do this plausibly. For example, C# has methods of type `string`, but these are not built-in, they are actually an alias for `System.String` and are actually an implemented class. So the algorithm is truly reviewable, there is no runtime algorithm provided by the compiler in the background.

Jule is not like C#, `str` is just a type, not an alias for a different implementation. In this case, the `myStr.bytes()` method or something similar that will be added to it is a method implemented in the background.

We think it is more reasonable to do this by casting instead of doing it this way, for example: `[]byte(myStr)`. The standard library `std/strings` package designed for the remaining common algorithms. This is exactly what many other languages ​​do, see: Go, Nim, or Odin.

### Why are null values ​allowed?

In most cases it is similar to optional types, but requires trust that the developer will be careful enough. Check before use. Go, which Jule is heavily inspired by, also allows null values, and frankly, it doesn't feel bad in terms of experience.

If you prefer optional types, take a look at Jule's exceptionals.

Besides these, null values are a fundamental mechanism for Jule. For example, it is guaranteed that every memory area will be automatically initialized, including pointers and some other types. Jule has two types of pointers: smart pointers and raw pointers. By default, there must be a value that can be assigned to them, and the most logical option for this is a null value. Using an optional or maybe monad even for pointers would make things unnecessarily more complex. Moreover, these types are quite common in Jule, especially since the standard library frequently uses smart pointers.

In the interoperability side, null values clearly support flexibility in C/C++ interoperability in a positive way and make it significantly easier.

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
use "std/unicode/utf8"

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

### Jule have a runtime?

If we assume that the concept of "runtime" in this question is used in the sense of virtual machine, no. Jule is a language compiled entirely into machine code. But it has `std/runtime` package in the standard library. However, the main purpose of this package is to define special algorithms and some API functions that Jule programs will hear at run time.

If you want to know more about this package, read the [Runtime](/runtime/) section.

### Why receiver parameters always named as self?

In languages ​​like Go, the developer provides the name of the receiver parameter. This can sometimes lead to writing shorter code with shorter names. But consistent naming is the developer's own effort. A simple renaming can be painful when applied to every method, especially in large structs.

For reasons like these, Jule chose the `self` keyword to eliminate developer thinking cost for receiver name and always ensure a consistent receiver parameter name. This is also useful to keep the receiver parameter declaration shorter and gain some syntactical possibilities.

### Why some packages in the standard library adopted from Go?

Due to Jule being largely influenced by Go, many Go codes can be easily adapted to Jule. Go and Jule share very similar semantics. Implementing existing code is not too difficult.

That is, time cost. Designing and developing well-implemented algorithms takes time. Go has enough well-implemented algorithms, so it makes sense to adopt them. And not all packages were adopted from Go, just specific ones that play well with Jule. Many algorithms are implemented from scratch for Jule.

### Why were the default values of the fields removed?

There were significant concerns that it negatively affected readability. In particular, when tag support was added for fields, it became clear that combining default values and tags did not lead to maintainable code. To prevent this, the default value feature was removed from structs.

In the future, a feature for assigning default values to structs may be reintroduced. However, it can be said with certainty that this won't be part of the struct declaration itself, as it was in the previous implementation. Instead, it will most likely involve using a struct literal returned from a dedicated reserved method. Just like the old implementation, all default values for the struct fields will be required to be constants. If you're wondering why they must be constants, see the old QA below.

> #### Why default values of fields must be constant?
>>
> We thought this was the most appropriate way to add default value support without compromising simplicity. Otherwise, there could have been too much implicit control flow; when you consider that each field could potentially depend on a value returned from a function by default, even creating a structure with only default values could have had a significant cost and would result in code implicitly inserted everywhere.
>>
> Initializing a structure by default should be a simple action. If you need a more complex initialization, you are encouraged to write a separate function for it. This way, the cost of the code that would otherwise be implicitly scattered throughout the codebase becomes more predictable.