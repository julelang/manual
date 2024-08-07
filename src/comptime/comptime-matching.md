# Comptime Matching

Comptime matching refers to matching at compile time using match statements without runtime costs. The first matching case will be placed in the code and the rest will be ignored. In this way, special algorithms can be placed in the code according to certain situations.

To make comptime-matching , you should call the `Match` function which is provided by [`std::comptime`](/std/comptime) library. In fact this is a design preference for readability and maintainability. This function only useable for match statements, you cannot store it with constant variables.

The `fall` keyword cannot be used during any comptime matching.

The expression taken by the `Match` function is handled according to the matching type in which it is used. So, there may be some behavioral differences or restrictions.

## Conditional Matching

Like runtime matching statements, comptime matching statements behave the same way. All it does is match, i.e. equality check. 

Any case whose statement is not accepted as correct is not checked.

You can match any constant expression with comptime matching, including `comptimeTypeInfo`. A `comptimeTypeInfo` mapping is treated roughly like `a == b`.

For example:
```jule
use comptime for std::comptime

fn match1() {
    match comptime::Match(comptime::TypeOf(int)) {
    | comptime::TypeOf(int):
        outln("foo")
    | comptime::TypeOf(bool):
        outln("bar")
    |:
        outln("baz")
    }
}

fn match2() {
    match comptime::Match(20) {
    | 20:
        outln("foo")
    | 40:
        outln("bar")
    |:
        outln("baz")
    }
}
```

## Type Matching

Comptime type-matching statements can be used to implement different algorithms for types. There is no runtime cost, matches are checked at compile time. Cases that do not match are not checked, so you will not encounter problems such as type mismatches and you will prevent semantic analysis errors for mismatched cases.

Types must always match exactly. For example, when checking a trait, not all types that implement the trait are accepted. Matching is always done with exactly the same types.

If the argument taken by the `comptime::Match` function is an expression, the type of the expression is matched. For example, the value `20` is considered as type `int`. If the argument is a type declaration, that type is matched. If `comptimeTypeInfo` is matched, the type it carries information about is used for matching.

For example:

```jule
use comptime for std::comptime

fn typeMatch1() {
    match type comptime::Match(20) {
    | int:
        outln("foo")
    | bool:
        outln("bar")
    |:
        outln("baz")
    }
}

fn typeMatch2() {
    match type comptime::Match(comptime::TypeOf(int)) {
    | int:
        outln("foo")
    | bool:
        outln("bar")
    |:
        outln("baz")
    }
}
```

## Compile-Time Panic

Comptime matching statements provides compile-time panic calls. You can issue a compile error with a panic call to prevent improper matches and fail the compilation. To call compile-time panic on inappropriate matches, call panic only in that case and do it using a constant string value.

For example:

```jule
use comptime for std::comptime

fn printKind[T]() {
    match type comptime::Match(T) {
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
