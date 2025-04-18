# Labels
Goto statements need labels to jump somewhere in the algorithm. To declare a label, simply put the name of the tag followed by a colon.

For example: `repeat:`

## Going to Labels
The goto statements allow you to jump to any part of the algorithm.
The `goto` keyword is used for a goto statement. Jumping to a label is as simple as defining a label. First comes the keyword, then the label you want to jump to.

For example: `goto repeat`
::: tip
- You can jump to any label without breaking the rules.
- Labels are only valid for the function block you are in.
:::
::: warning
- If you jumps over any declaration you will get a compiler error.
- If you jumps into scope you will get a compiler error. The label must be in the same or parent scopes of goto statement.
- Each label declared and not used causes a compiler error.
:::

## Labels for `break` and `continue` Keywords
When using nested iterations or match expressions, the keywords `break` and `continue` are targeted to the last valid block. This makes it harder to target outer loops or the match expression.

For example:
```jule
fn main() {
    for {
        match {
        | true:
            break
        }
    }
}
```
An infinite iteration appears in this example. The `break` keyword inside the match expression breaks the match expression. This way there is no way to break the infinite loop. Maybe alternative solutions like using a goto label outside of the iteration could be adopted but this is confusion.

Again, label can be used to clear up this confusion. This is a more maintainable and clearer solution. Labels defined before an iteration and match expression can be used for targeting.

For example:
```jule
fn main() {
loop:
    for {
        match {
        | true:
            break loop
        }
    }
}
```
The above example will break the iteration outside. Because the "loop" label used by the `break` keyword indicates that iteration.
::: tip
These labels are not special for that, so `goto` keyword can use these labels.
:::