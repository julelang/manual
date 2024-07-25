# Structures
Structures (aka structs) are a good way to collect many variables in one spot. Every declaration within the structure is called a member (aka field). The difference from a slice or array is that they contain values of the same data-type, while each of the struct fields can have a different data type. Also, the fields of structures are accessed with an identifier.

For example to declaration a struct:
```jule
struct Employee {
    name: str
    age: u8
    title: str
    salary: u32
}
```
Members of structures are the same as a variable definition except `const` keyword.

## Assigning Default Value to Fields

You may want to change the default values ​​assigned to fields of structures. To do this, simply assign an expression. When you do this, each time your structures are instantiated, it will initialize that field using the value given for that field.

For example:
```jule
struct Employee {
    name:   str = "anonymous"
    age:    u8  = 18
    title:  str = "NA"
    salary: u32 = 100000
}

fn main() {
    let emp = Employee{}
    // emp: Employee{name:anonymous, age:18, title:NA, salary:100000}
    outln(emp)
}
```

## Creating a Instances of Structures
To instantiate structs, you can either give the values of the fields using braces after the struct name, or create them with their default values.

For example:
```jule
struct Character {
    name: str
    age: u64
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
Receivers indicate which instance the function will use. Receiver parameters must be the first parameter of each method. Receiver parameters are also a [reference](/memory/references) by default.

There are two types of receiver parameters;

**Smart Pointer Receiver Parameter**
Smart Pointer receivers require the function to be a reference. The function can only be called from a reference instance of the structure.

**Receiver Parameter**
Receivers, on the other hand, allow changes made within the function to be reflected in the structure if the receiver is mutable. However, when the structure is given as arguments to different functions, or in a different state, it is copied. That is, it is only variable within itself.
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
```jule
// Immutable Smart Pointer Receiver
fn method(&self): str { /* Body */ }
```
```jule
// Mutable Smart Pointer Receiver
fn method(mut &self): str { /* Body */ }
```
```jule
// Immutable Receiver
fn method(self): str { /* Body */ }
```
```jule
// Mutable Receiver
fn method(mut self): str { /* Body */ }
```

For example to implementing method to structure:
```jule
impl Position {
    fn isOrigin(self): bool {
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
    fn getName(self): str {
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

Static methods, like normal methods, are dependent on the structure itself, but there are some differences.

These differences are:

- Can called via type declaration without instances
- Don't dependent to instances
- Don't takes receiver parameters
- Can't access via instances

For example:

```jule
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

## Static Fields

Static fields can be accessed without any instance, like static methods. All fields used statically are constant and are implemented with the `impl` statement.

For example:

```jule
struct Number {}

impl Number {
    const Pi = 3.14159
    const E  = 2.71828
}

fn main() {
    outln(Number.Pi)
    outln(Number.E)
}
```
