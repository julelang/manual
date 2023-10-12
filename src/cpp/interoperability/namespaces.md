# Namespaces

C++ definitions can sometimes be in a namespace. In this case, it is necessary to add the namespace for code generation to be correct. The `namespace` directive is used to specify the namespaces of the definitions.

**Supported types:**
- Variables
- Functions
- Structures

## Using `namespace` Directive

The `namespace` directive is simple to use. It precedes the supported definition and specifies the namespace in which the definition resides.

::: warning
Jule also uses the namespace you type directly in code generation, without checking if it writes the namespaces in the correct format. Adds `::` in addition to the namespace.
:::

For example:
```jule
#namespace "foo::bar"
cpp fn exit(code: int)

fn main() {
    const EXIT_CODE = 1
    cpp.exit(1)
}
```
For the above function call, the code `foo::bar::exit` will be generated.

## Accessing Static Defines

The `namespace` directive can be a kind of trick that can also be used to achieve static definitions.

For example:
```jule
#namespace "std::numeric_limits<jule::Int>"
cpp fn max(): int

fn main() {
    let int_max = cpp.max()
    outln(int_max)
}
```

In the example above, the `max` function actually points to the `jule::Int` (ie Jule's type `int`) instance of `std::numeric_limits`. So calls to the `max` function actually happen as `std::numeric_limits<jule::Int>::max()`.
