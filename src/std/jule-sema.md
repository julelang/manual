# std::jule::sema

## Functions
```jule
fn AnalyzePackage(mut files: []&Ast, mut importer: Importer, flags: SemaFlag): (&Package, []Log)
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
fn AnalyzeFile(mut f: &Ast, mut importer: Importer, flags: SemaFlag): (&SymbolTable, []Log)
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
    Token: &Token
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
    Token:  &Token
    Public: bool
    Ident:  str
    Kind:   &TypeSymbol
    Items:  []&EnumItem
}
```
Enum.
::: info
**Implemented Traits**\
- Kind
:::

**Methods:**

`fn FindItem(mut self, ident: str): &EnumItem`\
Returns item by identifier.\
Returns nil reference if not exist any item in this identifier. 

---

```jule
struct TypeEnumItem {
    Token: &Token
    Ident: str
    Kind:  &TypeSymbol
}
```
TypeEnum item.

---

```jule
struct TypeEnum {
    Token:  &Token
    Public: bool
    Ident:  str
    Items:  []&TypeEnumItem
}
```
TypeEnum.
::: info
**Implemented Traits**\
- Kind
:::

**Methods:**

`fn FindItem(mut self, ident: str): &TypeEnumItem`\
Returns item by identifier.\
Returns nil reference if not exist any item in this identifier. 

---

```jule
struct Data {
    Kind:      &TypeKind
    CastKind:  &TypeKind // This expression should be cast to this kind.
    Mutable:   bool
    Reference: bool
    Lvalue:    bool
    IsRune:    bool
    Model:     ExprModel

    // True if kind is declaration such as:
    //  - &Enum
    //  - &Struct
    //  - int type
    //  - bool type
    Decl: bool

    // Constant expression data.
    Constant: &Const
}
```
Value data.
::: info
**Implemented Traits**\
- Kind
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
    Expr: &Expr
    Data: &Data
}
```
Value. 

---

```jule
struct OperandExprModel {
    Kind:  &TypeKind
    Model: ExprModel
}
```
Operand expression model.

---

```jule
struct BinaryExprModel {
    Left:  &OperandExprModel
    Right: &OperandExprModel
    Op:    &Token
}
```
Binary operation expression model. 

---

```jule
struct UnaryExprModel {
    Expr:  ExprModel
    Op:    &Token
}
```
Unary operation expression model. 

---

```jule
struct StructArgExprModel {
    Field: &FieldIns
    Expr:  ExprModel
}
```
Structure field argument expression model for constructors.\
For example: `&MyStruct{10, false, "-"}`

---

```jule
struct StructLitExprModel {
    Token: &Token
    Strct: &StructIns
    Args:  []&StructArgExprModel
}
```
Structure literal. 

---

```jule
struct AllocStructLitExprModel {
    Lit: &StructLitExprModel
}
```
Heap allocated structure litral expression.\
For example: `&MyStruct{}`

---

```jule
struct CastingExprModel {
    Token:    &Token
    Expr:     &Data
    Kind:     &TypeKind
    ExprKind: &TypeKind
}
```
Casting expression model. For example: `(int)(myFloat)`

---

```jule
struct FnCallExprModel {
    Token:    &Token
    Func:     &FnIns
    IsCo:     bool
    Expr:     ExprModel
    Args:     []ExprModel
    Except:   &Scope
    Assigned: bool
}
```
Function call expression model. 

---

```jule
struct BuiltinErrorCallExprModel {
    Func: &FnIns
    Err:  &Data
}
```
Expression model for built-in error function calls.

---

```jule
struct SliceExprModel {
    ElemKind: &TypeKind
    Elems:    []ExprModel
}
```
Slice expression model.\
For example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

---

```jule
struct IndexingExprModel {
    Token: &Token
    Expr:  &Data
    Index: &Data
}
```
Indexing expression model.\
For example: `mySlice[myIndex]`

---

```jule
struct AnonFnExprModel {
    Func:   &FnIns
    Global: bool
}
```
Anonymous function expression model. 

---

```jule
struct KeyValPairExprModel {
    Key: ExprModel
    Val: ExprModel
}
```
Key-value expression pair model.

---

```jule
struct MapExprModel {
    KeyKind: &TypeKind
    ValKind: &TypeKind
    Entries: []&KeyValPairExprModel
}
```
Map expression model.
For example: `{0: false, 1: true}`

---

```jule
struct SlicingExprModel {
    Token: &Token
    Expr:  ExprModel
    Left:  ExprModel
    Right: ExprModel
}
```
Slicing expression model.
For example: `mySlice[2:len(mySlice)-5]`

---

```jule
struct TraitSubIdentExprModel {
    Token:  &Token
    Expr:   ExprModel
    Method: &Fn
    Trt:    &Trait
}
```
Trait sub-ident expression model.
For example: `myTrait.mySubIdent`

---

```jule
struct StructSubIdentExprModel {
    Token:  &Token
    Expr:   &Data
    Method: &FnIns
    Field:  &FieldIns
    Owner:  &StructIns
}
```
Structure sub-ident expression model.
For example: `myStruct.mySubIdent`

---

```jule
struct ArrayExprModel {
    Kind:  &Arr
    Elems: []ExprModel
}
```
Array expression model.  If array filled, elems field holds 2 data. First data is expression, second is nil, kind of mark to that array filled.

---

```jule
struct TupleExprModel {
    Datas: []&Data
}
```
Tuple expression model.

---

```jule
struct BuiltinOutCallExprModel {
    Expr:  ExprModel
}
```
Expression model for built-in out function calls.

---

```jule
struct BuiltinOutlnCallExprModel {
    Expr:  ExprModel
}
```
Expression model for built-in outln function calls.

```jule
struct BuiltinNewExprModel {
    Kind: &TypeKind
    Init: ExprModel
}
```
Expression model for built-in new function calls.

---

```jule
struct BuiltinPanicCallExprModel {
    Token: &Token
    Expr:  ExprModel
}
```
Expression model for built-in panic function calls.

---

```jule
struct BuiltinAssertCallExprModel {
    Token: &Token
    Expr:  ExprModel
    Log:   str
}
```
Expression model for built-in assert function calls.

---

```jule
struct BuiltinMakeCallExprModel {
    Kind: &TypeKind
    Size: ExprModel
}
```
Expression model for built-in make function calls.

---

```jule
struct BuiltinAppendCallExprModel {
    Dest:     ExprModel
    Elements: ExprModel
}
```
Expression model for built-in append function calls.

---

```jule
struct BuiltinLenCallExprModel {
    Expr: &Data
}
```
Expression Model: for built-in len function calls.

---

```jule
struct BuiltinCapCallExprModel {
    Expr: &Data
}
```
Expression Model: for built-in cap function calls.

---

```jule
struct BuiltinDeleteCallExprModel {
    Dest: &Data
    Key:  &Data
}
```
Expression Model: for built-in delete function calls.

---

```jule
struct SizeofExprModel {
    Expr:  ExprModel
}
```
Expression model for sizeof expressions.\
For exmaple, in C++: `sizeof(int)`

---

```jule
struct AlignofExprModel {
    Expr:  ExprModel
}
```
Expression model for alignof expressions.\
For exmaple, in C++: `alignof(int)`

---

```jule
struct StrConstructorCallExprModel {
    Expr:  ExprModel
}
```
Expression model for constructor call of str type.\
For exmaple: `str(myExpr)`

---

```jule
struct RuneExprModel {
    Code: rune
}
```
Rune literal expression model.
For exmaple: `'a'`

---

```jule
struct IntegratedToStrExprModel {
    Pexpr: ExprModel
}
```
Expression model for ToStr function of std::jule::integrated library.

---

```jule
struct BackendEmitExprModel {
    Code: str
}
```
Expression model for inline code emit to backend.

---

```jule
struct FreeExprModel {
    Expr: ExprModel
}
```
Expression model for free calls.\
Function provided by: `std::mem`

---

```jule
struct RetType {
    Kind:   &TypeSymbol
    Idents: []&Token
}
```
Return type.

---

```jule
struct Param {
    Token:     &Token
    Mutable:   bool
    Variadic:  bool
    Reference: bool
    Kind:      &TypeSymbol
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
struct Fn {
    Token:       &Token
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
    Result:      &RetType
    Params:      []&Param
    Owner:       &Struct

    // Function instances for each unique type combination of function call.
    // Nil if function is never used.
    Instances: []&FnIns
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
    Kind: &TypeKind
}
```
Parameter instance.
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct FnIns {
    Owner:    &StructIns
    Decl:     &Fn
    Generics: []&InsGeneric
    Params:   []&ParamIns
    Result:   &TypeKind
    Scope:    &Scope
    Refers:   &ReferenceStack
    Anon:     bool
}
```
Function instance. 
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn Types(mut self): []&TypeKind`\
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
Does not appends identifier of this instance to kind if self.decl is nil reference.

`fn Same(self, f: &FnIns): bool`\
Reports whether instances are same. Returns true if declarations and generics are same.

---

```jule
struct Impl {
    Base:    &TypeDecl
    Dest:    &TypeDecl
    Methods: []&Fn
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
    // Use declaration token.
    Token: &Token

    // Absolute path.
    Path: str

    // Use declaration path string.
    LinkPath: str

    // Package identifier (aka package name).
    // Empty if package is cpp header.
    Ident: str

    // Package alias identifier.
    Alias: str

    // True if imported with Importer.GetImport function.
    Duplicate: bool

    // Is binded use declaration.
    Binded: bool

    // Is standard library package.
    Std: bool

    // Is imported all defines implicitly.
    ImportAll: bool

    // Identifiers of selected definition.
    Selected: []&Token

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
- Lookup
:::

---

```jule
struct Package {
    Files: []&SymbolTable
}
```
Package.
::: info
**Implemented Traits**
- Lookup
:::

---

```jule
struct Scope {
    Parent:   &Scope
    Unsafety: bool
    Deferred: bool
    Stmts:    []Stmt
}
```
Scope.

---

```jule
struct If {
    Expr:  ExprModel
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
    Expr:  ExprModel
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
    Expr:  ExprModel
    Scope: &Scope
    KeyA:  &Var
    KeyB:  &Var
}
```
Range iteration.

---

```jule
struct Contst {
    It: uintptr
}
```
Continue statement.

---

```jule
struct Breakst {
    It:   uintptr
    Mtch: uintptr
}
```
Break statement.

---

```jule
struct Label {
    Ident: str
}
```

---

```jule
struct GotoSt {
    Ident: str
    Label: &Label
}
```

---

```jule
struct Postfix {
    Expr: ExprModel
    Op:   str
}
```
Postfix assignment.

---

```jule
struct Assign {
    Left:  &OperandExprModel
    Right: &OperandExprModel
    Op:    &Token
}
```
Assignment.

---

```jule
struct MultiAssign {
    Left:  []&Data
    Right: ExprModel
}
```
Multi-declarative assignment.

---

```jule
struct Match {
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
struct Case {
    Owner: &Match
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
struct FallSt {
    DestCase: uintptr
}
```

---

```jule
struct RetSt {
    Func: &FnIns
    Vars: []&Var
    Expr: ExprModel
}
```
Return statement. 

---

```jule
struct Recover {
    Handler:     &FnIns
    HandlerExpr: ExprModel
    Scope:       &Scope
    ScopeOwner:  &FnIns
}
```
Built-in recover function call statement.

---

```jule
struct ReferenceStack {}
```
Stack for symbol references.\
It used by Sema to store necessary references.

List of necessary references;
- `&FnIns`
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
    Token:   &Token
    Public:  bool
    Mutable: bool
    Ident:   str
    Kind:    &TypeSymbol
    Default: &Expr
}
```

---

```jule
struct Operators {
    Eq:            &FnIns
    Gt:            &FnIns
    GtEq:          &FnIns
    Lt:            &FnIns
    LtEq:          &FnIns
    Shl:           &FnIns
    Shr:           &FnIns
    Add:           &FnIns
    Sub:           &FnIns
    Div:           &FnIns
    Mul:           &FnIns
    Mod:           &FnIns
    BitAnd:        &FnIns
    BitOr:         &FnIns
    BitXor:        &FnIns
    Neg:           &FnIns
    Pos:           &FnIns
    BitNot:        &FnIns
    AddAssign:     &FnIns
    SubAssign:     &FnIns
    DivAssign:     &FnIns
    MulAssign:     &FnIns
    ModAssign:     &FnIns
    ShlAssign:     &FnIns
    ShrAssign:     &FnIns
    BitOrAssign:   &FnIns
    BitAndAssign:  &FnIns
    BitXorAssign:  &FnIns
}
```
Overloaded operators for instance.
Patterns are checked.

---

```jule
struct Struct {
    Depends:    []&Struct
    Uses:       []&Struct
    Token:      &Token
    Ident:      str
    Fields:     []&Field
    Methods:    []&Fn
    Binded:     bool
    Directives: []&Directive
    Generics:   []&GenericDecl
    Implements: []&Trait
    Instances:  []&StructIns
}
```
Structure.

**Methods:**

`fn FindMethod(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier.

`fn FindStatic(mut self, ident: str): &Var`\
Returns static field by identifier.
Returns nil reference if not exist any static field in this identifier.

`fn FindField(mut self, ident: str): &Field`\
Returns field by identifier.\
Returns nil reference if not exist any field in this identifier.

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
    Decl:    &Field
    Kind:    &TypeKind
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
    Methods:    []&Fn
    Mutable:    bool
    Comparable: bool
    Refers:     &ReferenceStack
    Operators:  Operators
}
```
Structure instance.
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn FindMethod(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier.

`fn FindField(mut self, ident: str): &FieldIns`\
Returns field by identifier.\
Returns nil reference if not exist any field in this identifier. 

`fn FindStatic(mut self, ident: str): &Var`\
Returns static field by identifier.
Returns nil reference if not exist any static field in this identifier.

`fn Same(self, s: &StructIns): bool`\
Reports whether instances are same.\
Returns true if declarations and generics are same.

---

```jule
struct Pass {
    Token: &Token
    Text:  str
}
```
Directive pass. 

---

```jule
struct SymbolTable {
    File:         &File         // Owner fileset of this symbol table.
    Passes:       []Pass        // All passed flags with jule:pass directive.
    Imports:      []&ImportInfo // Imported packages.
    Vars:         []&Var        // Variables.
    TypeAliases:  []&TypeAlias  // Type aliases.
    Structs:      []&Struct     // Structures.
    Funcs:        []&Fn         // Functions.
    Traits:       []&Trait      // Traits.
    Enums:        []&Enum       // Enums.
    TypeEnums:    []&TypeEnum   // Type enums.
    Impls:        []&Impl       // Implementations.
}
```
Structure instance.
::: info
**Implemented Traits**
- Lookup
:::

---

```jule
struct Trait {
    Token:       &Token
    Ident:       str
    Public:      bool
    Mutable:     bool
    Methods:     []&Fn
    Inherits:    []&TypeSymbol
    Implemented: []&Struct
}
```
Trait.
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn IsBuiltin(self): bool`\
Returns whether Trait is built-in

`fn FindMethod(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier. 

---

```jule
struct InsGeneric {
    Kind:       &TypeKind
    Constraint: []&TypeKind
}
```
Generic type for instance types.

---

```jule
struct TypeAlias {
    Scope:    &ScopeTree
    Public:   bool
    Binded:   bool
    Used:     bool
    Generic:  bool
    Token:    &Token
    Ident:    str
    Kind:     &TypeSymbol
    Refers:   []any
    Generics: []&TypeAlias
}
```
Type alias.
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct TypeKind {
    CppIdent:  str
    Generic:   bool
    Variadic:  bool
    Kind:      Kind
}
```
Evaluated type declaration.
::: info
**Implemented Traits**
- Kind
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

`fn PerformsRc(self): bool`\
Reports whether kind performs reference-counting.

`fn Variadicable(self): bool`\
Reports whether kind is variadicable.

`fn Prim(self): &Prim`\
Returns primitive type if kind is primitive type, nil reference if not.

`fn Sptr(self): &Sptr`\
Returns reference type if kind is smart pointer, nil reference if not.

`fn Ptr(self): &Ptr`\
Returns pointer type if kind is pointer, nil reference if not.

`fn Enm(self): &Enum`\
Returns enum type if kind is enum, nil reference if not.

`fn Tenm(self): &TypeEnum`\
Returns type enum if kind is type enum, nil reference if not.

`fn Arr(self): &Arr`\
Returns array type if kind is array, nil reference if not.

`fn Slc(self): &Slc`\
Returns slice type if kind is slice, nil reference if not.

`fn Fnc(self): &FnIns`\
Returns function type if kind is function, nil reference if not.

`fn Strct(self): &Struct`\
Returns struct type if kind is structure, nil reference if not.

`fn Trt(self): &Trait`\
Returns trait type if kind is trait, nil reference if not.

`fn Map(self): &Map`\
Returns map type if kind is map, nil reference if not.

`fn Tup(self): &Tuple`\
Returns tuple type if kind is tuple, nil reference if not. 

---

```jule
struct TypeSymbol {
    Decl: &TypeDecl
    Kind: &TypeDecl
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
- Kind
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
struct Slc {
    Elem: &TypeKind
}
```
Slice type.
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct Tuple {
    Types: []&TypeKind
}
```
Tuple type.
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct Map {
    Key: &TypeKind
    Val: &TypeKind
}
```
Map type.
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct Arr {
    Elem: &TypeKind
}
```
Array type. 
::: info
**Implemented Traits**
- Kind
:::

---

```jule
struct Ptr {
    Elem: &TypeKind
}
```
Pointer type. 
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn IsUnsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe). 

---

```jule
struct Var {
    Scope:         &ScopeTree
    Token:         &Token
    Ident:         str
    Binded:        bool
    Constant:      bool
    Mutable:       bool
    Public:        bool
    Used:          bool
    Statically:    bool
    Reference:     bool
    Directives:    []&Directive
    Kind:          &TypeSymbol
    Value:         &Value
    Refers:        &ReferenceStack

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

`static fn Dispose(f: &Fn): bool`\
Reports whether function is the reserved Dispose function.

`static fn ToStr(f: &Fn): bool`\
Reports whether function is the reserved ToStr function.

`static fn Eq(f: &Fn): bool`\
Reports whether function is the reserved Eq function.

`static fn Gt(f: &Fn): bool`\
Reports whether function is the reserved Gt function.

`static fn GtEq(f: &Fn): bool`\
Reports whether function is the reserved GtEq function.

`static fn Lt(f: &Fn): bool`\
Reports whether function is the reserved Lt function.

`static fn LtEq(f: &Fn): bool`\
Reports whether function is the reserved LtEq function.

`static fn Shl(f: &Fn): bool`\
Reports whether function is the reserved Shl function.

`static fn Shr(f: &Fn): bool`\
Reports whether function is the reserved Shr function.

`static fn Add(f: &Fn): bool`\
Reports whether function is the reserved Add function.

`static fn Sub(f: &Fn): bool`\
Reports whether function is the reserved Sub function.

`static fn Div(f: &Fn): bool`\
Reports whether function is the reserved Div function.

`static fn Mul(f: &Fn): bool`\
Reports whether function is the reserved Mul function.

`static fn Mod(f: &Fn): bool`\
Reports whether function is the reserved Mod function.

`static fn BitAnd(f: &Fn): bool`\
Reports whether function is the reserved BitAnd function.

`static fn BitOr(f: &Fn): bool`\
Reports whether function is the reserved BitOr function.

`static fn BitXor(f: &Fn): bool`\
Reports whether function is the reserved BitXor function.

`static fn Neg(f: &Fn): bool`\
Reports whether function is the reserved Neg function.

`static fn Pos(f: &Fn): bool`\
Reports whether function is the reserved Pos function.

`static fn BitNot(f: &Fn): bool`\
Reports whether function is the reserved BitNot function.

`static fn AddAssign(f: &Fn): bool`\
Reports whether function is the reserved AddAssign function.

`static fn SubAssign(f: &Fn): bool`\
Reports whether function is the reserved SubAssign function.

`static fn DivAssign(f: &Fn): bool`\
Reports whether function is the reserved DivAssign function.

`static fn MulAssign(f: &Fn): bool`\
Reports whether function is the reserved MulAssign function.

`static fn ModAssign(f: &Fn): bool`\
Reports whether function is the reserved ModAssign function.

`static fn ShlAssign(f: &Fn): bool`\
Reports whether function is the reserved ShlAssign function.

`static fn ShrAssign(f: &Fn): bool`\
Reports whether function is the reserved ShrAssign function.

`static fn BitOrAssign(f: &Fn): bool`\
Reports whether function is the reserved BitOrAssign function.

`static fn BitAndAssign(f: &Fn): bool`\
Reports whether function is the reserved BitAndAssign function.

`static fn BitXorAssign(f: &Fn): bool`\
Reports whether function is the reserved BitXorAssign function.

## Traits
```jule
trait Lookup {
    // Select imported package.
    // Returns nil reference if did not found any match.
    fn SelectPackage(mut self, selector: fn(&ImportInfo): bool): &ImportInfo

    // Find variable by identifier and binded state.
    // Returns nil reference if did not found any match.
    fn FindVar(mut self, ident: str, binded: bool): &Var

    // Find type alias by identifier and binded state.
    // Returns nil reference if did not found any match.
    fn FindTypeAlias(mut self, ident: str, binded: bool): &TypeAlias

    // Find structure by identifier and binded state.
    // Returns nil reference if did not found any match.
    fn FindStruct(mut self, ident: str, binded: bool): &Struct

    // Find function by identifier and binded state.
    // Returns nil reference if did not found any match.
    fn FindFn(mut self, ident: str, binded: bool): &Fn

    // Find trait by identifier.
    // Returns nil reference if did not found any match.
    fn FindTrait(mut self, ident: str): &Trait

    // Find enum by identifier.
    // Returns nil reference if did not found any match.
    fn FindEnum(mut self, ident: str): &Enum

    // Find type enum by identifier.
    // Returns nil reference if did not found any match.
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
    // Updated module to package's module if exist when UpdateMod is true.
    fn ImportPackage(mut self, path: str, UpdateMod: bool): ([]&Ast, []Log)
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
    fn Equal(&self, other: &TypeKind): bool
}
```
Kind of type declaration.

## Enums

```jule
enum SemaFlag
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
- `&ContSt`
- `&Label`
- `&GotoSt`
- `&Postfix`
- `&Assign`
- `&MultiAssign`
- `&Match`
- `&FallSt`
- `&BreakSt`
- `&RetSt`

---

```jule
enum ExprModel: type
```
Expression model.

**Fields:**
- `&TypeKind`
- `&Const`
- `&Var`
- `&FnIns`
- `&StructIns`
- `&OperandExprModel`
- `&BinaryExprModel`
- `&UnaryExprModel`
- `&StructArgExprModel`
- `&StructLitExprModel`
- `&AllocStructLitExprModel`
- `&CastingExprModel`
- `&FnCallExprModel`
- `&SliceExprModel`
- `&IndexingExprModel`
- `&AnonFnExprModel`
- `&KeyValPairExprModel`
- `&MapExprModel`
- `&SlicingExprModel`
- `&TraitSubIdentExprModel`
- `&StructSubIdentExprModel`
- `&StructStaticIdentExprModel`
- `&ArrayExprModel`
- `&TupleExprModel`
- `&BuiltinOutCallExprModel`
- `&BuiltinOutlnCallExprModel`
- `&BuiltinNewCallExprModel`
- `&BuiltinPanicCallExprModel`
- `&BuiltinAssertCallExprModel`
- `&BuiltinMakeCallExprModel`
- `&BuiltinAppendCallExprModel`
- `&BuiltinCopyCallExprModel`
- `&BuiltinErrorCallExprModel`
- `&SizeofExprModel`
- `&AlignofExprModel`
- `&RuneExprModel`
- `&IntegratedToStrExprModel`
- `&BackendEmitExprModel`
- `&FreeExprModel`