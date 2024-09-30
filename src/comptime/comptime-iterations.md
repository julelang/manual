# Comptime Iterations

<div class="warning-badge">experimental</div>

Comptime iterations are compile-time repeated and range-based iterations. To iterate in compile-time you should use iterable compile-time expressions. 

Iteration variables are useable and they will be constant. You can use relevant variables to access iterated data.

A comptime iteration is defined like a typical range-based iteration. However, in addition, the `const` keyword must be included at the beginning of the definition. This declares that the iteration will be executed comptime. You cannot able to use `continue` or `break` keywords for compile-time iterations.

The types provided by the [`std/comptime`](/std/comptime) package that can be used in iterations are explained in the package documentation.

Example to comptime iterations:
```jule
use "std/comptime"

struct MyStruct {
    Foo: int
    Bar: bool
    Baz: str
}

fn main() {
    const t = comptime::TypeOf(MyStruct)
    const for _, field in t.Decl().Fields() {
        outln(field.Name())
    }
}
```

The example program above will prints names of `MyStruct`'s fields. In compile-time, fields are iterated and created new sub scope for each iteration. This may will increase your executable size because of code duplication, use it carefully.