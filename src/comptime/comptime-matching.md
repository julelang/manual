# Comptime Matching

Comptime matching refers to matching at compile time using match statements without runtime costs. The first matching case will be placed in the code and the rest will be ignored. In this way, special algorithms can be placed in the code according to certain situations.

A comptime matching is defined like a typical matching statements. However, in addition, the `const` keyword must be included at the beginning of the definition. This declares that the iteration will be executed comptime. The `fall` keyword cannot be used in comptime matching.

## Conditional Matching

Conditional matching statements work in the same way as runtime match statements. It only accepts constant expressions that satisfy the equality check to match. If no expression is given, it matches true, like runtime match statements.

For example:
```jule
fn main() {
    const match {
    | false | false:
        println("foo")
    | true | false:
        println("bar")
    |:
        println("baz")
    }
}
```
Since the expression is not given in the example above, it will be mapped to true. As a result of this matching, the case containing the `println("bar")` call will be matched.

If you give it an expression, it will match that expression. As said, this expression must be a type that supports equality checking, that is, the `==` operator.

For example:
```jule
fn main() {
    const MagicNumber = 30
    const match MagicNumber {
    | 10:
        println("foo")
    | 20:
        println("bar")
    | 30:
        println("baz")
    |:
        println("foobarbaz")
    }
}
```
In the example above, matched with the `MagicNumber` variable, since it's value is `30`, it is matched with `30`. As a result, the case containing the `println("baz")` statement will be mapped.

## Type Matching

Comptime type-matching statements can be used to implement different algorithms for types. There is no runtime cost, matches are checked at compile time. Cases that do not match are not checked, so you will not encounter problems such as type mismatches and you will prevent semantic analysis errors for mismatched cases.

Types must always match exactly. For example, when checking a trait, not all types that implement the trait are accepted. Matching is always done with exactly the same types.

For example:

```jule
fn printKind[T]() {
    const match type T {
    | int:
        println("type is int")
    | uint:
        println("type is uint")
    |:
        println("unknown type")
    }
}
```
In the example above, the generic type `T` is matched at compile time and only the matching case is taken into account.

If the `comptimeTypeInfo` (it usually returned by the `comptime::TypeOf` function) structure is used for type matching, the type it contains information about will be used for matching.

For example:
```jule
use "std/comptime"

fn printType[T]() {
    const match type comptime::TypeOf(T) {
    | int:
        println("type is int")
    | uint:
        println("type is uint")
    |:
        println("unknown type")
    }
}
```
The above code maps the type returned from the `comptime::TypeOf` call for type `T`. This exhibits the same behavior as the example above, since the `comptimeTypeInfo` structure returned is for type `T`, `T` will still be used for matching.

## Compile-Time Panic

Comptime matching statements provides compile-time panic calls. You can issue a compile error with a panic call to prevent improper matches and fail the compilation. To call compile-time panic on inappropriate matches, call panic only in that case and do it using a constant string value.

For example:

```jule
fn printKind[T]() {
    const match type T {
    | bool:
        println("type is boolean")
    | int:
        println("type is integer")
    | f64:
        println("type is floating-point")
    | str:
        println("type is string")
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
