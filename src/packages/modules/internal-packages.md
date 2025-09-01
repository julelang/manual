# Internal Packages

Modules support internal packages, which are packages accessible only within the same module. External packages cannot access internal packages. This is ideal for sharing code internally while keeping it hidden from outside consumers, a common requirement for third-party libraries.

To define an internal package, simply name the package `internal`. Any sub-packages under it are also treated as internal and inaccessible from outside the module.

Example project structure:
```
project/
├─ foo/
│  ├─ internal/
│  │  └─ internal.jule
│  ├─ jule.mod
│  └─ foo.jule
├─ jule.mod
└─ main.jule
```

The `foo` package has its own module (`foo/jule.mod`), making `foo` the root of its module. The `internal` package under `foo` is internal to this module. All code within the `foo` module can access it. The `main.jule` file belongs to a different module (the project root module) and cannot access `foo/internal`, even though it can import the `foo` package itself.