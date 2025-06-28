# Memory

The [`std/mem`](/std/mem) package is a package provided by the standard library and contains some low-level helpers. The Unsafe package is part of Jule. To be able to use it, it must be declared just like a use declaration.

## SizeOf
```jule
fn SizeOf(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given expression, uses type of expression. Void and function types are not supported. The expression is evaluated to determine type in compile-time and will not executed at runtime.

## AlignOf
```jule
fn AlignOf(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is either complete object type. If given expression, uses type of expression. Void and function types are not supported. The expression is evaluated to determine type in compile-time and will not executed at runtime.