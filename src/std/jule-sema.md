# std/jule/sema

## Index

[fn AnalyzePackage\(mut files: \[\]&amp;ast::AST, mut importer: Importer, flags: Flag\): \(&amp;Package, \[\]build::Log\)](#analyzepackage)\
[fn AnalyzeFile\(mut f: &amp;ast::AST, mut importer: Importer, flags: Flag\): \(&amp;SymTab, \[\]build::Log\)](#analyzefile)\
[trait Importer](#importer)\
[trait Kind](#kind)\
[trait Lookup](#lookup)\
[struct Field](#field)\
[struct Struct](#struct)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindMethod\(mut self, ident: str, statically: bool\): &amp;Func](#findmethod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindField\(mut self, ident: str\): &amp;Field](#findfield)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsImplements\(self, t: &amp;Trait\): bool](#isimplements)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn HasRefAccessible\(self\): bool](#hasrefaccessible)\
[struct FieldIns](#fieldins)\
[struct StructIns](#structins)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Same\(self, s: &amp;StructIns\): bool](#same)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindMethod\(mut self, ident: str, statically: bool\): &amp;Func](#findmethod-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindField\(mut self, ident: str\): &amp;FieldIns](#findfield-1)\
[struct OperandExpr](#operandexpr)\
[struct BinaryExpr](#binaryexpr)\
[struct UnaryExpr](#unaryexpr)\
[struct StructArgExpr](#structargexpr)\
[struct StructLitExpr](#structlitexpr)\
[struct AllocStructLitExpr](#allocstructlitexpr)\
[struct CastingExpr](#castingexpr)\
[struct FuncCallExpr](#funccallexpr)\
[struct SliceExpr](#sliceexpr)\
[struct IndexingExpr](#indexingexpr)\
[struct AnonFuncExpr](#anonfuncexpr)\
[struct KeyValPairExpr](#keyvalpairexpr)\
[struct MapExpr](#mapexpr)\
[struct SlicingExpr](#slicingexpr)\
[struct TraitSubIdentExpr](#traitsubidentexpr)\
[struct StructSubIdentExpr](#structsubidentexpr)\
[struct StructStaticIdentExpr](#structstaticidentexpr)\
[struct ArrayExpr](#arrayexpr)\
[struct TupleExpr](#tupleexpr)\
[struct BuiltinPrintCallExpr](#builtinprintcallexpr)\
[struct BuiltinPrintlnCallExpr](#builtinprintlncallexpr)\
[struct BuiltinNewCallExpr](#builtinnewcallexpr)\
[struct BuiltinPanicCallExpr](#builtinpaniccallexpr)\
[struct ChanRecv](#chanrecv)\
[struct ChanSend](#chansend)\
[struct BuiltinCloseCallExpr](#builtinclosecallexpr)\
[struct BuiltinMakeCallExpr](#builtinmakecallexpr)\
[struct BuiltinAppendCallExpr](#builtinappendcallexpr)\
[struct BuiltinLenCallExpr](#builtinlencallexpr)\
[struct BuiltinCapCallExpr](#builtincapcallexpr)\
[struct BuiltinDeleteCallExpr](#builtindeletecallexpr)\
[struct BuiltinCopyCallExpr](#builtincopycallexpr)\
[struct BuiltinErrorCallExpr](#builtinerrorcallexpr)\
[struct SizeofExpr](#sizeofexpr)\
[struct AlignofExpr](#alignofexpr)\
[struct RuneExpr](#runeexpr)\
[struct BackendEmitExpr](#backendemitexpr)\
[struct FreeExpr](#freeexpr)\
[struct SymTab](#symtab)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SelectPackage\(mut self, selector: fn\(&amp;ImportInfo\): bool\): &amp;ImportInfo](#selectpackage)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindVar\(mut self, ident: str, binded: bool\): &amp;Var](#findvar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeAlias\(mut self, ident: str, binded: bool\): &amp;TypeAlias](#findtypealias)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindStruct\(mut self, ident: str, binded: bool\): &amp;Struct](#findstruct)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindFunc\(mut self, ident: str, binded: bool\): &amp;Func](#findfunc)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTrait\(mut self, ident: str\): &amp;Trait](#findtrait)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindEnum\(mut self, ident: str\): &amp;Enum](#findenum)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeEnum\(mut self, ident: str\): &amp;TypeEnum](#findtypeenum)\
[struct Trait](#trait)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindMethod\(mut self, ident: str\): &amp;Func](#findmethod-2)\
[struct EnumItem](#enumitem)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AutoExpr\(self\): bool](#autoexpr)\
[struct Enum](#enum)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindItem\(mut self, ident: str\): &amp;EnumItem](#finditem)\
[struct TypeEnumItem](#typeenumitem)\
[struct TypeEnum](#typeenum)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindItem\(mut self, ident: str\): &amp;TypeEnumItem](#finditem-1)\
[struct Impl](#impl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsTraitImpl\(self\): bool](#istraitimpl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStructImpl\(self\): bool](#isstructimpl)\
[struct Scope](#scope)\
[struct If](#if)\
[struct Else](#else)\
[struct Conditional](#conditional)\
[struct InfIter](#infiter)\
[struct WhileIter](#whileiter)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsWhileNext\(self\): bool](#iswhilenext)\
[struct RangeIter](#rangeiter)\
[struct Continue](#continue)\
[struct Break](#break)\
[struct Label](#label)\
[struct Goto](#goto)\
[struct Postfix](#postfix)\
[struct Assign](#assign)\
[struct MultiAssign](#multiassign)\
[struct Match](#match)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsGenericTypeMatch\(self\): bool](#isgenerictypematch)\
[struct Select](#select)\
[struct Case](#case)\
[struct Fall](#fall)\
[struct Ret](#ret)\
[struct RetType](#rettype)\
[struct Param](#param)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsSelf\(self\): bool](#isself)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRef\(self\): bool](#isref)\
[struct Func](#func)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsVoid\(self\): bool](#isvoid)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsMethod\(self\): bool](#ismethod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsEntryPoint\(self\): bool](#isentrypoint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInit\(self\): bool](#isinit)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAnon\(self\): bool](#isanon)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AnyVar\(self\): bool](#anyvar)\
[struct ParamIns](#paramins)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-4)\
[struct FuncIns](#funcins)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-4)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EqualFunc\(&amp;self, &amp;f: &amp;FuncIns, responsive: bool\): bool](#equalfunc)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Types\(mut self\): \[\]&amp;Type](#types)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsBuiltin\(self\): bool](#isbuiltin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAnon\(self\): bool](#isanon-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Same\(self, f: &amp;FuncIns\): bool](#same-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetKindStr\(self, ident: bool\): str](#getkindstr)\
[struct ReferenceStack](#referencestack)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(self\): int](#len)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn At\(mut self, i: int\): any](#at)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Push\(mut self, mut ref: any\)](#push)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exist\[T\]\(self, t: T\): bool](#exist)\
[struct Pass](#pass)\
[struct ImportInfo](#importinfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SelectPackage\(mut self, fn\(&amp;ImportInfo\): bool\): &amp;ImportInfo](#selectpackage-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindVar\(mut self, ident: str, \_: bool\): &amp;Var](#findvar-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeAlias\(mut self, ident: str, \_: bool\): &amp;TypeAlias](#findtypealias-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindStruct\(mut self, ident: str, \_: bool\): &amp;Struct](#findstruct-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindFunc\(mut self, ident: str, \_: bool\): &amp;Func](#findfunc-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTrait\(mut self, ident: str\): &amp;Trait](#findtrait-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindEnum\(mut self, ident: str\): &amp;Enum](#findenum-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeEnum\(mut self, ident: str\): &amp;TypeEnum](#findtypeenum-1)\
[struct Package](#package)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SelectPackage\(mut self, fn\(&amp;ImportInfo\): bool\): &amp;ImportInfo](#selectpackage-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindVar\(mut self, ident: str, binded: bool\): &amp;Var](#findvar-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeAlias\(mut self, ident: str, binded: bool\): &amp;TypeAlias](#findtypealias-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindStruct\(mut self, ident: str, binded: bool\): &amp;Struct](#findstruct-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindFunc\(mut self, ident: str, binded: bool\): &amp;Func](#findfunc-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTrait\(mut self, ident: str\): &amp;Trait](#findtrait-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindEnum\(mut self, ident: str\): &amp;Enum](#findenum-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindTypeEnum\(mut self, ident: str\): &amp;TypeEnum](#findtypeenum-2)\
[struct Var](#var)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInitialized\(self\): bool](#isinitialized)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsTypeInferred\(self\): bool](#istypeinferred)\
[struct FuncPattern](#funcpattern)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Str\(f: &amp;Func\): bool](#str-6)\
[struct Value](#value)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsNil\(self\): bool](#isnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsVoid\(self\): bool](#isvoid-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsConst\(self\): bool](#isconst)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GoodOperand\(self, mut &amp;other: &amp;Value\): bool](#goodoperand)\
[struct ValueSym](#valuesym)\
[struct InsGeneric](#insgeneric)\
[struct TypeAlias](#typealias)\
[struct Type](#type)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-7)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-5)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Binded\(self\): bool](#binded)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsNil\(self\): bool](#isnil-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Void\(self\): bool](#void)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ActualKind\(mut self\): Kind](#actualkind)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ActualEqual\(&amp;self, other: &amp;Type\): bool](#actualequal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Comparable\(self\): bool](#comparable)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mutable\(self\): bool](#mutable)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Ordered\(self\): bool](#ordered)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NilCompatible\(self\): bool](#nilcompatible)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GC\(self\): bool](#gc)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Variadicable\(self\): bool](#variadicable)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Prim\(mut self\): &amp;Prim](#prim)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Chan\(mut self\): &amp;Chan](#chan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sptr\(mut self\): &amp;Sptr](#sptr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Ptr\(mut self\): &amp;Ptr](#ptr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Enum\(mut self\): &amp;Enum](#enum-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn TypeEnum\(mut self\): &amp;TypeEnum](#typeenum-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Array\(mut self\): &amp;Array](#array)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Slice\(mut self\): &amp;Slice](#slice)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Func\(mut self\): &amp;FuncIns](#func-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Struct\(mut self\): &amp;StructIns](#struct-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Trait\(mut self\): &amp;Trait](#trait-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Map\(mut self\): &amp;Map](#map)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tuple\(mut self\): &amp;Tuple](#tuple)\
[struct TypeSym](#typesym)\
[struct Prim](#prim-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-6)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsConstraint\(self\): bool](#isconstraint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsI8\(self\): bool](#isi8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsI16\(self\): bool](#isi16)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsI32\(self\): bool](#isi32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsI64\(self\): bool](#isi64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsU8\(self\): bool](#isu8)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsU16\(self\): bool](#isu16)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsU32\(self\): bool](#isu32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsU64\(self\): bool](#isu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsF32\(self\): bool](#isf32)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsF64\(self\): bool](#isf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInt\(self\): bool](#isint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUint\(self\): bool](#isuint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUintptr\(self\): bool](#isuintptr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsBool\(self\): bool](#isbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStr\(self\): bool](#isstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAny\(self\): bool](#isany)\
[struct Chan](#chan-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-9)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-7)\
[struct Sptr](#sptr-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-10)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-8)\
[struct Slice](#slice-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-11)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-9)\
[struct Tuple](#tuple-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-12)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-10)\
[struct Map](#map-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-13)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-11)\
[struct Array](#array-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-14)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-12)\
[struct Ptr](#ptr-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-15)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(&amp;self, other: &amp;Type\): bool](#equal-13)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsUnsafe\(self\): bool](#isunsafe)\
[enum Expr: type ](#expr)\
[enum Stmt: type ](#stmt)\
[enum CaseOwner: type ](#caseowner)\
[enum Flag](#flag)



## AnalyzePackage
```jule
fn AnalyzePackage(mut files: []&ast::AST, mut importer: Importer, flags: Flag): (&Package, []build::Log)
```
Builds symbol table of package&#39;s ASTs\. Returns nil if files is nil\. Returns nil if pwd is empty\. Returns nil if pstd is empty\. Accepts current working directory is pwd\.

Parameters:<br>
```
files:    abstract syntax trees of files
importer: importer that used for use declarations
```
Dependent Parameters:<br>
```
working-directory: uses working directory path provided by build
std-path:          uses standard library path provided by build
```
Risks:<br>
```
You can pass nil to importer, but panics if importer is nil and
semantic analyzer used nil importer.
```


## AnalyzeFile
```jule
fn AnalyzeFile(mut f: &ast::AST, mut importer: Importer, flags: Flag): (&SymTab, []build::Log)
```
Builds symbol table of AST\. Returns nil if f is nil\. Returns nil if pwd is empty\. Returns nil if pstd is empty\. Accepts current working directory is pwd\.

Parameters:<br>
```
f:        file's abstract syntax tree
importer: importer that used for use declarations
```
Dependent Parameters:<br>
```
working-directory: uses working directory path provided by build
std-path:          uses standard library path provided by build
```
Risks:<br>
```
You can pass nil to importer, but panics if importer is nil and
semantic analyzer used nil importer.
```


## Importer
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
	fn ImportPackage(mut self, path: str, updateMod: bool): ([]&ast::AST, []build::Log)

	// Invoked after the package is imported.
	// Sets module identitity of imported package to current module.
	fn Imported(mut self, mut &ImportInfo)
}
```
Importer\. Used by semantic analysis to import use declarations\. The default importer implementation is highly recommended\. 3rd\-party importer implementations may cause unpredictable issues\.

## Kind
```jule
trait Kind {
	fn Str(self): str
	fn Equal(&self, other: &Type): bool
}
```
Kind of type declaration\.

## Lookup
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
Generic behavior of lookupable types\. Typically it is a scope like global scope, function scope or etc\.

## Field
```jule
struct Field {
	Owner:   &Struct
	Token:   &token::Token
	Public:  bool
	Mutable: bool // Interior mutability.
	Ident:   str
	TypeSym: &TypeSym
	Default: &ast::Expr // Nil if not given.
}
```
Field\.

## Struct
```jule
struct Struct {
	// This structure depended to these structures, except binded ones.
	// Only stores plain identifier references such as A, B, and MyStruct.
	// Not includes non-plain identifier references such as *A, &B, and []MyStruct.
	//
	// As far as tested, safe to store in structure declaration rather than instances.
	// This collection applied for all instances.
	Depends: []&Struct

	Token:      &token::Token
	Ident:      str
	Fields:     []&Field
	Methods:    []&Func
	Public:     bool
	Binded:     bool
	Directives: []&ast::Directive
	Generics:   []&ast::Generic
	Implements: []&Trait

	// Structure instances for each unique type combination of structure.
	// Nil if structure is never used.
	Instances: []&StructIns
	// NOTE: contains filtered hidden or unexported fields
}
```
Structure\.

### FindMethod
```jule
fn FindMethod(mut self, ident: str, statically: bool): &Func
```
Returns method by identifier\. Returns nil if not exist any method in this identifier\.

### FindField
```jule
fn FindField(mut self, ident: str): &Field
```
Returns field by identifier\. Returns nil if not exist any field in this identifier\.

### IsImplements
```jule
fn IsImplements(self, t: &Trait): bool
```
Reports whether structure implements given trait\.

### HasRefAccessible
```jule
fn HasRefAccessible(self): bool
```
Reports whether structure has only reference\-type\-accessible defines\.

## FieldIns
```jule
struct FieldIns {
	Owner:   &StructIns
	Decl:    &Field
	Type:    &Type
	Default: &Value // Nil if not given.
}
```
Field instance\.

## StructIns
```jule
struct StructIns {
	Source:     &Type // See developer reference (9).
	Checked:    bool
	Decl:       &Struct
	Generics:   []&InsGeneric
	Fields:     []&FieldIns
	Methods:    []&Func
	Mutable:    bool // This structure has mutable defines.
	Comparable: bool
	Refers:     &ReferenceStack
}
```
Structure instance\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns Struct&#39;s type kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### Same
```jule
fn Same(self, s: &StructIns): bool
```
Reports whether instances are same\. Returns true if declarations and generics are same\.

### FindMethod
```jule
fn FindMethod(mut self, ident: str, statically: bool): &Func
```
Returns method by identifier\. Returns nil if not exist any method in this identifier\.

### FindField
```jule
fn FindField(mut self, ident: str): &FieldIns
```
Returns field by identifier\. Returns nil if not exist any field in this identifier\.

## OperandExpr
```jule
struct OperandExpr {
	Type:  &Type
	Model: Expr
}
```
Operand expression model\.

## BinaryExpr
```jule
struct BinaryExpr {
	Left:  &OperandExpr
	Right: &OperandExpr
	Op:    &token::Token
}
```
Binary operation expression model\.

## UnaryExpr
```jule
struct UnaryExpr {
	Expr: &Value
	Op:   &token::Token
}
```
Unary operation expression model\.

## StructArgExpr
```jule
struct StructArgExpr {
	Token: &token::Token
	Field: &FieldIns
	Expr:  &Value
}
```
Structure field argument expression model for constructors\. For example: &amp;MyStruct\{10, false, &#34;\-&#34;\}

## StructLitExpr
```jule
struct StructLitExpr {
	Strct: &StructIns
	Args:  []&StructArgExpr
}
```
Structure literal\.

## AllocStructLitExpr
```jule
struct AllocStructLitExpr {
	Lit: &StructLitExpr
}
```
Heap allocated structure litral expression\. For example: &amp;MyStruct\{\}

## CastingExpr
```jule
struct CastingExpr {
	Token: &token::Token
	Expr:  &Value
	Type:  &Type
}
```
Casting expression model\. For example: \(int\)\(my\_float\)

## FuncCallExpr
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
Function call expression model\.

## SliceExpr
```jule
struct SliceExpr {
	ElemType: &Type
	Elems:    []&Value
}
```
Slice expression model\. For example: \[1, 2, 3, 4, 5, 6, 8, 9, 10\]

## IndexingExpr
```jule
struct IndexingExpr {
	Token: &token::Token
	Expr:  &Value
	Index: &Value
}
```
Indexing expression model\. For example: slice\[index\]

## AnonFuncExpr
```jule
struct AnonFuncExpr {
	Captured: []&Var
	Func:     &FuncIns
	Global:   bool
}
```
Anonymous function expression model\.

## KeyValPairExpr
```jule
struct KeyValPairExpr {
	Key: Expr
	Val: Expr
}
```
Key\-value expression pair model\.

## MapExpr
```jule
struct MapExpr {
	Kind:    &Map
	Entries: []&KeyValPairExpr
}
```
Map expression model\. For example; \{0: false, 1: true\}

## SlicingExpr
```jule
struct SlicingExpr {
	Token: &token::Token

	// Expression to slicing.
	Expr: &Value

	// Left index expression.
	// Zero integer if expression have not left index.
	Left: Expr

	// Right index expression.
	// Nil if expression have not right index.
	Right: Expr
}
```
Slicing expression model\. For example: mySlice\[2:len\(mySlice\)\-5\]

## TraitSubIdentExpr
```jule
struct TraitSubIdentExpr {
	Token:  &token::Token
	Expr:   Expr
	Method: &Func
	Trt:    &Trait
}
```
Trait sub\-ident expression model\. For example: myTrait\.subIdent

## StructSubIdentExpr
```jule
struct StructSubIdentExpr {
	Token:  &token::Token
	Expr:   &Value
	Method: &FuncIns
	Field:  &FieldIns
	Owner:  &StructIns
}
```
Structure sub\-ident expression model\. For example: myStruct\.subIdent

## StructStaticIdentExpr
```jule
struct StructStaticIdentExpr {
	Structure: &StructIns
	Expr:      Expr
	Method:    &FuncIns
}
```
Structure static ident expression model\. For example: MyStruct\.mySubIdent

## ArrayExpr
```jule
struct ArrayExpr {
	Kind:  &Array
	Elems: []&Value
}
```
Array expression model\. If array filled, elems field holds 2 data\. First data is expression, second is nil, kind of mark to that array filled\.

## TupleExpr
```jule
struct TupleExpr {
	Values: []&Value
}
```
Tuple expression model\.

## BuiltinPrintCallExpr
```jule
struct BuiltinPrintCallExpr {
	Expr: &Value
}
```
Expression Model: for built\-in print function calls\.

## BuiltinPrintlnCallExpr
```jule
struct BuiltinPrintlnCallExpr {
	Expr: &Value
}
```
Expression Model: for built\-in println function calls\.

## BuiltinNewCallExpr
```jule
struct BuiltinNewCallExpr {
	Type: &Type // Element type of smart pointer.
	Init: Expr  // Nil for not initialized.
}
```
Expression Model: for built\-in new function calls\.

## BuiltinPanicCallExpr
```jule
struct BuiltinPanicCallExpr {
	Token: &token::Token
	Expr:  Expr
}
```
Expression Model: for built\-in panic function calls\.

## ChanRecv
```jule
struct ChanRecv {
	Token: &token::Token
	Expr:  &Value
}
```
Expression model: for channel receive\.

## ChanSend
```jule
struct ChanSend {
	Token: &token::Token
	Chan:  &Value
	Data:  &Value
}
```
Expression mode: for channel send\.

## BuiltinCloseCallExpr
```jule
struct BuiltinCloseCallExpr {
	Token: &token::Token
	Chan:  &Value
}
```
Expression Model: for built\-in close function calls\.

## BuiltinMakeCallExpr
```jule
struct BuiltinMakeCallExpr {
	Type: &Type
	Len:  Expr
	Cap:  Expr
}
```
Expression Model: for built\-in make function calls\. If Type is slice, the Len and Cap fields may be meaningful\. If Type is channel, the buffer size specified in the Cap field if exist\. The Len field is undefined for channel types\.

## BuiltinAppendCallExpr
```jule
struct BuiltinAppendCallExpr {
	Dest:     Expr
	Elements: Expr
}
```
Expression Model: for built\-in append function calls\.

## BuiltinLenCallExpr
```jule
struct BuiltinLenCallExpr {
	Expr: &Value
}
```
Expression Model: for built\-in len function calls\.

## BuiltinCapCallExpr
```jule
struct BuiltinCapCallExpr {
	Expr: &Value
}
```
Expression Model: for built\-in cap function calls\.

## BuiltinDeleteCallExpr
```jule
struct BuiltinDeleteCallExpr {
	Dest: &Value
	Key:  &Value
}
```
Expression Model: for built\-in delete function calls\.

## BuiltinCopyCallExpr
```jule
struct BuiltinCopyCallExpr {
	Dest: &Value
	Src:  &Value
}
```
Expression Model: for built\-in copy function calls\.

## BuiltinErrorCallExpr
```jule
struct BuiltinErrorCallExpr {
	Func: &FuncIns
	Err:  &Value
}
```
Expression Model: for built\-in error function calls\.

## SizeofExpr
```jule
struct SizeofExpr {
	Expr: Expr
}
```
Expression Model: for sizeof expressions\. For example, in C\+\+: sizeof\(int\)

## AlignofExpr
```jule
struct AlignofExpr {
	Expr: Expr
}
```
Expression Model: for alignof expressions\. For example, in C\+\+: alignof\(int\)

## RuneExpr
```jule
struct RuneExpr {
	Code: rune
}
```
Rune literal expression model\. For example: &#39;a&#39;

## BackendEmitExpr
```jule
struct BackendEmitExpr {
	Code: str

	// Expression Model: for expression or type emit to backend from Jule source code.
	Exprs: []Expr
}
```
Expression Model: for inline code emit to backend\.

## FreeExpr
```jule
struct FreeExpr {
	Expr: Expr
}
```
Expression Model: for free calls\. Function provided by: &#34;std/mem&#34;

## SymTab
```jule
struct SymTab {
	File:        &token::Fileset // Owner fileset of this symbol table.
	Passes:      []Pass          // All passed flags with jule:pass directive.
	Imports:     []&ImportInfo   // Imported packages.
	Vars:        []&Var          // Variables.
	TypeAliases: []&TypeAlias    // Type aliases.
	Structs:     []&Struct       // Structures.
	Funcs:       []&Func         // Functions.
	Traits:      []&Trait        // Traits.
	Enums:       []&Enum         // Enums.
	TypeEnums:   []&TypeEnum     // Type enums.
	Impls:       []&Impl         // Implementations.
}
```
Symbol table\. Builds by semantic analyzer\.

### Implemented Traits

- `Lookup`

### SelectPackage
```jule
fn SelectPackage(mut self, selector: fn(&ImportInfo): bool): &ImportInfo
```
Returns imported package by selector\. Returns nil if selector returns false for all packages\. Returns nil if selector is nil\.

### FindVar
```jule
fn FindVar(mut self, ident: str, binded: bool): &Var
```
Returns variable by identifier and binded state\. Returns nil if refenrece not exist any variable in this identifier\.

### FindTypeAlias
```jule
fn FindTypeAlias(mut self, ident: str, binded: bool): &TypeAlias
```
Returns type alias by identifier and binded state\. Returns nil if not exist any type alias in this identifier\.

### FindStruct
```jule
fn FindStruct(mut self, ident: str, binded: bool): &Struct
```
Returns struct by identifier and binded state\. Returns nil if not exist any struct in this identifier\.

### FindFunc
```jule
fn FindFunc(mut self, ident: str, binded: bool): &Func
```
Returns function by identifier and binded state\. Returns nil if not exist any function in this identifier\.

### FindTrait
```jule
fn FindTrait(mut self, ident: str): &Trait
```
Returns trait by identifier\. Returns nil if not exist any trait in this identifier\.

### FindEnum
```jule
fn FindEnum(mut self, ident: str): &Enum
```
Returns enum by identifier\. Returns nil if not exist any enum in this identifier\.

### FindTypeEnum
```jule
fn FindTypeEnum(mut self, ident: str): &TypeEnum
```
Returns type enum by identifier\. Returns nil if not exist any type enum in this identifier\.

## Trait
```jule
struct Trait {
	Token:       &token::Token
	Ident:       str
	Public:      bool
	Inherits:    []&TypeSym
	Methods:     []&Func
	Implemented: []&Struct
}
```
Trait\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns Trait&#39;s identifier\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### FindMethod
```jule
fn FindMethod(mut self, ident: str): &Func
```
Returns method by identifier\. Returns nil if not exist any method in this identifier\.

## EnumItem
```jule
struct EnumItem {
	Token:    &token::Token
	Ident:    str
	ValueSym: &ValueSym
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
	Token:   &token::Token
	Public:  bool
	Ident:   str
	TypeSym: &TypeSym
	Items:   []&EnumItem
}
```
Enum\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns Enum&#39;s identifier\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### FindItem
```jule
fn FindItem(mut self, ident: str): &EnumItem
```
Returns item by identifier\. Returns nil if not exist any item in this identifier\.

## TypeEnumItem
```jule
struct TypeEnumItem {
	Token:   &token::Token
	Ident:   str
	TypeSym: &TypeSym
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
}
```
TypeEnum\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns TypeEnum&#39;s identifier\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### FindItem
```jule
fn FindItem(mut self, ident: str): &TypeEnumItem
```
Returns item by identifier\. Returns nil if not exist any item in this identifier\.

## Impl
```jule
struct Impl {
	// Equivalent to ast::Impl's base field.
	Base: &ast::Type

	// Equivalent to ast::Impl's dest field.
	Dest: &ast::Type

	// Equivalent to ast::Impl's methods field.
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

## Scope
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
Scope\.

## If
```jule
struct If {
	Expr:  Expr
	Scope: &Scope
}
```
Chain conditional node\.

## Else
```jule
struct Else {
	Scope: &Scope
}
```
Default scope of conditional chain\.

## Conditional
```jule
struct Conditional {
	Elifs:   []&If // First not is root condition.
	Default: &Else
}
```
Conditional chain\.

## InfIter
```jule
struct InfIter {
	Scope: &Scope // See developer reference (8).
}
```
Infinity iteration\.

## WhileIter
```jule
struct WhileIter {
	Scope: &Scope // See developer reference (8).
	Expr:  Expr   // Can be nil if iteration is while-next kind.
	Next:  Stmt   // Nil if iteration is not while-next kind.
}
```
While iteration\.

### IsWhileNext
```jule
fn IsWhileNext(self): bool
```
Reports whether iteration is while\-next kind\.

## RangeIter
```jule
struct RangeIter {
	Scope:     &Scope // See developer reference (8).
	Expr:      &Value
	ExprToken: &token::Token
	KeyA:      &Var
	KeyB:      &Var
}
```
Range iteration\.

## Continue
```jule
struct Continue {
	It: uintptr
}
```
Continue statement\.

## Break
```jule
struct Break {
	It:     uintptr
	Match:  uintptr
	Select: uintptr
}
```
Break statement\.

## Label
```jule
struct Label {
	Ident: str
	Scope: &Scope // Owner scope.
	Index: int    // Index of statement.
}
```
Label\.

## Goto
```jule
struct Goto {
	Ident: str
	Token: &token::Token
	Label: &Label
	Scope: &Scope // Owner scope.
	Index: int    // Index of statement.
}
```
Goto statement\.

## Postfix
```jule
struct Postfix {
	Expr: Expr
	Op:   str
}
```
Postfix assignment\.

## Assign
```jule
struct Assign {
	Left:  &OperandExpr
	Right: &OperandExpr
	Op:    &token::Token
}
```
Assignment\.

## MultiAssign
```jule
struct MultiAssign {
	Decls: []&Var
	Left:  []&Value // Nil Model:s represents ignored expressions.
	Right: Expr
	Op:    &token::Token
}
```
Multi\-declarative assignment\.

## Match
```jule
struct Match {
	Scope:     &Scope // Owner scope. See developer reference (8).
	Expr:      &Value
	TypeMatch: bool
	Comptime:  bool
	Cases:     []&Case
	Default:   &Case
}
```
Match\-Case\.

### IsGenericTypeMatch
```jule
fn IsGenericTypeMatch(self): bool
```
Reports whether match is type\-match for generic type\.

## Select
```jule
struct Select {
	Scope:   &Scope // Owner scope. See developer reference (8).
	Cases:   []&Case
	Default: &Case
}
```
Select\-Case\.

## Case
```jule
struct Case {
	Owner: CaseOwner
	Scope: &Scope
	Exprs: []&Value
	Next:  &Case
}
```
Match\-Case case\.

## Fall
```jule
struct Fall {
	DestCase: uintptr
}
```
Fall statement\.

## Ret
```jule
struct Ret {
	Func: &FuncIns
	Expr: Expr
}
```
Return statement\.

## RetType
```jule
struct RetType {
	TypeSym: &TypeSym
	Idents:  []&token::Token
}
```
Return type\.

## Param
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
	// Token of function declaration.
	// It may be nil if function is created by a deferred scope.
	Token: &token::Token

	Global:      bool
	Unsafety:    bool
	Public:      bool
	Binded:      bool
	Statically:  bool
	Exceptional: bool
	HasDefer:    bool // Whether function has at least one deferred scope.
	Ident:       str
	Directives:  []&ast::Directive

	// Scope is the scope of function, aka body.
	// If this function is created by a deferred scope, the Scope.Deferred will be true.
	// So it means this function is represents a deferred scope function.
	// It may be a closure.
	Scope: &ast::ScopeTree

	Generics: []&ast::Generic
	Result:   &RetType
	Params:   []&Param
	Owner:    &Struct

	// Function instances for each unique type combination of function call.
	// Nil if function is never used.
	Instances: []&FuncIns
	// NOTE: contains filtered hidden or unexported fields
}
```
Function\.

### IsVoid
```jule
fn IsVoid(self): bool
```
Reports whether return type is void\.

### IsMethod
```jule
fn IsMethod(self): bool
```
Reports whether function is method\.

### IsEntryPoint
```jule
fn IsEntryPoint(self): bool
```
Reports whether function is entry point\.

### IsInit
```jule
fn IsInit(self): bool
```
Reports whether function is initializer function\.

### IsAnon
```jule
fn IsAnon(self): bool
```
Reports whether function is anonymous function\.

### AnyVar
```jule
fn AnyVar(self): bool
```
Reports whether function has return variable\(s\)\.

## ParamIns
```jule
struct ParamIns {
	Decl: &Param
	Type: &Type
}
```
Parameter instance\.

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns ParamIns&#39;s type kind as string\.

## FuncIns
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
	AsAnon:   bool // Whether this function instance used as anonymous function.
	CalledCo: bool // Whether this function instance used for concurrent call.

	// NOTE: contains filtered hidden or unexported fields
}
```
Function instance\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Implement: Kind Returns function&#39;s type kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### EqualFunc
```jule
fn EqualFunc(&self, &f: &FuncIns, responsive: bool): bool
```
Reports whether functions are equal\. If the responsive is true, checks by responsiveness of functions\. See: https://manual\.jule\.dev/responsiveness/mutability

### Types
```jule
fn Types(mut self): []&Type
```
Returns all types of result\. Returns nil if result is nil\. Returns mutable slice if returns internal slice\.

### IsBuiltin
```jule
fn IsBuiltin(self): bool
```
Reports whether instance is built\-in\.

### IsAnon
```jule
fn IsAnon(self): bool
```
Reports whether instance is anonymous function\.

### Same
```jule
fn Same(self, f: &FuncIns): bool
```
Reports whether instances are same\. Returns true if declarations and generics are same\.

### GetKindStr
```jule
fn GetKindStr(self, ident: bool): str
```
Returns kind string of function instance\. Appends identifier to kind of this instance\. Does not appends identifier of this instance to kind if self\.Decl is nil\.

## ReferenceStack
```jule
struct ReferenceStack {
	// NOTE: contains filtered hidden or unexported fields
}
```
Stack for symbol references\. It used by Sema to store necessary references\.

List of necessary references;<br>

- &amp;FuncIns
- &amp;StructIns
- &amp;Trait
- &amp;Var \-&gt; Only global ones\.

### Len
```jule
fn Len(self): int
```
Returns count of references\.

### At
```jule
fn At(mut self, i: int): any
```
Returns reference by index\.

### Push
```jule
fn Push(mut self, mut ref: any)
```
Push new reference to stack\.

### Exist
```jule
fn Exist[T](self, t: T): bool
```
Reports whether reference is exist\.

## Pass
```jule
struct Pass {
	Token: &token::Token
	Text:  str
}
```
Directive pass\.

## ImportInfo
```jule
struct ImportInfo {
	// Declaration.
	Decl: &ast::Use

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
Import information\. Represents imported package by use declaration\.

### Implemented Traits

- `Lookup`

### SelectPackage
```jule
fn SelectPackage(mut self, fn(&ImportInfo): bool): &ImportInfo
```
Returns always nil\.

### FindVar
```jule
fn FindVar(mut self, ident: str, _: bool): &Var
```
Returns variable by identifier and binded state\. Returns nil if not exist any variable in this identifier\.

Lookups by import way such as identifier selection\. Just lookups non\-binded defines\.

### FindTypeAlias
```jule
fn FindTypeAlias(mut self, ident: str, _: bool): &TypeAlias
```
Returns type alias by identifier\. Returns nil if not exist any type alias in this identifier\.

Lookups by import way such as identifier selection\. Just lookups non\-binded defines\.

### FindStruct
```jule
fn FindStruct(mut self, ident: str, _: bool): &Struct
```
Returns struct by identifier and binded state\. Returns nil if not exist any struct in this identifier\.

Lookups by import way such as identifier selection\. Just lookups non\-binded defines\.

### FindFunc
```jule
fn FindFunc(mut self, ident: str, _: bool): &Func
```
Returns function by identifier and binded state\. Returns nil if not exist any function in this identifier\.

Lookups by import way such as identifier selection\. Just lookups non\-binded defines\.

### FindTrait
```jule
fn FindTrait(mut self, ident: str): &Trait
```
Returns trait by identifier\. Returns nil if not exist any trait in this identifier\.

Lookups by import way such as identifier selection\.

### FindEnum
```jule
fn FindEnum(mut self, ident: str): &Enum
```
Returns enum by identifier\. Returns nil if not exist any enum in this identifier\.

Lookups by import way such as identifier selection\.

### FindTypeEnum
```jule
fn FindTypeEnum(mut self, ident: str): &TypeEnum
```
Returns type enum by identifier\. Returns nil if not exist any type enum in this identifier\.

Lookups by import way such as identifier selection\.

## Package
```jule
struct Package {
	// Symbol table for each package's file.
	Files: []&SymTab
}
```
Package\.

### Implemented Traits

- `Lookup`

### SelectPackage
```jule
fn SelectPackage(mut self, fn(&ImportInfo): bool): &ImportInfo
```
Returns always nil\.

### FindVar
```jule
fn FindVar(mut self, ident: str, binded: bool): &Var
```
Returns variable by identifier and binded state\. Returns nil if not exist any variable in this identifier\.

### FindTypeAlias
```jule
fn FindTypeAlias(mut self, ident: str, binded: bool): &TypeAlias
```
Returns type alias by identifier and binded state\. Returns nil if not exist any type alias in this identifier\.

### FindStruct
```jule
fn FindStruct(mut self, ident: str, binded: bool): &Struct
```
Returns struct by identifier and binded state\. Returns nil if not exist any struct in this identifier\.

### FindFunc
```jule
fn FindFunc(mut self, ident: str, binded: bool): &Func
```
Returns function by identifier and binded state\. Returns nil if not exist any function in this identifier\.

### FindTrait
```jule
fn FindTrait(mut self, ident: str): &Trait
```
Returns trait by identifier\. Returns nil if not exist any trait in this identifier\.

### FindEnum
```jule
fn FindEnum(mut self, ident: str): &Enum
```
Returns enum by identifier\. Returns nil if not exist any enum in this identifier\.

### FindTypeEnum
```jule
fn FindTypeEnum(mut self, ident: str): &TypeEnum
```
Returns type enum by identifier\. Returns nil if not exist any type enum in this identifier\.

## Var
```jule
struct Var {
	Scope:      &Scope
	Token:      &token::Token
	Ident:      str
	Binded:     bool
	Constant:   bool
	Mutable:    bool
	Public:     bool
	Used:       bool
	Statically: bool
	Reference:  bool
	Checked:    bool
	TypeSym:    &TypeSym
	ValueSym:   &ValueSym
	Refers:     &ReferenceStack
	Directives: []&ast::Directive

	// The -2 means this variable is not one of the return variables.
	// The -1 means this variable is just the single return variable one.
	// The 0..n means this variable is the nth variable of the return variables.
	RetOrder: int = -2

	// This variable depended to these variables for initialization expression.
	// Nil if not global variable.
	Depends: []&Var
}
```
Variable\.

### IsInitialized
```jule
fn IsInitialized(self): bool
```
Reports whether variable is initialized explicitly\.

### IsTypeInferred
```jule
fn IsTypeInferred(self): bool
```
Reports whether variable is type inferred\.

## FuncPattern
```jule
struct FuncPattern{}
```
Pattern checker for functions and methods\.

### Str
```jule
static fn Str(f: &Func): bool
```
Reports whether function is the reserved Str function\.

## Value
```jule
struct Value {
	Type:      &Type
	Mutable:   bool
	Reference: bool
	Lvalue:    bool
	IsRune:    bool
	Model:     Expr

	// True if kind is declaration such as:
	//	- &Enum
	//	- &Struct
	//	- int type
	//	- bool type
	Decl: bool

	// Constant expression data.
	Constant: &constant::Const
	// NOTE: contains filtered hidden or unexported fields
}
```
Value\.

### IsNil
```jule
fn IsNil(self): bool
```
Reports whether Value is nil literal\.

### IsVoid
```jule
fn IsVoid(self): bool
```
Reports whether Value is void\.

### IsConst
```jule
fn IsConst(self): bool
```
Reports whether Value is constant expression\.

### GoodOperand
```jule
fn GoodOperand(self, mut &other: &Value): bool
```
See developer reference \(9\.2\)\. Reports left and right operand is good order\. If reports false, left and right operand should be swapped\. Accepts itself as left operand\.

## ValueSym
```jule
struct ValueSym {
	Expr:  &ast::Expr
	Value: &Value
}
```
Value\.

## InsGeneric
```jule
struct InsGeneric {
	Type:       &Type
	Constraint: []&Type
}
```
Generic type for instance types\.

## TypeAlias
```jule
struct TypeAlias {
	Scope:    &ast::ScopeTree
	Strict:   bool
	Public:   bool
	Binded:   bool
	Used:     bool
	Generic:  bool
	Token:    &token::Token
	Ident:    str
	TypeSym:  &TypeSym
	Generics: []&TypeAlias // See developer reference (1).
}
```
Type alias\.

## Type
```jule
struct Type {
	Generic:  bool
	Variadic: bool
	Kind:     Kind
}
```
Evaluated type declaration\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### Binded
```jule
fn Binded(self): bool
```
Reports whether type is binded kind\.

### IsNil
```jule
fn IsNil(self): bool
```
Reports whether kind is &#34;nil&#34;\.

### Void
```jule
fn Void(self): bool
```
Reports whether actual kind is &#34;void&#34;\.

### ActualKind
```jule
fn ActualKind(mut self): Kind
```
Returns actual kind of the type, so returns the root type\. If kind is a struct, which is implemented by the type statement, see developer reference \(9\) for details, returns the actual kind of the source type of the struct\.

### ActualEqual
```jule
fn ActualEqual(&self, other: &Type): bool
```
Reports whether actual kinds are equal\.

### Comparable
```jule
fn Comparable(self): bool
```
Reports whether actual kind is comparable\.

### Mutable
```jule
fn Mutable(self): bool
```
Reports whether actual kind is mutable\.

### Ordered
```jule
fn Ordered(self): bool
```
Reports whether actual kind supports ordered constraint\.

### NilCompatible
```jule
fn NilCompatible(self): bool
```
Reports whether actual kind is nil compatible\.

### GC
```jule
fn GC(self): bool
```
Reports whether actual kind performs garbage collection\.

### Variadicable
```jule
fn Variadicable(self): bool
```
Reports whether actual kind is variadicable\.

### Prim
```jule
fn Prim(mut self): &Prim
```
Returns primitive type if actual kind is primitive type, nil if not\.

### Chan
```jule
fn Chan(mut self): &Chan
```
Returns channel type if actual kind is channel, nil if not\.

### Sptr
```jule
fn Sptr(mut self): &Sptr
```
Returns reference type if actual kind is smart pointer, nil if not\.

### Ptr
```jule
fn Ptr(mut self): &Ptr
```
Returns pointer type if actual kind is pointer, nil if not\.

### Enum
```jule
fn Enum(mut self): &Enum
```
Returns enum type if actual kind is enum, nil if not\.

### TypeEnum
```jule
fn TypeEnum(mut self): &TypeEnum
```
Returns type enum if actual kind is type enum, nil if not\.

### Array
```jule
fn Array(mut self): &Array
```
Returns array type if actual kind is array, nil if not\.

### Slice
```jule
fn Slice(mut self): &Slice
```
Returns slice type if actual kind is slice, nil if not\.

### Func
```jule
fn Func(mut self): &FuncIns
```
Returns function type if actual kind is function, nil if not\.

### Struct
```jule
fn Struct(mut self): &StructIns
```
Returns struct type if actual kind is structure, nil if not\.

### Trait
```jule
fn Trait(mut self): &Trait
```
Returns trait type if actual kind is trait, nil if not\.

### Map
```jule
fn Map(mut self): &Map
```
Returns map type if actual kind is map, nil if not\.

### Tuple
```jule
fn Tuple(mut self): &Tuple
```
Returns tuple type if actual kind is tuple, nil if not\.

## TypeSym
```jule
struct TypeSym {
	Decl: &ast::Type // Never changed by semantic analyzer.
	Type: &Type
}
```
Type\.

## Prim
```jule
struct Prim {
	Kind: str
}
```
Primitive type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns kind\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### IsConstraint
```jule
fn IsConstraint(self): bool
```
Reports whether type is built\-in constraint\.

### IsI8
```jule
fn IsI8(self): bool
```
Reports whether type is primitive i8\.

### IsI16
```jule
fn IsI16(self): bool
```
Reports whether type is primitive i16\.

### IsI32
```jule
fn IsI32(self): bool
```
Reports whether type is primitive i32\.

### IsI64
```jule
fn IsI64(self): bool
```
Reports whether type is primitive i64\.

### IsU8
```jule
fn IsU8(self): bool
```
Reports whether type is primitive u8\.

### IsU16
```jule
fn IsU16(self): bool
```
Reports whether type is primitive u16\.

### IsU32
```jule
fn IsU32(self): bool
```
Reports whether type is primitive u32\.

### IsU64
```jule
fn IsU64(self): bool
```
Reports whether type is primitive u64\.

### IsF32
```jule
fn IsF32(self): bool
```
Reports whether type is primitive f32\.

### IsF64
```jule
fn IsF64(self): bool
```
Reports whether type is primitive f64\.

### IsInt
```jule
fn IsInt(self): bool
```
Reports whether type is primitive int\.

### IsUint
```jule
fn IsUint(self): bool
```
Reports whether type is primitive uint\.

### IsUintptr
```jule
fn IsUintptr(self): bool
```
Reports whether type is primitive uintptr\.

### IsBool
```jule
fn IsBool(self): bool
```
Reports whether type is primitive bool\.

### IsStr
```jule
fn IsStr(self): bool
```
Reports whether type is primitive str\.

### IsAny
```jule
fn IsAny(self): bool
```
Reports whether type is primitive any\.

## Chan
```jule
struct Chan {
	Recv: bool
	Send: bool
	Elem: &Type
}
```
Channel type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns smart pointer kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Sptr
```jule
struct Sptr {
	Elem: &Type
}
```
Smart pointer\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns smart pointer kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Slice
```jule
struct Slice {
	Elem: &Type
}
```
Slice type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns slice kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Tuple
```jule
struct Tuple {
	Types: []&Type
}
```
Tuple type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns tuple kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Map
```jule
struct Map {
	Key: &Type
	Val: &Type
}
```
Map type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns map kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Array
```jule
struct Array {
	Auto: bool // Auto-sized array.
	N:    int
	Elem: &Type
}
```
Array type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns array kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

## Ptr
```jule
struct Ptr {
	Elem: &Type
}
```
Pointer type\.

### Implemented Traits

- `Kind`

### Str
```jule
fn Str(self): str
```
Returns pointer kind as string\.

### Equal
```jule
fn Equal(&self, other: &Type): bool
```
Reports whether types are same\.

### IsUnsafe
```jule
fn IsUnsafe(self): bool
```
Reports whether pointer is unsafe pointer \(\*unsafe\)\.

## Expr
```jule
enum Expr: type {
	&Type,
	&constant::Const,
	&Var,
	&FuncIns,
	&StructIns,
	&OperandExpr,
	&BinaryExpr,
	&UnaryExpr,
	&StructArgExpr,
	&StructLitExpr,
	&AllocStructLitExpr,
	&CastingExpr,
	&FuncCallExpr,
	&SliceExpr,
	&IndexingExpr,
	&AnonFuncExpr,
	&KeyValPairExpr,
	&MapExpr,
	&SlicingExpr,
	&TraitSubIdentExpr,
	&StructSubIdentExpr,
	&StructStaticIdentExpr,
	&ArrayExpr,
	&TupleExpr,
	&BuiltinPrintCallExpr,
	&BuiltinPrintlnCallExpr,
	&BuiltinNewCallExpr,
	&BuiltinPanicCallExpr,
	&BuiltinMakeCallExpr,
	&BuiltinAppendCallExpr,
	&BuiltinCopyCallExpr,
	&BuiltinLenCallExpr,
	&BuiltinCapCallExpr,
	&BuiltinDeleteCallExpr,
	&BuiltinErrorCallExpr,
	&SizeofExpr,
	&AlignofExpr,
	&RuneExpr,
	&BackendEmitExpr,
	&FreeExpr,
	&ChanRecv,
	&ChanSend,
	&BuiltinCloseCallExpr,
}
```
Expression model\.

## Stmt
```jule
enum Stmt: type {
	&Scope,
	&Var,
	&Value,
	&Conditional,
	&InfIter,
	&WhileIter,
	&RangeIter,
	&Continue,
	&Label,
	&Goto,
	&Postfix,
	&Assign,
	&MultiAssign,
	&Match,
	&Fall,
	&Break,
	&Ret,
	&Select,
}
```
Statement type\.

## CaseOwner
```jule
enum CaseOwner: type {
	&Match,
	&Select,
}
```
Valid owner types for Case\.

## Flag
```jule
enum Flag {
	Default: 0,        // Default semantic analysis of Jule.
	Shadowing: 1 << 0, // Default + enable shadowing.
}
```
Flags for semantic analysis\.