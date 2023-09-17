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

## Constant Variable
Constant variables are declared same method, the only difference being that the keyword `const` is used when defining them.

For example: 
```jule
const age = 18
```
```jule
const age: int = 18
```
::: warning
No matter which method the constant variables are defined by, initialize expression is mandatory. 
:::

### Differences Between Variables and Constants Variables
The value of the variables can change (with mutability), then they can be updated with a different value to match the data type. Constants take a constant expressions and never change again. Constant expressions do not exist as a variable in memory at runtime. Constant expressions used are copied exactly where they are used. Constant expressions are all evaluated at compile time.

## Static Variables

Static variables are initialized once, they are living allocations over the life of the program. They are declared with the `static` keyword and, like constant variables, an initialize expression is required.

For example:
```jule
static my_int: int = 20
```

::: info
C++ linked variables can't be static.
:::

### Static Local Scope Variables

Using static in fields where the concept of local scope is valid, such as function body, has the same effect as global scope static variables. Your static variable is allocated once and survives for the lifetime of the program. Therefore, the value of the variable can likewise be preserved between calls because the variable is a statically stored.

For example:
```jule
fn count() {
    static mut a: int = 0
    a++
    outln(a)
}

fn main() {
    count()
    count()
    count()
    count()
    count()
    count()
}
```

In the example above, the variable `a` is static so it will retain its value and you will get an integer that is constantly increasing.

## Global Variables

Global variables are in the main scope of the program and are static variables by nature. Therefore, variables in the global scope must be declared as static.

For example:
```jule
static my_int: int = 20

fn main() {
    // ...
}
```

::: info
C++ linked globals can be declare via `let` keyword.
:::

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

Additionally, you can skip some values with ignore operator.
For example:
```jule
x, _, z = true, 1, -400
```
```jule
let (x, _, z) = true, 1, -400
```
This way you ignore some values. 

### Assignment and Definition Simultaneously
Script: You have multiple assignments, but some of your variables need to be defined for the first time while some of your variables are assigned.

Jule's approach in this regard is that both can occur simultaneously if certain rules are met. If you are using a variable defined in the same scope, the variable will not be evaluated according to the definition rules. This will not cause you to get an error about it. Your variable is handled according to the assignment rules. So the errors we can get will be typical assignment errors like mutability or type safety.

For example:
```jule
fn main() {
    let (mut x, y) = 10, 20
    let (x, z) = 100, 30
    outln(x) // 100
    outln(y) // 20
    outln(z) // 30
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
        outln(x) // 10
        outln(y) // 200
        outln(z) // 20
    }
    outln(x) / 100
}
```
In the above example, the variable `x` is not considered an assignment because it comes from the parent scope. If you want to perform an assignment, you must use a clean assignment statement.

Also if you want to perform an assignment, but not to a variable but to a pointer etc. If you want to do it, your statements must be in parentheses. Expressions enclosed in parentheses are clean assignment expressions, the brackets are evaluated and the value is assigned.

For example:
```jule
fn main() {
    let mut a = [1, 2, 3, 4]
    let ((a[0]), b) = 20, 30
    outln(a) // [20 2 3 4]
    outln(b) // 30
}
```
::: warning
This can make the statement very complex and impair readability. For this reason, it is recommended not to use too complex expressions in parentheses. 
:::

## Shadowing
In the basic sense, shadowing is when a definition with the same identifier shadows a define with the same identifier before it in scope. This is made possible by performing a new definition in subscopes of a scope with the name of a definition defined in that parent scope, or by using the identifier of a global definition in the main scope of a function.

For example:
```jule
static a: int = 100

fn my_func(a: bool) {
    outln(a)
}
```
In the code above, the function's parameter is the same as the name of a global definition. In this case, the parameter name is valid and the global definition is shaded.

So how does this work in child scopes?

For example:
```jule
static a: int = 100

fn my_func() {
    let a = 10
    {
        let a = 200
        outln(a)
    }
    outln(a)
}
```
In the above example, the main scope of the function has a child scope. This scope has a variable with the same identifier as the variable `a` in the main scope. This variable replaces and shadows the parent scope's variable `a` in it and its child scopes.

Can a definition in the same scope be shadowed, how does the compiler behave about it? Obviously, you can't. The compiler will never allow two identifiers in the same scope. Therefore, you cannot have definitions with the same identifier in the same scope.