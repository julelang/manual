# Environment Variables

The API has a variable for environment variables. But this variable does not hold anything by default.

Relevant variable (in `env.hpp`):
```cpp
char **envp;
```

## Setup Environment Variables

There is a function to set the environment variables variable. This function sets the value of the `jule::envp` variable. It takes `envp` as arguments ant sets the variable.

Relevant function (in `env.hpp`):
```cpp
void setup_envp(char **envp);
```

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char **argv, char **envp) {
    jule::setup_evp(envp);
    return 0;
}
```

::: info
JuleC generates IR wich is calls the setup function in entry point by default.
:::

## Get Envorionment Variables

There is function for get environment variables as Jule slice. It uses `jule::envp` variable internally, therefore you should call `jule::setup_envp` function before. But the `jule::envp` variable are not used on Windows systems. The Windows implementation uses the `GetEnvironmentStringsW` function.

For example:
```cpp
#include "api/jule.hpp"

int main(int argc, char *argv[], char *envp[]) {
    jule::setup_evp(envp);
    jule::outln(jule::env());
    return 0;
}
```
