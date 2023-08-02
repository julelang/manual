# Directives
Compiler directives (or pragma), they are statements that describe how the compiler should handle the source code. Directives are safe to use. Each one is essentially a comment. Any part or directive that is incorrect is considered invalid. You won't get a headache with any compiler errors. 

::: tip
Incorrect directives will cause compiler errors if necessary.
:::

\
For example to directives:
```
//jule:typedef
```
As seen in the example, it is essentially a comment as explained. For a directive to be valid, it must be used correctly in the right place. The comment must be at the beginning of the line and begin with the `jule:` prefix.

## Top Directives
Top directives are must be placed at top of source file.
Usually contains specific compiler configurations for file or package.

## Arguments
The arguments of the directives are separated by spaces. The directive must be followed by the required arguments, separated by spaces.

\
For example:
```
//jule:derive Clone
struct MyStruct {}
```

## Directive Expressions

Some directives are evaluates the expression you wrote with a custom syntax, and if the expression returns `true` as a result, your file will be included in the build. Expression must always return boolean. Expressions are only logical. So the variables you will use are boolean and the binary operations you can do are only logical and and logical or.

Your variables are set automatically by your compiler. The variables you can use are the same as in file annotation. They are variables that are also described in the [platform support](/compiler/platform-support) documentation.

::: warning
Evaluation results in `false` on any syntax errors and empty expressions.
:::

### Syntax

The syntax is simple and easy to learn. The logical and operator is `&&` and the logical or operator is `||`. These are exactly the same as Jule. The precedence of these operators is also the same. First, the logical or (`||`) operator is evaluated, then the logical and (`&&`) operator is evaluated. You also have parentheses. The parentheses, of course, are evaluated first. In addition to these, logical not (`!`) operator is also available.

### Examples

Here is an example code via `build` directive:

```
//jule:build (darwin || windows) && 64bit
```
```
//jule:build unix && !darwin
```

## Directive: `typedef`
In C++-linked structs, if the structure is a `typedef` use this will configure code generation correctly. Otherwise, the struct will be treated as a classical structures.

## Directive: `cdef`
In C++-linked functions, if the function is a `#define`, it configures code generation to be compatible.

## Directive: `derive`
Specify what additions the compiler will make.
Supported by only structures.
See more information about [deriving](/compiler/deriving).

## Directive: `pass`
Directive pass is a top directive.
Passes compiler flags to generated compile command for compiling source code.
Passes are must be start with dash.

::: tip
There are no issue if you are using same passes.
The compiler eliminates duplicate passes.
:::

\
For example:
```
//jule:pass -framework Foundation
//jule:pass -framework Cocoa

fn main() {
    // ...
}
```

## Directive: `build`

The `build` directive is a top directive. Different way of platform specific programming. It can be used with or instead of file annotation. Unlike file annotation, it is a directive, not a naming convention.

Plese look at the [platform specific programming](/compiler/platform-specific-programming) page for information.
