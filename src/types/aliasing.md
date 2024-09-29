# Aliasing
Type aliases is an alias for existing types defined by developer. When these aliases are used, they qualify the types they represent.

For example:
```jule
type int32: i32

fn main() {
    let myInt: int32 = 100
    outln(myInt)
}
```
As seen in the example above, there is an alias definition of `int32` for the `i32` data type. The keyword `type` comes first to define an alias. Then comes the name you want to give and which type it will represent. This alias will now represent `i32` when used.

In addition, it seems that this alias is used in variable definition. This is because the compiler recognizes the default types builtin. If your type alias represents a builtin definition, your type alias will not be detected as a type. For this reason, it is a more useful approach to specify specifically.

When defining a type alias, only the following types can be given as the type to represent:
- Builtin Data Types
- Type Aliases
