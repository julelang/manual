# Compiler Optimizations

Compiler optimizations are optimizations for improving the generated object code.
The way the code you write works may change depending on the optimizations, but the result you will get will remain the same.
These changes are promised to provide gains in various aspects (eg runtime performance).

Compiler optimizations are turned off by default.
Optimizations are enabled with options in the build command.

## Always Enabled Optimizations

Some optimizations may be enabled by default and it may not be possible to disable them. These optimizations are mostly things that will not affect you if they are turned on even when you want to turn off all optimizations for your debugging.

**List of Always Enabled Optimizations**
- [Comptime Evaluation](/comptime/comptime-evaluation)

## Optimization Options

::: info
Some optimizations may not be applied for some scopes and expressions.
:::

`--opt-zcopy` \
Enabled special optimizations for the built-in copy function.
- If the source slice is an array slicing, it avoids allocating a new slice by making the slicing mutable. This only applies to the last sliced ​​array of expression.

---

`--opt-zappend` \
Enabled special optimizations for the built-in append function.

- If the element slice is an array slicing, it avoids allocating a new slice by making the slicing mutable. This only applies to the last sliced ​​array of expression.

---

`--opt-copy` \
Enables special optimizations for copy operations.\
It reduces copying operations whenever possible.

- Once proven safe, it reduces the cost of copying in range iterations. Having immutability is very effective to have this optimization.
- Refers to data instead of copying when using lvalue in match statements.
- Converts empty string comparisons to length-is-zero checking.
- Avoids making literal wrapper for strings when strings compared with literals.

---

`--opt-deadcode` \
Enables special optimizations for dead code.\
It eliminates dead (unused / unreachable) codes from object code.

- Eliminates dead globals.
- Eliminates dead functions.
- Eliminates dead structures (including strict type alias structures). <div class="warning-badge">experimental</div>
- Eliminates dead methods of living structures. <div class="warning-badge">experimental</div>
- Eliminates dead traits. <div class="warning-badge">experimental</div>
- Eliminates followed statements of the return statement.
- Eliminates followed statements of the empty select statement.
- Eliminates followed statements of the goto statement if possible.
- Eliminates followed statements of the built-in `panic`, and `error` function calls.

---

`--opt-append` \
Enables special optimizations for built-in `append` function.

- It prevents the allocating and destruction of a new slice by adding slice literals element-by-element if append used at single assignment statement.

---

`--opt-len` \
Enables special optimizations for built-in `len` function.

- Simplifies expressions such as `len([]byte(myStr))` to `len(myStr)`.
- Converts expressions such as `len([]rune(myStr))` to more efficient variant which is avoids making allocation.

---

`--opt-math` \
Enables special optimizations for mathematical operations.

- Skips the divide-by-zero check for division when operand is constant.
- Skips the divide-by-zero check for modulo when operand is constant.
- Converts multiplications to bit shifting if possible. Good conditions for this optimization: operands are integer, multiplier is constant and power of 2.
- Converts modulo by 2 expressions to equivalent bitwise operation.
- Eliminates neutral binary expressions such as such as addition/subtraction with the constant-zero.
- Eliminates runtime overflow checking for binary shifing expressions if right operand is constant.
- Eliminates cost of the `x^0`, `0^x`, `x|0`, or `0|x` computations. It will be simplified to `x` expression.
- Eliminates cost of the `x&0`, `0&x` computations. It will be simplified to `0` expression.
- Simplifies expressions such as `x+x` to `x<<1` if possible.
- Simplifies expressions such as `x-x` to `0` if possible.

---

`--opt-access` \
Enables special optimizations for memory accessing.

- Skips safety checks such as boundary checking if accessed to array via constant index expression.
- Removes the cost of boundary checking of expressions like `array[i&(len(array)-1)]` for arrays whose length is power of two.
- If in a range iteration the iterated variable referred to by a immutable index variable is indexed, it is optimized as direct access and the cost of safety measures such as boundary checking is bypassed. <div class="warning-badge">experimental</div>
- If it can be understood that the index value used in any indexing process is within the boundaries, it removes the cost of boundary checking. <div class="warning-badge">experimental</div>
- If it can be understood that the smart pointer or reference pointer is not nil, it removes the cost of nil dereferencing. <div class="warning-badge">experimental</div>

---

`--opt-inline` \
Enables special optimizatons for inlining.

- The IR is generated includes encourage inline optimizations of the backend compiler.

---

`--opt-ptr` \
Enables special optimizations for pointers.

- Simplifies immediate pointer dereferencings. For example, if the address of the variable `x` is accessed immediately after its pointer is obtained, it directly simplifies it to `x`. This optimization can be useful in eliminating the cost of expressions used to break immutability with Unsafe Jule.

---

`--opt-cond` \
Enables special optimizations for conditional expressions and structures.

- Removes unreachable if-else chain cases such as having constant false expressions. Applied for if-else chains, and match-cases.
- Remove unnecessary trailing cases that comes after constant true case. Applied for if-else chains, and match-cases.
- Removes condition eval overhead of constant true cases. Applied for if-else chains, and match-cases.
- Avoids using wrapper for strings if string compared with literal.
- Eliminates and simplifies predictable boolean expressions. Such as `if (x || true)` will be handled as `if (true)` or `if (x && false)` will be handled as `if (false)`.
- Eliminates predictable comparison expressions. Such as `if (x > x)` will be handles ad `if (false)` or `if (x == x)` will be handled as `if (true)`.

---

`--opt-str` \
Enables special optimizations for string operations.

- Converts string comparison with empty literal to `len(s) == 0` check.
- Erases relevant ranges of string's itself instead of making allocation for substring and assignment if string gets assignment with substring from itself.
- Eliminates neutral binary expressions such as concatenation with the empty string.
- Optimizes allocations of the string concatenations if possible.
- Optimizes string and bytes conversions of binary expressions such as `str([]byte) == str([]byte)`.

---

`--opt-slice` \
Enables special optimizations for slice operations.

- Erases relevant ranges of slice's itself instead of making allocation for subslice and assignment if slice gets assignment with subslice from itself.

---

`--opt-array` \
Enables special optimizations for array operations.

- Simplifies zero-length array comparisons (such as `x == y`) to `true`.

---

`--opt-assign`\
Enables special optimizations for assignments.

It's will not check deeply whether expressions are same. So if you want take advantage of this optimization, keep simple your assignments.

- Removes self assignments such as `a = a` or `a, b = a, b`.
- Optimize swap assignments such as `a, b = b, a`.

---

`--opt-exceptional`\
Enables special optimizations for exceptionals.

- Removes the exceptional handling cost and forwards the return data with exceptional directly when an exceptional function calls another exceptional function in its return statement and forwards exceptional.
- Removes the exceptional handling cost and forwards the exceptional data directly when an exceptional function calls another exceptional function and forwards exceptional. Since the relevant statements are not returns statements, this optimization only applied for the last statements of function algorithm.

---

`--opt-iter`\
Enables special optimizations for iterations.

- Removes casting if non-constant string casted to byte slice for range iteration. Uses string's bytes directly.
- Removes casting if non-constant string casted to rune slice for range iteration. Avoids making allocation for temporary rune slice, iterates runes of string directly.
- Makes array the slice literal expressions of the range iterations.

---

`--opt-dynamic`\
Enables special optimizations for dynamic programming features.

- If it can be understood that the `<any>` is the type `x` and not nil, it removes the cost of not-nil and type compatibility checking for type assertion expressions with type `t`. <div class="warning-badge">experimental</div>

---

`--opt-std-strings`\
Enables special optimizations for the `std/strings` package.

- Removes exceptional handling cost if possible of the `Write`, `WriteByte`, `WriteRune`, and `WRiteStr` methods of the `Builder` struct.

## Optimization Levels

It can be a hassle to pass all flags one by one to send most optimizations to the compiler.
To make this easier, compiler optimization levels have been created where you don't have to pass additional flags in most cases.
These optimization levels are flag packages that activate various optimizations.

Here is the option for using optimization level:

`--opt <level>` \
Set optimization level to `<level>`.

The optimization levels are as follows:

- `L0`: The default optimization level: no special optimizations.
- `L1`: passes all `L0` flags with `--opt-zcopy`, `--opt-zappend`, `--opt-copy`, `--opt-deadcode`, `--opt-append`, `--opt-math`, `--opt-access`, `--opt-inline`, `--opt-ptr`, `--opt-cond`, `--opt-str`, `--opt-slice`, `--opt-assign`, `--opt-iter`, `--opt-dynamic`, `--opt-array`, `--opt-len`
- `L2`: passes all `L1` flags with `--opt-std-strings`

## Production Compilation

Production compilation is a compiler feature that must be enabled separately using the `-p` or `--production` flag. It behaves differently than optimization options which is enabled with `--opt` options.

Production compilation may have an impact on IR rendering, but in addition it has an impact on backend compilers. By default, your compiler compiles code to make it suitable for debugging and testing. This allows you to get faster compile times and a better debugging experience. In the common scenario for Production, you only do one build, when you are sure everything is ready. That's why production builds are rarer and not the default option.

When you enable production compilation, it provides improvements that optimization options cannot provide. It can cause some changes to the IR and additionally prompts your backend compiler to compile the IR code more efficiently. In this way, significantly optimized faster programs can be obtained by using optimization options and production compilation together.

Production compilation also normalizes information to make ready-to-production. This information is embedded which is added to executable file for debugging reasons with minimum cost such as path information of panic calls, etc. Normally the path information is absolute path but in production compilation absolute paths can be ambiguous and complex to read. To prevent this, production compilation removes prefix of absolute path and leaves just necessary root directory and following path. For example if panic call raised from standard library, the path starts with `std/`, if panic call raised from main package, the paths start with `mainPackageDirectory/`.

Pros of enabling production compilation:
- Disable assertions of backend compiler.
- Use maximum optimization level of backend compiler.
- Additional optimizations that vary by backend compiler.
- Do not use frame pointer if possible.
- Remove debug information overhead of Jule runtime calls.
- Use production-ready information.

Cons of enabling production compilation:
- Harder debugging.
- Longer compile time.
- Some subtle bugs can only occur with optimizations enabled by production compilation and can cause the executable to behave differently than expected. It is mostly related to the codes you write or use when using C/C++ interoperability.
- If the backend compiler you are using has some new optimizations or contains bugs, your code may run fast but not as expected. These types of optimization-related bugs can be difficult to track down.

## Optimization Options vs Production Compilation

Optimization options and production compilation focus on different things. Optimization options focus on achieving optimizations on the IR generated by your compiler. It doesn't interfere with anything else. Production compilation now focuses on compiling the IR you get when you want to compile a software that is ready for production. Production compiler never enables optimization flag. It focuses solely on compiling IR for production. If necessary, IR can remove things that are not required for production, but these changes are not improvements provided by optimization options. For best performance and optimization in production, optimization options and production compilation should be used together.

### Optimization Options

- Focus to code generation optimizations, better IR.
- Never do not touch backend compiler.

### Production Compilation

- Focus to faster executables as possible.
- Optimize code generation for better IR if necessary.
- Enable optimizations of backend compiler.
- Generate production-ready IR.
