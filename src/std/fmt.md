# std/fmt

## Index

[fn Fprint\(mut w: io::Writer, args: \.\.\.any\)\!](#fprint)\
[fn Fprintln\(mut w: io::Writer, args: \.\.\.any\)\!](#fprintln)\
[fn Fprintf\(mut w: io::Writer, fmt: str, args: \.\.\.any\)\!](#fprintf)\
[fn Printf\(fmt: str, args: \.\.\.any\)](#printf)\
[fn Print\(args: \.\.\.any\)](#print)\
[fn Println\(args: \.\.\.any\)](#println)\
[fn Sprint\(args: \.\.\.any\): str](#sprint)\
[fn Sprintg\[T\]\(t: T\): str](#sprintg)\
[fn Sprintf\(fmt: str, args: \.\.\.any\): str](#sprintf)



## Fprint
```jule
async fn Fprint(mut w: io::Writer, args: ...any)!
```
Prints arguments to w with default formatting\. See documentation of the \[Sprint\] function for formatting\. Forwards exceptions, if any\.

## Fprintln
```jule
async fn Fprintln(mut w: io::Writer, args: ...any)!
```
Prints arguments to w with default formatting\. Prints new\-line after arguments\. See documentation of the \[Sprint\] function for formatting\. Forwards exceptions, if any\.

## Fprintf
```jule
async fn Fprintf(mut w: io::Writer, fmt: str, args: ...any)!
```
Prints result of formatting to w\. See documentation of the \[Sprint\] function for formatting\. Forwards exceptions, if any\.

## Printf
```jule
fn Printf(fmt: str, args: ...any)
```
Prints result of formatting to stdout\. See documentation of the \[Sprint\] function for formatting\. Panics if any exception appears\.

## Print
```jule
fn Print(args: ...any)
```
Prints arguments with default formatting to stdout\. Panics if any exception appears\.

## Println
```jule
fn Println(args: ...any)
```
Prints arguments with default formatting to stdout\. Prints new\-line after arguments\. Panics if any exception appears\.

## Sprint
```jule
fn Sprint(args: ...any): str
```
Returns string result of arguments with default formatting\. Arguments will be concatenated without any spaces\.

## Sprintg
```jule
fn Sprintg[T](t: T): str
```
Returns string result of argument with default formatting\. It uses comptime to analysis type T\. If type T is a dynamic or unsupported type, it jumps back to the \[Sprint\] algorithm\.

## Sprintf
```jule
fn Sprintf(fmt: str, args: ...any): str
```
It places the passes arguments in the string relative to the corresponding format string\. Returns format string if len\(args\) == 0\. If the arguments have ended, the remaining part of format string is not processed and is returned as is\. For supported types it uses custom functions for conversion, but for unusupported types it uses default runtime string conversion function of type\.

Formatting:<br>
```
Arguments are processed sequentially. That is, when an argument
encounters a format string parameter, it will be processed according
to how many parameters it is. The 5th parameter uses the 5th argument
as the value.

Each format parameter is represented as "{}" in the format string.
These parameters will then be deleted according to the processing
algorithm and replaced with arguments.

The parameter "{{}}" is formatted as "{}" actually,
And does not increase argument list offset.
```
Examples:<br>
```
Sprintf("{} {}!", "Hello", "World") = "Hello World!"
Sprintf("{} {}") = "{} {}"
Sprintf("{} is the {}", "Pi Number") = "Pi Number is the {}"
```