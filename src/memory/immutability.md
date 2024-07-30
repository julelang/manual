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

Traits are considered mutable types because the type of data they store can be mutable. It is not possible to trck this at runtime. Because, in its simplest explanation, an immutable trait data can be assigned to a mutable memory. However, it is not possible to understand at compile time whether the trait stores mutable data, so it's risky. The only way to check this is to add an additional unwanted runtime.

However, there is one point for traits: they respect the concept of interior mutability. If the data stored by a trait implements interior mutability, this is allowed.

## Responsive Immutability

Responsive immutability is the state of protection when immutability is guaranteed. For example, if a slice is guaranteed to have an immutable memory area at the time it is created, it is allowed to have mutable types stored in the immutable memory area, even though it is a mutable type.

For example:
```jule
struct Test {
    slice: []int
}

fn main() {
    let x = [1, 2, 3, 4, 5]
    let s = Test{
        slice: x,
    }
    outln(s)
}
```

In the example above, the variable `x` is an immutable slice. However, when a mutable field is assigned, it becomes possible to change immutable data because it is mutable. This is clearly a violation of immutability. However, it is guaranteed that the `Test` structure created for the `s` variable will be immutable because the `s` variable to which it will be assigned is immutable. Your compiler will be fine with this. However, if immutability is not guaranteed or the compiler cannot understand it, you will be explicitly warned about mutability.

In some cases, certain conditions may cause loss of responsiveness. For example, you create a struct literal and assign it to immutable memory. The structure will be considered immutable, but you cannot avoid the risk of interior mutability. If the field of ​​the struct you assign is within the scope of interior mutability, mutability control is still performed for that field.

Here is some code that causes this issue:
```jule
struct Foo {
    mut s: []int
}

fn main() {
    let x = [1, 2, 3, 4]
    let y = Foo{
        s: x // Interior mutability, risk.
    }
    _ = y
}
```

In the code above, the `s` field of the `Foo` structure poses a risk since it is within the scope of interior mutability. However, since there is no method that can be changed within the scope of interior mutability, the compiler will allow this. If the structure has any method, it will assume there is a risk of mutability, regardless of whether interior mutability is used.

Let's implement such a method for the `Foo` struct:
```jule
impl Foo {
    fn bar(self) {}
}
```

In this case, the structure has a method, even if it is empty. In order not to increase compilation costs too much, Jule does not examine this and considers it risky. In this case, your compiler will check the mutability risk for the `s` field that is within the scope of interior mutability and complain if necessary.