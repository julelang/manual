# Platform Specific

If you want to do platform specific programming, the API provides a number of methods for that. Of course, macro definitions are inevitable to be presented at this point. If you include the `platform.hpp` header, it will contain several macro definitions for platform-specific programming.

## Operating System
Defines these macros by condition:
- `OS_WINDOWS`: if platform is Windows.
- `OS_LINUX`: if platform is Linux.
- `OS_DARWIN`: if platform is Darwin.
- `OS_UNIX`: if platform is Linux or Darwin.

## Architecture
Defines these macros by condition:
- `ARCH_AMD64`: if architecture is AMD64.
- `ARCH_ARM`: if architecture is ARM.
- `ARCH_ARM64`: if architecture is ARM64.
- `ARCH_I386`: if architecture is intel 386.
- `ARCH_64BIT`: if architecture is AMD64 or ARM64.
- `ARCH_32BIT`: if architecture is ARM or intel 386.
