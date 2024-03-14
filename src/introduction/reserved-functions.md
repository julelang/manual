# Reserved Functions

## Entry Point
The entry point is the first routine that starts running when the program runs.\
You must have a entry point. If you not have, code does not compile.

Jule's entry point function is `main` function.\
Entry point is should be void function and not have any parameter. 

\
For example:
```jule
fn main() {
    // Your entry point function body.
}
```

## Initializer Function
It is a one-time initialize function when a package is imported.\
If you use it in your main program package, it will be executed before the entry point.

Jule's initialize function is `init` function.\
Initializer function is should be void function and not have any parameter.

\
For example:
```jule
fn init() {
    // Your initialize function body.
}
```

## Differences of Entry Point and Initializer Function

The entry point is the main entry point of your program.
The program starts executing from here.
Without the entry point your code will not compile.

The initializer function is part of Jule's package system.
The difference is that the initializer functions are called automatically when the package is imported.
This function can be thought of as a kind of constructor function of packages.
Therefore, all initializer functions are called before the entry point of program.

Init functions can be declared more than one, unlike entry point.
So your source code can include many initiliazer function.
This might be helpful for large code bases or platform specific programming cases.
If source code includes many init function, calling order is not deterministic.
So if you carry about calling order of init functions, you should be aware of that.

Init functions are cannot evaluate, unlike entry point.
So you can call entry point from any point of source code, but init functions technically is not exist for evaluation.
So you cannot invoke init functions.
