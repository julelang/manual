# Using as Library

You may want to use the API as a separate library. This is possible. The API is developed with pure C++, it has no dependencies.

## Installation

To install the API, you need to get the API source codes from the source code. For this, it is sufficient to obtain the [`api`](https://github.com/julelang/jule/tree/master/api) directory in the root directory.

Then put this directory where you want to host it. You can change the name of the `api` directory to `jule` or something different if you wish.

All you have to do is have the header files, that's all. You are then ready to use it.

## Using and Compilation

You don't need to make any changes to your build processes for the API. All header files contain all implementation.

Just include and use them:
```cpp
#include <iostream>
#include "api/jule.hpp"

int main(int argc, char *argv[]) {
    jule::setup_argv(argc, argv);

    std::cout << "Command line arguments:" << std::endl;
    for (jule::Str arg: jule::args())
        std::cout << "  " << arg << std::endl;

    return 0;
}
```
