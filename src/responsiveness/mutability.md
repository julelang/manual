# Responsive Mutability

Responsive mutability is the state of protection immutability when immutability is guaranteed. For example, if a slice is guaranteed to have an immutable memory area at the time it is created, it is allowed to have mutable types stored in the immutable memory area, even though it is a mutable type.

For example:
```jule
struct Test {
    slice: []int
}

fn main() {
    x := [1, 2, 3, 4, 5]
    s := Test{
        slice: x,
    }
    println(s)
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
    x := [1, 2, 3, 4]
    y := Foo{
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

## Functions

In functions, to provide flexibility and avoid unnecessary mutability requirements, type compatibility is more relaxed in terms of mutability. For example, when an anonymous function has a mutable parameter, Jule's type system does not treat this mutability as an inflexible and strict part of the type system. It does not enforce the rule that all compatible types must handle the same parameter as mutable.

In some cases, mutability is evaluated more loosely. For instance, if the parameter poses no mutability risk (e.g., the parameter type is immutable), whether the parameter is mutable or immutable does not result in a type mismatch.



For example:
```jule
fn main() {
	let mut a: fn(mut a: int)
	a = fn(mut a: int) {}
	a = fn(a: int) {}
}
```
In the code above, there is no type compatibility issue even if the function parameters exhibit different mutability, and the code compiles successfully. This is because the parameter is not a reference and its type is the immutable `int`. Therefore, whether the parameter is mutable or not has no effect on the original data (which passed as argument to the function) and is entirely specific to the function's body.

Even if the type is mutable, you will not encounter a type mismatch issue when using an immutable parameter. This is because the wrapper type specifies that the parameter is mutable, ensuring safety and indicating mutability. However, not every anonymous function is required to adhere to this, allowing immutable parameters to be used when desired.

For example:
```jule
fn main() {
	let mut a: fn(mut a: &int)
	a = fn(mut a: &int) {}
	a = fn(a: &int) {}
}
```
In the example above, the wrapper function type indicates that the parameter `a` is of the mutable type `&int` and exhibits mutable behavior. However, the subsequent two different assignments will not cause any type compatibility issues. This is because the mutability of the parameter is contextually flexible, allowing both mutable and immutable values to be used without violating the type system's constraints. This design promotes adaptability and simplifies handling different mutability scenarios while ensuring type safety.

As previously mentioned, mutability is a crucial tool for developers and should remain as much as possible under their control. If the assigned function does not require mutable behavior on a parameter, there is no need to force it to be defined as mutable solely because the type is specified that way. Developers should be able to use it as immutable. However, the wrapper function type makes it possible for the parameter to exhibit mutable behavior if needed. This ensures that any invocation can assume the parameter to always be mutable. In this way, flexibility is provided while maintaining safety.

:::info
This is not a deep responsiness; it is provided solely through the main function type. Exceptions like function parameters may be exempt from this flexibility.
:::

### Traits

Traits and methods are treated similarly to functions in this context. When a type implements a trait, the types of the methods implemented by the trait are checked just like function types.

For example:
```jule
trait Foo {
	fn baz(mut self, mut x: &int)
}

struct Bar{}

impl Foo for Bar {
	fn baz(self, x: &int) {}
}
```
In the example code above, the `Bar` struct correctly implements the `Foo` trait. Just like with functions, the same logic applies. The trait continues to wrap the struct with mutable behavior, but by taking advantage of flexibility, the `Bar` struct can behave immutably within its own type.