# Build Scripts

The JuleC project has scripts for building/compiling the compiler. You can use them. If you execute a script, the result will be either a compilation error or a completion message.

::: warning
You should have JuleC for this option.
These examples assume you are in the source code `(src/julec)` directory of the JuleC.
:::

::: warning
The build scripts designed for developers. \
Compiles JuleC with zero optimization.
:::

### Windows
::: tip
Ideal scripts for Windows: usally batchfiles (.bat). 
:::

Using example for PowerShell:
```
$ build.bat
```

### macOS (Darwin)
::: tip
Ideal scripts for macOS: usally shellscripts (.sh).
:::

Using example for ZSH:
```
$ zsh build.sh
```

### Linux
::: tip
Ideal scripts for Linux: usally shellscripts (.sh). 
:::

Using example for Bash:
```
$ sh build.sh
```
