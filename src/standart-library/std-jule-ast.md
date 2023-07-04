# std::jule::ast

## Type Aliases
`type NodeData: any`\
Type of AST Node's data.

---

`type TypeDeclKind: any`\
Kind type of type declarations. 

---

`type ExprData: any`\
Type of Expr's data.

---

`type IterKind: any`\
Type of Iter's kind. 

## Structs
```
struct Ast {
    file:           &File // From std::jule::lex
    top_directives: Vector[&Directive]
    use_decls:      Vector[&UseDecl]
    impls:          Vector[&Impl]
    comments:       Vector[&Comment]

    // Possible types:
    //  &EnumDecl
    //  &FnDecl
    //  &StructDecl
    //  &TraitDecl
    //  &TypeAliasDecl
    //  &VarDecl
    decls: Vector[Node]
}
```
Abstract syntax tree.

---

```
struct Node {
    token: Token // From std::jule::lex
    data:  NodeData
}
```
AST Node.

**Methods:**\
`fn is_decl(self): bool`\
Reports whether node data is declaration.

`fn is_comment(self): bool`\
Reports whether node data is comment or comment group.

`fn is_impl(self): bool`\
Reports whether node data is impl.

`fn is_use_decl(self): bool`\
Reports whether node data is use declaration. 

---

```
struct CommentGorup {
    comments: []&Comment
}
```
Comment group.

---

```
struct Comment {
    token: Token // From std::jule::lex
    text:  str
}
```
Comment line.

**Methods:**\
`fn is_directive(self): bool`\
Reports whether comment is directive.

---

```
struct Directive {
    token: Token // From std::jule::lex
    tag:   str
    args:  []str
}
```
Directive.

---

```
struct TypeDecl {
    token: Token // From std::jule::lex
    kind:  TypeDeclKind
}
```
Type declaration.\
Also represents type expression.

For primitive types:
- Represented by IdentTypeDecl
- Token's identity is data type
- Primitive type kind is Ident

For function types:
- Function types represented by &FnDecl

---

```
struct IdentTypeDecl {
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
    generics:   []&TypeDecl
}
```
Identifier type.

**Methods:**\
`fn is_prim(self): bool`\
Reports whether identifier is primitive type. 

---

```
struct NamespaceTypeDecl {
    idents: []Token    // Token from std::jule::lex
    kind:   &IdentTypeDecl
}
```
Namespace chain type. 

---

```
struct RefTypeDecl {
    elem: &TypeDecl
}
```
Reference type. 

---

```
struct SlcTypeDecl {
    elem: &TypeDecl
}
```
Slice type.

---

```
struct TupleTypeDecl {
    types: []&TypeDecl
}
```
Tuple type. 

---

```
struct PtrTypeDecl {
    elem: &TypeDecl
}
```
Pointer type. 

**Methods:**\
`fn is_unsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe).

---
