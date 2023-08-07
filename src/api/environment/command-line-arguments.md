# Command-Line Arguments

The API has a variable for command-line arguments. But this variable does not hold anything by default.

Relevant variable (in `environment.hpp`):
```cpp
jule::Slice<jule::Str> command_line_args;
```

## Setup Command-Line Arguments

There is a function to set the Command-Line arguments variable. This function sets the value of the `jule::command_line_args` variable. It takes `argc` and `argv` as arguments. But these arguments are not used on Windows systems. The Windows implementation uses the `GetCommandLineW` and `CommandLineToArgvW` functions.

Relevant function (in `environment.hpp`):
```cpp
void setup_command_line_args(int argc, char *argv[]);
```

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char *argv[], char *envp[]) {
    jule::setup_command_line_args(argc, argv);
    return 0;
}
```

::: tip
JuleC generates IR wich is calls the setup function in entry point by default.
:::
