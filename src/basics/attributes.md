# Attributes
Attributes are used to mark definitions for specific reasons and to report them to the compiler. Each attribute is defined with comment pragma (`jule:`), the attribute itself must come immediately after pragma. 

For example:
```
//jule:attribute_a
fn my_func(): int {
    // Body ...
}
```

\
If you are giving more than one attribute, you should write each one in the same format. Note that an attribute cannot be given repeatedly. 

For example: 
```
//jule:attribute_a
//jule:attribute_b
fn my_func(): int {
    // Body...
}
```
::: warning
Not all attributes can be applied to all definitions. Each definition has valid attributes for it. 
:::