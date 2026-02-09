# Compiler Options
Compiler options (aka arguments) let you tell your compiler a set of preferences. Accordingly, the behavior and outputs of the compiler may differ.

Arguments are indicated in their full form using two hyphens `--`. However, some arguments may have abbreviations (usually one letter), denoted by a single hyphen `-`.

Some options may require value.

## Using Options
Options are written as command-line arguments when executing the compiler. Some options are only used, but an option may have to take a value. Options that receive value must see their value after it. So, after julec sees an option that should take a value, it evaluates the following command-line argument as the option's value.

It doesn't matter if the options are in mixed order. They can be completely at the end of the command, at the beginning, in the middle, or in a complex way. The recommended order is to write the options first and then give the compiler inputs.

\
For example:
```
$ julec build -t --compiler clang .
```
The example code above means: "Hey compiler, transpile main.jule's content using the clang compiler standard." 

## Options
`-t` `--transpile` \
Just transpile source code.

---

`--compiler <value>` \
Set the preferred compiler. Specify the compiler standard you will use for compilation from among the supported compilers.

Values: `gcc` `clang`

---

`--compiler-path <path>`
Set the path to the compiler to use to compile the IR. Might be useful when you have compiler name conflicts, mismatches or etc.

---

`--cppstd` \
Set the C++ standard.

Values: `cpp14`, `cpp17`, `cpp20`

---

`-o <file>` `--out <file>` \
Write output to `<file>`. If compiling for Windows, if the extension of path is not `.exe`, compiler will add it. If output file name is empty or unspecified, compiler will use `main` by default.

---

`--target <target>` \
Change target. \
See more about [cross-compilation](/compiler/cross-compilation).

---

`--COMAXPROCS <value>` \
Sets the maximum number of Ps that can execute coroutines concurrently.
Pass "default" to explicitly use the runtime default.
The value must be a valid integer and at least 1.
The default may vary by machine and is a reasonable choice for most programs,
optimized for overall concurrency.

---

`--shadowing`\
Enable variable shadowing.

---

`-p` `--production`\
Enable production compilation.

---

`--disable-rc`\
Disable reference counting. All reference counted types does not perform reference counting, prevents memory leaks. See [Disable Reference Counting](/memory/management/disable-reference-counting) section for more information.

---

`--disable-safety`\
Disable safety. All memory safety and similar measures will be disabled. This will increase safety risks, but at the same time it might improve runtime performance. It may be helpful for debugging, see [Debugging](/debugging/) section for more information.

### Optimization Options

Learn more about [compiler optimizations](/compiler/compiler-optimizations).