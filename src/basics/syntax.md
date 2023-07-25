# Syntax

This section touches on the basic syntax rules of Jule.

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
