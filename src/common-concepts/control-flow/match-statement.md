# Match Statements
If you need to make a selection and run an algorithm based on that selection, `match` is a good choice. The operator `|` is used for each case. For a block to be executed if not exist any match, don't give any expression to one case, aka default case. The default case should be last case.

**Syntax**
```jule
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
```jule
match my_integer {
| MY_INTEGER_MIN:
    outln("Minimum")
| MY_INTEGER_MAX:
    outln("Maximum")
|:
    outln("Between or not")
}
```

### Breaking Execution
As with iterations, you can break the execution of the block. The keyword `break` is sufficient for this.

For example:
```jule
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
```jule
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

### Multiple Cases
You can have a single algorithm for multiple cases. For this, you can give more than one expression for a case. The only addition in syntax is vline operator (`|`) between expressions.

For example:
```jule
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
```jule
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
The `any` or `trait` data type may contain any data and you may want to execute different algorithms based on this data, in which case type matching is useful. You can also determine types of trait's data. Type matching is easy. Just use the keyword `type` and then use the data type in case to match.

For example:
```jule
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

### Generic Matching

Type-Math is also used to map generics.
See the [Generic Type Matching](/types/generics#generic-type-matching) section for more information about this.
