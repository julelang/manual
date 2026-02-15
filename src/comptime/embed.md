# Embed

Your compiler allows you to embed certain resources into the source code at compile time. These embedded resources are incorporated into the program during compilation, so they do not negatively affect your program’s portability.

## Files

You can read and embed the contents of files as a byte slice or a string using the `comptime::IncludeBytes` and `comptime::IncludeStr` functions.

For example:
```jule
let copyrightBytes = comptime::IncludeBytes("copyright.txt")
const copyrightText = comptime::IncludeStr("copyright.txt")
```

`IncludeBytes` returns the contents of the file as a byte-slice literal. It cannot be used as a constant, but it can be stored by assigning it to variables. `IncludeStr`, on the other hand, returns it as a `str` and has the nature of an untyped constant, meaning it can be stored in a `const` variable.

These functions search for the file in the directory of the package where the source code that calls the function resides.\
An example schema:
```
project/
├─ foo/
│  ├─ bar/
│  │  ├─ copyright.txt
│  │  └─ bar.jule
│  └─ foo.jule
├─ jule.mod
└─ main.jule
```
According to the directory structure above, for the `copyright.txt` file path in the sample Jule code to be a valid usage, this code must be used in the `bar.jule` source file. The compiler will look for the file in the `project/foo/bar` directory. Otherwise, it will result in an error because the file cannot be found in other packages, since such a file does not exist in those packages.