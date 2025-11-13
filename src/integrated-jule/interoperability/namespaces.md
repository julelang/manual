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
extern fn exit(code: int)

fn main() {
    extern.exit(1)
}
```
For the above function call, the code `foo::bar::exit` will be generated.

## Accessing Static Defines

The `namespace` directive can be a kind of trick that can also be used to achieve static definitions.

For example:
```jule
#namespace "std::numeric_limits<__jule_Int>"
extern fn max(): int

fn main() {
    let intMax = extern.max()
    println(intMax)
}
```

In the example above, the `max` function actually points to the `__jule_Int` (ie Jule's type `int`) instance of `std::numeric_limits`. So calls to the `max` function actually happen as `std::numeric_limits<__jule_Int>::max()`.
