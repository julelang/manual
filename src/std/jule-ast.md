# std::jule::ast

## Structs
```jule
struct AST {
    File:          &File // From std::jule::lex
    TopDirectives: []&Directive
    UseDecls:      []&UseDecl
    Nodes:         []Node
}
```
Abstract syntax tree.

---

```jule
struct Node {
    Token: &Token // From std::jule::lex
    Data:  NodeData
}
```
AST Node.

---

```jule
struct Directive {
    Tag:  &Token
    Args: []&Token
}
```
Directive.

---

```jule
struct TypeDecl {
    Token: &Token // From std::jule::lex
    Kind:  TypeDeclKind
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

```jule
struct IdentTypeDecl {
    Token:    &Token // From std::jule::lex
    Ident:    str
    Binded:   bool
    Generics: []&TypeDecl
}
```
Identifier type.

---

```jule
struct SubIdentTypeDecl {
    Idents: []&IdentTypeDecl
}
```
Sub-identifier type.

---

```jule
struct NamespaceTypeDecl {
    Idents: []&Token  // Token from std::jule::lex
    Kind:   &TypeDecl // Type of identifier.
}
```
Namespace chain type.

---

```jule
struct SptrTypeDecl {
    Elem: &TypeDecl
}
```
Smart pointer type. 

---

```jule
struct SlcTypeDecl {
    Elem: &TypeDecl
}
```
Slice type.

---

```jule
struct TupleTypeDecl {
    Types: []&TypeDecl
}
```
Tuple type. 

---

```jule
struct PtrTypeDecl {
    Elem: &TypeDecl
}
```
Pointer type. 

**Methods:**

`fn IsUnsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe).

---

```jule
struct ArrTypeDecl {
    Elem: &TypeDecl
    Size: &Expr
}
```
Array type.\
Size expression is nil for auto-sized array. 

**Methods:**

`AutoSized(self): bool`\
Reports whether array is auto-sized. 

---

```jule
struct MapTypeDecl {
    Key: &TypeDecl
    Val: &TypeDecl
}
```
Map type.

---

```jule
struct RetTypeDecl {
    Kind:   &TypeDecl
    Idents: []&Token // Token from std::jule::lex
}
```
Return type.\
Kind and Idents is nil for void type.

---

```jule
struct Expr {
    Token: &Token // From std::jule::lex
    End:   &Token
    Kind:  ExprData
}
```
Expression. 

---

```jule
struct RangeExpr {
    Expr: &Expr
}
```
Range expression between parentheses.

---

```jule
struct UseExpr {
    Token: &Token
    Expr:  &Expr
}
```
Use expression.

---

```jule
struct TupleExpr {
    Expr: []&Expr
}
```
Tuple expression.

---

```jule
struct LitExpr {
    Token: &Token // From std::jule::lex
    Value: str
}
```
Literal expression.

---

```jule
struct UnsafeExpr {
    Token: &Token // From std::jule::lex
    Expr:  &Expr
}
```
Unsafe expression.

---

```jule
struct IdentExpr {
    Token:  &Token // From std::jule::lex
    Ident:  str
    Binded: bool
}
```

**Methods:**

`fn IsSelf(self): bool`\
Reports whether identifier is self keyword.

---

```jule
struct UnaryExpr {
    Op:   &Token // From std::jule::lex
    Expr: &Expr
}
```

---

```jule
struct VariadicExpr {
    Token: &Token // From std::jule::lex
    Expr:  &Expr
}
```
Variadiced expression.

---

```jule
struct CastExpr {
    Kind: &TypeDecl
    Expr: &Expr
}
```
Casting expression.

---

```jule
struct NsSelectionExpr {
    Ns:    []&Token // Token from std::jule::lex
    Ident: &Token
}
```
Namespace identifier selection expression.

---

```jule
struct SubIdentExpr {
    Expr:  &Expr
    Ident: &Token // From std::jule::lex
}
```
Object sub identifier selection expression.

---

```jule
struct BinaryExpr {
    Left:  &Expr
    Right: &Expr
    Op:    &Token // From std::jule::lex
}
```
Binary operation.

---

```jule
struct FnCallExpr {
    Token:     &Token // From std::jule::lex
    Expr:      &Expr
    Args:      []&Expr
    Exception: &ScopeTree
    IsCo:      bool
}
```
Function call expression kind.

**Methods:**

`fn Unhandled(self): bool`\
Reports whether exception is not handled.

`fn Ignored(self): bool`\
Reports whether exception is ignored.

---

```jule
struct FieldExprPair {
    Field: &Token // From std::jule::lex
    Expr:  &Expr
}
```
Field-Expression pair.

**Methods:**

`fn IsTargeted(self): bool`\
Reports whether pair targeted field. 

---

```jule
struct StructLit {
    End:   &Token
    Kind:  &TypeDecl
    Exprs: []ExprData
}
```
Struct literal instiating expression. 

---

```jule
struct BraceLit {
    Token: &Token // From std::jule::lex
    End:   &Token
    Exprs: []ExprData
}
```
Anonymous brace instiating expression.

**Methods:**

`fn IsEmpty(self): bool`\
Reports whether literal is empty. 

---

```jule
struct KeyValPair {
    Key:   &Expr
    Val:   &Expr
    Colon: &Token // From std::jule::lex
}
```
Key-value pair expression.

---

```jule
struct SliceExpr {
    Token: &Token // From std::jule::lex
    End:   &Token
    Exprs: []&Expr
}
```
Slice initiating expression.\
Also represents array initiating expression.

**Methods:**

`fn IsEmpty(self): bool`\
Reports whether slice is empty.

---

```jule
struct IndexingExpr {
    Token: &Token
    End:   &Token
    Expr:  &Expr
    Index: &Expr
}
```
Indexing expression. 

---

```jule
struct SlicingExpr {
    Token: Token // From std::jule::lex
    End:   Token
    Expr:  &Expr
    Start: &Expr
    To:    &Expr
}
```
Slicing expression.

---

```jule
struct Constraint {
    Mask: []&TypeDecl
}
```
Constraint.

---

```jule
struct GenericDecl {
    Token:      &Token // From std::jule::lex
    Ident:      str
    Constraint: &Constraint
}
```
Generic type declaration. 

---

```jule
struct LabelSt {
    Token: &Token // From std::jule::lex
    Ident: str
}
```
Label statement. 

---

```jule
struct GotoSt {
    Token: &Token // From std::jule::lex
    Label: &Token
}
```
Goto statement.

---

```jule
struct FallSt {
    Token: &Token // From std::jule::lex
}
```
Fall statement.

---

```jule
struct AssignLeft {
    Token:     &Token // From std::jule::lex
    Mutable:   bool
    Reference: bool
    Ident:     str
    Expr:      &Expr
}
```
Left expression of assign statement.

---

```jule
struct AssignSt {
    Declarative: bool
    Setter:      &Token
    Left:        []&AssignLeft
    Right:       &Expr
}
```
Assign statement.

---

```jule
struct Stmt {
    Token: &Token
    Data:  StmtData
}
```

---

```jule
struct ScopeTree {
    Parent:   &ScopeTree
    Unsafety: bool
    Deferred: bool
    Stmts:    []Stmt
    End:      &Token
}
```
Scope tree.

---

```jule
struct ParamDecl {
    Token:     &Token // From std::jule::lex
    Mutable:   bool
    Variadic:  bool
    Reference: bool
    Kind:      &TypeDecl
    Ident:     str
}
```
Parameter.

**Methods:**

`fn IsSelf(self): bool`\
Reports whether parameter is self (receiver) parameter.

`fn IsRef(self): bool`\
Reports whether self (receivers) parameter is reference.

---

```jule
struct FnDecl {
    Token:       &Token // From std::jule::lex
    Global:      bool
    Unsafety:    bool
    Public:      bool
    Binded:      bool
    Statically:  bool
    Exceptional: bool
    Ident:       str
    Directives:  []&Directive
    Scope:       &ScopeTree
    Generics:    []&GenericDecl
    Result:      &RetTypeDecl
    Params:      []&ParamDecl
}
```
Function declaration.\
Also represents anonymous function expression.

**Methods:**

`fn IsAnon(self): bool`\
Reports whether function is anonymous.

---

```jule
struct VarDecl {
    Scope:      &ScopeTree    // nil for global scopes
    Token:      &Token // From std::jule::lex
    Setter:     &Token
    Ident:      str
    Binded:     bool
    Public:     bool
    Mutable:    bool
    Constant:   bool
    Statically: bool
    Directives: []&Directive
    Kind:       &TypeDecl     // nil for auto-typed
    Expr:       &Expr
}
```
Variable declaration. 

---

```jule
struct RetSt {
    Token: &Token // From std::jule::lex
    Expr:  &Expr
}
```
Return statement.

---

```jule
struct Iter {
    Comptime: bool
    Token:    &Token // From std::jule::lex
    Kind:     IterKind
    Scope:    &ScopeTree
}
```
Iteration.

**Methods:**

`fn IsInf(self): bool`\
Reports whether iteration is infinity.

---

```jule
struct WhileKind {
    Expr:      &Expr
    Next:      StmtData
    NextToken: Token // From std::jule::lex
}
```
While iteration kind. 

**Methods:**

`fn IsWhileNext(self): bool`\
Reports whether kind is while-next iteration. 

---

```jule
struct RangeKind {
    InToken: &Token     // Token of "in" keyword, from std::jule::lex
    Expr:    &Expr
    KeyA:    &VarDecl  // first key of range
    KeyB:    &VarDecl  // second key of range
}
```
Range iteration kind.

---

```jule
struct BreakSt {
    Token: &Token // From std::jule::lex
    Label: &Token
}
```
Break statement.

---

```jule
struct ContSt {
    Token: &Token // From std::jule::lex
    Label: &Token
}
```
Continue statement.

---

```jule
struct If {
    Token: &Token // From std::jule::lex
    Expr:  &Expr
    Scope: &ScopeTree
}
```
If condition.

---

```jule
struct Else {
    Token: &Token // From std::jule::lex
    Scope: &ScopeTree
}
```
Else condition.

```jule
struct Conditional {
    Head:    &If
    Tail:    []&If
    Default: &Else
}
```
Condition chain.

---

```jule
struct TypeAliasDecl {
    Scope:  &ScopeTree
    Public: bool
    Binded: bool
    Token:  Token // From std::jule::lex
    Ident:  str
    Kind:   &TypeDecl
}
```
Type alias declaration.

---

```jule
struct Case {
    Token: &Token // From std::jule::lex
    Scope: &ScopeTree
    Exprs: []&Expr
}
```
Case of match-case. 

---

```jule
struct MatchCase {
    Token:      &Token // From std::jule::lex
    End:        &Token
    TypeMatch:  bool
    Expr:       &Expr
    Cases:      []&Case
    Default:    &Else
}
```
Match-Case. 

---

```jule
struct UseDecl {
    Token:    &Token       // From std::jule::lex
    LinkPath: str         // Use declaration path string.
    Alias:    str
    Full:     bool        // Full implicit import.
    Selected: []&Token
    Binded:   bool        // Cpp header use declaration.
    Std:      bool        // Standard package use declaration.
}
```
Use declaration statement.

---

```jule
struct EnumItemDecl {
    Token: &Token  // From std::jule::lex
    Ident: str
    Expr:  &Expr   // Nil for auto expression.
}
```
Enum item.

**Methods:**

`fn AutoExpr(self): bool`\
Reports whether item has auto expression.

---

```jule
struct EnumDecl {
    Token:  &Token  // From std::jule::lex
    Public: bool
    Ident:  str
    Kind:   &TypeDecl
    Items:  []&EnumItemDecl
    End:    &Token
}
```
Enum declaration.

**Methods:**

`fn DefaultTyped(self): bool`\
Reports whether enum's type is default.

---

```jule
struct TypeEnumItemDecl {
    Token: &Token
    Ident: str
    Kind:  &TypeDecl
}
```
TypeEnum item.

---

```jule
// TypeEnum declaration.
struct TypeEnumDecl {
    Token:  &Token
    Public: bool
    Ident:  str
    Items:  []&TypeEnumItemDecl
    End:    &Token
}
```
TypeEnum declaration.

---

```jule
struct FieldDecl {
    Token:   &Token  // From std::jule::lex
    Public:  bool
    Mutable: bool   // Interior mutability.
    Ident:   str
    Kind:    &TypeDecl
    Default: &Expr
}
```
Field declaration.

---

```jule
struct StructDecl {
    Token:      &Token // From std::jule::lex
    End:        &Token
    Ident:      str
    Fields:     []&FieldDecl
    Public:     bool
    Binded:     bool
    Directives: []&Directive
    Generics:   []&GenericDecl
}
```
Structure declaration.

---

```jule
struct TraitDecl {
    Token:    &Token // From std::jule::lex
    End:      &Token
    Ident:    str
    Public:   bool
    Inherits: []&TypeDecl
    Methods:  []&FnDecl
}
```
Trait declaration.

---

```jule
struct Impl {
    End: &Token

    // This Token available for these cases:
    //  - Implementation trait to structure, represents trait's type.
    Base: &TypeDecl

    // This Token available for these cases:
    //  - Implementation trait to structure, represents structure's type.
    //  - Implementation to structure, represents structure's type.
    Dest: &TypeDecl

    // Given methods to implement.
    Methods: []&FnDecl

    // Static varaibles to implement.
    Statics: []&VarDecl
}
```
Implementation.

**Methods:**

`fn IsTraitImpl(self): bool`\
Reports whether implementation type is trait to structure.

`fn IsStructImpl(self): bool`\
Reports whether implementation type is append to destination structure.

---

## Enums
`enum NodeData: type`

Type of AST Node's data.

**Fields:**

- `&EnumDecl`
- `&TypeEnumDecl`
- `&FnDecl`
- `&StructDecl`
- `&TraitDecl`
- `&TypeAliasDecl`
- `&VarDecl`
- `&Impl`

---

`enum ExprData: type`

Type of Expr's data.

**Fields:**

- `&RangeExpr`
- `&TupleExpr`
- `&LitExpr`
- `&TypeDecl`
- `&IdentExpr`
- `&UnaryExpr`
- `&SubIdentExpr`
- `&NsSelectionExpr`
- `&VariadicExpr`
- `&CastExpr`
- `&FnCallExpr`
- `&StructLit`
- `&BraceLit`
- `&SlicingExpr`
- `&SliceExpr`
- `&BinaryExpr`
- `&UnsafeExpr`
- `&IndexingExpr`
- `&FnDecl`
- `&FieldExprPair`
- `&KeyValPair`

---

`enum StmtData: type`

Type of Stmt's data.

**Fields:**

- `&VarDecl`
- `&RetSt`
- `&GotoSt`
- `&BreakSt`
- `&ContSt`
- `&Expr`
- `&Conditional`
- `&MatchCase`
- `&Iter`
- `&AssignSt`
- `&FallSt`
- `&LabelSt`
- `&ScopeTree`
- `&TypeAliasDecl`
- `&UseExpr`

---

`emum IterKind: type`

Type of Iter's kind.

**Fields:**

- `&WhileKind`
- `&RangeKind`

---

`enum TypeDeclKind: type`

Kind type of type declarations.

**Fields:**

- `&IdentTypeDecl`
- `&SubIdentTypeDecl`
- `&SptrTypeDecl`
- `&PtrTypeDecl`
- `&SlcTypeDecl`
- `&ArrTypeDecl`
- `&MapTypeDecl`
- `&TupleTypeDecl`
- `&FnDecl`
- `&NamespaceTypeDecl`
