# Using Packages
The use declarations act as importing other packages for use in your code.\
Declared with the `use` keyword. 
::: warning
- You can't use already used packages.
- You must declare uses at the beginning of code.
- You can't access to private (not-exported) definitions.
:::

## Import Paths

Import paths is data used to import packages. It is written between double quotes, but they are not a string literal. The path is handled by removing quotes.

For a path to be valid, it must comply with some rules:
- Cannot contain `_`. So `_/...`, `.../_/...` or `.../_` are invalid.
- Each subpackage is separated from each other by the `/` character. There cannot be an empty distinction, so `//` is invalid. Cannot start or end with `/` also.

Jule processes these import paths accordingly and reads the packages by converting them to the file system path.

### Standard Library

To import standard library packages, the import path must start with `std/...`. Any package that starts this way is considered a standard library package.

For example:
- `std/conv`
- `std/runtime`
- `std/unicode/utf8`

Having any native module package `std` will make it unreachable. Because there is no local module search after the standard library search. Therefore, avoid designing native module packages to start with `std`.

### Module
Your own project may not consist of only one package, the main one. You may want to include different packages in your project. It is a useful action to use separate packages for the organization of the project. Jule recognizes subpackages in your project's main package and allows you to import those subpackages.

For example, your main package is head directory. This package is your entry package for project. But for this, your main program must also be a module. For more information about modules, you can look at the [modules](/packages/modules/) section.

Your example project tree:
```
head/
├─ foo/
│  ├─ bar/
│  │  ├─ README.md
│  │  └─ bar.jule
│  │
│  ├─ README.md
│  └─ foo.jule
│
├─ jule.mod
├─ LICENSE
└─ main.jule
```
As you can see in your project tree, your main package `head` directory has `foo` directory. This directory is a subpackage accessible to you and it also has a subpackage called `bar`. However, also check where your `jule.mod` file is located.

Using your subpackages is simple, here is an example:
```jule
use "foo"
use "foo/bar"
```
As you can see in the example above, each subpackage in your main package represents a chain of packages that you can use. This means that in your subpackages you will follow the same syntax when you try to use your other subpackages. The packages you can import start from your main module, where your module file is located.

## Namespaces

Namespaces (aka aliases) are a unique name that must be present for each use declaration. Conflicts are only possible within the scope of the use declaration; these names do not conflict with other definitions within the general scope of the program.

A namespace represents the package and enables access to package definitions. Double colon (`::`) is used to access the package definition using a namespace. This design choice was made to eliminate shading and minimize confusion.

An example of usage is the following expression:
```jule
foo::Bar()
```
The above example calls the `Bar` function inside the package represented by the `foo` namespace.

### Auto Alias

Jule automatically assigns an alias to each use declaration if it can. This often saves the developer the trouble of specifying a namespace for packages.

An automatic assignment is made based on the last identifier of the import path. This means that the last subpackage name is automatically considered for alias.

For example, some import paths and their parts used as alias:
- `foo`: `foo`
- `bar/foo`: `foo`
- `foo/bar/baz`: `baz`
- `foo/_bar_`: `_bar_`
- `foo/123`: `123`

When processing an alias automatically, some rules are observed. For example, the namespace must be a valid identifier. Therefore, if the final package representation does not provide a valid alias identifier, your compiler will prompt you to manually assign a valid one.

If the compiler is successful in assigning automatically, but the assigned alias has already been assigned to a different package, your compiler will request manual assignment.

For example, some import paths and results:
- `foo/bar/baz`: import path alias determined as `baz`
- `foo/şçö`: import path alias determined as `sçö`
- `foo`: import path alias determined as `foo`
- `foo/bar/1baz`: no valid identifier, requires manual assignment

### Custom Alias

In cases where the compiler's automatic namespace assignment is insufficient or a different preference is required, an alias can be assigned to a package manually.

To achiave this, there is no keyword for this. Just provide an identifier before the import path.

For example:
```jule
use foo "foo/123"
```
In the above example, the `foo` namespace is assigned for the `foo/123` import path. So the package can be accessed as `foo::`.


## Cycles
Import cycles are dependency cycles that shouldn't be, they are dependencies that don't make sense technically. When one or more packages exhibit an infinite state of interdependence, this is indicated by a compiler message. The compiler captures and handles these cycles, allowing the developer to understand and remediate logic errors of package dependencies.

It is an illegal cycle when a package tries to import itself within itself.
Logically, a package cannot be self-dependent.

This invalid dependency status is also valid if the package has dependencies on itself from different packages. For example, if one of the package's dependencies is dependent on the package itself, it's still an invalid cycle. This also applies to nested dependencies.
