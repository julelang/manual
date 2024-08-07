# Comptime Iterations

<div class="warning-badge">experimental</div>

Comptime iterations are compile-time repeated iterations. To iterate in compile-time you should use iterable compile-time expressions.

To make iterable any comptime expression, you should call the `Range` function which is provided by [`std::comptime`](/std/comptime) library. In fact this is a design preference for readability and maintainability. This function only useable for iterations, you cannot store it with constant variables.

Iteration variables are useable and they will be constant. You can use relevant variables to access iterated data.

For example:
```jule
use comptime for std::comptime

struct MyStruct {
    Foo: int
    Bar: bool
    Baz: str
}

fn main() {
    const t = comptime::TypeOf(MyStruct)
    for _, field in comptime::Range(t.Fields()) {
        outln(field.Name())
    }
}
```

The example program above will prints names of `MyStruct`'s fields. In compile-time, fields are iterated and created new sub scope for each iteration. This may will increase your executable size because of code duplication, use it carefully.

::: warning
You cannot able to use `continue` or `break` keywords for compile-time iterations.
:::