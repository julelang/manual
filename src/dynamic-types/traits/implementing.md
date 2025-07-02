# Implementing
To implement a trait to a structure, the following syntax needs to be applied:
```jule
impl TRAIT for STRUCT {
    // Implementations...
}
```
`TRAIT`: Trait to implement\
`STRUCT`: Structure implementing the trait

For example:
```jule
const PI = 3.14159265359

trait Shape {
    fn area(*self): f32
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    fn area(*self): f32 {
        ret f32(self.width * self.height)
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    fn area(*self): f32 {
        ret PI * self.r * self.r
    }
}

fn main() {
    let rect: Shape = Rectangle{90, 5}
    let circ: Shape = Circle{90.5}
    println(rect.area())
    println(circ.area())
}
```

## Partial Implementing

The `impl` statements not have to implement methods in body. You can give empty body for implementations. You have to implement trait methods for structure, that's the point. So you can implement traits with empty bodies, then implement all of them in one implementation body.

For example:

```jule
trait Foo {
    fn Foo(*self)
}

trait Bar {
    fn Bar(*self)
}

struct Baz {}

impl Foo for Baz {}
impl Bar for Baz {}

impl Baz {
    fn Foo(*self) {
        println("foo")
    }

    fn Bar(*self) {
        println("bar")
    }
}
```