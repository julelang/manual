# std/jule/importer

## Index

[fn New\(mut info: CompileInfo\): sema::Importer](#new)\
[struct CompileInfo](#compileinfo)\
[enum Compiler](#compiler)\
[enum CppStd](#cppstd)



## New
```jule
fn New(mut info: CompileInfo): sema::Importer
```
Returns new default Jule package importer by the compile information\.

## CompileInfo
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

	// Tags passed.
	Tags: []string
}
```
Compile information\.

## Compiler
```jule
enum Compiler: string {
	Clang = "clang",
	GCC   = "gcc",
}
```
Standard back\-end compilers\.

## CppStd
```jule
enum CppStd: string {
	Cpp20 = "cpp20",
}
```
Supported C\+\+ standards\.