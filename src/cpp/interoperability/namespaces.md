# Namespaces

C++ definitions can sometimes be in a namespace. In this case, it is necessary to add the namespace for code generation to be correct. The `namespace` directive is used to specify the namespaces of the definitions.

**Supported types:**
- Functions
- Structures

## Using `namespace` Directive

The `namespace` directive is simple to use. It precedes the supported definition and specifies the namespace in which the definition resides.

::: warning
Jule also uses the namespace you type directly in code generation, without checking if it writes the namespaces in the correct format. Adds `::` in addition to the namespace.
:::

For example:
```jule
//jule:namespace foo::bar
cpp fn exit(code: int)

fn main() {
    const EXIT_CODE = 1
    cpp.exit(1)
}
```
For the above function call, the code `foo::bar::exit` will be generated.