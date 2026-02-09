# Reference Pointers

Reference pointers are like an alias for an lvalue, but this lvalue is no ordinary lvalue. It should always be a variable-based expression. You can think of them as raw-pointers, but they are safer because of the compiler's safety obsessions. Actually, reference pointers are raw-pointers with safety measures.

Reference pointers point to the value from which they were initialized and must receive an initialization expression. The reference pointer's lvalue memory address cannot be changed once initialized. Any assignment statement is always about changing the data pointer refer to or assign to nil.

Reference pointers are actually raw-pointers, but when you get a pointer to a memory, it will not result in a mutable raw-pointer. Jule standard guarantees raw-pointers will always be mutable. It is a standard to extend unsafe codes with Unsafe Jule. But this semantics applied only to plain raw-pointers. When an expression is evaluated for a reference pointer, the raw-pointer will use the mutability state of the base expression. So they might be immutable according to the base memory.

## Reference Pointer Variables

Reference pointer variables are variables that reference an lvalue with a raw-pointer. Declared with the `&` operator. The type actually is a raw-pointer, and it must be. But the `&` operator for the declaration makes it a reference pointer and enables safety measures for this raw-pointer. Thus, you can use it without Unsafe Jule.

For example:
```jule
fn main() {
    mut a := 20
    mut &b := &a
    *b += 20
    println(a) // 40
}
```

Also you can use reference types in mult-declarative assignments.

For example:
```jule
fn main() {
	mut a := 20
	mut &x, y := &a, 20
	*x += y
	println(a) // 40
}
```

## Reference Pointer Parameters

Reference pointer parameters must take an lvalue raw-pointer as an argument or a nil raw-pointer. To specify a reference pointer parameter, the parameter identifier must be preceded by the `&` operator. They behave like reference variables.

For example:
```jule
fn add20(mut &a: *int) {
	*a += 20
}

fn main() {
	mut a := 20
	add20(&a)
	println(a) // 40
}
```

### Global Variables

Global variables cannot be reference pointers due to safety reasons. After assigned to global memory, the reference pointer may be dangling, so the pointer is dangling. Tracking the lifetime of lvalues is expensive; Jule does not allow reference pointers in the global scope.

If you need a reference pointer to global storage, use a raw-pointer instead. Raw-pointers are part of the Unsafe Jule, and reference pointers are safety masks for raw-pointers. So you can achieve with raw-pointers, with safety risks.

## Why Reference Pointers Accepts only Lvalue

This is the result of the compiler ensuring that things are safe. It always asks to reference a variable to keep a good watch on your reference and make sure it's safe. This is an effort to ensure that your reference will never be dangling because the scope of your variable is clearly defined.

An expression that is pointed to always must be variable-based. For example, variables, structure (stored in a variable), fields, or arrays. Slices are not supported because they might deallocate the internal buffer to grow, so reference pointers are not safe for slices. But arrays are always supported because they are guaranteed to be fixed size on the stack at runtime.

## Anonymous Functions with Reference Pointers

Anonymous functions copy instead of referencing the definitions of the scope in which they are defined, for safety reasons. Thus, a possible danger of dangling is prevented. But some copied things can be variables, one of them being references. Even if the references are copied, they will continue to point to the same address, as it is an address alias in nature. Therefore, there is a danger of dangling the reference if it goes out of scope. To avoid this, Safe Jule does not allow you to use references from parent scopes.

If you're sure it's safe to do so, [Unsafe Jule](/unsafe-jule/) lets you access such dangerous references.

## Coroutines

Concurrency imposes a number of process-intensive conditions that are difficult to trace at compile time and further increase compile times. Using reference pointers in a coroutine call means that the scope of the variable cannot be properly traced. Therefore, coroutine calls do not support functions with reference parameters.

Of course, if you want to do this even though you know it's unsafe, [Unsafe Jule](/unsafe-jule/) lets you do it.
