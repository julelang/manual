# std::jule::pattern

## Structs
```jule
struct FuncPattern {}
```
Pattern checker for functions and methods.

**Methods:**

`static fn dispose(f: &Fn): bool`\
Reports whether function is the reserved dispose function.

`static fn to_str(f: &Fn): bool`\
Reports whether function is the reserved to_str function.
