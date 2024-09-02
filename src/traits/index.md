# Traits
Traits can be used to represent common behaviors. As a result of the implementation of a trait by one or more structures that exhibit common behavior, the trait it applies to becomes usable wherever it is used. A trait can only contain functions. A trait can be `nil`

## Define a Trait
Functions in a trait should only exist as prototypes (declaration of a trait, not a definition).

For example:
```jule
trait Person {
    fn name(self): str
    fn age(self): u8
}
```
All constructs that implement the trait above, must have the methods `name(self): str` and `age(self): u8`.

## Comparing Traits
During a comparison of traits: equal traits return true if two traits use the same allocation (both have the same pointer address), false if not. 

## Compatibility

A trait may be eligible to be cast into another trait, but there are some conditions. Most importantly, they exhibit the same behavior. In other words, the same definitions must be present in both. And they must be applied to the same structures. If these conditions are met, one trait can be cast into another.

For example:
```jule
trait Foo {
    fn foo(self)
}

trait Bar {
    fn bar(self)
}

trait FooBar {
    Foo
    Bar
}

struct Baz {}

impl FooBar for Baz {
    fn foo(self) { outln("foo") }
    fn bar(self) { outln("bar") }
}

fn main() {
    let a: FooBar = Baz{}
    a.foo()
    a.bar()
    let b: Foo = a
    b.foo()
    let c: Bar = a
    c.bar()
}
```

## Technical Details

Using traits is relatively cheap. To meet dynamic typed programming requirements, your compiler tries to obtain the necessary instructions at minimum cost.

At runtime, a trait stores and uses 3 different data;

- **Allocation**\
Allocation is a pointer to the data itself that the trait stores. Managed by GC. The current implementation handles this well. If a pointer that is already traced by the GC is passed to the trait, for example a smart pointer, the trait uses it by directly referencing that smart pointer rather than making a new allocation. This helps reduce memory allocations and increases efficiency.
- **Pointer State**\
Traits may take both a smart pointer or a normal instance for supported types. Accordingly, the deallocation method and type comparison also vary. If separate code was generated for both forms with and without smart pointers, this could significantly increase the size and compilation time of the executable. Since it does not contribute much to the runtime cost, it stores whether the stored data is a smart pointer or not with a simple boolean flag. In this way, it is sufficient to generate a single handler for each form of trait type.
- **Type Pointer**\
A trait container maintains a general pointer and this pointer is not traced by the GC because it is guaranteed to always will point to static memory that will be available for the lifetime of the program. This pointer points directly to the type handler structure automatically created by the compiler. The handler structure includes the deallocator function required for the type. The deallocator function is the first field of the structure. In this way, with a simple reinterpretation, the trait container can call the deallocator function when necessary. Each time trait is used, the type pointer is reinterpreted for the correct type, providing direct access to the required function.

The compiler defines additional wrapper functions so that the trait calls the right function of the right type. These wrapper functions are stored in conjunction with the handle structure pointed to by the type pointer. When a trait method called, trait calls the required wrapper function to performs the necessary type conversion and redirects to the original function.