# Operator Overloading

Operator overloading has been added to Jule but has some restrictions. These restrictions are to reduce complexity and preserve simplicity. In Jule, constructs support operator overloading via reserved methods. Defined reserved methods can be used both as methods and implicitly when used with the corresponding operator.

Operators must always return the structure itself if they return a value. Method overloading is also not supported for binary operators, meaning a binary operator can only add support for a single data type.

Comparison operators `==` and `!=` are applied to all structures by the compiler by default. This implementation is based on comparison of all areas of structures.

## Overloading `==` Operator

To overload the `==` operator, the reserved `Eq` method must be defined. 

## Overloading `!=` Operator

You cannot able to overload the `!=` operator. This operator always will be imlemented by compiler. In logical, not equals operator is always equals to `!(x == y)`. Therefore compiler will implement this operator in this logic for you.

## Overloading `>` Operator

To overload the `>` operator, the reserved `Gt` method must be defined. 

## Overloading `>=` Operator

To overload the `>=` operator, the reserved `GtEq` method must be defined. 

## Overloading `<` Operator

To overload the `<` operator, the reserved `Lt` method must be defined. 

## Overloading `<=` Operator

To overload the `<=` operator, the reserved `LtEq` method must be defined. 

## Overloading `>>` Operator

To overload the `>>` operator, the reserved `Shr` method must be defined. 

## Overloading `<<` Operator

To overload the `<<` operator, the reserved `Shl` method must be defined. 

## Overloading `+` Operator

To overload the `+` operator, the reserved `Add` method must be defined. 

## Overloading `-` Operator

To overload the `-` operator, the reserved `Sub` method must be defined. 

## Overloading `/` Operator

To overload the `/` operator, the reserved `Div` method must be defined. 

## Overloading `*` Operator

To overload the `*` operator, the reserved `Mul` method must be defined. 

## Overloading `%` Operator

To overload the `%` operator, the reserved `Mod` method must be defined. 

## Overloading `&` Operator

To overload the `&` operator, the reserved `BitAnd` method must be defined. 

## Overloading `|` Operator

To overload the `|` operator, the reserved `BitOr` method must be defined. 

## Overloading `^` Operator

To overload the `^` operator, the reserved `BitXor` method must be defined. 

## Overloading Unary `-` Operator

To overload the unary `-` operator, the reserved `Neg` method must be defined. 

## Overloading Unary `+` Operator

To overload the unary `+` operator, the reserved `Pos` method must be defined. 

## Overloading Unary `^` Operator

To overload the unary `^` operator, the reserved `BitNot` method must be defined. 

## Overloading `+=` Operator

To overload the `+=` operator, the reserved `AddAssign` method must be defined. 

## Overloading `-=` Operator

To overload the `-=` operator, the reserved `SubAssign` method must be defined. 

## Overloading `/=` Operator

To overload the `/=` operator, the reserved `DivAssign` method must be defined. 

## Overloading `*=` Operator

To overload the `*=` operator, the reserved `MulAssign` method must be defined. 

## Overloading `%=` Operator

To overload the `%=` operator, the reserved `ModAssign` method must be defined. 

## Overloading `<<=` Operator

To overload the `<<=` operator, the reserved `ShlAssign` method must be defined. 

## Overloading `>>=` Operator

To overload the `>>=` operator, the reserved `ShrAssign` method must be defined. 

## Overloading `|=` Operator

To overload the `|=` operator, the reserved `BitOrAssign` method must be defined. 

## Overloading `&=` Operator

To overload the `&=` operator, the reserved `BitAndAssign` method must be defined. 

## Overloading `^=` Operator

To overload the `^=` operator, the reserved `BitXorAssign` method must be defined. 
