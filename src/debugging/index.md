# Debugging

Debugging is the process of understanding, detecting and solving bugs in computer software systems. There are many different methods for debugging, such as assertion, unit testing and control flow analysis.

## Compile for Debugging

Not every compilation means an effective result for debugging. Creating suitable compilations for debugging will make debugging easier.

Jule compiles debugable code by default. Code is often compiled for debugging purposes or for developers to test changes. Due to the optimizations and analysis they include, production builds often have longer build times and contain changes that make debugging harder. Therefore, by default, Jule compiles for debugging rather than production.

If you are debugging a software that is in production, it is recommended to recompile the same code for debugging for the best experience.
