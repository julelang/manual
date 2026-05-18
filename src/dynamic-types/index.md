# Dynamic Types

In Jule, types are normally known at compile time.
However, some situations require a type to be determined or changed at runtime.
To support such use cases, Jule provides dynamic types.

Dynamic types are types that can store values of arbitrary types, either without restrictions or under specific constraints, and allow the stored type to change at runtime.
