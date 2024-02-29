# Operator Overloading

Operator overloading has been added to Jule but has some restrictions. These restrictions are to reduce complexity and preserve simplicity. In Jule, constructs support operator overloading via reserved methods. Defined reserved methods can be used both as methods and implicitly when used with the corresponding operator.

Operators must always return the structure itself if they return a value. Method overloading is also not supported for binary operators, meaning a binary operator can only add support for a single data type.

Comparison operators `==` and `!=` are applied to all structures by the compiler by default. This implementation is based on comparison of all areas of structures.

## Overloading `==` Operator

To overload the `==` operator, the reserved `eq` method must be defined. 

## Overloading `!=` Operator

You cannot able to overload the `!=` operator. This operator always will be imlemented by compiler. In logical, not equals operator is always equals to `!(x == y)`. Therefore compiler will implement this operator in this logic for you.

## Overloading `>` Operator

To overload the `>` operator, the reserved `gt` method must be defined. 

## Overloading `>=` Operator

To overload the `>=` operator, the reserved `gt_eq` method must be defined. 

## Overloading `<` Operator

To overload the `<` operator, the reserved `lt` method must be defined. 

## Overloading `<=` Operator

To overload the `<=` operator, the reserved `lt_eq` method must be defined. 

## Overloading `>>` Operator

To overload the `>>` operator, the reserved `shr` method must be defined. 

## Overloading `<<` Operator

To overload the `<<` operator, the reserved `shl` method must be defined. 

## Overloading `+` Operator

To overload the `+` operator, the reserved `add` method must be defined. 

## Overloading `-` Operator

To overload the `-` operator, the reserved `sub` method must be defined. 

## Overloading `/` Operator

To overload the `/` operator, the reserved `div` method must be defined. 

## Overloading `*` Operator

To overload the `*` operator, the reserved `mul` method must be defined. 

## Overloading `%` Operator

To overload the `%` operator, the reserved `mod` method must be defined. 

## Overloading `&` Operator

To overload the `&` operator, the reserved `bit_and` method must be defined. 

## Overloading `|` Operator

To overload the `|` operator, the reserved `bit_or` method must be defined. 

## Overloading `^` Operator

To overload the `^` operator, the reserved `bit_xor` method must be defined. 

## Overloading Unary `-` Operator

To overload the unary `-` operator, the reserved `neg` method must be defined. 

## Overloading Unary `+` Operator

To overload the unary `+` operator, the reserved `pos` method must be defined. 

## Overloading Unary `^` Operator

To overload the unary `^` operator, the reserved `bit_not` method must be defined. 

## Overloading `+=` Operator

To overload the `+=` operator, the reserved `add_assign` method must be defined. 

## Overloading `-=` Operator

To overload the `-=` operator, the reserved `sub_assign` method must be defined. 

## Overloading `/=` Operator

To overload the `/=` operator, the reserved `div_assign` method must be defined. 

## Overloading `*=` Operator

To overload the `*=` operator, the reserved `mul_assign` method must be defined. 

## Overloading `%=` Operator

To overload the `%=` operator, the reserved `mod_assign` method must be defined. 

## Overloading `<<=` Operator

To overload the `<<=` operator, the reserved `shl_assign` method must be defined. 

## Overloading `>>=` Operator

To overload the `>>=` operator, the reserved `shr_assign` method must be defined. 

## Overloading `|=` Operator

To overload the `|=` operator, the reserved `bit_or_assign` method must be defined. 

## Overloading `&=` Operator

To overload the `&=` operator, the reserved `bit_and_assign` method must be defined. 

## Overloading `^=` Operator

To overload the `^=` operator, the reserved `bit_xor_assign` method must be defined. 
