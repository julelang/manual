# Errors

Fallible functions are Jule's recommended standard method for error handling. However, fallible functions are merely a way to handle errors. This section focuses on how errors should be designed and implemented in Jule.

To provide flexibility, fallible functions work with the `any` type, meaning any valid type can be thrown as an error. However, Jule has some recommended guidelines for handling errors:
- If errors need to be handled in a specific way, they should be provided as static global variables or as functions that return a comparable instance of the error. For static global error instances, it should be documented whether the mutation is safe or not.
- For purposes such as providing more detail, an error may be thrown with a wrapper construct or similar type.
- If an error is not wrapped by a custom type, it should not be a distinguishable type like `str`. It should be private, and no code outside the package should be able to unwrap its underlying type.
- The type used for the error must be convertible to a reasonable string. When used in functions such as `fmt::Format` or `println`, it is recommended that the string output be an explanatory text for the error.

## The `std/errors` Package

The [`std/errors`](/std/errors) package provides API for handling errors. This API can assist in implementing errors. For example, to obtain a basic error with message, you can use the `New` function.

For example:
```jule
fn foo()! {
	throw errors::New("my error message")
}
```

## Examples Implementations

<details>
<summary>Basic Errors</summary>

```jule
use "std/errors"

fn set(mut i: &int, x: int)! {
	if i == nil {
		throw errors::New("could not set: i == nil")
	}
	*i = x
}

fn main() {
	set(nil, 10)!
}
```
</details>

<details>
<summary>Basic Division</summary>

```jule
use "std/errors"
use "std/math"

// Division errors.
// Mutation is not safe.
let mut ErrDivByZero = errors::New("divide by zero")
let mut ErrOverflow = errors::New("denominator overflow")

fn magicDiv(a: f64, b: f64)!: f64 {
	if b == 0 {
		throw ErrDivByZero
	}
	if b > 100 {
		throw ErrOverflow
	}
	ret a / b
}

fn main() {
	let x = magicDiv(5, 200) else {
		mut r := f64(0)
		match error {
		| ErrDivByZero:
			r = math::NaN()
		| ErrOverflow:
			r = 0
		}
		use r
	}
	println(x)
}
```
</details>

<details>
<summary>Basic Parse</summary>

```jule
use "std/conv"
use "std/fmt"

struct ParseError {
	Column: int
	Input:  str
	Err:    str
}

impl ParseError {
	fn Str(*self): str {
		ret fmt::Format("{} {}: {}",
			self.Err, self.Input, str(self.Input[self.Column]))
	}
}

fn parseNumeric(s: str)!: int {
	for i, r in s {
		if '0' > r || r > '9' {
			throw &ParseError{
				Column: i,
				Input: s,
				Err: "undefined token",
			}
		}
	}
	ret conv::Atoi(s) else { throw error }
}

fn main() {
	parseNumeric("12345abc")!
}
```
</details>