# Casting and Assertion

There are two mechanisms for dynamic types: casting and assertion. These mechanisms are used to determine the underlying types of dynamic types.

## Casting

Casting is used to convert the cast value into a dynamic type. The cast value will become the underlying type of the dynamic type. It is written in the same way as standard casting expressions.

### Traits

Traits, when cast between their implemented types (or inherited traits), behave according to the type they are cast into. If an implemented type is cast into a trait, the value is stored as the trait, making the trait its underlying type. If inherited traits are cast among each other, the underlying type remains unchanged, and only the metadata between traits is updated.

For example:
```jule
trait Foo1 {
	Foo2
}

trait Foo2 {
	fn foo2(self)
}

type Bar: int

impl Foo1 for Bar {
	fn foo2(self) {
		println("foo2")
	}
}

fn main() {
	x := Foo1(Bar(10))
	y := Foo2(x)
	y.foo2()
}
```
In the example above, the `Bar` value cast to the `Foo1` trait becomes the underlying type for `Foo1`, and its value is stored and exposed through the trait methods. When the `x` variable, which is of type `Foo1`, is cast to the `Foo2` trait, the underlying type information is updated according to the `Foo2` trait.

If a strict type alias points to a trait, that strict type alias behaves as the type it points to when the trait is involved. This means you can implement the trait for the types referenced by the strict type alias, including the strict type alias itself. However, you cannot store the trait within itself in any way. As a result, casting operations between a strict type alias and the referenced trait do nothing more than apply comptime type wrapping.

For example:
```jule
trait Foo {
	fn foo(self): str
}

struct Bar{}

impl Baz for Bar {
	fn foo(self): str {
		ret "bar"
	}
}

type Baz: Foo

impl Baz for Baz {
	fn foo(self): str {
		ret "baz"
	}
}

fn main() {
	mut x := Foo(Bar{})
	if x.foo() != "bar" {
		panic("should be bar")
	}
	x = Foo(Baz(x)) // equals to x=x
	_, ok := x.(Baz)
	if ok {
		panic("should be not ok")
	}
	if x.foo() != "bar" {
		panic("should be bar")
	}
}
```

In the example above, `Baz` is a strict type alias pointing to the `Foo` trait. It implements the trait for itself as well, but it will never be stored as a different type within the trait it points to. At compile time, a conversion like `Foo(Baz(x))` is merely a mechanism for guiding type safety and does not alter the underlying representation.

### Type-Enums

Values cast to a type-enum are handled similarly to `any` types, as type-enums typically behave like `any`. The only requirement is that the cast type must be compatible with the type-enum.

For example:
```jule
enum Foo: type {
	int,
	bool,
}

fn main() {
	mut x := Foo(10)
	x = true
	println(x)
}
```

If a type-enum inherited from another is cast to a different type-enum, the underlying type and data are shared. In other words, the inherited type-enum does not become the underlying type.

For example:
```jule
enum Bar: type {
	str,
}

enum Foo: type {
	Bar,
	int,
	bool,
}

fn main() {
	x := Bar("hello world")
	y := Foo(x)
	println(y)
}
```
In the example above, the `Foo` type-enum inherits the `Bar` type-enum. The variable `x` is a `Bar` containing string data. When cast to `Foo`, the variable `y` is of type `Foo`, but the underlying data remains the same as in `Bar`.

Strict type aliases are not inherited, so they behave as independent types. Even when a strict type alias points to a type-enum, the underlying type will remain the independent type represented by the strict type alias, not the type-enum it points to.

### any

The `any` type accepts and stores the underlying type for every compatible type it is cast to. If an `any` type is cast to another `any` type, the underlying type and value do not change. This applies even for strict type aliases that point to the `any` type.

## Type Assertions

Assertion casting is a method supported for all dynamic types. It is used to unwrap the underlying type. The syntax is slightly different from casting.

For example:
```jule
fn main() {
	x := any(10)
	y := x.(int)
	println(y)
}
```
In the above example, the `x` variable holds a value of type `int`. The `y` variable is initialized by unwrapping the underlying type of `x`, based on the assumption that the type of `x` is `int`.

When such an assertion expression fails, it typically means that the asserted type is not the underlying type, which causes a runtime panic. This happens because the type checking at runtime fails, and the system cannot guarantee the type consistency, leading to a panic.

### Assertion with Status

In Jule runtime, asserting a dynamic type to an incorrect type results in a panic. To prevent this, methods such as the `type match` statement can be used. However, type assertion provides a more elegant and simpler way to achieve this. It is often a better choice than solutions like `type match`, especially when only a small number of types need to be handled.

Assertion type with status means that a assertion expression returns two values. One of these values is the actual value held by the dynamic type if the assertion is successful, while the other is a boolean indicating whether the assertion was successful or not.

For example:
```jule
fn main() {
	x := any("hello world")
	s, ok := x.(str)
	println(s)
	println(ok)
}
```
In the code above, an assertion has been applied. The variable `s` is assigned the value inside the dynamic type if the casting is successful; otherwise, it is assigned the default value of the type. The variable `ok` is equal to `true` if the assertion is successful and `false` if it fails.