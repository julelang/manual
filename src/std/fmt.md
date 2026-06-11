::: v-pre

## Index

[fn Fprint\(mut w: io::Writer, args: \.\.\.any\)\!](#fprint)\
[fn Fprintln\(mut w: io::Writer, args: \.\.\.any\)\!](#fprintln)\
[fn Fprintf\(mut w: io::Writer, fmt: string, args: \.\.\.any\)\!](#fprintf)\
[fn Printf\(fmt: string, args: \.\.\.any\)](#printf)\
[fn Print\(args: \.\.\.any\)](#print)\
[fn Println\(args: \.\.\.any\)](#println)\
[fn Sprint\(args: \.\.\.any\): string](#sprint)\
[fn Sprintg\[T\]\(t: T\): string](#sprintg)\
[fn Sprintf\(fmt: string, args: \.\.\.any\): string](#sprintf)



## Fprint
```jule
async fn Fprint(mut w: io::Writer, args: ...any)!
```
Prints arguments to w with default formatting\. See documentation of the \[Sprint\] function for formatting\. Forwards errors, if any\.

## Fprintln
```jule
async fn Fprintln(mut w: io::Writer, args: ...any)!
```
Prints arguments to w with default formatting\. Prints new\-line after arguments\. See documentation of the \[Sprint\] function for formatting\. Forwards errors, if any\.

## Fprintf
```jule
async fn Fprintf(mut w: io::Writer, fmt: string, args: ...any)!
```
Prints result of formatting to w\. See documentation of the \[Sprintf\] function for formatting\. Forwards errors, if any\.

## Printf
```jule
fn Printf(fmt: string, args: ...any)
```
Prints result of formatting to stdout\. See documentation of the \[Sprintf\] function for formatting\. Panics if any error appears\. Write operation is blocking\.

## Print
```jule
fn Print(args: ...any)
```
Prints arguments with default formatting to stdout\. Panics if any error appears\. Write operation is blocking\.

## Println
```jule
fn Println(args: ...any)
```
Prints arguments with default formatting to stdout\. Prints new\-line after arguments\. Panics if any error appears\. Write operation is blocking\.

## Sprint
```jule
fn Sprint(args: ...any): string
```
Returns string result of arguments with default formatting\. Arguments will be concatenated without any spaces\.

## Sprintg
```jule
fn Sprintg[T](t: T): string
```
Returns string result of argument with default formatting\. It uses comptime to analysis type T\. If type T is a dynamic or unsupported type, it jumps back to the \[Sprint\] algorithm\.

## Sprintf
```jule
fn Sprintf(fmt: string, args: ...any): string
```
Formats arguments according to the format string and returns the resulting string\.

The format string is composed of ordinary text and replacement fields\. Ordinary text is copied to the output unchanged\.

Replacement fields are written between braces:

```
{}         Selects the next argument in sequence
{index}    Explicit argument selection
```
Braces can be escaped by doubling them:

```
{{      Writes a literal '{'
}}      Writes a literal '}'
{{}}    Writes a literal "{}"
```
Automatic and explicit indexing may be mixed\. Automatic placeholders consume arguments sequentially, while indexed placeholders always refer to the specified argument position\.

The formatting behavior of individual argument types is implementation defined and may be customized by the caller or by type\-specific formatters\.

Format strings are malformed when:

- A replacement field is not closed
- An unexpected closing brace appears
- A field contains invalid syntax
- A field references an argument that does not exist

Parsing is performed from left to right and replacement fields are evaluated in the order they appear in the format string\.

Missing arguments do not cause formatting to fail\. If a replacement field refers to an argument that does not exist, the field is replaced with the special marker:

```
{!MISSING}
```
Examples:

```
Sprintf("{} {}", "hello") -> "hello {!MISSING}"
Sprintf("{1}", "hello")   -> "{!MISSING}"
```


:::