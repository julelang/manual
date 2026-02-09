# Iterations
Iterations allow you to repeat the algorithm according to certain conditions. The `for` keyword use for iterations in Jule.

## Infinity Iterations
Infinite iterations keep repeating endlessly until the loop is somehow broken.

For example:
```jule
fn main() {
    for {
        println("Hello, iterations")
    }
}
```
The above example prints `Hello, iterations` repeatedly.

## While Iterations
The while iterations are iterations that repeat as long as a certain condition is met. It is not much different from defining an infinite iteration.

For example:
```jule
fn main() {
    let mut counter = 0
    for counter <= 5 {
        println(counter)
        counter += 10
    }
}
```
The While loops use boolean expressions. As seen in the example above, the expression is written between the keyword and the block. This expression is evaluated before each loop, and if it returns true, the loop is iterated. This example just prints `0`.

## While-Next Iterations
If you've ever used a programming language, you're probably familiar with for loops. Jule doesn't have the classic for loops. The main reason for this is that it does not look stylish and is not readable. The first of the three iteration statements almost always serves to define a scope-specific variable. The main reason for use is a conditional iteration and a post-iteration step. For this reason, Jule has a different iteration that is more readable and is thought to serve the purpose better: while-next

While-next is almost the same as a classic while iteration. In this, the only addition is to be able to write an expression that will happen after the iteration step. While-next's statement is separated by the statement terminator. First comes the condition expression, then the statement.

For example:
```jule
fn main() {
    let mut i = 1
    for i <= 5; i++ {
        println(i)
    }
}
```
The while-next iteration above executes first if the condition is met. After execution, the statement is executed. Then the scope executes if the condition is met, so on.

## Range Iterations
Range iterations can be summarized as an iteration standard for collections. It repeats itself by looping through the elements of the collection.

Each identifier used for range is used to create a new variable. So if there is a definition that already has this identifier, it will be shaded.

For example:
```jule
fn main() {
    let s = "Hello"
    for i in s {
        println(i)
    }
}

// OUTPUT
// 0
// 1
// 2
// 3
// 4
```
Seen as the example at above, this is a range iteration.\
Iterations can have two variables: Current index and current element.

This example, just shows index. Let's see range iteration with content.

For example:
```jule
fn main() {
    let s = "Hello"
    for _, b in s {
        println(b)
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
Jule assign variables data types automatically by collection. Similar to type-inferred variables. If the index variable is numeric, Jule's auto data type is `int` type.
:::

---

Range iterations have immutable variables by default. But you may want to get them as mutable. For this, enclose the identifiers in parentheses and qualify the variable you want to be mutable as mutable.

For example:
```jule
fn main() {
    let s = "Hello"
    for (_, mut b) in s {
        println(b)
    }
}
```

## Iteration Controlling
We may want to check for iterations, this is normal and common. There are two ways to do this in Jule; The `continue` and `break` keywords.

If you want break the iteration, use the `break` keyword.

For example:
```jule
fn main() {
    for {
        println("Hello, World")
        break
    }
}
```
The example at above, normally prints `Hello, World` again and again. But just prints one time, because `break` keyword is breaks iteration.

---

If you want continue to next iteration, use the `continue` keyword.

For example:
```jule
fn main() {
    for {
        continue
        println("Hello, World")
    }
}
```
The example at above, normally prints `Hello, World` again and again. But prints nothing, because `continue` keyword is continue to next iteration. So print operation is the unreachable code.