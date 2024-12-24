# std/jule/build

## Globals

### `const Api: str`
Directory name of JuleC++ API.

---

### `const Stdlib: str`
Directory name of standard library.

---

### `static mut OS: str`
Target operating system.\
Setted to runtime operating system by default.

---

### `static mut Arch: str`
Target architecture.\
Setted to runtime architecture by default.

---

### `static CppHeaderExts: [...]str`
Valid extensions of C++ headers.

---

### `static CppExts: [...]str`
Valid extensions of C++ source files. 

---

### `static ObjectiveCppExts: [...]str`
Valid extensions of Objective-C++ source files.

---

### `const DirectivePrefix: str`
Prefix of directive comments.

---

### `static PathStdlib: str`
Path of standard library.
::: warning
Initialized by initializer function.
:::

---

### `static PathExec: str`
Path of executable file's directory.
::: warning
Initialized by initializer function.
:::

---

### `static PathWd: str`
Path of working directory.
::: warning
Initialized by initializer function.
:::

---

### `static PathApi: str`
Path of main API header file.
::: warning
Initialized by initializer function.
:::

## Functions

`fn IsTopDirective(directive: str): bool`\
Reports whether directive is top-directive.

---

`fn IsStdHeaderPath(p: str): bool`\
Reports whether path is C++ std library path.

---

`fn IsValidCppExt(p: str): bool`\
Reports whether C++ extension is valid.

---

`fn IsValidHeaderExt(ext: str): bool`\
Reports whether C++ header extension is valid.

---

`fn IsJule(path: str): bool`\
Reports whether file path is Jule source code.

---

`fn Logf(key: str, args: ...any): str`\
Returns formatted error message by fmt and args.

---

`fn IsWindows(os: str): bool`\
Reports whether os is windows.

---

`fn IsDarwin(os: str): bool`\
Reports whether os is darwin.

---

`fn IsLinux(os: str): bool`\
Reports whether os is linux.

---

`fn IsI386(arch: str): bool`\
Reports whether architecture is intel 386.

---

`fn IsAmd64(arch: str): bool`\
Reports whether architecture is amd64.

---

`fn IsArm64(arch: str): bool`\
Reports whether architecture is arm64.

---

`fn IsUnix(os: str): bool`\
Reports whether os is unix.

---

`fn Is32Bit(arch: str): bool`\
Reports whether architecture is 32-bit.

---

`fn Is64Bit(arch: str): bool`\
Reports whether architecture is 64-bit.

## Structs
```jule
struct Log {
    Kind:       LogKind
    Row:        int
    Column:     int
    Path:       str
    Text:       str
    Line:       str
    Suggestion: str
}
```
Compiler log.

---

## Enums
`enum Directive: str`

Compiler directives.

**Fields:**
- `Cdef`
- `Typedef`
- `Derive`
- `Pass`
- `Build`
- `Namespace`
- `Deprecated`
- `Export`

---

`enum DistOS: str`

Operating Systems for file annotation kind.

**Fields:**
- `Windows`
- `Linux`
- `Darwin`
- `Unix`

---

`enum DistArch: str`

Architectures for file annotation kind.

**Fields:**
- `I386`
- `Arm64`
- `Amd64`
- `X32`
- `X64`

---

`enum LogKind`

Log kinds.

**Fields:**
- `Flat`: Just text.
- `Error`: Error message.

---

```jule
enum LogMsg
```
Compiler log messages with formatting.

**Fields:**
- `Empty`
- `StdlibNotExist`
- `FileNotUseable`
- `FileNotJule`
- `NoEntryPoint`
- `DuplicatedIdent`
- `ExtraClosedParent`
- `ExtraClosedBrace`
- `ExtraClosedBracket`
- `WaitCloseParent`
- `WaitCloseBrace`
- `WaitCloseBracket`
- `ExpectedParentClose`
- `ExpectedBraceClose`
- `ExpectedBracketClose`
- `BodyNotExist`
- `OperatorOverflow`
- `IncompatibleTypes`
- `OperatorNotForJuleType`
- `OperatorNotForFloat`
- `OperatorNotForInt`
- `OperatorNotForUint`
- `IdentNotExist`
- `NotFnCall`
- `ArgumentOverflow`
- `FnHaveRet`
- `FnHaveParameters`
- `FnIsUnsafe`
- `RequireRetExpr`
- `VoidFnRetExpr`
- `BitShiftMustUnsigned`
- `LogicalNotBool`
- `AssignConst`
- `AssignRequireLvalue`
- `AssignTypeNotSupportValue`
- `InvalidToken`
- `InvalidSyntax`
- `InvalidType`
- `InvalidNumericRange`
- `InvalidExprForUnary `
- `InvalidEscapeSeq`
- `InvalidTypeSource`
- `InvalidTypeForConst`
- `InvalidExpr`
- `InvalidCppExt`
- `InvalidLabel`
- `InvalidExprForTypeInference`
- `MissingValueForTypeInference`
- `MissingType`
- `MissingExpr`
- `MissingBlockCommentClose`
- `MissingRuneEnd`
- `MissingRet`
- `MissingStrEnd`
- `MissingMultiRet`
- `MissingMultiAssignIdents`
- `MissingUsePath`
- `MissingGotoLabel`
- `MissingExprFor`
- `MissingGenerics`
- `MissingReceiver`
- `MissingFnParentheses`
- `ExprNotConst`
- `NilForTypeInference`
- `VoidForTypeInference`
- `RuneEmpty`
- `RuneOverflow`
- `NotSupportsIndexing`
- `NotSupportsSlicing`
- `AlreadyConst`
- `AlreadyVariadic`
- `AlreadyReference`
- `StaticReference`
- `DuplicateUseDecl`
- `IgnoreIdent`
- `OverflowMultiAssignIdents`
- `OverflowRet`
- `BreakAtOutOfValidScope`
- `ContinueAtOutOfValidScope`
- `IterWhileRequireBoolExpr`
- `IterRangeRequireEnumerableExpr`
- `MuchRangeVars`
- `IfRequireBoolExpr`
- `ElseHaveExpr`
- `VariadicParamNotLast`
- `VariadicWithNonVariadicable`
- `MoreArgsWithVariadiced`
- `VariadicReference`
- `TypeNotSupportsCasting`
- `TypeNotSupportsCastingTo`
- `UseAtContent`
- `UseNotFound`
- `DefNotSupportPub`
- `ObjNotSupportSubFields`
- `ObjHaveNotIdent`
- `TypeNotSupportSubFields`
- `TypeHaveNotIdent`
- `DeclaredButNotUsed`
- `ExprNotFnCall`
- `LabelExist`
- `LabelNotExist`
- `GotoJumpsDeclarations`
- `FnNotHasParam`
- `AlreadyHasExpr`
- `ArgMustTargetToField`
- `OverflowLimits`
- `GenericsOverflow`
- `HasGenerics`
- `NotHasGenerics`
- `TypeNotSupportsGenerics`
- `DivByZero`
- `TraitHaveNotIdent`
- `NotImplTraitDef`
- `DynamicTypeAnnotationFailed`
- `FallthroughWrongUse`
- `FallthroughIntoFinalCase`
- `UnsafeBehaviorAtOutOfUnsafeScope`
- `RefMethodUsedWithNotRefInstance`
- `MethodAsAnonFn`
- `CppFnAsAnonFn`
- `GenericedFnAsAnonFn`
- `IllegalCycleRefersItself`
- `IllegalCrossCycle`
- `AssignToNonMut`
- `AssignNonMutToMut`
- `RetWithMutTypedNonMut`
- `MutOperationOnImmut`
- `TraitHasRefParamFn`
- `EnumHaveNotField`
- `DuplicateMatchType`
- `BindedVarHasExpr`
- `BindedVarIsConst`
- `ConstVarNotHaveExpr`
- `RefRefsRef`
- `RefRefsPtr`
- `RefRefsArr`
- `RefRefsEnum`
- `PtrPointsRef`
- `PtrPointsEnum`
- `MissingExprForUnary`
- `InvalidOpForUnary`
- `UseDeclAtBody`
- `ArrayAutoSized`
- `NamespaceNotExist`
- `ImplInvalidBase`
- `ImplInvalidDest`
- `StructAlreadyHaveIdent`
- `UnsafePtrIndexing`
- `MethodHasGenericWithSameIdent`
- `TupleAssignToSingle`
- `MissingCompilePath`
- `ArraySizeIsNotInt`
- `ArraySizeIsNeg`
- `BuiltinAsNonFn`
- `TypeCaseHasNotValidExpr`
- `IllegalImplOutOfPackage`
- `MethodNotInvoked`
- `DuplicatedUseSelection`
- `IdentIsNotAccessible`
- `InvalidStmtForNext`
- `ModuloWithNotInt`
- `PkgIllegalCycleRefersItself`
- `PkgIllegalCrossCycle`
- `RefersTo`
- `NoFileInEntryPackage`
- `NoMemberInEnum`
- `InternalTypeNotSupportsClone`
- `InvalidExprForBinary`
- `TraitMethodHasGenerics`
- `EnumAsMapVal`
- `GlobalNotStatic`
- `StaticNotHaveExpr`
- `StaticFnHasReceiver`
- `RefAssignNonVar`
- `MutRefPointsImmut`
- `RefNotInited`
- `ConstRef`
- `ConcurrentCallWithRefParam`
- `ConcurrentCallWithSelfParam`
- `UsedRefInAnonFnFromParentScope`
- `TypeEnumCastedFromAny`
- `DuplicatedUseAlias`
- `BuiltinUsedForRef`
- `DefaultNotLast`
- `TraitImplHasStatic`
- `IncompatibleTypeForPtrArithmetic`
- `ComptimePanic`
- `InvalidTypeForIndexing`
- `UnusedDirective`
- `UnsupportedDirective`
- `ErrorWithNonExceptional`
- `BindedExceptional`
- `HandledUnexceptional`
- `UnhandledExceptional`
- `MissingAssignRet`
- `CoForExceptional`
- `TypeCallWithExceptional`
- `RetInDeferred`
- `ErrorInDeferred`
- `NilError`
- `UseExprOutOfScope`
- `UseExprInDeferred`
- `UseExprNotLast`
- `ExceptionalEntryPoint`
- `ExceptionalInit`
- `AutoSizedArrFilled`
- `AssignInExpr`
- `UsingDeprecated`
- `TraitImplDeprecated`
- `UseDeclForInternal`
- `BindedTypeNotAllowed`
- `GenericsNotAllowed`
- `InitiationCycle`
- `DeclFoundInsteadExpr`
- `CallingNonFn`
- `StructureLitWithPrivFields`
- `AnyWithTypeEnum`
- `ConstraintFailed`
- `SelectedImportExistInPackage`
- `CoForCastingCall`
- `TypeIsNotComparable`
- `AmperOpForEnum`
- `MissingArgs`
- `InheritedNonTrait`
- `IncompatibleInherit`
- `ArraySizeOverflow`
- `InvalidTypeForTypeOf`
- `ComptimeAsExpr`
- `InvalidTypeForFn`
- `ComptimeFallthrough`
- `SelectFallthrough`
- `CannotBeMut`
- `AnonFn`
- `CopyWithMutableData`
- `CalledOutOfScope`
- `BlankIdentInUseDecl`
- `ComptimeExprForRuntimeIteration`
- `InvalidTypeForComptimeIter`
- `InvalidComptimeIter`
- `NotEnoughVariablesForRet`
- `TooManyVariablesForRet`
- `ExportedUsedAsAnonymous`
- `InvalidImportPath`
- `AutoAliasFail`
- `ExprNotChan`
- `ImmutDataSendViaMutChan`
- `CloseRecvOnlyChan`
- `SendToRecvOnlyChan`
- `RecvFromSendOnlyChan`
- `InvalidSelectExpr`
- `ExpectedNExpr`
- `IterPermitsNVar`

- `ExpectedIdentifier`
- `ExpectedLabelIdent`
- `ExpectedDotForCpp`
- `ExpectedDblColon`
- `EmptyParentNotValid`
- `GiveExprToCast`
- `GiveTypeForCast`
- `ExpectedExpr`
- `ExpectedAnonFn`
- `ExpectedLeftOperand`
- `ExpectedRightOperand`
- `ExpectedColon`
- `ExpectedBody`
- `ExpectedType`
- `ExpectedPlainUseDecl`
- `DeclareComptimeForeach`
- `MoveUseDeclToTopOfFile`
- `RenameForAvoidDuplication`
- `RemoveUseDeclAvoidDuplication`
- `RenameUseAliasAvoidDuplication`
- `RemoveUseSelectionAvoidDupliation`
- `RemoveConstToAssign`
- `UseStaticKeywordToDef`
- `RemoveFallthroughFromFinalCase`
- `MakePubToAccess`
- `ExpressionMustBeReferenceType`
- `TryFloatingPoint`
- `ExpectedColonForAssign`
- `DeclareExceptional`
- `HandleExceptional`
- `HandleInFn`
- `JustIgnoreOrHandle`
- `UseImperative`
- `UseUnsafeForDeprecated`
- `ExpectedStruct`
- `ExpectedTrait`
- `UseTypeMatch`
- `WrapExceptional`
- `UseFieldPairToInstantiate`
- `InstantiateGenericFnToUseAsAnon`
- `UseUnsafeJuleToCallCo`
- `UseUnsafeJuleToCallCoSelf`
- `DefineZeroDefaultToUseAmper`
- `InvalidExprForConstMatch`
- `GiveAnAliasManually`
- `CastingBindedTypesRequiresUnsafeJule`
- `RArrowOpExpectsChan`