# std::jule::ast

## Type Aliases
### `type NodeData: any`
Type of AST Node's data.

---

### `type TypeDeclKind: any`
Kind type of type declarations. 

---

### `type ExprData: any`
Type of Expr's data.

---

### `type IterKind: any`
Type of Iter's kind. 

## Structs
```jule
struct Ast {
    file:           &File // From std::jule::lex
    top_directives: []&Directive
    use_decls:      []&UseDecl

    // Possible types:
    //  &EnumDecl
    //  &FnDecl
    //  &StructDecl
    //  &TraitDecl
    //  &TypeAliasDecl
    //  &VarDecl
    //  &Impl
    nodes: []Node
}
```
Abstract syntax tree.

---

```jule
struct Node {
    token: Token // From std::jule::lex
    data:  NodeData
}
```
AST Node.

**Methods:**

`fn is_decl(self): bool`\
Reports whether node data is declaration.

`fn is_directive(self): bool`\
Reports whether node data is directive.

`fn is_impl(self): bool`\
Reports whether node data is impl.

`fn is_use_decl(self): bool`\
Reports whether node data is use declaration. 

---

```jule
struct Directive {
    tag:  Token
    args: []Token
}
```
Directive.

---

```jule
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

```jule
struct IdentTypeDecl {
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
    generics:   []&TypeDecl
}
```
Identifier type.

**Methods:**

`fn is_prim(self): bool`\
Reports whether identifier is primitive type. 

---

```jule
struct NamespaceTypeDecl {
    idents: []Token    // Token from std::jule::lex
    kind:   &IdentTypeDecl
}
```
Namespace chain type. 

---

```jule
struct SptrTypeDecl {
    elem: &TypeDecl
}
```
Smart pointer type. 

---

```jule
struct SlcTypeDecl {
    elem: &TypeDecl
}
```
Slice type.

---

```jule
struct TupleTypeDecl {
    types: []&TypeDecl
}
```
Tuple type. 

---

```jule
struct PtrTypeDecl {
    elem: &TypeDecl
}
```
Pointer type. 

**Methods:**

`fn is_unsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe).

---

```jule
struct ArrTypeDecl {
    elem: &TypeDecl
    size: &Expr
}
```
Array type.\
Size expression is nil for auto-sized array. 

**Methods:**

`auto_sized(self): bool`\
Reports whether array is auto-sized. 

---

```jule
struct MapTypeDecl {
    key: &TypeDecl
    val: &TypeDecl
}
```
Map type.

---

```jule
struct RetTypeDecl {
    kind:   &TypeDecl
    idents: []Token // Token from std::jule::lex
}
```
Return type.\
Kind and idents is nil for void type.

---

```jule
struct Expr {
    token: Token // From std::jule::lex
    range: bool  // Packaged in parentheses.
    kind:  ExprData
}
```
Expression. 

---

```jule
struct UseExpr {
    token: Token
    expr:  &Expr
}
```
Use expression.

---

```jule
struct TupleExpr {
    expr: []&Expr
}
```
Tuple expression.

---

```jule
struct LitExpr {
    token: Token // From std::jule::lex
    value: str
}
```
Literal expression.

**Methods:**

`fn is_nil(self): bool`\
Reports whether literal is nil value.

---

```jule
struct UnsafeExpr {
    token: Token // From std::jule::lex
    expr:  &Expr
}
```
Unsafe expression.

---

```jule
struct CoExpr {
    token: Token
    expr:  &Expr
}
```
Co expression.

---

```jule
struct IdentExpr {
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
}
```

**Methods:**

`fn is_self(self): bool`\
Reports whether identifier is self keyword.

---

```jule
struct UnaryExpr {
    op:   Token // From std::jule::lex
    expr: &Expr
}
```

---

```jule
struct VariadicExpr {
    token: Token // From std::jule::lex
    expr:  &Expr
}
```
Variadiced expression.

---

```jule
struct CastExpr {
    kind: &TypeDecl
    expr: &Expr
}
```
Casting expression.

---

```jule
struct NsSelectionExpr {
    ns:    []Token // Token from std::jule::lex
    ident: Token
}
```
Namespace identifier selection expression.

---

```jule
struct SubIdentExpr {
    is_self: bool
    expr:    &Expr
    ident:   Token // From std::jule::lex
}
```
Object sub identifier selection expression.

---

```jule
struct BinopExpr {
    left:  &Expr
    right: &Expr
    op:    Token // From std::jule::lex
}
```
Binary operation.

---

```jule
struct FnCallExpr {
    token:     Token // From std::jule::lex
    expr:      &Expr
    generics:  []&TypeDecl
    args:      []&Expr
    exception: &ScopeTree
}
```
Function call expression kind.

**Methods:**

`fn unhandled(self): bool`\
Reports whether exception is not handled.

`fn ignored(self): bool`\
Reports whether exception is ignored.

---

```jule
struct FieldExprPair {
    field: Token // From std::jule::lex
    expr:  &Expr
}
```
Field-Expression pair.

**Methods:**

`fn is_targeted(self): bool`\
Reports whether pair targeted field. 

---

```jule
struct StructLit {
    kind:  &TypeDecl
    exprs: []ExprData
}
```
Struct literal instiating expression. 

---

```jule
struct BraceLit {
    token: Token // From std::jule::lex
    exprs: []ExprData
}
```
Anonymous brace instiating expression.

**Methods:**

`fn is_empty(self): bool`\
Reports whether literal is empty. 

---

```jule
struct KeyValPair {
    key:   &Expr
    val:   &Expr
    colon: Token // From std::jule::lex
}
```
Key-value pair expression.

---

```jule
struct SliceExpr {
    token: Token // From std::jule::lex
    exprs: []&Expr
}
```
Slice initiating expression.\
Also represents array initiating expression.

**Methods:**

`fn is_empty(self): bool`\
Reports whether slice is empty.

---

```jule
struct IndexingExpr {
    token: Token
    expr:  &Expr
    index: &Expr
}
```
Indexing expression. 

---

```jule
struct SlicingExpr {
    token: Token // From std::jule::lex
    expr:  &Expr
    start: &Expr
    to:    &Expr
}
```
Slicing expression.

---

```jule
struct TernaryExpr {
    token:      Token
    condition:  &Expr
    true_expr:  &Expr
    false_expr: &Expr
}
```
Ternary expression.

---

```
struct GenericDecl {
    token: Token // From std::jule::lex
    ident: str
}
```
Generic type declaration. 

---

```jule
struct LabelSt {
    token: Token // From std::jule::lex
    ident: str
}
```
Label statement. 

---

```jule
struct GotoSt {
    token: Token // From std::jule::lex
    label: Token
}
```
Goto statement.

---

```jule
struct FallSt {
    token: Token // From std::jule::lex
}
```
Fall statement.

---

```jule
struct AssignLeft {
    token:     Token // From std::jule::lex
    mutable:   bool
    reference: bool
    ident:     str
    expr:      &Expr
}
```
Left expression of assign statement.

---

```jule
struct AssignSt {
    declarative: bool
    setter:      Token
    left:        []&AssignLeft
    right:       &Expr
}
```
Assign statement.

---

```jule
struct ScopeTree {
    parent:   &ScopeTree
    unsafety: bool
    deferred: bool
    stmts:    []Node
    end:      Token
}
```
Scope tree.

---

```jule
struct ParamDecl {
    token:     Token // From std::jule::lex
    mutable:   bool
    variadic:  bool
    reference: bool
    kind:      &TypeDecl
    ident:     str
}
```
Parameter.

**Methods:**

`fn is_self(self): bool`\
Reports whether parameter is self (receiver) parameter.

`fn is_ref(self): bool`\
Reports whether self (receivers) parameter is reference.

---

```jule
struct FnDecl {
    token:       Token // From std::jule::lex
    global:      bool
    unsafety:    bool
    public:      bool
    cpp_linked:  bool
    statically:  bool
    exceptional: bool
    ident:       str
    directives:  []&Directive
    scope:       &ScopeTree
    generics:    []&GenericDecl
    result:      &RetTypeDecl
    params:      []&ParamDecl
}
```
Function declaration.\
Also represents anonymous function expression.

**Methods:**

`fn is_anon(self): bool`\
Reports whether function is anonymous.

---

```jule
struct VarDecl {
    scope:      &ScopeTree    // nil for global scopes
    token:      Token // From std::jule::lex
    ident:      str
    cpp_linked: bool
    public:     bool
    mutable:    bool
    constant:   bool
    statically: bool
    directives: []&Directive
    kind:       &TypeDecl     // nil for auto-typed
    expr:       &Expr
}
```
Variable declaration. 

---

```jule
struct RetSt {
    token: Token // From std::jule::lex
    expr:  &Expr
}
```
Return statement.

---

```jule
struct Iter {
    token: Token // From std::jule::lex
    kind:  IterKind
    scope: &ScopeTree
}
```
Iteration.

**Methods:**

`fn is_inf(self): bool`\
Reports whether iteration is infinity.

---

```jule
struct WhileKind {
    expr:       &Expr
    next:       NodeData
    next_token: Token // From std::jule::lex
}
```
While iteration kind. 

**Methods:**

`fn is_while_next(self): bool`\
Reports whether kind is while-next iteration. 

---

```jule
struct RangeKind {
    in_token: Token     // Token of "in" keyword, from std::jule::lex
    expr:     &Expr
    key_a:    &VarDecl  // first key of range
    key_b:    &VarDecl  // second key of range
}
```
Range iteration kind.

---

```jule
struct BreakSt {
    token: Token // From std::jule::lex
    label: Token
}
```
Break statement.

---

```jule
struct ContSt {
    token: Token // From std::jule::lex
    label: Token
}
```
Continue statement.

---

```jule
struct If {
    token: Token // From std::jule::lex
    expr:  &Expr
    scope: &ScopeTree
}
```
If condition.

---

```jule
struct Else {
    token: Token // From std::jule::lex
    scope: &ScopeTree
}
```
Else condition.

```jule
struct Conditional {
    head:    &If
    tail:    []&If
    default: &Else
}
```
Condition chain.

---

```jule
struct TypeAliasDecl {
    scope:      &ScopeTree
    public:     bool
    cpp_linked: bool
    token:      Token // From std::jule::lex
    ident:      str
    kind:       &TypeDecl
}
```
Type alias declaration.

---

```jule
struct Case {
    token: Token // From std::jule::lex
    scope: &ScopeTree
    exprs: []&Expr
}
```
Case of match-case. 

---

```jule
struct MatchCase {
    token:      Token // From std::jule::lex
    end:        Token
    type_match: bool
    expr:       &Expr
    cases:      []&Case
    default:    &Else
}
```
Match-Case. 

---

```jule
struct UseDecl {
    token:      Token       // From std::jule::lex
    link_path:  str         // Use declaration path string.
    alias:      str
    full:       bool        // Full implicit import.
    selected:   []Token
    cpp_linked: bool        // Cpp header use declaration.
    std:        bool        // Standard package use declaration.
}
```
Use declaration statement.

---

```jule
struct EnumItemDecl {
    token: Token  // From std::jule::lex
    ident: str
    expr:  &Expr   // Nil for auto expression.
}
```
Enum item.

**Methods:**

`fn auto_expr(self): bool`\
Reports whether item has auto expression.

---

```jule
struct EnumDecl {
    token:  Token  // From std::jule::lex
    public: bool
    ident:  str
    kind:   &TypeDecl
    items:  []&EnumItemDecl
    end:    Token
}
```
Enum declaration.

**Methods:**

`fn default_typed(self): bool`\
Reports whether enum's type is defualt.

---

```jule
struct FieldDecl {
    token:   Token  // From std::jule::lex
    public:  bool
    mutable: bool   // Interior mutability.
    ident:   str
    kind:    &TypeDecl
    default: &Expr
}
```
Field declaration.

---

```jule
struct StructDecl {
    token:      Token // From std::jule::lex
    end:        Token
    ident:      str
    fields:     []&FieldDecl
    public:     bool
    cpp_linked: bool
    directives: []&Directive
    generics:   []&GenericDecl
}
```
Structure declaration.

---

```jule
struct TraitDecl {
    token:   Token // From std::jule::lex
    end:     Token
    ident:   str
    public:  bool
    methods: []&FnDecl
}
```
Trait declaration.

---

```jule
struct Impl {
    end: Token

    // This token available for these cases:
    //  - Implementation trait to structure, represents trait's type.
    base: &TypeDecl

    // This token available for these cases:
    //  - Implementation trait to structure, represents structure's type.
    //  - Implementation to structure, represents structure's type.
    dest: &TypeDecl

    // Given methods to implement.
    methods: []&FnDecl

    // Static varaibles to implement.
    statics: []&VarDecl
}
```
Implementation.

**Methods:**

`fn is_trait_impl(self): bool`\
Reports whether implementation type is trait to structure.

`fn is_struct_impl(self): bool`\
Reports whether implementation type is append to destination structure.