# Traits
Traits can be used to represent common behaviors. As a result of the implementation of a trait by one or more structures that exhibit common behavior, the trait it applies to becomes usable wherever it is used. A trait can only contain functions. A trait can be `nil`

## Define a Trait
Functions in a trait should only exist as prototypes (declaration of a trait, not a definition).

For example:
```jule
trait Person {
    fn name(self): str
    fn age(self): u8
}
```
All constructs that implement the trait above, must have the methods `name(self): str` and `age(self): u8`.

## Comparing Traits
During a comparison of traits: equal traits return true if two traits use the same allocation (both have the same pointer address), false if not. 

## Compatibility

A trait may be eligible to be cast into another trait, but there are some conditions. Most importantly, they exhibit the same behavior. In other words, the same definitions must be present in both. And they must be applied to the same structures. If these conditions are met, one trait can be cast into another.

For example:
```jule
trait Foo {
    fn foo(self)
}

trait Bar {
    fn bar(self)
}

trait FooBar {
    Foo
    Bar
}

struct Baz {}

impl FooBar for Baz {
    fn foo(self) { println("foo") }
    fn bar(self) { println("bar") }
}

fn main() {
    let a: FooBar = Baz{}
    a.foo()
    a.bar()
    let b: Foo = a
    b.foo()
    let c: Bar = a
    c.bar()
}
```