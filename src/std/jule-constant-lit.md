# std/jule/constant/lit

## Index

[fn IsAscii\(r: rune\): bool](#isascii)\
[fn ToRune\(mut lit: str\): \(&lt;anonymous&gt;: rune, errors: \[\]Error\)](#torune)\
[fn GetRune\(mut lit: str\): \(r: rune, length: int, errors: \[\]Error\)](#getrune)\
[fn ToRawStr\(lit: str\): str](#torawstr)\
[fn ToStr\(mut lit: str\): \(&lt;anonymous&gt;: str, errors: \[\]Error\)](#tostr)\
[struct Error](#error)



## IsAscii
```jule
fn IsAscii(r: rune): bool
```
Reports whether rune is byte actually\. In other words, whether rune is ASCII\.

## ToRune
```jule
fn ToRune(mut lit: str): (<anonymous>: rune, errors: []Error)
```
Returns rune from literal, literal includes quotes\. Allows escape sequences\. Assumes lit is syntactically correct\.

## GetRune
```jule
fn GetRune(mut lit: str): (r: rune, length: int, errors: []Error)
```
Returns the first rune from ltieral\. Quotes of the literal must be removed\. Allows escape sequences\. Checks the literal syntactically and semantically for the first rune\.

## ToRawStr
```jule
fn ToRawStr(lit: str): str
```
Returns raw\-string value string from literal, literal includes quotes\. Assumes lit is syntactically correct\.

## ToStr
```jule
fn ToStr(mut lit: str): (<anonymous>: str, errors: []Error)
```
Returns string value string from literal, literal includes quotes\. Allows escape sequences\. Assumes lit is syntactically correct\.

## Error
```jule
struct Error {
	Offset: int
	Text:   str
}
```
An error for literal parsing\.