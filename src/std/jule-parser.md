# std/jule/parser

## Index

[fn ParseFile\(mut f: &amp;token::FileSet\): &amp;FileInfo](#parsefile)\
[fn ParsePackage\(mut filesets: \[\]&amp;token::FileSet\): &amp;PackageInfo](#parsepackage)\
[struct FileInfo](#fileinfo)\
[struct PackageInfo](#packageinfo)



## ParseFile
```jule
fn ParseFile(mut f: &token::FileSet): &FileInfo
```
Parses FileSet&#39;s tokens and builds AST\. Returns nil if f is not real\. FileSet should not contain comment tokens\.

## ParsePackage
```jule
fn ParsePackage(mut filesets: []&token::FileSet): &PackageInfo
```
Parses FileSet&#39;s tokens and builds AST\. Returns nil if filesets is nil\. Skips FileSet if nil\. FileSets should not contain comment tokens\.

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