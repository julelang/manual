# Structures

## Linking C Structures
As always, your links are reliable. Generics are supported in linking a structure. Not all fields have to be specified. If you're only going to use the struct by name, you can also declare it without the fields. The requirements here are limited to your needs and what needs to be declared for compliance.

For example:
```jule
extern struct my_struct{}
```
```jule
extern struct my_struct {
    x: int
    y: str
}
```

::: warning
- External structure's fields are public by default at all times. So if you want to export your external structure, use a type alias. No worry, the fields will be available. It is useful for writing low-level APIs.
- Your compiler will not automatically initialize with a default value to fields that are not assigned in the struct literal for external structs.
- If the external structures have a constructor, the generated IR may have compilation errors.
:::

### C++ Structures and Typedef C Structures

Structure linking is C-compliant by default. You can use the `typedef` directive to make this compatible with C++ or `typedef` C structures. The `typedef` directive enables generating compatible code for C++ and `typedef` C structures in code generation.

For example:

```jule
#typedef
extern struct my_struct {
    x: int
    y: str
}
```

### Linking Methods

Your C++ structures may have methods and you want to link them to Jule. To do this, struct fields might be a trick for you. You can define struct fields with the name of your methods in the function type.

For example:

Our `mystruct.hpp` file:
```cpp
struct MyStruct {
    __jule_Str text;

    void my_method(void) {
        std::cout << "My text is: " << text << std::endl;
    }
};
```

Our `main.jule` file:
```jule
extern use "mystruct.hpp"

#typedef
extern struct MyStruct {
    text:      str
    my_method: fn()
}

fn main() {
    let ms = extern.MyStruct{
        text: "Hello World",
    }
    ms.my_method()
}
```

---

If the struct is a typedef, say it's a typedef with attribute `typedef` for correct linking:
```jule
#typedef
extern struct my_struct {}
```

## Classes

In C++, structs and classes are almost the same thing. A structure linking is typically class-compatible. In other words, interoperability can also be used with class struct linking.

For example:

The C++ class:
```cpp
class MyClass {
public:
    __jule_Str data;
    __jule_Str magic_data;
};
```

The Jule code:
```jule
#typedef
extern struct MyClass {
    data:       str
    magic_data: str
}
```

## Using Different Field Identifiers

You can use different field identifiers for external structures in your Jule code. In fact, a kind of alias to the original identifier. Just use the `#export` compiler directive in your field tags to define an alias.

For example:
```jule
extern struct Foo {
	Bar: int `#export:"bar"`
	Baz: int `#export:"baz"`
}
```
In the example above, the `Bar` and `Baz` fields of the structure `Foo` will be exported as `bar` and `baz` in the C++ code. Note that they are unchecked semantically and unlimited, and you can even use an empty tag as an identifier.

::: warning
This directive will be applied only for external structures, not for Pure Jule.
:::