# std::jule::constant

## Functions
`fn new_i64(x: i64): &Const`\
Returns new constant value instance from 64-bit signed integer.

---

`fn new_u64(x: u64): &Const`\
Returns new constant value instance from 64-bit unsigned integer.

---

`fn new_bool(x: bool): &Const`\
Returns new constant value instance from boolean.

---

`fn new_str(x: str): &Const`\
Returns new constant value instance from string.

---

`fn new_f64(x: f64): &Const`\
Returns new constant value instance from 64-bit floating-point.

---

`fn new_nil(): &Const`\
Returns new constant value instance with nil. 

## Structs
```
struct Const
```
Constant data.\
Use `new_nil` function istead of `Const{}` for nil literal.

**Methods:**

`fn read_i64(self): i64`\
Reads 64-bit signed integer data.\
Returns 0 if data is not 64-bit signed integer.

`fn read_u64(self): u64`\
Reads 64-bit unsigned integer data.\
Returns 0 if data is not 64-bit unsigned integer.

`fn read_bool(self): bool`\
Reads boolean data.\
Returns false if data is not boolean.

`fn read_str(self): str`\
`Reads string data.`\
Returns empty string if data is not string.

`fn read_f64(self): f64`\
Reads 64-bit floating-point data.\
Returns 0 if data is not 64-bit floating-point.

`fn as_i64(self): i64`\
Reads data as 64-bit signed integer.\
Returns 0 if data is string, bool or which is not numeric.

`fn as_u64(self): u64`\
Reads data as 64-bit unsigned integer.\
Returns 0 if data is string, bool or which is not numeric.

`fn as_f64(self): f64`\
Reads data as 64-bit floating-point.\
Returns 0 if data is string, bool or which is not numeric.

`fn set_i64(mut self, x: i64)`\
Sets constant value from 64-bit signed integer.

`fn set_u64(mut self, x: u64)`\
Sets constant value from 64-bit unsigned integer.

`fn set_bool(mut self, x: bool)`\
Sets constant value from boolean.

`fn set_str(mut self, x: str)`\
Sets constant value from string.

`fn set_f64(mut self, x: f64)`\
Sets constant value from 64-bit floating-point.

`fn set_nil(mut self)`\
Sets constant value to nil.

`fn is_i64(self): bool`\
Reports whether data is 64-bit signed integer.

`fn is_u64(self): bool`\
Reports whether data is 64-bit unsigned integer.

`fn is_bool(self): bool`\
Reports whether data is boolean.

`fn is_str(self): bool`\
Reports whether data is string.

`fn is_f64(self): bool`\
Reports whether data is 64-bit floating-point.

`fn is_nil(self): bool`\
Reports whether data is nil.

`fn are_same_types(self, x: Const): bool`\
Reports whether self and x has same type.

`fn and(self, x: Const): bool`\
Reports whether self and x are true.\
Returns false if type is not supported.

`fn or(self, x: Const): bool`\
Reports whether self or x is true.\
Returns false if type is not supported.

`fn eqs(self, x: Const): bool`\
Reports whether self and x are equals.\
Returns false if type is not supported. 

`fn lt(self, x: Const): bool`\
Reports whether self less than x.\
Returns false if type is unsupported by operation.

Supported types are:
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn gt(self, x: Const): bool`\
Reports whether self greater than x.\
Returns false if type is unsupported by operation.

Supported types are:
- 64-bit signed integer
- 64-bit unsigned integer
- 64-bit floating-point

`fn add(mut self, x: Const): bool`\
Adds x's value to itself value.\
Reports whether operation is success.

`fn sub(mut self, x: Const): bool`\
Subs x's value from itself value.\
Reports whether operation is success.

`fn mul(mut self, x: Const): bool`\
Multiplies x's value to c's value.\
Reports whether operation is success.

`fn div(mut self, x: Const): bool`\
Divides itself value to x's value.\
Reports whether operation is success.\
Reports false if divided-by-zero.
::: warning
This operation makes constant value is floating-point.
:::

`fn mod(mut self, x: Const): bool`\
Mods itself value to x's value.\
Reports whether operation is success.\
Reports false if divided-by-zero.

`fn bitwise_and(mut self, x: Const): bool`\
Bitwise and itself value to x's value.\
Reports whether operation is success.

`fn bitwise_or(mut self, x: Const): bool`\
Bitwise or itself value to x's value.\
Reports whether operation is success.

`fn xor(mut self, x: Const): bool`\
Bitwise xor itself value to x's value.\
Reports whether operation is success.

`fn lshift(mut self, x: Const): bool`\
Left shifts itself value to x's value.\
Reports whether operation is success.\

`fn rshift(mut self, x: Const): bool`\
Right shifts itself value to x's value.\
Reports whether operation is success. 