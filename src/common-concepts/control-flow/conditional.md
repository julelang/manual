# Conditional
If expressions allow you to manipulate the algorithm according to certain conditions. The `if` and `else` keywords use for if expressions in Jule. 

## `if` Statement
If the provided condition is `true` the block is executed, otherwise it is not executed. It is also the beginning of a new chain of conditions.

For example:
```jule
fn main() {
    let x: any
    if x == nil {
        outln("x is not initialized")
    }
}
```

## `else if` Statement
If the preceding `if` and `else if` expressions have not been fulfilled, it is a condition presented as an alternative to them.

For example:
```jule
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

## `else` Statement
It is the block that will be executed unconditionally if the previous `if` and `else if` expressions are not fulfilled.

For example:
```jule
fn main() {
    let x = 20
    if x == 20 {
        outln("x is 20")
    } else {
        outln("x is not 20")
    }
}
```
