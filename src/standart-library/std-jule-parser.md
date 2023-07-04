# std::jule::parser

## Functions
```
fn parse_file(mut f: &File): &FileInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if f is not real. 

---

```
fn parse_package(mut filesets: []&File): &PackageInfo
```
Parses fileset's tokens and builds AST.\
Returns nil if filesets is nil.\
Skip fileset if nil.

## Structs
```
struct FileInfo {
    ast:    &Ast  // Ast from std::jule::ast
    errors: []Log // Log from std::jule::build
}
```
Stores information about file parsing.

---

```
struct PackageInfo {
    files: []&FileInfo
}
```
Stores information about package parsing. 