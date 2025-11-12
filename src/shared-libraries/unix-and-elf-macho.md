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
use "std/bytes"
use "std/integ/c"

cpp use "mylib.hpp"

cpp fn libSystem_exit(c: c::Int)
cpp fn libSystem_NSGetExecutablePath(*c::Char, *c::UnsignedInt): c::Int

fn main() {
	mut path := make([]byte, 1024)
	mut size := u32(len(path))
	r := unsafe {
		cpp.libSystem_NSGetExecutablePath(
			(*c::Char)(&path[0]),
			(*c::UnsignedInt)(&size))
	}
	if r > 0 {
		cpp.libSystem_exit(1)
	}
	path = path[:bytes::IndexByte(path, 0)]
	println(str(path))
}
```

### Using Addrcalls

You can achieve the same thing using [Addrcalls](/low-level-helpers/syscalls/addrcalls).

For example:

`mylib.hpp`:
```cpp
#include <dlfcn.h>

void *libSystem = dlopen("/usr/lib/libSystem.B.dylib", 0);
void *libSystem_exit = dlsym(libSystem, "exit");
void *libSystem_NSGetExecutablePath = dlsym(libSystem, "_NSGetExecutablePath");
```

`main.jule`:
```jule
use "std/bytes"
use "std/integ/c"
use "std/sys"

cpp use "mylib.hpp"

cpp let libSystem_exit: *unsafe
cpp let libSystem_NSGetExecutablePath: *unsafe

fn main() {
	mut path := make([]byte, 1024)
	mut size := u32(len(path))
	r := unsafe {
		sys::Addrcall[c::Int](
			uintptr(cpp.libSystem_NSGetExecutablePath),
			&path[0], &size)
	}
	if r > 0 {
		sys::Addrcall(uintptr(cpp.libSystem_exit), i32(1))
	}
	path = path[:bytes::IndexByte(path, 0)]
	println(str(path))
}
```