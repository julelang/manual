# std::jule::sema

## Type Aliases
### `type ExprModel: any`
Expression model.

### `type St: any`
Statement type. 

## Functions
```jule
fn analyze_package(mut files: []&Ast, mut importer: Importer, flags: SemaFlag): (&Package, []Log)
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
fn analyze_file(mut f: &Ast, mut importer: Importer, flags: SemaFlag): (&SymbolTable, []Log)
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

```jule
struct Enum {
    token:  Token
    public: bool
    ident:  str
    kind:   &TypeSymbol
    items:  []&EnumItem
}
```
Enum.
::: info
**Implemented Traits**\
- Kind
:::

**Methods:**

`fn find_item(mut self, ident: str): &EnumItem`\
Returns item by identifier.\
Returns nil reference if not exist any item in this identifier. 

---

```jule
struct Data {
    kind:      &TypeKind
    cast_kind: &TypeKind // This expression should be cast to this kind.
    mutable:   bool
    reference: bool
    lvalue:    bool
    is_rune:   bool
    model:     ExprModel

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
::: info
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

`fn good_operand(self, mut &other: &Data): bool`\
Reports left and right operand is good order.
If reports false, left and right operand should be swapped.
Accepts itself as left operand.

---

```jule
struct Value {
    expr: &Expr
    data: &Data
}
```
Value. 

---

```jule
struct OperandExprModel {
    kind:  &TypeKind
    model: ExprModel
}
```
Operand expression model.

---

```jule
struct BinopExprModel {
    left:  &OperandExprModel
    right: &OperandExprModel
    op:    Token
}
```
Binary operation expression model. 

---

```jule
struct UnaryExprModel {
    expr:  ExprModel
    op:    Token
}
```
Unary operation expression model. 

---

```jule
struct StructArgExprModel {
    field: &FieldIns
    expr:  ExprModel
}
```
Structure field argument expression model for constructors.\
For example: `&MyStruct{10, false, "-"}`

---

```jule
struct StructLitExprModel {
    token: Token
    strct: &StructIns
    args:  []&StructArgExprModel
}
```
Structure literal. 

---

```jule
struct AllocStructLitExprModel {
    lit: &StructLitExprModel
}
```
Heap allocated structure litral expression.\
For example: `&MyStruct{}`

---

```jule
struct CastingExprModel {
    token:     Token
    expr:      ExprModel
    kind:      &TypeKind
    expr_kind: &TypeKind
}
```
Casting expression model. For example: `(int)(my_float)`

---

```jule
struct FnCallExprModel {
    token:    Token
    func:     &FnIns
    is_co:    bool
    expr:     ExprModel
    args:     []ExprModel
    except:   &Scope
    assigned: bool
}
```
Function call expression model. 

---

```jule
struct BuiltinErrorCallExprModel {
    func: &FnIns
    err:  ExprModel
}
```
Expression model for built-in error function calls.

---

```jule
struct SliceExprModel {
    elem_kind: &TypeKind
    elems:     []ExprModel
}
```
Slice expression model.\
For example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

---

```jule
struct IndexingExprModel {
    token: Token
    expr:  &Data
    index: &Data
}
```
Indexing expression model.\
For example: `my_slice[my_index]`

---

```jule
struct AnonFnExprModel {
    func:   &FnIns
    global: bool
}
```
Anonymous function expression model. 

---

```jule
struct KeyValPairExprModel {
    key: ExprModel
    val: ExprModel
}
```
Key-value expression pair model.

---

```jule
struct MapExprModel {
    key_kind: &TypeKind
    val_kind: &TypeKind
    entries:  []&KeyValPairExprModel
}
```
Map expression model.
For example: `{0: false, 1: true}`

---

```jule
struct SlicingExprModel {
    token: Token
    expr:  ExprModel
    left:  ExprModel
    right: ExprModel
}
```
Slicing expression model.
For example: `my_slice[2:my_slice.len-5]`

---

```jule
struct TraitSubIdentExprModel {
    token:  Token
    expr:   ExprModel
    method: &Fn
    trt:    &Trait
}
```
Trait sub-ident expression model.
For example: `my_trait.my_sub_ident`

---

```jule
struct StructSubIdentExprModel {
    token:     Token
    expr:      &Data
    expr_kind: &TypeKind
    method:    &FnIns
    field:     &FieldIns
}
```
Structure sub-ident expression model.
For example: `my_struct.my_sub_ident`

---

```jule
struct ArrayExprModel {
    kind:  &Arr
    elems: []ExprModel
}
```
Array expression model.  If array filled, elems field holds 2 data. First data is expression, second is nil, kind of mark to that array filled.

---

```jule
struct CommonIdentExprModel {
    ident: str
}
```
Common ident expression model.

---

```jule
struct CommonSubIdentExprModel {
    expr_kind: &TypeKind
    expr:      ExprModel
    token:     Token
    ident:     str
}
```
Common sub-ident expression model.

---

```jule
struct TupleExprModel {
    datas: []&Data
}
```
Tuple expression model.

---

```jule
struct BuiltinOutCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in out function calls.

---

```jule
struct BuiltinOutlnCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in outln function calls.

---

```jule
struct BuiltinCloneCallExprModel {
    expr:  ExprModel
}
```
Expression model for built-in clone function calls.

---

```jule
struct BuiltinCloneNewExprModel {
    kind: &TypeKind
    init: ExprModel
}
```
Expression model for built-in new function calls.

---

```jule
struct BuiltinPanicCallExprModel {
    token: Token
    expr:  ExprModel
}
```
Expression model for built-in panic function calls.

---

```jule
struct BuiltinAssertCallExprModel {
    token: Token
    expr:  ExprModel
    log:   str
}
```
Expression model for built-in assert function calls.

---

```jule
struct BuiltinMakeCallExprModel {
    kind: &TypeKind
    size: ExprModel
}
```
Expression model for built-in make function calls.

---

```jule
struct BuiltinAppendCallExprModel {
    dest:     ExprModel
    elements: ExprModel
}
```
Expression model for built-in append function calls.

---

```jule
struct SizeofExprModel {
    expr:  ExprModel
}
```
Expression model for sizeof expressions.\
For exmaple, in C++: `sizeof(int)`

---

```jule
struct AlignofExprModel {
    expr:  ExprModel
}
```
Expression model for alignof expressions.\
For exmaple, in C++: `alignof(int)`

---

```jule
struct StrConstructorCallExprModel {
    expr:  ExprModel
}
```
Expression model for constructor call of str type.\
For exmaple: `str(my_expr)`

---

```jule
struct RuneExprModel {
    code: rune
}
```
Rune literal expression model.
For exmaple: `'a'`

---

```jule
struct IntegratedToStrExprModel {
    pexpr: ExprModel
}
```
Expression model for to_str function of std::jule::integrated library.

---

```jule
struct TernaryExprModel {
    condition:  ExprModel
    true_expr:  ExprModel
    false_expr: ExprModel
}
```
Expression model for ternary operator.

---

```jule
struct BackendEmitExprModel {
    code: str
}
```
Expression model for inline code emit to backend.

---

```jule
struct FreeExprModel {
    expr: ExprModel
}
```
Expression model for free calls.\
Function provided by: `std::mem`

---

```jule
struct RetType {
    kind:   &TypeSymbol
    idents: []Token
}
```
Return type.

---

```jule
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

```jule
struct Fn {
    token:       Token
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
    result:      &RetType
    params:      []&Param
    owner:       &Struct

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

```jule
struct ParamIns {
    decl: &Param
    kind: &TypeKind
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
    owner:      &StructIns
    decl:       &Fn
    generics:   []&TypeKind
    params:     []&ParamIns
    result:     &TypeKind
    scope:      &Scope
    references: &ReferenceStack
    anon:       bool
}
```
Function instance. 
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_builtin(self): bool`\
Reports whether instance is built-in.

`fn is_anon(self): bool`\
Reports whether instance is anonymous function.

`fn get_kind_str(self, ident: bool): str` \
Returns kind string of function instance.
Appends identifier to kind of this instance.
Does not appends identifier of this instance to kind if self.decl is nil reference.

`fn same(self, f: &FnIns): bool`\
Reports whether instances are same. Returns true if declarations and generics are same.

---

```jule
struct Impl {
    base:    &TypeDecl
    dest:    &TypeDecl
    methods: []&Fn
    statics: []&Var
}
```
Implementation. 

**Methods:**

`fn is_trait_impl(self): bool`\
Reports whether implementation type is trait to structure.

`fn is_struct_impl(self): bool`\
Reports whether implementation type is append to destination structure. 

---

```jule
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

    // Package alias identifier.
    alias: str

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

    // Module identity.
    mod_id: int
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
    files: []&SymbolTable
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
    parent:   &Scope
    unsafety: bool
    deferred: bool
    stmts:    []St
}
```
Scope.

---

```jule
struct If {
    expr:  ExprModel
    scope: &Scope
}
```
Cain conditional node.

---

```jule
struct Else {
    scope: &Scope
}
```
Default scope of conditional chain.

---

```jule
struct Conditional {
    elifs:  []&If
    default: &Else
}
```
Conditional chain.

---

```jule
struct InfIter {
    scope: &Scope
}
```
Infinity iteration.

---

```jule
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

```jule
struct RangeIter {
    expr:  ExprModel
    scope: &Scope
    key_a: &Var
    key_b: &Var
}
```
Range iteration.

---

```jule
struct Contst {
    it: uintptr
}
```
Continue statement.

---

```jule
struct Breakst {
    it:   uintptr
    mtch: uintptr
}
```
Break statement.

---

```jule
struct Label {
    ident: str
}
```

---

```jule
struct GotoSt {
    ident: str
}
```

---

```jule
struct Postfix {
    expr: ExprModel
    op:   str
}
```
Postfix assignment.

---

```jule
struct Assign {
    l:  &OperandExprModel
    r:  &OperandExprModel
    op: Token
}
```
Assignment.

---

```jule
struct MultiAssign {
    l: []ExprModel
    r: ExprModel
}
```
Multi-declarative assignment.

---

```jule
struct Match {
    expr:       &Data
    type_match: bool
    cases:      []&Case
    default:    &Case
}
```
Match-Case.

**Methods:**

`fn is_generic_type_match(self): bool`\
Reports whether match is type-match for generic type.

---

```jule
struct Case {
    owner: &Match
    scope: &Scope
    exprs: []&Data
    next:  &Case
}
```

**Methods:**

`fn is_default(self): bool`\
Reports whether case is default. 

---

```jule
struct FallSt {
    dest_case: uintptr
}
```

---

```jule
struct RetSt {
    func: &FnIns
    vars: []&Var
    expr: ExprModel
}
```
Return statement. 

---

```jule
struct Recover {
    handler:      &FnIns
    handler_expr: ExprModel
    scope:        &Scope
    scope_owner:  &FnIns
}
```
Built-in recover function call statement.

---

```jule
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

```jule
struct Field {
    owner:   &Struct
    token:   Token
    public:  bool
    mutable: bool
    ident:   str
    kind:    &TypeSymbol
    default: &Expr
}
```

---

```jule
struct OperatorMap {
    eq:             &Fn
    gt:             &Fn
    gt_eq:          &Fn
    lt:             &Fn
    lt_eq:          &Fn
    shl:            &Fn
    shr:            &Fn
    add:            &Fn
    sub:            &Fn
    div:            &Fn
    mul:            &Fn
    mod:            &Fn
    bit_and:        &Fn
    bit_or:         &Fn
    bit_xor:        &Fn
    neg:            &Fn
    pos:            &Fn
    bit_not:        &Fn
    add_assign:     &Fn
    sub_assign:     &Fn
    div_assign:     &Fn
    mul_assign:     &Fn
    mod_assign:     &Fn
    shl_assign:     &Fn
    shr_assign:     &Fn
    bit_or_assign:  &Fn
    bit_and_assign: &Fn
    bit_xor_assign: &Fn
}
```
Map of overloaded operators. Just matched by identifier. Patterns are not checked.

---

```jule
struct Operators {
    eq:             &FnIns
    gt:             &FnIns
    gt_eq:          &FnIns
    lt:             &FnIns
    lt_eq:          &FnIns
    shl:            &FnIns
    shr:            &FnIns
    add:            &FnIns
    sub:            &FnIns
    div:            &FnIns
    mul:            &FnIns
    mod:            &FnIns
    bit_and:        &FnIns
    bit_or:         &FnIns
    bit_xor:        &FnIns
    neg:            &FnIns
    pos:            &FnIns
    bit_not:        &FnIns
    add_assign:     &FnIns
    sub_assign:     &FnIns
    div_assign:     &FnIns
    mul_assign:     &FnIns
    mod_assign:     &FnIns
    shl_assign:     &FnIns
    shr_assign:     &FnIns
    bit_or_assign:  &FnIns
    bit_and_assign: &FnIns
    bit_xor_assign: &FnIns
}
```
Overloaded operators for instance.
Patterns are checked.

---

```jule
struct Struct {
    depends:    []&Struct
    uses:       []&Struct
    token:      Token
    ident:      str
    fields:     []&Field
    methods:    []&Fn
    cpp_linked: bool
    directives: []&Directive
    generics:   []&GenericDecl
    implements: []&Trait
    instances:  []&StructIns
    operators: OperatorMap
}
```
Structure.

**Methods:**

`fn find_method(mut self, ident: str): &Fn`\
Returns method by identifier.\
Returns nil reference if not exist any method in this identifier.

`fn find_static(mut self, ident: str): &Var`\
Returns static field by identifier.
Returns nil reference if not exist any static field in this identifier.

`fn find_field(mut self, ident: str): &Field`\
Returns field by identifier.\
Returns nil reference if not exist any field in this identifier.

`fn is_implements(self, t: &Trait): bool`\
Reports whether structure implements given trait.

`fn is_derives(self, ident: str): bool`\
Reports whether structure is derives given derive.

`fn is_uses(self, s: &Struct): bool`\
Reports whether structure is uses given structure. 

`fn has_ref_accessible(self): bool`\
Reports whether structure has only reference-type-accessible defines.

---

```jule
struct FieldIns {
    decl: &Field
    kind: &TypeKind
    default: &Data
}
```
Field instance. 

---

```jule
struct StructIns {
    checked:    bool
    decl:       &Struct
    generics:   []&TypeKind
    fields:     []&FieldIns
    methods:    []&Fn
    mutable:    bool
    references: &ReferenceStack
    operators:  Operators
}
```
Structure instance.
::: info
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

`fn same(self, s: &StructIns): bool`\
Reports whether instances are same.\
Returns true if declarations and generics are same.

---

```jule
struct Pass {
    token: Token
    text:  str
}
```
Directive pass. 

---

```jule
struct SymbolTable {
    file:         &File         // Owner fileset of this symbol table.
    passes:       []Pass        // All passed flags with jule:pass directive.
    imports:      []&ImportInfo // Imported packages.
    vars:         []&Var        // Variables.
    type_aliases: []&TypeAlias  // Type aliases.
    structs:      []&Struct     // Structures.
    funcs:        []&Fn         // Functions.
    traits:       []&Trait      // Traits.
    enums:        []&Enum       // Enums.
    impls:        []&Impl       // Implementations.
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
    token:       Token
    ident:       str
    public:      bool
    mutable:     bool
    methods:     []&Fn
    implemented: []&Struct
}
```
Trait.
::: info
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

```jule
struct TypeAlias {
    scope:      &ScopeTree
    public:     bool
    cpp_linked: bool
    used:       bool
    generic:    bool
    token:      Token
    ident:      str
    kind:       &TypeSymbol
    refers:     []any
    generics:   []&TypeAlias
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
    cpp_ident: str
    generic:   bool
    variadic:  bool
    kind:      Kind
}
```
Evaluated type declaration.
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn cpp_linked(self): bool`\
Reports whether type is cpp-linked kind.

`fn is_nil(self): bool`\
Reports whether kind is nil.

`fn void(self): bool`\
Reports whether kind is void.

`fn mut(self): bool`\
Reports whether kind is mutable.

`fn nil_compatible(self): bool`\
Reports whether kind is nil compatible.

`fn performs_rc(self): bool`\
Reports whether kind performs reference-counting.

`fn supports_cloning(self): bool`\
Reports whether kind supports clonning via jule::Clone derive.

`fn variadicable(self): bool`\
Reports whether kind is variadicable.

`fn prim(self): &Prim`\
Returns primitive type if kind is primitive type, nil reference if not.

`fn sptr(self): &Sptr`\
Returns primitive type if kind is smart pointer, nil reference if not.

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

```jule
struct TypeSymbol {
    decl: &TypeDecl
    kind: &TypeDecl
}
```
Type. 

---

```jule
struct Prim {
    kind: str
}
```
Primitive type. 
::: info
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

```jule
struct Slc {
    elem: &TypeKind
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
    types: []&TypeKind
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
    key: &TypeKind
    val: &TypeKind
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
    elem: &TypeKind
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
    elem: &TypeKind
}
```
Pointer type. 
::: info
**Implemented Traits**
- Kind
:::

**Methods:**

`fn is_unsafe(self): bool`\
Reports whether pointer is unsafe pointer (*unsafe). 

---

```jule
struct IterRelation {
    range: &Var
}
```
Iteration relationship of variables.
Stored only for indexing variable and ranged by variable.

---

```jule
struct Var {
    scope:         &ScopeTree
    token:         Token
    ident:         str
    cpp_linked:    bool
    constant:      bool
    mutable:       bool
    public:        bool
    used:          bool
    statically:    bool
    reference:     bool
    directives:    []&Directive
    kind:          &TypeSymbol
    value:         &Value
    references:    &ReferenceStack
    iter_relation: &IterRelation

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

---

```jule
struct FuncPattern {}
```
Pattern checker for functions and methods.

**Methods:**

`static fn dispose(f: &Fn): bool`\
Reports whether function is the reserved dispose function.

`static fn to_str(f: &Fn): bool`\
Reports whether function is the reserved to_str function.

`static fn eq(f: &Fn): bool`\
Reports whether function is the reserved eq function.

`static fn gt(f: &Fn): bool`\
Reports whether function is the reserved gt function.

`static fn gt_eq(f: &Fn): bool`\
Reports whether function is the reserved gt_eq function.

`static fn lt(f: &Fn): bool`\
Reports whether function is the reserved lt function.

`static fn lt_eq(f: &Fn): bool`\
Reports whether function is the reserved lt_eq function.

`static fn shl(f: &Fn): bool`\
Reports whether function is the reserved shl function.

`static fn shr(f: &Fn): bool`\
Reports whether function is the reserved shr function.

`static fn add(f: &Fn): bool`\
Reports whether function is the reserved add function.

`static fn sub(f: &Fn): bool`\
Reports whether function is the reserved sub function.

`static fn div(f: &Fn): bool`\
Reports whether function is the reserved div function.

`static fn mul(f: &Fn): bool`\
Reports whether function is the reserved mul function.

`static fn mod(f: &Fn): bool`\
Reports whether function is the reserved mod function.

`static fn bit_and(f: &Fn): bool`\
Reports whether function is the reserved bit_and function.

`static fn bit_or(f: &Fn): bool`\
Reports whether function is the reserved bit_or function.

`static fn bit_xor(f: &Fn): bool`\
Reports whether function is the reserved bit_xor function.

`static fn neg(f: &Fn): bool`\
Reports whether function is the reserved neg function.

`static fn pos(f: &Fn): bool`\
Reports whether function is the reserved pos function.

`static fn bit_not(f: &Fn): bool`\
Reports whether function is the reserved bit_not function.

`static fn add_assign(f: &Fn): bool`\
Reports whether function is the reserved add_assign function.

`static fn sub_assign(f: &Fn): bool`\
Reports whether function is the reserved sub_assign function.

`static fn div_assign(f: &Fn): bool`\
Reports whether function is the reserved div_assign function.

`static fn mul_assign(f: &Fn): bool`\
Reports whether function is the reserved mul_assign function.

`static fn mod_assign(f: &Fn): bool`\
Reports whether function is the reserved mod_assign function.

`static fn shl_assign(f: &Fn): bool`\
Reports whether function is the reserved shl_assign function.

`static fn shr_assign(f: &Fn): bool`\
Reports whether function is the reserved shr_assign function.

`static fn bit_or_assign(f: &Fn): bool`\
Reports whether function is the reserved bit_or_assign function.

`static fn bit_and_assign(f: &Fn): bool`\
Reports whether function is the reserved bit_and_assign function.

`static fn bit_xor_assign(f: &Fn): bool`\
Reports whether function is the reserved bit_xor_assign function.

## Traits
```jule
trait Lookup {
    // Find imported package.
    // Returns nil reference if did not found any match.
    pub fn find_package(mut self, ident: str): &ImportInfo

    // Select imported package.
    // Returns nil reference if did not found any match.
    pub fn select_package(mut self, selector: fn(&ImportInfo): bool): &ImportInfo

    // Find variable by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    pub fn find_var(mut self, ident: str, cpp_linked: bool): &Var

    // Find type alias by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    pub fn find_type_alias(mut self, ident: str, cpp_linked: bool): &TypeAlias

    // Find structure by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    pub fn find_struct(mut self, ident: str, cpp_linked: bool): &Struct

    // Find function by identifier and cpp-linked state.
    // Returns nil reference if did not found any match.
    pub fn find_fn(mut self, ident: str, cpp_linked: bool): &Fn

    // Find trait by identifier.
    // Returns nil reference if did not found any match.
    pub fn find_trait(mut self, ident: str): &Trait

    // Find enum by identifier.
    // Returns nil reference if did not found any match.
    pub fn find_enum(mut self, ident: str): &Enum
}
```
Lookup.

---

```jule
trait Importer {
    // Set current module path.
    // Path should be valid directory.
    // Set to empty string if module is not exist.
    pub fn set_mod_path(mut self, path: str)
    // Returns current module path.
    // Path should be valid directory.
    // Returns empty string if module is not exist.
    pub fn get_mod_path(self): str
    // Returns module path by identity.
    pub fn mod_by_id(self, id: int): str
    // Returns &ImportInfo by path.
    // This function accepted as returns already imported and checked package.
    // If returns not-nil value, will be used instead of Import_package
    // if possible and package content is not checked by Sema.
    pub fn get_import(mut self, path: str): &ImportInfo
    // Path is the directory path of package to import.
    // Should return abstract syntax tree of package files.
    // Logs accepts as error.
    // Updated module to package's module if exist when update_mod is true.
    pub fn import_package(mut self, path: str, update_mod: bool): ([]&Ast, []Log)
    // Invoked after the package is imported.
    // Sets module identitity of imported package to current module.
    pub fn imported(mut self, mut &ImportInfo)
}
```
Importer.\
Used by semantic analyzer for import use declarations. 

---

```jule
trait Kind {
    pub fn to_str(self): str
    pub fn equals(&self, other: &TypeKind): bool
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
