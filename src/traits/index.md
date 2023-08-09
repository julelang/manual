# Traits
Traits can be used to represent common behaviors. As a result of the implementation of a trait by one or more structures that exhibit common behavior, the trait it applies to becomes usable wherever it is used. A trait can only contain functions. A trait can be `nil`

## Define a Trait
Functions in a trait should only exist as prototypes (declaration of a trait, not a definition).

For example:
```jule
trait Person {
    fn name(): str
    fn age(): u8
}
```
All constructs that implement the trait above, must have the methods `name() str` and `age() u8`.

## Access Modifiers

Traits supports access modifiers for definitions. And access modifier of relevant define, should implemented as same.

For example:
```jule
trait Person {
    pub fn name(): str
    pub fn age(): u8
}
```

## Comparing Traits
During a comparison of traits: equal traits return true if two traits use the same allocation (both have the same pointer address), false if not. 