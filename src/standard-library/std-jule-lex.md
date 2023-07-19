# std::jule:lex

## Globals
### `let PUNCTS: []rune`
Punctuations.

---

### `let SPACES: []rune`
Space characters.

---

### `let UNARY_OPS: []TokenKind`
Kind list of unary operators.

---

### `let BIN_OPS: []TokenKind`
Kind list of binary operators.

---

### `let WEAK_OPS: []TokenKind`
Kind list of weak operators.\
These operators are weak, can used as part of expression.

---

### `let POSTFIX_OPS: []TokenKind`
List of postfix operators.

---

### `let ASSIGN_OPS: []TokenKind`
List of assign operators.

## Functions
```
fn lex(mut f: &File, text: []byte): bool
```
Lex source code into fileset.\
Returns nil if `!real(f)`.\
Returns nil slice for errors if no any error.

---

```
fn new_file_set(path: str): &File
```
Returns new File points to Jule file.

---

```
fn is_unary_op(kind: str): bool
```
Reports whether kind is unary operator.

---

```
fn is_bin_op(kind: str): bool
```
Reports whether kind is binary operator.

---

```
fn is_weak_op(kind: str): bool
```
Reports whether kind is weak operator.

---

```
fn is_str(k: str): bool
```
Reports whether kind is string literal.

---

```
fn is_raw_str(k: str): bool
```
Reports whether kind is raw string literal.

---

```
fn is_rune(k: str): bool
```
Reports whether kind is rune literal.
Literal value can be byte or rune.

---

```
fn is_nil(k: str): bool
```
Reports whether kind is nil literal.

---

```
fn is_bool(k: str): bool
```
Reports whether kind is boolean literal.

---

```
fn is_float(k: str): bool
```
Reports whether kind is float.

---

```
fn is_num(k: str): bool
```
Reports whether kind is numeric.

---

```
fn is_lit(k: str): bool
```
Reports whether kind is literal.

---

```
fn is_ignore_ident(ident: str): bool
```
Reports whether identifier is ignore.

---

```
fn is_anon_ident(ident: str): bool
```
Reports whether identifier is anonymous.

---

```
fn is_punct(r: rune): bool
```
Reports whether rune is punctuation.

---

```
fn is_space(r: rune): bool
```
Reports wheter byte is whitespace.

---

```
fn is_letter(r: rune): bool
```
Reports whether rune is letter.

---

```
fn is_ident_rune(s: str): bool
```
Reports whether firs rune of string is allowed to first rune for identifier.

---

```
fn is_decimal(b: byte): bool
```
Reports whether byte is decimal sequence.

---

```
fn is_binary(b: byte): bool
```
Reports whether byte is binary sequence.

---

```
fn is_octal(b: byte): bool
```
Reports whether byte is octal sequence.

---

```
fn is_hex(b: byte): bool
```
Reports whether byte is hexadecimal sequence.

## Structs
```
struct File
```
Fileset for lexing.

**Methods:**

`fn is_ok(self): bool`\
Reports whether file path is exist and accessible.

`fn path(self): str`\
Returns path.

`fn dir(self): str`\
Returns directory of file's path.

`fn name(self): str`\
Returns filename.

`fn addr(self): uintptr`\
Returns self as uintptr.

`fn tokens(mut self): Vector[Token]`\
Returns tokens of file.\
Tokens are mutable.

---

```
struct Token {
    file:   &File
    row:    int
    column: int
    kind:   str
    id:     TokenId
}
```
Token is lexer token.

**Methods:**

`fn prec(self): int`\
Returns operator precedence of token.\
Returns `-1` if token is not operator or\
invalid operator for operator precedence.

`fn path(self): str`\
Returns path.

`fn dir(self): str`\
Returns directory of file's path.

`fn name(self): str`\
Returns filename.

`fn addr(self): uintptr`\
Returns self as uintptr.

`fn tokens(mut self): []Token`\
Returns tokens of file.\
Tokens are mutable. 

## Enums
`enum Idenet: str`

Special identifiers.

**Fields:**
- Ignore: Ignore
- Anon: Anonymous

---

`enum TokenId: uint`

Token identities.

**Fields:**
- `Na`
- `Prim`
- `Ident`
- `Range`
- `Ret`
- `Semicolon`
- `Lit`
- `Op`
- `Comma`
- `Const`
- `Type`
- `Colon`
- `Iter`
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
- `LshiftEq`
- `RshiftEq`
- `CaretEq`
- `AmperEq`
- `VlineEq`
- `Eqs`
- `NotEq`
- `GreatEq`
- `LessEq`
- `DblAmper`
- `DblVline`
- `Lshift`
- `Rshift`
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
- `LnComment`
- `RangLComment`
- `RangRComment`
- `LParent`
- `RParent`
- `LBracket`
- `RBracket`
- `LBrace`
- `RBrace`
- `I8`
- `I16`
- `I32`
- `I64`
- `U8`
- `U16`
- `U32`
- `U64`
- `Uint`
- `Int`
- `Uintptr`
- `Bool`
- `Str`
- `Any`
- `True`
- `False`
- `Nil`
- `Const`
- `Ret`
- `Type`
- `Iter`
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
