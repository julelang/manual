# Compiler Optimizations

Compiler optimizations are optimizations for improving the generated object code.
The way the code you write works may change depending on the optimizations, but the result you will get will remain the same.
These changes are promised to provide gains in various aspects (eg runtime performance).

Compiler optimizations are turned off by default.
Optimizations are enabled with options in the build command.

## Always Enabled Optimizations

Some optimizations may be enabled by default and it may not be possible to disable them. These optimizations are mostly things that will not affect you if they are turned on even when you want to turn off all optimizations for your debugging.

### Constant Optimization

Values ​​that can be evaluated at compile-time, such as literals and constant variables, are evaluated. For example, a `true == false` expression is evaluated at compile-time and handled as `false`. This is performed for all valid constant types such as integers, floating-points, and strings.

## Optimization Options

`--opt-copy` \
It reduces copying operations whenever possible.

- If the second variable of range iteration is immutable or has a mutable type, its address is pointed to instead of being copied.
- Refers to data instead of copying when using lvalue in match statements.

---

`--opt-deadcode` \
It eliminates dead codes (unused) from object code.

- Eliminates dead globals.
- Eliminates dead functions.
- Eliminates followed statements of the return statement.
- Eliminates followed statements of the built-in `panic` function calls.

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

---

`--opt-access` \
Enable optimizations for memory acessing.

- Skip safety checkings such as boundary checking if accessed to array via constant index expression.

---

`--opt-inline` \
Enable optimizatons for inlining.

- The IR is generated includes encourage inline optimizations of the backend compiler.

## Optimization Levels

It can be a hassle to pass all flags one by one to send most optimizations to the compiler.
To make this easier, compiler optimization levels have been created where you don't have to pass additional flags in most cases.
These optimization levels are flag packages that activate various optimizations.

Here is the option for using optimization level:

`--opt <level>` \
Set optimization level to `<level>`.

The optimization levels are as follows:

- `L0`: disable all compiler optimizations (default value of JuleC)
- `L1`: passes `--opt-copy`, `--opt-deadcode`, `--opt-append`, `--opt-math`, `--opt-access`, and `--opt-inline`
