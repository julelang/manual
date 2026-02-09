# API Development

Jule aims to be interoperable with C/C++. But this must go both ways in some cases. So, while you can use C++ code with Jule, in some cases, you may need to use your Jule code in the C++ backend.

Jule provides the `export` directive to achieve this. Jule does not provide a standard for how to pass any definitions to the backend. In other words, it is often not possible to know which identifier your Jule codes will be reflected in the backend. To make this consistent and expose your Jule codes to the backend, you need to use the `export` directive.

Jule makes the `export` directive available only for global variables and functions. It always takes an absolute parameter. This parameter is the identifier that will be used to export. 

Here's an example to develop an API for your Jule code for the backend:
```jule
extern use "magicheader.hpp"

extern fn printMagic()

#export "magic_calculation"
fn magicCalculation(x: int, y: int): int {
	ret ((x * y) ^ 1) / 3
}

fn main() {
	extern.printMagic()
}
```

The `magicheader.hpp`:
```cpp
#ifndef MAGICHEADER_HPP
#define MAGICHEADER_HPP

#include <iostream>
#include "api/jule.hpp"

__jule_Int magic_calculation(__jule_Int, __jule_Int);

void printMagic() {
	__jule_Int x = 42;
	__jule_Int y = 89;
	std::cout << magic_calculation(x, y) << std::endl;
}

#endif
```

In the code example above, the Jule function with identifier `magicCalculation` is passed to the backend with identifier `magic_calculation`. It is called by a function in the backend with C++ interoperability. In this way, a bidirectional use can be achieved.

::: info
You cannot use exported functions as anonymous functions.
:::

::: warning
Jule does not check export identifiers. So you're doing low-level work, and you must know what you're doing. Any incorrect export identifier may cause compilation errors.

Additionally, Jule does not check whether export definitions collide with a different function. Therefore, it is recommended to set a custom prefix, especially if you are creating a backend API for your public libraries. For example, for the `barbaz` function in your `foo` package, this identifier might be safer: `__foo_barbaz`.
:::