# std/jule/parser

## Index

[fn ParseFile\(mut f: &amp;token::Fileset\): &amp;FileInfo](#parsefile)\
[fn ParsePackage\(mut filesets: \[\]&amp;token::Fileset\): &amp;PackageInfo](#parsepackage)\
[struct FileInfo](#fileinfo)\
[struct PackageInfo](#packageinfo)



## ParseFile
```jule
fn ParseFile(mut f: &token::Fileset): &FileInfo
```
Parses fileset&#39;s tokens and builds AST\. Returns nil if f is not real\. Fileset should not contain comment tokens\.

## ParsePackage
```jule
fn ParsePackage(mut filesets: []&token::Fileset): &PackageInfo
```
Parses fileset&#39;s tokens and builds AST\. Returns nil if filesets is nil\. Skip fileset if nil\. Filesets should not contain comment tokens\.

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