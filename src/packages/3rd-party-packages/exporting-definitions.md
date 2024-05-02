# Exporting Definitions
Packages have access to any definition they have. But this does not apply to packages that use a package. Only exported definitions are accessible when a package is used. This is a kind of safety. When publicly-closed/internal package definitions that should not be used are not exported, they cannot be accessed from the outside and this possibility is eliminated. This is the most basic purpose of the export mechanism.

To define as public, use an identifier which is starts with capital letter. Otherwise, all definitions are private by default.

Linked definitions are not supported. All linked definitions will be private by default all time.\
Some linked definitions might be exception, these exceptions will be described at relevant sections.

Exportion supported definitions:
- Global
- Function
- Enum (Items will use modifier of owner enum)
- Type Enum (Items will use modifier of owner enum)
- Struct
- Struct Method
- Struct Field
- Type Alias
- Trait
- Trait Method

For example to public definitions: 
```jule
fn add(x: int, y: int): int { ret x + y }
```
The `add` function is private.

For example: 
```jule
fn Add(x: int, y: int): int { ret x + y }
```
The `add` function is public now.

## Implicit Export
Implicit export is when definitions that are not explicitly defined as public are implicitly served as public by another public definition. For example, a private struct can have public fields. But since the struct is private, it cannot be accessed from outside the package. A wrapper function that provides this can access the struct and return an instance of it because it is in its own package. This is an implicit export.

For example, the package `foo`:
```jule
struct myStruct {
    Number: int
}

fn NewMyStruct(number: int): myStruct {
    ret myStruct{
        Number: number,
    }
}
```
Your code:
```jule
use foo::{NewMyStruct}

fn main() {
    let ms = NewMyStruct(20)
    outln(ms.Number)
}
```
As shown in the example above, your code accessed a private struct via a public function and used the public field. This means that that definition is implicitly exported. 