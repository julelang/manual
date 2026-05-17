# std/jule/build

## Index

[Variables](#variables)\
[fn PathStdlib\(\): string](#pathstdlib)\
[fn PathExec\(\): string](#pathexec)\
[fn PathWd\(\): string](#pathwd)\
[fn PathAPI\(\): string](#pathapi)\
[fn SetEnv\(exec: string, wd: string\)](#setenv)\
[fn ModStdlib\(\): &amp;mod::Mod](#modstdlib)\
[fn IsStdHeaderPath\(p: string\): bool](#isstdheaderpath)\
[fn IsValidHeaderExt\(ext: string\): bool](#isvalidheaderext)\
[fn IsValidCppExt\(ext: string\): bool](#isvalidcppext)\
[fn IsValidAssemblyExt\(ext: string\): bool](#isvalidassemblyext)\
[fn IsJule\(path: string\): bool](#isjule)

## Variables

```jule
let mut OS = runtime::OS
```
Target operating system\. Set to runtime operating system by default\.

---

```jule
let mut Arch = runtime::Arch
```
Target architecture\. Set to runtime architecture by default\.

---

```jule
const ModStdlibID: mod::ID = 0
```
Reserved module identity for the standard library module\.

---

```jule
let CppHeaderExts: [...]string = [ ... ]
```
Valid extensions of C\+\+ headers\.

---

```jule
let CppExts: [...]string = [ ... ]
```
Valid extensions of C\+\+ source files\.

---

```jule
let AssemblyExts: [...]string = [ ... ]
```
Valid extensions of Assembly source files\.

---

```jule
let ObjectiveCppExts: [...]string = [ ... ]
```
Valid extensions of Objective\-C\+\+ source files\.

---

```jule
const Api = "api"
```
Directory name of Jule C\+\+ API\.

---

```jule
const Stdlib = "std"
```
Directory name of standard library\.

## PathStdlib
```jule
fn PathStdlib(): string
```
Returns path of standard library\. Returns empty string if not initialized by \[SetEnv\]\.

## PathExec
```jule
fn PathExec(): string
```
Returns path of compiler&#39;s executable file\. Returns empty string if not initialized by \[SetEnv\]\.

## PathWd
```jule
fn PathWd(): string
```
Returns path of working directory\. Returns empty string if not initialized by \[SetEnv\]\.

## PathAPI
```jule
fn PathAPI(): string
```
Returns path of main API header file\. Returns empty string if not initialized by \[SetEnv\]\.

## SetEnv
```jule
fn SetEnv(exec: string, wd: string)
```
Sets the environment variables of the compiler\. The exec should hold the path of the compiler&#39;s executable path\. The wd should hold the path of working directory\. SetEnv panics is exec or wd is empty and will not check if paths are exist and appropriate for compiler\. Therefore, any misinformation for environment variables may cause analysis issues\.

SetEnv is a mandatory call if you need to use package sema\. Because semantic analysis and all relevant behavior relies to environment variables\. Therefore, there might be analysis issues if environment variables will not be initialized before\.

## ModStdlib
```jule
fn ModStdlib(): &mod::Mod
```
Returns the reserved module instance of the standard library module\. Returns nil if not initialized by \[SetEnv\]\.

## IsStdHeaderPath
```jule
fn IsStdHeaderPath(p: string): bool
```
Reports whether path is C\+\+ std library path\.

## IsValidHeaderExt
```jule
fn IsValidHeaderExt(ext: string): bool
```
Reports whether C\+\+ header extension is valid\.

## IsValidCppExt
```jule
fn IsValidCppExt(ext: string): bool
```
Reports whether C\+\+ extension is valid\.

## IsValidAssemblyExt
```jule
fn IsValidAssemblyExt(ext: string): bool
```
Reports whether Assembly extension is valid\.

## IsJule
```jule
fn IsJule(path: string): bool
```
Reports whether file path is Jule source code\.