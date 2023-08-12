# Environment Variables

The API has a variable for environment variables. But this variable does not hold anything by default.

Relevant variable (in `environment.hpp`):
```cpp
jule::Slice<jule::Str> environment_variables;
```

## Setup Environment Variables

There is a function to set the environment variables variable. This function sets the value of the `jule::environment_variables` variable. It takes `envp` as arguments. But these arguments are not used on Windows systems. The Windows implementation uses the `GetEnvironmentStringsW` function.

Relevant function (in `environment.hpp`):
```cpp
void setup_environment_variables(char **envp);
```

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char *argv[], char *envp[]) {
    jule::setup_environment_variables(envp);
    return 0;
}
```

::: info
JuleC generates IR wich is calls the setup function in entry point by default.
:::
