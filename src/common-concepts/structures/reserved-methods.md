# Reserved Methods

Reserved methods are methods that standardize certain functions of structures. When the appropriate pattern is provided, the reserved method provides the functionality it is set to the structure.

In order for the reserved method to be implemented by the compiler, the pattern must be followed. This pattern can affect many points such as the name of the method, number of parameters, and return type.

Patterns should only be followed so that the compiler implements the relevant functionalities. They are not things that must be followed compulsorily. Therefore they do not cause any compiler errors.

## `fn Dispose(mut self)`

The `Dispose` reserved method implements destructor method for structure. Destructor methods are called by compiler when destruction of structure which is implements destructor method pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have immutable non-reference `self` parameter
- Method should do not have generics

### Example
```jule
struct Test {}

impl Test {
    fn Dispose(mut self) {
        outln("I am destructed")
    }
}
```

## `fn Str(self): str`

The `Str` reserved method implements a special string conversion algorithm, replacing the structure's default string formatting applied by the compiler.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `str`
- Method should only have immutable non-reference `self` parameter
- Method should do not have generics

### Example
```jule
use conv for std::conv

struct Num {
    x: int
}

struct SNum {
    x: int
}

impl SNum {
    fn Str(self): str {
        ret conv::itoa(self.x)
    }
}

fn main() {
    // [Num{x:0} Num{x:0} Num{x:0} Num{x:0} Num{x:0}]
    outln(make([]Num, 5))

    // [0 0 0 0 0]
    outln(make([]SNum, 5))
}
```

## `fn Eq(self, y: T): bool`

The `Eq` reserved method implements equals operator for structure. The operator `==` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should only have immutable non-reference `self` and `y` parameters
- Type of right operand should be `T`, which is structure's itself
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Eq(self, y: MyNumber): bool {
        ret self.x == y.x
    }
}
```

## `fn Gt(self, y: T): bool`

The `Gt` reserved method implements greater operator for structure. The operator `>` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should only have immutable non-reference `self` and `y` parameters
- Type of right operand should be `T`, which is structure's itself
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Gt(self, y: MyNumber): bool {
        ret self.x > y.x
    }
}
```

## `fn GtEq(self, y: T): bool`

The `GtEq` reserved method implements greater or equals operator for structure. The operator `>=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should only have immutable non-reference `self` and `y` parameters
- Type of right operand should be `T`, which is structure's itself
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn GtEq(self, y: MyNumber): bool {
        ret self.x >= y.x
    }
}
```

## `fn Lt(self, y: T): bool`

The `Lt` reserved method implements less operator for structure. The operator `<` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should only have immutable non-reference `self` and `y` parameters
- Type of right operand should be `T`, which is structure's itself
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Lt(self, y: MyNumber): bool {
        ret self.x < y.x
    }
}
```

## `fn LtEq(self, y: T): bool`

The `LtEq` reserved method implements less or equals operator for structure. The operator `<=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should only have immutable non-reference `self` and `y` parameters
- Type of right operand should be `T`, which is structure's itself
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn LtEq(self, y: MyNumber): bool {
        ret self.x <= y.x
    }
}
```

## `fn Shr(self, y: T): S`

The `Shr` reserved method implements right shift operator for structure. The operator `>>` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Shr(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x >> y.x}
    }
}
```

## `fn Shl(self, y: T): S`

The `Shl` reserved method implements left shift operator for structure. The operator `<<` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Shl(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x << y.x}
    }
}
```

## `fn Add(self, y: T): S`

The `Add` reserved method implements add operator for structure. The operator `+` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Add(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x + y.x}
    }
}
```

## `fn Sub(self, y: T): S`

The `Sub` reserved method implements sub operator for structure. The operator `-` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Sub(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x - y.x}
    }
}
```

## `fn Div(self, y: T): S`

The `Div` reserved method implements division operator for structure. The operator `/` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Div(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x / y.x}
    }
}
```

## `fn Mul(self, y: T): S`

The `Mul` reserved method implements multiplication operator for structure. The operator `*` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Mul(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x * y.x}
    }
}
```

## `fn Mod(self, y: T): S`

The `Mod` reserved method implements modulo operator for structure. The operator `%` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Mod(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x % y.x}
    }
}
```

## `fn BitAnd(self, y: T): S`

The `BitAnd` reserved method implements bitwise and operator for structure. The operator `&` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitAnd(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x & y.x}
    }
}
```

## `fn BitOr(self, y: T): S`

The `BitOr` reserved method implements bitwise or operator for structure. The operator `|` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitOr(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x | y.x}
    }
}
```

## `fn BitXor(self, y: T): S`

The `BitXor` reserved method implements bitwise xor operator for structure. The operator `^` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Type of right operand should be `T`, which is adding support for operator
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitXor(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x ^ y.x}
    }
}
```

## `fn Neg(self): S`

The `Neg` reserved method implements unary minus operator for structure. The unary operator `-` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Neg(self): MyNumber {
        ret MyNumber{-self.x}
    }
}
```

## `fn Pos(self): S`

The `Pos` reserved method implements unary plus operator for structure. The unary operator `+` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn Pos(self): MyNumber {
        ret MyNumber{+self.x}
    }
}
```

## `fn BitNot(self): S`

The `BitNot` reserved method implements unary bit not operator for structure. The unary operator `^` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `S`, which is type of structure's itself
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitNot(self): MyNumber {
        ret MyNumber{^self.x}
    }
}
```

## `fn AddAssign(self, y: T)`

The `AddAssign` reserved method implements addition assign operator for structure. The operator `+=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn AddAssign(mut self, y: MyNumber) {
        self.x += y.x
    }
}
```

## `fn SubAssign(self, y: T)`

The `SubAssign` reserved method implements subtraction assign operator for structure. The operator `-=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn SubAssign(mut self, y: MyNumber) {
        self.x -= y.x
    }
}
```

## `fn DivAssign(self, y: T)`

The `DivAssign` reserved method implements division assign operator for structure. The operator `/=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn DivAssign(mut self, y: MyNumber) {
        self.x /= y.x
    }
}
```

## `fn MulAssign(self, y: T)`

The `MulAssign` reserved method implements multiplication assign operator for structure. The operator `*=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn MulAssign(mut self, y: MyNumber) {
        self.x *= y.x
    }
}
```

## `fn ModAssign(self, y: T)`

The `ModAssign` reserved method implements modulo assign operator for structure. The operator `%=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn ModAssign(mut self, y: MyNumber) {
        self.x %= y.x
    }
}
```

## `fn ShlAssign(self, y: T)`

The `ShlAssign` reserved method implements left shift assign operator for structure. The operator `<<=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn ShlAssign(mut self, y: MyNumber) {
        self.x <<= y.x
    }
}
```

## `fn ShrAssign(self, y: T)`

The `ShrAssign` reserved method implements right shift assign operator for structure. The operator `>>=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn ShrAssign(mut self, y: MyNumber) {
        self.x >>= y.x
    }
}
```

## `fn BitOrAssign(self, y: T)`

The `BitOrAssign` reserved method implements bitwise or assign operator for structure. The operator `|=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitOrAssign(mut self, y: MyNumber) {
        self.x |= y.x
    }
}
```

## `fn BitAndAssign(self, y: T)`

The `BitAndAssign` reserved method implements bitwise and assign operator for structure. The operator `&=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitAndAssign(mut self, y: MyNumber) {
        self.x &= y.x
    }
}
```

## `fn BitXorAssign(self, y: T)`

The `BitXorAssign` reserved method implements bitwise xor assign operator for structure. The operator `^=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Type of right operand should be `T`, which is adding support for operator
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    fn BitXorAssign(mut self, y: MyNumber) {
        self.x ^= y.x
    }
}
```
