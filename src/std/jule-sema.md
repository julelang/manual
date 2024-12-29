# std/jule/sema

## Functions
```jule
fn AnalyzePackage(mut files: []&ast::AST, mut importer: Importer, flags: Flag): (&Package, []build::Log)
```
Builds symbol table of package's ASTs.\
Returns nil if files is nil.\
Returns nil if pwd is empty.\
Returns nil if pstd is empty.\
Accepts current working directory is pwd.

Parameters:
- files: abstract syntax trees of files
- importer: importer that used for use declarations

Dependent Parameters:
- working-directory: uses working directory path provided by build
- std-path: uses standard library path provided by build

::: warning
You can pass nil to importer, but panics if importer is nil and semantic analyzer used nil importer.
:::

---

```jule
fn AnalyzeFile(mut f: &ast::AST, mut importer: Importer, flags: Flag): (&SymTab, []build::Log)
```
Builds symbol table of package's ASTs.\
Returns nil if files is nil.\
Returns nil if pwd is empty.\
Returns nil if pstd is empty.\
Accepts current working directory is pwd. 

Parameters:
- files: abstract syntax trees of files
- importer: importer that used for use declarations

Dependent Parameters:
- working-directory: uses working directory path provided by build
- std-path: uses standard library path provided by build

::: warning
You can pass nil to importer, but panics if importer is nil and semantic analyzer used nil importer.
:::

## Structs
```jule
struct EnumItem {
    Token: &token::Token
    Ident: str
    Value: &Value
}
```
Enum item.

**Methods:**

`fn AutoExpr(self): bool`\
Reports whether item has auto expression.

---

```jule
struct Enum {
    Token:   &token::Token
    Public:  bool
    Ident:   str
    TypeSym: &TypeSym
    Items:   []&EnumItem
}
```
Enum.
::: info
**Implemented Traits**\
- `Kind`
:::

**Methods:**

`fn FindItem(mut self, ident: str): &EnumItem`\
Returns item by identifier.\
Returns nil if not exist any item in this identifier. 

---

```jule
struct TypeEnumItem {
    Token:   &token::Token
    Ident:   str
    TypeSym: &TypeSym
}
```
TypeEnum item.

---

```jule
struct TypeEnum {
    Token:  &token::Token
    Public: bool
    Ident:  str
    Items:  []&TypeEnumItem
}
```
TypeEnum.
::: info
**Implemented Traits**\
- `Kind`
:::

**Methods:**

`fn FindItem(mut self, ident: str): &TypeEnumItem`\
Returns item by identifier.\
Returns nil if not exist any item in this identifier. 

---

```jule
struct Data {
    Type:      &Type
    Mutable:   bool
    Reference: bool
    Lvalue:    bool
    IsRune:    bool
    Model:     Expr

    // True if kind is declaration such as:
    //  - &Enum
    //  - &Struct
    //  - int type
    //  - bool type
    Decl: bool

    // Constant expression data.
    Constant: &constant::Const
}
```
Value data.
::: info
**Implemented Traits**\
- `Kind`
:::

**Methods:**

`fn IsNil(self): bool`\
Reports whether Data is nil literal.

`fn IsVoid(self): bool`\
Reports whether Data is void.

`fn IsConst(self): bool`\
Reports whether Data is constant expression. 

`fn GoodOperand(self, mut &other: &Data): bool`\
Reports left and right operand is good order.
If reports false, left and right operand should be swapped.
Accepts itself as left operand.

---

```jule
struct Value {
    Expr: &ast::Expr
    Data: &Data
}
```
Value. 

---

```jule
struct OperandExpr {
    Type:  &Type
    Model: Expr
}
```
Operand expression model.

---

```jule
struct BinaryExpr {
    Left:  &OperandExpr
    Right: &OperandExpr
    Op:    &token::Token
}
```
Binary operation expression model. 

---

```jule
struct UnaryExpr {
    Expr:  Expr
    Op:    &token::Token
}
```
Unary operation expression model. 

---

```jule
struct StructArgExpr {
    Field: &FieldIns
    Expr:  Expr
}
```
Structure field argument expression model for constructors.\
For example: `&MyStruct{10, false, "-"}`

---

```jule
struct StructLitExpr {
    Token: &token::Token
    Strct: &StructIns
    Args:  []&StructArgExpr
}
```
Structure literal. 

---

```jule
struct AllocStructLitExpr {
    Lit: &StructLitExpr
}
```
Heap allocated structure litral expression.\
For example: `&MyStruct{}`

---

```jule
struct CastingExpr {
    Token: &token::Token
    Expr:  &Data
    Type:  &Type
}
```
Casting expression model. For example: `(int)(myFloat)`

---

```jule
struct FuncCallExpr {
    Token:    &token::Token
    Func:     &FuncIns
    IsCo:     bool
    Expr:     Expr
    Args:     []Expr
    Except:   &Scope
    Assigned: bool
}
```
Function call expression model. 

---

```jule
struct BuiltinErrorCallExpr {
    Func: &FuncIns
    Err:  &Data
}
```
Expression model for built-in error function calls.

---

```jule
struct SliceExpr {
    ElemType: &Type
    Elems:    []&Data
}
```
Slice expression model.\
For example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

---

```jule
struct IndexingExpr {
    Token: &token::Token
    Expr:  &Data
    Index: &Data
}
```
Indexing expression model.\
For example: `mySlice[myIndex]`

---

```jule
struct AnonFuncExpr {
    Captured: []&Var
    Func:     &FuncIns
    Global:   bool
}
```
Anonymous function expression model. 

---

```jule
struct KeyValPairExpr {
    Key: Expr
    Val: Expr
}
```
Key-value expression pair model.

---

```jule
struct MapExpr {
    Kind:    &Map
    Entries: []&KeyValPairExpr
}
```
Map expression model.
For example: `{0: false, 1: true}`

---

```jule
struct SlicingExpr {
    Token: &token::Token
    Expr:  Expr
    Left:  Expr
    Right: Expr
}
```
Slicing expression model.
For example: `mySlice[2:len(mySlice)-5]`

---

```jule
struct TraitSubIdentExpr {
    Token:  &token::Token
    Expr:   Expr
    Method: &Func
    Trt:    &Trait
}
```
Trait sub-ident expression model.
For example: `myTrait.mySubIdent`

---

```jule
struct StructSubIdentExpr {
    Token:  &token::Token
    Expr:   &Data
    Method: &FuncIns
    Field:  &FieldIns
    Owner:  &StructIns
}
```
Structure sub-ident expression model.
For example: `myStruct.mySubIdent`

---

```jule
struct ArrayExpr {
    Kind:  &Arr
    Elems: []&Data
}
```
Array expression model.  If array filled, elems field holds 2 data. First data is expression, second is nil, kind of mark to that array filled.

---

```jule
struct TupleExpr {
    Datas: []&Data
}
```
Tuple expression model.

---

```jule
struct BuiltinOutCallExpr {
    Expr:  Expr
}
```
Expression model for built-in out function calls.

---

```jule
struct BuiltinOutlnCallExpr {
    Expr:  Expr
}
```
Expression model for built-in outln function calls.

```jule
struct BuiltinNewCallExpr {
    Type: &Type
    Init: Expr
}
```
Expression model for built-in new function calls.

---

```jule
struct BuiltinPanicCallExpr {
    Token: &token::Token
    Expr:  Expr
}
```
Expression model for built-in panic function calls.

---

```jule
struct BuiltinMakeCallExpr {
    Type: &Type
    Size: Expr
}
```
Expression model for built-in make function calls.

---

```jule
struct BuiltinAppendCallExpr {
    Dest:     Expr
    Elements: Expr
}
```
Expression model for built-in append function calls.

---

```jule
struct BuiltinLenCallExpr {
    Expr: &Data
}
```
Expression Model: for built-in len function calls.

---

```jule
struct BuiltinCapCallExpr {
    Expr: &Data
}
```
Expression Model: for built-in cap function calls.

---

```jule
struct BuiltinDeleteCallExpr {
    Dest: &Data
    Key:  &Data
}
```
Expression Model: for built-in delete function calls.

---

```jule
struct SizeofExpr {
    Expr:  Expr
}
```
Expression model for sizeof expressions.\
For exmaple, in C++: `sizeof(int)`

---

```jule
struct AlignofExpr {
    Expr:  Expr
}
```
Expression model for alignof expressions.\
For exmaple, in C++: `alignof(int)`

---

```jule
struct StrConstructorCallExpr {
    Expr:  Expr
}
```
Expression model for constructor call of str type.\
For exmaple: `str(myExpr)`

---

```jule
struct RuneExpr {
    Code: rune
}
```
Rune literal expression model.
For exmaple: `'a'`

---

```jule
struct BackendEmitExpr {
    Code: str
}
```
Expression model for inline code emit to backend.

---

```jule
struct FreeExpr {
    Expr: Expr
}
```
Expression model for free calls.\
Function provided by: `std/mem`

---

```jule
struct ChanRecv {
	Token: &token::Token
	Expr:  &Data
}
```
Expression model: for channel receive.

---

```jule
struct ChanSend {
	Token: &token::Token
	Chan:  &Data
	Data:  &Data
}
```
Expression mode: for channel send.

---

```jule
struct BuiltinCloseCallExpr {
	Token: &token::Token
	Chan:  &Data
}
```
Expression Model: for built-in close function calls.

---

```jule
struct RetType {
    TypeSym: &TypeSym
    Idents:  []&token::Token
    Named:   bool // Whether any return type uses name.
}
```
Return type.

---

```jule
struct Param {
    Token:     &token::Token
    Mutable:   bool
    Variadic:  bool
    Reference: bool
    TypeSym:   &TypeSym
    Ident:     str
}
```
Parameter.

**Methods:**

`fn IsSelf(self): bool`\
Reports whether parameter is self (receiver) parameter.

`fn IsRef(self): bool`\
Reports whether self (receiver) parameter is reference. 

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
    Directives:  []&ast::Directive
    Scope:       &ast::ScopeTree
    Generics:    []&ast::Generic
    Result:      &RetType
    Params:      []&Param
    Owner:       &Struct

    // Function instances for each unique type combination of function call.
    // Nil if function is never used.
    Instances: []&FuncIns
}
```
Function.

**Methods:**

`fn IsVoid(self): bool`\
Reports whether return type is void.

`fn IsMethod(self): bool`\
Reports whether function is method.

`fn IsEntryPoint(self): bool`\
Reports whether function is entry point.

`fn IsAnon(self): bool`\
Reports whether function is anonymous funuction.

`fn AnyVar(self): bool`\
Reports whether function has return variable(s).

---

```jule
struct ParamIns {
    Decl: &Param
    Type: &Type
}
```
Parameter instance.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct FuncIns {
    Owner:    &StructIns
    Decl:     &Func
    Generics: []&InsGeneric
    Params:   []&ParamIns
    Result:   &Type
    Scope:    &Scope
    Refers:   &ReferenceStack
    Anon:     bool
}
```
Function instance. 
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn Types(mut self): []&Type`\
Returns all types of result.\
Returns nil if result is nil.\
Returns mutable slice if returns internal slice.

`fn IsBuiltin(self): bool`\
Reports whether instance is built-in.

`fn IsAnon(self): bool`\
Reports whether instance is anonymous function.

`fn GetKindStr(self, ident: bool): str` \
Returns kind string of function instance.
Appends identifier to kind of this instance.
Does not appends identifier of this instance to kind if self.decl is nil.

`fn EqualFunc(&self, &f: &FuncIns): bool`\
Reports whether functions are equal.

`fn Same(self, f: &FuncIns): bool`\
Reports whether instances are same. Returns true if declarations and generics are same.

---

```jule
struct Impl {
    Base:    &TypeDecl
    Dest:    &TypeDecl
    Methods: []&Func
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

```jule
struct ImportInfo {
    // Declaration.
	Decl: &ast::UseDecl

	// Absolute path.
	Path: str

	// Use declaration path string.
	// Quotes are not included.
	LinkPath: str

	// Package alias identifier.
	Alias: str

	// True if imported with Importer.GetImport function.
	Duplicate: bool

	// Is binded use declaration.
	Binded: bool

	// Is standard library package.
	Std: bool

	// Nil if package is cpp header.
	Package: &Package

	// Module identity.
	ModId: int
}
```
Import information.\
Represents imported package by use declaration. 
::: info
**Implemented Traits**
- `Lookup`
:::

---

```jule
struct Package {
    Files: []&SymTab
}
```
Package.
::: info
**Implemented Traits**
- `Lookup`
:::

---

```jule
struct Scope {
    Parent:   &Scope
    Unsafety: bool
    Deferred: bool
    Stmts:    []Stmt

    // Data of the child scope starting from the root scope.
    // For the root scope, counting starts from 0. So the root scope will be 0.
    // It increases by one for each child scope.
    ChildIndex: int

    // If the scope is a child scope,
    // it contains the data of the statement in which it was appear.
    StmtIndex: int
}
```
Scope.

---

```jule
struct If {
    Expr:  Expr
    Scope: &Scope
}
```
Cain conditional node.

---

```jule
struct Else {
    Scope: &Scope
}
```
Default scope of conditional chain.

---

```jule
struct Conditional {
    Elifs:   []&If
    Default: &Else
}
```
Conditional chain.

---

```jule
struct InfIter {
    Scope: &Scope
}
```
Infinity iteration.

---

```jule
struct WhileIter {
    Expr:  Expr
    Next:  Stmt
    Scope: &Scope
}
```
While iteration. 

**Methods:**

`fn IsWhileNext(self): bool`\
Reports whether iteration is while-next. 

---

```jule
struct RangeIter {
    Scope:     &Scope
    Expr:      &Data
    ExprToken: &token::Token
    KeyA:      &Var
    KeyB:      &Var
}
```
Range iteration.

---

```jule
struct Continue {
    It: uintptr
}
```
Continue statement.

---

```jule
struct Break {
    It:     uintptr
    Match:  uintptr
    Select: uintptr
}
```
Break statement.

---

```jule
struct Label {
    Ident: str
    Scope: &Scope // Owner scope.
    Index: int    // Index of statement.
}
```

---

```jule
struct GotoSt {
    Ident: str
    Token: &token::Token
    Label: &Label
    Scope: &Scope // Owner scope.
    Index: int    // Index of statement.
}
```

---

```jule
struct Postfix {
    Expr: Expr
    Op:   str
}
```
Postfix assignment.

---

```jule
struct Assign {
    Left:  &OperandExpr
    Right: &OperandExpr
    Op:    &token::Token
}
```
Assignment.

---

```jule
struct MultiAssign {
    Decls: []&Var
    Left:  []&Data
    Right: Expr
    Op:    &token::Token
}
```
Multi-declarative assignment.

---

```jule
struct Match {
    Scope:     &Scope // Owner scope.
    Expr:      &Data
    TypeMatch: bool
    Comptime:  bool
    Cases:     []&Case
    Default:   &Case
}
```
Match-Case.

**Methods:**

`fn IsGenericTypeMatch(self): bool`\
Reports whether match is type-match for generic type.

---

```jule
struct Select {
	Scope:   &Scope // Owner scope. See developer reference (10).
	Cases:   []&Case
	Default: &Case
}
```
Select-Case.

---

```jule
struct Case {
    Owner: CaseOwner
    Scope: &Scope
    Exprs: []&Data
    Next:  &Case
}
```

**Methods:**

`fn IsDefault(self): bool`\
Reports whether case is default. 

---

```jule
struct Fall {
    DestCase: uintptr
}
```

---

```jule
struct Ret {
    Func: &FuncIns
    Vars: []&Var
    Expr: Expr
}
```
Return statement. 

---

```jule
struct ReferenceStack {}
```
Stack for symbol references.\
It used by Sema to store necessary references.

List of necessary references;
- `&FuncIns`
- `&StructIns`
- `&Trait`
- `&Var` -> Only global ones.


**Methods:**

`fn Len(self): int`\
Returns count of references.

`fn At(mut self, i: int): any`\
Returns reference by index.

`fn Push(mut self, mut ref: any)`\
Push new reference to stack.

`fn Remove(mut self, i: int)`\
Removes reference by index.

`fn Exist[T](self, t: &T): bool`\
Reports whether reference is exist.

---

```jule
struct Field {
    Owner:   &Struct
    Token:   &token::Token
    Public:  bool
    Mutable: bool
    Ident:   str
    TypeSym: &TypeSym
    Default: &ast::Expr
}
```

---

```jule
struct Struct {
    Depends:    []&Struct
    Uses:       []&Struct
    Token:      &token::Token::Token
    Ident:      str
    Fields:     []&Field
    Methods:    []&Func
    Binded:     bool
    Directives: []&ast::Directive
    Generics:   []&ast::Generic
    Implements: []&Trait
    Instances:  []&StructIns
}
```
Structure.

**Methods:**

`fn FindMethod(mut self, ident: str): &Func`\
Returns method by identifier.\
Returns nil if not exist any method in this identifier.

`fn FindStatic(mut self, ident: str): &Var`\
Returns static field by identifier.
Returns nil if not exist any static field in this identifier.

`fn FindField(mut self, ident: str): &Field`\
Returns field by identifier.\
Returns nil if not exist any field in this identifier.

`fn IsImplements(self, t: &Trait): bool`\
Reports whether structure implements given trait.

`fn IsDerives(self, ident: str): bool`\
Reports whether structure is derives given derive.

`fn IsUses(self, s: &Struct): bool`\
Reports whether structure is uses given structure. 

`fn HasRefAccessible(self): bool`\
Reports whether structure has only reference-type-accessible defines.

---

```jule
struct FieldIns {
    Owner:   &StructIns
    Decl:    &Field
    Type:    &Type
    Default: &Data
}
```
Field instance. 

---

```jule
struct StructIns {
    Checked:    bool
    Decl:       &Struct
    Generics:   []&InsGeneric
    Fields:     []&FieldIns
    Statics:    []&Var
    Methods:    []&Func
    Mutable:    bool
    Comparable: bool
    Refers:     &ReferenceStack
}
```
Structure instance.
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn FindMethod(mut self, ident: str): &Func`\
Returns method by identifier.\
Returns nil if not exist any method in this identifier.

`fn FindField(mut self, ident: str): &FieldIns`\
Returns field by identifier.\
Returns nil if not exist any field in this identifier. 

`fn FindStatic(mut self, ident: str): &Var`\
Returns static field by identifier.
Returns nil if not exist any static field in this identifier.

`fn Same(self, s: &StructIns): bool`\
Reports whether instances are same.\
Returns true if declarations and generics are same.

---

```jule
struct Pass {
    Token: &token::Token::Token
    Text:  str
}
```
Directive pass. 

---

```jule
struct SymTab {
    File:         &token::Token::Fileset         // Owner fileset of this symbol table.
    Passes:       []Pass        // All passed flags with jule:pass directive.
    Imports:      []&ImportInfo // Imported packages.
    Vars:         []&Var        // Variables.
    TypeAliases:  []&TypeAlias  // Type aliases.
    Structs:      []&Struct     // Structures.
    Funcs:        []&Func       // Functions.
    Traits:       []&Trait      // Traits.
    Enums:        []&Enum       // Enums.
    TypeEnums:    []&TypeEnum   // Type enums.
    Impls:        []&Impl       // Implementations.
}
```
Structure instance.
::: info
**Implemented Traits**
- `Lookup`
:::

---

```jule
struct Trait {
    Token:       &token::Token
    Ident:       str
    Public:      bool
    Mutable:     bool
    Methods:     []&Func
    Inherits:    []&TypeSym
    Implemented: []&Struct
}
```
Trait.
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn IsBuiltin(self): bool`\
Returns whether Trait is built-in

`fn FindMethod(mut self, ident: str): &Func`\
Returns method by identifier.\
Returns nil if not exist any method in this identifier. 

---

```jule
struct InsGeneric {
    Type:       &Type
    Constraint: []&Type
}
```
Generic type for instance types.

---

```jule
struct TypeAlias {
    Scope:    &ast::ScopeTree
    Public:   bool
    Binded:   bool
    Used:     bool
    Generic:  bool
    Token:    &token::Token
    Ident:    str
    TypeSym:  &TypeSym
    Refers:   []any
    Generics: []&TypeAlias
}
```
Type alias.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Type {
    CppIdent:  str
    Generic:   bool
    Variadic:  bool
    Kind:      Kind
}
```
Evaluated type declaration.
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn Binded(self): bool`\
Reports whether type is binded kind.

`fn IsNil(self): bool`\
Reports whether kind is nil.

`fn Void(self): bool`\
Reports whether kind is void.

`fn Comparable(self): bool`\
Reports whether kind is comparable.

`fn Mutable(self): bool`\
Reports whether kind is mutable.

`fn Ordered(self): bool`\
Reports whether kind supports ordered constrait.

`fn NilCompatible(self): bool`\
Reports whether kind is nil compatible.

`fn GC(self): bool`\
Reports whether kind performs garbage collection.

`fn Variadicable(self): bool`\
Reports whether kind is variadicable.

`fn Prim(self): &Prim`\
Returns primitive type if kind is primitive type, nil if not.

`fn Chan(mut self): &Chan`\
Returns channel type if actual kind is channel, nil if not.

`fn Sptr(self): &Sptr`\
Returns reference type if kind is smart pointer, nil if not.

`fn Ptr(self): &Ptr`\
Returns pointer type if kind is pointer, nil if not.

`fn Enum(self): &Enum`\
Returns enum type if kind is enum, nil if not.

`fn TypeEnum(self): &TypeEnum`\
Returns type enum if kind is type enum, nil if not.

`fn Array(self): &Array`\
Returns array type if kind is array, nil if not.

`fn Slice(self): &Slice`\
Returns slice type if kind is slice, nil if not.

`fn Func(self): &FuncIns`\
Returns function type if kind is function, nil if not.

`fn Struct(self): &Struct`\
Returns struct type if kind is structure, nil if not.

`fn Trait(self): &Trait`\
Returns trait type if kind is trait, nil if not.

`fn Map(self): &Map`\
Returns map type if kind is map, nil if not.

`fn Tuple(self): &Tuple`\
Returns tuple type if kind is tuple, nil if not. 

---

```jule
struct TypeSym {
    Decl: &TypeDecl
    Type: &TypeDecl
}
```
Type. 

---

```jule
struct Prim {
    Kind: str
}
```
Primitive type. 
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn IsConstraint(self): bool`\
Reports whether type is built-in constraint.

`fn IsI8(self): bool`\
Reports whether type is primitive i8.

`fn IsI16(self): bool`\
Reports whether type is primitive i16.

`fn IsI32(self): bool`\
Reports whether type is primitive i32.

`fn IsI64(self): bool`\
Reports whether type is primitive i64.

`fn IsU8(self): bool`\
Reports whether type is primitive u8.

`fn IsU16(self): bool`\
Reports whether type is primitive u16.

`fn IsU32(self): bool`\
Reports whether type is primitive u32.

`fn IsU64(self): bool`\
Reports whether type is primitive u64.

`fn IsF32(self): bool`\
Reports whether type is primitive f32.

`fn IsF64(self): bool`\
Reports whether type is primitive f64.

`fn IsInt(self): bool`\
Reports whether type is primitive int.

`fn IsUint(self): bool`\
Reports whether type is primitive uint.

`fn IsUintptr(self): bool`\
Reports whether type is primitive uintptr.

`fn IsBool(self): bool`\
Reports whether type is primitive bool.

`fn IsStr(self): bool`\
Reports whether type is primitive str.

`fn IsAny(self): bool`\
Reports whether type is primitive any. 

---

```jule
struct Chan {
    Recv: bool
    Send: bool
    Elem: &Type
}
```
Channel type.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Slice {
    Elem: &Type
}
```
Slice type.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Tuple {
    Types: []&Type
}
```
Tuple type.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Map {
    Key: &Type
    Val: &Type
}
```
Map type.
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Array {
    Elem: &Type
}
```
Array type. 
::: info
**Implemented Traits**
- `Kind`
:::

---

```jule
struct Ptr {
    Elem: &Type
}
```
Pointer type. 
::: info
**Implemented Traits**
- `Kind`
:::

**Methods:**

`fn IsUnsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe). 

---

```jule
struct Var {
    Scope:         &Scope
    Token:         &token::Token
    Ident:         str
    Binded:        bool
    Constant:      bool
    Mutable:       bool
    Public:        bool
    Used:          bool
    Statically:    bool
    Reference:     bool
    Checked:       bool
    TypeSym:       &TypeSym
    Value:         &Value
    Refers:        &ReferenceStack
    Directives:    []&ast::Directive

    // The -2 means this variable is not one of the return variables.
    // The -1 means this variable is just the single return variable one.
    // The 0..n means this variable is the nth variable of the return variables.
    RetOrder: int = -2

    // This variable depended to these variables for initialization expression.
    // Nil if not global variable.
    Depends: []&Var
}
```
Variable.

**Methods:**

`fn IsInitialized(self): bool`\
Reports whether variable is initialized explicitly.

`fn IsTypeInferred(self): bool`\
Reports whether variable is type inferred.

---

```jule
struct FuncPattern {}
```
Pattern checker for functions and methods.

**Methods:**

`static fn Str(f: &Func): bool`\
Reports whether function is the reserved Str function.

## Traits
```jule
trait Lookup {
    // Select imported package.
    // Returns nil if did not found any match.
    fn SelectPackage(mut self, selector: fn(&ImportInfo): bool): &ImportInfo

    // Find variable by identifier and binded state.
    // Returns nil if did not found any match.
    fn FindVar(mut self, ident: str, binded: bool): &Var

    // Find type alias by identifier and binded state.
    // Returns nil if did not found any match.
    fn FindTypeAlias(mut self, ident: str, binded: bool): &TypeAlias

    // Find structure by identifier and binded state.
    // Returns nil if did not found any match.
    fn FindStruct(mut self, ident: str, binded: bool): &Struct

    // Find function by identifier and binded state.
    // Returns nil if did not found any match.
    fn FindFunc(mut self, ident: str, binded: bool): &Func

    // Find trait by identifier.
    // Returns nil if did not found any match.
    fn FindTrait(mut self, ident: str): &Trait

    // Find enum by identifier.
    // Returns nil if did not found any match.
    fn FindEnum(mut self, ident: str): &Enum

    // Find type enum by identifier.
    // Returns nil if did not found any match.
    fn FindTypeEnum(mut self, ident: str): &TypeEnum
}
```
Lookup.

---

```jule
trait Importer {
    // Set current module path.
    // Path should be valid directory.
    // Set to empty string if module is not exist.
    fn SetModPath(mut self, path: str)
    // Returns current module path.
    // Path should be valid directory.
    // Returns empty string if module is not exist.
    fn GetModPath(self): str
    // Returns module path by identity.
    fn ModById(self, id: int): str
    // Returns &ImportInfo by path.
    // This function accepted as returns already imported and checked package.
    // If returns not-nil value, will be used instead of ImportPackage
    // if possible and package content is not checked by Sema.
    fn GetImport(mut self, path: str): &ImportInfo
    // Path is the directory path of package to import.
    // Should return abstract syntax tree of package files.
    // Logs accepts as error.
    // Updated module to package's module if exist when updateMod is true.
    fn ImportPackage(mut self, path: str, updateMod: bool): ([]&AST, []Log)
    // Invoked after the package is imported.
    // Sets module identitity of imported package to current module.
    fn imported(mut self, mut &ImportInfo)
}
```
Importer.\
Used by semantic analyzer for import use declarations. 

---

```jule
trait Kind {
    fn Str(self): str
    fn Equal(&self, other: &Type): bool
}
```
Kind of type declaration.

## Enums

```jule
enum Flag
```
Flags for semantic analysis.

**Fields:**
- `Default`: Default semantic analysis of Jule.
- `Shadowing`: Default + enable shadowing.

---

```jule
enum Stmt: type
```

Statement type.

**Fields:**
- `&Scope`
- `&Var`
- `&Data`
- `&Conditional`
- `&InfIter`
- `&WhileIter`
- `&RangeIter`
- `&Continue`
- `&Label`
- `&Goto`
- `&Postfix`
- `&Assign`
- `&MultiAssign`
- `&Match`
- `&Fall`
- `&Break`
- `&Ret`
- `&Select`

---

```jule
enum Expr: type
```
Expression model.

**Fields:**
- `&Type`
- `&constant::Const`
- `&Var`
- `&FuncIns`
- `&StructIns`
- `&OperandExpr`
- `&BinaryExpr`
- `&UnaryExpr`
- `&StructArgExpr`
- `&StructLitExpr`
- `&AllocStructLitExpr`
- `&CastingExpr`
- `&FuncCallExpr`
- `&SliceExpr`
- `&IndexingExpr`
- `&AnonFuncExpr`
- `&KeyValPairExpr`
- `&MapExpr`
- `&SlicingExpr`
- `&TraitSubIdentExpr`
- `&StructSubIdentExpr`
- `&StructStaticIdentExpr`
- `&ArrayExpr`
- `&TupleExpr`
- `&BuiltinOutCallExpr`
- `&BuiltinOutlnCallExpr`
- `&BuiltinNewCallExpr`
- `&BuiltinPanicCallExpr`
- `&BuiltinMakeCallExpr`
- `&BuiltinAppendCallExpr`
- `&BuiltinCopyCallExpr`
- `&BuiltinErrorCallExpr`
- `&SizeofExpr`
- `&AlignofExpr`
- `&RuneExpr`
- `&IntegratedToStrExpr`
- `&BackendEmitExpr`
- `&FreeExpr`
- `&ChanRecv`
- `&ChanSend`
- `BuiltinCloseCallExpr`

---

```jule
enum CaseOwner: type
```
Valid owner types for Case.

**Fields:**
- `&Match`
- `&Select`