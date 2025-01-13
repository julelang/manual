# std/jule/ast

## Structs
```jule
struct AST {
    File:          &token::Fileset
    TopDirectives: []&Directive
    UseDecls:      []&Use
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
struct Type {
    Token: &token::Token
    Kind:  TypeKind
}
```
Type declaration.\
Also represents type expression.

For primitive types:
- Represented by IdentType
- Token's identity is data type
- Primitive type kind is Ident

For function types:
- Function types represented by &Func

---

```jule
struct IdentType {
    Token:    &token::Token
    Ident:    str
    Binded:   bool
    Generics: []&Type
}
```
Identifier type.

---

```jule
struct SubIdentType {
    Idents: []&IdentType
}
```
Sub-identifier type.

---

```jule
struct NamespaceType {
    Namespace: &token::Token // Namespace token.
    Kind:      &Type         // Type of identifier.
}
```
Namespace chain type.

---

```jule
struct ChanType {
    Recv: bool
    Send: bool
	Elem: &Type
}
```
Channel type.

---

```jule
struct SptrType {
    Elem: &Type
}
```
Smart pointer type. 

---

```jule
struct SliceType {
    Elem: &Type
}
```
Slice type.

---

```jule
struct TupleType {
    Types: []&Type
}
```
Tuple type. 

---

```jule
struct PtrType {
    Elem: &Type
}
```
Pointer type. 

**Methods:**

`fn IsUnsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe).

---

```jule
struct ArrayType {
    Elem: &Type
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
struct MapType {
    Key: &Type
    Val: &Type
}
```
Map type.

---

```jule
struct RetType {
    Kind:   &Type
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
struct ChanRecv {
	Expr: &Expr
}
```
Channel receive expression.

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
    Kind: &Type
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
struct FuncCallExpr {
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
    Kind:  &Type
    Exprs: []ExprData
}
```
Struct literal instantiating expression. 

---

```jule
struct BraceLit {
    Token: &token::Token
    End:   &token::Token
    Exprs: []ExprData
}
```
Anonymous brace instantiating expression.

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
    Mask: []&Type
}
```
Constraint.

---

```jule
struct Generic {
    Token:      &token::Token
    Ident:      str
    Constraint: &Constraint
}
```
Generic type declaration. 

---

```jule
struct Label {
    Token: &token::Token
    Ident: str
}
```
Label statement. 

---

```jule
struct Goto {
    Token: &token::Token
    Label: &token::Token
}
```
Goto statement.

---

```jule
struct Fall {
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
struct Assign {
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
    End:   &token::Token
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
struct ChanSend {
	Chan: &Expr
	Data: &Expr
}
```
Channel send data statement.

---

```jule
struct ParamDecl {
    Token:     &token::Token
    Mutable:   bool
    Variadic:  bool
    Reference: bool
    Kind:      &Type
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
struct Func {
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
    Generics:    []&Generic
    Result:      &RetType
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
struct Var {
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
    Kind:       &Type // nil for auto-typed
    Expr:       &Expr
}
```
Variable declaration. 

---

```jule
struct Ret {
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
    KeyA:    &Var // first key of range
    KeyB:    &Var // second key of range
}
```
Range iteration kind.

---

```jule
struct Break {
    Token: &token::Token
    Label: &token::Token
}
```
Break statement.

---

```jule
struct Continue {
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
struct TypeAlias {
    Scope:  &ScopeTree
    Public: bool
    Binded: bool
    Token:  &token::Token
    Ident:  str
    Kind:   &Type
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
struct Match {
    Token:      &token::Token
    End:        &token::Token
    TypeMatch:  bool
    Expr:       &Expr
    Cases:      []&Case
    Default:    &Else
}
```
Match statement.

---

```jule
struct Select {
	Token:   &token::Token
	End:     &token::Token
	Cases:   []&Case
	Default: &Else
}
```
Select statement.

---

```jule
struct Use {
    Token:  &token::Token
    Path:   &token::Token // Use declaration path token.
    Alias:  &token::Token // Custom alias. Nil if not given.
    Binded: bool          // Bind use declaration.
}
```
Use declaration statement.

---

```jule
struct EnumItem {
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
struct Enum {
    Token:  &token::Token
    Public: bool
    Ident:  str
    Kind:   &Type
    Items:  []&EnumItem
    End:    &token::Token
}
```
Enum declaration.

**Methods:**

`fn DefaultTyped(self): bool`\
Reports whether enum's type is default.

---

```jule
struct TypeEnumItem {
    Token: &token::Token
    Ident: str
    Kind:  &Type
}
```
TypeEnum item.

---

```jule
// TypeEnum declaration.
struct TypeEnum {
    Token:  &token::Token
    Public: bool
    Ident:  str
    Items:  []&TypeEnumItem
    End:    &token::Token
}
```
TypeEnum declaration.

---

```jule
struct Field {
    Token:   &token::Token
    Public:  bool
    Mutable: bool // Interior mutability.
    Ident:   str
    Kind:    &Type
    Default: &Expr
}
```
Field declaration.

---

```jule
struct Struct {
    Token:      &token::Token
    End:        &token::Token
    Ident:      str
    Fields:     []&Field
    Public:     bool
    Binded:     bool
    Directives: []&Directive
    Generics:   []&Generic
}
```
Structure declaration.

---

```jule
struct Trait {
    Token:    &token::Token
    End:      &token::Token
    Ident:    str
    Public:   bool
    Inherits: []&Type
    Methods:  []&Func
}
```
Trait declaration.

---

```jule
struct Impl {
    End: &token::Token

    // This Token available for these cases:
    //  - Implementation trait to structure, represents trait's type.
    Base: &Type

    // This Token available for these cases:
    //  - Implementation trait to structure, represents structure's type.
    //  - Implementation to structure, represents structure's type.
    Dest: &Type

    // Given methods to implement.
    Methods: []&Func

    // Static variables to implement.
    Statics: []&Var
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

- `&Enum`
- `&TypeEnum`
- `&Func`
- `&Struct`
- `&Trait`
- `&TypeAlias`
- `&Var`
- `&Impl`

---

`enum ExprData: type`

Type of Expr's data.

**Fields:**

- `&RangeExpr`
- `&TupleExpr`
- `&LitExpr`
- `&Type`
- `&IdentExpr`
- `&UnaryExpr`
- `&SubIdentExpr`
- `&NamespaceExpr`
- `&VariadicExpr`
- `&CastExpr`
- `&FuncCallExpr`
- `&StructLit`
- `&BraceLit`
- `&SlicingExpr`
- `&SliceExpr`
- `&BinaryExpr`
- `&UnsafeExpr`
- `&IndexingExpr`
- `&Func`
- `&FieldExprPair`
- `&KeyValPair`
- `&ChanRecv`
- `&ChanSend`

---

`enum StmtData: type`

Type of Stmt's data.

**Fields:**

- `&Var`
- `&Ret`
- `&Goto`
- `&Break`
- `&Continue`
- `&Expr`
- `&Conditional`
- `&Match`
- `&Iter`
- `&Assign`
- `&Fall`
- `&Label`
- `&ScopeTree`
- `&TypeAlias`
- `&UseExpr`
- `&Select`

---

`emum IterKind: type`

Type of Iter's kind.

**Fields:**

- `&WhileKind`
- `&RangeKind`

---

`enum TypeKind: type`

Kind type of type declarations.

**Fields:**

- `&IdentType`
- `&SubIdentType`
- `&SptrType`
- `&PtrType`
- `&SliceType`
- `&ArrayType`
- `&MapType`
- `&TupleType`
- `&Func`
- `&NamespaceType`
- `&ChanType`
