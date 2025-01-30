# Integrated Jule

Integrated Jule is all the functionalities for using C/C++ and Jule codes together. You can integrate a Jule code into C++ or you can integrate C++ codes into Jule. However, the recommended and primarily supported method is the integrated use of C++ codes in Jule.

In order to achieve good compatibility with Jule, it is recommended that C++ code be integrated into a fully compatible code with Jule by utilizing the API. If you want to integrate an existing C++ code into Jule, it is recommended to develop a wrapper.

Integrated Jule is an essential part of C/C++ interoperability.

## Library

The `std/jule/integrated` standard library is a major supporter of Integrated Jule's interoperability pillar. It provides a standard for widely used C/C++ definitions. This makes it possible to spend less time on C/C++ definitions that link to Jule code. In addition, it can not only make things easier, but also improve and simplify the implementation by providing algorithms for a number of tasks.

## API

The API provides tools to develop wrappers and more. You also have the equivalents of the elementary Jule concepts in C++ code, and therefore C++ definitions are possible, allowing for fully integrated compatible bindings to using in Jule.

It also gives you low-level access to the Jule runtime, along with some important functions provided by the Jule runtime API.