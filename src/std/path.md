# std/path

## Index

[fn Clean(path: str): str](#clean)\
[fn Split(path: str): (dir: str, file: str)](#split)\
[fn Join(elem: ...str): str](#join)\
[fn Ext(path: str): str](#ext)\
[fn Base(mut path: str): str](#base)\
[fn IsAbs(path: str): bool](#isabs)\
[fn Dir(path: str): str](#dir)



## Clean
```jule
fn Clean(path: str): str
```
Returns the shortest path name equivalent to path by purely lexical processing. It applies the following rules iteratively until no further processing can be done:

```
1. Replace multiple slashes with a single slash.
2. Eliminate each . path name element (the current directory).
3. Eliminate each inner .. path name element (the parent directory)
			along with the non-.. element that precedes it.
4. Eliminate .. elements that begin a rooted path:
			that is, replace "/.." by "/" at the beginning of a path.
```
The returned path ends in a slash only if it is the root &#34;/&#34;.

If the result of this process is an empty string, returns the string &#34;.&#34;.

See also Rob Pike, “Lexical File Names in Plan 9 or Getting Dot-Dot Right,” https://9p.io/sys/doc/lexnames.html

## Split
```jule
fn Split(path: str): (dir: str, file: str)
```
Splits path immediately following the final slash, separating it into a directory and file name component. If there is no slash in path, returns an empty dir and file set to path. The returned values have the property that path = dir+file.

## Join
```jule
fn Join(elem: ...str): str
```
Joins any number of path elements into a single path, separating them with slashes. Empty elements are ignored. The result is Cleaned. However, if the argument list is empty or all its elements are empty, returns an empty string.

## Ext
```jule
fn Ext(path: str): str
```
Returns the file name extension used by path. The extension is the suffix beginning at the final dot in the final slash-separated element of path; it is empty if there is no dot.

## Base
```jule
fn Base(mut path: str): str
```
Returns the last element of path. Trailing slashes are removed before extracting the last element. If the path is empty, returns &#34;.&#34;. If the path consists entirely of slashes, returns &#34;/&#34;.

## IsAbs
```jule
fn IsAbs(path: str): bool
```
Reports whether the path is absolute.

## Dir
```jule
fn Dir(path: str): str
```
Returns all but the last element of path, typically the path&#39;s directory. After dropping the final element using \[Split\], the path is Cleaned and trailing slashes are removed. If the path is empty, returns &#34;.&#34;. If the path consists entirely of slashes followed by non-slash bytes, returns a single slash. In any other case, the returned path does not end in a slash.