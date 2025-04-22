# std/jule/token

## Index

[Variables](#variables)\
[fn IsUnaryOp\(id: int\): bool](#isunaryop)\
[fn IsBinOp\(id: int\): bool](#isbinop)\
[fn IsWeakOp\(id: int\): bool](#isweakop)\
[fn IsStr\(k: str\): bool](#isstr)\
[fn IsRawStr\(k: str\): bool](#israwstr)\
[fn IsRune\(k: str\): bool](#isrune)\
[fn IsNil\(k: str\): bool](#isnil)\
[fn IsBool\(k: str\): bool](#isbool)\
[fn IsFloat\(k: str\): bool](#isfloat)\
[fn IsNum\(k: str\): bool](#isnum)\
[fn IsLit\(k: str\): bool](#islit)\
[fn IsPunct\(r: rune\): bool](#ispunct)\
[fn IsSpace\(r: rune\): bool](#isspace)\
[fn IsLetter\(r: rune\): bool](#isletter)\
[fn IsNameRune\(s: str\): bool](#isnamerune)\
[fn IsKeyword\(s: str\): bool](#iskeyword)\
[fn IsDecimal\(r: rune\): bool](#isdecimal)\
[fn IsBinary\(r: rune\): bool](#isbinary)\
[fn IsOctal\(r: rune\): bool](#isoctal)\
[fn IsHex\(r: rune\): bool](#ishex)\
[fn IsAssign\(id: int\): bool](#isassign)\
[fn IsPostfixOp\(id: int\): bool](#ispostfixop)\
[fn IsAssignOp\(id: int\): bool](#isassignop)\
[fn Lex\(mut f: &amp;Fileset, mode: int\): \[\]log::Log](#lex)\
[struct Token](#token)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Prec\(self\): byte](#prec)\
[struct Fileset](#fileset)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New\(path: str\): &amp;Fileset](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fill\(mut self, data: \[\]byte\)](#fill)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn FillMut\(mut self, mut data: \[\]byte\)](#fillmut)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dir\(self\): str](#dir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name\(self\): str](#name)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Addr\(self\): uintptr](#addr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetRow\(self, row: int\): str](#getrow)

## Variables

```jule
static Puncts: [...]rune = [ ... ]
```
Punctuations\.

---

```jule
static Spaces: [...]rune = [ ... ]
```
Space characters\.

---

```jule
static UnaryOps: [...]int = [ ... ]
```
Kind list of unary operators\.

---

```jule
static BinOps: [...]int = [ ... ]
```
Kind list of binary operators\.

---

```jule
static WeakOps: [...]int = [ ... ]
```
Kind list of weak operators\. These operators are weak, can used as part of expression\.

---

```jule
static PostfixOps: [...]int = [ ... ]
```
List of postfix operators\.

---

```jule
static AssignOps: [...]int = [ ... ]
```
List of assign operators\.

---

```jule
const (
	Illegal = iota
	Name
	Ret
	Semicolon
	Lit
	Comma
	Const
	Type
	Colon
	For
	Break
	Cont
	In
	If
	Else
	Comment
	Use
	Dot
	Goto
	DblColon
	Enum
	Struct
	Co
	Match
	Self
	Trait
	Impl
	Chan
	Cpp
	Fall
	Fn
	Let
	Unsafe
	Mut
	Defer
	Static
	Hash
	Error
	Map
	ColonEq
	TripleDot
	PlusEq
	MinusEq
	StarEq
	SolidusEq
	PercentEq
	ShlEq
	ShrEq
	CaretEq
	AmperEq
	VlineEq
	DblEq
	NotEq
	GtEq
	LtEq
	DblAmper
	DblVline
	Shl
	Shr
	DblPlus
	DblMinus
	Plus
	Minus
	Star
	Solidus
	Percent
	Amper
	Vline
	Caret
	Excl
	Lt
	Gt
	Eq
	LBrace
	RBrace
	LParent
	RParent
	LBracket
	RBracket
	RArrow
	Select
)
```
Token identities\.

---

```jule
const (
	Standard = 1 << iota // Standard mode.
	Comments             // Standard mode + comments.
)
```
Lexer mode\.

## IsUnaryOp
```jule
fn IsUnaryOp(id: int): bool
```
Reports whether kind is unary operator\.

## IsBinOp
```jule
fn IsBinOp(id: int): bool
```
Reports whether kind is binary operator\.

## IsWeakOp
```jule
fn IsWeakOp(id: int): bool
```
Reports whether kind is weak operator\.

## IsStr
```jule
fn IsStr(k: str): bool
```
Reports whether kind is string literal\.

## IsRawStr
```jule
fn IsRawStr(k: str): bool
```
Reports whether kind is raw string literal\.

## IsRune
```jule
fn IsRune(k: str): bool
```
Reports whether kind is rune literal\. Literal value can be byte or rune\.

## IsNil
```jule
fn IsNil(k: str): bool
```
Reports whether kind is nil literal\.

## IsBool
```jule
fn IsBool(k: str): bool
```
Reports whether kind is boolean literal\.

## IsFloat
```jule
fn IsFloat(k: str): bool
```
Reports whether kind is float\.

## IsNum
```jule
fn IsNum(k: str): bool
```
Reports whether kind is numeric\.

## IsLit
```jule
fn IsLit(k: str): bool
```
Reports whether kind is literal\.

## IsPunct
```jule
fn IsPunct(r: rune): bool
```
Reports whether rune is punctuation\.

## IsSpace
```jule
fn IsSpace(r: rune): bool
```
Reports whether rune is whitespace\.

## IsLetter
```jule
fn IsLetter(r: rune): bool
```
Reports whether rune is letter\.

## IsNameRune
```jule
fn IsNameRune(s: str): bool
```
Reports whether first rune of string is allowed to first rune for identifier\.

## IsKeyword
```jule
fn IsKeyword(s: str): bool
```
Reports whether s is keyword\.

## IsDecimal
```jule
fn IsDecimal(r: rune): bool
```
Reports whether rune is decimal sequence\.

## IsBinary
```jule
fn IsBinary(r: rune): bool
```
Reports whether rune is binary sequence\.

## IsOctal
```jule
fn IsOctal(r: rune): bool
```
Reports whether rune is octal sequence\.

## IsHex
```jule
fn IsHex(r: rune): bool
```
Reports whether rune is hexadecimal sequence\.

## IsAssign
```jule
fn IsAssign(id: int): bool
```
Reports given token id is allow for assignment left\-expression or not\.

## IsPostfixOp
```jule
fn IsPostfixOp(id: int): bool
```
Reports whether operator kind is postfix operator\.

## IsAssignOp
```jule
fn IsAssignOp(id: int): bool
```
Reports whether operator kind is assignment operator\.

## Lex
```jule
fn Lex(mut f: &Fileset, mode: int): []log::Log
```
Lex source code into fileset\. Returns nil if f == nil\. Returns nil slice for errors if no any error\.

## Token
```jule
struct Token {
	File:   &Fileset
	Row:    int
	Column: int
	Kind:   str
	Id:     int
}
```
Token is lexer token\.

### Prec
```jule
fn Prec(self): byte
```
Returns operator precedence of token\. Returns 0 if token is not operator or invalid operator for operator precedence\.

Accepts assignment tokens \(like equals \[=\]\) as precedenced operator to handle expression assignments\.

## Fileset
```jule
struct Fileset {
	Path:   str
	Tokens: []&Token
	// NOTE: contains filtered hidden or unexported fields
}
```
Fileset for lexing\.

### New
```jule
static fn New(path: str): &Fileset
```
Returns new Fileset with path\.

### Fill
```jule
fn Fill(mut self, data: []byte)
```
Fills data\. Not uses mutable copy of data, allocates new copy\.

### FillMut
```jule
unsafe fn FillMut(mut self, mut data: []byte)
```
Fills data\. Uses mutable copy of data, not allocated new copy\. But it is unsafe, because any mutation on the data may cause inconsistent results\. However, it is efficient way to use already allocated data\.

### Dir
```jule
fn Dir(self): str
```
Returns directory of file&#39;s path\.

### Name
```jule
fn Name(self): str
```
Returns filename\.

### Addr
```jule
fn Addr(self): uintptr
```
Returns self as uintptr\.

### GetRow
```jule
fn GetRow(self, row: int): str
```
Returns line \(not include new\-line char\) by row\. Returns empty string if line is not buffer\.