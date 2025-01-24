# Assertion Casting

Assertion casting is a method supported for all dynamic types. In Jule runtime, casting a dynamic type to an incorrect type results in a panic. To prevent this, methods such as the `type match` statement can be used. However, assertion casting provides a more elegant and simpler way to achieve this. It is often a better choice than solutions like `type match`, especially when only a small number of types need to be handled.

Assertion casting means that a casting expression returns two values. One of these values is the actual value held by the dynamic type if the casting is successful, while the other is a boolean indicating whether the casting was successful or not.

For example:
```jule
x := any("hello world")
s, ok := any(x)
println(s)
println(ok)
```
In the code above, an assertion casting has been applied. The variable `s` is assigned the value inside the dynamic type if the casting is successful; otherwise, it is assigned the default value of the type. The variable `ok` is equal to `true` if the casting is successful and `false` if it fails.