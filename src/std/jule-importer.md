# std::jule::importer

## Structs
```jule
struct CompileInfo {
    // Production compilation.
    Prod: bool
    // Test compilation.
    Test: bool
    // Back-end compiler to use.
    Compiler: Compiler
    // C++ standard to use.
    CppStd: CppStd
}
```
Compile information.

---

```jule
struct JuleImporter
```
Default importer for the reference Jule compiler.

::: info
**Implemented Traits**
- `Importer` from `std::jule::sema`
:::

**Methods:**

`static fn New(info: CompileInfo): &JuleImporter`\
Returns new importer instance by compile information.

`fn AllPackages(mut self): []&ImportInfo`\
Returns all imported packages. The return value is mutable reference to internal buffer. You should be care about using that copy.

## Enums

```jule
enum Compiler
```
Standard back-end compilers.

**Fields:**
- `Clang`
- `GCC`

---

```jule
enum CppStd
```
Supported C++ standards.

**Fields:**
- `Cpp14`
- `Cpp17`
- `Cpp20`