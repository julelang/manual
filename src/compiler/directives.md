# Directives
Compiler directives (or pragmas) are statements that describe how the compiler should handle source code. Directives are safe to use. It is checked by the compiler and incorrect usage is warned.

For a directive to be valid, it must be used correctly in the right place. The directive must be strt with the `#` prefix.

\
For example to directives:
```jule
#typedef
```

## Top Directives
Top directives are must be placed at top of source file.
Usually contains specific compiler configurations for file or package.

## Arguments
The arguments of the directives are separated by spaces. The directive must be followed by the required arguments, separated by spaces.

\
For example:
```jule
#derive Clone
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

### Variables

Here is the list of variables and their existence:

- `windows`: operating system is windows
- `darwin`: operating system is darwin
- `linux`: operating system is linux
- `unix`: operating system is UNIX, or UNIX-like
- `i386`: cpu architecture is intel 386
- `arm64`: cpu architecture is ARM64
- `amd64`: cpu architecture is AMD64
- `x32`: 32-bit cpu architecture
- `x64`: 64-bit cpu architecture
- `production`: production compilation enabled
- `test`: compiling for testing
- `clang`: backend compiler is Clang
- `gcc`: backend compiler is GCC
- `cpp14`: using C++14 standard
- `cpp17`: using C++17 standard
- `cpp20`: using C++20 standard

### Examples

Here is an example code via `build` directive:

```jule
#build (darwin || windows) && x64
```
```jule
#build unix && !darwin
```

## Directive: `derive`
Specify what additions the compiler will make.
Supported by only structures.
See more information about [deriving](/compiler/deriving).

## Directive: `pass`
Directive pass is a top directive.
Passes compiler flags to generated compile command for compiling source code. Uses string literal as argument, but literals are not processed, accepts directly. So, you can't use escape sequences like original string literals.

::: info
There are no issue if you are using same passes.
The compiler eliminates duplicate passes.
:::

\
For example:
```jule
#pass "-framework Foundation"
#pass "-framework Cocoa"

fn main() {
    // ...
}
```

## Directive: `build`

The `build` directive is a top directive. Different way of specific programming such as platform specific programming. It can be used with or instead of file annotation. Unlike file annotation, it is a directive, not a naming convention.

Plese look at the [specific programming](/compiler/specific-programming) section for more information.

## Directive: `typedef`
In C++-linked structs, if the structure is a `typedef` use this will configure code generation correctly. Otherwise, the struct will be treated as a classical structures.

## Directive: `cdef`
In C++-linked functions, if the function is a `#define`, it configures code generation to be compatible.

## Directive: `namespace`
Adds namesapce selection for supported C++-linked types. Uses string literal as argument, but literals are not processed, accepts directly. So, you can't use escape sequences like original string literals.

## Directive: `deprecated`
Definitions qualify as deprecated.

## Directive: `test`
Declares test function.
