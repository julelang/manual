# std/jule/token

## Index

[Variables](#variables)\
[fn IsUnaryOp(id: Id): bool](#isunaryop)\
[fn IsBinOp(id: Id): bool](#isbinop)\
[fn IsWeakOp(id: Id): bool](#isweakop)\
[fn IsStr(k: str): bool](#isstr)\
[fn IsRawStr(k: str): bool](#israwstr)\
[fn IsRune(k: str): bool](#isrune)\
[fn IsNil(k: str): bool](#isnil)\
[fn IsBool(k: str): bool](#isbool)\
[fn IsFloat(k: str): bool](#isfloat)\
[fn IsNum(k: str): bool](#isnum)\
[fn IsLit(k: str): bool](#islit)\
[fn IsIgnoreIdent(ident: str): bool](#isignoreident)\
[fn IsAnonIdent(ident: str): bool](#isanonident)\
[fn IsPunct(r: rune): bool](#ispunct)\
[fn IsSpace(r: rune): bool](#isspace)\
[fn IsLetter(r: rune): bool](#isletter)\
[fn IsIdentRune(s: str): bool](#isidentrune)\
[fn IsKeyword(s: str): bool](#iskeyword)\
[fn IsDecimal(r: rune): bool](#isdecimal)\
[fn IsBinary(r: rune): bool](#isbinary)\
[fn IsOctal(r: rune): bool](#isoctal)\
[fn IsHex(r: rune): bool](#ishex)\
[fn IsAssign(id: Id): bool](#isassign)\
[fn IsPostfixOp(id: Id): bool](#ispostfixop)\
[fn IsAssignOp(id: Id): bool](#isassignop)\
[fn Lex(mut f: &amp;Fileset, mode: LexMode): \[\]build::Log](#lex)\
[struct Token](#token)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Prec(self): byte](#prec)\
[struct Fileset](#fileset)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New(path: str): &amp;Fileset](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fill(mut self, data: \[\]byte)](#fill)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn FillMut(mut self, mut data: \[\]byte)](#fillmut)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dir(self): str](#dir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name(self): str](#name)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Addr(self): uintptr](#addr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetRow(self, row: int): str](#getrow)\
[enum Ident](#ident)\
[enum Id](#id)\
[enum Kind](#kind)\
[enum LexMode](#lexmode)

## Variables

```jule
static Puncts: [...]rune = [ ... ]
```
Punctuations.

---

```jule
static Spaces: [...]rune = [ ... ]
```
Space characters.

---

```jule
static UnaryOps: [...]Id = [ ... ]
```
Kind list of unary operators.

---

```jule
static BinOps: [...]Id = [ ... ]
```
Kind list of binary operators.

---

```jule
static WeakOps: [...]Id = [ ... ]
```
Kind list of weak operators. These operators are weak, can used as part of expression.

---

```jule
static PostfixOps: [...]Id = [ ... ]
```
List of postfix operators.

---

```jule
static AssignOps: [...]Id = [ ... ]
```
List of assign operators.

## IsUnaryOp
```jule
fn IsUnaryOp(id: Id): bool
```
Reports whether kind is unary operator.

## IsBinOp
```jule
fn IsBinOp(id: Id): bool
```
Reports whether kind is binary operator.

## IsWeakOp
```jule
fn IsWeakOp(id: Id): bool
```
Reports whether kind is weak operator.

## IsStr
```jule
fn IsStr(k: str): bool
```
Reports whether kind is string literal.

## IsRawStr
```jule
fn IsRawStr(k: str): bool
```
Reports whether kind is raw string literal.

## IsRune
```jule
fn IsRune(k: str): bool
```
Reports whether kind is rune literal. Literal value can be byte or rune.

## IsNil
```jule
fn IsNil(k: str): bool
```
Reports whether kind is nil literal.

## IsBool
```jule
fn IsBool(k: str): bool
```
Reports whether kind is boolean literal.

## IsFloat
```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float.

## IsNum
```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric.

## IsLit
```jule
fn IsLit(k: str): bool
```
Reports whether kind is literal.

## IsIgnoreIdent
```jule
fn IsIgnoreIdent(ident: str): bool
```
Reports whether identifier is ignore.

## IsAnonIdent
```jule
fn IsAnonIdent(ident: str): bool
```
Reports whether identifier is anonymous.

## IsPunct
```jule
fn IsPunct(r: rune): bool
```
Reports whether rune is punctuation.

## IsSpace
```jule
fn IsSpace(r: rune): bool
```
Reports whether byte is whitespace.

## IsLetter
```jule
fn IsLetter(r: rune): bool
```
Reports whether rune is letter.

## IsIdentRune
```jule
fn IsIdentRune(s: str): bool
```
Reports whether first rune of string is allowed to first rune for identifier.

## IsKeyword
```jule
fn IsKeyword(s: str): bool
```
Reports whether s is keyword.

## IsDecimal
```jule
fn IsDecimal(r: rune): bool
```
Reports whether byte is decimal sequence.

## IsBinary
```jule
fn IsBinary(r: rune): bool
```
Reports whether byte is binary sequence.

## IsOctal
```jule
fn IsOctal(r: rune): bool
```
Reports whether rune is octal sequence.

## IsHex
```jule
fn IsHex(r: rune): bool
```
Reports whether rune is hexadecimal sequence.

## IsAssign
```jule
fn IsAssign(id: Id): bool
```
Reports given token id is allow for assignment left-expression or not.

## IsPostfixOp
```jule
fn IsPostfixOp(id: Id): bool
```
Reports whether operator kind is postfix operator.

## IsAssignOp
```jule
fn IsAssignOp(id: Id): bool
```
Reports whether operator kind is assignment operator.

## Lex
```jule
fn Lex(mut f: &Fileset, mode: LexMode): []build::Log
```
Lex source code into fileset. Returns nil if f == nil. Returns nil slice for errors if no any error.

## Token
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

### Prec
```jule
fn Prec(self): byte
```
Returns operator precedence of token. Returns 0 if token is not operator or invalid operator for operator precedence.

Accepts assignment tokens (like equals \[=\]) as precedenced operator to handle expression assignments.

## Fileset
```jule
struct Fileset {
	Path:   str
	Tokens: []&Token
	// NOTE: contains filtered hidden or unexported fields
}
```
Fileset for lexing.

### New
```jule
static fn New(path: str): &Fileset
```
Returns new Fileset with path.

### Fill
```jule
fn Fill(mut self, data: []byte)
```
Fills data. Not uses mutable copy of data, allocates new copy.

### FillMut
```jule
unsafe fn FillMut(mut self, mut data: []byte)
```
Fills data. Uses mutable copy of data, not allocated new copy. But it is unsafe, because any mutation on the data may cause inconsistent results. However, it is efficient way to use already allocated data.

### Dir
```jule
fn Dir(self): str
```
Returns directory of file&#39;s path.

### Name
```jule
fn Name(self): str
```
Returns filename.

### Addr
```jule
fn Addr(self): uintptr
```
Returns self as uintptr.

### GetRow
```jule
fn GetRow(self, row: int): str
```
Returns line (not include new-line char) by row. Returns empty string if line is not buffer.

## Ident
```jule
enum Ident: str {
	Ignore: "_",         // Ignore
	Anon: "<anonymous>", // Anonymous
}
```
Special identifiers.

## Id
```jule
enum Id: uint {
	NA,
	Ident,
	Ret,
	Semicolon,
	Lit,
	Comma,
	Const,
	Type,
	Colon,
	For,
	Break,
	Cont,
	In,
	If,
	Else,
	Comment,
	Use,
	Dot,
	Goto,
	DblColon,
	Enum,
	Struct,
	Co,
	Match,
	Self,
	Trait,
	Impl,
	Chan,
	Cpp,
	Fall,
	Fn,
	Let,
	Unsafe,
	Mut,
	Defer,
	Static,
	Hash,
	Error,
	Map,
	ColonEq,
	TripleDot,
	PlusEq,
	MinusEq,
	StarEq,
	SolidusEq,
	PercentEq,
	ShlEq,
	ShrEq,
	CaretEq,
	AmperEq,
	VlineEq,
	Eqs,
	NotEq,
	GtEq,
	LtEq,
	DblAmper,
	DblVline,
	Shl,
	Shr,
	DblPlus,
	DblMinus,
	Plus,
	Minus,
	Star,
	Solidus,
	Percent,
	Amper,
	Vline,
	Caret,
	Excl,
	Lt,
	Gt,
	Eq,
	LBrace,
	RBrace,
	LParent,
	RParent,
	LBracket,
	RBracket,
	RArrow,
	Select,
}
```
Token identities.

## Kind
```jule
enum Kind: str {
	DblColon: "::",
	Colon: ":",
	Semicolon: ";",
	Comma: ",",
	TripleDot: "...",
	Dot: ".",
	PlusEq: "+=",
	MinusEq: "-=",
	StarEq: "*=",
	SolidusEq: "/=",
	PercentEq: "%=",
	ShlEq: "<<=",
	ShrEq: ">>=",
	CaretEq: "^=",
	AmperEq: "&=",
	VlineEq: "|=",
	Eqs: "==",
	NotEq: "!=",
	GtEq: ">=",
	LtEq: "<=",
	DblAmper: "&&",
	DblVline: "||",
	Shl: "<<",
	Shr: ">>",
	DblPlus: "++",
	DblMinus: "--",
	Plus: "+",
	Minus: "-",
	Star: "*",
	Solidus: "/",
	Percent: "%",
	Amper: "&",
	Vline: "|",
	Caret: "^",
	Excl: "!",
	Lt: "<",
	Gt: ">",
	Eq: "=",
	ColonEq: ":=",
	RArrow: "<-",
	LnComment: "//",
	RangLComment: "/*",
	RangRComment: "*/",
	LParent: "(",
	RParent: ")",
	LBracket: "[",
	RBracket: "]",
	LBrace: "{",
	RBrace: "}",
	Hash: "#",
	Const: "const",
	Ret: "ret",
	Type: "type",
	For: "for",
	Break: "break",
	Cont: "continue",
	In: "in",
	If: "if",
	Else: "else",
	Use: "use",
	Goto: "goto",
	Enum: "enum",
	Struct: "struct",
	Co: "co",
	Match: "match",
	Self: "self",
	Trait: "trait",
	Impl: "impl",
	Chan: "chan",
	Cpp: "cpp",
	Fall: "fall",
	Fn: "fn",
	Let: "let",
	Unsafe: "unsafe",
	Mut: "mut",
	Defer: "defer",
	Static: "static",
	Error: "error",
	Map: "map",
	Select: "select",
}
```
Token kinds.

## LexMode
```jule
enum LexMode {
	Standard: 0 << 0, // Standard mode.
	Comment: 1 << 0,  // Standard mode + comments.
}
```
Lexer mode.