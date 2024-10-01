# Objective-C

Objective-C is an object-oriented programming language written on top of C. It can be preferred especially by developers in the Apple ecosystem. You can use Jule and Objective-C together.

## Using

First of all, there's something you should know, Jule does not accept Objective-C source code lineages, ie `.m` extensions, for safety reasons. That's why Objective-C++ source code files should use the extension `.mm`. This is because compilers can have trouble compiling Objective-C and C++ code together.

You can create your header files with the extension `.h` in the standard way. This does not pose any compatibility issues as it is one of the standard extensions supported by Jule.

For recommended development experience, declarations should be in the header file and implementation in another source code file. In this context, let's say we have Objective-C code like this:

Our `cocoa.h`:
```objective-c
#ifndef COCOA_H
#define COCOA_H

int GetBitsPerPixel(const int &index);

#endif // COCOA_H
```

Our `cocoa.mm`:
```objective-c
#include "cocoa.h"

#include <Cocoa/Cocoa.h>

int GetBitsPerPixel(const int &index) {
    NSScreen *screen = [NSScreen mainScreen];
    NSWindowDepth depth = [screen depth];

    return (int)(NSBitsPerPixelFromDepth(depth));
}
```

We want to use above Objective-C code with Jule. The first thing we need to do is pass the `-framework Cocoa` argument to the build command using the `jule:pass` top-directive. Otherwise, we will encounter a compilation error.

Then we link the definitions we want to use by linking the relevant header file and source code. Then we are ready to use it.

For example:

Our `main.jule`:
```jule
#pass "-framework Cocoa"

cpp use "cocoa.h"
cpp use "cocoa.mm"

cpp fn GetBitsPerPixel(index: int): int

fn main() {
    let depth = cpp.GetBitsPerPixel(0)
    println(depth)
}
```
