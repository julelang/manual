# Specification

Modules are represented with `jule.mod` files. The directories containing these files are treated as root directories, and their subdirectories behave as subpackages. Subpackages can also have their own dedicated modules.

## Module Names

Every module must have a module name. Module names define how the root directory of a module is represented in the import paths. This is important for portability, as it ensures a definitive name is used regardless of the root module directory.

In the module file, it is represented as follows:
```
module mylib
```
In the example above, the module name is specified as `mylib`.

A module name may only consist of letters, digits, `_`, or `.` characters. The first character must be either a letter or an `_`.

::: warning
The `std` is a reserved name and cannot be used for modules as a name.
:::