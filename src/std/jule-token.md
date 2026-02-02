# std/jule/token

## Index

[Variables](#variables)\
[fn ScanAll\(mut f: &amp;FileSet, opt: int\): \[\]log::Log](#scanall)\
[fn IsKeyword\(s: str\): bool](#iskeyword)\
[fn IsPostfix\(id: int\): bool](#ispostfix)\
[fn IsAssign\(id: int\): bool](#isassign)\
[struct FileSet](#fileset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(path: str\): &amp;FileSet](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fill\(mut \*self, data: \[\]byte\)](#fill)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FillMut\(mut \*self, mut data: \[\]byte\)](#fillmut)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dir\(\*self\): str](#dir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name\(\*self\): str](#name)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Addr\(\*self\): uintptr](#addr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GetRow\(\*self, row: int\): str](#getrow)\
[struct Scanner](#scanner)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(mut f: &amp;FileSet, opt: int\): &amp;Scanner](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scan\(mut \*self\): \(token: &amp;Token, EOF: bool\)](#scan)\
[struct Token](#token)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Precedence\(\*self\): int](#precedence)

## Variables

```jule
const (
	Standard = 1 << iota // Standard mode.
	Comments             // Standard mode + comments.
)
```
Lexer mode\.

---

```jule
const (
	ILLEGAL = iota // illegal token

	SEMICOLON // ;
	COMMA     // ,
	COLON     // :
	PERIOD    // .
	SEP       // ::
	HASH      // #
	ELLIPSIS  // ...
	QMARK     // ?
	TILDE     // ~

	COMMENT // /*..*/ or //...
	NAME    // identifier

	FLOAT // floating-point literal
	INT   // integer literal
	STR   // string literal
	RUNE  // rune literal
	IMAG  // imaginary part literal

	RET      // ret
	CONST    // const
	TYPE     // type
	FOR      // for
	BREAK    // break
	CONTINUE // continue
	IN       // int
	IF       // if
	ELSE     // else
	USE      // use
	GOTO     // goto
	ENUM     // enum
	STRUCT   // struct
	CO       // co
	MATCH    // match
	SELF     // self
	TRAIT    // trait
	IMPL     // impl
	CHAN     // chan
	EXTERN   // extern
	FALL     // fall
	FN       // fn
	LET      // let
	UNSAFE   // unsafe
	MUT      // mut
	DEFER    // defer
	ERROR    // error
	MAP      // map
	SELECT   // select
	ASYNC    // async
	AWAIT    // await

	EQL  // ==
	NEQ  // !=
	GEQ  // >=
	LEQ  // <=
	LAND // &&
	LOR  // ||

	SHL   // <<
	SHR   // >>
	INC   // ++
	DEC   // --
	ADD   // +
	SUB   // -
	MUL   // *
	QUO   // /
	REM   // %
	AND   // &
	OR    // |
	XOR   // ^
	NOT   // !
	LSS   // <
	GTR   // >
	ARROW // <-

	ASSIGN     // =
	DEFINE     // :=
	ADD_ASSIGN // +=
	SUB_ASSIGN // -=
	MUL_ASSIGN // *=
	QUO_ASSIGN // /=
	REM_ASSIGN // %=
	SHL_ASSIGN // <<=
	SHR_ASSIGN // >>=
	XOR_ASSIGN // ^=
	AND_ASSIGN // &=
	OR_ASSIGN  // |=

	LPAREN // (
	LBRACK // [
	LBRACE // {
	RPAREN // )
	RBRACK // ]
	RBRACE // }
)
```
Token identities\.

---

```jule
const (
	LowestPrec  = 0 // non-operators
	UnaryPrec   = 6
	HighestPrec = 7
)
```
A set of constants for precedence\-based expression parsing\. Non\-operators have lowest precedence, followed by operators starting with precedence 1 up to unary operators\. The highest precedence serves as &#34;catch\-all&#34; precedence for selector, indexing, and other operator and delimiter tokens\.

## ScanAll
```jule
fn ScanAll(mut f: &FileSet, opt: int): []log::Log
```
Scans all tokens into FileSet f and returns error logs\.

## IsKeyword
```jule
fn IsKeyword(s: str): bool
```
Reports whether s is keyword\.

## IsPostfix
```jule
fn IsPostfix(id: int): bool
```
Reports whether operator kind is postfix operator\.

## IsAssign
```jule
fn IsAssign(id: int): bool
```
Reports whether operator kind is assignment operator\.

## FileSet
```jule
struct FileSet {
	Path:   str
	Tokens: []&Token
	// NOTE: contains filtered hidden or unexported fields
}
```
Fileset for the lexer\.

### New
```jule
fn New(path: str): &FileSet
```
Returns new FileSet with path\.

### Fill
```jule
fn Fill(mut *self, data: []byte)
```
Fills data\. Not uses mutable copy of data, allocates new copy\.

### FillMut
```jule
unsafe fn FillMut(mut *self, mut data: []byte)
```
Fills data\. Uses mutable copy of data, not allocated new copy\. But it is unsafe, because any mutation on the data may cause inconsistent results\. However, it is efficient way to use already allocated data\.

### Dir
```jule
fn Dir(*self): str
```
Returns directory of file&#39;s path\.

### Name
```jule
fn Name(*self): str
```
Returns filename\.

### Addr
```jule
fn Addr(*self): uintptr
```
Returns self as uintptr\.

### GetRow
```jule
fn GetRow(*self, row: int): str
```
Returns line \(not include new\-line char\) by row\. Returns empty string if line is not buffer\.

## Scanner
```jule
struct Scanner {
	Logs: []log::Log // Scan logs.
	// NOTE: contains filtered hidden or unexported fields
}
```
Scanner scans tokens from FileSet data\. Any log will be appended to \[Scanner\.Logs\]\.

### New
```jule
fn New(mut f: &FileSet, opt: int): &Scanner
```
Returns new Scanner for the FileSet f\.

### Scan
```jule
fn Scan(mut *self): (token: &Token, EOF: bool)
```
Scans and returns new token, reports if EOF\. If and error appeared, returns nil token and not\-EOF\.

## Token
```jule
struct Token {
	ID:     int      // Identity of token.
	File:   &FileSet // Associated FileSet where token appear.
	Row:    int      // Row position of token.
	Column: int      // Column position of token.
	Kind:   str      // Token kind as string.
}
```
Token\.

### Precedence
```jule
fn Precedence(*self): int
```
Returns operator precedence of token\. Returns 0 if token is not operator or invalid operator for operator precedence\. It only reports for the binary operators, otherwise returns LowestPrec\.