# Deferred Scopes

The definitions provided by the API are used to implement Jule's deferred scopes. Deferred scopes are essentially a C++ lambda function and are assigned to a wrapper that calls the function in the destructor when it goes out of scope.

There is also a macro to do this quickly:
```cpp
#define __JULE_DEFER(BLOCK)
```

For example to use:

```cpp
__JULE_DEFER({
    std::cout << "Hello from Jule deferred scopes!" << std::endl;
});
```
