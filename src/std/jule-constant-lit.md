# std/jule/constant/lit

## Index

[fn IsAscii\(r: rune\): bool](#isascii)\
[fn ToRune\(mut lit: string\): \(rune, errors: \[\]Error\)](#torune)\
[fn GetRune\(mut lit: string\): \(r: rune, length: int, errors: \[\]Error\)](#getrune)\
[fn ToRawString\(lit: string\): string](#torawstring)\
[fn ToString\(mut lit: string\): \(string, errors: \[\]Error\)](#tostring)\
[struct Error](#error)



## IsAscii
```jule
fn IsAscii(r: rune): bool
```
Reports whether rune is byte actually\. In other words, whether rune is ASCII\.

## ToRune
```jule
fn ToRune(mut lit: string): (rune, errors: []Error)
```
Returns rune from literal, literal includes quotes\. Allows escape sequences\. Assumes lit is syntactically correct\.

## GetRune
```jule
fn GetRune(mut lit: string): (r: rune, length: int, errors: []Error)
```
Returns the first rune from ltieral\. Quotes of the literal must be removed\. Allows escape sequences\. Checks the literal syntactically and semantically for the first rune\.

## ToRawString
```jule
fn ToRawString(lit: string): string
```
Returns raw\-string value string from literal, literal includes quotes\. Assumes lit is syntactically correct\.

## ToString
```jule
fn ToString(mut lit: string): (string, errors: []Error)
```
Returns string value string from literal, literal includes quotes\. Allows escape sequences\. Assumes lit is syntactically correct\.

## Error
```jule
struct Error {
	Offset: int
	Text:   string
}
```
An error for literal parsing\.