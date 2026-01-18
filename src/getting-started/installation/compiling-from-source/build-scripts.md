# Build Scripts

The julec project has scripts for building/compiling the compiler. You can use them. If you execute a script, the result will be either a compilation error or a completion message.

::: warning
You should have julec for this option.
These examples assume you are in the source code `(src/julec)` directory of the julec.
:::

::: warning
The build scripts designed for developers. \
Compiles julec with zero optimization.
:::

### Windows
::: tip
Ideal scripts for Windows: usually batchfiles (.bat). 
:::

Using example for PowerShell:
```
$ build.bat
```

### macOS (Darwin)
::: tip
Ideal scripts for macOS: usually shellscripts (.sh).
:::

Using example for ZSH:
```
$ zsh build.sh
```

### Linux
::: tip
Ideal scripts for Linux: usually shellscripts (.sh). 
:::

Using example for Bash:
```
$ sh build.sh
```
