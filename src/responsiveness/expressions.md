# Responsive Expressions

Responsiveness of expressions is based on eliminating the need for some additional information whenever possible. This is something that is largely based on the static type system. If your compiler knows the type in which the expression will be used, it can provide some optional simple methods, like removing static types.

Responsive identification of types is nothing new. Some languages ​​have even paid special attention to this in their design.

For example, from the readme of the Crystal programming language GitHub repository:
> We want the compiler to understand what we mean without having to specify types everywhere. \
> _**quote commit**: `991f9d0`_

Of course, this isn't a main focus of Jule's design, but it's considered reasonable to have it to a certain extent.

## Untyped Constant Numerics

Constant numeric expressions are flexible. Numeric values that are untyped (constant numerics that do not have any explicit type) are automatically handled as appropriate for the target type, if they are compatible with the target type.

For example:
```jule
fn main() {
	const a = -98345
	let b: i32 = a
	println(b)
}
```
The above code will compile successfully. The constant value `a` does not have an explicit type, so it is treated as untyped. The variable `b` expects a value of type `i32`. Since the expression `-98345` fits into this type, your compiler will automatically evaluate it. The same behavior will be observed with other fitter species. However, you will receive a compiler error for types that cannot take this value, such as `i16` or `u32`.

## Slices

Slices are one of the best examples of these responsive expressions, because a slice literal is mostly in this scope.

When creating a slice literal, if there is no information that it is for any type, your compiler will use the type of the first element. Since a slice will always accept a single type as an element, the first element always determines the type of the slice. In this way, writing slice literals can become simpler.

For example, writing an integer slice literal:
```jule
x := [1, 2, 3, 4, 5]
```
In the example above, the type of the variable `x` will be `[]int` because the type of the expression will be determined this way.

When creating a slice literal, the type for an empty literal must always be known, and if the type is known, the values ​​the literal takes are checked one by one against the target type.

For example:
```jule
fn main() {
	let mut x: []int
	x = []
	x = [false, 2, 3, "foo"]
}
```
In the example above, the empty slice literal is valid. Because the compiler knows that the expression will be assigned to the variable `x`. For this reason, the empty literal does not need an element to understand which slice type it is; it can detect its type as `[]int` in a responsive way.

In the following assignment, the values ​​`false` and `"foo"` will produce an error. This is because the compiler expects slice literal elements to be `int`, knowing that the type of slice must be `[]int`. So your compiler won't assume that this is a bool slice literal, since the first value is a bool in this case, it assumes the expected type.

## Arrays

Arrays are like slices. There is not much difference. It has a very similar syntax, and the rules are the same. There are only some differences. Array and slice literals are declared the same way. By default, your compiler tends to treat it as a slice literal. Therefore, array literals must always be explicitly created for an array. So it's easy for your compiler to know what the literal type is.

Array literal elements, just like slices, are checked according to the target type and can be empty.

For example:
```jule
fn main() {
	let mut x: [5]int
	x = []
	x = [1, 2, 3, 4, 5]
}
```
The above code is valid and compiles. Since literals are evaluated for assignment to the variable `x`, your compiler will consider their type as `[5]int`, and check the type safety of the elements accordingly.

## Structs

Structs must always have an explicit type. When this happens, the name of the structure does not need to be written. You can create a structure literal using only braces. Otherwise, your compiler will require the type to be specified explicitly because it doesn't know the type.

For example:
```jule
struct Foo {
	bar: int
	baz: str
}

fn main() {
	mut f := Foo{bar: 5, baz: "hello"}
	f = {bar: 6, baz: "world!"}
	println(f)
}
```
In the example above, the `f` variable is first initialized with a `Foo` literal. The compiler does not have the opportunity to apply any responsiveness here because `f` is declared for the first time and its type is ambiguous. Therefore, it is clearly stated that the literal is for the `Foo` structure. However, in the subsequent assignment, there are only braces. Because the compiler now knows the type of the variable `f`, there is no need to explicitly state that it is a `Foo` structure. The compiler will assume the expected type, and the literal will be treated as a structure literal for the `Foo` struct.

## Maps

Maps are similar to structures. When the type is clearly known, braces alone will suffice. Your compiler assumes the type will be the expected type and treats it as a literal for the corresponding map type.

For example:
```jule
fn main() {
	let mut f: map[int]str
	f = {
		0: "hello",
		1: " ",
		2: "world",
		3: "!",
	}
	println(f)
}
```
In the example above, since the type of the variable `f` is clearly known, it is sufficient to use only braces in the assignment. Brace literal evaluates to type `map[int]str`.

## Exceptional Handler Scopes

If the compiler knows the result of the exceptional handler scope will be assigned to the immutable storage, it allows using immutable expressions in the use statement.

For example:
```jule
fn getInt()!: &int { error("foo") }

fn main() {
	y := new(int, 90)
	x := getInt() else {
		use y
	}
	println(*x)
}
```
In the example above, the `use y` statement does not require the variable `y` to be mutable, since it is assigning to the variable `x`, which is immutable.

## Types and Literals

If the compiler knows that there must be a type in the expression, it will allow that type to be used, even if it is shadowed.

For example:
```jule
struct Test{
	a: int
	b: str
}

fn main() {
	Test := 10
	_ = Test
	_ = Test{a: 10, b: "foo"}
}
```
In the example program above, a variable named `Test` may shadow the `Test` structure. But in the case of a struct literal, the compiler knows there must be a type, so it uses the structure and not the variable for the type.