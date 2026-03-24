# std/errors

## Index

[fn New\(err: str\): &amp;Error](#new)\
[type Error](#error)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)



## New
```jule
fn New(err: str): &Error
```
Returns an error instance with message\. The returned type is an anonymous, meaning it cannot obtain any underlying type\.

## Error
```jule
type Error: str
```
Internal type for anonymous errors\.

### Str
```jule
fn Str(*self): str
```
Returns error as string\.