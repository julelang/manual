# Using Packages
The use declarations act as importing other packages for use in your code.\
Declared with the `use` keyword. 
::: warning
- You can't use already used packages.
- You must declare uses at the beginning of code.
- You can't access to private (not-exported) definitions.
:::

## Use Declaration for Standard Library
To use standard library, standard path is used. It is quite plain and simple. You write the name of a package you want to use, if you want to use a sub-package, you separate it with a doouble colon. A reference to the standard library must begin with `std::`.

For example:
```jule
use std::pkg
```
```jule
use std::pkg::subpkg
```

## Use Declaration for Project
Your own project may not consist of only one package, the main one. You may want to include different packages in your project. It is a useful action to use separate packages for the organization of the project. Jule recognizes subpackages in your project's main package and allows you to import those subpackages.

For example, your main package is head directory. This package is your entry package for project. But for this, your main program must also be a module. For more information about modules, you can look at the [modules](/packages/modules) section.

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
use foo
use foo::bar
```
As you can see in the example above, each subpackage in your main package represents a chain of packages that you can use. This means that in your subpackages you will follow the same syntax when you try to use your other subpackages. The packages you can import start from your main module, where your module file is located.

## Using Use Declarations
The definitions that come with the use declaration are accessible with the namespaces. The namespace is same with use declaration.

For example:
```jule
use std::pkg

fn main() {
    std::pkg::a_function()
}
```

## Full Use Declarations
It is sufficient to add `::*` to the end of the use declaration that you want to import fully. The definitions of packages imported in this way can be used directly or optionally accessed with the classic namespace notation.

For example:
```jule
use std::pkg::*

fn main() {
    a_function()
    std::pkg::a_function()
}
```

## Selector Use Declarations
You can only import identifiers for the definitions you want imported. If you don't provide an identifier, nothing is imported. Imported definitions can be used directly. By default, there is no namespace representation.

For example:
```jule
use std::pkg::{a_function}

fn main() {
    a_function()
}
```

## Aliased Use Declarations

You may need to write quite long expressions to access the packages used, you can use alias to prevent this. It is recommended that aliases be used whenever possible and should be the primary choice. Alias ​​is represented by the `for` keyword and must be unique to the use declaration.

Aliases can be combined with other uses. When you use an alias select `self` so you can also use it with the full name of package. If you will generally use the alias but want to access some definitions directly, use selection for the relevant definitions.

For example:
```jule
use math for std::math::{
    self, // for accessing via full name of package
    pow,  // direct access to pow function
}

fn main() {
    outln(math::pow(5, 31))
    outln(std::math::pow(5, 31))
    outln(pow(5, 31))
}
```

---

If you want to import with Namespace but want to make some definitions directly available, use the `self` keyword.
```jule
use std::pkg::{self, a_function}

fn main() {
    a_function()
    std::pkg::a_function()
}
```
::: warning
You can't select same identifier with other use declarations.
:::

## Shadowing
When you import, definitions using the same identifier are shaded. When there is a conflict, the compiler will use the first imported definition. One solution might be to use the namespace notation to access shaded definitions.

For example:
```jule
use std::foo::* // Includes run function
use std::bar::* // Includes run function

fn main() {
    run()           // Calls std::foo::run
    std::foo::run() // Calls std::foo::run
    std::bar::run() // Calls std::bar::run
}
```

---

However, directly imported definitions can be shaded.

For example:
```jule
use std::foo::* // Includes pow function

fn pow() {}

fn main() {
    pow() // Calls pow, not std::foo:pow
}
```
But, any definition you explicitly import is treated as a native definition. A definition with the same identifier cannot be included in your source code in that file.

For example: 
```jule
use std::foo::{pow}

fn pow() {} // Error: duplicated identifier

fn main() {}
```
Likewise, you cannot shade definitions that you have explicitly imported before during import.

For example:
```jule
use std::foo::{run}
use std::bar::{run} // Error: duplicated identifier

fn main() {}
```

## Cycles
Import cycles are dependency cycles that shouldn't be, they are dependencies that don't make sense technically. When one or more packages exhibit an infinite state of interdependence, this is indicated by a compiler message. The compiler captures and handles these cycles, allowing the developer to understand and remediate logic errors of package dependencies.

It is an illegal cycle when a package tries to import itself within itself.
Logically, a package cannot be self-dependent.

This invalid dependency status is also valid if the package has dependencies on itself from different packages. For example, if one of the package's dependencies is dependent on the package itself, it's still an invalid cycle. This also applies to nested dependencies.
