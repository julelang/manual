# Syntax

This section touches on the basic syntax rules of Jule.

## Bodies

Any body should follow its declaration. For example, you are defining a function, the body must start on the same line. If you start on the bottom line you will get an compiler error.

For example:

```
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
Statements separates with statement terminator.\
The statement terminator of Jule is the semicolon (`;`).\
Also, we sayed each statement separates with statement terminator and it is true. But statement terminator is always necessary? No.\
You can use statement terminator if you want write two or more statement as side-by-side. Except that, not necessary.\
Well, how we separate statements? Easy, please skip to next line or finish write.

For example:
```
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

```
let (x, y) = 20, false
if (x == 10 ||
	y == false) {
}
```

### Binary Expressions

Binary expressions try to check from the next line if they need an operand even without parentheses. Therefore, with correct use, you can proceed to the next lines with a binary expression. It is often considered a more readable approach than parentheses.

For example:

```
let (x, y) = 20, false
if x == 10 ||
	y == false {
}
```
