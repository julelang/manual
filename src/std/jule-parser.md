# std/jule/parser

::: v-pre

## Index

[Variables](#variables)\
[fn ParseFile\(mut f: &amp;token::FileSet, mut tokens: \[\]&amp;token::Token\): &amp;FileInfo](#parsefile)\
[struct FileInfo](#fileinfo)\
[struct PackageInfo](#packageinfo)

## Variables

```jule
const TokenOptions = token::Standard
```
Token scan options that enables tokenization suitable for the parser\.

---

```jule
const (
	SF_STOP     = 1 << iota // Stops scanning.
	SF_SKIPREAD             // Skips next call for once and reports true.
)
```
Scanner flags\.

## ParseFile
```jule
fn ParseFile(mut f: &token::FileSet, mut tokens: []&token::Token): &FileInfo
```
Parses FileSet&#39;s tokens and builds AST\. Returns nil if f is nil\. FileSet should be tokenized according to \[TokenOptions\]\.

## FileInfo
```jule
struct FileInfo {
	AST:    &ast::AST
	Errors: []log::Log
}
```
Stores information about file parsing\.

## PackageInfo
```jule
struct PackageInfo {
	Files: []&FileInfo
}
```
Stores information about package parsing\.

:::