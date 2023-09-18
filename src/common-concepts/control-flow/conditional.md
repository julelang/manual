# Conditional
If expressions allow you to manipulate the algorithm according to certain conditions. The `if` and `else` keywords use for if expressions in Jule. 

## `if` Statement
If the provided condition is `true` the block is executed, otherwise it is not executed. It is also the beginning of a new chain of conditions.

For example:
```jule
fn main() {
    let x: Error
    if x == nil {
        outln("error is not initialized")
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

## Ternary Operator

Ternary operator is a tool that can be used when two different expressions are required according to a condition. It must return two values ​​and the data types of the returned values ​​must be the same. The data type to be returned is accepted as the returned data type provided that it is true. The Else data must be a compatible type. Ternary is written like an if-else chain.

For example:
```jule
fn my_func(x: int): int {
    ret if x >= 50 {
            if x%2 == 0 {
                1000
            } else {
                500
            }
        } else {
            100
        }
}

fn main() {
    outln(my_func(50))
}
```

The return value obtained in the code example above should be `1000`.

### Restrictions

Ternary operators have restrictions on binary expressions to reduce complexity. You cannot use a ternary operator in a binary expression.

For example:
```jule
if x >= 50 { test() } else { 100 } + 20
```

The example above is incorrect. Your compiler does not allow such usage.

### Constant Evaluation

Where possible, ternary expressions can be subject to constant evaluation optimization.

For example:
```jule
const RATE = 60

fn rate_delta(): int {
    const r = if RATE >= 50 { 1000 } else { 100 }
    ret r + 20
}
```

The function in the example above returns the constant value `1020`.
