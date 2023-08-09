# Unsafe Defines

## Call Unsafe Functions or Methods
You can call unsafe functions with Unsafe Jule. Functions or methods that qualify as unsafe can only be called with Unsafe Jule. Functions that qualify as unsafe can only be called with an Unsafe Jule and have an Unsafe Jule throughout their entire body.

For example:
```jule
unsafe fn my_unsafe_fn() { /* ... */ }
```
::: tip
Before qualifying a function or method as unsafe, make sure that the function is not safe all time. Even if it performs unsafe operations, it is better for the function to act as a safe wrapper than to qualify as unsafe if safety is guaranteed.

If safety depends on parameters and other external factors then it is better to qualify as unsafe. 
:::
