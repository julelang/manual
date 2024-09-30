# std/jule/ast

## Structs
```jule
struct AST {
    File:          &token::Fileset
    TopDirectives: []&Directive
    UseDecls:      []&UseDecl
    Nodes:         []Node
}
```
Abstract syntax tree.

---

```jule
struct Node {
    Token: &token::Token
    Data:  NodeData
}
```
AST Node.

---

```jule
struct Directive {
    Tag:  &token::Token
    Args: []&token::Token
}
```
Directive.

---

```jule
struct TypeDecl {
    Token: &token::Token
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
    Token:    &token::Token
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
    Namespace: &token::Token // Namespace token.
    Kind:      &TypeDecl     // Type of identifier.
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
    Idents: []&token::Token
}
```
Return type.\
Kind and Idents is nil for void type.

---

```jule
struct Expr {
    Token: &token::Token
    End:   &token::Token
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
    Token: &token::Token
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
    Token: &token::Token
    Value: str
}
```
Literal expression.

---

```jule
struct UnsafeExpr {
    Token: &token::Token
    Expr:  &Expr
}
```
Unsafe expression.

---

```jule
struct IdentExpr {
    Token:  &token::Token
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
    Op:   &token::Token
    Expr: &Expr
}
```

---

```jule
struct VariadicExpr {
    Token: &token::Token
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
struct NamespaceExpr {
    Namespace: &token::Token // Tokens of namespace identifier.
    Ident:     &token::Token // Token of selected identifier.
}
```
Namespace identifier selection expression.

---

```jule
struct SubIdentExpr {
    Expr:  &Expr
    Ident: &token::Token
}
```
Object sub identifier selection expression.

---

```jule
struct BinaryExpr {
    Left:  &Expr
    Right: &Expr
    Op:    &token::Token
}
```
Binary operation.

---

```jule
struct FnCallExpr {
    Token:     &token::Token
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
    Field: &token::Token
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
    End:   &token::Token
    Kind:  &TypeDecl
    Exprs: []ExprData
}
```
Struct literal instiating expression. 

---

```jule
struct BraceLit {
    Token: &token::Token
    End:   &token::Token
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
    Colon: &token::Token
}
```
Key-value pair expression.

---

```jule
struct SliceExpr {
    Token: &token::Token
    End:   &token::Token
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
    Token: &token::Token
    End:   &token::Token
    Expr:  &Expr
    Index: &Expr
}
```
Indexing expression. 

---

```jule
struct SlicingExpr {
    Token: &token::Token
    End:   &token::Token
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
    Token:      &token::Token
    Ident:      str
    Constraint: &Constraint
}
```
Generic type declaration. 

---

```jule
struct LabelSt {
    Token: &token::Token
    Ident: str
}
```
Label statement. 

---

```jule
struct GotoSt {
    Token: &token::Token
    Label: &token::Token
}
```
Goto statement.

---

```jule
struct FallSt {
    Token: &token::Token
}
```
Fall statement.

---

```jule
struct AssignLeft {
    Token:     &token::Token
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
    Setter:      &token::Token
    Left:        []&AssignLeft
    Right:       &Expr
}
```
Assign statement.

---

```jule
struct Stmt {
    Token: &token::Token
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
    End:      &token::Token
}
```
Scope tree.

---

```jule
struct ParamDecl {
    Token:     &token::Token
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
    Token:       &token::Token
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
    Scope:      &ScopeTree // nil for global scopes
    Token:      &token::Token
    Setter:     &token::Token
    Ident:      str
    Binded:     bool
    Public:     bool
    Mutable:    bool
    Constant:   bool
    Statically: bool
    Directives: []&Directive
    Kind:       &TypeDecl // nil for auto-typed
    Expr:       &Expr
}
```
Variable declaration. 

---

```jule
struct RetSt {
    Token: &token::Token
    Expr:  &Expr
}
```
Return statement.

---

```jule
struct Iter {
    Comptime: bool
    Token:    &token::Token
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
    Next:      StmtData // Nil if kind is while-next iteration.
    NextToken: &token::Token
}
```
While iteration kind. 

**Methods:**

`fn IsWhileNext(self): bool`\
Reports whether kind is while-next iteration. 

---

```jule
struct RangeKind {
    InToken: &token::Token // Token of "in" keyword
    Expr:    &Expr
    KeyA:    &VarDecl // first key of range
    KeyB:    &VarDecl // second key of range
}
```
Range iteration kind.

---

```jule
struct BreakSt {
    Token: &token::Token
    Label: &token::Token
}
```
Break statement.

---

```jule
struct ContSt {
    Token: &token::Token
    Label: &token::Token
}
```
Continue statement.

---

```jule
struct If {
    Token: &token::Token
    Expr:  &Expr
    Scope: &ScopeTree
}
```
If condition.

---

```jule
struct Else {
    Token: &token::Token
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
    Token:  &token::Token
    Ident:  str
    Kind:   &TypeDecl
}
```
Type alias declaration.

---

```jule
struct Case {
    Token: &token::Token
    Scope: &ScopeTree
    Exprs: []&Expr
}
```
Case of match-case. 

---

```jule
struct MatchCase {
    Token:      &token::Token
    End:        &token::Token
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
    Token:  &token::Token
    Path:   &token::Token // Use declaration path token.
    Alias:  &token::Token // Custom alias. Nil if not given.
    Binded: bool          // Bind use declaration.
}
```
Use declaration statement.

---

```jule
struct EnumItemDecl {
    Token: &token::Token
    Ident: str
    Expr:  &Expr // Nil for auto expression.
}
```
Enum item.

**Methods:**

`fn AutoExpr(self): bool`\
Reports whether item has auto expression.

---

```jule
struct EnumDecl {
    Token:  &token::Token
    Public: bool
    Ident:  str
    Kind:   &TypeDecl
    Items:  []&EnumItemDecl
    End:    &token::Token
}
```
Enum declaration.

**Methods:**

`fn DefaultTyped(self): bool`\
Reports whether enum's type is default.

---

```jule
struct TypeEnumItemDecl {
    Token: &token::Token
    Ident: str
    Kind:  &TypeDecl
}
```
TypeEnum item.

---

```jule
// TypeEnum declaration.
struct TypeEnumDecl {
    Token:  &token::Token
    Public: bool
    Ident:  str
    Items:  []&TypeEnumItemDecl
    End:    &token::Token
}
```
TypeEnum declaration.

---

```jule
struct FieldDecl {
    Token:   &token::Token
    Public:  bool
    Mutable: bool // Interior mutability.
    Ident:   str
    Kind:    &TypeDecl
    Default: &Expr
}
```
Field declaration.

---

```jule
struct StructDecl {
    Token:      &token::Token
    End:        &token::Token
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
    Token:    &token::Token
    End:      &token::Token
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
    End: &token::Token

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
- `&NamespaceExpr`
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
