# Performance Tuning and Tips

This section contains suggestions and tips to help you write Jule code more effectively. The suggestions and tips in the data are not a guarantee that you will achieve significant gains in performance or efficiency, they are just supportive guidelines to help you achieve better. However, in some cases there may be suggestions that can lead to unexpectedly significant improvements. Always test your own situations for best results.

These suggestions and recommendations will result in positive improvements in common cases. In more specific cases, results may vary. Before following the recommendations, consider whether they are suitable for you.

## Strings and Bytes

### Conversions

Converting between byte slice and string can have a significant impact on memory usage in some cases. To avoid this, you can avoid allocations by implicitly passing allocations that you will not use again to the other type. The package `std/unsafe` provides some very useful functionality for this.

For example, you have a byte slice and this byte slice should be returned as a string from the function. Also, that slice can no longer be changed, it becomes inaccessible after it is returned from the function, etc., so it is safe to return it as a string. In this case, the function `unsafe::StrFromBytes` will convert it to string for you without any allocation and preserve GC. There is also a `unsafe::BytesFromStr` function for the opposite case.

If mutability is not required if conversion is needed temporarily, the `unsafe::StrBytes` or `unsafe::BytesStr` functions can also be used for a simpler conversion without GC, if it is considered safe.

### Comparing Byte Slices

Comparing byte slices can be efficient and simple when compiler optimizations are turned on. No package dependencies or algorithms are needed. Just convert to string and compare. If the relevant compiler optimizations are enabled, this does not cause a string to be allocated.

For example:
```jule
str(bytes1) == str(bytes2)
```

::: info
Please refer to the [compiler's optimizations](/compiler/compiler-optimizations) documentation to find out which optimizations can achieve this.
:::

### Rune-by-Rune Iteration on Strings

If you have a string and you don't have a rune slice of that string and you need it for a loop at that moment, you can do it by avoiding allocation. Your compiler can optimize your code, eliminating the allocation cost.

For example:
```jule
for i, r in []rune(myStr) {
	// ...
}
```
In the example above, when the relevant compiler optimizations are turned on, the loop is optimized and the rune slice transform is converted to an implicit loop. At each loop step the next rune is processed, thus avoiding allocation.

::: info
Please refer to the [compiler's optimizations](/compiler/compiler-optimizations) documentation to find out which optimizations can achieve this.
:::

## Extending Types with Strict Type Aliases

You can use strict type aliases to extend existing types and add some additional features. This is also something that will help in making related types available with traits if they don't support to do this.

For example:
```jule
type Str: str

impl Str {
	fn LineCount(*self): (n: int) {
		for _, r in []rune(*self) {
			if r == '\n' {
				n++
			}
		}
		ret
	}
}

fn main() {
	n := Str("hello\nworld\nfoo\nbar\nbaz").LineCount()
	println(n)
}
```
In the example above, the type `Str` is a strict type aliased to the primitive type `str`. If you want to access additional properties as if it were a method since there is no cast cost, this method might be what you are looking for.

## Enable Boundary Optimizations

When the relevant compiler optimizations are turned on, you can skip some bounds checks. You can do this by checking the highest predictable value first so that the compiler knows that subsequent accesses are safe.

For example:
```jule
fn foo(x: []byte): bool {
	_ = x[2] // boundary check
	ret x[0] == 10 &&
		x[1] == 20 &&
		x[2] == 30
}
```
The line `_ = x[2]` in the example above lets the compiler know that access to `x[2]` is controlled, meaning that this and fewer valid directories are within the limits. This can allow the compiler to avoid the cost of boundary checking subsequent accesses. Thus, with a single boundary check, you can make multiple accesses at a lower cost.

If you don't want to write such a informative line, you can also get it by checking the largest index first, for example by sorting the conditions in the return expression from 2 to 0 by index.

When applying this method, make sure that the information you provide is meaningful to the compiler and will make it possible to apply optimizations. Otherwise the compiler may not apply the optimizations for that.

::: info
Please refer to the [compiler's optimizations](/compiler/compiler-optimizations) documentation to find out which optimizations can achieve this.
:::

## Disable Boundary Checking

When the relevant compiler optimizations are turned on, you can skip some bounds checks. But compiler's static analysis may be not enough for some performance-critical systems. In such cases, you can disable boundary checking for the specific section of the source code, without disabling safety measures for the whole program.

The [`disable`](/compiler/directives#directive-disable) directive provides this functionality.

For example:
```jule
#disable boundary
fn foo(mut x: []int) {
	mut i := 0
	for i < len(x); i++ {
		x[i] = i
	}
}
```
The directive `#disable boundary` in the example above disables the boundary checks for the function `foo`. This can allow your program to avoid the cost of boundary checking subsequent accesses.

## Disable Nil Pointer Dereferencing Checking

When the relevant compiler optimizations are turned on, you can skip some nil pointer dereferencing checks. But compiler's static analysis may be not enough for some performance-critical systems. In such cases, you can disable boundary checking for the specific section of the source code, without disabling safety measures for the whole program.

The [`disable`](/compiler/directives#directive-disable) directive provides this functionality.

For example:
```jule
#disable nilptr
fn foo(mut &x: *int) {
	*x += 20
}
```
The directive `#disable nilptr` in the example above disables the nil pointer dereferencing checks for the function `foo`. This can allow your program to avoid the cost of nil pointer dereferencing subsequent accesses.

## Comptime

### Accessing Fields

When using Jule's comptime capabilities, you may encounter some problems when working with structures that have fields with a blan identifier. For example, if you want to read the value of a field and you try to do it with the `Field` field of `comptimeValue`, you can have conflicts. This method returns the first match, so if you have more than one field with a blank identifier you will always read the first match. To avoid this, access fields with index as much as possible. You can use the `FieldByIndex` function to do this.

For example:
```jule
use "std/comptime"

struct Foo {
	_: int
	_: bool
	_: str
}

fn main() {
	f := Foo{10, true, "baz"}
	const fv = comptime::ValueOf(f)
	const for i in fv.Type().Decl().Fields() {
		println(fv.FieldByIndex(i).Unwrap())
	}
}
```
The example above successfully reads the value of all fields correctly. However, if it had read with `Field` instead of `FieldByIndex`, it would always get `10` because it would always read the first field with the first match.

This method is also safer and less costly than doing unsafe conversions to access such fields, you can access the fields directly with indexes at comptime. This way you don't abandon safe Jule and avoid additional cost.