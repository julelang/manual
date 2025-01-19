# std/jule/importer

## Index

[struct CompileInfo](#compileinfo)\
[struct Importer](#importer)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New(info: CompileInfo): &amp;Importer](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AllPackages(mut self): \[\]&amp;sema::ImportInfo](#allpackages)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetModPath(mut self, path: str)](#setmodpath)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetModPath(self): str](#getmodpath)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ModById(self, id: int): str](#modbyid)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetImport(mut self, path: str): &amp;sema::ImportInfo](#getimport)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ImportPackage(mut self, path: str, updateMod: bool): (\[\]&amp;ast::AST, \[\]build::Log)](#importpackage)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Imported(mut self, mut imp: &amp;sema::ImportInfo)](#imported)\
[enum Compiler](#compiler)\
[enum CppStd](#cppstd)



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
}
```
Compile information.

## Importer
```jule
struct Importer {
	// NOTE: contains filtered hidden or unexported fields
}
```
Default importer for the reference Jule compiler.

### Implemented Traits

- `sema::Importer`

### New
```jule
static fn New(info: CompileInfo): &Importer
```
Returns new importer instance by compile information.

### AllPackages
```jule
fn AllPackages(mut self): []&sema::ImportInfo
```
Returns all imported packages. The return value is mutable reference to internal buffer. You should be care about using that copy.

### SetModPath
```jule
fn SetModPath(mut self, path: str)
```


### GetModPath
```jule
fn GetModPath(self): str
```


### ModById
```jule
fn ModById(self, id: int): str
```


### GetImport
```jule
fn GetImport(mut self, path: str): &sema::ImportInfo
```


### ImportPackage
```jule
fn ImportPackage(mut self, path: str, updateMod: bool): ([]&ast::AST, []build::Log)
```
avoid case sensitivity for fair comparison

### Imported
```jule
fn Imported(mut self, mut imp: &sema::ImportInfo)
```
Skip file if can&#39;t pass build directives.

## Compiler
```jule
enum Compiler: str {
	Clang: "clang",
	GCC: "gcc",
}
```
Standard back-end compilers.

## CppStd
```jule
enum CppStd: str {
	Cpp14: "cpp14",
	Cpp17: "cpp17",
	Cpp20: "cpp20",
}
```
Supported C++ standards.