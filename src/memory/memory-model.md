# Memory Model

The Jule memory model is a documentation describing general approaches to how Jule handles memory. Additionally, it includes technical details that explain how the compiler is implemented and how things work behind the scenes.

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

### Interoperability and External Types

Since the types cannot be known with certainty regarding interoperability, external types are not treated like Jule types. External types are independent of default initialization rules, that is, they are not initialized automatically. When using interoperability, problems may occur due to uninitialized memory.

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
The handler structure includes the deallocator function required for the type. The deallocator function is the first field of the structure. Also contains 3 function pointer for string conversion, comparison functions, and hasher for stored type.

#### Nil Value Handling

The `Allocation` section describes how allocation handled for the `any` type. And it says nil smart pointer results as nil allocation pointer. But, this is creates ambiguous behavior if the `any` equals to nil when assigned with a nil smart pointer. It should point to nil smart pointer.

Therefore, nil checking will be use the type pointer data. So, if type pointer is nil, then the `any` type is equals to nil. But if type pointer is not nil, the `any` is considered as not nil, even with nil allocation data. Thus, we have pointing to the nil smart pointer behavior for nil smart pointers. No different behavior for some special cases.

### Type Enums

It is exactly the same as the `any` type. They are implemented as `any` type by the compiler in the background. Type protection and restrictions are only at compile time. It doesn't have any additional cost at runtime, it's just an `any` type.

### Traits

Using traits is relatively cheap. To meet dynamic typed programming requirements, your compiler tries to obtain the necessary instructions at minimum cost.

Traits are handled as `any` types in the background. They are part of dynamic types and behave almost the same. However, traits have some additional costs compared to the `any` type. These additional costs are associated with the type pointer and the data it points to.

A trait maintains a general type pointer like `any` and this pointer is not traced by the GC because it is guaranteed to always will point to static memory that will be available for the lifetime of the program. This pointer points directly to the type handler structure automatically created by the compiler. The data such as the deallocator and string conversion functions, which are shared with the `any` type, are stored in the same way as in the `any` type. However, the rest of the structure contains trait-specific content. In this way, with a simple reinterpretation, the trait container can call the deallocator or other common function when necessary. Each time trait is used, the type pointer is reinterpreted for the correct type, providing direct access to the required function.

The compiler defines additional wrapper functions so that the trait calls the right function of the right type. These wrapper functions are stored in conjunction with the handle structure pointed to by the type pointer. When a trait method called, trait calls the required wrapper function to performs the necessary type conversion and redirects to the original function.

#### Nil Value Handling

Completely same as the nil handling method of the `any` type.\
See [nil value handling of the `any` type](#nil-value-handling).

#### Inheritance

Inheritance cost is relatively directly proportional to how many implemented structures there are. However, this is an algorithm that performs the minimum effort required, so most of the time there is no need to worry about overhead.

The runtime cost for Inheritance only occurs when converting between inherited traits. Apart from this, there is no additional cost in runtime. Your compiler defines a mapper function for the correct conversions and uses this mapper function during casting to justify the trait's type pointer conversion for the required trait data container.

#### Type Offsets and Mapping
Although trait types and `any` types share common data, the offset for each type differs from that of the `any` type. Trait types can be implemented for the types they are applied to in two ways: `Type` and `&Type`. This means they can accept both the type directly and a smart pointer referencing that type. To create shared data, an `any` data type is generated for both `Type` and `&Type` possibilities of a trait type. These types of data are later utilized by other type data, which also includes the specialized data created for the trait.

Type offsets come into play here. Since each type implemented for a trait can be stored in two forms within the trait —`Type` and `&Type`— each type corresponds to 2 type offsets.

For example, if a trait is implemented for the types `Foo` and `Bar`, the type offsets would be structured as follows: (1) `Foo` (2) `&Foo` (3) `Bar` (4) `&Bar`. As explained, each type corresponds to a total of 2 offsets.

In the [Inheritance](/memory/memory-model#inheritance) section, it was mentioned that a mapper function is defined and the type pointer data of the types is used to perform conversions between traits. This conversion occurs through type offsets. For each trait type, two offsets are considered, and the type data is mapped based on which two offsets correspond to each other in the other trait dataset.

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

Channels are structures implemented by the Jule runtime and compiler. Each initialized non-nil channel is a smart pointer to the corresponding structure instance, channels thus share a common memory allocation.

A channel struct instance consists of a capacity field, a closed-state flag, linked lists for waiting receivers and senders, an array used as the buffer, and a mutex that protects all of these.

In unbuffered channels, everything operates synchronously. The mutex is used for every operation. If there is no waiting receiver or sender in the queue, a thread parks itself until another thread wakes it. No buffer is used for receiving or sending data. In unbuffered channels, the buffer field is never used. Before a thread parks itself, it obtains a pointer on the stack and saves it. When a receiver or sender thread wakes a parked thread, it writes the data to or reads the data from the pointer that the parked thread saved. In other words, it operates using a hand-off algorithm.

In buffered channels, an array is preallocated and used as a ring buffer. To keep the performance of buffered channels extremely high at high frequencies, mutex usage is minimized as much as possible. The array used as the buffer is designed as a lock-free MPMC queue (Dmitry Vyukov's). Threads first attempt to receive or send data through this queue in a lock-free manner. If they fail, they park themselves just like in unbuffered channels. Before parking, if they detect a parked counterpart, a hand-off occurs exactly as in unbuffered channels.

Because buffered channels are not fully synchronized via a mutex and are optimized for high-frequency messaging, they also minimize mutex usage for waking threads. Parked receiver threads are *not* woken by a sender when data is written. They are unparked only in two cases: when the channel is closed, or when the queue becomes completely full.

This is, in fact, one of the fundamental reasons mentioned in the [Concurrency Model](/concurrency/concurrency-model#channels) section, why failing to close a channel can lead to unexpected results. In an example scenario, a receiver attempting to receive from the channel may fail and park itself. When a sender sends data, it will not wake the receiver until the queue becomes full, so that receiver may never wake. Because the capacity might never be completely filled—even after the last value is sent, closing the channel becomes essential once no more data will be sent. Based on the assumption that this is done correctly, buffered channels minimize thread management and tend to provide very good performance at very high messaging frequencies.

Channels can experience spurious wakeups, which are essentially unexpected wake events that occur before a hand-off takes place.

In unbuffered channels, which are synchronous, this can only happen when the channel is closed. When a channel is closed, all threads are unparked and this counts as a spurious wakeup for those threads. In this situation, the channel is treated as having a "received" state (because a signal received about messaging: no more messages) but reports failure. This can be captured using a variable, e.g., `data, ok := <-ourChan`.

Buffered channels can experience spurious wakeups in two ways. The first is the channel being closed, which behaves like an unbuffered channel. The second occurs when a receiver thread is woken by a sender because the buffer is full. When the buffer is full, only one receiver is woken, and no hand-off occurs. The woken receiver then retries to take data from the queue, and if it fails, it parks again.

### Select Statements

In select statements, an execution record is created first. Each expression is evaluated once and stored in memory: the channels used in the cases, the values to be sent, and the memory address where the received value should be written.

The select then proceeds to its first phase by attempting all cases. If any case succeeds, it returns immediately. If all fail and a default case exists, the default case is executed. If there is no default case, the thread parks itself.

After being unparked, the select chooses one of the cases that is ready and returns. If no case is ready—meaning it was a spurious wakeup, the select retries all channels. If the retry fails again, it parks itself once more. This loop continues until a case succeeds.

As explained above, closing a channel causes a spurious wakeup, but this counts as a failed "received" state for the receiver threads. Still, because it is technically in a "received" state, a `select` statement may choose the case with the failed "received" state.

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

## Deferred Scopes

Deferred scopes are essentially anonymous functions and, depending on the situation, are considered closures. The variables used are stored just like in a closure. When the function returns, the functions stored in the stack are called one by one in LIFO order.

The thing used as a stack is actually a slice. The slice can automatically grow each time a deferred scope is added. In other words, each deferred scope leads to the creation of an anonymous function, and these functions are stored in a slice that acts as a stack. When the function returns, the deferred scope functions stored in this slice are called in LIFO order.

A deferred scope is not executed in every possible return scenario of the function. There are certain behaviors that trigger it. Falling outside of these behaviors may result in deferred scopes not being executed.

**List of deferred scope execution triggers**:
- Reaching end of the function's main scope.
- Return statements.
- In exceptionals, calling `error` function.

Accordingly, a `panic`, `os::Exit` or something like that calls will not trigger the execution of deferred scopes.

## Concurrency

Jule has concurrency built-in. Concurrency calls are made with the `co` keyword. The load of these calls may vary depending on the operating system because the threads used in concurrency are native threads.

In terms of overhead, basically a native thread is created. To achieve this, Jule can define some wrapper functions in the background and perform heap allocations. But these heap allocations do not have any GC cycle. The concurrent call is made to the wrapper function, and the wrapper function redirects directly to the main function, with minimal overhead as possible. When the execution of the main function ends, it automatically releases the heap allocations.

Heap allocation is mostly about arguments. A heap allocation is created to store the arguments, and the wrapper function calls the main function with arguments using this allocation. So, the size of the heap allocation is largely related to the arguments.

If the functions used for concurrent calls are wrapped by a wrapper, they have to be treated as an anonymous function. That is, they are treated as a function that is used as an anonymous function.

### Concurrency and RC
Jule has language-level concurrency and reference counting should be atomic for safe concurrency. Reference counting may not occur correctly if there is no atomicity in concurrency. That is, when a reference is referenced by a different reference, it must do so in an atomic way. But the fact that this happens all the time raises a problem: the critical impact on performance.

Atomic operations are essential for references to be thread-safe, but in cases where this is not necessary? Atomicity means overhead, which means loss of performance. It is inherently unnecessary to have atomicity when atomicity is not required. Jule references works atomic because thread-safe must be guaranteed. This means that references will use atomicity for reference counting on each copy. This atomicity creates an atomicity overhead in memory with each copy operation.

The Jule compiler performs an automatic analysis to eliminate this burden. This analysis is based on the built-in concurrency of the language. If built-in concurrency is not used, the program implements reference counting without thread-safety. Any use of concurrency triggers the thread-safe implementation for reference counting and cost of atomicity appears. This optimization saves performance cost of atomicity for non-concurrent programs automatically.