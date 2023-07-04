# Generics
Generic programming is an approach that offers instantiation for more than one type, using a generic static type system. The compiler checks the script for every combination you use and checks for errors.

If you don't use a generic function at all, you'll only get AST generation errors and will not be included in compilation like other unused definitions.

There are no restrictions; variadic parameters or recursive calls. It behaves like a normal function.

No new keyword has been introduced to denote generic types, it is possible to add generic types with the syntax difference of an existing feature type aliases.

::: tip
Generic types are also assumed to be local in-scope type aliases. Therefore, they can be used for type annotation in variable and similar definitions in scope.
:::
::: warning
Generics are never supports shadowing.
:::

## Generics for Functions
::: warning
Genericed functions never can used as anonymous function or type annotation.
:::
```
fn sum[T](a: T, b: T) T {
    let x: T = a + b
    ret x
}

fn main() {
    outln(sum[int](10, 20))  // 30
    outln(sum[f32](10, 4.2)) // 14.2
    outln(sum[f64](4.67, 2)) // 6.67
}
```
There is a use for a generic type annotation, as seen in the example above. Use the brackets and write the identifier of the generic type. To specify a type for a generic type, you specify the data type in brackets.

---

To specify multiple different generic types, comma-separation syntax are available:
```
fn example_func[T1, T2](a: T1, b: T2) {}
```

## Generics for Structure
Structures support generics. There is no additional syntax to use it. Combine only what you know with the struct declaration.

For example:
```
struct Position[T] {
    x: T
    y: T
}
```

### Genericed Structure Type Representation
Generic types must also be specified to specify an instance of a specific type of the position structure. Doing this is like calling a function.

For example:
```
let pos: Position[int]
```

## Dynamic Generic Type Annotation
Dynamic generic annotation can be used if all generic types are detectable by the compiler.

For example:
```
fn print_map[Key, Value](map: [Key:Value]) {
    for key, value in map {
        out(key)
        out(": ")
        outln(value)
    }
}

fn main() {
    ket mymap = [int:str]{
        0: "A",
        1: "B",
        2: "C",
    }
    print_map(mymap)
}
```
Dynamic generic annotation is used in the above example. Generic types are automatically detected from the data type of argument by compiler. 