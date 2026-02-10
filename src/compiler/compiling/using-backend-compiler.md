# Using Backend Compiler
julec has multiple officially supported C++ compilers. For this reason, it does not contain a specific C++ compiler in itself to keep your download sizes small and leave the choice to you. If you're using Linux or a similar operating system, you usually already have an officially supported C++ compiler. Once you've decided on the C++ compiler you want to use, julec can take care of the rest for you. Before that, you need to give julec a few simple instructions.

julec will automatically choose the recommended C++ compiler when compiling your code. If the recommended compiler is your preferred compiler, you don't need to take any action. But if not, you need to set your compiler using the related compiler option(s).

If you need a special configuration for your build, it is recommended to create a script file for it or write a compile command in a document such as a readme files. This makes it clearer and easier to compile the project, as well as a faster and more comfortable development experience.

Please read [backend](/compiler/backend/) documentation for more information about supported C++ compilers and standards.