# Destructor Methods

Destructor methods are methods that are called automatically when created instances of structures are destroyed. It is usually used when there is a memory space that needs to be freed, or in similar circumstances.

Destructor methods are called automatically even on immutable instances. There is no harm in mutable operation since it is out of scope. But the need for mutability can arise when you want to call the method manually.

## The Dispose Trait

Jule has a built-in `Dispose` trait. To obtain a destructor method, it is necessary to implement the `Dispose` trait. Structures that implement this trait have a `dispose` method. This method is the destructor method and is called automatically when the build instances are destroyed.

For example:
```jule
impl Dispose for MyStruct {
    pub fn dispose(mut self) {
        // ...
    }
}
```
