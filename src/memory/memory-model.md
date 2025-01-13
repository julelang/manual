# Memory Model

The Jule memory model is a documentation describing general approaches to how Jule handles memory.

## Value Initialization

Jule automatically initializes memory for memory safety. If memory is not initialized with a value, it initializes it with the default value of the type to eliminate the risk of uninitialized memory. The default value is determined by the compiler and is constant for each type.

### Slices

When slices are allocated with `make` call, all allocated space is automatically initialized with the default value.

Initialization is based on capacity, not length, as slice elements must be ready including capacity. That is, the entire capacity of the allocated slice will be initialized with the default value.

### Arrays

Since arrays are fixed-length structures, all their elements are initialized with the default value according to their length. In the case of any literal, elements initialized with value are not initialized with default value. If a literal does not initialize all elements of the array, the remaining elements are automatically initialized with the default value.

### Structs

Default initialization of structures includes initializing all fields to the default value. In the case of a struct literal, unassigned fields are initialized with the default value.

A struct field can have a special default initialization value. In this case, your compiler does not evaluate each expression once and cache it. The expression is like a template and is evaluated just-in-time for each default initialization.

For example, accordingly, if a function increases a static integer memory every time it is called, the relevant static variable is mutated as it will be called during each default initialization.

### Interoperability and Binded Types

Since the types cannot be known with certainty regarding interoperability, binded types are not treated like Jule types. Binded types are independent of default initialization rules, that is, they are not initialized automatically. When using interoperability, problems may occur due to uninitialized memory.

## Dynamic Types

Dynamic types are types where it is not possible to know the data type at compile time and the type can change dynamically at run time. They can store any of the supported types and the data type changes accordingly.

### Any

The `any` type always stores its data on the heap and is guaranteed to be released by the GC. Since the type is ambiguous, it has some additional costs on top of memory.

At runtime, an `any` stores and uses 2 different data;

- **Allocation**\
Allocation is a pointer to the data itself that the `any` stores. Managed by GC. The current implementation handles this well. If a pointer that is already traced by the GC is passed to the `any`, for example a smart pointer, the `any` uses it by directly referencing that smart pointer rather than making a new allocation. This helps reduce memory allocations and increases efficiency.\
\
If given smart pointer is nil, then the allocation pointer of the `any` will be nil. Will not point to the smart pointer with additional allocation. The `any` type always tries to use smart pointers as base allocation and shares same memory.
- **Type Pointer**\
An `any` maintains a general pointer and this pointer is not traced by the GC because it is guaranteed to always will point to static memory that will be available for the lifetime of the program. This pointer points directly to the type handler structure automatically created by the compiler.\
\
The handler structure includes the deallocator function required for the type. The deallocator function is the first field of the structure. Also contains 2 function pointer for string conversion and comparison functions for stored type.

#### Nil Value Handling

The `Allocation` section describes how allocation handled for the `any` type. And it says nil smart pointer results as nil allocation pointer. But, this is creates ambiguous behavior if the `any` equals to nil when assigned with a nil smart pointer. It should point to nil smart pointer.

Therefore, nil checking will be use the type pointer data. So, if type pointer is nil, then the `any` type is equals to nil. But if type pointer is not nil, the `any` is considered as not nil, even with nil allocation data. Thus, we have pointing to the nil smart pointer behavior for nil smart pointers. No different behavior for some special cases.

### Type Enums

It is exactly the same as the `any` type. They are implemented as `any` type by the compiler in the background. Type protection and restrictions are only at compile time. It doesn't have any additional cost at runtime, it's just an `any` type.

### Traits

Using traits is relatively cheap. To meet dynamic typed programming requirements, your compiler tries to obtain the necessary instructions at minimum cost.

At runtime, a trait stores and uses 3 different data;

- **Allocation**\
Allocation is a pointer to the data itself that the trait stores. Managed by GC. The current implementation handles this well. If a pointer that is already traced by the GC is passed to the trait, for example a smart pointer, the trait uses it by directly referencing that smart pointer rather than making a new allocation. This helps reduce memory allocations and increases efficiency.\
\
If given smart pointer is nil, then the allocation data will be nil of the trait. Will not point to the smart pointer with additional allocation. Traits always tries to use smart pointers as base allocation and shares same memory.
- **Pointer State**\
Traits may take both a smart pointer or a normal instance for supported types. Accordingly, the deallocation method and type comparison also vary. If separate code was generated for both forms with and without smart pointers, this could significantly increase the size and compilation time of the executable. Since it does not contribute much to the runtime cost, it stores whether the stored data is a smart pointer or not with a simple boolean flag. In this way, it is sufficient to generate a single handler for each form of trait type.
- **Type Pointer**\
A trait container maintains a general pointer and this pointer is not traced by the GC because it is guaranteed to always will point to static memory that will be available for the lifetime of the program. This pointer points directly to the type handler structure automatically created by the compiler. The handler structure includes the deallocator function required for the type. The deallocator function is the first field of the structure. In this way, with a simple reinterpretation, the trait container can call the deallocator function when necessary. Each time trait is used, the type pointer is reinterpreted for the correct type, providing direct access to the required function.

The compiler defines additional wrapper functions so that the trait calls the right function of the right type. These wrapper functions are stored in conjunction with the handle structure pointed to by the type pointer. When a trait method called, trait calls the required wrapper function to performs the necessary type conversion and redirects to the original function.

#### Nil Value Handling

Completely same as the nil handling method of the `any` type.\
See [nil value handling of the `any` type](#nil-value-handling).

#### Inheritance

Inheritance cost is relatively directly proportional to how many implemented structures there are. However, this is an algorithm that performs the minimum effort required, so most of the time there is no need to worry about overhead.

The runtime cost for Inheritance only occurs when converting between inherited traits. Apart from this, there is no additional cost in runtime. Your compiler defines a mapper function for the correct conversions and uses this mapper function during casting to justify the trait's type pointer conversion for the required trait data container.

## Copy Constructors and Destructors

Since Jule is a simple and plain language, it was designed to have no special copying and destruction semantics. Additionally, this type of semantics can significantly increase compilation times. It was tried and found unsuitable, so it was not added to the design.

In matters such as reference counting, the copy constructor-destructor structures of the backend compiler used such as C++ were relied upon and optimized. Any different backends in the future will probably not support RC for this reason, as Jule will never have built-in analysis for it.

Jule always copies data. For example, when you create a variable, it is copied while being assigned to a different variable. Features such as references may be an exception to this. References are treated as pointers that point directly to the value.

## Arrays

Arrays are always allocated on the stack and have fixed size. It does not have mutable memory between copies. In each copy, a new array with the same size is created and the elements are copied according to the relevant type.

At runtime, an array stores and uses 1 different data;

- **Array Pointer**\
A pointer to the first element of the array.

### Slicing

In arrays, the last index is limited to the length of the array. Slicing behavior is like slices. Arrays do not support direct slicing and their sizes are fixed at compile time. Since the use of dynamic values ​​is allowed in slicing, the result of slicing is slice, not array. The returned slice will be allocated according to the relevant array range.

## Slices

Slices are always allocated on top of the heap. By default they are `nil`. They must be clearly allocated. They have mutable memory, the copies created share the main allocation.

The same applies to slicing. The main allocation is still shared. The created slice points only to the desired part of the main allocation and the length and capacity data are adjusted accordingly.

At runtime, a slice stores and uses 3 different data;

- **Main Allocation**\
It is a pointer shared among all slice copies and points to the main allocation of the slice. There is no guarantee whether the it will represent elements of slice. The main usage purpose is to protect and deallocate the original main allocation. It always will point to the base allocation.

- **Slice Pointer**\
It is a pointer that is guaranteed to point anywhere on the main allocation. It always points to the first element of the slice.

- **Capacity**\
Capacity data of slice of main allocation.

- **Length**\
Length data of slice of main allocation.

### Slicing

Slices are perfect for slicing, surprisingly. Since the slices have mutable memory, the slicing cost is relatively cheap. A slice is created based on the relevant range and no new allocation or copying is performed due to the mutable buffer, only the cost of organizing the memory range pointed to by the returned slice.

The last index of slices is limited by their capacity. If you specify a value that exceeds length but does not exceed capacity when slicing a slice, the length of the slice will be expanded. In this way, if there is sufficient capacity, the slice can be expanded without having to reallocate.

## Maps

Maps are structures implemented with Jule. They are implemented as smart pointers by the compiler in the background. This smart pointer is initialized with `nil` by default. The structure pointed by the smart pointer is the map structure implemented by Jule. Various built-in functions are treated as calls to the methods of this structure.

## Strings

A string is not always allocated on the heap. Jule automatically moves a string to the heap if necessary, and this happens at runtime and there is no analysis overhead for this. Often operations such as merging trigger this migration.

Constant strings refer to string data stored in a read-only field. These strings are obviously cheaper than the strings moved onto the heap. Because they do not have GC costs such as RC, they are cheaper to copy and use than string allocations moved onto the heap.

Regardless of the backend language on which Jule will be compiled, strings will be length-based, not NULL terminated such as C. Jule strings are always implemented as length-based.

At runtime, a string stores and uses 3 different data;

- **Main Allocation**\
It is a pointer shared among all string copies and points to the main allocation of the string. There is no guarantee whether the it will represent characters of string. The main usage purpose is to protect and deallocate the original main allocation. It always will point to the base allocation.

- **Slice Pointer**\
It is a pointer that is guaranteed to point anywhere on the main allocation. It always points to the first element of the slice of string.

- **Length**\
Length data of string slice of main allocation.

### Slicing

Strings are handled similarly to slices. They have no capacity but basically work like slices. Just like slices, sliced ​​strings create copies that share the main allocation. The last index is limited to the length of the string.

### Why strings are length-based?

Jule aims for high interoperability capabilities, but the primary goal is to have good language, not to serve interoperability. For this reason, some design choices are made without considering interoperability for important reasons such as performance and efficiency.

Jule strings are designed to be immutable to prevent a new allocation on each copy. They become heap allocated only as a result of operations such as concatenation at run time. Jule's built-in memory management mechanisms are used for heap allocated strings.

Accordingly, strings, like slices, can be moved very efficiently, sharing common memory areas and avoiding new allocations when slicing. However, this can only achieve the desired efficiency with a length-based design.

**Here are a few reasons why:**
- Jule algorithms work length-based, so NULL termination is unnecessary. NULL termination is just something that could be added to make C-string conversions safe regarding interoperability. This will reduce the performance and efficiency of Pure Jule code, even for developers who will not use interoperability at all.
- Slicing can be done with NULL terminated strings without causing a new allocation if it preserves the last character of the string. However, if it does not, it is necessary to make a new allocation because null termination is lost and since the string memory is shared, it is not safe to replace the last character with NULL termination, so most cases will result in a new allocation, except for some optimizable cases.
- With unsafe algorithms, strings can be converted into byte-slices and new allocations in operations such as slicing can be avoided. However, the Unsafe Jule in this code is very useful in encouraging and increasing its use. Many algorithms may require slicing of strings, which may require unsafe conversions in many places in the codebase. It is not a simple experience.
- In some fields it may be necessary to return byte-slice allocations as strings. In this case, if you are sure it is safe, you may want to unsafely convert it to string to avoid new allocation. But before doing this, you need to make sure that there is a NULL termination every time. Besides this increasing the developer's considerations, perhaps that single NULL termination you add to the slice will in some cases exceed the capacity and result in new allocation, in which case it's not much different than converting to string.

## Channels

Channels are structures implemented by the Jule runtime and compiler. Each initialized non-nil channel is a smart pointer to the corresponding structure instance.

Channels use a queue that operates with a singly linked list, which has O(1) complexity for a FIFO queue. The data received from the queue is zeroed out, and if they performs GC, the references held by the channel are released.

For unbuffered channels, the queue always have 1 preallocated list node. For buffered channels, the queue always have N preallocated list node.

## Smart Pointers

Smart pointers are pointers that work depending on the GC technique used. They are basically implemented as a raw pointer wrapper, but are more safety restricted to allowed to be used with Safe Jule.

Some data types of Jule also use smart pointers in the background. This is because they reference each other the space they allocate. This is why some types use background smart pointers to minimize the amount of allocations. Therefore, they have additional overhead such as the additional atomicity of smart pointers and the memory space allocated for reference counting.

List of all types which is performs internal reference counting:
- Smart Pointers
- Channels
- Slice
- Trait
- Any
- Str (for only heap allocated strings)

## Variadic Parameters

Variadic parameters are implemented as slices in the background. When the arguments are sent one by one, a slice is allocated for this in the background and the relevant slice is sent as an argument to the parameter. If a slice is passed as a variadic argument, this is often equivalent to passing the slice directly to the parameter.

## Anonymous Functions and Closures

Anonymous functions and closures are usually cheap. An anonymous function or closure is not much different from ordinary functions. They are implemented the same way in the background, only the name is automatically chosen by the compiler.

Anonymous functions and closures are stored and moved with pointers, just like ordinary functions. An anonymous function or closure has no additional cost to call. For anonymous functions, there is not additional execution cost, unlike closures.

Closures impose some additional costs. One of these is captured variables. A heap allocation is created for captured variables and is guaranteed to be traced and deallocated by the GC. There is no risk of memory leak. A closure is automatically deallocated when it is no longer reachable. There are no other memory footprints.

Captured variables are automatically detected by the compiler and captured by copy. More variables than necessary are not captured; the compiler captures only the variables used in the closure.

Due to the use of closures, all anonymously used functions have an additional hidden parameter. This hidden parameter is a pointer with common type traced by the GC and is null for functions other than other closures. If a ordinary function is used as an anonymous function, the compiler adds this hidden parameter for it. This parameter is only required for closures and is handled only by closures, other functions will ignore it.

A few additional instructions are added to the closure to handle this parameter. These instructions are usually cheap and do not impose significant runtime costs. The instructions usually include converting the hidden parameter to the closure's environment data.

## Concurrency

Jule has concurrency built-in. Concurrency calls are made with the `co` keyword. The load of these calls may vary depending on the operating system because the threads used in concurrency are native threads.

In terms of overhead, basically a native thread is created. To achieve this, Jule can define some wrapper functions in the background and perform heap allocations. But these heap allocations do not have any GC cycle. The concurrent call is made to the wrapper function, and the wrapper function redirects directly to the main function, with minimal overhead as possible. When the execution of the main function ends, it automatically releases the heap allocations.

Heap allocation is mostly about arguments. A heap allocation is created to store the arguments, and the wrapper function calls the main function with arguments using this allocation. So, the size of the heap allocation is largely related to the arguments.

If the functions used for concurrent calls are wrapped by a wrapper, they have to be treated as an anonymous function. That is, they are treated as a function that is used as an anonymous function.

### Concurrency and RC
Jule has language-level concurrency and reference counting should be atomic for safe concurrency. Reference counting may not occur correctly if there is no atomicity in concurrency. That is, when a reference is referenced by a different reference, it must do so in an atomic way. But the fact that this happens all the time raises a problem: the critical impact on performance.

Atomic operations are essential for references to be thread-safe, but in cases where this is not necessary? Atomicity means overhead, which means loss of performance. It is inherently unnecessary to have atomicity when atomicity is not required. Jule references works atomic because thread-safe must be guaranteed. This means that references will use atomicity for reference counting on each copy. This atomicity creates an atomicity overhead in memory with each copy operation.

The Jule compiler performs an automatic analysis to eliminate this burden. This analysis is based on the built-in concurrency of the language. If built-in concurrency is not used, the program implements reference counting without thread-safety. Any use of concurrency triggers the thread-safe implementation for reference counting and cost of atomicity appears. This optimization saves performance cost of atomicity for non-concurrent programs automatically.