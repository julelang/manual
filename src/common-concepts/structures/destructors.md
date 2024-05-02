# Destructor Methods

Destructor methods are methods that are called automatically when created instances of structures are destroyed. It is usually used when there is a memory space that needs to be freed, or in similar circumstances.

Destructor methods are called automatically even on immutable instances. There is no harm in mutable operation since it is out of scope. But the need for mutability can arise when you want to call the method manually.

## The Dispose Method

Jule has a reserved `Dispose` method for structures. To obtain a destructor method, it is necessary to implement the [pattern](/common-concepts/structures/reserved-methods.html#pub-fn-dispose-mut-self). This method is the destructor method and is called automatically when the build instances are destroyed.

For example:
```jule
impl MyStruct {
    fn Dispose(mut self) {
        // ...
    }
}
```
