# Command-Line Arguments

The API has a variable for command-line arguments. But this variables are does not hold anything by default. The `argc` variable is count of command line arguments, and the `argv` variable is command line arguments.

Relevant variable (in `env.hpp`):
```cpp
int argc;
char **argv;
```

## Setup Command-Line Arguments

There is a function to set the command-line arguments variables. This function sets the value of the `jule::argc`, and `jule::argv` variables. It takes `argc` and `argv` as arguments.

Relevant function (in `env.hpp`):
```cpp
void setup_argv(int argc, char **argv);
```

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char **argv, char **envp) {
    jule::setup_argv(argc, argv);
    return 0;
}
```

## Get Command-Line Arguments

There is a function for get command-line arguments as Jule slice. It uses `jule::argc` and `jule::argv` variables internally, therefore you should call `jule::setup_argv` function before. But the `jule::arc` and `jule::argv` variables are not used on Windows systems. The Windows implementation uses the `GetCommandLineW` and `CommandLineToArgvW` functions.

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char **argv, char **envp) {
    jule::setup_argv(argc, argv);
    jule::outln(jule::args());
    return 0;
}
```

::: info
JuleC generates IR wich is calls the setup function in entry point by default.
:::
