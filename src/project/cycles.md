# Cycles
Illegal cycles occur when the program will have an invalid runtime cycle. 

For example:
```jule
struct A {
    b: B
}

struct B {
    a: A
}
```

In the example above, both structures refer directly to each other. This is an illegal cycle.

---

```jule
struct A {
    a: A
}
```
In the example above, structure refers directly to itself. This is an illegal cycle. 