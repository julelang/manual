# Specification

Modules are represented with `jule.mod` files. The directories containing these files are treated as root directories, and their subdirectories behave as subpackages. Subpackages can also have their own dedicated modules.

## Module Names

Every module must have a module name. Module names define how the root directory of a module is represented in the import paths. This is important for portability, as it ensures a definitive name is used regardless of the root module directory.

In the module file, it is represented as follows:
```julemod
module mylib
```
In the example above, the module name is specified as `mylib`.

A module name may only consist of letters, digits, `_`, or `.` characters. The first character must be either a letter or an `_`.

::: warning
The `std` is a reserved name and cannot be used for modules as a name.
:::

## C++ Configurations

The name `cpp` is used for the C++ configuration. Inside it, configurations to be used for the C++ back-end are made. This is a clean way to define the specific C++ back-end adjustments that the module possesses.

For example:
```julemod
module mylib

cpp (
	include "mycpplib"

	link "mycpplink"
)
```

### Attributes

#### `include`

It takes a path and passes that path as an absolute path to the back-end compiler with the `-I` argument. The path must be within the module path. In other words, it looks for the specified directory path at the location where the module is situated.

For example:
```julemod
include "mycpplib"
include "include/mylib"
```

#### `link`

It takes a path and passes that path as an absolute path to the back-end compiler with the `-L` argument. The path must be within the module path. In other words, it looks for the specified directory path at the location where the module is situated.

For example:
```julemod
link "mycpplib"
link "lib/mylib"
```