# Deprecation

Especially if you are developing a 3rd party package, you may need to deprecate some codes over time. You can announce this through your own channels, but it may not be possible to fully reach every user. However, it is safer and an additional reminder for users to know that the codes they use are deprecated. Therefore, Jule provides the `#deprecated` directive. When used, this directive documents an error in accessing the supported definition and warns the developer that you (the package developers) have deemed this code deprecated.

For example:
```jule
fn bar() {
    // ...
}

#deprecated
fn foo() {
    // ...
}

fn main() {
    foo()
}
```

The so-called `foo` function in the above code has become deprecated with the addition of the `bar` function. And the corresponding `foo` function is declared deprecated with the directive. Now any code that tries to access the `foo` definition will obviously cause a compiler error and warn the developer about it.

If you want to make a specific statement about deprecated usage, use a string literal and write your message.

For example:
```jule
fn bar() {
    // ...
}

#deprecated "use bar() function instead of foo()"
fn foo() {
    // ...
}

fn main() {
    foo()
}
```

## Using Deprecated Codes

As a package user, you may want to continue using a deprecated code, Safe Jule does not allow you to do this, but you can use a deprecated code using Unsafe Jule. All you have to do is switch to the Unsafe Jule rules with the `unsafe {}` scope.
