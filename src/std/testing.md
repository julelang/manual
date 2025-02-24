# std/testing

## Index

[struct T](#t)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fail\(self\)](#fail)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Failed\(self\): bool](#failed)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Skip\(self\)](#skip)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Skipped\(self\): bool](#skipped)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Assert\(self, expr: bool, message: str\): bool](#assert)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Errorf\(self, fmt: str, args: \.\.\.any\)](#errorf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Logf\(self, fmt: str, args: \.\.\.any\)](#logf)



## T
```jule
struct T {
	// NOTE: contains filtered hidden or unexported fields
}
```
A test utility also used by the Jule runtime\. It provides functionalities that facilitate the management and development of tests\.

### Fail
```jule
fn Fail(self)
```
Fails test\. Does not breaks scope execution\.

### Failed
```jule
fn Failed(self): bool
```
Reports whether test is failed\.

### Skip
```jule
fn Skip(self)
```
Skip test\. Does not breaks scope execution\.

### Skipped
```jule
fn Skipped(self): bool
```
Reports whether test is skipped\.

### Assert
```jule
fn Assert(self, expr: bool, message: str): bool
```
Set status of test as failure if expression is evaluated false at runtime\.

### Errorf
```jule
fn Errorf(self, fmt: str, args: ...any)
```
Set status of test as failure and print message by formatting\. Prints new\-line after formatted text\. Uses &#34;std/fmt&#34; internally\.

### Logf
```jule
fn Logf(self, fmt: str, args: ...any)
```
Logs message with no error, test status will not be affected\.