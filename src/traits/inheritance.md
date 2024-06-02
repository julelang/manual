# Inheritance

Traits that exhibit the same common behavior can inherit other traits that characterize the same common behavior. Inherited traits must have the same definitions for the same identifiers, any mismatches will prevent inheritance.

To inherit a trait, type the trait you want to inherit when defining a trait.

For example:
```jule
trait Foo {
    fn Foo(self)
}

trait Bar {
    fn Bar(self)
}

trait Baz {
    Foo
    Bar

    fn Baz(self)
}

struct Test {}

impl Baz for Test {}

impl Test {
    fn Foo(self) { outln("foo") }
    fn Bar(self) { outln("bar") }
    fn Baz(self) { outln("baz") }
}

fn main() {
    let a: Baz = Test{}
    a.Foo()
    a.Bar()
    a.Baz()
}
```
Example at above, the `Baz` trait inherits the `Foo` and `Bar` traits. Additionally defines the `Baz` method. The structure will implement the `Foo` and `Bar` traits too when implements the `Baz` trait.
