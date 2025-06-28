# std/jule/dist

## Index

[Variables](#variables)\
[fn IsWindows\(os: str\): bool](#iswindows)\
[fn IsDarwin\(os: str\): bool](#isdarwin)\
[fn IsLinux\(os: str\): bool](#islinux)\
[fn IsI386\(arch: str\): bool](#isi386)\
[fn IsAMD64\(arch: str\): bool](#isamd64)\
[fn IsARM64\(arch: str\): bool](#isarm64)\
[fn IsUnix\(os: str\): bool](#isunix)\
[fn Is32bit\(arch: str\): bool](#is32bit)\
[fn Is64bit\(arch: str\): bool](#is64bit)

## Variables

```jule
const (
	Windows = "windows"
	Linux   = "linux"
	Darwin  = "darwin"
	Unix    = "unix"
)
```
Operating Systems for file annotation kind\.

---

```jule
const (
	I386  = "i386"
	ARM64 = "arm64"
	AMD64 = "amd64"
	X32   = "x32"
	X64   = "x64"
)
```
Architectures for file annotation kind\.

## IsWindows
```jule
fn IsWindows(os: str): bool
```
Reports whether os is windows\.

## IsDarwin
```jule
fn IsDarwin(os: str): bool
```
Reports whether os is darwin\.

## IsLinux
```jule
fn IsLinux(os: str): bool
```
Reports whether os is linux\.

## IsI386
```jule
fn IsI386(arch: str): bool
```
Reports whether architecture is intel 386\.

## IsAMD64
```jule
fn IsAMD64(arch: str): bool
```
Reports whether architecture is amd64\.

## IsARM64
```jule
fn IsARM64(arch: str): bool
```
Reports whether architecture is arm64\.

## IsUnix
```jule
fn IsUnix(os: str): bool
```
Reports whether os is unix\.

## Is32bit
```jule
fn Is32bit(arch: str): bool
```
Reports whether architecture is 32\-bit\.

## Is64bit
```jule
fn Is64bit(arch: str): bool
```
Reports whether architecture is 64\-bit\.