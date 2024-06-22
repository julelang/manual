# Comptime Matching

Comptime matching refers to matching at compile time using match statements without runtime costs. The first matching case will be placed in the code and the rest will be ignored. In this way, special algorithms can be placed in the code according to certain situations.

The `fall` keyword cannot be used during any comptime matching.

## Conditional Matching

An ordinary match statement can also be used to check conditions. The way to do this is to not give any statements and write conditions in cases. This is an elegant way to do condition matching at runtime. Comptime matching is done in the same way. To enable comptime matching only, the constant `true` expression must be given.

When the expression is constant `true`, your compiler will treat it as comptime matching. In this context, all case expressions must be constant boolean.

Providing any different constant expression does not activate comptime matching. Only the literal `true` ensures this. The main reason for this is that the distinction between runtime and comptime can be made cleanly, the same is not true for other expressions.

Any case whose statement is not accepted as correct is not checked.

For example:
```jule
const Foo = false
const Bar = true
const Baz = true

fn main() {
    match true {
    | Foo && Bar:
        outln("FooBar")
    | Bar && !Baz:
        outln("Bar")
    | Baz:
        outln("Baz")
    |:
        panic("not implemented")
    }
}
```

## Generic Type Matching

Comptime matching statements can be used to implement different algorithms for generic types. There is no runtime cost, matches are checked at compile time. Cases that do not match are not checked, so you will not encounter problems such as type mismatches and you will prevent semantic analysis errors for mismatched cases.

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

## Compile-Time Panic

Comptime matching statements provides compile-time panic calls. You can issue a compile error with a panic call to prevent improper matches and fail the compilation. To call compile-time panic on inappropriate matches, call panic only in that case and do it using a constant string value.

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
