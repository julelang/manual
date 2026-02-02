# std/conv

## Index

[Variables](#variables)\
[fn ParseBool\(s: str\)\!: bool](#parsebool)\
[fn FormatBool\(b: bool\): str](#formatbool)\
[fn AppendBool\(mut dst: \[\]byte, b: bool\): \[\]byte](#appendbool)\
[fn ParseCmplx\(mut s: str, bitSize: int\)\!: cmplx128](#parsecmplx)\
[fn ParseFloat\(s: str, bitSize: int\)\!: f64](#parsefloat)\
[fn ParseUint\(mut s: str, mut base: int, mut bitSize: int\)\!: u64](#parseuint)\
[fn ParseInt\(mut s: str, base: int, mut bitSize: int\)\!: i64](#parseint)\
[fn Atoi\(mut s: str\)\!: int](#atoi)\
[fn FormatCmplx\(c: cmplx128, fmt: byte, prec: int, mut bitSize: int\): str](#formatcmplx)\
[fn FormatFloat\(f: f64, fmt: byte, prec: int, bitSize: int\): str](#formatfloat)\
[fn AppendFloat\(mut dst: \[\]byte, f: f64, fmt: byte, prec: int, bitSize: int\): \[\]byte](#appendfloat)\
[fn FormatUint\(i: u64, base: int\): str](#formatuint)\
[fn FormatInt\(i: i64, base: int\): str](#formatint)\
[fn AppendInt\(mut dst: \[\]byte, i: i64, base: int\): \[\]byte](#appendint)\
[fn AppendUint\(mut dst: \[\]byte, i: u64, base: int\): \[\]byte](#appenduint)\
[fn Itoa\(i: int\): str](#itoa)\
[fn Quote\(s: str\): str](#quote)\
[fn AppendQuote\(mut dst: \[\]byte, s: str\): \[\]byte](#appendquote)\
[fn QuoteToASCII\(s: str\): str](#quotetoascii)\
[fn AppendQuoteToASCII\(mut dst: \[\]byte, s: str\): \[\]byte](#appendquotetoascii)\
[fn QuoteToGraphic\(s: str\): str](#quotetographic)\
[fn AppendQuoteToGraphic\(mut dst: \[\]byte, s: str\): \[\]byte](#appendquotetographic)\
[fn QuoteRune\(r: rune\): str](#quoterune)\
[fn AppendQuoteRune\(mut dst: \[\]byte, r: rune\): \[\]byte](#appendquoterune)\
[fn QuoteRuneToASCII\(r: rune\): str](#quoterunetoascii)\
[fn AppendQuoteRuneToASCII\(mut dst: \[\]byte, r: rune\): \[\]byte](#appendquoterunetoascii)\
[fn QuoteRuneToGraphic\(r: rune\): str](#quoterunetographic)\
[fn AppendQuoteRuneToGraphic\(mut dst: \[\]byte, r: rune\): \[\]byte](#appendquoterunetographic)\
[fn CanBackquote\(mut s: str\): bool](#canbackquote)\
[fn UnquoteChar\(mut s: str, quote: byte\)\!: \(value: rune, multibyte: bool, tail: str\)](#unquotechar)\
[fn QuotedPrefix\(s: str\)\!: str](#quotedprefix)\
[fn Unquote\(s: str\)\!: str](#unquote)\
[fn IsGraphic\(r: rune\): bool](#isgraphic)\
[struct NumError](#numerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)

## Variables

```jule
const IntSize = intSize
```
Is the size in bits of an int or uint value\.

---

```jule
let mut ErrSyntax = errors::New("invalid syntax")
```
Indicates that a value does not have the right syntax for the target type\. Mutation is undefined behavior\.

---

```jule
let mut ErrRange = errors::New("value out of range")
```
That a value is out of range for the target type\. Mutation is undefined behavior\.

## ParseBool
```jule
fn ParseBool(s: str)!: bool
```
Returns the boolean value represented by the string\. It accepts 1, t, T, TRUE, true, True, 0, f, F, FALSE, false, False\. Any other value throws exception\.

## FormatBool
```jule
fn FormatBool(b: bool): str
```
Returns &#34;true&#34; or &#34;false&#34; according to the value of b\.

## AppendBool
```jule
fn AppendBool(mut dst: []byte, b: bool): []byte
```
Appends &#34;true&#34; or &#34;false&#34;, according to the value of b, to dst and returns the extended buffer\.

## ParseCmplx
```jule
fn ParseCmplx(mut s: str, bitSize: int)!: cmplx128
```
Converts the string s to a complex number with the precision specified by bitSize: 64 for cmplx64, or 128 for cmplx128\. When bitSize=64, the result still has type cmplx128, but it will be convertible to cmplx64 without changing its value\.

The number represented by s must be of the form N, Ni, or N±Ni, where N stands for a floating\-point number as recognized by \[ParseFloat\], and i is the imaginary component\. If the second N is unsigned, a \+ sign is required between the two components as indicated by the ±\. If the second N is NaN, only a \+ sign is accepted\. The form may be parenthesized and cannot contain any spaces\. The resulting complex number consists of the two components converted by ParseFloat\.

The errors that it returns have concrete type \[&amp;NumError\] and include err\.Num = s\.

If s is not syntactically well\-formed, it returns err\.Err = ErrSyntax\.

If s is syntactically well\-formed but either component is more than 1/2 ULP away from the largest floating point number of the given component&#39;s size, it returns err\.Err = ErrRange and c = ±Inf for the respective component\.

## ParseFloat
```jule
fn ParseFloat(s: str, bitSize: int)!: f64
```
Converts the string s to a floating\-point number with the precision specified by bitSize: 32 for f32, or 64 for f64\. When bitSize=32, the result still has type f64, but it will be convertible to f32 without changing its value\.

It accepts decimal and hexadecimal floating\-point numbers as defined by the Jule syntax for \[floating\-point literals\]\. If s is well\-formed and near a valid floating\-point number, it returns the nearest floating\-point number rounded using IEEE754 unbiased rounding\. \(Parsing a hexadecimal floating\-point value only rounds when there are more bits in the hexadecimal representation than will fit in the mantissa\.\)

The errors that it returns have concrete type &amp;NumError and include err\.Num = s\.

If s is not syntactically well\-formed, it returns err\.Err = ErrSyntax\.

If s is syntactically well\-formed but is more than 1/2 ULP away from the largest floating point number of the given size, it returns f = ±Inf, err\.Err = ErrRange\.

It recognizes the string &#34;NaN&#34;, and the \(possibly signed\) strings &#34;Inf&#34; and &#34;Infinity&#34; as their respective special floating point values\. It ignores case when matching\.

\[floating\-point literals\]: https://manual\.jule\.dev/introduction/data\-types\.html\#floating\-point\-literals

## ParseUint
```jule
fn ParseUint(mut s: str, mut base: int, mut bitSize: int)!: u64
```
Is like \[ParseInt\] but for unsigned numbers\.

A sign prefix is not permitted\.

## ParseInt
```jule
fn ParseInt(mut s: str, base: int, mut bitSize: int)!: i64
```
Interprets a string s in the given base \(0, 2 to 36\) and bit size \(0 to 64\) and returns the corresponding value i\.

The string may begin with a leading sign: &#34;\+&#34; or &#34;\-&#34;\.

If the base argument is 0, the true base is implied by the string&#39;s prefix following the sign \(if present\): 2 for &#34;0b&#34;, 8 for &#34;0&#34; or &#34;0o&#34;, 16 for &#34;0x&#34;, and 10 otherwise\. Also, for argument base 0 only, underscore characters are permitted as defined by the Jule syntax for \[integer literals\]\.

The bitSize argument specifies the integer type that the result must fit into\. Bit sizes 0, 8, 16, 32, and 64 correspond to int, i8, i16, i32, and i64\. If bitSize is below 0 or above 64, an error is returned\.

The errors that it returns have concrete type \[&amp;NumError\] and include err\.Num = s\. If s is empty or contains invalid  digits, err\.Err = \[ErrSyntax\]; if the value corresponding to s cannot be represented by a signed integer of the given size,  err\.Err = \[ErrRange\]\.

\[integer literals\]: https://manual\.jule\.dev/introduction/data\-types\#integer\-literals

## Atoi
```jule
fn Atoi(mut s: str)!: int
```
Is equivalent to ParseInt\(s, 10, 0\), converted to int\.

## FormatCmplx
```jule
fn FormatCmplx(c: cmplx128, fmt: byte, prec: int, mut bitSize: int): str
```
Converts the complex number c to a string of the form \(a\+bi\) where a and b are the real and imaginary parts, formatted according to the format fmt and precision prec\.

The format fmt and precision prec have the same meaning as in \[FormatFloat\]\. It rounds the result assuming that the original was obtained from a complex value of bitSize bits, which must be 64 for cmplx64 and 128 for cmplx128\.

## FormatFloat
```jule
fn FormatFloat(f: f64, fmt: byte, prec: int, bitSize: int): str
```
Converts the floating\-point number f to a string, according to the format fmt and precision prec\. It rounds the result assuming that the original was obtained from a floating\-point value of bitSize bits \(32 for f32, 64 for f64\)\.

The format fmt is one of &#39;b&#39; \(\-ddddp±ddd, a binary exponent\), &#39;e&#39; \(\-d\.dddde±dd, a decimal exponent\), &#39;E&#39; \(\-d\.ddddE±dd, a decimal exponent\), &#39;f&#39; \(\-ddd\.dddd, no exponent\), &#39;g&#39; \(&#39;e&#39; for large exponents, &#39;f&#39; otherwise\), &#39;G&#39; \(&#39;E&#39; for large exponents, &#39;f&#39; otherwise\), &#39;x&#39; \(\-0xd\.ddddp±ddd, a hexadecimal fraction and binary exponent\), or &#39;X&#39; \(\-0Xd\.ddddP±ddd, a hexadecimal fraction and binary exponent\)\.

The precision prec controls the number of digits \(excluding the exponent\) printed by the &#39;e&#39;, &#39;E&#39;, &#39;f&#39;, &#39;g&#39;, &#39;G&#39;, &#39;x&#39;, and &#39;X&#39; formats\. For &#39;e&#39;, &#39;E&#39;, &#39;f&#39;, &#39;x&#39;, and &#39;X&#39;, it is the number of digits after the decimal point\. For &#39;g&#39; and &#39;G&#39; it is the maximum number of significant digits \(trailing zeros are removed\)\. The special precision \-1 uses the smallest number of digits necessary such that ParseFloat will return f exactly\.

## AppendFloat
```jule
fn AppendFloat(mut dst: []byte, f: f64, fmt: byte, prec: int, bitSize: int): []byte
```
Appends the string form of the floating\-point number f, as generated by \[FormatFloat\], to dst and returns the extended buffer\.

## FormatUint
```jule
fn FormatUint(i: u64, base: int): str
```
Returns the string representation of i in the given base, for 2 &lt;= base &lt;= 36\. The result uses the lower\-case letters &#39;a&#39; to &#39;z&#39; for digit values &gt;= 10\.

## FormatInt
```jule
fn FormatInt(i: i64, base: int): str
```
Returns the string representation of i in the given base, for 2 &lt;= base &lt;= 36\. The result uses the lower\-case letters &#39;a&#39; to &#39;z&#39; for digit values &gt;= 10\.

## AppendInt
```jule
fn AppendInt(mut dst: []byte, i: i64, base: int): []byte
```
Appends the string form of the integer i, as generated by \[FormatInt\], to dst and returns the extended buffer\.

## AppendUint
```jule
fn AppendUint(mut dst: []byte, i: u64, base: int): []byte
```
Appends the string form of the unsigned integer i, as generated by \[FormatUint\], to dst and returns the extended buffer\.

## Itoa
```jule
fn Itoa(i: int): str
```
Is equivalent to \[FormatInt\]\(i64\(i\), 10\)\.

## Quote
```jule
fn Quote(s: str): str
```
Returns a double\-quoted Jule string literal representing s\. The returned string uses Jule escape sequences \(\\t, \\n, \\xFF, \\u0100\) for control characters and non\-printable characters as defined by \[unicode::IsPrint\]\.

## AppendQuote
```jule
fn AppendQuote(mut dst: []byte, s: str): []byte
```
Appends a double\-quoted Jule string literal representing s, as generated by \[Quote\], to dst and returns the extended buffer\.

## QuoteToASCII
```jule
fn QuoteToASCII(s: str): str
```
Returns a double\-quoted Jule string literal representing s\. The returned string uses Jule escape sequences \(\\t, \\n, \\xFF, \\u0100\) for non\-ASCII characters and non\-printable characters as defined by \[IsPrint\]\.

## AppendQuoteToASCII
```jule
fn AppendQuoteToASCII(mut dst: []byte, s: str): []byte
```
Appends a double\-quoted Jule string literal representing s, as generated by \[QuoteToASCII\], to dst and returns the extended buffer\.

## QuoteToGraphic
```jule
fn QuoteToGraphic(s: str): str
```
Returns a double\-quoted Jule string literal representing s\. The returned string leaves Unicode graphic characters, as defined by \[IsGraphic\], unchanged and uses Jule escape sequences \(\\t, \\n, \\xFF, \\u0100\) for non\-graphic characters\.

## AppendQuoteToGraphic
```jule
fn AppendQuoteToGraphic(mut dst: []byte, s: str): []byte
```
Appends a double\-quoted Jule string literal representing s, as generated by \[QuoteToGraphic\], to dst and returns the extended buffer\.

## QuoteRune
```jule
fn QuoteRune(r: rune): str
```
Returns a single\-quoted Jule character literal representing the rune\. The returned string uses Jule escape sequences \(\\t, \\n, \\xFF, \\u0100\) for control characters and non\-printable characters as defined by \[IsPrint\]\. If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U\+FFFD\.

## AppendQuoteRune
```jule
fn AppendQuoteRune(mut dst: []byte, r: rune): []byte
```
Appends a single\-quoted Jule character literal representing the rune, as generated by \[QuoteRune\], to dst and returns the extended buffer\.

## QuoteRuneToASCII
```jule
fn QuoteRuneToASCII(r: rune): str
```
Returns a single\-quoted Jule character literal representing the rune\. The returned string uses Jule escape sequences \(\\t, \\n, \\xFF, \\u0100\) for non\-ASCII characters and non\-printable characters as defined by \[IsPrint\]\. If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U\+FFFD\.

## AppendQuoteRuneToASCII
```jule
fn AppendQuoteRuneToASCII(mut dst: []byte, r: rune): []byte
```
Appends a single\-quoted Jule character literal representing the rune, as generated by \[QuoteRuneToASCII\], to dst and returns the extended buffer\.

## QuoteRuneToGraphic
```jule
fn QuoteRuneToGraphic(r: rune): str
```
Returns a single\-quoted Jule character literal representing the rune\. If the rune is not a Unicode graphic character, as defined by \[IsGraphic\], the returned string will use a Jule escape sequence \(\\t, \\n, \\xFF, \\u0100\)\. If r is not a valid Unicode code point, it is interpreted as the Unicode replacement character U\+FFFD\.

## AppendQuoteRuneToGraphic
```jule
fn AppendQuoteRuneToGraphic(mut dst: []byte, r: rune): []byte
```
Appends a single\-quoted Jule character literal representing the rune, as generated by \[QuoteRuneToGraphic\], to dst and returns the extended buffer\.

## CanBackquote
```jule
fn CanBackquote(mut s: str): bool
```
Reports whether the string s can be represented unchanged as a single\-line backquoted string without control characters other than tab\.

## UnquoteChar
```jule
fn UnquoteChar(mut s: str, quote: byte)!: (value: rune, multibyte: bool, tail: str)
```
Decodes the first character or byte in the escaped string or character literal represented by the string s\. It returns four values:

1\. value, the decoded Unicode code point or byte value; 2\. multibyte, a boolean indicating whether the decoded character requires a multibyte UTF\-8 representation; 3\. tail, the remainder of the string after the character; and 4\. an error that will be nil if the character is syntactically valid\.

The second argument, quote, specifies the type of literal being parsed and therefore which escaped quote character is permitted\. If set to a single quote, it permits the sequence \\&#39; and disallows unescaped &#39;\. If set to a double quote, it permits \\&#34; and disallows unescaped &#34;\. If set to zero, it does not permit either escape and allows both quote characters to appear unescaped\.

## QuotedPrefix
```jule
fn QuotedPrefix(s: str)!: str
```
Returns the quoted string \(as understood by \[Unquote\]\) at the prefix of s\. If s does not start with a valid quoted string, it returns an error\.

## Unquote
```jule
fn Unquote(s: str)!: str
```
Interprets s as a single\-quoted, double\-quoted, or backquoted Jule string literal, returning the string value that s quotes\. \(If s is single\-quoted, it would be a Jule character literal; Unquote returns the corresponding one\-character string\. For an empty character literal Unquote returns the empty string\.\)

## IsGraphic
```jule
fn IsGraphic(r: rune): bool
```
Reports whether the rune is defined as a Graphic by Unicode\. Such characters include letters, marks, numbers, punctuation, symbols, and spaces, from categories L, M, N, P, S, and Zs\.

## NumError
```jule
struct NumError {
	Func: str // the failing function (ParseBool, ParseInt, ParseUint, ParseFloat, ParseComplex)
	Num:  str // the input
	Err:  any // the reason the conversion failed (e.g. ErrRange, ErrSyntax, etc.)
}
```
Records a failed conversion\.

### Str
```jule
fn Str(*self): str
```