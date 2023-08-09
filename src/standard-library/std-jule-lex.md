# std::jule:lex

## Globals
### `static PUNCTS: [...]rune`
Punctuations.

---

### `static SPACES: [...]rune`
Space characters.

---

### `static UNARY_OPS: [...]TokenKind`
Kind list of unary operators.

---

### `static BIN_OPS: [...]TokenKind`
Kind list of binary operators.

---

### `static WEAK_OPS: [...]TokenKind`
Kind list of weak operators.\
These operators are weak, can used as part of expression.

---

### `static POSTFIX_OPS: [...]TokenKind`
List of postfix operators.

---

### `static ASSIGN_OPS: [...]TokenKind`
List of assign operators.

## Functions
```jule
fn lex(mut f: &File, text: []byte): bool
```
Lex source code into fileset.\
Returns nil if `!real(f)`.\
Returns nil slice for errors if no any error.

---

```jule
fn new_file_set(path: str): &File
```
Returns new File points to Jule file.

---

```jule
fn is_unary_op(kind: str): bool
```
Reports whether kind is unary operator.

---

```jule
fn is_bin_op(kind: str): bool
```
Reports whether kind is binary operator.

---

```jule
fn is_weak_op(kind: str): bool
```
Reports whether kind is weak operator.

---

```jule
fn is_str(k: str): bool
```
Reports whether kind is string literal.

---

```jule
fn is_raw_str(k: str): bool
```
Reports whether kind is raw string literal.

---

```jule
fn is_rune(k: str): bool
```
Reports whether kind is rune literal.
Literal value can be byte or rune.

---

```jule
fn is_nil(k: str): bool
```
Reports whether kind is nil literal.

---

```jule
fn is_bool(k: str): bool
```
Reports whether kind is boolean literal.

---

```jule
fn is_float(k: str): bool
```
Reports whether kind is float.

---

```jule
fn is_num(k: str): bool
```
Reports whether kind is numeric.

---

```jule
fn is_lit(k: str): bool
```
Reports whether kind is literal.

---

```jule
fn is_ignore_ident(ident: str): bool
```
Reports whether identifier is ignore.

---

```jule
fn is_anon_ident(ident: str): bool
```
Reports whether identifier is anonymous.

---

```jule
fn is_punct(r: rune): bool
```
Reports whether rune is punctuation.

---

```jule
fn is_space(r: rune): bool
```
Reports wheter byte is whitespace.

---

```jule
fn is_letter(r: rune): bool
```
Reports whether rune is letter.

---

```jule
fn is_ident_rune(s: str): bool
```
Reports whether firs rune of string is allowed to first rune for identifier.

---

```jule
fn is_decimal(b: byte): bool
```
Reports whether byte is decimal sequence.

---

```jule
fn is_binary(b: byte): bool
```
Reports whether byte is binary sequence.

---

```jule
fn is_octal(b: byte): bool
```
Reports whether byte is octal sequence.

---

```jule
fn is_hex(b: byte): bool
```
Reports whether byte is hexadecimal sequence.

## Structs
```jule
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

```jule
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
