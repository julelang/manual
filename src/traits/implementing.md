# Implementing
To implement a trait to a structure, the following syntax needs to be applied:
```jule
impl TRAIT for STRUCT {
    // Implementations...
}
```
`TRAIT`: Trait to implement
`STRUCT`: Structure implementing the trait

For example:
```jule
const PI = 3.14159265359

trait Shape {
    fn area(self): f32
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    fn area(self): f32 {
        ret f32(self.width * self.height)
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    fn area(self): f32 {
        ret PI * self.r * self.r
    }
}

fn main() {
    let rect: Shape = Rectangle{90, 5}
    let circ: Shape = Circle{90.5}
    outln(rect.area())
    outln(circ.area())
}
```