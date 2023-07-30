# Platform Specific Programming

You may want to do platform specific programming for various reasons. The code in your project is platform-specific and easy to organize. Your platform-specific files are not included in the compilation.

## File Annotation
File Annotation enables a source file to be classified by operating system or architecture at compile time. If there is a platform or operating system that does not comply with Annotation, the source file is not included in the compilation. This is a compiler feature that can help with platform specific development. These annotations are available for all supported operating systems and architects. Check out [platform support](/compiler/platform-support) documentations to see the supported operating systems and architectures.

Attachments should be placed at the end and separated by underscore. Up to two annotations can be used. If you use a single annotation, this annotation can be both an operating system and an archtitecture annotation. If you use two annotations, the first annotation must be the operating system and the second annotation must be architecture. If there is no underscore, the entire name can also be matched.

For example:
```
darwin.jule
```
```
arm64.jule
```
```
unix_amd64.jule
```
```
example_amd64.jule
```
```
example_windows_amd64.jule
```
```
example_darwin_arm64.jule
```
```
example_linux.jule
```

## The `build` Directive

The `build` directive evaluates the expression you wrote with a custom syntax, and if the expression returns `true` as a result, your file will be included in the build. Expression must always return boolean. Expressions are only logical. So the variables you will use are boolean and the binary operations you can do are only logical and and logical or.

Your variables are set automatically by your compiler. The variables you can use are the same as in file annotation. They are variables that are also described in the [platform support](/compiler/platform-support) documentation.

::: warning
Evaluation results in `false` on any syntax errors and empty expressions.
:::

### Syntax

The syntax is simple and easy to learn. The logical and operator is `&&` and the logical or operator is `||`. These are exactly the same as Jule. The precedence of these operators is also the same. First, the logical or (`||`) operator is evaluated, then the logical and (`&&`) operator is evaluated. You also have parentheses. The parentheses, of course, are evaluated first. In addition to these, logical not (`!`) operator is also available.

### Examples

Here is an example code:

```
//jule:build (darwin || windows) && 64bit
```

The above expression will return `true` for windows and darwin operating systems with 64-bit architecture.

Another example:

```
//jule:build unix && !darwin
```

The above expression will return `true` for all unix operating systems except darwin.
