# std/os/filepath

## Index

[fn Clean(mut path: str): str](#clean)\
[fn ToSlash(path: str): str](#toslash)\
[fn FromSlash(path: str): str](#fromslash)\
[fn Join(elem: ...str): str](#join)\
[fn Ext(path: str): str](#ext)\
[fn Abs(path: str): (str, bool)](#abs)\
[fn Base(mut path: str): str](#base)\
[fn Dir(path: str): str](#dir)\
[fn VolumeName(path: str): str](#volumename)



## Clean
```jule
fn Clean(mut path: str): str
```
Returns the shortest path name equivalent to path by purely lexical processing. It applies the following rules iteratively until no further processing can be done:

```
1. Replace multiple SEPARATOR elements with a single one.
2. Eliminate each . path name element (the current directory).
3. Eliminate each inner .. path name element (the parent directory)
			along with the non-.. element that precedes it.
4. Eliminate .. elements that begin a rooted path:
			that is, replace "/.." by "/" at the beginning of a path,
			assuming SEPARATOR is '/'.
```
The returned path ends in a slash only if it represents a root directory, such as &#34;/&#34; on Unix or \`C:\\\` on Windows.

Finally, any occurrences of slash are replaced by SEPARATOR.

If the result of this process is an empty string, clean returns the string &#34;.&#34;.

On Windows, clean does not modify the volume name other than to replace occurrences of &#34;/&#34; with \`\\\`. For example, clean(&#34;//host/share/../x&#34;) returns \`\\\\host\\share\\x\`.

See also Rob Pike, “Lexical File Names in Plan 9 or Getting Dot-Dot Right” https://9p.io/sys/doc/lexnames.html

## ToSlash
```jule
fn ToSlash(path: str): str
```
Returns the result of replacing each separator character in path with a slash (&#39;/&#39;) character. Multiple separators are replaced by multiple slashes.

## FromSlash
```jule
fn FromSlash(path: str): str
```
Returns the result of replacing each slash (&#39;/&#39;) character in path with a separator character. Multiple slashes are replaced by multiple separators.

## Join
```jule
fn Join(elem: ...str): str
```
Joins any number of path elements into a single path, separating them with an OS specific SEPARATOR. Empty elements are ignored. The result is cleaned. However, if the argument list is empty or all its elements are empty, join returns an empty string. On Windows, the result will only be a UNC path if the first non-empty element is a UNC path.

## Ext
```jule
fn Ext(path: str): str
```
Returns the file name extension used by path. The extension is the suffix beginning at the final dot in the final element of path; it is empty if there is no dot.

## Abs
```jule
fn Abs(path: str): (str, bool)
```
Returns an absolute representation of path. If the path is not absolute it will be joined with the current working directory to turn it into an absolute path. The absolute path name for a given file is not guaranteed to be unique. abs calls clean on the result.

## Base
```jule
fn Base(mut path: str): str
```
Returns the last element of path. Trailing path separators are removed before extracting the last element. If the path is empty, base returns &#34;.&#34;. If the path consists entirely of separators, base returns a single separator.

## Dir
```jule
fn Dir(path: str): str
```
Returns all but the last element of path, typically the path&#39;s directory. After dropping the final element, dir calls clean on the path and trailing slashes are removed. If the path is empty, dir returns &#34;.&#34;. If the path consists entirely of separators, dir returns a single separator. The returned path does not end in a separator unless it is the root directory.

## VolumeName
```jule
fn VolumeName(path: str): str
```
Returns leading volume name. Given &#34;C:\\foo\\bar&#34; it returns &#34;C:&#34; on Windows. Given &#34;\\\\host\\share\\foo&#34; it returns &#34;\\\\host\\share&#34;. On other platforms it returns empty string.