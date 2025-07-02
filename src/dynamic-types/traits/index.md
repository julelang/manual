# Traits
Traits can be used to represent common behaviors. As a result of the implementation of a trait by one or more structures that exhibit common behavior, the trait it applies to becomes usable wherever it is used. A trait can only contain functions. A trait can be `nil`

It only supports equals (==) and not equals (!=) operators. Panics if type is uncomparable.

`x == nil`: true if trait is `nil`, not checks whether data is `nil`\
`x == y`: true if x and y is `nil`\
`x == y`: true if x and y has same data type and returns true of equals operator of data type for two value

## Define a Trait
Functions in a trait should only exist as prototypes (declaration of a trait, not a definition).

For example:
```jule
trait Person {
    fn name(*self): str
    fn age(*self): u8
}
```
All constructs that implement the trait above, must have the methods `name(*self): str` and `age(*self): u8`.

## Compatibility

A trait may be eligible to be cast into another trait, but there are some conditions. Most importantly, they exhibit the same behavior. In other words, the same definitions must be present in both. And they must be applied to the same structures. If these conditions are met, one trait can be cast into another.

For example:
```jule
trait Foo {
    fn foo(*self)
}

trait Bar {
    fn bar(*self)
}

trait FooBar {
    Foo
    Bar
}

struct Baz {}

impl FooBar for Baz {
    fn foo(*self) { println("foo") }
    fn bar(*self) { println("bar") }
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