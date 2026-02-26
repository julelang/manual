# Objective-C++

Objective-C++ implements Objective-C's plugins for C++. In this way, it becomes possible to use Objective-C elements with C++ codes. With Jule, you can use Objective-C++ like Objective-C.

## Using

You can create your header files with the extension `.h` in the standard way. But we recommended to use `.hpp` extension for C++ headers. These are does not pose any compatibility issues as it is one of the standard extensions supported by Jule.

For recommended development experience, declarations should be in the header file and implementation in another source code file. In this context, let's say we have Objective-C++ code like this:

Our `log.hpp`:
```objective-cpp
#ifndef LOG_HPP
#define LOG_HPP

void Log(const char *text);

#endif // LOG_HPP
```

Our `log.mm`:
```objective-cpp
#include "log.hpp"

#include <Foundation/Foundation.h>

void Log(const char *text) {
    NSString *log = [[NSString alloc] initWithUTF8String:text];
    NSLog(@"%@", log);
}
```

We want to use above Objective-C++ code with Jule. The first thing we need to do is pass the `-framework Foundation` argument to the build command using the `jule:pass` top-directive. Otherwise, we will encounter a compilation error.

Then we link the definitions we want to use by linking the relevant header file and source code. Then we are ready to use it.

Our `main.jule`:
```jule
#pass "-framework" "Foundation"

extern use "log.hpp"
extern use "log.mm"

extern type char: byte
extern unsafe fn Log(text: *extern.char)

fn Log(text: str) {
    unsafe { extern.Log((*extern.char)(&text[0])) }
}

fn main() {
    Log("Log from Jule!")
}
```

::: tip
The above code also has wrapper in a Jule for external function. This increases safety and makes it easier to maintain the relevant function.
:::
