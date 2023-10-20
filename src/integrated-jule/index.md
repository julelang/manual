# Integrated Jule

Integrated Jule is all the functionalities for using C/C++ and Jule codes together. You can integrate a Jule code into C++ or you can integrate C++ codes into Jule. However, the recommended and primarily supported method is the integrated use of C++ codes in Jule.

In order to achieve good compatibility with Jule, it is recommended that C++ code be integrated into a fully compatible code with Jule by utilizing the API. If you want to integrate an existing C++ code into Jule, it is recommended to develop a wrapper.

Integrated Jule is an essential part of C/C++ interoperability.

## Library

The `std::jule::integrated` standard library is a major supporter of Integrated Jule's interoperability pillar. It provides a standard for widely used C/C++ definitions. This makes it possible to spend less time on C/C++ definitions that link to Jule code. In addition, it can not only make things easier, but also improve and simplify the implementation by providing algorithms for a number of tasks.

## API

The API provides tools to develop wrappers and more. You also have the equivalents of the elementary Jule concepts in C++ code, and therefore C++ definitions are possible, allowing for fully integrated compatible bindings to using in Jule.

It can help you implement some of your algorithms in C++, taking advantage of the functionality it provides independently of Jule concepts. For example, the API itself has functions based on Jule's `std::unicode::utf8` and `std::unicode::utf16` standard libraries. These libraries can assist with UTF-16 handling and the use of Unicode with the Windows API when you write code for Windows.
