# std/jule/build

## Index

[Variables](#variables)\
[fn PathStdlib\(\): str](#pathstdlib)\
[fn PathExec\(\): str](#pathexec)\
[fn PathWd\(\): str](#pathwd)\
[fn PathAPI\(\): str](#pathapi)\
[fn SetEnv\(exec: str, wd: str\)](#setenv)\
[fn ModStdlib\(\): &amp;mod::Mod](#modstdlib)\
[fn IsStdHeaderPath\(p: str\): bool](#isstdheaderpath)\
[fn IsValidHeaderExt\(ext: str\): bool](#isvalidheaderext)\
[fn IsValidCppExt\(ext: str\): bool](#isvalidcppext)\
[fn IsValidAssemblyExt\(ext: str\): bool](#isvalidassemblyext)\
[fn IsJule\(path: str\): bool](#isjule)

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
let CppHeaderExts: [...]str = [ ... ]
```
Valid extensions of C\+\+ headers\.

---

```jule
let CppExts: [...]str = [ ... ]
```
Valid extensions of C\+\+ source files\.

---

```jule
let AssemblyExts: [...]str = [ ... ]
```
Valid extensions of Assembly source files\.

---

```jule
let ObjectiveCppExts: [...]str = [ ... ]
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
fn PathStdlib(): str
```
Returns path of standard library\. Returns empty string if not initialized by \[SetEnv\]\.

## PathExec
```jule
fn PathExec(): str
```
Returns path of compiler&#39;s executable file\. Returns empty string if not initialized by \[SetEnv\]\.

## PathWd
```jule
fn PathWd(): str
```
Returns path of working directory\. Returns empty string if not initialized by \[SetEnv\]\.

## PathAPI
```jule
fn PathAPI(): str
```
Returns path of main API header file\. Returns empty string if not initialized by \[SetEnv\]\.

## SetEnv
```jule
fn SetEnv(exec: str, wd: str)
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
fn IsStdHeaderPath(p: str): bool
```
Reports whether path is C\+\+ std library path\.

## IsValidHeaderExt
```jule
fn IsValidHeaderExt(ext: str): bool
```
Reports whether C\+\+ header extension is valid\.

## IsValidCppExt
```jule
fn IsValidCppExt(ext: str): bool
```
Reports whether C\+\+ extension is valid\.

## IsValidAssemblyExt
```jule
fn IsValidAssemblyExt(ext: str): bool
```
Reports whether Assembly extension is valid\.

## IsJule
```jule
fn IsJule(path: str): bool
```
Reports whether file path is Jule source code\.