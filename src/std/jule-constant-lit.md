# std/jule/constant/lit

## Index

[fn IsAscii(r: rune): bool](#isascii)\
[fn ToRune(mut lit: str): (rune, errors: \[\]Error)](#torune)\
[fn ToRawStr(lit: str): str](#torawstr)\
[fn ToStr(mut lit: str): (str, errors: \[\]Error)](#tostr)\
[struct Error](#error)



## IsAscii
```jule
fn IsAscii(r: rune): bool
```
Reports whether rune is byte actually. In other words, whether rune is ASCII.

## ToRune
```jule
fn ToRune(mut lit: str): (rune, errors: []Error)
```
Returns rune value string from literal, includes quotes. Bytes are represents rune literal, allows escape sequences. Returns zero rune if len(lit) == 0. Assumes lit is syntaticaly and semantically correct.

## ToRawStr
```jule
fn ToRawStr(lit: str): str
```
Returns raw-string value string from literal, includes quotes. Bytes are represents string characters. Returns empty string if len(lit) == 0. Assumes lit is syntaticaly and semantically correct.

## ToStr
```jule
fn ToStr(mut lit: str): (str, errors: []Error)
```
Returns string value string from literal, includes quotes. Bytes are represents string characters, allows escape sequences. Returns empty string if len(lit) == 0. Assumes lit is syntaticaly and semantically correct.

## Error
```jule
struct Error {
	Offset: int
	Text:   str
}
```
An error for literal parsing.