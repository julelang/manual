# Types

## Linking Types
Although it is possible to link any typedef, these type aliases are not like standard aliases, for example they cannot be used as an alias for a struct if you use them in an expression. These type aliases are for linking unavoidable types to Jule.

For example: 
```
cpp type char: byte
```

::: tip
If the types you use do not belong to Jule, if you are linking from C/++, make sure to use the types you link, even if you have a compatible Jule type. This is important for your type safety.
:::

## Linking Type Aliases

Type alias linking is the same as type linking.

For example:
```
cpp type char: byte
cpp type CPTR: *cpp.char
```

## Type Safety

For type safety reasons, linked types are only compatible with linked types. Cannot be used directly with any Jule type. For example, you cannot assign a `byte` type to a linked `char` type, or vice versa, even if you have linked the `char` type as `byte`. To do this, if you have linked with a compatible type, you can cast it.

For example:
```
cpp type char: byte

cpp fn get_char(): cpp.char

fn main() {
	let b: byte = byte(cpp.get_char())
	outln(b)
}
```

The above code should execute without problems, but removing casting will result in a compiler error regarding type safety.

### Why do we need this safety?

To achieve full compatibility with C types, your compiler encourages you to use only those types. There is an important and simple reason for this: type safety. Even if they are fully compatible, if your compiler treated them like Jule types, it would be easier to get compiler errors and you would run into various problems.

For example:
```
cpp type char: byte

cpp unsafe fn printf(*cpp.char)

fn cprint(s: str) {
    unsafe { cpp.printf((*cpp.char)(&s[0])) }
}

fn main() {
    cprint("Hello World\n")
}
```

The code above prevents you from passing the `*byte` type directly to `*cpp.char` as your compiler encourages you to be safe. This is an important incentive to make the generated IR compilable. If your compiler didn't do this and considered it compatible, the backend-compiler would have told you that the type `jule::U8*` and `char*` are not compatible.

## Type Compatibility

There is no direct compatibility between Jule types and C/C++ types. Definitions within the Jule API may exhibit automatic conversion to C/C++ types and therefore these types can be used directly with each other. But it is a poorly tested and unreliable method. To give an example of type conversion, the API's `jule::Str` i.e. `str` type in Jule can often be used with C++'s `std::string` type and C's `char*` type.

For example:

C++ class:
```cpp
class MyClass {
public:
    std::string data;
    std::string magic_data;
    const char *c_data;
};
```

Jule code:
```
use cpp "myclass.hpp"

//jule:typedef
cpp struct MyClass {
    data: str
    magic_data: str
    c_data: str
}

fn main() {
    let mc = cpp.MyClass{
        data: "my data",
        magic_data: "hello world",
        c_data: "hello c strings",
    }
    outln(mc.data)
    outln(mc.magic_data)
    outln(mc.c_data)
}
```

In the above example, your compiler does not detect the types of fields of the linked class and generates code accordingly, your compiler behaves as it always does. The generated code works in harmony with each other as it can be converted automatically.

While this type compatibility may work well with most primitive types such as `bool`, `str`, and arithmetic data types, we always recommend writing a wrapper for existing C++ classes or etc.

<strong>Why wrappers are recommended way?</strong>

- You can add additional functionality to your wrapper with the Jule API.
- Having a fully compatible Jule wrapper from a single point makes it easy to make changes and new additions.
- You can debug more easily when any changes occur in the structure you are wrapping.
- You gain more control over the structure you wrap.
