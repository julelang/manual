# Structures
Structures (aka structs) are a good way to collect many variables in one spot. Every declaration within the structure is called a member (aka field). The difference from a slice or array is that they contain values of the same data-type, while each of the struct fields can have a different data type. Also, the fields of structures are accessed with an identifier.

For example to declaration a struct:
```jule
struct Employee {
    name:   str
    age:    u8
    title:  str
    salary: u32
}
```
Members of structures are the same as a variable definition except `const` keyword.

## Creating a Instances of Structures
To instantiate structs, you can either give the values of the fields using braces after the struct name, or create them with their default values.

For example:
```jule
struct Character {
    name:  str
    age:   u64
    title: str
}

fn main() {
    let anon = Character{}
    let frodo = Character{"Frodo", 50, "Hobbit"}
    let gandalf = Character{
        name: "Gandalf",
        age: 24000,
        title: "Wizard",
    }
    println(anon)
    println(frodo)
    println(gandalf)
}
```

## Methods for Structures
Structures can have special functions (methods). Similar to class methods of object oriented programming. You can use structure generics in function and have generics for your function.
::: warning
You can't shadow generics.
:::

### Implementing Methods
To implement method(s) to structure, the following syntax is applied:
```jule
impl STRUCT_IDENTIFIER {
    // Methods
}
```
::: warning
Just give structure identifier as receiver. Not generics or type alias.
:::

### Receiver Parameters
Receivers indicate which instance the function will use. Receiver parameters must be the first parameter of each method.

There are two types of receiver parameters;

**Smart Pointer Receiver Parameter**
Smart Pointer receivers require the function to be a reference. The function can only be called from a reference instance of the structure.

**Receiver Parameter**
Receivers, on the other hand, allow changes made within the function to be reflected in the structure if the receiver is mutable. Assigning to the self parameter will cause mutation in the same way. This is because, the self parameter is treated as a [reference pointer variable](/memory/raw-pointers/reference-pointers). Therefore, assignments made directly to the self variable will be written to the memory of the instance calling the method.

### Syntax
```
fn IDENTIFIER([RECEIVER_PARAMETER], PARAMETERS...): RET_TYPE {
    [BODY]
}
```

For example to receiver parameters:
```jule
fn method(&self): str { /* Body */ }
```
Immutable [Smart Pointer](/memory/management/smart-pointers) Receiver
```jule
fn method(mut &self): str { /* Body */ }
```
Mutable [Smart Pointer](/memory/management/smart-pointers) Receiver
```jule
fn method(*self): str { /* Body */ }
```
Immutable [Reference Pointer](/memory/raw-pointers/reference-pointers) Receiver
```jule
fn method(mut *self): str { /* Body */ }
```
Mutable [Reference Pointer](/memory/raw-pointers/reference-pointers) Receiver

For example to implementing method to structure:
```jule
impl Position {
    fn isOrigin(*self): bool {
        ret self.x == 0 && self.y == 0
    }
}
```
He example at above, implements `isOrigin(): bool` method to `Position` structure.

### The `self` Keyword
The `self` keyword represents the receiver a receiver function has. It is used to access and use the members of the structure. The data type is the same as the data type of the receiver.

For example:
```jule
impl Person {
    fn getName(*self): str {
        ret self.name
    }
}
```
In the example above, the `name` field of the `Employee` structure instance is accessed with the `self` keyword.

## Reference Literal Instances
You can heap-allocate structure instancing. The unary `&` operator returns reference to if you use at instancing.

For example:
```jule
let pos = &Position{x: 10, y: 20}
```
`pos` variable is the reference and points to the heap-allocated `Position` structure instance.
::: warning
If you are not sure how references work, check the [memory management documentations](/memory/management/). 
:::


## Static Methods

Static methods, like normal methods, are dependent on the structure itself, but there are some differences. To declare a static method, just do not use the receiver parameter.

These differences are:

- Can called via type declaration without instances
- Don't dependent to instances
- Don't takes receiver parameters
- Can't access via instances

For example:

```jule
struct Dog {}

impl Dog {
    fn voice() {
        println("woof woof")
    }
}

fn main() {
    // Call static method via type declaration.
    Dog.voice()
}
```

## Field Tags

Field tags are special key:value pairs assigned to struct fields at compile time. They are not accessible at runtime in any way; however, you can read the tags on a struct's fields using Jule's compile-time capabilities.

To add a tag to a struct field, you can use a string literal. \
For example:
```jule
struct Foo {
	bar: int `fizz:"myvalue"`
	baz: str `fuzz:"123"`
}
```
For more detailed information about tags, please read the section below.

### Tag Syntax and Semantics

Tags are represented using string literals. Leading and trailing whitespace characters in the literals are invalid and will be evaluated like key:value pairs. Key-value pairs must be separated by exactly one whitespace character. A colon (`:`) is used to separate the key and value in a tag pair, and there must be no whitespace between them. Keys are considered valid if they contain any characters except Unicode whitespace characters and the tag separator character (`:`). Values must always be string literals—raw string literals are not supported, so double quotes (`"`) must always be used. The string literals used for values are processed the same way as Jule string literals, meaning escape sequences and similar syntax are supported.

**Example tag literals**
| Tag Literal                | Represented Tags       |
|----------------------------|------------------------|
| \`foo:"bar"\`              | foo:"bar"              |
| \`f_oo:"bar"\`             | f_oo:"bar"             |
| "foo:\\"bar\\""            | foo:"bar"              |
| \`foo:"\u00E7"\`           | foo:"ç"                |
| "foo:\\"\\\\u00E7\\""      | foo:"ç"                |
| "foo:\\"\u00E7\\""         | foo:"ç"                |
| \`foo:"bar" baz:"foo"\`    | foo:"bar", baz:"foo"   |
| \`foo:"bar" baz:"foo"\`    | foo:"bar", baz:"foo"   |
| \`fo34çöğ;)(9384#o:"bar"\` | fo34çöğ;)(9384#o:"bar" |

**Recommended Tag Format**

Even though special characters can be used in tags, it is recommended that key names be written as if naming variables in Jule source code.

### Compiler Tags

You can give some directives to the compiler using field tags. This kind of tags must be start with the hash, like `#export`. Leading hash symbol is not recommended for common use, this is compiler specific. But also it allowed for common use, to make things easy. For example, your package needs `#export` directive, but not for itself, for the compiler. It's ok. There is no limitation or difference about handling compiler directive file tags.

Note that they are not semantically checked and limited, every tag with a leading hash is not a compiler directive. Here is list of the compiler directive field tags:
- [`#export`](/integrated-jule/interoperability/structures#using-different-field-identifiers)