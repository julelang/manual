# Backend

Backend can mean many things. It can refer to the code generation or platform-dependent optimization phases of reference compiler. Alternatively, it can refer to the IR code or the process of compiling the IR code.

## Backend Compiler

Backend compiler refers to your compiler that you use to compile IR codes. This compiler can be an officially supported compiler, or it can be a 3rd party compiler you prefer to use.

### Default C++ Backend Compiler

| JuleC Version | Windows                 | macOS | Linux |
| --------------|-------------------------|-------|-------|
| Beta 0.0.3    | Clang                   | Clang | Clang |
| Beta 0.0.2    | GNU Compiler Collection | Clang | Clang |
| Beta 0.0.1    | GNU Compiler Collection | Clang | Clang |

## Intermediate Representation (IR)

Intermediate representation, aka IR, is a ready-to-compile representation that your compiler generates. This representation is a different form of the Jule source code you want to compile. It is mostly created for use by the backend-compiler for compilation.

IR code can also be used to observe what code your compiler is generating. For example, the generated IR code may be different when some optimizations are on or off. IR representations can be useful to examine these differences.
