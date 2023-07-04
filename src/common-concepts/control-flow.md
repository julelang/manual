# Control Flow
We may want to guide the progress of the program with various conditions or repeat certain commands. That's what control flowers are for. Many programming languages have their control flows.

## Iterations
Iterations allow you to repeat the algorithm according to certain conditions. The `for` keyword use for iterations in Jule.

### Infinity Iterations
Infinite iterations keep repeating endlessly until the loop is somehow broken.

For example:
```
fn main() {
    for {
        outln("Hello, iterations")
    }
}
```
The above example prints `Hello, iterations` repeatedly.

### While Iterations
The while iterations are iterations that repeat as long as a certain condition is met. It is not much different from defining an infinite iteration.

For example:
```
fn main() {
    let mut counter = 0
    for counter <= 5 {
        outln(counter)
        counter += 10
    }
}
```
The While loops use boolean expressions. As seen in the example above, the expression is written between the keyword and the block. This expression is evaluated before each loop, and if it returns true, the loop is iterated. This example just prints `0`.

### While-Next Iterations
If you've ever used a programming language, you're probably familiar with for loops. Jule doesn't have the classic for loops. The main reason for this is that it does not look stylish and is not readable. The first of the three iteration statements almost always serves to define a scope-specific variable. The main reason for use is a conditional iteration and a post-iteration step. For this reason, Jule has a different iteration that is more readable and is thought to serve the purpose better: while-next

While-next is almost the same as a classic while iteration. In this, the only addition is to be able to write an expression that will happen after the iteration step. While-next's statement is separated by the statement terminator. First comes the condition expression, then statement.

For example:
```
fn main() {
    let mut i = 1
    for i <= 5; i++ {
        outln(i)
    }
}
```
The while-next iteration above executes first if the condition is met. After execution, the statement is executed. Then the scope executes if the condition is met, so on.

### Foreach Iterations
Foreach or for-each can be summarized as an iteration standard for collections. It repeats itself by looping through the elements of the collection.

Each identifier used for foreach is used to create a new variable. So if there is a definition that already has this identifier, it will be shaded.

For example:
```
fn main() {
    let s = "Hello"
    for i in s {
        outln(i)
    }
}

// OUTPUT
// 0
// 1
// 2
// 3
// 4
```
Seen as the example at above, this is a foreach iteration.\
Iterations can have two variables: Current index and current element.

This example, just shows index. Let's see foreach iteration with content.

For example:
```
fn main() {
    let s = "Hello"
    for _, b in s {
        outln(b)
    }
}

// OUTPUT
// 72
// 101
// 108
// 108
// 111
```
As you can see, it is possible to use the ignore operator for unused fields.
::: tip
Jule assign variables data types by automatically by collection. Similar to auto type variables. If the index variable is be numeric, Jule's auto data type is `int` type.
:::

---

Foreach iterations have immutable variables by default. But you may want to get them as mutable. For this, enclose the identifiers in parentheses and qualify the variable you want to be mutable as mutable.

For example:
```
fn main() {
    let s = "Hello"
    for (_, mut b) in s {
        outln(b)
    }
}
```

### Iteration Controlling
We may want to check for iterations, this is normal and common. There are two ways to do this in Jule; The `continue` and `break` keywords.

If you want break the iteration, use the `break` keyword.

For example:
```
fn main() {
    for {
        outln("Hello, World")
        break
    }
}
```
The example at above, normally prints `Hello, World` again and again. But just prints one time, because `break` keyword is breaks iteration.

---

If you want continue to next iteration, use the `continue` keyword.

For example:
```
fn main() {
    for {
        continue
        outln("Hello, World")
    }
}
```
The example at above, normally prints `Hello, World` again and again. But prints nothing, because `continue` keyword is continue to next iteration. So print operation is the unreachable code.

## If Expressions
If expressions allow you to manipulate the algorithm according to certain conditions. The `if` and `else` keywords use for if expressions in Jule. 

### `if` Expression
If the provided condition is `true` the block is executed, otherwise it is not executed. It is also the beginning of a new chain of conditions.

For example:
```
fn main() {
    let x: Error
    if x == nil {
        outln("error is not initialized")
    }
}
```

### `else if` Expression
If the preceding `if` and `else if` expressions have not been fulfilled, it is a condition presented as an alternative to them.

For example:
```
fn main() {
    let x = 100
    if x > 1000 {
        outln("greater than thousand")
    } else if x < 100 {
        outln("less than hundred")
    } else if x == 100 {
        outln("equals to hundred")
    }
}

// OUTPUT: equals to hundred
```

### `else` blocks
It is the block that will be executed unconditionally if the previous `if` and `else if` expressions are not fulfilled.

For example:
```
use std::errors

fn main() {
    let x: Error = std::errors::new("my error message")
    if x == nil {
        outln("error is not initialized")
    } else {
        outln("error is initialized")
    }
}
```

## Match Expressions
If you need to make a selection and run an algorithm based on that selection, `match` is a good choice. The operator `|` is used for each case. For a block to be executed if not exist any match, don't give any expression to one case. 

**Syntax**
```
match EXPRESSION {
| CASE_EXPRESSION1: // Body
| CASE_EXPRESSION2: // Body
| CASE_EXPRESSION3: // Body
|:                  // Body
}
```
**EXPRESSION**: Expression to match.
**CASE_EXPRESSION1**: Expression for case.
**CASE_EXPRESSION2**: Expression for another case.
**CASE_EXPRESSION3**: Expression for another case.
**No expression case**: Default block. 

For example:
```
match my_integer {
| MY_INTEGER_MIN: outln("Minimum")
| MY_INTEGER_MAX: outln("Maximum")
|:                outln("Between or not")
}
```

### Breaking Execution
As with iterations, you can break the execution of the block. The keyword `break` is sufficient for this.

For example:
```
match X {
| Y:
    if Y == A {
        break
    }
    // ...
| Z:
    // ...
}
```

### Condition Chain
If a match expression is not given, match acts like an if-else chain. This might be a more readable option on long condition chains.

For example:
```
match {
| x > 10 || x < 90:
    // Body
| my_bool:
    // Body
| y == 100:
    // Body
|:
    // Body
}
```

### Multiple Case Expression
You can have a single algorithm for multiple cases. For this, you can give more than one expression for a case. The only addition in syntax is vline operator (`|`) between expressions.

For example:
```
match X {
| Y | Z | V:
    // Body
| A | B:
    // Body
| C:
    // Body
|:
    // Body
}
```

### The `fall` Keyword
The fall keyword can only useable into case scopes and end of the scopes. It continues to next scope.

For example:
```
match {
| false:
    outln("Case1")
| true:
    outln("Case2")
    fall
| false:
    outln("Case3")
    fall
|:
    outln("Default")
}
```

Output:
```
Case2
Case3
Default
```

### Type Matching
The `any` data type may contain any data and you may want to execute different algorithms based on this data, in which case type matching is useful. You can also determine types of trait's data. Type matching is easy. Just use the keyword `type` and then use the data type in case to match.

For example:
```
fn main() {
    let x: any = 10
    match type x {
    | int:
        outln("integer")
    | f32 | f64:
        outln("floating-point")
    |:
        outln("other")
    }
}
```

## Goto Statements
The goto statements allow you to jump to any part of the algorithm.

### Labels
Goto statements need labels to jump somewhere in the algorithm. To declare a label, simply put the name of the tag followed by a colon.

For example: `repeat:`

### Going to Labels
The `goto` keyword is used for a goto statement. Jumping to a label is as simple as defining a label. First comes the keyword, then the label you want to jump to.

For example: `goto repeat`
::: tip
- You can jump to any label without breaking the rules.
- Labels are only valid for the function block you are in.
:::
::: warning
- If your jumps over any declaration you will get a compiler error.
- Each label declared and not used causes a compiler error.
:::

### Labels for `break` and `continue` Keywords
When using nested iterations or match expressions, the keywords `break` and `continue` are targeted to the last valid block. This makes it harder to target outer loops or the match expression.

For example:
```
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
```
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