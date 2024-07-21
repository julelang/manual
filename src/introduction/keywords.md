# Keywords

Keywords are the building blocks that make up your program. They are the root words of the language and the common essential words used when expressing the program.

Keywords have been pre-reserved in the language and are not allowed to be used as identifiers.

**List of Keywords**
```jule
map      type      impl      self
trait    struct    enum      fn
const    let       static    mut
for      in        break     continue
goto     match     fall      if
else     ret       error     use
co       cpp       unsafe    defer
true     false     nil
```

## Imaginary Keywords

Imaginary keywords are words that are not keywords for Jule, but are recommended for developers to treat as if they were a keyword. These words are mostly aliases for built-in types or reserved names for some functions.

Developers can use these words as identifiers to functions and other definitions if they wish, but this can lead to a variety of development issues and readability challenges. Because relevant word now points to a new definition defined by the developer instead of its commonly used built-in definition.

For example:

```jule
type int: str

fn main() {
    let a: int = "hello world"
    outln(a)
}
```
As seen in the example above, the variable `a` is defined as `int` type. At first glance, the variable `a` may be thought to be an integer, but the identifier `int` has been redefined for an alias and corresponds to the type `str`. Therefore, the type `a` is `str`, not `int`.


**List of Imaginary Keywords**

```jule
int       uint      uintptr    i8       i16       i32
i64       u8        u16        u32      u64       f32
f64       bool      str        any      new       make
copy      append    out        outln    delete    clone
assert    cap       len        panic
```