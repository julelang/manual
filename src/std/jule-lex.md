# std::jule:lex

## Globals
### `static Puncts: [...]rune`
Punctuations.

---

### `static Spaces: [...]rune`
Space characters.

---

### `static UnaryOps: [...]TokenId`
Kind list of unary operators.

---

### `static BinOps: [...]TokenId`
Kind list of binary operators.

---

### `static WeakOps: [...]TokenId`
Kind list of weak operators.\
These operators are weak, can used as part of expression.

---

### `static PostfixOps: [...]TokenId`
List of postfix operators.

---

### `static AssignOps: [...]TokenId`
List of assign operators.

## Functions
```jule
fn Lex(mut f: &File, text: []byte): bool
```
Lex source code into fileset.\
Returns nil if `f == nil`.\
Returns nil slice for errors if no any error.

---

```jule
fn NewFileSet(path: str): &File
```
Returns new File points to Jule file.

---

```jule
fn IsUnaryOp(id: TokenId): bool
```
Reports whether kind is unary operator.

---

```jule
fn IsBinOp(id: TokenId): bool
```
Reports whether kind is binary operator.

---

```jule
fn IsWeakOp(id: TokenId): bool
```
Reports whether kind is weak operator.

---

```jule
fn IsAssign(id: TokenId): bool
```
Reports given token id is allow for assignment left-expression or not.

---

```jule
fn IsAssignOp(id: TokenId): bool
```
Reports whether operator kind is assignment operator.

---

```jule
fn IsPostfixOp(id: TokenId): bool
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
fn IsDecimal(b: byte): bool
```
Reports whether byte is decimal sequence.

---

```jule
fn IsBinary(b: byte): bool
```
Reports whether byte is binary sequence.

---

```jule
fn IsOctal(b: byte): bool
```
Reports whether byte is octal sequence.

---

```jule
fn IsHex(b: byte): bool
```
Reports whether byte is hexadecimal sequence.

## Structs
```jule
struct File {
    Path:   str
    Data:   []byte
    Tokens: []&Token
}
```
Fileset for lexing.

**Methods:**

`fn Dir(self): str`\
Returns directory of file's path.

`fn Name(self): str`\
Returns filename.

`fn Addr(self): uintptr`\
Returns self as uintptr.

`fn Fill(mut self, mut data: []byte)`\
Fill data.

`fn GetRow(self, row: int): str`\
Return line (not include new-line char) by row. \
Returns empty string if line is not exist in buffer.

---

```jule
struct Token {
    File:   &File
    Row:    int
    Column: int
    Kind:   str
    Id:     TokenId
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

`enum TokenId: uint`

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

`enum TokenKind: str`

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