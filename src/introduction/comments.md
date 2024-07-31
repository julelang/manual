# Comments
Comments are useful for understanding code, making comments and explanations, taking notes, and sometimes writing little jokes.

In general, two types of comment lines appear in programming languages: line comment and range comment. Some programming languages only support one. Jule supports both of these common approaches.

## Line Comments

Line comments are declared with `//` and all content from the starting position to the end of the line is considered a comment.

For example:
```jule
const Life = 42 // Magic number of life.
```

## Range Comments

Range comments are used to comment a certain range. `/*` is used to start a range comment and `*/` is used to end it.

Where range comments are exist, they are ignored even if a line comment is written with `//`. This means your compiler will not ignore the behavior of a range comment closing `*/` after `//` characters.

For example:
```jule
fn Life(): int { ret 42 /* Magic number of life. */ }
```