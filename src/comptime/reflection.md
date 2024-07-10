# Comptime Reflection

Jule does not store any metadata about the program at runtime. Therefore, it is not possible to implement runtime reflection by default. However, you can still have reflection capabilities at compile time thanks to the compile-time functions that Jule provides.

Compile-time reflection may not be as comprehensive as runtime reflection in some cases, but it is still useful and functional for many purposes. Also, it is less costly and more performant than runtime reflection.

To access comptime reflection functions with Jule, the [`std::comptime`](/std/comptime) library must be used. This library is provided by Jule by default and provides some functionality to be used at compile time.

Some things you can do with compile-time reflection:
- Examine the structures, process identifiers and types
- Examine the fields of enums, process identifiers and types
- Examine the return types and parameters of functions
- Examine pointers and the types they point to
- Examine expressions and manipulate them in comptime
- Convert data types to string
- Check if data types are the same

## Example Programs

<details>
<summary>Print Field Names of Struct</summary>

```jule
use comptime for std::comptime

struct FooBarBaz {
    Foo: str
    Bar: int
    Baz: bool
}

fn main() {
    const fields = comptime::TypeOf(FooBarBaz).Fields()
    for _, field in comptime::Range(fields) {
        outln(field.Name())
    }
}
```

</details>

<details>
<summary>Print Field Types of Struct</summary>

```jule
use comptime for std::comptime

struct FooBarBaz {
    Foo: str
    Bar: int
    Baz: bool
}

fn main() {
    const fields = comptime::TypeOf(FooBarBaz).Fields()
    for _, field in comptime::Range(fields) {
        outln(field.Type().Str())
    }
}
```

</details>

<details>
<summary>Basic Generic Type Examine</summary>

```jule
use comptime for std::comptime

cpp type Int: int

fn IsNumeric[T](): bool {
    const t = comptime::TypeOf(T)
    const k = t.Kind()
    ret k == comptime::Kind.Int ||
        k == comptime::Kind.Uint ||
        k == comptime::Kind.Uintptr ||
        k == comptime::Kind.I8 ||
        k == comptime::Kind.I16 ||
        k == comptime::Kind.I32 ||
        k == comptime::Kind.I64 ||
        k == comptime::Kind.U8 ||
        k == comptime::Kind.U16 ||
        k == comptime::Kind.U32 ||
        k == comptime::Kind.U64 ||
        k == comptime::Kind.F32 ||
        k == comptime::Kind.F64
}

fn IsValidType[T](): bool {
    const t = comptime::TypeOf(T)
    match true {
    | t.Binded():
        ret false
    }
    ret IsNumeric[T]()
}

fn main() {
    outln(IsValidType[int]())
    outln(IsValidType[bool]())
    outln(IsValidType[uintptr]())
    outln(IsValidType[u8]())
    outln(IsValidType[i32]())
    outln(IsValidType[cpp.Int]())
}
```

</details>

<details>
<summary>Fill Arrays with Responsive Size</summary>

```jule
use comptime for std::comptime

fn Fill[Arr, Elem](mut &arr: Arr, mut elem: Elem) {
    const t = comptime::TypeOf(Arr)
    match true {
    | t.Kind() != comptime::Kind.Array:
        panic("type Arr is not an array")
    | t.Elem() != comptime::TypeOf(Elem):
        panic("type Elem is not same with type Arr's element type")
    }
    let mut i = 0
    for i < t.Size(); i++ {
        arr[i] = elem
    }
}

fn main() {
    let mut arr: [5]int
    Fill(arr, 10)
    for _, x in arr {
        outln(x)
    }
}
```

</details>

<details>
<summary>Print All Public Fields of Struct Instance</summary>

```jule
use comptime for std::comptime

struct FooBarBaz {
    Foo: int
    Bar: str
    Baz: bool
}

fn printPublicFields[T](x: T) {
    const t = comptime::TypeOf(T)
    match true {
    | t.Kind() != comptime::Kind.Struct:
        panic("type T is not a struct")
    }
    const fields = t.Fields()
    const expr = comptime::ValueOf(x)
    for _, field in comptime::Range(fields) {
        match true {
        | field.Public():
            outln(expr.Field(field.Name()).Unwrap())
        }
    }
}

fn main() {
    let fbz = FooBarBaz{
        Foo: 89,
        Bar: "comptime",
        Baz: true,
    }
    printPublicFields(fbz)
}
```

</details>