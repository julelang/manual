# Addrcalls

Addrcalls are low-level calls to a function address. An addrcall takes address to the destion function and calls it. It is different from Jule function calls. For anonymous functions, Jule runtime may store implicit data for closures and etc. Addrcalls just passes arguments.

**Jule Calls vs Addrcalls**

| Jule Call                                        | Addrcall                                                          |
|--------------------------------------------------|-------------------------------------------------------------------|
| Based on pointer with function type wrapper      | Based on raw pointer/memory address                               |
| Safety checks before call, like nil pointer      | No safety checks, immediately jumps to function                   |
| May be implicit arguments like closure data      | No hidden arguments, just explicit ones                           |
| Explicit sign, static type analysis              | Implicit sign, flexible, no static type analysis                  |
| Suitable for Jule functions and interoperability | Suitable for syscalls, low-level calls, advanced interoperability |

## Example Use

```jule
use "std/sys"

extern let write: *unsafe

fn main() {
	m := "hello, world"
	sys::Addrcall(uintptr(extern.write), i32(1), &m[0], len(m))
}
```
In the example above, the `write` function accessed with C is linked as if it were a pointer. Technically, functions are pointers. Then, its address is taken as an integer with uintptr and called with `Addrcall`. A simple `Hello, world` example.

The `Addrcall` function prototypes the called function according to the arguments.
Remember, the types must be correct. Any type mismatch can cause various problems.

### Return Values

Any `Addrcall` is void by default. So does not return value.
If your function return value, you can specify it with the single generic type.

For example:
```jule
use "std/sys"

extern let write: *unsafe

fn main() {
	m := "hello, world\n"
	n := sys::Addrcall[i32](uintptr(extern.write), i32(1), &m[0], len(m))
	println(n)
}
```
In the example above is basically same as the previous example.
But it reads return value of the `write` function.