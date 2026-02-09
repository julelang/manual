# Disable RC (Reference Counting)

You can disable parts of the API that implement reference counting. This does not remove all reference-counting functionality of the API. So the definitions used for reference counting and the like remain. But definitions that exhibit reference counting and the reference counting mechanism itself stop counting and do not automatically free memory allocations. This can cause your program to have high memory consumption and memory leaks.

To do this, define the `__JULE_DISABLE__REFERENCE_COUNTING` macro before include relevant headers.

For example:
```cpp
#define __JULE_DISABLE__REFERENCE_COUNTING

#include "api/jule.hpp"
```
