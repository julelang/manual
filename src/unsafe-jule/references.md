# References

## Concurrent Calls with Reference Parameters

References cannot be used with concurrent calls because of potantial reference dangling. Because there is no clear guarantee that the concurrent call is being followed and that the program is safely waiting for the concurrent call to terminate at a non-dangling point. Therefore, your compiler cannot be sure that what you are doing is safe.

If you are confident and aware that this concurrent call you make will be safe, you should take responsibility by showing that you know that the call you are making is unsafe. So your compiler will respect you and allow you to concurrent call a function with reference parameters.

For example:
```jule
unsafe { co myFunction(myVar) }
```

## Access Reference from Parent Scope

Anonymous functions copy the definitions of the scope in which they are defined for safety reasons, they do not refer to them. But a copied reference is still a reference and is in danger of dangling. Therefore, anonymous functions do not use references from parent scopes. But Unsafe Jule lets you do just that. Access the relevant reference only with Unsafe Jule.

For example:
```jule
fn main() {
    let x = 10
    let &y = x
    fn() {
        unsafe { println(y) }
    }()
}
```

## Pass Raw Pointer to Reference

If you want to pass your pointers to a reference variable, you can do so with a simple pointer dereferencing. You are aware of the unsafety as this is already an action you would take using Unsafe Jule. It also allows skip variable-based expression requirement of references.

For example:
```jule
myMunction(unsafe { *myPointer })
```