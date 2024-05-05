# Generics
Generic programming is an approach that offers instantiation for more than one type, using a generic static type system. The compiler checks the script for every combination you use and checks for errors.

If you don't use a generic function at all, you'll only get AST generation errors and will not be included in compilation like other unused definitions.

There are no restrictions; variadic parameters or recursive calls. It behaves like a normal function.

::: tip
Generic types are also assumed to be local in-scope type aliases. Therefore, they can be used for type annotation in variable and similar definitions in scope.
:::
::: warning
Generics are never supports shadowing.
:::

## Runtime Cost of Generics
Short answer: Generics hasn't any cost for runtime.

The cost of generics is that they typically add potentially additional time to compile times. When generics are evaluated as compile-time, there may be a cost, but the same is not true for runtime. Jule's generics cost nothing to runtime, you have no losses.

The generated code is created specifically for each generic combination, and each combination uses its own unique algorithms. There is no difference in runtime. Each generic type is determined at compile time and is compiled accordingly preserving the static type. So even if you use generic types at runtime, you get the performance of no-generic definitions at no cost. 

## Generics for Functions
::: warning
Genericed functions never can used as anonymous function or type annotation.
:::
```jule
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
```jule
fn example_func[T1, T2](a: T1, b: T2) {}
```

## Generics for Structure
Structures support generics. There is no additional syntax to use it. Combine only what you know with the struct declaration.

For example:
```jule
struct Position[T] {
    x: T
    y: T
}
```

### Genericed Structure Type Representation
Generic types must also be specified to specify an instance of a specific type of the position structure. Doing this is like calling a function.

For example:
```jule
let pos: Position[int]
```

## Dynamic Generic Type Annotation
Dynamic generic annotation can be used if all generic types are detectable by the compiler.

For example:
```jule
fn printMap[Key, Value](map: map[Key]Value) {
    for key, value in map {
        out(key)
        out(": ")
        outln(value)
    }
}

fn main() {
    let myMap: map[int]str = {
        0: "A",
        1: "B",
        2: "C",
    }
    printMap(myMap)
}
```
Dynamic generic annotation is used in the above example. Generic types are automatically detected from the data type of argument by compiler.

## Generic Type Matching

[Type-match](/common-concepts/control-flow/match-statement#type-matching) statements can be used to implement different algorithms for generic types. There is no runtime cost, matches are checked at compile time. Cases that do not match are not checked, so you will not encounter problems such as type mismatches and you will prevent semantic analysis errors for mismatched cases.

Types must always match exactly. For example, when checking a trait, not all types that implement the trait are accepted. Matching is always done with exactly the same types.

For example:

```jule
fn println[T](x: T) {
    match type T {
    | str:
        out("Str: ")
    | bool:
        out("Bool: ")
    | f64:
        out("64-bit float: ")
    | int:
        out("Integer: ")
    |:
        out("Unkown: ")
    }
    outln(x)
}

fn main() {
    println(10)
    println(true)
    println(20.5)
    println("MyString")
    println(any(nil))
}
```

### Compile-Time Panic

Generic type matching statements provides compile-time panic calls. You can issue a compile error with a panic call to prevent improper matches and fail the compilation. To call compile-time panic on inappropriate matches, call panic only in that case and do it using a constant string value.

For example:

```jule
fn printKind[T]() {
    match type T {
    | bool:
        outln("type is boolean")
    | int:
        outln("type is integer")
    | f64:
        outln("type is floating-point")
    | str:
        outln("type is string")
    |:
        panic("printKind[T]: unsupported type")
    }
}

fn main() {
    printKind[bool]()
    printKind[int]()
    printKind[f64]()
    printKind[any]()
}
```

The code in the above example cannot be compiled because the `any` type causes a compile-time panic call.
