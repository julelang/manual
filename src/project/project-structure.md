# Project Structure
Recommended work pattern and use of project directories for Jule:

::: info
This structure is recommended for program developers, not library/package developers. Packages should use a different approach. See [3rd Party Packages](/packages/3rd-party-packages/) for more information.
:::

## Source files
Nice names for the source directory of your project:
- `src`
- `source`

The source directory is the directory where your project's source code is located. It is recommended that you keep the source code of the language or languages you are using in this directory. If your project has more than one language, you can separate the languages in different directories in this directory. The same method can be applied if you have more than one program.

You can place your source code files directly in this directory. But if there is more than one program source code from your project, you can create a new directory under this directory for each program. In addition, if you wish, you can store the source code in a directory specific to your program, even though it is your only program.

## Scripts
Nice names for scripts of your project:
- `script`
- `scripts`

It is very natural for you to write some scripts for your project. It's better to have these scripts in a directory rather than having them cluttered around. If your scripts are applied for different directories, you can create a sub-order by creating those directories inside the script directory. Or you can create a new script directory in the corresponding directory.

If you would prefer not to have your scripts in the `scripts` directory or a similar one within the current directory, or if this is a more efficient approach, leave them in the directory as is.

## Documentations
Nice names for the documentation of your project:
- `docs`
- `documentation`
- `documentations`

It is recommended to keep the documents and explanations of your projects in this directory.

## Resources
Nice names for resources of your project:
- `res`
- `resources`

If you have resources for your project (png, jpg, gif etc.), it is recommended to keep them in this directory.