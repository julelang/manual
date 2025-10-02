# std/jule/constant

## Index

[fn NewInt\(i: big::Int\): &amp;Const](#newint)\
[fn NewI64\(x: i64\): &amp;Const](#newi64)\
[fn NewU64\(x: u64\): &amp;Const](#newu64)\
[fn NewBool\(x: bool\): &amp;Const](#newbool)\
[fn NewStr\(x: str\): &amp;Const](#newstr)\
[fn NewF64\(x: f64\): &amp;Const](#newf64)\
[fn NewCmplx128\(x: cmplx128\): &amp;Const](#newcmplx128)\
[fn NewNil\(\): &amp;Const](#newnil)\
[struct Const](#const)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadInt\(\*self\): big::Int](#readint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadBool\(\*self\): bool](#readbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadStr\(\*self\): str](#readstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadF64\(\*self\): f64](#readf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadCmplx128\(\*self\): cmplx128](#readcmplx128)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsI64\(\*self\): i64](#asi64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsU64\(\*self\): u64](#asu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsF64\(\*self\): f64](#asf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AsCmplx128\(\*self\): cmplx128](#ascmplx128)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetInt\(mut \*self, x: big::Int\)](#setint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetI64\(mut \*self, x: i64\)](#seti64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetU64\(mut \*self, x: u64\)](#setu64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetBool\(mut \*self, x: bool\)](#setbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetStr\(mut \*self, x: str\)](#setstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetF64\(mut \*self, x: f64\)](#setf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetCmplx128\(mut \*self, x: cmplx128\)](#setcmplx128)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetNil\(mut \*self\)](#setnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsInt\(\*self\): bool](#isint)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsBool\(\*self\): bool](#isbool)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsStr\(\*self\): bool](#isstr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsF64\(\*self\): bool](#isf64)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsCmplx128\(\*self\): bool](#iscmplx128)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsNil\(\*self\): bool](#isnil)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AreSameTypes\(\*self, x: Const\): bool](#aresametypes)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LAND\(\*self, x: Const\): bool](#land)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LOR\(\*self, x: Const\): bool](#lor)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EQL\(\*self, x: Const\): bool](#eql)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LSS\(\*self, x: Const\): bool](#lss)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LEQ\(\*self, x: Const\): bool](#leq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GTR\(\*self, x: Const\): bool](#gtr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GEQ\(\*self, x: Const\): bool](#geq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ADD\(mut \*self, x: Const\): bool](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SUB\(mut \*self, x: Const\): bool](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MUL\(mut \*self, x: Const\): bool](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DIV\(mut \*self, x: Const\): bool](#div)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn REM\(mut \*self, x: Const\): bool](#rem)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AND\(mut \*self, x: Const\): bool](#and)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn OR\(mut \*self, x: Const\): bool](#or)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn XOR\(mut \*self, x: Const\): bool](#xor)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SHL\(mut \*self, x: Const\): bool](#shl)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SHR\(mut \*self, x: Const\): bool](#shr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)



## NewInt
```jule
fn NewInt(i: big::Int): &Const
```
Returns new constant value instance from big\-integer\.

## NewI64
```jule
fn NewI64(x: i64): &Const
```
Returns new constant value instance from 64\-bit signed integer\. Value will have big\-integer precision\.

## NewU64
```jule
fn NewU64(x: u64): &Const
```
Returns new constant value instance from 64\-bit unsigned integer\. Value will have big\-integer precision\.

## NewBool
```jule
fn NewBool(x: bool): &Const
```
Returns new constant value instance from boolean\.

## NewStr
```jule
fn NewStr(x: str): &Const
```
Returns new constant value instance from string\.

## NewF64
```jule
fn NewF64(x: f64): &Const
```
Returns new constant value instance from 64\-bit floating\-point\.

## NewCmplx128
```jule
fn NewCmplx128(x: cmplx128): &Const
```
Returns new constant value instance from 128\-bit floating\-point complex\.

## NewNil
```jule
fn NewNil(): &Const
```
Returns new constant value instance with nil\.

## Const
```jule
struct Const {
	Kind: str
	// NOTE: contains filtered hidden or unexported fields
}
```
Constant data\. Use NewNil function instead of Const\{\} for nil literal\.

### ReadInt
```jule
fn ReadInt(*self): big::Int
```
Reads integer data\. Returns zero value if data is not integer\.

### ReadBool
```jule
fn ReadBool(*self): bool
```
Reads boolean data\. Returns false if data is not boolean\.

### ReadStr
```jule
fn ReadStr(*self): str
```
Reads string data\. Returns empty string if data is not string\.

### ReadF64
```jule
fn ReadF64(*self): f64
```
Reads 64\-bit floating\-point data\. Returns 0 if data is not 64\-bit floating\-point\.

### ReadCmplx128
```jule
fn ReadCmplx128(*self): cmplx128
```
Reads 128\-bit floating\-point complex data\. Returns 0 if data is not 128\-bit floating\-point complex\.

### AsI64
```jule
fn AsI64(*self): i64
```
Reads data as 64\-bit signed integer\. Returns 0 if data is string, bool or which is not numeric\.

### AsU64
```jule
fn AsU64(*self): u64
```
Reads data as 64\-bit unsigned integer\. Returns 0 if data is string, bool or which is not numeric\.

### AsF64
```jule
fn AsF64(*self): f64
```
Reads data as 64\-bit floating\-point\. Returns 0 if data is string, bool or which is not numeric\.

### AsCmplx128
```jule
fn AsCmplx128(*self): cmplx128
```
Reads data as 128\-bit floating\-point complex\. Returns 0 if data is string, bool or which is not numeric\.

### SetInt
```jule
fn SetInt(mut *self, x: big::Int)
```
Sets constant value from big\-integer\.

### SetI64
```jule
fn SetI64(mut *self, x: i64)
```
Sets constant value from 64\-bit signed integer\.

### SetU64
```jule
fn SetU64(mut *self, x: u64)
```
Sets constant value from 64\-bit unsigned integer\.

### SetBool
```jule
fn SetBool(mut *self, x: bool)
```
Sets constant value from boolean\.

### SetStr
```jule
fn SetStr(mut *self, x: str)
```
Sets constant value from string\.

### SetF64
```jule
fn SetF64(mut *self, x: f64)
```
Sets constant value from 64\-bit floating\-point\.

### SetCmplx128
```jule
fn SetCmplx128(mut *self, x: cmplx128)
```
Sets constant value from 128\-bit floating\-point complex\.

### SetNil
```jule
fn SetNil(mut *self)
```
Sets constant value to nil\.

### IsInt
```jule
fn IsInt(*self): bool
```
Reports whether data is integer\.

### IsBool
```jule
fn IsBool(*self): bool
```
Reports whether data is boolean\.

### IsStr
```jule
fn IsStr(*self): bool
```
Reports whether data is string\.

### IsF64
```jule
fn IsF64(*self): bool
```
Reports whether data is 64\-bit floating\-point\.

### IsCmplx128
```jule
fn IsCmplx128(*self): bool
```
Reports whether data is 128\-bit floating\-point complex\.

### IsNil
```jule
fn IsNil(*self): bool
```
Reports whether data is nil\.

### AreSameTypes
```jule
fn AreSameTypes(*self, x: Const): bool
```
Reports whether self and x has same type\.

### LAND
```jule
fn LAND(*self, x: Const): bool
```
Reports whether self and x are true\. Returns false if type is not supported\.

### LOR
```jule
fn LOR(*self, x: Const): bool
```
Reports whether self or x is true\. Returns false if type is not supported\.

### EQL
```jule
fn EQL(*self, x: Const): bool
```
Reports whether self and x are equals\. Returns false if type is not supported\.

### LSS
```jule
fn LSS(*self, x: Const): bool
```
Reports whether self less than x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### LEQ
```jule
fn LEQ(*self, x: Const): bool
```
Reports whether self less than or equals to x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### GTR
```jule
fn GTR(*self, x: Const): bool
```
Reports whether self greater than x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### GEQ
```jule
fn GEQ(*self, x: Const): bool
```
Reports whether self greater than or equals to x\. Returns false if type is unsupported by operation\.

Supported types are:<br>

- strings
- 64\-bit signed integer
- 64\-bit unsigned integer
- 64\-bit floating\-point

### ADD
```jule
fn ADD(mut *self, x: Const): bool
```
Adds x&#39;s value to itself value\. Reports whether operation is success\.

### SUB
```jule
fn SUB(mut *self, x: Const): bool
```
Subs x&#39;s value from itself value\. Reports whether operation is success\.

### MUL
```jule
fn MUL(mut *self, x: Const): bool
```
Multiplies x&#39;s value to c&#39;s value\. Reports whether operation is success\.

### DIV
```jule
fn DIV(mut *self, x: Const): bool
```
Divides itself value to x&#39;s value\. Reports whether operation is success\. Reports false if divided\-by\-zero\.

NOTICE<br>
```
This operation makes constant value is floating-point.
```


### REM
```jule
fn REM(mut *self, x: Const): bool
```
Mods itself value to x&#39;s value\. Reports whether operation is success\. Reports false if divided\-by\-zero\.

### AND
```jule
fn AND(mut *self, x: Const): bool
```
Bitwise and itself value to x&#39;s value\. Reports whether operation is success\.

### OR
```jule
fn OR(mut *self, x: Const): bool
```
Bitwise or itself value to x&#39;s value\. Reports whether operation is success\.

### XOR
```jule
fn XOR(mut *self, x: Const): bool
```
Bitwise xor itself value to x&#39;s value\. Reports whether operation is success\.

### SHL
```jule
fn SHL(mut *self, x: Const): bool
```
Left shifts itself value to x&#39;s value\. Reports whether operation is success\.

### SHR
```jule
fn SHR(mut *self, x: Const): bool
```
Right shifts itself value to x&#39;s value\. Reports whether operation is success\.

### Str
```jule
fn Str(*self): str
```