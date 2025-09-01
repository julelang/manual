# Modules

Modules are the recommended way to organize a Jule project. A module defines the project’s structure and groups related packages in a safe, modular fashion. This enables the use of subpackages, helps maintain clean organization, and is especially useful when designing third-party packages.

Modules standardize code layout and establish the main structure of a project. The module file acts as the entry point: the directory containing it is treated as the module’s root, and the compiler processes your code accordingly.

## Initialize a Module

To create a module, run the compiler command in the target directory. This generates the required files and marks the current working directory as the root of your module.

For example:
```
$ julec mod init
```

## Module Files

A module is defined by a file named `jule.mod`. Its presence marks the directory as the root of the module and provides the necessary functionality for modular development.

## Using Modules

Modules are not optional if you want to use Jule’s testing features—without them, testing becomes more difficult and less functional. See [writing tests](/debugging/testing/writing-tests#modules) for details.

For most projects, subpackages are essential to maintainable development. Modules are required to organize and import these subpackages.

Modules resolve subpackages relative to the module root. In a [use declaration](/packages/using-packages), every import path must begin with the module name. Any import path that does not start with the module name is considered invalid.

For example:
```
project/
├─ foo/
│  ├─ bar/
│  │  └─ bar.jule
│  └─ foo.jule
├─ jule.mod
└─ main.jule
```

Here, `main.jule` must import the `bar` package as `"project/foo/bar"`, because the module root is `project/`. Likewise, the `foo` package must also use `"project/foo/bar"`, not just `bar`.

## Nested Modules

Nested modules are supported. This is common when importing third-party packages, which define their own modules independently of your project.

In such cases, each module treats its own `jule.mod` as the root. This ensures safe and predictable import paths.

For example:
```
project/
├─ foo/
│  ├─ bar/
│  │  └─ bar.jule
│  ├─ foo.jule
│  └─ jule.mod
├─ jule.mod
└─ main.jule
```

In this structure `main.jule` located in the root module, imports bar as `"project/foo/bar"`. The` foo` package, however, contains its own `jule.mod`, making it a separate module. Inside `foo`, the `bar` package is imported as `"foo/bar"`.

This design makes the `foo` package self-contained and portable. Thanks to its own module file, it can be moved or reused in different projects without breaking imports.