# Types

## Linking Types
Type statements are used to external types. They can only bind in the global scope. An external type alias must always be a strict type alias. To bind, put the keyword `extern` at the beginning.

For example:
```jule
extern type char: byte
```

::: tip
If the types you use do not belong to Jule, if you are linking from C/C++, make sure to use the types you link, even if you have a compatible Jule type. This is important for your type safety.
:::

## Type Safety

For type safety reasons, external types are only compatible with external types. Cannot be used directly with any Jule type. For example, you cannot assign a `byte` type to an external `char` type, or vice versa, even if you have an external `char` type as `byte`. To do this, if you have an external type with a compatible type, you can cast it.

In addition, each casting process is within the scope of Unsafe Jule and cannot be performed with Safe Jule. Because incompatible types can be incorrectly bound and cast, Jule has no responsibility for this, so it is considered an unsafe action.

For example:
```jule
extern type char: byte

extern fn get_char(): extern.char

fn main() {
	b := unsafe { byte(extern.get_char()) }
	println(b)
}
```

The above code should execute without problems, but removing casting will result in a compiler error regarding type safety.

::: info
Untyped constants can be assigned and cast within Safe Jule. Any typed value, including typed constant literals, must be cast using Unsafe Jule.
:::

### Why do we need this safety?

To achieve full compatibility with C types, your compiler encourages you to use only those types. There is an important and simple reason for this: type safety. Even if they are fully compatible, if your compiler treated them like Jule types, it would be easier to get compiler errors, and you would run into various problems.

For example:
```jule
extern type char: byte

extern unsafe fn printf(*extern.char)

fn cprint(s: str) {
    unsafe { extern.printf((*extern.char)(&s[0])) }
}

fn main() {
    cprint("Hello World\n\x00")
}
```

The code above prevents you from passing the `*byte` type directly to `*extern.char` as your compiler encourages you to be safe. This is an important incentive to make the generated IR compilable. If your compiler didn't do this and considered it compatible, the backend-compiler would have told you that the type `__jule_U8*` and `char*` are not compatible.

## Type Compatibility

There is no direct compatibility between Jule types and C/C++ types. Definitions within the Jule API may exhibit automatic conversion to C/C++ types, and therefore, these types can be used directly with each other. But it is a poorly tested and unreliable method. To give an example of type conversion, the API's `__jule_Str` i.e. `str` type in Jule can often be used with C++'s `std::string` type and C's `char*` type. However, Jule strings are not implemented with C-string logic and are not NULL terminated, so using them with types such as `char*` can be risky.

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
```jule
extern use "myclass.hpp"

#typedef
extern struct MyClass {
    data:       str
    magic_data: str
    c_data:     str
}

fn main() {
    let mc = extern.MyClass{
        data: "my data",
        magic_data: "hello world",
        c_data: "hello c strings",
    }
    println(mc.data)
    println(mc.magic_data)
    println(mc.c_data)
}
```

In the above example, your compiler does not detect the types of fields of the external class and generates code accordingly; your compiler behaves as it always does. The generated code works in harmony with each other as it can be converted automatically.

While this type compatibility may work well (but risky for some types like strings) with most primitive types such as `bool`, `str`, and arithmetic data types, we always recommend writing a wrapper for existing C++ classes, etc.

See [wrappers](/api/integrated-jule/wrappers) section of API manual.

## Strings

Strings may be one of the most used types for interoperability among primitive types, but they also require attention. If you have C/C++ knowledge, you know that strings are NULL-terminated. In this way, the end of the strings is clear, and you can perform many functions without requiring length data. But this causes some performance issues, so Jule does not use NULL-terminated string logic.

Jule strings are designed for length-based. This means that you are heavily dependent on the length data, so using strings as NULL-terminated alone within the scope of interoperability may cause some problems. Conversion of types such as `std::string` should be safe, but when using C-string, that is, `char*` type, it is risky because it is not NULL-terminated.

If you are going to use C strings, use length-based functions, such as `strncmp` instead of `strcmp`. For some functions, the string must be NULL-terminated. In this case, Jule provides you with the possibility for a safe conversion. Using the integrated Jule package you can convert a string to a null terminated byte slice and the `char*` type becomes safe for interoperability.

For example:
```jule
use "std/integ"
use "std/integ/c"

extern unsafe fn printf(s: *c::Char)

fn main() {
    s := "hello world\n"
    sb := integ::BytesFromStr(s)
    unsafe {
        extern.printf((*c::Char)(&sb[0]))
    }
}
```
The above example includes a simple C-string compatibility conversion. The `BytesFromStr` function returns the given string as a NULL-terminated byte-slice. Since this is compatible with the `char*` type, it can be safely used as a C-string with a pointer.

Considering that strings are UTF-8 byte encoded, you can also use string pointers directly if your strings are NULL-terminated to avoid unnecessary allocations.

For example:
```jule
s := "hello world\n\x00"
unsafe {
    extern.printf((*c::Char)(&s[0]))
}
```
The version of the above example using a string. While this is not recommended, it is something that can be done for important reasons, such as efficiency and performance concerns, but Jule does not guarantee this, and the responsibility lies with the developer.

### Conversions

Jule strings support bidirectional conversion between `const char*`, `char*`, and `std::string`. However, due to security concerns, these conversions often result in new memory allocations. Therefore, for a more performant and memory-efficient approach, you may need to delve deeper.

- Jule string -> `char*` and `const char*`:\
No allocation occurs. It returns a pointer to the first character of the Jule string. Since heap allocation is not guaranteed (string may be a read-only literal), any mutation may lead to memory errors. Additionally, as mentioned earlier, the string is not NULL-terminated, so it must be used with caution.
- Jule string -> `std::string`:\
An allocation occurs because `std::string` will allocate new memory and copy the value of the Jule string. Since Jule strings use shared memory and are tracked by the GC, maintaining this behavior with `std::string` is not possible because `std::string` does not have Jule's GC. Alternative approaches may be adopted using custom allocators, but this is left to the developer.
- `char*` and `const char*` -> Jule string:\
Jule string creates a new allocation and copies the content from the char pointer. The important point is that the char pointer must be NULL-terminated. Jule string calculates its length based on the NULL-termination.
- `std::string` -> Jule String:\
Jule string creates a new allocation and copies the content from the `std::string`.