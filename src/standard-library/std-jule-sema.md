# std::jule::sema

## Type Aliases
### `type ExprModel: any`
Expression model.

### `type St: any`
Statement type. 

## Functions
```
fn analyze_package(mut files: []&Ast, mut importer: Importer): (&Package, []Log)
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

```
fn analyze_file(mut f: &Ast, mut importer: Importer): (&SymbolTable, []Log)
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
```
struct EnumItem {
    token: Token
    ident: str
    value: &Value
}
```
Enum item.

**Methods:**

`fn auto_expr(self): bool`\
Reports whether item has auto expression.

---

```
struct Enum {
    token:  Token
    public: bool
    ident:  str
    kind:   &TypeSymbol
    items:  []&EnumItem
    doc:    str
}
```
Enum.
::: tip
**Implemented Traits**\
- Kind
:::

**Methods:**

`fn find_item(mut self, ident: str): &EnumItem`\
Returns item by identifier.\
Returns nil reference if not exist any item in this identifier. 

---

```
struct Data {
    kind:       &TypeKind
    cast_kind:  &TypeKind // This expression should be cast to this kind.
    mutable:    bool
    reference:  bool
    lvalue:     bool
    variadiced: bool
    is_rune:    bool
    model:      ExprModel

    // True if kind is declaration such as:
    //  - &Enum
    //  - &Struct
    //  - int type
    //  - bool type
    decl: bool

    // Constant expression data.
    constant: &Const
}
```
Value data.
::: tip
**Implemented Traits**\
- Kind
:::

**Methods:**

`fn is_nil(self): bool`\
Reports whether Data is nil literal.

`fn is_void(self): bool`\
Reports whether Data is void.

`fn is_const(self): bool`\
Reports whether Data is constant expression. 

---

```
struct Value {
    expr: &Expr
    data: &Data
}
```
Value. 

---

```
struct BinopExprModel {
    left:  ExprModel
    right: ExprModel
    op:    str
}
```
Binary operation expression model. 

---

```
struct UnaryExprModel {
    expr:  ExprModel
    op:    str
}
```
Unary operation expression model. 

---

```
struct GetRefExprModel {
    expr: ExprModel
}
```
Pointer getter expression for reference types.\
For example: `&my_reference`

---

```
struct StructArgExprModel {
    field: &FieldIns
    expr:  ExprModel
}
```
Structure field argument expression model for constructors.\
For example: `&MyStruct{10, false, "-"}`

---

```
struct StructLitExprModel {
    strct: &StructIns
    args:  []&StructArgExprModel
}
```
Structure literal. 

---

```
struct AllocStructLitExprModel {
    lit: &StructLitExprModel
}
```
Heap allocated structure litral expression.\
For example: `&MyStruct{}`

---

```
struct CastingExprModel {
    expr:      ExprModel
    kind:      &TypeKind
    expr_kind: &TypeKind
}
```
Casting expression model. For example: `(int)(my_float)`

---

```
struct FnCallExprModel {
    func:  &FnIns
    is_co: bool
    expr:  ExprModel
    args:  []ExprModel
}
```
Function call expression model. 

---

```
struct SliceExprModel {
    elem_kind: &TypeKind
    elems:     []ExprModel
}
```
Slice expression model.\
For example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

---

```
struct IndexingExprModel {
    expr:  ExprModel
    index: ExprModel
}
```
Indexing expression model.\
For example: `my_slice[my_index]`

---

```
struct AnonFnExprModel {
    func:   &FnIns
    global: bool
}
```
Anonymous function expression model. 

---

```
struct KeyValPairExprModel {
    key: ExprModel
    val: ExprModel
}
```
Key-value expression pair model.

---

```
struct MapExprModel {
    key_kind: &TypeKind
    val_kind: &TypeKind
    entries:  []&KeyValPairExprModel
}
```
Map expression model.
For example: `{0: false, 1: true}`

---

```
struct SlicingExprModel {
    expr:  ExprModel
    left:  ExprModel
    right: ExprModel
}
```
Slicing expression model.
For example: `my_slice[2:my_slice.len-5]`

---

```
struct TraitSubIdentExprModel {
    expr:  ExprModel
    ident: str
}
```
Trait sub-ident expression model.
For example: `my_trait.my_sub_ident`

---

```
struct StructSubIdentExprModel {
    expr:      ExprModel
    expr_kind: &TypeKind
    method:    &FnIns
    field:     &FieldIns
}
```
Structure sub-ident expression model.
For example: `my_struct.my_sub_ident`

---

```
struct ArrayExprModel {
    kind:  &Arr
    elems: []ExprModel
}
```
Array expression model. 

---

```
struct CommonIdentExprModel {
    ident: str
}
```
Common ident expression model.

---

```
struct CommonSubIdentExprModel {
    expr:  ExprModel
    ident: str
}
```
Common sub-ident expression model.

---

```
struct TupleExprModel {
    datas: []&Data
}
```
Tuple expression model.

---

```
struct BuiltinOutCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in out function calls.

---

```
struct BuiltinOutlnCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in outln function calls.

---

```
struct BuiltinCloneCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in clone function calls.

---

```
struct BuiltinCloneNewExprModel {
    kind: &TypeKind
    init: ExprModel
}
```
Expression model for built-in new function calls.

---

```
struct BuiltinRealCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in real function calls.

---

```
struct BuiltinDropCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in drop function calls.

---

```
struct BuiltinPanicCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in panic function calls.

---

```
struct BuiltinMakeCallExprModel {
    kind: &TypeKind
    size: ExprModel
}
```
Expression model for built-in make function calls.

---

```
struct BuiltinErrorTraitSubIdentCallExprModel {
    expr:  ExprModel
    ident: str
}
```
Expression model for sub-ident expression to built-in Error trait. 

---

```
struct SizeofExprModel {
    expr:  ExprModel
}
```
Expression model for sizeof expressions.\
For exmaple, in C++: `sizeof(int)`

---

```
struct AlignofExprModel {
    expr:  ExprModel
}
```
Expression model for alignof expressions.\
For exmaple, in C++: `alignof(int)`

---

```
struct StrConstructorCallExprModel {
    expr:  ExprModel
}
```
Expression model for constructor call of str type.\
For exmaple: `str(my_expr)`

---

```
struct RuneExprModel {
    code: rune
}
```
Rune literal expression model.
For exmaple: `'a'`

---

```
struct ExplicitDerefExprModel {
    expr: ExprModel
}
```
Expression model for explicit dereferencing of reference.

---

```
struct RetType {
    kind:   &TypeSymbol
    idents: []Token
}
```
Return type.

---

```
struct Param {
    token:     Token
    mutable:   bool
    variadic:  bool
    reference: bool
    kind:      &TypeSymbol
    ident:     str
}
```
Parameter.

**Methods:**

`fn is_self(self): bool`\
Reports whether parameter is self (receiver) parameter.

`fn is_ref(self): bool`\
Reports whether self (receiver) parameter is reference. 

---

```
struct Fn {
    token:      Token
    global:     bool
    unsafety:   bool
    public:     bool
    cpp_linked: bool
    ident:      str
    directives: []&Directive
    doc:        str
    scope:      &ScopeTree
    generics:   []&GenericDecl
    result:     &RetType
    params:     []&Param
    owner:      &Struct
    references: &ReferenceStack

    // Function instances for each unique type combination of function call.
    // Nil if function is never used.
    instances: []&FnIns
}
```
Function.

**Methods:**

`fn is_void(self): bool`\
Reports whether return type is void.

`fn is_method(self): bool`\
Reports whether function is method.

`fn is_entry_point(self): bool`\
Reports whether function is entry point.

`fn is_anon(self): bool`\
Reports whether function is anonymous funuction.

`fn any_var(self): bool`\
Reports whether function has return variable(s).

`fn parameters_uses_generics(self): bool`\
Reports whether any parameter uses generic types.

`fn result_uses_generics(self): bool`\
Reports whether result type uses generic types. 

---

```
struct ParamIns {
    decl: &Param
    kind: &TypeKind
}
```
Parameter instance.
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct FnIns {
    owner:    &StructIns
    decl:     &Fn
    generics: []&TypeKind
    params:   []&ParamIns
    result:   &TypeKind
    scope:    &Scope
}
```
Function instance. 
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_builtin(self): bool`\
Reports whether instance is built-in.

`fn is_anon(self): bool`\
Reports whether instance is anonymous function.

---

```
struct Impl {
    base:    Token
    dest:    Token
    methods: []&Fn
}
```
Implementation. 

**Methods:**

`fn is_trait_impl(self): bool`\
Reports whether implementation type is trait to structure.

`fn is_struct_impl(self): bool`\
Reports whether implementation type is append to destination structure. 

---

```
struct ImportInfo {
    // Use declaration token.
    token: Token

    // Absolute path.
    path: str

    // Use declaration path string.
    link_path: str

    // Package identifier (aka package name).
    // Empty if package is cpp header.
    ident: str

    // True if imported with Importer.Get_import function.
    duplicate: bool

    // Is cpp use declaration.
    cpp_linked: bool

    // Is standard library package.
    std: bool

    // Is imported all defines implicitly.
    import_all: bool

    // Identifiers of selected definition.
    selected: []Token

    // Nil if package is cpp header.
    package: &Package
}
```
Import information.\
Represents imported package by use declaration. 
::: tip
**Implemented Traits**
- Lookup
:::

---

```
struct Package {
    files: []&SymbolTable
}
```
Package.
::: tip
**Implemented Traits**
- Lookup
:::

---

```
struct Scope {
    parent:   &Scope
    unsafety: bool
    deferred: bool
    stmts:    Vector[St]
}
```
Scope.

---

```
struct If {
    expr:  ExprModel
    scope: &Scope
}
```
Cain conditional node.

---

```
struct Else {
    scope: &Scope
}
```
Default scope of conditional chain.

---

```
struct Conditional {
    elifs:  []&If
    default: &Else
}
```
Conditional chain.

---

```
struct InfIter {
    scope: &Scope
}
```
Infinity iteration.

---

```
struct WhileIter {
    expr:  ExprModel
    next:  St
    scope: &Scope
}
```
While iteration. 

**Methods:**

`fn is_while_next(self): bool`\
Reports whether iteration is while-next. 

---

```
struct RangeIter {
    expr:  ExprModel
    scope: &Scope
    key_a: &Var
    key_b: &Var
}
```
Range iteration.

---

```
struct Contst {
    it: uintptr
}
```
Continue statement.

---

```
struct Breakst {
    it:   uintptr
    mtch: uintptr
}
```
Break statement.

---

```
struct Label {
    ident: str
}
```

---

```
struct GotoSt {
    ident: str
}
```

---

```
struct Postfix {
    expr: ExprModel
    op:   str
}
```
Postfix assignment.

---

```
struct Assign {
    l:  ExprModel
    r:  ExprModel
    op: str
}
```
Assignment.

---

```
struct MultiAssign {
    l: []ExprModel
    r: ExprModel
}
```
Multi-declarative assignment.

---

```
struct Match {
    expr:       &Data
    type_match: bool
    cases:      []&Case
    default:    &Case
}
```
Match-Case. 

---

```
struct Case {
    owner: &Match
    scope: &Scope
    exprs: []ExprModel
    next:  &Case
}
```

**Methods:**

`fn is_default(self): bool`\
Reports whether case is default. 

---

```
struct FallSt {
    dest_case: uintptr
}
```

---

```
struct RetSt {
    vars: []&Var
    expr: ExprModel
}
```
Return statement. 

---

```
struct Recover {
    handler:      &FnIns
    handler_expr: ExprModel
    scope:        &Scope
    scope_owner:  &FnIns
}
```
Built-in recover function call statement.

---

```
struct ReferenceStack {}
```
Stack for symbol references.

**Methods:**

`fn len(self): int`\
Returns count of references.

`fn at(mut self, i: int): any`\
Returns reference by index.

`fn push(mut self, mut ref: any)`\
Push new reference to stack.

`fn remove(mut self, i: int)`\
Removes reference by index.

`fn exist[T](self, t: &T): bool`\
Reports whether reference is exist.

---

```
struct Field {
    owner:   &Struct
    token:   Token
    public:  bool
    mutable: bool
    ident:   str
    kind:    &TypeSymbol
}
```

---

```
struct Struct {
    depends:    []&Struct
    uses:       []&Struct
    token:      Token
    ident:      str
    fields:     []&Field
    methods:    []&Fn
    cpp_linked: bool
    directives: []&Directive
    doc:        str
    generics:   []&GenericDecl
    implements: []&Trait
    instances:  []&StructIns
    references: &ReferenceStack
}
```
Structure. 

**Methods:**

`fn find_method(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier.

`fn find_field(mut self, ident: str): &Field`\
Returns field by identifier.\
Returns nil reference if not exist any field in this identifier.

`fn is_implements(self, t: &Trait): bool`\
Reports whether structure implements given trait.

`fn is_derives(self, ident: str): bool`\
Reports whether structure is derives given derive.

`fn is_uses(self, s: &Struct): bool`\
Reports whether structure is uses given structure. 

---

```
struct FieldIns {
    decl: &Field
    kind: &TypeKind
}
```
Field instance. 

---

```
struct StructIns {
    checked:  bool
    decl:     &Struct
    generics: []&TypeKind
    fields:   []&FieldIns
    methods:  []&Fn
    has_mut:  bool
}
```
Structure instance.
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn find_method(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier.

`fn find_field(mut self, ident: str): &FieldIns`\
Returns field by identifier.\
Returns nil reference if not exist any field in this identifier. 

---

```
struct Pass {
    token: Token
    text:  str
}
```
Directive pass. 

---

```
struct SymbolTable {
    file:         &File               // Owner fileset of this symbol table.
    passes:       Vector[Pass]        // All passed flags with jule:pass directive.
    imports:      Vector[&ImportInfo] // Imported packages.
    vars:         Vector[&Var]        // Variables.
    type_aliases: Vector[&TypeAlias]  // Type aliases.
    structs:      Vector[&Struct]     // Structures.
    funcs:        Vector[&Fn]         // Functions.
    traits:       Vector[&Trait]      // Traits.
    enums:        Vector[&Enum]       // Enums.
    impls:        Vector[&Impl]       // Implementations.
}
```
Structure instance.
::: tip
**Implemented Traits**
- Lookup
:::

---

```
struct Trait {
    token:       Token
    ident:       str
    public:      bool
    doc:         str
    methods:     []&Fn
    implemented: []&Struct
}
```
Trait.
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_builtin(self): bool`\
Returns whether Trait is built-in

`fn find_method(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier. 

---

```
struct TypeAlias {
    scope:      &ScopeTree
    public:     bool
    cpp_linked: bool
    used:       bool
    token:      Token
    ident:      str
    kind:       &TypeSymbol
    doc:        str
    refers:     []any
}
```
Type alias.
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct TypeKind {
    cpp_linked: bool
    cpp_ident:  str
    kind:       Kind
}
```
Type alias.
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_nil(self): bool`\
Reports whether kind is nil.

`fn is_void(self): bool`\
Reports whether kind is void.

`fn prim(self): &Prim`\
Returns primitive type if kind is primitive type, nil reference if not.

`fn ref(self): &Ref`\
Returns primitive type if kind is reference, nil reference if not.

`fn ptr(self): &Ptr`\
Returns primitive type if kind is pointer, nil reference if not.

`fn enm(self): &Enum`\
Returns primitive type if kind is enum, nil reference if not.

`fn arr(self): &Arr`\
Returns primitive type if kind is array, nil reference if not.

`fn slc(self): &Slc`\
Returns primitive type if kind is slice, nil reference if not.

`fn fnc(self): &FnIns`\
Returns primitive type if kind is function, nil reference if not.

`fn strct(self): &Struct`\
Returns primitive type if kind is structure, nil reference if not.

`fn trt(self): &Trait`\
Returns primitive type if kind is trait, nil reference if not.

`fn map(self): &Map`\
Returns primitive type if kind is map, nil reference if not.

`fn tup(self): &Tuple`\
Returns primitive type if kind is tuple, nil reference if not. 

---

```
struct TypeSymbol {
    decl: &TypeDecl
    kind: &TypeDecl
}
```
Type. 

---

```
struct Prim {
    kind: str
}
```
Primitive type. 
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_i8(self): bool`\
Reports whether type is primitive i8.

`fn is_i16(self): bool`\
Reports whether type is primitive i16.

`fn is_i32(self): bool`\
Reports whether type is primitive i32.

`fn is_i64(self): bool`\
Reports whether type is primitive i64.

`fn is_u8(self): bool`\
Reports whether type is primitive u8.

`fn is_u16(self): bool`\
Reports whether type is primitive u16.

`fn is_u32(self): bool`\
Reports whether type is primitive u32.

`fn is_u64(self): bool`\
Reports whether type is primitive u64.

`fn is_f32(self): bool`\
Reports whether type is primitive f32.

`fn is_f64(self): bool`\
Reports whether type is primitive f64.

`fn is_int(self): bool`\
Reports whether type is primitive int.

`fn is_uint(self): bool`\
Reports whether type is primitive uint.

`fn is_uintptr(self): bool`\
Reports whether type is primitive uintptr.

`fn is_bool(self): bool`\
Reports whether type is primitive bool.

`fn is_str(self): bool`\
Reports whether type is primitive str.

`fn is_any(self): bool`\
Reports whether type is primitive any. 

---

```
struct Slc {
    elem: &TypeKind
}
```
Slice type.
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct Tuple {
    types: []&TypeKind
}
```
Tuple type.
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct Map {
    key: &TypeKind
    val: &TypeKind
}
```
Map type.
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct Arr {
    elem: &TypeKind
}
```
Array type. 
::: tip
**Implemented Traits**
- Kind
:::

---

```
struct Ptr {
    elem: &TypeKind
}
```
Pointer type. 
::: tip
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_unsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe). 

---

```
struct Var {
    scope:      &ScopeTree
    token:      Token
    ident:      str
    cpp_linked: bool
    constant:   bool
    mutable:    bool
    public:     bool
    used:       bool
    statically: bool
    reference:  bool
    doc:        str
    kind:       &TypeSymbol
    value:      &Value
    references: &ReferenceStack

    // This variable depended to these variables for initialization expression.
    // Nil if not global variable.
    depends:    []&Var
}
```
Variable.

**Methods:**

`fn is_initialized(self): bool`\
Reports whether variable is initialized explicitly.

`fn is_type_inferred(self): bool`\
Reports whether variable is type inferred.

## Traits
```
trait Lookup {
    // Find imported package.
    // Returns nil reference if did not found any match.
    fn find_package(mut self, ident: str): &ImportInfo

    // Select imported package.
    // Returns nil reference if did not found any match.
    fn select_package(mut self, selector: fn(&ImportInfo): bool): &ImportInfo

    // Find variable by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    fn find_var(mut self, ident: str, cpp_linked: bool): &Var

    // Find type alias by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    fn find_type_alias(mut self, ident: str, cpp_linked: bool): &TypeAlias

    // Find structure by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    fn find_struct(mut self, ident: str, cpp_linked: bool): &Struct

    // Find function by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    fn find_fn(mut self, ident: str, cpp_linked: bool): &Fn

    // Find trait by identifier.
    // Returns nil reference if did not found any match.
    fn find_trait(mut self, ident: str): &Trait

    // Find enum by identifier.
    // Returns nil reference if did not found any match.
    fn find_enum(mut self, ident: str): &Enum
}
```
Lookup.

---

```
trait Importer {
    // Returns &ImportInfo by path.
    // This function accepted as returns already imported and checked package.
    // If returns not-nil value, will be used instead of Import_package
    // if possible and package content is not checked by Sema.
    get_import(mut self, path: str): &ImportInfo
    // Path is the directory path of package to import.
    // Should return abstract syntax tree of package files.
    // Logs accepts as error.
    import_package(mut self, path: str): ([]&Ast, []Log)
    // Invoked after the package is imported.
    imported(mut self, mut &ImportInfo)
}
```
Importer.\
Used by semantic analyzer for import use declarations. 