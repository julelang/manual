# builtin

## Index

[Variables](#variables)\
[type i8](#i8)\
[type i16](#i16)\
[type i32](#i32)\
[type i64](#i64)\
[type u8](#u8)\
[type u16](#u16)\
[type u32](#u32)\
[type u64](#u64)\
[type f32](#f32)\
[type f64](#f64)\
[type cmplx64](#cmplx64)\
[type cmplx128](#cmplx128)\
[type int](#int)\
[type uint](#uint)\
[type uintptr](#uintptr)\
[type str](#str)\
[type bool](#bool)\
[type any](#any)\
[type byte](#byte)\
[type rune](#rune)\
[fn print(v)](#print)\
[fn println(v)](#println)\
[fn panic(message: str)](#panic)\
[fn make(T, ...V): T](#make)\
[fn copy(mut dest: Dest, mut src: Src): int](#copy)\
[fn append(mut dest: []T, mut items: ...T): []T](#append)\
[fn len(T): int](#len)\
[fn cap(T): int](#cap)\
[fn delete(mut map[K]V, ...)](#delete)\
[fn new(T, ...T): &T](#new)\
[fn close(c: chan<- T)](#close)\
[fn real(c: Cmplx): Float](#real)\
[fn imag(c: Cmplx): Float](#imag)\
[fn cmplx(r: Float, i: Float): Cmplx](#cmplx)

## Variables

```jule
const true = 1 == 1
```
Logical true.

---

```jule
const false = !true
```
Logical false.

---

```jule
const nil = nil
```
Nil memory.

## i8
```jule
type i8: i8
```
Signed 8-bit integer.

## i16
```jule
type i16: i16
```
Signed 16-bit integer.

## i32
```jule
type i32: i32
```
Signed 32-bit integer.

## i64
```jule
type i64: i64
```
Signed 64-bit integer.

## u8
```jule
type u8: u8
```
Unsigned 8-bit integer.

## u16
```jule
type u16: u16
```
Unsigned 16-bit integer.

## u32
```jule
type u32: u32
```
Unsigned 32-bit integer.

## u64
```jule
type u64: u64
```
Unsigned u64-bit integer.

## f32
```jule
type f32: f32
```
32-bit floating-point.

## f64
```jule
type f64: f64
```
64-bit floating-point.

## cmplx64
```jule
type cmplx64: cmplx64
```
32-bit floating-point complex number.

## cmplx128
```jule
type cmplx128: cmplx128
```
64-bit floating-point complex number.

## int
```jule
type int: int
```
It is a platform dependent integer type.

## uint
```jule
type uint: uint
```
It is a platform dependent unsigned integer type.

## uintptr
```jule
type uintptr: uintptr
```
It is a platform dependent unsigned integer type that is big enough to hold a pointer. Can used for casting pointers to integers.

## str
```jule
type str: str
```
UTF-8 byte encoded character string. See for more information: http://manual.jule.dev/introduction/data-types#string

## bool
```jule
type bool: bool
```
Boolean type for logical expressions.

## any
```jule
type any: any
```
It can be hold any data type and nil. See for more information: https://manual.jule.dev/dynamic-types/any

## byte
```jule
type byte = u8
```
Is an alias for u8. It is used, by convention, to distinguish byte values from 8-bit unsigned integer values.

## rune
```jule
type rune = i32
```
Is an alias for i32. It is used, by convention, to distinguish character values from integer values.

## print
```jule
fn print(t: T)
```
Prints t to stdout.

Before printing the value will be converted to string. For string conversion, Jule's runtime package will be used, always. For types that contain special string conversion functions, such as structures, those functions are called for conversion.

String conversion implementation of runtime package may not be exact for some types compared to other conversion implementations which is provided by other standard library packages such as "std/conv".

## println
```jule
fn println(t: T)
```
This function same with the out function. One difference, prints new line after print.

## panic
```jule
fn panic(message: str)
```
Terminates the program immediately, signaling an unrecoverable program violation.

It is used to report conditions that must never occur during correct execution, such as broken invariants, invalid internal state, or contract violations. It is not an error-handling mechanism and must not be used for recoverable failures. Recoverable conditions should be handled using exceptional functions instead.

It does not run deferred or cleanup code. Transfers control directly to the runtime, which aborts execution. No guarantee for user code execution after panic is invoked. Resource cleanup is delegated to the operating system or external supervisors. Because panic is a terminating operation, functions that call panic do not return.

## make
```jule
fn make(T, ...V): T
```
Returns new instance of data type for supported types.

Slices:
```
Allocates slices dynamically. In addition
to the slice type, it can take two more arguments.
The first argument is mandatory. The first argument
specifies the length of the slice. The second argument
specifies the capacity of the slice and is optional.
The slice is returned with its length, and the field within its
length is initialized with the default value.
For []byte types, variadic strings are allowed,
such as: append(bytes, "foo"...)
````

Channels:
```
Channels can only take a type parameter or a buffer capacity length.
When a channel is initialized without capacity, it creates an unbuffered channel.
If a capacity is provided, a buffered channel is created.
Capacities smaller than zero result in a panic.
If capacity is equals to zero, then an unbuffered channel will be created.
```

Maps:
```
Allocates a new map with optional hint size.
If only the map type is provided, it creates an empty default map instance.
If the optional second parameter, the hint size, is provided,
the map is created by considering the given size.
The importance of this is to be prepared for future scenarios,
for example, when a very large number of new entries will be added,
the process can be made more efficient by reducing new and recurring allocations.

The reason it is called hint size is that the map is not guaranteed to
always be allocated according to the given size. The Jule runtime decides this,
and the actual allocation might be for fewer or more entries.
```

## copy
```jule
fn copy(mut dest: Dest, mut src: Src): int
```
The copy built-in function copies elements from a source slice into a destination slice. (As a special case, it also will copy bytes from a string to a slice of bytes.) The source and destination may overlap, it is safe. Returns the number of elements copied, which will be the minimum of len(src) and len(dst).

Arrays:
```
The dest parameter may be array slicing.
Slicing is allowed for arrays on mutable memory.
Thus, the changes will be reflected in the array.

For example:

	mut x := [5]int([0, ...])
	println(x)
	copy(x[:], [1, 2, 3, 4, 5, 6])
	println(x)

In the example code above, x will be sliced with mutable memory.
So copy operation will directly affect the x array.

This only applies to the last sliced array.
Previous slicing may result in memory allocation, and changes may not be reflected.

For example:

	mut x := [3][5]int([])
	copy(x[:][1][:], [1, 2, 3, 4, 5])
	println(x[1])

In the example code above, the x[1] array will not be mutated.
Because x[:] expression will allocate a new slice with copy of arrays.
```

## append
```jule
fn append(mut dest: []T, mut items: ...T): []T
```
If there is enough capacity, it adds to the destination slice. If there is not enough capacity, it creates a copy of the destination slice with enough capacity and adds the new elements and returns the new allocation.

## len
```jule
fn len(T): int
```
Returns length of T.

For slices:
```
Returns length of slice, aka count of slice elements.
If slice is nil, returns zero.
```

For strings:
```
Returns length of string, aka count of string's bytes.
```

For arrays:
```
Returns length of array, also means total capacity of array.
```

For maps:
```
Returns count of key-value pairs of map.
If map is nil, returns zero.
```

## cap
```jule
fn cap(T): int
```
Returns capacity of T.

For slices:
```
Returns capacity of slice, aka possible maximum count of slice elements without
expanding buffer.
```

For channels:
```
Returns capacity of channel, aka possible maximum count of waiting data in the queue before blocking.
Returns zero for nil or unbuffered channels.
```

## delete
```jule
fn delete(mut map[K]V, ...)
```
Deletes key from map. It takes two argument. The first one is map, second one is the key. If just given one argument, this one is a map, and clears all keys of map.

## new
```jule
fn new(T, ...T): &T
```
Returns new smart pointer for T initialized with default for type. It may take two arguments. The second argument used as initialization expression for memory allocation.

## close
```jule
fn close(c: chan<- T)
```
Closes channel c. It should be executed only by the sender, never the receiver, and has the effect of shutting down the channel after the last sent value is received. After the last value has been received from a closed channel c, any receive from c will succeed without blocking, returning the zero value for the channel element.

## real
```jule
fn real(c: Cmplx): Float
```
Returns the real part of the complex number c. The return value will be floating point type corresponding to the type of c.

## imag
```jule
fn imag(c: Cmplx): Float
```
Returns the imaginary part of the complex number c. The return value will be floating point type corresponding to the type of c.

## cmplx
```jule
fn cmplx(r: Float, i: Float): Cmplx
```
Constructs a complex value from two floating-point values. The real and imaginary parts must be of the same size, either f32 or f64 (or assignable to them), and the return value will be the corresponding complex type (cmplx64 for f32, cmplx128 for f64).