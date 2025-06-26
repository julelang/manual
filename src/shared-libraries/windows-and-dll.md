# Windows and DLL

On Windows, shared libraries are used as DLL files. To dynamically load and access these libraries, functions such as `LoadLibrary` and `GetProcAddress` provided by the Windows API are used.

## Using C/C++

Using Integrated Jule, you can perform the necessary dynamic linking within C/C++ and integrate it into your Jule code for use.

For example:

`mylib.hpp`:
```cpp
#include <windows.h>

auto kernel32 = LoadLibrary("kernel32.dll");
auto kernel32_ExitProcess = (void(*)(UINT))(GetProcAddress(kernel32, "ExitProcess"));
auto kernel32_GetModuleFileName = (DWORD(*)(void *, char *, DWORD))(GetProcAddress(kernel32, "GetModuleFileNameA"));
```

`main.jule`:
```jule
use integ "std/jule/integrated"

cpp use "mylib.hpp"

cpp fn kernel32_ExitProcess(c: uint)
cpp fn kernel32_GetModuleFileName(*unsafe, *integ::Char, u32): u32

fn main() {
	mut path := make([]byte, 1024)
	mut size := u32(len(path))
	r := unsafe {
		cpp.kernel32_GetModuleFileName(
			nil, (*integ::Char)(&path[0]), size)
	}
	if r == 0 {
		cpp.kernel32_ExitProcess(1)
	}
	println(str(path[:r]))
}
```

### Using Addrcalls

You can achieve the same thing using [Addrcalls](/low-level-helpers/syscalls/addrcalls).

For example:

`mylib.hpp`:
```cpp
#include <windows.h>

auto kernel32 = LoadLibrary("kernel32.dll");
auto kernel32_ExitProcess = GetProcAddress(kernel32, "ExitProcess");
auto kernel32_GetModuleFileName = GetProcAddress(kernel32, "GetModuleFileNameA");
```

`main.jule`:
```jule
use integ "std/jule/integrated"
use "std/sys"

cpp use "mylib.hpp"

cpp let kernel32_ExitProcess: *unsafe
cpp let kernel32_GetModuleFileName: *unsafe

fn main() {
	mut path := make([]byte, 1024)
	mut size := u32(len(path))
	r := unsafe {
		sys::Addrcall[u32](
			uintptr(cpp.kernel32_GetModuleFileName),
			(*unsafe)(nil), &path[0], size)
	}
	if r == 0 {
		sys::Addrcall(uintptr(cpp.kernel32_ExitProcess), uint(1))
	}
	println(str(path[:r]))
}
```