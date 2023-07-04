# Naming
::: warning
These examples are the recommended style, not mandatory.
:::

## Styles
| Type | Naming Case | Examples |
| ---- | ----------- | -------- |
| Package | lowercase | package, mypackage |
| Source File | snake_case | file.jule, my_file.jule |
| Constant | Capital letters and underscore separator | CONSTANT, MY_CONSTANT |
| Pub Global Variable | Capital letters and underscore separator | GLOBAL, MY_GLOBAL |
| Not Pub Global Variable | Capital letters and underscore separator, snake_case or notsplitted | GLOBAL, my_global, myglobal |
| Local Variable | snake_case | variable, my_variable |
| Function | snake_case | function, my_function |
| Struct | PascalCase | Struct, MyStruct |
| Method | snake_case | method, my_method |
| Field | snake_case | field, my_field |
| Enum | PascalCase | Enum, MyEnum |
| Enum Variants | PascalCase | Variant, MyVariant |
| Type | Full lowercase and not separated or PascalCase | mytype, Type, MyType |
| Generic Type | Starts with T and continue with numbers, or PascalCase | T1, T2, T, Generic, GenericType |

## File Annotation
File Annotation enables a source file to be classified by operating system or architecture at compile time. If there is a platform or operating system that does not comply with Annotation, the source file is not included in the compilation. This is a compiler feature that can help with platform specific development. These annotations are available for all supported operating systems and architects. Check out [these documents](/compiler/platform-support) to see the supported operating systems and architectures.

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
