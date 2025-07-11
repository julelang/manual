# Comptime Reflection

Jule does not store any metadata about the program at runtime. Therefore, it is not possible to implement runtime reflection by default. However, you can still have reflection capabilities at compile time thanks to the compile-time functions that Jule provides.

Compile-time reflection may not be as comprehensive as runtime reflection in some cases, but it is still useful and functional for many purposes. Also, it is less costly and more performant than runtime reflection.

To access comptime reflection functions with Jule, the [`std/comptime`](/std/comptime) library must be used. This library is provided by Jule by default and provides some functionality to be used at compile time.

Some things you can do with compile-time reflection:
- Examine the structures, process identifiers and types
- Examine the fields of enums, process identifiers and types
- Examine the return types and parameters of functions
- Examine pointers and the types they point to
- Examine expressions and manipulate them in comptime
- Convert data types to string
- Check if data types are the same

## Introduction to Reflection for Types

To start examine any type, use `comptime::TypeOf` function. This function provided by the [`std/comptime`](/std/comptime) library and it's essential for type examination.

For example:

```jule
use "std/comptime"

fn FooBar[T](x: T) {
    const t = comptime::TypeOf(T)
    // ...
}
```

The `comptime::TypeOf` function will return type information wrapper for the type. This wrapper provides some functionalities according the type.

The type information wrapper provides only functionalities for the type. Not declaration, generic instances and other analysis-related information.

## Introduction to Reflection for Values

To start examine any value, use `comptime:ValueOf` function. This function provided by the [`std/comptime`](/std/comptime) library and it's essential for value examination.

For example:

```jule
use "std/comptime"

fn FooBar[T](x: T) {
    const v = comptime::ValueOf(x)
    // ...
}
```

The `comptime::ValueOf` function will return value information wrapper for the value. This wrapper provides some functionalities according the value.

The value information wrapper provides functionalities only for the value. Not declaration, generic instances and other analysis-related information.

### Unwrap Expression of Wrapper

Since the function designed for comptime, expressions of `comptime::ValueOf` will not be executed at runtime by default. To do this, you should call the `Unwrap` method of the value information wrapper. The `Unwrap` method is unwraps expression of value information wrapper to called statement, so expression will be executed ad runtime.

This unwrap functionality provides additional benefits for value reflection such as dynamic access to struct fields. Thus, not just examination, we have dynamic handled expressions at comptime.

For example:

```jule
use "std/comptime"

fn PrintFields[T](s: T) {
    const t = comptime::TypeOf(T)
    const match {
    | t.Kind() != comptime::Struct:
        panic("PrintFields[T]: T is not struct")
    }
    const v = comptime::ValueOf(s)
    const fields = t.Decl().Fields()
    const for _, field in fields {
        println(v.Field(field.Name()).Unwrap())
    }
}
```

The example above, defines the `PrintFields` function with generic type which is prints value of struct's fields. Therefore The parameter `s` should be structure, so the type `T` is structure.

Function implementation checks whether type `T` is struct and then prints values of struct fields using dynamic access with power of the `comptime::ValueOf` function. Thus, the `PrintFields` function can print fields of all structures without runtime reflection cost.

## Example Programs

<details>
<summary>Print Field Names of Struct</summary>

```jule
use "std/comptime"

struct FooBarBaz {
    Foo: str
    Bar: int
    Baz: bool
}

fn main() {
    const fields = comptime::TypeOf(FooBarBaz).Decl().Fields()
    const for _, field in fields {
        println(field.Name())
    }
}
```

</details>

<details>
<summary>Print Field Types of Struct</summary>

```jule
use "std/comptime"

struct FooBarBaz {
    Foo: str
    Bar: int
    Baz: bool
}

fn main() {
    const fields = comptime::TypeOf(FooBarBaz).Fields()
    const for _, field in fields {
        println(field.Type().Str())
    }
}
```

</details>

<details>
<summary>Basic Generic Type Examination</summary>

```jule
use "std/comptime"

cpp type Int: int

fn IsNumeric[T](): bool {
    const t = comptime::TypeOf(T)
    const k = t.Kind()
    ret k == comptime::Int ||
        k == comptime::Uint ||
        k == comptime::Uintptr ||
        k == comptime::I8 ||
        k == comptime::I16 ||
        k == comptime::I32 ||
        k == comptime::I64 ||
        k == comptime::U8 ||
        k == comptime::U16 ||
        k == comptime::U32 ||
        k == comptime::U64 ||
        k == comptime::F32 ||
        k == comptime::F64
}

fn IsValidType[T](): bool {
    const t = comptime::TypeOf(T)
    const match {
    | t.Bind():
        ret false
    |:
        ret IsNumeric[T]()
    }
}

fn main() {
    println(IsValidType[int]())
    println(IsValidType[bool]())
    println(IsValidType[uintptr]())
    println(IsValidType[u8]())
    println(IsValidType[i32]())
    println(IsValidType[cpp.Int]())
}
```

</details>

<details>
<summary>Fill Arrays with Responsive Size</summary>

```jule
use "std/comptime"

fn Fill[Arr, Value](mut &arr: Arr, mut elem: Value) {
    const t = comptime::TypeOf(Arr)
    const match {
    | t.Kind() != comptime::Array:
        panic("type Arr is not an array")
    | t.Value() != comptime::TypeOf(Value):
        panic("type Value is not same with type Arr's value type")
    }
    mut i := 0
    for i < t.Size(); i++ {
        arr[i] = elem
    }
}

fn main() {
    let mut arr: [5]int
    Fill(arr, 10)
    for _, x in arr {
        println(x)
    }
}
```

</details>

<details>
<summary>Print All Public Fields of Struct Instance</summary>

```jule
use "std/comptime"

struct FooBarBaz {
    Foo: int
    Bar: str
    Baz: bool
}

fn printPublicFields[T](x: T) {
    const t = comptime::TypeOf(T)
    const match {
    | t.Kind() != comptime::Struct:
        panic("type T is not a struct")
    }
    const fields = t.Decl().Fields()
    const expr = comptime::ValueOf(x)
    const for _, field in fields {
        const match {
        | field.Public():
            println(expr.Field(field.Name()).Unwrap())
        }
    }
}

fn main() {
    fbz := FooBarBaz{
        Foo: 89,
        Bar: "comptime",
        Baz: true,
    }
    printPublicFields(fbz)
}
```

</details>