# std/net

Package url parses URLs and implements query escaping.

See RFC 3986. This package generally follows RFC 3986, except where it deviates for compatibility reasons.

## Index

[fn QueryUnescape\(s: str\)\!: str](#queryunescape)\
[fn PathUnescape\(s: str\)\!: str](#pathunescape)\
[fn QueryEscape\(s: str\): str](#queryescape)\
[fn PathEscape\(s: str\): str](#pathescape)\
[fn User\(username: str\): &amp;UserInfo](#user)\
[fn UserPassword\(username: str, password: str\): &amp;UserInfo](#userpassword)\
[fn Parse\(rawURL: str\)\!: &amp;URL](#parse)\
[fn ParseRequestURI\(rawURL: str\)\!: &amp;URL](#parserequesturi)\
[fn ParseQuery\(query: str\)\!: Values](#parsequery)\
[fn JoinPath\(base: str, elem: \.\.\.str\)\!: str](#joinpath)\
[struct UserInfo](#userinfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Username\(self\): str](#username)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Password\(self\): \(str, bool\)](#password)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)\
[struct URL](#url)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EscapedPath\(self\): str](#escapedpath)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EscapedFragment\(self\): str](#escapedfragment)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsAbs\(self\): bool](#isabs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ResolveReference\(mut self, mut ref: &amp;URL\): &amp;URL](#resolvereference)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Parse\(mut self, ref: str\)\!: &amp;URL](#parse-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Query\(self\)\!: Values](#query)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RequestURI\(self\): str](#requesturi)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Hostname\(self\): str](#hostname)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Port\(self\): str](#port)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn JoinPath\(mut self, elem: \.\.\.str\): &amp;URL](#joinpath-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Redacted\(self\): str](#redacted)\
[type Values](#values)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Get\(self, key: str\): str](#get)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set\(mut self, key: str, value: str\)](#set)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut self, key: str, value: str\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Del\(mut self, key: str\)](#del)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Has\(self, key: str\): bool](#has)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Encode\(self\): str](#encode)\
[enum URLError](#urlerror)



## QueryUnescape
```jule
fn QueryUnescape(s: str)!: str
```
Does the inverse transformation of \[QueryEscape\], converting each 3\-byte encoded substring of the form &#34;%AB&#34; into the hex\-decoded byte 0xAB\. It returns an error if any % is not followed by two hexadecimal digits\.

## PathUnescape
```jule
fn PathUnescape(s: str)!: str
```
Does the inverse transformation of \[PathEscape\], converting each 3\-byte encoded substring of the form &#34;%AB&#34; into the hex\-decoded byte 0xAB\. It returns an error if any % is not followed by two hexadecimal digits\.

It is identical to \[QueryUnescape\] except that it does not unescape &#39;\+&#39; to &#39; &#39; \(space\)\.

## QueryEscape
```jule
fn QueryEscape(s: str): str
```
Escapes the string so it can be safely placed inside a \[URL\] query\.

## PathEscape
```jule
fn PathEscape(s: str): str
```
Escapes the string so it can be safely placed inside a \[URL\] path segment, replacing special characters \(including /\) with %XX sequences as needed\.

## User
```jule
fn User(username: str): &UserInfo
```
Returns a \[UserInfo\] containing the provided username and no password set\.

## UserPassword
```jule
fn UserPassword(username: str, password: str): &UserInfo
```
Returns a \[UserInfo\] containing the provided username and password\.

This functionality should only be used with legacy web sites\. RFC 2396 warns that interpreting Userinfo this way “is NOT RECOMMENDED, because the passing of authentication information in clear text \(such as URI\) has proven to be a security risk in almost every case where it has been used\.”

## Parse
```jule
fn Parse(rawURL: str)!: &URL
```
Parses a raw url into a \[URL\] structure\.

The url may be relative \(a path, without a host\) or absolute \(starting with a scheme\)\. Trying to parse a hostname and path without a scheme is invalid but may not necessarily return an error, due to parsing ambiguities\.

## ParseRequestURI
```jule
fn ParseRequestURI(rawURL: str)!: &URL
```
Parses a raw url into a \[URL\] structure\. It assumes that url was received in an HTTP request, so the url is interpreted only as an absolute URI or an absolute path\. The string url is assumed not to have a \#fragment suffix\. \(Web browsers strip \#fragment before sending the URL to a web server\.\)

## ParseQuery
```jule
fn ParseQuery(query: str)!: Values
```
Parses the URL\-encoded query string and returns a map listing the values specified for each key\. It always returns a non\-nil map containing all the valid query parameters found; err describes the first decoding error encountered, if any\.

Query is expected to be a list of key=value settings separated by ampersands\. A setting without an equals sign is interpreted as a key set to an empty value\. Settings containing a non\-URL\-encoded semicolon are considered invalid\.

## JoinPath
```jule
fn JoinPath(base: str, elem: ...str)!: str
```
Returns a \[URL\] string with the provided path elements joined to the existing path of base and the resulting path cleaned of any \./ or \.\./ elements\.

## UserInfo
```jule
struct UserInfo {
	// NOTE: contains filtered hidden or unexported fields
}
```
Immutable encapsulation of username and password details for a \[URL\]\. An existing Userinfo value is guaranteed to have a username set \(potentially empty, as allowed by RFC 2396\), and optionally a password\.

### Username
```jule
fn Username(self): str
```
Returns the username\.

### Password
```jule
fn Password(self): (str, bool)
```
Returns the password in case it is set, and whether it is set\.

### Str
```jule
fn Str(self): str
```
Returns the encoded userinfo information in the standard form of &#34;username\[:password\]&#34;\.

## URL
```jule
struct URL {
	Scheme:      str
	Opaque:      str       // encoded opaque data
	User:        &UserInfo // username and password information
	Host:        str       // host or host:port (see Hostname and Port methods)
	Path:        str       // path (relative paths may omit leading slash)
	RawPath:     str       // encoded path hint (see EscapedPath method)
	OmitHost:    bool      // do not emit empty host (authority)
	ForceQuery:  bool      // append a query ('?') even if RawQuery is empty
	RawQuery:    str       // encoded query values, without '?'
	Fragment:    str       // fragment for references, without '#'
	RawFragment: str       // encoded fragment hint (see EscapedFragment method)
}
```
A URL represents a parsed URL \(technically, a URI reference\)\.

The general form represented is:

```
[scheme:][//[userinfo@]host][/]path[?query][#fragment]
```
URLs that do not start with a slash after the scheme are interpreted as:

```
scheme:opaque[?query][#fragment]
```
The Host field contains the host and port subcomponents of the URL\. When the port is present, it is separated from the host with a colon\. When the host is an IPv6 address, it must be enclosed in square brackets: &#34;\[fe80::1\]:80&#34;\. The \[net::JoinHostPort\] function combines a host and port into a string suitable for the Host field, adding square brackets to the host when necessary\.

Note that the Path field is stored in decoded form: /%47%6f%2f becomes /Go/\. A consequence is that it is impossible to tell which slashes in the Path were slashes in the raw URL and which were %2f\. This distinction is rarely important, but when it is, the code should use the \[URL\.EscapedPath\] method, which preserves the original encoding of Path\.

The RawPath field is an optional field which is only set when the default encoding of Path is different from the escaped path\. See the EscapedPath method for more details\.

URL&#39;s Str method uses the EscapedPath method to obtain the path\.

### EscapedPath
```jule
fn EscapedPath(self): str
```
Returns the escaped form of self\.Path\. In general there are multiple possible escaped forms of any path\. It returns self\.RawPath when it is a valid escaping of self\.Path\. Otherwise it ignores self\.RawPath and computes an escaped form on its own\. The \[URL\.Str\] and \[URL\.RequestURI\] methods use EscapedPath to construct their results\. In general, code should call EscapedPath instead of reading self\.RawPath directly\.

### EscapedFragment
```jule
fn EscapedFragment(self): str
```
Returns the escaped form of self\.Fragment\. In general there are multiple possible escaped forms of any fragment\. It returns self\.RawFragment when it is a valid escaping of self\.Fragment\. Otherwise it ignores self\.RawFragment and computes an escaped form on its own\. The \[URL\.Str\] method uses EscapedFragment to construct its result\. In general, code should call EscapedFragment instead of reading self\.RawFragment directly\.

### IsAbs
```jule
fn IsAbs(self): bool
```
Reports whether the \[URL\] is absolute\. Absolute means that it has a non\-empty scheme\.

### ResolveReference
```jule
fn ResolveReference(mut self, mut ref: &URL): &URL
```
Resolves a URI reference to an absolute URI from an absolute base URI self, per RFC 3986 Section 5\.2\. The URI reference may be relative or absolute\. It always returns a new \[URL\] instance, even if the returned URL is identical to either the base or reference\. If ref is an absolute URL, then it ignores base and returns a copy of ref\.

### Parse
```jule
fn Parse(mut self, ref: str)!: &URL
```
Parses a \[URL\] in the context of the receiver\. The provided URL may be relative or absolute\. It returns nil, error on parse failure, otherwise its return value is the same as \[URL\.ResolveReference\]\.

### Query
```jule
fn Query(self)!: Values
```
Parses RawQuery and returns the corresponding values\.

### RequestURI
```jule
fn RequestURI(self): str
```
Returns the encoded path?query or opaque?query string that would be used in an HTTP request for self\.

### Hostname
```jule
fn Hostname(self): str
```
Returns self\.Host, stripping any valid port number if present\.

If the result is enclosed in square brackets, as literal IPv6 addresses are, the square brackets are removed from the result\.

### Port
```jule
fn Port(self): str
```
Returns the port part of self\.Host, without the leading colon\.

If self\.Host doesn&#39;t contain a valid numeric port, returns an empty string\.

### JoinPath
```jule
fn JoinPath(mut self, elem: ...str): &URL
```
Returns a new \[URL\] with the provided path elements joined to any existing path and the resulting path cleaned of any \./ or \.\./ elements\. Any sequences of multiple / characters will be reduced to a single /\.

### Str
```jule
fn Str(self): str
```
Reassembles the \[URL\] into a valid URL string\. The general form of the result is one of:

```
scheme:opaque?query#fragment
scheme://userinfo@host/path?query#fragment
```
If self\.Opaque is non\-empty, it uses the first form; otherwise it uses the second form\. Any non\-ASCII characters in host are escaped\. To obtain the path, it uses self\.EscapedPath\(\)\.

In the second form, the following rules apply:<br>

- if self\.Scheme is empty, scheme: is omitted\.
- if self\.User is nil, userinfo\@ is omitted\.
- if self\.Host is empty, host/ is omitted\.
- if self\.Scheme and self\.Host are empty and self\.User is nil, the entire scheme://userinfo\@host/ is omitted\.
- if self\.Host is non\-empty and self\.Path begins with a /, the form host/path does not add its own /\.
- if self\.RawQuery is empty, ?query is omitted\.
- if self\.Fragment is empty, \#fragment is omitted\.

### Redacted
```jule
fn Redacted(self): str
```
Like \[URL\.Str\] but replaces any password with &#34;xxxxx&#34;\. Only the password in self\.User is redacted\.

## Values
```jule
type Values: map[str][]str
```
Maps a string key to a list of values\. It is typically used for query parameters and form values\. The keys in a Values map are case\-sensitive\.

### Get
```jule
fn Get(self, key: str): str
```
Gets the first value associated with the given key\. If there are no values associated with the key, returns the empty string\. To access multiple values, use the map directly\.

### Set
```jule
fn Set(mut self, key: str, value: str)
```
Sets the key to value\. It replaces any existing values\.

### Add
```jule
fn Add(mut self, key: str, value: str)
```
Adds the value to key\. It appends to any existing values associated with key\.

### Del
```jule
fn Del(mut self, key: str)
```
Deletes the values associated with key\.

### Has
```jule
fn Has(self, key: str): bool
```
Reports whether a given key is set\.

### Encode
```jule
fn Encode(self): str
```
Encodes the values into “URL encoded” form \(&#34;bar=baz&amp;foo=quux&#34;\) sorted by key\.

## URLError
```jule
enum URLError {
	Escape,
	InvalidHost,
	MissingProtocolScheme,
	EmptyURL,
	InvalidControlCharacter,
	InvalidURI,
	FirstPathSegmentCannotContainColon,
	InvalidUserInfo,
	InvalidPort,
	InvalidFormat,
}
```
URL error codes\.