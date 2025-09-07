# Disable Safety

You may not implement some safety algorithms of the API. There is a preprocessor define for manipulating an implementation for this. API not implements related safety measures if this preprocessor define is defined.

**Disables:**
- Null pointer checking
- Boundary checking for array, slice, or any contiguous memory structure
- Type compatibility checking for casting `any` type, traits or etc.
- Catching divide-by-zero undefined behavior for relevant math functions

To do this, define the `__JULE_DISABLE__SAFETY` macro before include relevant headers.

::: tip
API provides safety measures separately, so you can use unsafe versions where it needed.
So you can avoid to disable safety for the whole program.
:::

For example:
```cpp
#define __JULE_DISABLE__SAFETY

#include "api/jule.hpp"
```

