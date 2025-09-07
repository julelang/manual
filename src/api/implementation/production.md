# Production

If you want to use the Production implementation, define the `__JULE_ENABLE__PRODUCTION` macro before importing the relevant API sections. It will not change any signature in the API, it may change the underlying implementation.

For example:

```cpp
#define __JULE_ENABLE__PRODUCTION

#include "api/jule.hpp"
```
