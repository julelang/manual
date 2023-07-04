# Declarations
Each unused statement is tried not to be included in the C++ output. This does not pose much of a problem with global declarations and should not be a hindrance to compilation. But you have to use the declarations you make in your code blocks, if you don't the compiler will throw an error for each one. 

For example:
```
fn main() {
    let a: int = 0
}
```
The variable `a` seen is declared but unused. This will cause you to get an error by the compiler and not be able to compile the code. 