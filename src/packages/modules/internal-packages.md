# Internal Packages

Modules enable the use of internal packages. Internal packages are packages that can only be accessed by packages inside the module and are not accessible by external packages. It is perfect for situations where packages are shared but must be closed to the outside. It is especially needed in 3rd party packages.

To define an internal package, it is sufficient to give the package name as `internal`. This package will now be an internal package. It is also a breaking point. Sub-packages of the package are also considered internal.

For example:
```
project/
├─ foo/
│  ├─ internal/
│  │  └─ internal.jule
│  │
│  ├─ jule.mod
│  └─ foo.jule
│
├─ jule.mod
└─ main.jule
```

In the above example, package `foo` has a module. According to the module rules, its main module is itself. The `internal` package located under the `foo` package is an internal package. The Jule source code inside the `foo` package has access to this internal package because they share the same module. However, the program's module, that is, the module of the main source code in the project, is a different module, so although the Jule source code in `main.jule` can access the `foo` package, it does not have the right to access the `foo::internal` package.
