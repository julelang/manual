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