# Syscalls

The [`std/sys`](/std/sys) package is a package provided by the standard library and contains low-level syscalls or Assembly-like functionalities with low abstractions. To be able to use it, it must be declared just like a use declaration.

For example:
```jule
use "std/sys"

fn main() {
	sys::Write(1, []byte("hello world"))!
}
```
In the example above, consider this program will compile for linux. The `sys` package provides `write` function with minimal abstraction. The example code prints `hello world` to stdout.

The equivalent C code:
```c
#include <unistd.h>

int main() {
	char m[] = "hello world";
	write(1, m, sizeof(m) / sizeof(char));
	return 0;
}
```