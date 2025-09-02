# First Project

In this section, you will quickly create your first Jule project. You’ll learn the language details in later sections. This part is meant for a quick start and first look.

First, choose a workspace and create a `main.jule` file. Jule source code is written in files with the `.jule` extension. The compiler only works with these files. The `main.jule` file you create will be the file where you write your program.

When starting to learn a programming language, one of the most classic programs, perhaps the most popular, is "hello world". A simple implementation in Jule looks like this:
```jule
fn main() {
	println("hello world")
}
```
Once you've written your code in the `main.jule` file, you’re ready to compile. With the compiler, you perform package-based compilation. [Packages](/packages/) are a core part of Jule’s project management. The directory you compile from is treated as the main package of your program.

To compile your project with the compiler, you can use a command like the following:
```
julec .
```
This command treats the `.` directory, meaning your current working directory, as the main package and compiles it. This build is not an optimized, production-ready build. Instead, it is a debug-oriented build you can use to test and observe your program.

By default, the compiler uses the name `main`. After compilation, you will have an executable file named `main`. When you run this file, you will see the `hello world` output.