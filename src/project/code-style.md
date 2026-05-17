# Code Style

About code style of Jule source codes.

## Naming Conventions
::: warning
These examples are the recommended style, not mandatory.
:::

Jule uses camelCase and PascalCase, with some exceptions.

Choose camelCase or PascalCase based on public status: use PascalCase for exportable definitions; otherwise, use camelCase.

Use camelCase for local variables. If your local variable is a constant, prefer PascalCase.

There may be some exceptions where you may use a different case, like SCREAMING_SNAKE_CASE.
For example, your API is based on or inspired by an existing API.
Such as `O_RDWR` and `O_CREAT` flags of POSIX.

### Packages

Packages should use lowercase with no space.

## Indentions

The recommended indentation character for Jule is tab.

Use the tab as an indentation character in your editor.\
You can change the tab size as you wish in most editors.