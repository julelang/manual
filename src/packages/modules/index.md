# Modules

Modules are the most common and recommended way to organize a Jule project. A module defines the structure of the project and safely groups all packages within the project to achieve modularization. This allows you to have subpackages in any project and organize code effectively. It is also important when designing third-party packages, as it provides the organization for the package.

Modules standardize your code and outline its main structure. Your module file is a type specifier, the directory where the file is located is considered the parent directory of your module and your compiler processes your code accordingly.

## Initialize a Module

To create a module, run the required compiler command in your targeted directory. This will create the necessary files for you and designate your current working directory as your main module package.

For example:
```
$ julec mod init
```

## Module Files

Module files ensure that the directory in which they are located is determined as the main module directory. A module file is called `jule.mod` and acts as a file that provides you with all the required functionality of your module.

## Using Modules

It is useful to use modules. It is more difficult to test your projects without using a module because you cannot use Jule's testing functions without a module. Actually maybe you can test it, but using a module is more functional. See [writing tests](/debugging/testing/writing-tests#modules) for more information for that.

For most programs it is necessary to write subpackages. It is important for a streamlined and maintainable development experience. You also need to use a module to access sub-packages.

Modules can access sub-packages from the main package through their own package import behavior. This applies to all modules. In a [use declaration](/packages/using-packages), to import any subpackage, the name of the current module in that scope must be used first. Import paths that do not start with the module name are considered invalid.

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

In the project structure above, the `main.jule` file must use `"project/foo/bar"` to use the `bar` package of module. This is because the module directory is the `project` directory. Likewise, the `foo` package should use `"project/foo/bar"` instead of `bar`.

## Nested Modules

Nested modules are supported. In a common scenario, when importing third-party packages, the package also has its own module outside of your own module. In nested modules, the main module for the package is considered its own module. In this way, import paths of packages etc. Sensitive matters are kept safe.

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

In the example above, since `main.jule` has a module file, it will import the `bar` package with `"package/foo/bar"`. However, since the `foo` package has a module within itself, it is its main package. So it uses `"foo/bar"` to import the `bar` package.

In this way, the `foo` package was designed as a separate module and became more portable. It should be easy to move to different locations due to its intuitive imports thanks to the module file.
