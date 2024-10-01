# Packages
Jule treats each directory as a package. Each package has the ability to use its own defines.

For example: 
```jule
// file: ./hello_print.jule

fn helloPrint(name: str) {
    println("Hello " + name)
}
```
```jule
// file: ./main.jule

fn main() {
    helloPrint("Packages")
}
```
As shown in the example above, since both files are located in the same directory, they are considered the same package and therefore have access to each other's definitions.
::: warning
Be careful to design the packages according to their definition order, otherwise you may not get the result you expect.
:::
