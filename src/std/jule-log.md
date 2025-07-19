# std/jule/log

## Index

[Variables](#variables)\
[fn Logf\(fmt: str, args: \.\.\.any\): str](#logf)\
[struct Log](#log)

## Variables

```jule
const (
	Flat  = iota // Just text.
	Error        // Error message.
)
```
Log kinds\.

## Logf
```jule
fn Logf(fmt: str, args: ...any): str
```
Returns formatted error message by fmt and args\.

## Log
```jule
struct Log {
	Kind:       int
	Row:        int
	Column:     int
	Path:       str
	Text:       str
	Line:       str
	Suggestion: str
}
```
Compiler log\.