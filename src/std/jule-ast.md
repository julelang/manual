# std/jule/ast

## Index

[Variables](#variables)\
[fn Unparen\(mut e: &amp;Expr\): &amp;Expr](#unparen)\
[struct AST](#ast)\
[struct Node](#node)\
[struct Directive](#directive)\
[struct ChanType](#chantype)\
[struct SliceType](#slicetype)\
[struct ArrayType](#arraytype)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAutoSized\(\*self\): bool](#isautosized)\
[struct MapType](#maptype)\
[struct RetType](#rettype)\
[struct Expr](#expr)\
[struct RangeExpr](#rangeexpr)\
[struct UseExpr](#useexpr)\
[struct TupleExpr](#tupleexpr)\
[struct LitExpr](#litexpr)\
[struct UnsafeExpr](#unsafeexpr)\
[struct NameExpr](#nameexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSelf\(\*self\): bool](#isself)\
[struct UnaryExpr](#unaryexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUnsafePtr\(\*self\): bool](#isunsafeptr)\
[struct VariadicExpr](#variadicexpr)\
[struct TypeAssertionExpr](#typeassertionexpr)\
[struct NamespaceExpr](#namespaceexpr)\
[struct SelectorExpr](#selectorexpr)\
[struct BinaryExpr](#binaryexpr)\
[struct CallExpr](#callexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unhandled\(\*self\): bool](#unhandled)\
[struct TypedBraceLit](#typedbracelit)\
[struct BraceLit](#bracelit)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsEmpty\(\*self\): bool](#isempty)\
[struct KeyValueExpr](#keyvalueexpr)\
[struct SliceExpr](#sliceexpr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsEmpty\(\*self\): bool](#isempty-1)\
[struct IndexExpr](#indexexpr)\
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
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSelf\(\*self\): bool](#isself-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSmartptr\(\*self\): bool](#issmartptr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRefptr\(\*self\): bool](#isrefptr)\
[struct Func](#func)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAnon\(\*self\): bool](#isanon)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsShort\(\*self\): bool](#isshort)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDecl\(\*self\): bool](#isdecl)\
[struct Var](#var)\
[struct Ret](#ret)\
[struct Iter](#iter)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInfinite\(\*self\): bool](#isinfinite)\
[struct WhileKind](#whilekind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsWhileNext\(\*self\): bool](#iswhilenext)\
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
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAutoExpr\(\*self\): bool](#isautoexpr)\
[struct Enum](#enum)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDefaultTyped\(\*self\): bool](#isdefaulttyped)\
[struct TypeEnumItem](#typeenumitem)\
[struct TypeEnum](#typeenum)\
[struct Field](#field)\
[struct Struct](#struct)\
[struct Trait](#trait)\
[struct Impl](#impl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsTraitImpl\(\*self\): bool](#istraitimpl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStructImpl\(\*self\): bool](#isstructimpl)\
[enum NodeData: type ](#nodedata)\
[enum ExprData: type ](#exprdata)\
[enum StmtData: type ](#stmtdata)\
[enum IterKind: type ](#iterkind)

## Variables

```jule
const (
	SEND = 1 << iota
	RECV
)
```
Channel directions\.

---

```jule
let mut Ignored = new(ScopeTree)   // Exception is ignored, like foo()!
let mut Forwarded = new(ScopeTree) // Exception is forwarded, like foo()?
```
Special exceptional handler scopes\.

## Unparen
```jule
fn Unparen(mut e: &Expr): &Expr
```
Returns the expression with any enclosing parentheses removed\.

## AST
```jule
struct AST {
	File:          &token::FileSet
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

## ChanType
```jule
struct ChanType {
	Arrow: &token::Token // Token of arrow.
	Dir:   int           // Direction.
	Value: &Expr         // Value type.
}
```
Channel type\.

## SliceType
```jule
struct SliceType {
	Value: &Expr // Value type.
}
```
Slice type\.

## ArrayType
```jule
struct ArrayType {
	Value: &Expr // Value type.
	Size:  &Expr
}
```
Array type\. Size expression is nil for auto\-sized array\.

### IsAutoSized
```jule
fn IsAutoSized(*self): bool
```
Reports whether array is auto\-sized\.

## MapType
```jule
struct MapType {
	Key:   &Expr
	Value: &Expr
}
```
Map type\.

## RetType
```jule
struct RetType {
	Type:  &Expr
	Names: []&token::Token
}
```
Return type\. Field are nil for the void type\.

## Expr
```jule
struct Expr {
	Token: &token::Token
	End:   &token::Token
	Data:  ExprData
}
```
Expression\.

## RangeExpr
```jule
struct RangeExpr {
	X: &Expr // Expression.
}
```
Range expression represents an expression between parentheses\.

## UseExpr
```jule
struct UseExpr {
	Token: &token::Token
	X:     &Expr // Expression.
}
```
Use expression\.

## TupleExpr
```jule
struct TupleExpr {
	X: []&Expr // Expressions.
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
	Token: &token::Token // Token of the unsafe keyword.
	X:     &Expr         // Expression.
}
```
Unsafe expression\.

## NameExpr
```jule
struct NameExpr {
	Token: &token::Token // Token of identifier.
	Name:  str           // The name.
	Bind:  bool          // It is in the bind namespace.
}
```
Identifier expression\.

### IsSelf
```jule
fn IsSelf(*self): bool
```
Reports whether identifier is self keyword\.

## UnaryExpr
```jule
struct UnaryExpr {
	Op: &token::Token // Token of the operator.
	X:  &Expr         // Expression.
}
```
Unary expression\. For the unsafe pointer \(\*unsafe\) type, Op is star and Expr is nil\.

### IsUnsafePtr
```jule
fn IsUnsafePtr(*self): bool
```
Reports whether the unary expression is the unsafe pointer type declaration\.

## VariadicExpr
```jule
struct VariadicExpr {
	Token: &token::Token
	X:     &Expr // Expression to variadic.
}
```
Variadiced expression\.

## TypeAssertionExpr
```jule
struct TypeAssertionExpr {
	Type: &Expr
	X:    &Expr // Expression to assert.
}
```
Type assertion expression\.

## NamespaceExpr
```jule
struct NamespaceExpr {
	Namespace: &token::Token // Tokens of the namespace identifier.
	Name:      &token::Token // Token of the selected identifier.
}
```
Namespace identifier selection expression\.

## SelectorExpr
```jule
struct SelectorExpr {
	X:    &Expr         // Memory selection based on.
	Name: &token::Token // Token of the selected identifier.
}
```
Identifier selector expression\.

## BinaryExpr
```jule
struct BinaryExpr {
	X:  &Expr         // Left operand.
	Y:  &Expr         // Right operand.
	Op: &token::Token // Operator.
}
```
Binary operation\.

## CallExpr
```jule
struct CallExpr {
	Token:     &token::Token
	Func:      &Expr      // Function expression.
	Args:      []&Expr    // Function arguments, or nil.
	Exception: &ScopeTree // Exception handling scope, or nil.
	IsCo:      bool       // Whether this is the concurrent call.
}
```
Function call expression kind\.

### Unhandled
```jule
fn Unhandled(*self): bool
```
Reports whether exception is not handled\.

## TypedBraceLit
```jule
struct TypedBraceLit {
	Type: &Expr
	Lit:  &BraceLit
}
```
Typed brace instantiating expression\.

## BraceLit
```jule
struct BraceLit {
	Token: &token::Token
	End:   &token::Token
	X:     []&Expr // Expression.
}
```
Anonymous brace instantiating expression\.

### IsEmpty
```jule
fn IsEmpty(*self): bool
```
Reports whether literal is empty \( \{\} \)\.

## KeyValueExpr
```jule
struct KeyValueExpr {
	Key:   &Expr
	Value: &Expr
	Colon: &token::Token
}
```
Key\-value expression\.

## SliceExpr
```jule
struct SliceExpr {
	Token: &token::Token
	End:   &token::Token
	X:     []&Expr // Elements.
}
```
Slice initiating expression\. Also represents array initiating expression\. For array\-fill initiating expression; len\(X\)=2 and the second element is a VariadicExpr with nil expression\.

### IsEmpty
```jule
fn IsEmpty(*self): bool
```
Reports whether slice is empty\.

## IndexExpr
```jule
struct IndexExpr {
	Token: &token::Token
	End:   &token::Token
	X:     &Expr // Value expression to indexing.
	Index: &Expr // Index value expression.
}
```
Index expression\.

## SlicingExpr
```jule
struct SlicingExpr {
	Token: &token::Token
	End:   &token::Token
	X:     &Expr // Value expression to slicing.
	Low:   &Expr // Low index value expression, or nil.
	High:  &Expr // High index value expression, or nil.
	Max:   &Expr // Max index value expression, or nil.
}
```
Slicing expression\.

## Constraint
```jule
struct Constraint {
	Mask: []&Expr
}
```
Constraint\.

## Generic
```jule
struct Generic {
	Token:      &token::Token
	Name:       str
	Constraint: &Constraint
}
```
Generic type declaration\.

## Label
```jule
struct Label {
	Token: &token::Token
	Name:  str
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
	Name:      str
	X:         &Expr // Expression.
}
```
Left expression of assign statement\.

## Assign
```jule
struct Assign {
	Decl: bool          // Whether the assignment may declare variable.
	Op:   &token::Token // Setter operator.
	X:    []&AssignLeft // Lvalue expressions.
	Y:    &Expr         // Expression to be assigned.
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
	Unsafe:   bool
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
	X:    &Expr // Expression.
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
	Type:      &Expr
	Name:      str
}
```
Parameter\.

### IsSelf
```jule
fn IsSelf(*self): bool
```
Reports whether parameter is self \(receiver\) parameter\.

### IsSmartptr
```jule
fn IsSmartptr(*self): bool
```
Reports whether self \(receiver\) parameter is smart pointer\.

### IsRefptr
```jule
fn IsRefptr(*self): bool
```
Reports whether self \(receiver\) parameter is reference pointer\.

## Func
```jule
struct Func {
	Token:       &token::Token
	Global:      bool
	Unsafe:      bool
	Public:      bool
	Bind:        bool
	Short:       bool // Whether this function is an anonymous function, defined by short literal.
	Static:      bool
	Exceptional: bool
	Name:        str
	Directives:  []&Directive
	Scope:       &ScopeTree
	Generics:    []&Generic
	Result:      &RetType
	Params:      []&Param
}
```
Function declaration\. Also represents anonymous function expression and function type declarations\.\. For short function literals, Scope will be deferred to represent one\-line body\.

### IsAnon
```jule
fn IsAnon(*self): bool
```
Reports whether the function is anonymous\.

### IsShort
```jule
fn IsShort(*self): bool
```
Reports whether the function is anonymous and defined in short way\.

### IsDecl
```jule
fn IsDecl(*self): bool
```
Reports whether the function is type declaration\.

## Var
```jule
struct Var {
	Scope:      &ScopeTree // nil for global scopes
	Token:      &token::Token
	Op:         &token::Token // Expression assign operator token.
	Name:       str
	Bind:       bool
	Public:     bool
	Mutable:    bool
	Const:      bool
	Static:     bool
	Reference:  bool
	Directives: []&Directive
	Type:       &Expr // Type declaration, or nil if type inferred.
	X:          &Expr // Initializer expression, or nil.

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
	X:     &Expr // Expression.
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

### IsInfinite
```jule
fn IsInfinite(*self): bool
```
Reports whether iteration is infinite\.

## WhileKind
```jule
struct WhileKind {
	X:         &Expr    // Condition expression.
	Next:      StmtData // Nil if kind is while-next iteration.
	NextToken: &token::Token
}
```
While iteration kind\.

### IsWhileNext
```jule
fn IsWhileNext(*self): bool
```
Reports whether kind is while\-next iteration\.

## RangeKind
```jule
struct RangeKind {
	InToken: &token::Token // Token of "in" keyword
	X:       &Expr         // Range expression.
	A:       &Var          // First key of range.
	B:       &Var          // Second key of range.
}
```
Range iteration kind\.

## Break
```jule
struct Break {
	Token: &token::Token
	Label: &token::Token // Label to break, or nil.
}
```
Break statement\.

## Continue
```jule
struct Continue {
	Token: &token::Token
	Label: &token::Token // Label to continue, or nil.
}
```
Continue statement\.

## If
```jule
struct If {
	Token: &token::Token
	Scope: &ScopeTree
	X:     &Expr
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
	Tail:    []&If // First one is the head condition.
	Default: &Else
}
```
Condition chain\.

## TypeAlias
```jule
struct TypeAlias {
	Scope:  &ScopeTree
	Public: bool
	Bind:   bool
	Token:  &token::Token
	Name:   str
	Strict: bool
	Type:   &Expr
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
	X: []&Expr
}
```
Case of match\-case\.

## Match
```jule
struct Match {
	Comptime: bool
	Token:    &token::Token
	End:      &token::Token
	Type:     bool    // Type matching.
	X:        &Expr   // Expression to match.
	Cases:    []&Case // First one is the head case.
	Default:  &Else
}
```
Match statement\.

## Select
```jule
struct Select {
	Token:   &token::Token
	End:     &token::Token
	Cases:   []&Case // First one is the head condition.
	Default: &Else
}
```
Select statement\.

## Use
```jule
struct Use {
	Token: &token::Token
	Path:  &token::Token // Use declaration path token.
	Alias: &token::Token // Custom alias. Nil if not given.
	Bind:  bool          // Bind use declaration.
}
```
Use declaration statement\.

## EnumItem
```jule
struct EnumItem {
	Token: &token::Token
	Name:  str
	X:     &Expr // Nil for auto expression.
}
```
Enum item\.

### IsAutoExpr
```jule
fn IsAutoExpr(*self): bool
```
Reports whether item has auto expression\.

## Enum
```jule
struct Enum {
	Token:  &token::Token
	Public: bool
	Name:   str
	Type:   &Expr
	Items:  []&EnumItem
	End:    &token::Token
}
```
Enum declaration\.

### IsDefaultTyped
```jule
fn IsDefaultTyped(*self): bool
```
Reports whether enum&#39;s type is default\.

## TypeEnumItem
```jule
struct TypeEnumItem {
	Token: &token::Token
	Type:  &Expr
}
```
TypeEnum item\.

## TypeEnum
```jule
struct TypeEnum {
	Token:  &token::Token
	Public: bool
	Name:   str
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
	Name:    str
	Type:    &Expr
	Tag:     &token::Token // Nil if not given.
}
```
Field declaration\.

## Struct
```jule
struct Struct {
	Token:      &token::Token
	End:        &token::Token
	Name:       str
	Fields:     []&Field
	Public:     bool
	Bind:       bool
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
	Name:     str
	Public:   bool
	Inherits: []&Expr
	Methods:  []&Func
}
```


## Impl
```jule
struct Impl {
	End: &token::Token

	// This token available for these cases:
	//	- Implementation trait to structure, represents trait's type.
	Base: &Expr

	// This token available for these cases:
	//	- Implementation trait to structure, represents structure's type.
	//	- Implementation to structure, represents structure's type.
	Dest: &Expr

	// Given methods to implement.
	Methods: []&Func
}
```
Implementation\.

### IsTraitImpl
```jule
fn IsTraitImpl(*self): bool
```
Reports whether implementation type is trait to structure\.

### IsStructImpl
```jule
fn IsStructImpl(*self): bool
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

## ExprData
```jule
enum ExprData: type {
	&RangeExpr,
	&TupleExpr,
	&LitExpr,
	&NameExpr,
	&UnaryExpr,
	&SelectorExpr,
	&NamespaceExpr,
	&VariadicExpr,
	&CallExpr,
	&TypedBraceLit,
	&BraceLit,
	&SlicingExpr,
	&SliceExpr,
	&BinaryExpr,
	&UnsafeExpr,
	&IndexExpr,
	&Func,
	&KeyValueExpr,
	&ChanSend,
	&TypeAssertionExpr,
	&ChanType,
	&ArrayType,
	&MapType,
	&SliceType,
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