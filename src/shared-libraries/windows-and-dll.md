# Windows and DLL

On Windows, shared libraries are used as DLL files. To dynamically load and access these libraries, functions such as `LoadLibrary` and `GetProcAddress` provided by the Windows API are used.

## Using Pure Jule

The [`std/sys`](/std/sys) package provides an API for loading DLL files. The `LoadDLL` function loads DLL, it is an exceptional function. For the global scope, you can use the `MustLoadDLL` function, which is a non-exceptional function; it panics when any error appears.

To access any proc, you can use the DLL object returned from the `LoadDLL` or `MustLoadDLL` function. The `FindProc` method searches for the proc and returns it. Since this is an exceptional-function, you may need to use the `MustFindProc` method for the global scope, like `MustLoadDLL`.

To call any proc, [`Addrcalls`](/low-level-helpers/syscalls/addrcalls) are useful and flexible.

For example:
```jule
use "std/sys"

let kernel32 = sys::MustLoadDLL("kernel32.dll")
let procExitProcess = kernel32.MustFindProc("ExitProcess")
let procGetModuleFileName = kernel32.MustFindProc("GetModuleFileNameA")

fn main() {
	mut path := make([]byte, 1024)
	r := sys::Addrcall[u32](procGetModuleFileName.Addr(),
		uintptr(0), &path[0], u32(len(path)))
	if r == 0 {
		sys::Addrcall(procExitProcess.Addr(), uint(1))
	}
	println(str(path[:r]))
}
```
In the example above, the `ExitProcess` and `GetmoduleFileNameA` functions are linked from `kernel32.dll`, which is dynamically linked with the `MustLoadDLL` function. Too call linked DLL procs, the `Addrcall` function is used.

Addrcalls are flexible and sign-free low-level abstractions for address-based function calls. But they may be complex or not easy-to-use enough to support maintainability and type safety, wrapper functions are recommended.

Just wrap the relevant addrcall with the Jule function. Make code more maintainable, easy-to-use, and type-safe.

For example:
```jule
use "std/sys"

let kernel32 = sys::MustLoadDLL("kernel32.dll")
let procExitProcess = kernel32.MustFindProc("ExitProcess")
let procGetModuleFileName = kernel32.MustFindProc("GetModuleFileNameA")

fn GetModuleFileName(mut path: []byte): u32 {
	ret sys::Addrcall[u32](procGetModuleFileName.Addr(),
		uintptr(0), &path[0], u32(len(path)))
}

fn ExitProcess(code: uint) {
	sys::Addrcall(procExitProcess.Addr(), code)
}

fn main() {
	mut path := make([]byte, 1024)
	r := GetModuleFileName(path)
	if r == 0 {
		ExitProcess(1)
	}
	println(str(path[:r]))
}
```
In the example above, the `ExitProcess` and `GetModuleFileName` functions are wrappers for the corresponding DLL procs. No need to update all calls for any change, just update the wrapper. Jule's compiler will check type-safety for you. Basically, low-level addrcalls become safer and more reliable in this approach. **Highly recommended**.

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
use "std/integ/c"

extern use "mylib.hpp"

extern fn kernel32_ExitProcess(c: uint)
extern fn kernel32_GetModuleFileName(*unsafe, *c::Char, u32): u32

fn main() {
	mut path := make([]byte, 1024)
	size := u32(len(path))
	r := unsafe {
		extern.kernel32_GetModuleFileName(
			nil, (*c::Char)(&path[0]), size)
	}
	if r == 0 {
		extern.kernel32_ExitProcess(1)
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
use "std/sys"

extern use "mylib.hpp"

extern let kernel32_ExitProcess: *unsafe
extern let kernel32_GetModuleFileName: *unsafe

fn main() {
	mut path := make([]byte, 1024)
	size := u32(len(path))
	r := unsafe {
		sys::Addrcall[u32](
			uintptr(extern.kernel32_GetModuleFileName),
			(*unsafe)(nil), &path[0], size)
	}
	if r == 0 {
		sys::Addrcall(uintptr(extern.kernel32_ExitProcess), uint(1))
	}
	println(str(path[:r]))
}
```