# std/jule/mod

## Index

[fn ParseFile\(path: str, options: ParseOptions\): \(&amp;Mod, \[\]log::Log\)](#parsefile)\
[fn IsName\(name: str\): bool](#isname)\
[type ID](#id)\
[struct Mod](#mod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Mod\): bool](#equal)\
[struct ParseOptions](#parseoptions)



## ParseFile
```jule
fn ParseFile(path: str, options: ParseOptions): (&Mod, []log::Log)
```
Parse module from the module file path\.

## IsName
```jule
fn IsName(name: str): bool
```
Reports whether the name is valid to become module name\. It does not checks for reserved names\.

## ID
```jule
type ID: int
```
A module identity\.

## Mod
```jule
struct Mod {
	ID:   ID  // Unique identity of the module.
	Name: str // Name of the module.
	Path: str // Path of the module. File is not included.
}
```
A module\.

### Equal
```jule
fn Equal(&self, other: &Mod): bool
```
Reports whether the mods are same module directory\. Reports true if self and other is nil\.

## ParseOptions
```jule
struct ParseOptions {
	// Allows using the reserved "std" module name.
	AllowStd: bool
}
```
Options for the module file parsing\.