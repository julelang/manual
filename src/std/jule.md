# std/jule

## Index

[Variables](#variables)\
[fn IsBlank\(name: str\): bool](#isblank)\
[fn IsAnon\(name: str\): bool](#isanon)

## Variables

```jule
const Version = `jule0.1.8 @master`
```
Version of package and sub\-packages\. This version represents also julec version\.

---

```jule
const Ext = `.jule`
```
Extension \(includes dot\) of Jule source code files\.

---

```jule
const EntryPoint = "main"
```
Identifier of entry point function\.

---

```jule
const InitFunc = "init"
```
Identifier of initializer function\.

---

```jule
const ModuleFile = "jule.mod"
```
Filename of module file\.

---

```jule
const ImportPathSep = "/"
```
Separator of import paths\.

---

```jule
const (
	Blank = "_"
	Anon  = "<anonymous>"
)
```
Special identifiers\.

## IsBlank
```jule
fn IsBlank(name: str): bool
```
Reports whether identifier is blank\.

## IsAnon
```jule
fn IsAnon(name: str): bool
```
Reports whether identifier is anonymous\.