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
To develop a 3rd party package, you can develop a package locally.\
For this, a structure like the following is recommended: 
```
head/
├─ yourpackage/
│  └─ ...
│
└─ main.jule
```
As shown in the example above, it is recommended to design your package as a sub-package inside the main package. This is because, in fact, its users will be using it that way. So you can get the most accurate development experience. If your package has subpackages, you can import them according to the use declaration rules. Since your package will be a sub-package of the main package, you will obviously be conscious that you are importing from your own package.

You can use `main.jule` and your other main package files to test the package you are developing. You will not need your main package when publishing your package. This is just an approach that can help you have a better developer experience as a method you use by importing the package you developed. When you publish your package, it is sufficient to directly publish your original package (`yourpackage` in the example above) that you developed.

If your package has a dependency, ie not developed with pure Jule, you can choose to locate these dependencies in the package. When you require packages to be installed separately, developers who want to install the source code directly may be hesitant to use your package. The possible harm of this is that your dependency is also available subpackage of your package, as it will be considered as a subpackage. Jule does not yet offer a restriction for this. However, this shouldn't be a big deal, as the package is already intended for public use. Chances are, some developers might think there's a problem with your package and report a bug about your dependency package to you. While this can be distasteful for you at times, we hope that in the future Jule will have improvements to resolve them. 