# Reference Pointers

Reference pointers are like an alias for an lvalue, but this lvalue is no ordinary lvalue. It should always be a variable-based expression. You can think of them as raw-pointers but they are safer because of compiler's safety obsessions. Actually, reference pointers are-raw pointers with safety measures.

Reference pointers point to the value from which they were initialized and must receive an initialize expression. The reference pointer's lvalue memory address cannot be changed once initialized. Any assignment statement is always about changing the data pointer refer to or assign pointer to nil.

Reference pointers are actually raw-pointers but when you get a pointer to a memory, it will not result as mutable raw-pointer. Jule standard guarantees raw-pointers will always be mutable. It is a standard to extend unsafe codes with Unsafe Jule. But this semantics applied only for plain raw-pointers. When an expression evaluated for a reference pointer, the raw-pointer will use mutability state of the base expression. So they might be immutable according to the base memory.

## Reference Pointer Variables

Reference pointer variables are variables that reference an lvalue with raw-pointer. Declared with `&` operator. The type actually is a raw-pointer, and it must be. But the `&` operator for the declaration makes it a reference pointer and enables safety measures for this raw-pointer. Thus, you can use it without Unsafe Jule.

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

Reference pointer parameters must take an lvalue raw-pointer as an argument or nil raw-pointer pointer. To specify a reference pointer parameter, the parameter identifier must be preceded by the `&` operator. They hehaves like reference variables.

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

Global variables cannot be reference pointer due to safety reasons. After assigned to global memory, reference pointer may be dangling, so pointer is dangling. Tracking lifetime of lvalues is expensive, therefore Jule is not allows reference pointers in global scope.

If you need reference pointer to global storage, use raw-pointer instead. Raw-pointers are part of the Unsafe Jule and reference pointers are safety masks for raw-pointers. So you can achieve with raw-pointers, with safety risks.

## Why Reference Pointers Accepts only Lvalue

This is the result of the compiler trying to make sure things are safe. It always asks to reference pointer a variable to keep a good watch on your reference and make sure it's safe. This is an effort to guarantee that your reference will never be dangling because the scope of your variable is traceable.

An expression which is pointed to always must be variable based. For example, variables, structure (stored in variable) field or arrays. Slices are not supported because they might deallocate internal buffer to grow, so reference pointers are not safe for slices. But arrays always supported because they are guaranteed to be fixed size on stack at runtime always.

## Anonymous Functions with Reference Pointers

Anonymous functions copies instead of referencing the definitions of the scope in which they are defined, for safety reasons. Thus, a possible danger of dangling is prevented. But some copied things can be variables, one of them being references. Even if the references are copied, they will still continue to point to the same address as it is an address alias in nature. Therefore, there is a danger of dangling the reference if it goes out of scope. To avoid this, Safe Jule does not allow you to use references from parent scopes.

If you're sure it's safe to do so, [Unsafe Jule](/unsafe-jule/) lets you access such dangerous references.

## Coroutines

Concurrency imposes a number of process-intensive conditions that are difficult to trace at compile time and further increase compile times. Using reference pointers in a coroutine call means that the scope of the variable cannot be properly traced. Therefore, coroutine calls do not support functions with reference parameters.

Of course, if you want to do this even though you know it's unsafe, [Unsafe Jule](/unsafe-jule/) lets you do it.
