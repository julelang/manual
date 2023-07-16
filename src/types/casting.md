# Casting
Casting is an explicit conversion from one type to another between supported types.

To make a cast, you need to write the target data type you want to cast in parentheses, then you need to write the expression you want to cast. The expression to be cast should be declared in parentheses. A casting expression evaluates expression of between parentheses for itself.

Example: `(int)(3.14)`

For code example:
```
fn main() {
    let x: f32 = 3.14
    let y: int = (int)(x) // Casting
    outln(x)              // Prints 3.14
    outln(y)              // Prints 3
}
```
As you can see, the variable `x` is of type `f32` and the variable `y` is of type `int`. Normally, variable `y` cannot take variable `x` as a value. However, as seen for example, we can accept the value as `int` by explicitly casting. 

---

There is an alternative syntax for single data types.
It consists of using it like a function.

For example: `u64(10)`
