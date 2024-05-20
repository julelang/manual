# Code Style

About code style of Jule source codes.

## Naming Conventions
::: warning
These examples are the recommended style, not mandatory.
:::

Jule uses camelCase and PascalCase, with exceptions.

To choose between camelCase and PascalCase, public modifier status must be observed. If your definition is exportable and you want it, use PascalCase, otherwise use camelCase.

If there is no risk of your definition being exported, use PascalCase for constant variables. Use camelCase for local variables.

### Packages

Packages should use lowercase with no space.

### Source File

Source files should use snake_case.

## Indentions

The recommended indentation character for Jule is space. And the recommended indentation size is 4. So it is recommended to make your indents with 4 spaces. Lexer of Jule accepts tab characters in 8-sized.
