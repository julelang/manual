# std/jule/parser

## Functions
```jule
fn ParseFile(mut f: &token::Fileset): &FileInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if f is not real. \
File should not contain comment tokens.

---

```jule
fn ParsePackage(mut filesets: []&token::Fileset): &PackageInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if filesets is nil.\
Skip fileset if nil. \
Files should not contain comment tokens.

## Structs
```jule
struct FileInfo {
    AST:    &ast::AST
    Errors: []build::Log
}
```
Stores information about file parsing.

---

```jule
struct PackageInfo {
    Files: []&FileInfo
}
```
Stores information about package parsing. 