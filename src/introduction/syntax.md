# Syntax

This section touches on the basic syntax rules of Jule.

## White Spaces

Jule only accepts some characters as whitespace in source code.

**Table of Whitespace Characters**
| Name                               | Code | String Representation |
|------------------------------------|------|-----------------------|
| Space                              | 32   | ` `                   |
| Carriage Return                    | 13   | `\r`                  |
| Line Feed                          | 10   | `\n`                  |
| Horizontal Tab                     | 9    | `\t`                  |
| Vertical Tab (May will be removed) | 11   | `\v`                  |

## Identifiers

Identifiers are special names provided to use the definitions in Jule.

An identifier must comply with some rules:
- Must begin with an underscore or letter.
- Can include numbers (`0-9`) except first character.
- It can only consist of numbers, underscore and letters.

Jule allows the use of any letter from the list of Unicode characters it supports. So it is possible to write identifiers in many languages. However, it is recommended to write in English. 

**Example Valid Identifiers**\
`a123`, `foo`, `fooBar`, `_foo`, `foo_bar_`, `_123`, `değişken`, `多变的`, `переменная`, `変数`, `متغیر`, `عامل`

## Bodies

Any body should follow its declaration. For example, you are defining a function, the body must start on the same line. If you start on the bottom line you will get an compiler error.

For example:

```jule
// It's fine.
fn main() {
    // ...
}

// It's bad.
fn main()
{
    // ...
}
```

## Statements

Statements are separated by a statement terminator: the semicolon (`;`).\
However, unless there is more than one statement on the same line, you don't need to include it, because JuleC will insert it automatically.

For example:
```jule
fn main() {
    [STATEMENT_1]; [STATEMENT_2]
    [STATEMENT_3]
    [STATEMENT_4]
}
```

## Expressions

Expressions can continue within the same statement. But for expressions that are too long, you may want to go to the next lines. There are two methods you can do here, one is to use parentheses and the other is to use binary expression rules.

### Parentheses

Parentheses accept all tokens until closed when used with expression. Therefore, you can continue to the next lines. This also applies to brace, and bracket.

For example:

```jule
let (x, y) = 20, false
if (x == 10 ||
    y == false) {
}
```

### Contiguous expressions

Binary expressions try to check from the next line if they need an operand even without parentheses. Therefore, with correct use, you can proceed to the next lines with a binary expression. It is often considered a more readable approach than parentheses.

For example:

```jule
let (x, y) = 20, false
if x == 10 ||
    y == false {
}
```

---

The same applies to dots.

For example:
```jule
foo.
    bar().
    baz()
```
