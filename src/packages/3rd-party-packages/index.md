# 3rd Party Packages
3rd party packages are Jule packages not offered by Jule developers. These packages are supported and maintained by their developers. Package developers are responsible for updates and problems. 3rd party packages are very important and have significant advantages. You may want to use or develop 3rd party packages for various reasons.

Possible reasons of using 3rd party packages: 
- You don't want to reinvent the wheel
- It serves your purposes and has a well supported package
- Saving time or conscious technical debt

Possible reasons of developing 3rd party packages:
- Idea for a non-existent package that you or the community need
- You or community need an alternative or successor to a package
- Packing the codes you use often

## Using 3rd Party Packages
To use a 3rd party package, you need the package's source codes. Once you have the complete package's source code (and dependencies, if any), place it in your main package. You should then be able to import and use it as you wish, in accordance with the use declaration rules.

## Developing 3rd Party Packages

It is recommended that you design your packages starting from the root directory of your project.

For example:
```
mymodule/
├─ baz/
│  ├─ bat/
│  │  ├─ bat.jule
│  │  └─ bat_test.jule
│  │
│  ├─ baz.jule
│  └─ baz_test.jule
│
├─ bar.jule
├─ bar_test.jule
├─ foo.jule
├─ foo_test.jule
└─ jule.mod
```

The example project structure given above is the recommended structure. The main directory is the main content of the package. Subpackages are also positioned if necessary. The module file must be in the main directory of your project. Using a module will make your package more portable and easier to maintain. Please see [modules](/packages/modules/) section to find out how modules contribute to portability and maintainability.

You can write test files to test your project and secure your changes by testing them this way. For more information about test functions, please see the [writing tests](/debugging/testing/writing-tests) section.
