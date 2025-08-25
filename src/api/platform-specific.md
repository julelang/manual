# Platform Specific

If you want to do platform specific programming, the API provides a number of methods for that. Of course, macro definitions are inevitable to be presented at this point. If you include the `platform.hpp` header, it will contain several macro definitions for platform-specific programming.

## Operating System
Defines these macros by condition:
- `__JULE_OS_WINDOWS`: if platform is Windows.
- `__JULE_OS_LINUX`: if platform is Linux.
- `__JULE_OS_DARWIN`: if platform is Darwin.
- `__JULE_OS_UNIX`: if platform is Linux or Darwin.

## Architecture
Defines these macros by condition:
- `__JULE_ARCH_AMD64`: if architecture is AMD64.
- `__JULE_ARCH_ARM`: if architecture is ARM.
- `__JULE_ARCH_ARM64`: if architecture is ARM64.
- `__JULE_ARCH_I386`: if architecture is intel 386.
- `__JULE_ARCH_X64`: if architecture is AMD64 or ARM64.
- `__JULE_ARCH_X32`: if architecture is ARM or intel 386.
