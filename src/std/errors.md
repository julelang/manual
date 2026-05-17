# std/errors

## Index

[fn New\(err: string\): &amp;Error](#new)\
[type Error](#error)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string)



## New
```jule
fn New(err: string): &Error
```
Returns an error instance with message\. The returned type is an anonymous, meaning it cannot obtain any underlying type\.

## Error
```jule
type Error: string
```
Internal type for anonymous errors\.

### String
```jule
fn String(*self): string
```
Returns error as string\.