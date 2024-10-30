# Immutability
One approach of the compiler from its safety obsessions is that by default variables are immutable. You've probably seen in the structure documentations that the compiler insists on using a smart pointer to the smart pointer receiver. This is just one of the compiler's safety obsessions. But right now, we're taking a look at another similar obsession: immutability by default!

The fact that a variable is immutable by default requires that you do so consciously if you want to change it. Let's see why this is a safety obsession for the compiler:

Jule has data types in which it is mutable. These are:

- Raw and Smart Pointer
- Slice
- Traits
- Array, structure or etc. which is has mutable type

These are types that point to commonalities among the variables with which they are shared. You may want to ensure that one of these types has not changed. You are safe about this as variables are immutable by default. This is possible if you want it to be mutable. But before we get into how this is done, let's take a look at how obsessed the compiler is with immutability.

If you are using a mutable data type and your data type is in an immutable variable, the compiler will never allow you to assign it to a mutable variable. If the compiler allows it, you will lose its immutability. The value of the immutable variable can be changed with the new mutable variable.

For the same reason, the compiler will force you to return a mutable variable if you also have one of these data types as a return expression. This is precisely because this variable can change. The compiler has no idea whether a data type is mutable. All are basically immutable, with the exception of the ones listed above.

An immutable variable with mutable data type returned from the function then poses a unsafety. Because it is not possible to specify it as immutable in return data type. That's why the compiler assumes that the return value can change, and shows you one of its strict obsessions about it: if you're returning, please use a mutable variable. Even if you're just returning the variable, the compiler doesn't want to understand it. According to the compiler, if that variable is an immutable and is also used within the function, the immutable obtained instance obtained from the return value may break this immutability. Even if there is no such thing, the compiler will continue to insist on this.

Okay, so why doesn't the compiler implement immutability by default only for those data types? This is a good question. The answer lies in the compiler wanting to be stable. It is a mental overhead during the development phase that the developer has to constantly consider these data types. This stability of the compiler ensures that the developer always knows that all variables are immutable by default. This also helps the developer to understand what it is changing and will change while developing and reading algorithms. It is more obvious which variables should be paid attention to, especially when using concurrency.

## Traits and Immutability

Traits are considered mutable types because the type of data they store can be mutable. It is not possible to track this at runtime. Because, in its simplest explanation, an immutable trait data can be assigned to a mutable memory. However, it is not possible to understand at compile time whether the trait stores mutable data, so it's risky. The only way to check this is to add an additional unwanted runtime.

However, there is one point for traits: they respect the concept of interior mutability. If the data stored by a trait implements interior mutability, this is allowed.

## Shared Memory

In the case of shared memory, you may also encounter changes in immutable memory. Immutable memory does not guarantee that the data it stores is strictly, directly and indirectly immutable. Immutable memory space guarantees that it cannot be changed directly.

For example, when you assign a mutable byte slice to an immutable field, this is valid behavior. Now the assigned immutable memory will point to the same shared memory (since the slices share the common memory). This immutable memory cannot be assigned to a mutable memory or mutated in any way. It is safe in this respect. However, since there is no deep immutability guarantee, if the mutable memory to which it is assigned changes, its data will also mutate.

For example:
```jule
fn main() {
	mut x := []byte("hello world")
	y := x
	x[0] = 'H'
	println(str(y))
}
```
In the example program above the output will be `Hello world`. This is exactly for the reason explained above. `y` is immutable memory. It guarantees immutability, but this is not a guarantee that the memory cannot be modified from `y`. Mutation of the shared memory mutates it.

The fact that a deeper imutability has not been adopted is one of Jule's purposes of simplicity and convenience. This way, you only know which memory needs to be changed in cases like shared memory, but you don't have to guarantee it too deeply.

For example, you might exhibit an immutable share during a function call when you are handling mutable memory. In this case, you would not expect a change in your data, because the function using the memory is declared not to mutate it. However, if a deep guarantee was required by design, things would not be so easy in such shared memory situations.

Shared memory spaces are important and something to consider in concurrent programming and this is an important help in concurrent programming because you know which memory areas can mutate in concurrent code.