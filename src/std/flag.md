# std/flag

## Index

[type IntFlag](#intflag)\
[type UintFlag](#uintflag)\
[type FloatFlag](#floatflag)\
[type BoolFlag](#boolflag)\
[type StringFlag](#stringflag)\
[trait CommonFlag](#commonflag)\
[struct Flag\[T\]](#flag)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Name\(\*self\): string](#name)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn What\(\*self\): string](#what)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self\)](#reset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Short\(\*self\): rune](#short)\
[struct FlagSet](#flagset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(\): &amp;FlagSet](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindFlag\(mut \*self, name: string\): CommonFlag](#findflag)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn FindFlagShort\(mut \*self, name: rune\): CommonFlag](#findflagshort)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Flags\(mut \*self\): \[\]CommonFlag](#flags)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Parse\(mut \*self, args: \[\]string\)\!: \[\]string](#parse)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self\)](#reset-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\[T: \~i64 \| \~u64 \| \~f64 \| \~bool \| \~string\]\(mut \*self, name: string, short: rune, default: T, what: string\): &amp;T](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AddVar\[T: \~i64 \| \~u64 \| \~f64 \| \~bool \| \~string\]\(mut \*self, mut var: &amp;T, name: string, short: rune, what: string\)](#addvar)



## IntFlag
```jule
type IntFlag = &Flag[i64]
```
Flag for i64 type\.

## UintFlag
```jule
type UintFlag = &Flag[u64]
```
Flag for u64 type\.

## FloatFlag
```jule
type FloatFlag = &Flag[f64]
```
Flag for f64 type\.

## BoolFlag
```jule
type BoolFlag = &Flag[bool]
```
Flag for bool type\.

## StringFlag
```jule
type StringFlag = &Flag[string]
```
Flag for string type

## CommonFlag
```jule
trait CommonFlag {
	// Returns name of flag.
	fn Name(*self): string

	// Returns short name of flag.
	fn Short(*self): rune

	// Returns description of flag.
	fn What(*self): string

	// Resets data to default.
	fn Reset(mut *self)
}
```
Common behaviors of flags\.

## Flag
```jule
struct Flag[T] {
	// NOTE: contains filtered hidden or unexported fields
}
```
A Flag for FlagSet\.

### Implemented Traits

- `CommonFlag`

### Name
```jule
fn Name(*self): string
```


### What
```jule
fn What(*self): string
```


### Reset
```jule
fn Reset(mut *self)
```


### Short
```jule
fn Short(*self): rune
```


## FlagSet
```jule
struct FlagSet {
	// NOTE: contains filtered hidden or unexported fields
}
```
Flag parser for command\-line arguments\.

Syntax:<br>
```
Long names can be used with double dash (--). Short names can be
used with a single dash (-). When Boolean flags are used, they use
the opposite of their default values. Floating-point values are the
same as the [ParseFloat] function provided by the "std/conv" package.
Decimal, octal, binary and hexadecimal formats are supported for
signed and unsigned integer types. String types accept values ​​directly.

Octal values are represented by starts with 0o or 0 prefix.
Hexadecimal values are represented by starts with 0x prefix.
Binary values are represented by starts with 0b prefix.

A space is required to give a value. When a single dash (-) is used,
all following characters are considered short names and thus collective
use is allowed. If the short name flags used need values, the values ​
should follow respectively.
```


### New
```jule
fn New(): &FlagSet
```
Returns new flagset\.

### FindFlag
```jule
fn FindFlag(mut *self, name: string): CommonFlag
```
Returns flag by name, returns nil if not exist\.

### FindFlagShort
```jule
fn FindFlagShort(mut *self, name: rune): CommonFlag
```
Returns flag by short name, returns nil if not exist\.

### Flags
```jule
fn Flags(mut *self): []CommonFlag
```
Returns all flags\.

### Parse
```jule
fn Parse(mut *self, args: []string)!: []string
```
Parse arguments and process flags\. Returns non\-flag content\. Error is always string and holds error message\.

### Reset
```jule
fn Reset(mut *self)
```
Resets all flags to default value\.

### Add
```jule
fn Add[T: ~i64 | ~u64 | ~f64 | ~bool | ~string](mut *self, name: string, short: rune, default: T, what: string): &T
```
Adds new flag and returns allocated reference variable\. Panics if name or short name is alreadys exist\. Zero \(0\) short names will be ignored\. Panics if used unsupported type\.

### AddVar
```jule
fn AddVar[T: ~i64 | ~u64 | ~f64 | ~bool | ~string](mut *self, mut var: &T, name: string, short: rune, what: string)
```
Same with the Add method but do not allocates new reference, uses existing\.