# C

The C programming language is a language that is used in many systems and has a wide ecosystem, and we do not want it to be excluded from Jule's interoperability. We want codes developed in C to be able to run with Jule with minimal effort.

Jule and C can work together, but you should remember that your compiler will probably evaluate your C code according to C++ rules. If you have C code that is incompatible with C++, you may need to make changes in the relevant sections of code.

Use the `cpp` keyword to use your C definitions. This still remains a common keyword. Everything required for interoperability is the same.
