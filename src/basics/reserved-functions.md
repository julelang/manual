# Reserved Functions

## Entry Point
The entry point is the first routine that starts running when the program runs.\
You must have a entry point. If you not have, code does not compile.

Jule's entry point function is `main` function.\
Entry point is should be void and not have any parameter. 

\
For example:
```
fn main() {
    // Your entry point function body.
}
```

## Initialize Function
It is a one-time initialize function when a package is imported.\
If you use it in your main program package, it will be executed before the entry point.

Jule's initialize function is `init` function.\
Initialize function is should be void and not have any parameter.

\
For example:
```
fn init() {
    // Your initialize function body.
}
```