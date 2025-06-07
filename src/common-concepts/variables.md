# Variables
There is more than one way in Jule to define a variable. 

Jule is uses the `let` and `const` keywords for variable declarations. Jule uses the `:` operator for type annotations. When you don't use `:` operator, you report you want the type to be detect automatically by compiler. The type is set by the compiler based on the data. Aka type inference.

For example:
```jule
let age = 18
```
The data type of the above variable is defaulted to `int`.

## Type Annotation
You may want to annotate the type, it is possible. It also brings you advantages.

For example:
```jule
let age: int = 18
```
This is equivalent to the one shown above. However, you annotated the type. So what exactly is the difference? We mentioned that it has advantages, let's take a look:

- When you follow this method, you do not have to give a value during the creation of the variable. According to the data type you have defined, the compiler initializes that variable with the default value of the given data type if you have not given a value.
- This is better than automatic assignment if the variable's data type is important. Because in automatic assignment, the data type is detected automatically, but since the value given here must be compatible with the given data type, the Jule compiler will not accept any incompatible value.
- You know more precisely which data type you are working with. It can help avoid possible confusion.

### Auto Initialization
In case of type annotation, the default value is initialized by the compiler. Variables do not need to be explicitly initialized when the type is annotated.

For example:
```jule
let a: int
```

## Assignment
The values of the variables can be changed later. The value given must be the same as the data type of the variable.

For example:
```jule
fn example() {
    let mut a: int = 10 // Value is 10.
    a = 200             // New value is 200.
}
```

::: tip
Variables must be mutable in order for their values ​​to change. For this, the keyword 'mut' was used in the example above. For more information about mutability, you can refer to the [mutability](/memory/mutability) section.
:::

In the example above, the variable `a` is static so it will retain its value and you will get an integer that is constantly increasing.

## Global Variables

Global variables are in the main scope of the program and are static variables by nature.

For example:
```jule
let myInt: int = 20

fn main() {
    // ...
}
```

### Initialization
Global variables are initialized during the earliest stages of the program. At the time of their initialization, no `init` calls have been executed yet.

If the execution of an `init` function is necessary for the proper initialization of global variables, care must be taken. Otherwise, unexpected results may occur.

For example:
```jule
let foo = bar()
let mut baz = 0

fn bar(): int {
	ret baz
}

fn init() {
	baz = 123
}

fn main() {
	println(foo)
	println(bar())
}
```
In the example code above, the `foo` variable is initialized with the value returned by the `bar()` function call. Since the `baz` variable has not yet been assigned a value by the `init` function, the `foo` variable is initialized with `0`. As a result, the program's output will be `0` and `123`.

## Constant Variables

See relevant [comptime documentations](/comptime/comptime-evaluation) for information about constant variables.

## Shadowing

In the basic sense, shadowing is when a definition with the same identifier shadows a define with the same identifier before it in scope. This is made possible by performing a new definition in subscopes of a scope with the name of a definition defined in that parent scope, or by using the identifier of a global definition in the main scope of a function.

Shadowing can cause various developer errors and make reading code more complicated. Therefore, by default your compiler does not allow shadowing. However, you can enable this by passing the `--shadowing` option to your compiler.

### What if Shadowing Enabled

When you tell your compiler to allow shadowing, it allows you to implement shadowing. What Shadowing is explained. To give an example:

```jule
fn main() {
    let a = 10
    {
        let a = 200
        println(a)
    }
    println(a)
}
```
In the above example, the main scope of the function has a child scope. This scope has a variable with the same identifier as the variable `a` in the main scope. This variable replaces and shadows the parent scope's variable `a` in it and its child scopes.

Can a definition in the same scope be shadowed, how does the compiler behave about it? Obviously, you can't. The compiler will never allow two identifiers in the same scope. Therefore, you cannot have definitions with the same identifier in the same scope.

## Multiple Assignment / Declaration
You can multiple variable assignment or declaration. What? Sure, you can use two type in same statement. You know how to declare variable, okay it is same. The single difference, identifiers and expressions separate with comma.

For example:
```jule
let (x, y, z) = true, 1, -400
```
Yes, there is we declare three new variable named as `x`, `y` and `z` with auto-type detection. Variable values are; `x` is `true`, `y` is `1` and `y` is `-400`. As you can see, the order in which the variable is defined is associated with the expression in the same order. Remember that, you can't use type annotation in this case.

Use the `mut` keyword for mutable declaration.

For example:
```jule
let (mut x, y, mut z) = true, 1, -400
```
The `x` and `z` variables are mutable.

So how do we do the assignment thing?\
We're essentially just removing the declaration things that indicates that the variable is a new variable. Actually, only the name of the variable needs to remain, remember value assignment statement.

For example:
```jule
x, y, z = true, 1, -400
```
The logic remains the same. Let's not forget that these variables must already exist, of course, due to static type principles, the value you show to it must be compatible with the data type of the variable.

### Ignore Identifier

Additionally, you can skip some values with ignore identifier: `_`.
For example:
```jule
x, _, z = true, 1, -400
```
```jule
let (x, _, z) = true, 1, -400
```
This way you ignore some values.

---

Additionally, if you have a tuple expression and want to ignore all expressions with ignore identifier, you do not need to write ignore identifier for each expression individually. You can ignore the entire tuple expression by using a single ignore identifier.

For example:
```jule
let (a, b, c) = 10, 20, false
_ = a, b, c
```

### Assignment and Definition Simultaneously
Script: You have multiple assignments, but some of your variables need to be defined for the first time while some of your variables are assigned.

Jule's approach in this regard is that both can occur simultaneously if certain rules are met. If you are using a variable defined in the same scope, the variable will not be evaluated according to the definition rules. This will not cause you to get an error about it. Your variable is handled according to the assignment rules. So the errors we can get will be typical assignment errors like mutability or type safety.

For example:
```jule
fn main() {
    let (mut x, y) = 10, 20
    let (x, z) = 100, 30
    println(x) // 100
    println(y) // 20
    println(z) // 30
}
```
In the example above, the variable `x` is set to mutable. Since it is again in a multiple assignment within the same scope, it is treated according to the assignment rules, not the rebuild rules. While assigning to the `x` variable, the `z` variable does not exist, so it is newly created.

The point that should not be missed is that the relevant variable must be in exactly the same scope. If a variable from the global scope is used, it will not be considered as assignment. Likewise, if the variable comes from parent scopes, it is still not considered an assignment.

For example:
```jule
fn main() {
    let (x, y) = 100, 200
    {
        let (x, z) = 10, 20
        println(x) // 10
        println(y) // 200
        println(z) // 20
    }
    println(x) // 100
}
```
In the above example, the variable `x` is not considered an assignment because it comes from the parent scope. If you want to perform an assignment, you must use a clean assignment statement. The above example cannot be done by default, this requires allowing shadowing.

Also if you want to perform an assignment, but not to a variable but to a pointer etc. You can do this.

For example:
```jule
fn main() {
    let mut a = [1, 2, 3, 4]
    let (a[0], b) = 20, 30
    println(a) // [20 2 3 4]
    println(b) // 30
}
```
::: warning
This can make the statement very complex and impair readability. For this reason, it is recommended not to use too complex expressions.
:::

## Short Declarations

Short declaration is a language feature that allows you to declare variables with a shorter and simpler syntax without using the `let` keyword.

The syntax is almost the same as the `let` keyword and the same rules apply.

The `:=` operator is used to define a short declaration statement. This operator means that it is a declarative assignment expression, not an assignment. That is, it is a semantic shortcut equivalent to `let (...) =` and and are handled in the same way.

For example:
```jule
fn letKeyword() {
    let mut a = 0
    let b = false
    let &c = a
    let (x, mut y, &z, _, mut &k) = "foo", "bar", b, false, a
    _ = x, y, z, c, k
}

fn shortcut() {
    mut a := 0
    b := false
    &c := b
    x, mut y, &z, _, mut &k := "foo", "bar", b, false, a
    _ = x, y, z, c, k
}
```

::: info
You can use whichever method you find more useful/readable. Jule does not make any recommendations or set standards on this matter.
:::

## Grouped Variables and Enumeration

You can define variables by grouping them. This provides maintenance benefits such as common documentation for multiple variables or grouping variables that serve a specific purpose, as well as enabling enumeration.

Only constant variables can be grouped. To group them, define them using the `const` keyword and enclose all variables within parentheses.

For example:
```jule
const (
	a = 10
	b = 20
	c = 30
	d = 40
	e = 50
)
```
The above definition is technically equivalent to:
```jule
const a = 10
const b = 20
const c = 30
const d = 40
const e = 50
```

### Enumeration

The enumeration automatically assigns constant values to variables. If a variable within the group does not have an initialization value, it is automatically assigned to enumerated value.

The first constant variable in the group must be explicitly initialized. Its type and value will be copied to the following non-initialized variables accordingly. If any variable within the group has a type annotation, it must be explicitly initialized.

For example:
```jule
const (
    a = 90
    b
    c
)
```
In the example above, the `b` and `c` variables inherit the same value as the `a` variable, which means they are untyped constants with the value `90`.

#### The `iota` Variable
The `iota` variable is defined only for grouped variables. It is an untyped integer constant. For each variable in the grouped variable set, `iota` represents the index of that variable within the group, starting from zero.

For example:
```jule
const (
    a = iota + 1
    b = iota + 1
    c = iota + 1
)
```
As explained, the `iota` variable represents the index of the variable within the group and starts counting from zero. Accordingly, in the example above, the variables `a`, `b`, and `c` take the values `1`, `2`, and `3`, respectively.

As an additional note, if a variable has a value that uses the `iota` variable, the subsequent uninitialized variables will use one more than the previous variable's value instead of copying it directly. This situation continues until a variable is initialized with a value.

For example:
```jule
const (
	a = iota + 1
	b
	c
	e = 89
	f
	g
)
```
In the example above, the variable `a` is initialized with a value using the `iota` variable. Therefore, the variables `b` and `c` will take the values `2` and `3`, respectively. The reason for this is that the value of `a` is initialized using the `iota` variable with `iota + 1`, which means it is initialized with the value `1`. The use of the `iota` variable enables incremental enumeration, where each variable is assigned the value that is one more than the previous variable.

The `f` and `g` variables will be assigned the value `89` because the `e` variable is initialized with the value `89`. As explained, this ends the incremental enumeration, and since the `e` variable does not use the `iota` variable, the `f` and `g` variables will copy the value of `e` directly instead of being assigned an incremented value based on `e`.

Note that incremental enumeration uses the same expression with latest `iota` value for the following members. So if you're expecting an increment of one, your expression needs to accommodate that. If you have an expression like binary shifting, the value may increase exponentially.

For example:
```jule
const (
	a = 1 << iota
	b
	c
	d
)
```
In the example above, the variable `a` is initialized with a value using the  `iota` variable. This value is result of a binary shifting. Following members use incremental enumeration and result will be changed by the `iota` variable value. As explained, the members will take the values `1`, `2`, `4`, and `8` because expression is applied for the each member with their `iota` value.