# Basic Commands
The basics of compiler commands.

## help
Shows help about of commands.
```
$ julec help
$ julec help <command>
```

## build
The build command compiles the packages named by the import paths.

The compile path must be the main package directory of the program.
When compiling packages, build ignores files that end in `_test.jule`.
The main package must have the entry point `main` function.
```
$ julec build [arguments] <path>
```

## test
The test command compiles the packages named by the import paths for testing.

The compile path must be the package directory of the program to be tested.
When compiling packages for testing, it will include files that end in `_test.jule`.
The package may have not the entry point `main` function, it will not be used.
Test compilations uses implicitly generated entry point for testing.

Read the [writing tests](/debugging/testing/writing-tests) section for more information.
```
$ julec test [arguments] <path>
```

## mod
```
$ julec mod <command>
```
Module commands.\
Read the [modules](/packages/modules/) section for more information.

## version
Shows version of the julec.
```
$ julec version
```

## tool
Tools for effective Jule. It includes tools that can add to your Jule experience.
See the command's help table for more information:
```
$ julec tool
```

## env
Show information about jule environment.
```
$ julec env
```