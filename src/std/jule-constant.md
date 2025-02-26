# std/jule/constant

## Index

[struct Const](#const)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewInt\(i: big::Int\): &amp;Const](#newint)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewI64\(x: i64\): &amp;Const](#newi64)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewU64\(x: u64\): &amp;Const](#newu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewBool\(x: bool\): &amp;Const](#newbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewStr\(x: str\): &amp;Const](#newstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewF64\(x: f64\): &amp;Const](#newf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn NewNil\(\): &amp;Const](#newnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadInt\(mut self\): big::Int](#readint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadBool\(self\): bool](#readbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadStr\(self\): str](#readstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadF64\(self\): f64](#readf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsI64\(self\): i64](#asi64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsU64\(self\): u64](#asu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsF64\(self\): f64](#asf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetInt\(mut self, x: big::Int\)](#setint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetI64\(mut self, x: i64\)](#seti64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetU64\(mut self, x: u64\)](#setu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetBool\(mut self, x: bool\)](#setbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetStr\(mut self, x: str\)](#setstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetF64\(mut self, x: f64\)](#setf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetNil\(mut self\)](#setnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInt\(self\): bool](#isint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsBool\(self\): bool](#isbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStr\(self\): bool](#isstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsF64\(self\): bool](#isf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsNil\(self\): bool](#isnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AreSameTypes\(self, x: Const\): bool](#aresametypes)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn And\(self, x: Const\): bool](#and)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Or\(self, x: Const\): bool](#or)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Eq\(self, x: Const\): bool](#eq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lt\(self, x: Const\): bool](#lt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LtEq\(self, x: Const\): bool](#lteq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Gt\(self, x: Const\): bool](#gt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GtEq\(self, x: Const\): bool](#gteq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, x: Const\): bool](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut self, x: Const\): bool](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut self, x: Const\): bool](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Div\(mut self, x: Const\): bool](#div)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mod\(mut self, x: Const\): bool](#mod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn BitwiseAnd\(mut self, x: Const\): bool](#bitwiseand)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn BitwiseOr\(mut self, x: Const\): bool](#bitwiseor)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Xor\(mut self, x: Const\): bool](#xor)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Lshift\(mut self, x: Const\): bool](#lshift)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rshift\(mut self, x: Const\): bool](#rshift)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)



## Const
```jule
struct Const {
	Kind: str
	// NOTE: contains filtered hidden or unexported fields
}
```
Constant data\. Use Const\.new\_nil function instead of Const\{\} for nil literal\.

### NewInt
```jule
static fn NewInt(i: big::Int): &Const
```
Returns new constant value instance from big\-integer\.

### NewI64
```jule
static fn NewI64(x: i64): &Const
```
Returns new constant value instance from 64\-bit signed integer\.

### NewU64
```jule
static fn NewU64(x: u64): &Const
```
Returns new constant value instance from 64\-bit unsigned integer\.

### NewBool
```jule
static fn NewBool(x: bool): &Const
```
Returns new constant value instance from boolean\.

### NewStr
```jule
static fn NewStr(x: str): &Const
```
Returns new constant value instance from string\.

### NewF64
```jule
static fn NewF64(x: f64): &Const
```
Returns new constant value instance from 64\-bit floating\-point\.

### NewNil
```jule
static fn NewNil(): &Const
```
Returns new constant value instance with nil\.

### ReadInt
```jule
fn ReadInt(mut self): big::Int
```
Reads integer data\. Returns zero value if data is not integer\.

### ReadBool
```jule
fn ReadBool(self): bool
```
Reads boolean data\. Returns false if data is not boolean\.

### ReadStr
```jule
fn ReadStr(self): str
```
Reads string data\. Returns empty string if data is not string\.

### ReadF64
```jule
fn ReadF64(self): f64
```
Reads 64\-bit floating\-point data\. Returns 0 if data is not 64\-bit floating\-point\.

### AsI64
```jule
fn AsI64(self): i64
```
Reads data as 64\-bit signed integer\. Returns 0 if data is string, bool or which is not numeric\.

### AsU64
```jule
fn AsU64(self): u64
```
Reads data as 64\-bit unsigned integer\. Returns 0 if data is string, bool or which is not numeric\.

### AsF64
```jule
fn AsF64(self): f64
```
Reads data as 64\-bit floating\-point\. Returns 0 if data is string, bool or which is not numeric\.

### SetInt
```jule
fn SetInt(mut self, x: big::Int)
```
Sets constant value from big\-integer\.

### SetI64
```jule
fn SetI64(mut self, x: i64)
```
Sets constant value from 64\-bit signed integer\.

### SetU64
```jule
fn SetU64(mut self, x: u64)
```
Sets constant value from 64\-bit unsigned integer\.

### SetBool
```jule
fn SetBool(mut self, x: bool)
```
Sets constant value from boolean\.

### SetStr
```jule
fn SetStr(mut self, x: str)
```
Sets constant value from string\.

### SetF64
```jule
fn SetF64(mut self, x: f64)
```
Sets constant value from 64\-bit floating\-point\.

### SetNil
```jule
fn SetNil(mut self)
```
Sets constant value to nil\.

### IsInt
```jule
fn IsInt(self): bool
```
Reports whether data is integer\.

### IsBool
```jule
fn IsBool(self): bool
```
Reports whether data is boolean\.

### IsStr
```jule
fn IsStr(self): bool
```
Reports whether data is string\.

### IsF64
```jule
fn IsF64(self): bool
```
Reports whether data is 64\-bit floating\-point\.

### IsNil
```jule
fn IsNil(self): bool
```
Reports whether data is nil\.

### AreSameTypes
```jule
fn AreSameTypes(self, x: Const): bool
```
Reports whether self and x has same type\.

### And
```jule
fn And(self, x: Const): bool
```
Reports whether self and x are true\. Returns false if type is not supported\.

### Or
```jule
fn Or(self, x: Const): bool
```
Reports whether self or x is true\. Returns false if type is not supported\.

### Eq
```jule
fn Eq(self, x: Const): bool
```
Reports whether self and x are equals\. Returns false if type is not supported\.

### Lt
```jule
fn Lt(self, x: Const): bool
```
Reports whether self less than x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### LtEq
```jule
fn LtEq(self, x: Const): bool
```
Reports whether self less than or equals to x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### Gt
```jule
fn Gt(self, x: Const): bool
```
Reports whether self greater than x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### GtEq
```jule
fn GtEq(self, x: Const): bool
```
Reports whether self greater than or equals to x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### Add
```jule
fn Add(mut self, x: Const): bool
```
Adds x&#39;s value to itself value\. Reports whether operation is success\.

### Sub
```jule
fn Sub(mut self, x: Const): bool
```
Subs x&#39;s value from itself value\. Reports whether operation is success\.

### Mul
```jule
fn Mul(mut self, x: Const): bool
```
Multiplies x&#39;s value to c&#39;s value\. Reports whether operation is success\.

### Div
```jule
fn Div(mut self, x: Const): bool
```
Divides itself value to x&#39;s value\. Reports whether operation is success\. Reports false if divided\-by\-zero\.

NOTICE<br>
```
This operation makes constant value is floating-point.
```


### Mod
```jule
fn Mod(mut self, x: Const): bool
```
Mods itself value to x&#39;s value\. Reports whether operation is success\. Reports false if divided\-by\-zero\.

### BitwiseAnd
```jule
fn BitwiseAnd(mut self, x: Const): bool
```
Bitwise and itself value to x&#39;s value\. Reports whether operation is success\.

### BitwiseOr
```jule
fn BitwiseOr(mut self, x: Const): bool
```
Bitwise or itself value to x&#39;s value\. Reports whether operation is success\.

### Xor
```jule
fn Xor(mut self, x: Const): bool
```
Bitwise xor itself value to x&#39;s value\. Reports whether operation is success\.

### Lshift
```jule
fn Lshift(mut self, x: Const): bool
```
Left shifts itself value to x&#39;s value\. Reports whether operation is success\.

### Rshift
```jule
fn Rshift(mut self, x: Const): bool
```
Right shifts itself value to x&#39;s value\. Reports whether operation is success\.

### Str
```jule
fn Str(self): str
```