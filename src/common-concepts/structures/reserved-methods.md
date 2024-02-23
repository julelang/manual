# Reserved Methods

Reserved methods are methods that standardize certain functions of structures. When the appropriate pattern is provided, the reserved method provides the functionality it is set to the structure.

In order for the reserved method to be implemented by the compiler, the pattern must be followed. This pattern can affect many points such as the name of the method, number of parameters, and return type.

Patterns should only be followed so that the compiler implements the relevant functionalities. They are not things that must be followed compulsorily. Therefore they do not cause any compiler errors.

## `pub fn dispose(mut self)`

The `dispose` reserved method implements destructor method for structure. Destructor methods are called by compiler when destruction of structure which is implements destructor method pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have immutable non-reference `self` parameter
- Method should do not have generics

### Example
```jule
struct Test {}

impl Test {
    pub fn dispose(mut self) {
        outln("I am destructed")
    }
}
```

## `pub fn to_str(self): str`

The `to_str` reserved method implements a special string conversion algorithm, replacing the structure's default string formatting applied by the compiler.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `str`
- Method should be `pub`
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
    pub fn to_str(self): str {
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

## `pub fn eq(self, y: T): bool`

The `eq` reserved method implements equals operator for structure. The operator `==` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn eq(self, y: MyNumber): bool {
        ret self.x == y.x
    }
}
```

## `pub fn gt(self, y: T): bool`

The `gt` reserved method implements greater operator for structure. The operator `>` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn gt(self, y: MyNumber): bool {
        ret self.x > y.x
    }
}
```

## `pub fn gt_eq(self, y: T): bool`

The `gt_eq` reserved method implements greater or equals operator for structure. The operator `>=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn gt_eq(self, y: MyNumber): bool {
        ret self.x >= y.x
    }
}
```

## `pub fn lt(self, y: T): bool`

The `lt` reserved method implements less operator for structure. The operator `<` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn lt(self, y: MyNumber): bool {
        ret self.x < y.x
    }
}
```

## `pub fn lt_eq(self, y: T): bool`

The `lt_eq` reserved method implements less or equals operator for structure. The operator `<=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `bool`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn lt_eq(self, y: MyNumber): bool {
        ret self.x <= y.x
    }
}
```

## `pub fn shr(self, y: T): T`

The `shr` reserved method implements right shift operator for structure. The operator `>>` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn shr(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x >> y.x}
    }
}
```

## `pub fn shl(self, y: T): T`

The `shl` reserved method implements left shift operator for structure. The operator `<<` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn shl(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x << y.x}
    }
}
```

## `pub fn add(self, y: T): T`

The `add` reserved method implements add operator for structure. The operator `+` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn add(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x + y.x}
    }
}
```

## `pub fn sub(self, y: T): T`

The `sub` reserved method implements sub operator for structure. The operator `-` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn sub(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x - y.x}
    }
}
```

## `pub fn div(self, y: T): T`

The `div` reserved method implements division operator for structure. The operator `/` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn div(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x / y.x}
    }
}
```

## `pub fn mul(self, y: T): T`

The `mul` reserved method implements multiplication operator for structure. The operator `*` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn mul(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x * y.x}
    }
}
```

## `pub fn mod(self, y: T): T`

The `mod` reserved method implements modulo operator for structure. The operator `%` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn mod(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x % y.x}
    }
}
```

## `pub fn bit_and(self, y: T): T`

The `bit_and` reserved method implements bitwise and operator for structure. The operator `&` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_and(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x & y.x}
    }
}
```

## `pub fn bit_or(self, y: T): T`

The `bit_or` reserved method implements bitwise or operator for structure. The operator `|` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_or(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x | y.x}
    }
}
```

## `pub fn bit_xor(self, y: T): T`

The `bit_xor` reserved method implements bitwise xor operator for structure. The operator `^` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self` and `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_xor(self, y: MyNumber): MyNumber {
        ret MyNumber{self.x ^ y.x}
    }
}
```

## `pub fn neg(self): T`

The `neg` reserved method implements unary minus operator for structure. The unary operator `-` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn neg(self): MyNumber {
        ret MyNumber{-self.x}
    }
}
```

## `pub fn pos(self): T`

The `pos` reserved method implements unary plus operator for structure. The unary operator `+` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn pos(self): MyNumber {
        ret MyNumber{+self.x}
    }
}
```

## `pub fn bit_not(self): T`

The `bit_not` reserved method implements unary bit not operator for structure. The unary operator `^` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be `T`
- Method should be `pub`
- Method should only have immutable non-reference `self`
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_not(self): MyNumber {
        ret MyNumber{^self.x}
    }
}
```

## `pub fn add_assign(self, y: T)`

The `add_assign` reserved method implements addition assign operator for structure. The operator `+=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn add_assign(mut self, y: MyNumber) {
        self.x += y.x
    }
}
```

## `pub fn sub_assign(self, y: T)`

The `sub_assign` reserved method implements subtraction assign operator for structure. The operator `-=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn sub_assign(mut self, y: MyNumber) {
        self.x -= y.x
    }
}
```

## `pub fn div_assign(self, y: T)`

The `div_assign` reserved method implements division assign operator for structure. The operator `/=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn div_assign(mut self, y: MyNumber) {
        self.x /= y.x
    }
}
```

## `pub fn mul_assign(self, y: T)`

The `mul_assign` reserved method implements multiplication assign operator for structure. The operator `*=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn mul_assign(mut self, y: MyNumber) {
        self.x *= y.x
    }
}
```

## `pub fn mod_assign(self, y: T)`

The `mod_assign` reserved method implements modulo assign operator for structure. The operator `%=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn mod_assign(mut self, y: MyNumber) {
        self.x %= y.x
    }
}
```

## `pub fn shl_assign(self, y: T)`

The `shl_assign` reserved method implements left shift assign operator for structure. The operator `<<=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn shl_assign(mut self, y: MyNumber) {
        self.x <<= y.x
    }
}
```

## `pub fn shr_assign(self, y: T)`

The `shr_assign` reserved method implements right shift assign operator for structure. The operator `>>=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn shr_assign(mut self, y: MyNumber) {
        self.x >>= y.x
    }
}
```

## `pub fn bit_or_assign(self, y: T)`

The `bit_or_assign` reserved method implements bitwise or assign operator for structure. The operator `|=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_or_assign(mut self, y: MyNumber) {
        self.x |= y.x
    }
}
```

## `pub fn bit_and_assign(self, y: T)`

The `bit_and_assign` reserved method implements bitwise and assign operator for structure. The operator `&=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_and_assign(mut self, y: MyNumber) {
        self.x &= y.x
    }
}
```

## `pub fn bit_xor_assign(self, y: T)`

The `bit_xor_assign` reserved method implements bitwise xor assign operator for structure. The operator `^=` can be used with structure which is implements pattern.

### The Pattern

- Method should not be `unsafe` and `static`
- Return type should be void
- Method should be `pub`
- Method should only have mutable non-reference `self` and mutable non-reference `y` parameters
- Method should do not have generics

### Example
```jule
struct MyNumber {
    x: int
}

impl MyNumber {
    pub fn bit_xor_assign(mut self, y: MyNumber) {
        self.x ^= y.x
    }
}
```
