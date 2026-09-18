# std/jule/directive

::: v-pre

## Index

[Variables](#variables)\
[fn IsTop\(directive: string\): bool](#istop)

## Variables

```jule
const (
	Cdef     = "cdef"
	Typedef  = "typedef"
	Pass     = "pass"
	Build    = "build"
	Test     = "test"
	Export   = "export"
	Disable  = "disable"
	Noinit   = "noinit"
	Inline   = "inline"
	Noinline = "noinline"
)
```
Compiler directives\.

## IsTop
```jule
fn IsTop(directive: string): bool
```
Reports whether directive is top\-directive\.

:::