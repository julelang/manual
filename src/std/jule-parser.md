# std::jule::parser

## Functions
```jule
fn ParseFile(mut f: &File): &FileInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if f is not real. \
File should not contain comment tokens.

---

```jule
fn ParsePackage(mut filesets: []&File): &PackageInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if filesets is nil.\
Skip fileset if nil. \
Files should not contain comment tokens.

## Structs
```jule
struct FileInfo {
    Ast:    &AST  // Ast from std::jule::ast
    Errors: []Log // Log from std::jule::build
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