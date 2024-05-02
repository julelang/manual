# std::jule::constant

## Structs
```jule
struct Const
```
Constant data.\
Use `Const.NewNil` function istead of `Const{}` for nil literal.

**Methods:**

`static fn NewI64(x: i64): &Const`\
Returns new constant value instance from 64-bit signed integer.

`static fn NewU64(x: u64): &Const`\
Returns new constant value instance from 64-bit unsigned integer.

`static fn NewBool(x: bool): &Const`\
Returns new constant value instance from boolean.

`static fn NewStr(x: str): &Const`\
Returns new constant value instance from string.

`static fn NewF64(x: f64): &Const`\
Returns new constant value instance from 64-bit floating-point.

`static fn NewNil(): &Const`\
Returns new constant value instance with nil. 

`fn ReadI64(self): i64`\
Reads 64-bit signed integer data.\
Returns 0 if data is not 64-bit signed integer.

`fn ReadU64(self): u64`\
Reads 64-bit unsigned integer data.\
Returns 0 if data is not 64-bit unsigned integer.

`fn ReadBool(self): bool`\
Reads boolean data.\
Returns false if data is not boolean.

`fn ReadStr(self): str`\
`Reads string data.`\
Returns empty string if data is not string.

`fn ReadF64(self): f64`\
Reads 64-bit floating-point data.\
Returns 0 if data is not 64-bit floating-point.

`fn AsI64(self): i64`\
Reads data as 64-bit signed integer.\
Returns 0 if data is string, bool or which is not numeric.

`fn AsU64(self): u64`\
Reads data as 64-bit unsigned integer.\
Returns 0 if data is string, bool or which is not numeric.

`fn AsF64(self): f64`\
Reads data as 64-bit floating-point.\
Returns 0 if data is string, bool or which is not numeric.

`fn SetI64(mut self, x: i64)`\
Sets constant value from 64-bit signed integer.

`fn SetU64(mut self, x: u64)`\
Sets constant value from 64-bit unsigned integer.

`fn SetBool(mut self, x: bool)`\
Sets constant value from boolean.

`fn SetStr(mut self, x: str)`\
Sets constant value from string.

`fn SetF64(mut self, x: f64)`\
Sets constant value from 64-bit floating-point.

`fn SetNil(mut self)`\
Sets constant value to nil.

`fn IsI64(self): bool`\
Reports whether data is 64-bit signed integer.

`fn IsU64(self): bool`\
Reports whether data is 64-bit unsigned integer.

`fn IsBool(self): bool`\
Reports whether data is boolean.

`fn IsStr(self): bool`\
Reports whether data is string.

`fn IsF64(self): bool`\
Reports whether data is 64-bit floating-point.

`fn IsNil(self): bool`\
Reports whether data is nil.

`fn AreSameTypes(self, x: Const): bool`\
Reports whether self and x has same type.

`fn And(self, x: Const): bool`\
Reports whether self and x are true.\
Returns false if type is not supported.

`fn Or(self, x: Const): bool`\
Reports whether self or x is true.\
Returns false if type is not supported.

`fn Eq(self, x: Const): bool`\
Reports whether self and x are equals.\
Returns false if type is not supported. 

`fn Lt(self, x: Const): bool`\
Reports whether self less than x.\
Returns false if type is unsupported by operation.

Supported types are:
- strings
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn LtEq(self, x: Const): bool`\
Reports whether self less than or equals to x.\
Returns false if type is unsupported by operation.

Supported types are:
- strings
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn Gt(self, x: Const): bool`\
Reports whether self greater than x.\
Returns false if type is unsupported by operation.

Supported types are:
- strings
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn GtEq(self, x: Const): bool`\
Reports whether self greater than or equals to x.\
Returns false if type is unsupported by operation.

Supported types are:
- strings
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn Add(mut self, x: Const): bool`\
Adds x's value to itself value.\
Reports whether operation is success.

`fn Sub(mut self, x: Const): bool`\
Subs x's value from itself value.\
Reports whether operation is success.

`fn Mul(mut self, x: Const): bool`\
Multiplies x's value to c's value.\
Reports whether operation is success.

`fn Div(mut self, x: Const): bool`\
Divides itself value to x's value.\
Reports whether operation is success.\
Reports false if divided-by-zero.
::: warning
This operation makes constant value is floating-point.
:::

`fn Mod(mut self, x: Const): bool`\
Mods itself value to x's value.\
Reports whether operation is success.\
Reports false if divided-by-zero.

`fn BitwiseAnd(mut self, x: Const): bool`\
Bitwise and itself value to x's value.\
Reports whether operation is success.

`fn BitwiseOr(mut self, x: Const): bool`\
Bitwise or itself value to x's value.\
Reports whether operation is success.

`fn Xor(mut self, x: Const): bool`\
Bitwise xor itself value to x's value.\
Reports whether operation is success.

`fn Lshift(mut self, x: Const): bool`\
Left shifts itself value to x's value.\
Reports whether operation is success.\

`fn Rshift(mut self, x: Const): bool`\
Right shifts itself value to x's value.\
Reports whether operation is success. 
