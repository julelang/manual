# Exporting Definitions
Packages have access to any definition they have. But this does not apply to packages that use a package. Only exported definitions are accessible when a package is used. This is a kind of safety. When publicly-closed/internal package definitions that should not be used are not exported, they cannot be accessed from the outside and this possibility is eliminated. This is the most basic purpose of the export mechanism.

The keyword pub is used to specify exportable public-use definitions of a package.\
Otherwise, all definitions are private by default.

You can mark public these kind of definitions:
- Global
- Function
- Enum
- Struct
- Struct Field
- Type Alias
- Trait

For example to public definitions: 
```
fn add(x: int, y: int): int { ret x + y }
```
The `add` function is private.\
With the keyword `pub`, you can public definition.

For example: 
```
pub fn add(x: int, y: int): int { ret x + y }
```
The `add` function is public now.

## Implicit Export
Implicit export is when definitions that are not explicitly defined as public are implicitly served as public by another public definition. For example, a private struct can have public fields. But since the struct is private, it cannot be accessed from outside the package. A wrapper function that provides this can access the struct and return an instance of it because it is in its own package. This is an implicit export.

For example, the package `foo`:
```
struct MyStruct {
    pub number: int
}

pub fn new_mystruct(number: int): MyStruct {
    ret MyStruct{
        number: number,
    }
}
```
Your code:
```
use foo::{new_mystruct}

fn main() {
    let ms = new_mystruct(20)
    outln(ms.number)
}
```
As shown in the example above, your code accessed a private struct via a public function and used the public field. This means that that definition is implicitly exported. 