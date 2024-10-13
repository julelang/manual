# std/jule/token

## Globals
### `static Puncts: [...]rune`
Punctuations.

---

### `static Spaces: [...]rune`
Space characters.

---

### `static UnaryOps: [...]Id`
Kind list of unary operators.

---

### `static BinOps: [...]Id`
Kind list of binary operators.

---

### `static WeakOps: [...]Id`
Kind list of weak operators.\
These operators are weak, can used as part of expression.

---

### `static PostfixOps: [...]Id`
List of postfix operators.

---

### `static AssignOps: [...]Id`
List of assign operators.

## Functions
```jule
fn Lex(mut f: &Fileset, mode: LexMode): []build::Log
```
Lex source code into fileset.\
Returns nil if `f == nil`.\
Returns nil slice for errors if no any error.

---

```jule
fn IsUnaryOp(id: Id): bool
```
Reports whether kind is unary operator.

---

```jule
fn IsBinOp(id: Id): bool
```
Reports whether kind is binary operator.

---

```jule
fn IsWeakOp(id: Id): bool
```
Reports whether kind is weak operator.

---

```jule
fn IsAssign(id: Id): bool
```
Reports given token id is allow for assignment left-expression or not.

---

```jule
fn IsAssignOp(id: Id): bool
```
Reports whether operator kind is assignment operator.

---

```jule
fn IsPostfixOp(id: Id): bool
```
Reports whether operator kind is postfix operator.

---

```jule
fn IsStr(k: str): bool
```
Reports whether kind is string literal.

---

```jule
fn IsRawStr(k: str): bool
```
Reports whether kind is raw string literal.

---

```jule
fn IsRune(k: str): bool
```
Reports whether kind is rune literal.
Literal value can be byte or rune.

---

```jule
fn IsNil(k: str): bool
```
Reports whether kind is nil literal.

---

```jule
fn IsBool(k: str): bool
```
Reports whether kind is boolean literal.

---

```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float.

---

```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric.

---

```jule
fn IsLit(k: str): bool
```
Reports whether kind is literal.

---

```jule
fn IsIgnoreIdent(ident: str): bool
```
Reports whether identifier is ignore.

---

```jule
fn IsAnonIdent(ident: str): bool
```
Reports whether identifier is anonymous.

---

```jule
fn IsPunct(r: rune): bool
```
Reports whether rune is punctuation.

---

```jule
fn IsSpace(r: rune): bool
```
Reports wheter byte is whitespace.

---

```jule
fn IsLetter(r: rune): bool
```
Reports whether rune is letter.

---

```jule
fn IsIdentRune(s: str): bool
```
Reports whether firs rune of string is allowed to first rune for identifier.

---

```jule
fn IsDecimal(r: rune): bool
```
Reports whether rune is decimal sequence.

---

```jule
fn IsKeyword(s: str): bool
```
Reports whether s is keyword.

---

```jule
fn IsBinary(r: rune): bool
```
Reports whether rune is binary sequence.

---

```jule
fn IsOctal(r: rune): bool
```
Reports whether rune is octal sequence.

---

```jule
fn IsHex(r: rune): bool
```
Reports whether rune is hexadecimal sequence.

## Structs
```jule
struct Fileset {
    Path:   str
    Tokens: []&token::Token
}
```
Fileset for lexing.

**Methods:**

`static fn New(path: str): &Fileset`\
Returns new Fileset with path.

`fn Dir(self): str`\
Returns directory of file's path.

`fn Name(self): str`\
Returns filename.

`fn Addr(self): uintptr`\
Returns self as uintptr.

`fn Fill(mut self, data: []byte)`\
Fills data.
Not uses mutable copy of data, allocates new copy.

`unsafe fn FillMut(mut self, mut data: []byte)`\
Fills data.
Uses mutable copy of data, not allocated new copy. But it is unsafe, because any mutation on the data may cause inconsistent results. However, it is efficient way to use already allocated datas.

`fn GetRow(self, row: int): str`\
Return line (not include new-line char) by row. \
Returns empty string if line is not exist in buffer.

---

```jule
struct Token {
    File:   &Fileset
    Row:    int
    Column: int
    Kind:   str
    Id:     Id
}
```
Token is lexer token.

**Methods:**

`fn Prec(self): byte`\
Returns operator precedence of token.\
Returns `0` if token is not operator or\
invalid operator for operator precedence.

Accepts assignment tokens (like equals [=]) as precedenced operator to handle expression assignments.

`fn Path(self): str`\
Returns path.

`fn Dir(self): str`\
Returns directory of file's path.

`fn Name(self): str`\
Returns filename.

`fn Addr(self): uintptr`\
Returns self as uintptr.

## Enums
`enum LexMode`

Lexer mode.

**Fields:**
- `Standard`: Standard mode.
- `Comment`: Standard mode + comments.

---

`enum Idenet: str`

Special identifiers.

**Fields:**
- `Ignore`: Ignore
- `Anon`: Anonymous

---

`enum Id: uint`

Token identities.

**Fields:**
- `Na`
- `Ident`
- `Ret`
- `Semicolon`
- `Lit`
- `Comma`
- `Const`
- `Type`
- `Colon`
- `For`
- `Break`
- `Cont`
- `In`
- `If`
- `Else`
- `Comment`
- `Use`
- `Dot`
- `Pub`
- `Goto`
- `DblColon`
- `Enum`
- `Struct`
- `Co`
- `Match`
- `Self`
- `Trait`
- `Impl`
- `Cpp`
- `Fall`
- `Fn`
- `Let`
- `Unsafe`
- `Mut`
- `Defer`
- `Static`
- `Error`
- `Map`
- `ColonEq`
- `TripleDot`
- `PlusEq`
- `MinusEq`
- `StarEq`
- `SolidusEq`
- `PercentEq`
- `ShlEq`
- `ShrEq`
- `CaretEq`
- `AmperEq`
- `VlineEq`
- `Eqs`
- `NotEq`
- `GtEq`
- `LtEq`
- `DblAmper`
- `DblVline`
- `Shl`
- `Shr`
- `DblPlus`
- `DblMinus`
- `Plus`
- `Minus`
- `Star`
- `Solidus`
- `Percent`
- `Amper`
- `Vline`
- `Caret`
- `Excl`
- `Lt`
- `Gt`
- `Eq`
- `LBrace`
- `RBrace`
- `LParent`
- `RParent`
- `LBracket`
- `RBracket`

---

`enum Kind: str`

Token kinds.

**Fields:**
- `DblColon`
- `Colon`
- `Semicolon`
- `Comma`
- `TripleDot`
- `Dot`
- `PlusEq`
- `MinusEq`
- `StarEq`
- `SolidusEq`
- `PercentEq`
- `ShlEq`
- `ShrEq`
- `CaretEq`
- `AmperEq`
- `VlineEq`
- `Eqs`
- `NotEq`
- `GtEq`
- `LtEq`
- `DblAmper`
- `DblVline`
- `Shl`
- `Shr`
- `DblPlus`
- `DblMinus`
- `Plus`
- `Minus`
- `Star`
- `Solidus`
- `Percent`
- `Amper`
- `Vline`
- `Caret`
- `Excl`
- `Lt`
- `Gt`
- `Eq`
- `ColonEq`
- `LnComment`
- `RangLComment`
- `RangRComment`
- `LParent`
- `RParent`
- `LBracket`
- `RBracket`
- `LBrace`
- `RBrace`
- `Const`
- `Ret`
- `Type`
- `For`
- `Break`
- `Cont`
- `In`
- `If`
- `Else`
- `Use`
- `Pub`
- `Goto`
- `Enum`
- `Struct`
- `Co`
- `Match`
- `Self`
- `Trait`
- `Impl`
- `Cpp`
- `Fall`
- `Fn`
- `Let`
- `Unsafe`
- `Mut`
- `Defer`
- `Static`
- `Hash`
- `Error`