# Production

Jule API provides debug implementation by default. Debug implementation may require additional information arguments at points such as function calls. In this context, there is a code difference between the production implementation and the debug implementation, so you may need to adapt to this.

If you want to use the Production implementation, define the `__JULE_ENABLE__PRODUCTION` macro before importing the relevant API sections.

For example:

```cpp
#define __JULE_ENABLE__PRODUCTION

#include "api/jule.hpp"
```
