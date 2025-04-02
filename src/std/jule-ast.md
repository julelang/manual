# std/jule/ast

## Index

[struct AST](#ast)\
[struct Node](#node)\
[struct Directive](#directive)\
[struct Type](#type)\
[struct IdentType](#identtype)\
[struct NamespaceType](#namespacetype)\
[struct ChanType](#chantype)\
[struct SptrType](#sptrtype)\
[struct SliceType](#slicetype)\
[struct TupleType](#tupletype)\
[struct PtrType](#ptrtype)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUnsafe\(self\): bool](#isunsafe)\
[struct ArrayType](#arraytype)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AutoSized\(self\): bool](#autosized)\
[struct MapType](#maptype)\
[struct RetType](#rettype)\
[struct Expr](#expr)\
[struct ChanRecv](#chanrecv)\
[struct RangeExpr](#rangeexpr)\
[struct UseExpr](#useexpr)\
[struct TupleExpr](#tupleexpr)\
[struct LitExpr](#litexpr)\
[struct UnsafeExpr](#unsafeexpr)\
[struct IdentExpr](#identexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSelf\(self\): bool](#isself)\
[struct UnaryExpr](#unaryexpr)\
[struct VariadicExpr](#variadicexpr)\
[struct CastExpr](#castexpr)\
[struct TypeAssertionExpr](#typeassertionexpr)\
[struct NamespaceExpr](#namespaceexpr)\
[struct SubIdentExpr](#subidentexpr)\
[struct BinaryExpr](#binaryexpr)\
[struct FuncCallExpr](#funccallexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unhandled\(self\): bool](#unhandled)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Ignored\(self\): bool](#ignored)\
[struct FieldExprPair](#fieldexprpair)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsTargeted\(self\): bool](#istargeted)\
[struct TypedBraceLit](#typedbracelit)\
[struct BraceLit](#bracelit)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsEmpty\(self\): bool](#isempty)\
[struct KeyValPair](#keyvalpair)\
[struct SliceExpr](#sliceexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsEmpty\(self\): bool](#isempty-1)\
[struct IndexingExpr](#indexingexpr)\
[struct SlicingExpr](#slicingexpr)\
[struct Constraint](#constraint)\
[struct Generic](#generic)\
[struct Label](#label)\
[struct Goto](#goto)\
[struct Fall](#fall)\
[struct AssignLeft](#assignleft)\
[struct Assign](#assign)\
[struct Stmt](#stmt)\
[struct ScopeTree](#scopetree)\
[struct ChanSend](#chansend)\
[struct Param](#param)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSelf\(self\): bool](#isself-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRef\(self\): bool](#isref)\
[struct Func](#func)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAnon\(self\): bool](#isanon)\
[struct Var](#var)\
[struct Ret](#ret)\
[struct Iter](#iter)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInf\(self\): bool](#isinf)\
[struct WhileKind](#whilekind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsWhileNext\(self\): bool](#iswhilenext)\
[struct RangeKind](#rangekind)\
[struct Break](#break)\
[struct Continue](#continue)\
[struct If](#if)\
[struct Else](#else)\
[struct Conditional](#conditional)\
[struct TypeAlias](#typealias)\
[struct Case](#case)\
[struct Match](#match)\
[struct Select](#select)\
[struct Use](#use)\
[struct EnumItem](#enumitem)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AutoExpr\(self\): bool](#autoexpr)\
[struct Enum](#enum)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DefaultTyped\(self\): bool](#defaulttyped)\
[struct TypeEnumItem](#typeenumitem)\
[struct TypeEnum](#typeenum)\
[struct Field](#field)\
[struct Struct](#struct)\
[struct Trait](#trait)\
[struct Impl](#impl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsTraitImpl\(self\): bool](#istraitimpl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStructImpl\(self\): bool](#isstructimpl)\
[enum NodeData: type ](#nodedata)\
[enum TypeKind: type ](#typekind)\
[enum ExprData: type ](#exprdata)\
[enum StmtData: type ](#stmtdata)\
[enum IterKind: type ](#iterkind)



## AST
```jule
struct AST {
	File:          &token::Fileset
	TopDirectives: []&Directive
	UseDecls:      []&Use
	Nodes:         []Node
}
```
Abstract syntax tree\.

## Node
```jule
struct Node {
	Token: &token::Token
	Data:  NodeData
}
```
AST Node\.

## Directive
```jule
struct Directive {
	Tag:  &token::Token
	Args: []&token::Token
}
```
Directive\.

## Type
```jule
struct Type {
	Token: &token::Token
	Kind:  TypeKind
}
```
Type declaration\. Also represents type expression\.

For primitive types:<br>

- Represented by IdentType\.
- Token&#39;s identity is data type\.
- Primitive type kind is Ident\.

For function types:<br>

- Function types represented by &amp;Func\.

## IdentType
```jule
struct IdentType {
	Token:    &token::Token
	Ident:    str
	Binded:   bool
	Generics: []&Type
}
```
Identifier type\.

## NamespaceType
```jule
struct NamespaceType {
	Namespace: &token::Token // Namespace token.
	Kind:      &Type         // Type of identifier.
}
```
Namespace chain type\.

## ChanType
```jule
struct ChanType {
	Recv: bool
	Send: bool
	Elem: &Type
}
```
Channel type\.

## SptrType
```jule
struct SptrType {
	Elem: &Type
}
```
Smart pointer type\.

## SliceType
```jule
struct SliceType {
	Elem: &Type
}
```
Slice type\.

## TupleType
```jule
struct TupleType {
	Types: []&Type
}
```
Tuple type\.

## PtrType
```jule
struct PtrType {
	Elem: &Type
}
```
Pointer type\.

### IsUnsafe
```jule
fn IsUnsafe(self): bool
```
Reports whether pointer is unsafe pointer \(\*unsafe\)\.

## ArrayType
```jule
struct ArrayType {
	Elem: &Type
	Size: &Expr
}
```
Array type\. Size expression is nil for auto\-sized array\.

### AutoSized
```jule
fn AutoSized(self): bool
```
Reports whether array is auto\-sized\.

## MapType
```jule
struct MapType {
	Key: &Type
	Val: &Type
}
```
Map type\.

## RetType
```jule
struct RetType {
	Kind:   &Type
	Idents: []&token::Token
}
```
Return type\. Kind and Idents is nil for void type\.

## Expr
```jule
struct Expr {
	Token: &token::Token
	End:   &token::Token
	Kind:  ExprData
}
```
Expression\.

## ChanRecv
```jule
struct ChanRecv {
	Expr: &Expr
}
```
Channel receive expression\.

## RangeExpr
```jule
struct RangeExpr {
	Expr: &Expr
}
```
Range expression between parentheses\.

## UseExpr
```jule
struct UseExpr {
	Token: &token::Token
	Expr:  &Expr
}
```
Use expression\.

## TupleExpr
```jule
struct TupleExpr {
	Expr: []&Expr
}
```
Tuple expression\.

## LitExpr
```jule
struct LitExpr {
	Token: &token::Token
	Value: str
}
```
Literal expression\.

## UnsafeExpr
```jule
struct UnsafeExpr {
	Token: &token::Token // Token of unsafe keyword.
	Expr:  &Expr
}
```
Unsafe expression\.

## IdentExpr
```jule
struct IdentExpr {
	Token:  &token::Token // Token of identifier.
	Ident:  str
	Binded: bool
}
```
Identifier expression\.

### IsSelf
```jule
fn IsSelf(self): bool
```
Reports whether identifier is self keyword\.

## UnaryExpr
```jule
struct UnaryExpr {
	Op:   &token::Token
	Expr: &Expr
}
```
Unary expression\.

## VariadicExpr
```jule
struct VariadicExpr {
	Token: &token::Token
	Expr:  &Expr
}
```
Variadiced expression\.

## CastExpr
```jule
struct CastExpr {
	Kind: &Type
	Expr: &Expr
}
```
Casting expression\.

## TypeAssertionExpr
```jule
struct TypeAssertionExpr {
	Kind: &Type
	Expr: &Expr
}
```
Type assertion expression\.

## NamespaceExpr
```jule
struct NamespaceExpr {
	Namespace: &token::Token // Tokens of namespace identifier.
	Ident:     &token::Token // Token of selected identifier.
}
```
Namespace identifier selection expression\.

## SubIdentExpr
```jule
struct SubIdentExpr {
	Expr:  &Expr         // Selected object.
	Ident: &token::Token // Token of selected identifier.
}
```
Object sub identifier selection expression\.

## BinaryExpr
```jule
struct BinaryExpr {
	Left:  &Expr
	Right: &Expr
	Op:    &token::Token
}
```
Binary operation\.

## FuncCallExpr
```jule
struct FuncCallExpr {
	Token:     &token::Token
	Expr:      &Expr
	Args:      []&Expr
	Exception: &ScopeTree // Exception handling scope.
	IsCo:      bool
}
```
Function call expression kind\.

### Unhandled
```jule
fn Unhandled(self): bool
```
Reports whether exception is not handled\.

### Ignored
```jule
fn Ignored(self): bool
```
Reports whether exception is ignored\.

## FieldExprPair
```jule
struct FieldExprPair {
	Field: &token::Token // Field identifier token.
	Expr:  &Expr
}
```
Field\-Expression pair\.

### IsTargeted
```jule
fn IsTargeted(self): bool
```
Reports whether pair targeted field\.

## TypedBraceLit
```jule
struct TypedBraceLit {
	Kind: &Type
	Lit:  &BraceLit
}
```
Typed brace instantiating expression\.

## BraceLit
```jule
struct BraceLit {
	Token: &token::Token
	End:   &token::Token
	Exprs: []&Expr
}
```
Anonymous brace instantiating expression\.

### IsEmpty
```jule
fn IsEmpty(self): bool
```
Reports whether literal is empty \( \{\} \)\.

## KeyValPair
```jule
struct KeyValPair {
	Key:   &Expr
	Val:   &Expr
	Colon: &token::Token
}
```
Key\-value pair expression\.

## SliceExpr
```jule
struct SliceExpr {
	Token: &token::Token
	End:   &token::Token
	Exprs: []&Expr
}
```
Slice initiating expression\. Also represents array initiating expression\.

### IsEmpty
```jule
fn IsEmpty(self): bool
```
Reports whether slice is empty\.

## IndexingExpr
```jule
struct IndexingExpr {
	Token: &token::Token
	End:   &token::Token
	Expr:  &Expr // Value expression to indexing.
	Index: &Expr // Index value expression.
}
```
Indexing expression\.

## SlicingExpr
```jule
struct SlicingExpr {
	Token: &token::Token
	End:   &token::Token
	Expr:  &Expr // Value expression to slicing.
	Start: &Expr // Start index value expression.
	To:    &Expr // To index value expression.
	Cap:   &Expr // Cap index value expression.
}
```
Slicing expression\.

## Constraint
```jule
struct Constraint {
	Mask: []&Type
}
```
Constraint\.

## Generic
```jule
struct Generic {
	Token:      &token::Token
	Ident:      str
	Constraint: &Constraint
}
```
Generic type declaration\.

## Label
```jule
struct Label {
	Token: &token::Token
	Ident: str
}
```
Label statement\.

## Goto
```jule
struct Goto {
	Token: &token::Token
	Label: &token::Token
}
```
Goto statement\.

## Fall
```jule
struct Fall {
	Token: &token::Token
}
```
Fall statement\.

## AssignLeft
```jule
struct AssignLeft {
	Token:     &token::Token
	Mutable:   bool
	Reference: bool
	Ident:     str
	Expr:      &Expr
}
```
Left expression of assign statement\.

## Assign
```jule
struct Assign {
	Declarative: bool
	Setter:      &token::Token
	Left:        []&AssignLeft
	Right:       &Expr
}
```
Assign statement\.

## Stmt
```jule
struct Stmt {
	Token: &token::Token
	End:   &token::Token
	Data:  StmtData
}
```
Statement\.

## ScopeTree
```jule
struct ScopeTree {
	Parent:   &ScopeTree // Nil if scope is root.
	Unsafety: bool
	Deferred: bool
	Stmts:    []Stmt
	End:      &token::Token
}
```
Scope tree\.

## ChanSend
```jule
struct ChanSend {
	Chan: &Expr
	Data: &Expr
}
```
Channel send data statement\.

## Param
```jule
struct Param {
	Token:     &token::Token
	Mutable:   bool
	Variadic:  bool
	Reference: bool
	Kind:      &Type
	Ident:     str
}
```
Parameter\.

### IsSelf
```jule
fn IsSelf(self): bool
```
Reports whether parameter is self \(receiver\) parameter\.

### IsRef
```jule
fn IsRef(self): bool
```
Reports whether self \(receiver\) parameter is reference\.

## Func
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
	Params:      []&Param
}
```
Function declaration\. Also represents anonymous function expression\.

### IsAnon
```jule
fn IsAnon(self): bool
```
Reports whether function is anonymous\.

## Var
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
	Reference:  bool
	Directives: []&Directive
	Kind:       &Type // nil for type inferred
	Expr:       &Expr

	// See developer reference (12).
	GroupIndex: int    // Index of variable in the group, if variable is grouped.
	Group:      []&Var // All variables of group in define order, if variable is grouped.
}
```
Variable declaration\.

## Ret
```jule
struct Ret {
	Token: &token::Token
	Expr:  &Expr
}
```
Return statement\.

## Iter
```jule
struct Iter {
	Comptime: bool
	Token:    &token::Token
	Kind:     IterKind
	Scope:    &ScopeTree
}
```
Iteration\.

### IsInf
```jule
fn IsInf(self): bool
```
Reports whether iteration is infinity\.

## WhileKind
```jule
struct WhileKind {
	Expr:      &Expr
	Next:      StmtData // Nil if kind is while-next iteration.
	NextToken: &token::Token
}
```
While iteration kind\.

### IsWhileNext
```jule
fn IsWhileNext(self): bool
```
Reports whether kind is while\-next iteration\.

## RangeKind
```jule
struct RangeKind {
	InToken: &token::Token // Token of "in" keyword
	Expr:    &Expr
	KeyA:    &Var // first key of range
	KeyB:    &Var // second key of range
}
```
Range iteration kind\.

## Break
```jule
struct Break {
	Token: &token::Token
	Label: &token::Token
}
```
Break statement\.

## Continue
```jule
struct Continue {
	Token: &token::Token
	Label: &token::Token
}
```
Continue statement\.

## If
```jule
struct If {
	Token: &token::Token
	Expr:  &Expr
	Scope: &ScopeTree
}
```
If condition\.

## Else
```jule
struct Else {
	Token: &token::Token
	Scope: &ScopeTree
}
```
Else condition\.

## Conditional
```jule
struct Conditional {
	Head:    &If
	Tail:    []&If
	Default: &Else
}
```
Condition chain\.

## TypeAlias
```jule
struct TypeAlias {
	Scope:  &ScopeTree
	Public: bool
	Binded: bool
	Token:  &token::Token
	Ident:  str
	Strict: bool
	Kind:   &Type
}
```
Type alias declaration\.

## Case
```jule
struct Case {
	Token: &token::Token
	Scope: &ScopeTree

	// Holds expression.
	// Expressions holds *Type if If type matching.
	Exprs: []&Expr
}
```
Case of match\-case\.

## Match
```jule
struct Match {
	Comptime:  bool
	Token:     &token::Token
	End:       &token::Token
	TypeMatch: bool
	Expr:      &Expr
	Cases:     []&Case
	Default:   &Else
}
```
Match statement\.

## Select
```jule
struct Select {
	Token:   &token::Token
	End:     &token::Token
	Cases:   []&Case
	Default: &Else
}
```
Select statement\.

## Use
```jule
struct Use {
	Token:  &token::Token
	Path:   &token::Token // Use declaration path token.
	Alias:  &token::Token // Custom alias. Nil if not given.
	Binded: bool          // Bind use declaration.
}
```
Use declaration statement\.

## EnumItem
```jule
struct EnumItem {
	Token: &token::Token
	Ident: str
	Expr:  &Expr // Nil for auto expression.
}
```
Enum item\.

### AutoExpr
```jule
fn AutoExpr(self): bool
```
Reports whether item has auto expression\.

## Enum
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
Enum declaration\.

### DefaultTyped
```jule
fn DefaultTyped(self): bool
```
Reports whether enum&#39;s type is default\.

## TypeEnumItem
```jule
struct TypeEnumItem {
	Token: &token::Token
	Kind:  &Type
}
```
TypeEnum item\.

## TypeEnum
```jule
struct TypeEnum {
	Token:  &token::Token
	Public: bool
	Ident:  str
	Items:  []&TypeEnumItem
	End:    &token::Token
}
```
TypeEnum declaration\.

## Field
```jule
struct Field {
	Token:   &token::Token
	Public:  bool
	Mutable: bool // Interior mutability.
	Ident:   str
	Kind:    &Type
	Default: &Expr // Nil if not given.
}
```
Field declaration\.

## Struct
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
Structure declaration\.

## Trait
```jule
struct Trait {
	// Trait declaration.
	Token:    &token::Token
	End:      &token::Token
	Ident:    str
	Public:   bool
	Inherits: []&Type
	Methods:  []&Func
}
```


## Impl
```jule
struct Impl {
	End: &token::Token

	// This token available for these cases:
	//	- Implementation trait to structure, represents trait's type.
	Base: &Type

	// This token available for these cases:
	//	- Implementation trait to structure, represents structure's type.
	//	- Implementation to structure, represents structure's type.
	Dest: &Type

	// Given methods to implement.
	Methods: []&Func
}
```
Implementation\.

### IsTraitImpl
```jule
fn IsTraitImpl(self): bool
```
Reports whether implementation type is trait to structure\.

### IsStructImpl
```jule
fn IsStructImpl(self): bool
```
Reports whether implementation type is append to destination structure\.

## NodeData
```jule
enum NodeData: type {
	&Enum,
	&TypeEnum,
	&Func,
	&Struct,
	&Trait,
	&TypeAlias,
	&Var,
	&Impl,
}
```
Type of AST Node&#39;s data\.

## TypeKind
```jule
enum TypeKind: type {
	&IdentType,
	&SptrType,
	&PtrType,
	&SliceType,
	&ArrayType,
	&MapType,
	&TupleType,
	&Func,
	&NamespaceType,
	&ChanType,
}
```
Kind type of type declarations\.

## ExprData
```jule
enum ExprData: type {
	&RangeExpr,
	&TupleExpr,
	&LitExpr,
	&Type,
	&IdentExpr,
	&UnaryExpr,
	&SubIdentExpr,
	&NamespaceExpr,
	&VariadicExpr,
	&CastExpr,
	&FuncCallExpr,
	&TypedBraceLit,
	&BraceLit,
	&SlicingExpr,
	&SliceExpr,
	&BinaryExpr,
	&UnsafeExpr,
	&IndexingExpr,
	&Func,
	&FieldExprPair,
	&KeyValPair,
	&ChanRecv,
	&ChanSend,
	&TypeAssertionExpr,
}
```
Type of Expr&#39;s data\.

## StmtData
```jule
enum StmtData: type {
	&Var,
	&Ret,
	&Goto,
	&Break,
	&Continue,
	&Expr,
	&Conditional,
	&Match,
	&Iter,
	&Assign,
	&Fall,
	&Label,
	&ScopeTree,
	&TypeAlias,
	&UseExpr,
	&Select,
}
```
Type of Stmt&#39;s data\.

## IterKind
```jule
enum IterKind: type {
	&WhileKind,
	&RangeKind,
}
```
Type of Iter&#39;s kind\.