# UNIX and ELF/Mach-O

On supported UNIX-Like systems, shared libraries are use ELF format. To dynamically load and access these libraries, functions such as `dlopen` and `dlsym` are used.

## Using C/C++

::: info
The example is for macOS.\
Uses macOS specific dynamic system library.
:::

`mylib.hpp`:
```cpp
#include <dlfcn.h>

void *libSystem = dlopen("/usr/lib/libSystem.B.dylib", 0);
auto libSystem_exit = (void (*)(int))(dlsym(libSystem, "exit"));
auto libSystem_NSGetExecutablePath = (int (*)(char *, unsigned int *))(dlsym(libSystem, "_NSGetExecutablePath"));
```

`main.jule`:
```jule
use integ "std/jule/integrated"

cpp use "mylib.hpp"

cpp fn libSystem_exit(c: integ::Int)
cpp fn libSystem_NSGetExecutablePath(*integ::Char, *integ::UnsignedInt): integ::Int

fn main() {
	mut path := make([]byte, 1024)
	mut size := u32(len(path))
	r := unsafe {
		cpp.libSystem_NSGetExecutablePath(
			(*integ::Char)(&path[0]),
			(*integ::UnsignedInt)(&size))
	}
	if r > 0 {
		cpp.libSystem_exit(1)
	}
	println(str(path[:size]))
}
```