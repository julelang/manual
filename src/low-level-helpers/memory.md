# Memory

The [`std/mem`](/std/mem) package is a package provided by the standard library and contains some low-level helpers. The Unsafe package is part of Jule. To be able to use it, it must be declared just like a use declaration.

## SizeOf
```jule
fn SizeOf(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given an expression, uses the type of the expression. Void and function types are not supported. The expression is evaluated to determine the type in compile-time and it will not be executed at runtime.

## AlignOf
```jule
fn AlignOf(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is a complete object type. If given an expression, uses the type of the expression. Void and function types are not supported. The expression is evaluated to determine the type in compile-time and it will not be executed at runtime.