# Aliasing

Jule allows defining type aliases to use existing types. The behavior of such aliases varies according to their semantics. Jule has two different type alias semantics: soft type alias and strict type alias.

## Soft Type Aliases

Soft type aliases is an alias for existing types defined by developer. When these aliases are used, they qualify the types they represent.

For example:
```jule
type int32 = i32

fn main() {
    let myInt: int32 = 100
    println(myInt)
}
```
As seen in the example above, there is an alias definition of `int32` for the `i32` data type. The keyword `type` comes first to define an alias. Then comes the name you want to give and which type it will represent. This alias will now represent `i32` when used.

In addition, it seems that this alias is used in variable definition. This is because the compiler recognizes the default types builtin. If your type alias represents a builtin definition, your type alias will not be detected as a type. For this reason, it is a more useful approach to specify specifically.

Conspicuously, the equal sign is used in the syntax. This is actually an intuitive design choice that indicates that this type alias is directly equivalent to the type it represents.

## Strict Type Aliases
<div class="warning-badge">experimental</div>

Strict type aliases are different from soft type aliases. Technically, they are considered a new and independent genre, even though they use the genre they refer to as a basis. That is, they are not directly equal to the type on which they are based. So they have a strict difference in type safety compared to soft type aliases, there is not even implicit casting between underlying types, explicit casting is required.

Defining a strict type alias is just like defining a soft type alias. However, colon should be used instead of equal sign.

For example:
```jule
type Int: int

fn main() {
	x := int(20)
	y := Int(x)
	println(x == int(y))
}
```
In the example above, the type `Int` is a strict type alias. The variable `x` is an `int` and the variable `y` is the value of `x` cast into `Int` type. So they use the same type and the same value. However, since `Int` is a new and independent type, it does not provide implicit compatibility as said. Therefore, in the following binary expression, the `y` variable should be cast to `int` type for compatibility.

These new types also support the impl statements. Because they represent a new, independent type, they allow impl statements to be used for them.

For example:
```jule
type Int: int

impl Int {
	fn IsEven(self): bool { ret self%2 == 0 }
	fn IsOdd(self): bool { ret self%2 == 1 }
}

fn main() {
	x := Int(20)
	println(x.IsEven())
	println(x.IsOdd())
}
```

Any bound methods will be ignored, regardless of the source data type. Strict type aliases have their own methods and do not inherit any methods from the source type.

When the source is a trait, you can use it for impl statements. But it does not behave like a new trait. For impl statements, the source type trait is valid. Strict type aliases to a trait are generally only useful for adding methods specific to that type, but they are not helpful for creating a new duplicate trait.

If the source type is a structure, it inherits the structure's fields, although methods are ignored. In other words, the new strict type will have the fields of the relevant structure exactly.

Any static field of source type, such as type constants or enum fields, will not be derived.