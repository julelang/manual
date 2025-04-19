# std/jule/directive

## Index

[Variables](#variables)\
[fn IsTop\(directive: str\): bool](#istop)

## Variables

```jule
const (
	Cdef = "cdef"
	Typedef = "typedef"
	Pass = "pass"
	Build = "build"
	Namespace = "namespace"
	Test = "test"
	Export = "export"
)
```
Compiler directives\.

## IsTop
```jule
fn IsTop(directive: str): bool
```
Reports whether directive is top\-directive\.