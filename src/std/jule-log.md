# std/jule/log

## Index

[Variables](#variables)\
[fn Logf\(fmt: string, args: \.\.\.any\): string](#logf)\
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
fn Logf(fmt: string, args: ...any): string
```
Returns formatted error message by fmt and args\.

## Log
```jule
struct Log {
	Kind:       int
	Row:        int
	Column:     int
	Path:       string
	Text:       string
	Line:       string
	Suggestion: string
}
```
Compiler log\.