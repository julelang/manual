# Structures
Structures (aka structs) are a good way to collect many variables in one spot. Every declaration within the structure is called a member (aka field). The difference from a slice or aray is that contain values of the same data-type, while each of the struct fields can have a different data type. Also, the fields of structures are accessed with an identifier.

For example to declaration a struct:
```
struct Employee {
    name: str
    age: u8
    title: str
    salary: u32
}
```
Members of structures are the same as a variable definition except `const` keyword.

## Creating a Instances of Structures
To instantiate structs, you can either give the values of the fields using braces after the struct name, or create them with their default values.

For example:
```
struct Character {
    name: str
    age: u8
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
    outln(anon)
    outln(frodo)
    outln(gandalf)
}
```

## Methods for Structures
Structures can have special functions for themselves. Similar to class methods of object oriented programming. You can use structure generics in function and have generics for your function.
::: warning
You can't shadow generics.
:::

### Implementing Methods
To implement method(s) to structure, the following syntax is applied:
```
impl STRUCT_IDENTIFIER {
    // Methods
}
```
::: warning
Just give structure identifier as receiver. Not generics or type alias.
:::

### Receiver Parameters
Receivers indicate how instance the function will use. Receiver parameters must be the first parameter of each method. Receiver parameters are also a [reference](/memory/references) by default.

There are two types of receiver parameters;

**Reference Receiver Parameter**
Reference receivers require the function to be a reference. The function can only be called from a reference instance of the structure.

**Receiver Parameter**
Receivers, on the other hand, allow changes made within the function to be reflected in the structure if receiver is mutable. However, when the structure is given as arguments to different functions, or in a different state, it is copied. That is, it is only variable within itself.
::: warning
Not deep copy.
:::

### Syntax
```
fn IDENTIFIER([RECEIVER_PARAMETER], PARAMETERS...): RET_TYPE {
    // Body
}
```

For example to receiver parameters:
```
// Immutable Reference Receiver
fn method(&self): str { /* Body */ }
```
```
// Mutable Reference Receiver
fn method(mut &self): str { /* Body */ }
```
```
// Immutable Receiver
fn method(self): str { /* Body */ }
```
```
// Mutable Receiver
fn method(mut self): str { /* Body */ }
```

For example to implementing method to structure:
```
impl Position {
    fn is_origin(self): bool {
        ret self.x == 0 && self.y == 0
    }
}
```
He example at above, implements `is_origin(): bool` method to `Position` structure.

### The `self` Keyword
The `self` keyword represents the receiver a receiver function has. It is used to access and use the members of the structure. The data type is the same as the data type of the receiver.

For example:
```
impl Person {
    fn get_name(self): str {
        ret self.name
    }
}
```
In the example above, the `name` field of the `Employee` structure instance is accessed with the `self` keyword.

## Reference Literal Instances
You can heap-allocated structure instancing. The unary `&` operator returns reference to if you use at instancing.

For example:
```
let pos = &Position{x: 10, y: 20}
```
`pos` variable is the reference points to heap-allocated `Position` structure instance.
::: warning
If you not have any idea about references, check the [memory management documentations](/memory/memory-management). 
:::


## Static Methods

Static methods, like normal methods, are dependent on the structure itself, but there are some differences.

These differences are:

- Can called via type declaration without instances
- Don't dependent to instances
- Don't takes receiver parameters
- Can't access via instances

For example:

```
struct Dog {}

impl Dog {
    static fn voice() {
        outln("woof woof")
    }
}

fn main() {
    // Call static method via type declaration.
    Dog.voice()
}
```
