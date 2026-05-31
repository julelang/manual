# std/jule/mod

## Index

[fn Parse\(path: string, data: \[\]byte, options: ParseOptions\): \(&amp;Mod, \[\]log::Log\)](#parse)\
[fn ParseFile\(path: string, options: ParseOptions\): \(&amp;Mod, \[\]log::Log\)](#parsefile)\
[fn IsName\(name: string\): bool](#isname)\
[type ID](#id)\
[struct Mod](#mod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Mod\): bool](#equal)\
[struct ParseOptions](#parseoptions)



## Parse
```jule
fn Parse(path: string, data: []byte, options: ParseOptions): (&Mod, []log::Log)
```
Parse module from the module file path and data\. Unlike ParseFile, it will use data instead of read from file\.

Data should be private, because lexical analysis uses same allocation as much as possible\. And mutating this field may cause mutations of string copies\.

## ParseFile
```jule
fn ParseFile(path: string, options: ParseOptions): (&Mod, []log::Log)
```
Parse module from the module file path\.

## IsName
```jule
fn IsName(name: string): bool
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
	ID:   ID     // Unique identity of the module.
	Name: string // Name of the module.
	Path: string // Path of the module. File is not included.
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