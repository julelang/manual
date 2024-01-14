# Compiler Optimizations

Compiler optimizations are optimizations for improving the generated object code.
The way the code you write works may change depending on the optimizations, but the result you will get will remain the same.
These changes are promised to provide gains in various aspects (eg runtime performance).

Compiler optimizations are turned off by default.
Optimizations are enabled with options in the build command.

## Always Enabled Optimizations

Some optimizations may be enabled by default and it may not be possible to disable them. These optimizations are mostly things that will not affect you if they are turned on even when you want to turn off all optimizations for your debugging.

### Constant Optimization

Constant optimization, in short, is the processing of constant expressions that can be evaluated at runtime. Since processed constant values ​​represent the direct result, it helps to create code that creates less load at runtime.

Constant optimization does the following:

- Values ​​that can be evaluated at compile-time, such as literals and constant variables, are evaluated. For example, a `true == false` expression is evaluated at compile-time and handled as `false`. This is performed for all valid constant types such as integers, floating-points, and strings.
- May choose the ternary operator result whenever possible.
- Indexing of constant strings, and slice literals are evaluated if the indexing is done with a constant expression.
- Slicing of constant strings is evaluated if the indexes are done with a constant expression.

## Optimization Options

`--opt-copy` \
It reduces copying operations whenever possible.

- Once proven safe, it reduces the cost of copying in foreach iterations. Having immutability is very effective to have this optimization.
- Refers to data instead of copying when using lvalue in match statements.

---

`--opt-deadcode` \
It eliminates dead codes (unused) from object code.

- Eliminates dead globals.
- Eliminates dead functions.
- Eliminates followed statements of the return statement.
- Eliminates followed statements of the built-in `panic` function calls.
- Eliminates followed statements of the built-in `error` function calls.

::: warning
Experimental optimization, compilation problems may occur.
:::

---

`--opt-append` \
Enable special optimizations for built-in `append` function.

- It prevents the allocating and destruction of a new slice by adding slice literals element-by-element if append used at single assignment statement.

---

`--opt-math` \
Enable optimizations for mathematical operations.

- Skip the divide-by-zero check for division when operand is constant.
- Skip the divide-by-zero check for modulo when operand is constant.
- Converts multiplications to bit shifting if possible. Good conditions for this optimization: multiplier is constant and power of 2.

---

`--opt-access` \
Enable optimizations for memory acessing.

- Skip safety checkings such as boundary checking if accessed to array via constant index expression.
- If in a foreach iteration the iterated variable referred to by a immutable index variable is indexed, it is optimized as direct access and the cost of safety measures such as boundary checking is bypassed.\
\
This optimization is only enabled when the iterated varaible is: array, immutable slice, or immutable string.

---

`--opt-inline` \
Enable optimizatons for inlining.

- The IR is generated includes encourage inline optimizations of the backend compiler.

---

`--opt-ptr` \
Enable optimizations for pointers.

- Immediate pointer simplifies dereferencing statements. For example, if the address of the variable `x` is accessed immediately after its pointer is obtained, it directly simplifies it to `x`. This optimization can be useful in eliminating the cost of expressions used to break immutability with Unsafe Jule.

---

`--opt-cond` \
Enable optimizations for conditional structures.

- Remove unreachable if-else chain cases such as having constant false expressions. Applied for if-else chains, and match-cases.
- Remove unnecessary trailing cases that comes after constant true case. Applied for if-else chains, and match-cases.
- Remove condition eval overhead of constant true cases. Applied for if-else chains, and match-cases.

## Optimization Levels

It can be a hassle to pass all flags one by one to send most optimizations to the compiler.
To make this easier, compiler optimization levels have been created where you don't have to pass additional flags in most cases.
These optimization levels are flag packages that activate various optimizations.

Here is the option for using optimization level:

`--opt <level>` \
Set optimization level to `<level>`.

The optimization levels are as follows:

- `L0`: disable all compiler optimizations (default value of JuleC)
- `L1`: passes `--opt-copy`, `--opt-deadcode`, `--opt-append`, `--opt-math`, `--opt-access`, `--opt-inline`, `--opt-ptr`, `--opt-cond`

## Production Compilation

Production compilation is a compiler feature that must be enabled separately using the `-p` or `--production` flag. It behaves differently than optimization options whic is enabled with `--opt` options.

Production compilation may have an impact on IR rendering, but in addition it has an impact on backend compilers. By default, your compiler compiles code to make it suitable for debugging and testing. This allows you to get faster compile times and a better debugging experience. In the common scenario for Production, you only do one build, when you are sure everything is ready. That's why production builds are rarer and not the default option.

When you enable production compilation, it provides improvements that optimization options cannot provide. It can cause some changes to the IR and additionally prompts your backend compiler to compile the IR code more efficiently. In this way, significantly optimized faster programs can be obtained by using optimization options and production compilation together.

Pros of enabling production compilation:
- Remove assert calls.
- Disable assertions of backend compiler.
- Use maximum optimization level of backend compiler.
- Additional optimizations that vary by backend compiler.
- Do not use frame pointer.
- Remove debug information overhead of Jule runtime calls.

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
