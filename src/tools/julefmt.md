# JuleFmt

The official source code formatter for the Jule programming language.

JuleFmt is a source code formatter for Jule developed using the Jule programming language. It helps keep your Jule code in a consistent format. Except for the code formatting algorithms, it relies heavily on [`std/jule`](/std/jule) and it's sub packages, which is the standard library packages used by the reference compiler also.

## Using

It's easy to format your source code using JuleFmt. Just pass in the path of the package you want to format. JuleFmt will format and update all Jule source codes in the directory for you.

For example:
```
$ julefmt src
```

## Formatting Rules

- If there is an intermediate comment in the parameters, it is written at the end in case of a new line.
	- If a different parameter follows on the same line, that last comment is moved to the beginning of the other parameter.
	- Comments that start on the same line as the scope are transferred into the scope.
- In while iterations, comments before the statement are preserved. Followers are transferred into the scope.
- All inline comments in Inifity iterations are passed into scope.
- In binary expressions, if it is necessary to go to the next line, the indentation is increased only once and the following part is provided by this entry.
	- If this happens in a new expression with parentheses, indentation is applied in the same way. For indentation that continues after the parentheses, the previous indentation level is used, no alignment is performed.
	- If there is a shift to the bottom line in a binary expression, comments are exempt from any alignment process.
- In Foreach iterations, comments coming before key variables are considered to belong to the variables. Comments before the `in` token and expression are preserved. Follow-up comments are transferred into scope.
- In match expressions, comments before the expression are preserved. Followers are transferred into the scope. If there is a case, it owns it. If it does not exist, it is added to the scope.
	- Comments coming within the scope of case statements are evaluated within the scope. So, if you are going to write a comment for a case and there is a case before it, the comments are accepted within the scope of that case. Therefore, it must be written within the scope of the relevant case.
- In if statements, comments before the statement are preserved. Followers are transferred into the scope.
- Comments from other expressions are transferred into the scope.
- In trait declarations, comments are moved above the declaration.
- If there are comments between definitions in trait declarations, they are separated from each other by a space.
	- If they are next to each other without a comment, no spaces can be added.
- In Structure declarations, comments are moved above the declaration.
- In impl declarations, comments are moved above the declaration.
	- If the impl declaration is empty and has no comments, it will be grouped contiguously with subsequent impl declarations that have the same conditions.
- In enum declarations, comments are moved above the declaration.
- An expression in parentheses is combined into a single line, even if it is on a new line.
- Even if there are spaces after the comments between the use declarations, they will be ignored and merged with the following use declaration.
	- Spaces between use declarations are ignored and they are all listed one under the other.
	- Any encountered comment until the last use declaration will be moved above the all use declarations.
	- If there is a comment left after the Use declaration, it is considered to belong to the general scope.
	- Binded use declarations comes after ordinary use declarations and ordered with the path by the `strings::Compare` function of the `std/strings` package.
	- Ordinary use declarations ordered by the path with the `strings::Compare` function as well as binded use declarations.
	- In ordinary use declarations, standard library packages comes after other packages.
	- In binded use declarations, standard headers comes before other headers.
- The spaces between the top directives are ignored and they are all listed one under the other.
- A single directive is written along a single line. Even if it is passed down to lower lines, it is combined into a single line.
- The output is produced without using the statement terminator.
- Type declarations are always combined on a single line.
	- The comments inside are not processed regardless and are intuitively owned by the other node.
- All single-line comments are will be trimmed for trailing space chracters.