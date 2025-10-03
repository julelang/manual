# JuleDoc

The official documentation generator for the Jule programming language.

JuleDoc is a documentation generator for Jule developed using the Jule programming language. It helps keep your Jule code well documented, based on [documentation comments](/maintenance/documentation-comments) of the source code. It only generated documentation for the exported defines.

Except for the documentation algorithms, it relies heavily on [`std/jule`](/std/jule) and it's sub packages, which is the standard library packages used by the reference compiler also. JuleDoc also uses JuleFmt-like formatting to represent source code snippets in consistent format. But it is not generates all the code for some places, such as variables.

## Using

JuleDoc can process data from different sources. If a directory is given as an argument, it documents all Jule source code files located under the directory (not deep) and writes the output to stdout. If a file path is given, it documents the file and writes the output to stdout. Whenever there is any error, it will be written to stderr, exit code always will be zero.

For example:
```
$ juledoc [arguments] <directory>
```
```
$ juledoc [arguments] <file>
```

### Formatter Options

`-w`\
Write result to `doc.*` file instead of stdout.