# Code Style

About code style of Jule source codes.

## Naming Conventions
::: warning
These examples are the recommended style, not mandatory.
:::

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
| Static Method | snake_case | method, my_method |
| Static Field | PascalCase | Field, MyField |
| Field | snake_case | field, my_field |
| Constant Field | PascalCase | Field, MyField |
| Enum | PascalCase | Enum, MyEnum |
| Enum Fields | PascalCase | Variant, MyVariant |
| Type Alias | Full lowercase and not separated or PascalCase | mytype, Type, MyType |
| Generic Type | Starts with T and continue with numbers, or PascalCase | T1, T2, T, Generic, GenericType |

## Indentions

The recommended indentation character for Jule is space. And the recommended indentation size is 4. So it is recommended to make your indents with 4 spaces. Lexer of Jule accepts tab characters in 8-sized.
