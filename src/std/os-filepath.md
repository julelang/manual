# std/os/filepath

## Constants
```jule
const Separator
```
Operating system specific path separator.

---

```jule
const ListSeparator
```
Operating system specific path list separator.

## Functions
```jule
fn IsAbs(path: str): bool
```
Reports whether the path is absolute.

---

```jule
fn IsPathSep(c: byte): bool
```
Reports whether c is path separator.

---

```jule
fn Clean(mut path: str): str
```
Returns the shortest path name equivalent to path by purely lexical processing.\
It applies the following rules iteratively until no further processing can be done:

1. Replace multiple `Separator` elements with a single one.
2. Eliminate each `.` path name element (the current directory).
3. Eliminate each inner `..` path name element (the parent directory) long with the non-`..` element that precedes it.
4. Eliminate `..` elements that begin a rooted path: that is, replace `/..` by `/` at the beginning of a path, assuming `Separator` is `/`.

The returned path ends in a slash only if it represents a root directory, such as / on Unix or C:\ on Windows.

Finally, any occurrences of slash are replaced by `Separator`.

If the result of this process is an empty string, clean returns the string `..`

On Windows, clean does not modify the volume name other than to replace occurrences of `/` with `\`.
For example, `clean("//host/share/../x")` returns `\\host\share\x`.

[See also Rob Pike, “Lexical File Names in Plan 9 or Getting Dot-Dot Right”](https://9p.io/sys/doc/lexnames.html)

---

```jule
fn ToSlash(path: str): str
```
Returns the result of replacing each separator character in path with a slash (`/`) character.\
Multiple separators are replaced by multiple slashes.

---

```jule
fn FromSlash(path: str): str
```
Returns the result of replacing each slash (`/`) character in path with a separator character.\
Multiple slashes are replaced by multiple separators. 

---

```jule
fn Join(elem: ...str): str
```
Joins any number of path elements into a single path, separating them with an OS specific `Separator`.
Empty elements are ignored.\
The result is cleaned. However, if the argument list is empty or all its elements are empty, Join returns an empty string.\
On Windows, the result will only be a UNC path if the first non-empty element is a UNC path. 

---

```jule
fn Ext(path: str): str
```
Returns the file name extension used by path.\
The extension is the suffix beginning at the final dot in the final element of path; it is empty if there is no dot.

---

```jule
fn Abs(path: str): (str, ok: bool)
```
Returns an absolute representation of path.\
If the path is not absolute it will be joined with the current working directory to turn it into an absolute path.
The absolute path name for a given file is not guaranteed to be unique.\
`Abs` calls clean on the result.

---

```jule
fn Base(mut path: str): str
```
Returns the last element of path.\
Trailing path separators are removed before extracting the last element.\
If the path is empty, Base returns `.`.\
If the path consists entirely of separators, Base returns a single separator.

---

```jule
fn Dir(path: str): str
```
Returns all but the last element of path, typically the path's directory.\
After dropping the final element, Dir calls clean on the path and trailing slashes are removed.\
If the path is empty, Dir returns `.`.\
If the path consists entirely of separators, Dir returns a single separator.\
The returned path does not end in a separator unless it is the root directory.

---

```jule
fn VolumeName(path: str): str
```
Returns leading volume name.\
Given `C:\foo\bar` it returns `C:` on Windows.\
Given `\\host\share\foo` it returns `\\host\share`.\
On other platforms it returns empty string.