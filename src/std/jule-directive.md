# std/jule/directive

## Index

[Variables](#variables)\
[fn IsTop\(directive: string\): bool](#istop)

## Variables

```jule
const (
	Cdef      = "cdef"
	Typedef   = "typedef"
	Pass      = "pass"
	Build     = "build"
	Namespace = "namespace"
	Test      = "test"
	Export    = "export"
	Disable   = "disable"
)
```
Compiler directives\.

## IsTop
```jule
fn IsTop(directive: string): bool
```
Reports whether directive is top\-directive\.