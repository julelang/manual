# std/os

The `std/os` package provides high-level, safe functions for interacting with the operating system. I/O components such as File are not thread-safe and should be used with caution.

<details>
<summary>Idiomatic Use of Cmd</summary>

The `Cmd` is a structure that allows you to execute commands on the operating system. The following examples work on all UNIX-like platforms where the `ls` command is available.

A simple example:
```jule
use "std/os"

fn main() {
	cmd := os::Cmd.New("ls", "-l")
	cmd.Stdout(os::Stdout())!
	cmd.Run()!
}
```
The example code above, runs `ls -l` with main process's standard output. So child process's output will be written to parent's output. The `Stdout` method sets command's child process's stdout handle to input, which is `os::Stdout`. If handles are nil, `Cmd` will be assign child process's handles to DevNull.

If you want to redirect the output to a pipe, it is recommended to use the methods provided by `Cmd` for the relevant handle.

A simple example:
```jule
use "std/io"
use "std/os"

fn main() {
	cmd := os::Cmd.New("ls", "-l")
	mut r := cmd.StdoutPipe()!
	cmd.Start()!
	data := io::ReadAll(r)!
	cmd.Wait()!
	println(str(data))
}
```
The example code above creates a pipe for stdout using the `StdoutPipe` method and obtains it as an `io::ReadCloser`. The `Wait` call will release the created pipes after the child process completed. If you do not use `Wait`, resources may leak.

If you want to redirect a different pipe;
```jule
use "std/io"
use "std/os"

fn main() {
	mut r, mut w := os::Pipe()!
	cmd := os::Cmd.New("ls", "-l")
	cmd.Stdout(w)!
	cmd.Run()!
	w.Close()!
	data := io::ReadAll(r)!
	r.Close()!
	println(str(data))
}
```
The example above creates a pipe using the `Pipe` function and assigns the writer pipe to `Stdout`, passing it to the child process. After executing the child process with `Run`, it closes the writer pipe. This step is crucial because the `Cmd` structure does not release resources provided by third parties, so they must be manually closed. Finally, the output is read, and the reader pipe is also closed. Functionally, this is equivalent to using `StdoutPipe`.

</details>

## Index

[Variables](#variables)\
[fn ReadDir\(path: str\)\!: \(dirents: \[\]DirEntry\)](#readdir)\
[fn Mkdir\(path: str\)\!](#mkdir)\
[fn Rmdir\(path: str\)\!](#rmdir)\
[fn IsPathSeparator\(c: byte\): bool](#ispathseparator)\
[fn Open\(path: str\)\!: &amp;File](#open)\
[fn OpenFile\(path: str, flag: int, perm: FileMode\)\!: &amp;File](#openfile)\
[fn Remove\(path: str\)\!](#remove)\
[fn Create\(path: str\)\!: &amp;File](#create)\
[fn ReadFile\(path: str\)\!: \[\]byte](#readfile)\
[fn WriteFile\(path: str, data: \[\]byte, perm: FileMode\)\!](#writefile)\
[fn Pipe\(\)\!: \(r: &amp;File, w: &amp;File\)](#pipe)\
[fn Stat\(path: str\)\!: FileInfo](#stat)\
[fn Lstat\(path: str\)\!: FileInfo](#lstat)\
[fn Exit\(code: int\)](#exit)\
[fn Executable\(\): str](#executable)\
[fn Args\(\): \[\]str](#args)\
[fn Getwd\(\)\!: str](#getwd)\
[fn Chdir\(path: str\)\!](#chdir)\
[fn Environ\(\): \[\]str](#environ)\
[fn Getenv\(key: str\): str](#getenv)\
[fn LookupEnv\(key: str\): \(value: str, found: bool\)](#lookupenv)\
[fn Setenv\(key: str, value: str\)\!](#setenv)\
[fn Stdin\(\): &amp;File](#stdin)\
[fn Stdout\(\): &amp;File](#stdout)\
[fn Stderr\(\): &amp;File](#stderr)\
[struct DirEntry](#direntry)\
[struct Cmd](#cmd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(path: str, mut args: \.\.\.str\): &amp;Cmd](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stdin\(\*self, mut r: &amp;File\)\!](#stdin-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stdout\(\*self, mut w: &amp;File\)\!](#stdout-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stderr\(\*self, mut w: &amp;File\)\!](#stderr-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdinPipe\(\*self\)\!: io::WriteCloser](#stdinpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdoutPipe\(\*self\)\!: io::ReadCloser](#stdoutpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StderrPipe\(\*self\)\!: io::ReadCloser](#stderrpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Start\(\*self\)\!](#start)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Run\(\*self\)\!](#run)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait\(\*self\)\!: int](#wait)\
[struct File](#file)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, buf: \[\]byte\)\!: \(n: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr\(mut \*self, s: str\)\!: \(n: int\)](#writestr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut \*self, mut buf: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek\(mut \*self, offset: i64, whence: int\)\!: i64](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sync\(mut \*self\)\!](#sync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Truncate\(mut \*self, size: i64\)\!](#truncate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut \*self\)\!](#close)\
[type FileMode](#filemode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(\*self\): bool](#isdir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRegular\(\*self\): bool](#isregular)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Perm\(\*self\): FileMode](#perm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type\(\*self\): FileMode](#type)\
[struct FileInfo](#fileinfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(\*self\): bool](#isdir-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(\*self\): FileMode](#mode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ModTime\(\*self\): time::Time](#modtime)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): i64](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SameFile\(\*self, fi2: FileInfo\): bool](#samefile)

## Variables

```jule
const (
	PathSeparator     = filepathlite::Separator     // OS-specific path separator
	PathListSeparator = filepathlite::ListSeparator // OS-specific path list separator
)
```


---

```jule
const DevNull = devNull
```
The name of the operating system&#39;s “null device\.” On Unix\-like systems, it is &#34;/dev/null&#34;; on Windows, &#34;NUL&#34;\.

---

```jule
const (
	O_RDONLY = sys::O_RDONLY // Open the file read-only
	O_WRONLY = sys::O_WRONLY // Open the file write-only
	O_RDWR   = sys::O_RDWR   // Open the file read-write
	O_APPEND = sys::O_APPEND // Append data to the file when writing
	O_CREATE = sys::O_CREAT  // Create a new file if none exists
	O_EXCL   = sys::O_EXCL   // Used with O_CREATE, file must not exist
	O_SYNC   = sys::O_SYNC   // Open for synchronous I/O
	O_TRUNC  = sys::O_TRUNC  // Truncate regular writable file when opened
)
```
Flags to OpenFile wrapping those of the underlying system\. Not all flags may be implemented on a given system\.

---

```jule
const (
	ModeDir:        FileMode = 1 << (32 - 1 - iota) // d: is a directory
	ModeAppend                                      // a: append-only
	ModeExclusive                                   // l: exclusive use
	ModeTemporary                                   // T: temporary file; Plan 9 only
	ModeSymlink                                     // L: symbolic link
	ModeDevice                                      // D: device file
	ModeNamedPipe                                   // p: named pipe (FIFO)
	ModeSocket                                      // S: Unix domain socket
	ModeSetuid                                      // u: setuid
	ModeSetgid                                      // g: setgid
	ModeCharDevice                                  // c: Unix character device, when ModeDevice is set
	ModeSticky                                      // t: sticky
	ModeIrregular                                   // ?: non-regular file; nothing else is known about this file

	// Mask for the type bits. For regular files, none will be set.
	ModeType = ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice | ModeCharDevice | ModeIrregular

	// Unix permission bits.
	ModePerm = 0777
)
```
The defined file mode bits are the most significant bits of the \[FileMode\]\. The nine least\-significant bits are the standard Unix rwxrwxrwx permissions\. The values of these bits should be considered part of the public API and may be used in wire protocols or disk representations: they must not be changed, although new bits might be added\.

## ReadDir
```jule
fn ReadDir(path: str)!: (dirents: []DirEntry)
```
Reads the named directory and returns all its directory entries can read\.

## Mkdir
```jule
fn Mkdir(path: str)!
```
Creates directory\.

## Rmdir
```jule
fn Rmdir(path: str)!
```
Removes empty directory\.

## IsPathSeparator
```jule
fn IsPathSeparator(c: byte): bool
```
Reports whether c is a directory separator character\.

## Open
```jule
fn Open(path: str)!: &File
```
Opens the named file for reading\. If successful, methods on the returned file can be used for reading; the associated file descriptor has mode O\_RDONLY\.

## OpenFile
```jule
fn OpenFile(path: str, flag: int, perm: FileMode)!: &File
```
Opens file stream with named file, specified flag \(O\_RDWR, O\_TRUNC etc\.\) and perm\. If named file does not exist and O\_CREATE flag is passed, will created with mode perm \(before umask\)\. If successful, returns File reference with handle to file stream and the reference can used for I/O operations\.

## Remove
```jule
fn Remove(path: str)!
```
Removes named file\.

## Create
```jule
fn Create(path: str)!: &File
```
Creates or truncates the named file\. If the file already exists, it is truncated\. If the file does not exist, it is created with mode 0666 \(before umask\)\. If successful, methods on the returned File can be used for I/O; the associated file descriptor has mode O\_RDWR\. Calls internally \`File\.Open\` and forwards any exceptional\.

## ReadFile
```jule
fn ReadFile(path: str)!: []byte
```
Reads bytes of file\. First, learns byte\-size of file\. Then reads bytes and returns buffer\.

## WriteFile
```jule
fn WriteFile(path: str, data: []byte, perm: FileMode)!
```
Writes data to the named file, creating it if necessary\. If the file does not exist, creates it with permissions perm \(before umask\); otherwise truncates it before writing, without changing permissions\. Since requires multiple system calls to complete, a failure mid\-operation can leave the file in a partially written state\. Calls internally \`File\.Open\`, \`File\.Write\`, \`File\.Close\` and forwards any exceptional\.

## Pipe
```jule
fn Pipe()!: (r: &File, w: &File)
```
Pipe returns a connected pair of Files; reads from r return bytes written to w\. The Windows handles underlying the returned files are marked as inheritable by child processes\.

## Stat
```jule
fn Stat(path: str)!: FileInfo
```
Returns a \[FileInfo\] describing the named file\.

## Lstat
```jule
fn Lstat(path: str)!: FileInfo
```
Returns a \[FileInfo\] describing the named file\. If the file is a symbolic link, the returned FileInfo describes the symbolic link\. It makes no attempt to follow the link\.

On Windows, if the file is a reparse point that is a surrogate for another named entity \(such as a symbolic link or mounted folder\), the returned FileInfo describes the reparse point, and makes no attempt to resolve it\.

## Exit
```jule
fn Exit(code: int)
```
Causes the current program to exit with the given status code\. Conventionally, code zero indicates success, non\-zero an error\.

## Executable
```jule
fn Executable(): str
```
Returns executable path\. Returns empty string if any error occurs\.

## Args
```jule
fn Args(): []str
```
Returns command\-line arguments\. Starts with the program name\.

## Getwd
```jule
fn Getwd()!: str
```
Returns an absolute path name of the current working directory of the calling process\.

## Chdir
```jule
fn Chdir(path: str)!
```
Changes the current working directory to the given directory\.

## Environ
```jule
fn Environ(): []str
```
Returns environment variables\.

## Getenv
```jule
fn Getenv(key: str): str
```
Retrieves the value of the environment variable named by the key\. It returns the value, which will be empty if the variable is not present\. To distinguish between an empty value and an found value, use \[LookupEnv\]\.

## LookupEnv
```jule
fn LookupEnv(key: str): (value: str, found: bool)
```
Retrieves the value of the environment variable named by the key\. If the variable is present in the environment the value \(which may be empty\) is returned and the boolean is true\. Otherwise the returned value will be empty and the boolean will be false\.

## Setenv
```jule
fn Setenv(key: str, value: str)!
```
Sets the value of the environment variable named by the key\.

## Stdin
```jule
fn Stdin(): &File
```
Returns File for the standard input file descriptor\.

## Stdout
```jule
fn Stdout(): &File
```
Returns File for the standard output file descriptor\.

## Stderr
```jule
fn Stderr(): &File
```
Returns File for the standard error file descriptor\.

## DirEntry
```jule
struct DirEntry {
	Name: str
	Stat: FileInfo
}
```
Directory entry\.

## Cmd
```jule
struct Cmd {
	// The path of the command to run.
	//
	// This is the only field that must be set to a non-zero
	// value. If it is relative, it is evaluated relative to Dir.
	Path: str

	// Specifies the working directory of the command.
	// If it is the empty string, Cmd runs the command in the
	// calling process's current directory.
	Dir: str

	// Holds command line arguments, including the command as Args[0].
	// If it is empty or nil, Start uses {Path}.
	//
	// In typical use, both Path and Args are set by calling [Cmd.New].
	Args: []str

	// Specifies the environment of the process.
	// Each entry is of the form "key=value".
	// If it is nil, the new process uses the current process's environment.
	// If it contains duplicate environment keys, only the last
	// value in the slice for each duplicate key is used.
	// As a special case on Windows, SYSTEMROOT is always added if
	// missing and not explicitly set to the empty string.
	Env: []str

	// NOTE: contains filtered hidden or unexported fields
}
```
Represents an external command being prepared or run\.

Once a Cmd has been executed, it is not recommended to reuse the same instance multiple times\. If you use a method that calls \`Wait\`, or explicitly call \`Start\` followed by \`Wait\`, the Cmd instance will become reusable\. However, since data such as Stdout and Stdin will be reset, the command may need to be reconfigured\. Therefore, even after a \`Wait\` call, it is recommended to configure a new Cmd instance for safety\.

### New
```jule
fn New(path: str, mut args: ...str): &Cmd
```
Returns Cmd instance for path with arguments\.

### Stdin
```jule
fn Stdin(*self, mut r: &File)!
```
Sets reader that will be connected to the command&#39;s standard input when the command starts\. The reader will not be closed automatically after \[Cmd\.Wait\] sees the command exit\.

### Stdout
```jule
fn Stdout(*self, mut w: &File)!
```
Sets writer that will be connected to the command&#39;s standard output when the command starts\. The reader will not be closed automatically after \[Cmd\.Wait\] sees the command exit\.

### Stderr
```jule
fn Stderr(*self, mut w: &File)!
```
Sets writer that will be connected to the command&#39;s standard error when the command starts\. The reader will not be closed automatically after \[Cmd\.Wait\] sees the command exit\.

### StdinPipe
```jule
fn StdinPipe(*self)!: io::WriteCloser
```
Returns a pipe that will be connected to the command&#39;s standard input when the command starts\. The pipe will be closed automatically after \[Cmd\.Wait\] sees the command exit\. A caller need only call Close to force the pipe to close sooner\. For example, if the command being run will not exit until standard input is closed, the caller must close the pipe\.

### StdoutPipe
```jule
fn StdoutPipe(*self)!: io::ReadCloser
```
Returns a pipe that will be connected to the command&#39;s standard output when the command starts\.

\[Cmd\.Wait\] will close the pipe after seeing the command exit, so most callers need not close the pipe themselves\. It is thus incorrect to call Wait before all reads from the pipe have completed\. For the same reason, it is incorrect to call \[Cmd\.Run\] when using StdoutPipe\.

### StderrPipe
```jule
fn StderrPipe(*self)!: io::ReadCloser
```
Returns a pipe that will be connected to the command&#39;s standard error when the command starts\.

\[Cmd\.Wait\] will close the pipe after seeing the command exit, so most callers need not close the pipe themselves\. It is thus incorrect to call Wait before all reads from the pipe have completed\. For the same reason, it is incorrect to use \[Cmd\.Run\] when using StderrPipe\.

### Start
```jule
fn Start(*self)!
```
Starts the specified command but does not wait for it to complete\. After a successful call to Start the \[Cmd\.Wait\] method must be called in order to release associated system resources\.

### Run
```jule
fn Run(*self)!
```
Starts the specified command and waits for it to complete\.

### Wait
```jule
fn Wait(*self)!: int
```
Waits for the command to exit\. The command must have been started by \[Cmd\.Start\]\. It releases any resources associated with the \[Cmd\]\. After calling it, Cmd will be ready to reuse\.

## File
```jule
struct File {
	// NOTE: contains filtered hidden or unexported fields
}
```
The file stream handle\.

It works like a wrapper when it comes to console handle like stdin, stdout or stderr\. Read and write functions are supported for console handlers\. The rest of the functions are not supported and not checked, it is undefined behavior\.

There may be system call differences and performance differences for console handlers depending on the operating system\. For example, Windows has an overhead for UTF\-16 processing\.

### Implemented Traits

- `io::Reader`
- `io::ReadCloser`
- `io::Writer`
- `io::WriteCloser`
- `io::ReadWriter`
- `io::Stream`
- `io::Seeker`
- `io::StrWriter`

### Write
```jule
fn Write(mut *self, buf: []byte)!: (n: int)
```
Writes bytes to handle and returns written byte count\. The number of bytes written can never exceed the length of the buf\.

### WriteStr
```jule
fn WriteStr(mut *self, s: str)!: (n: int)
```
Like Write, but writes the contents of string s rather than a slice of bytes\.

### Read
```jule
fn Read(mut *self, mut buf: []byte)!: (n: int)
```
Read bytes to buffer from handle and returns read byte count\. The number of bytes read can never exceed the length of the buf\. If the buf is larger than the number of bytes that can be read, the buffer will not cause an overflow\. Offset will be shifted by the number of bytes read\.

### Seek
```jule
fn Seek(mut *self, offset: i64, whence: int)!: i64
```
Sets offset to next Read/Write operation and returns the new offset\. whence: 0 \(io::SeekStart\) means, relative to the whence of the file, 1 \(io::SeekCurrent\) means relative to the current offset, and 2 \(io::SeekEnd\) means relative to end\.

### Sync
```jule
fn Sync(mut *self)!
```
Commits the current contents of the file to stable storage\. Typically, this means flushing the file system&#39;s in\-memory copy of recently written data to disk\.

### Truncate
```jule
fn Truncate(mut *self, size: i64)!
```
Changes the size of the file\. It does not change the I/O offset\.

### Close
```jule
fn Close(mut *self)!
```
Closes file handle\.

## FileMode
```jule
type FileMode: u32
```
Represents a file&#39;s mode and permission bits\. The bits have the same definition on all systems, so that information about files can be moved from one system to another portably\. Not all bits apply to all systems\. The only required bit is \[ModeDir\] for directories\.

### Str
```jule
fn Str(*self): str
```


### IsDir
```jule
fn IsDir(*self): bool
```
Reports whether self describes a directory\. That is, it tests for the \[ModeDir\] bit being set in self\.

### IsRegular
```jule
fn IsRegular(*self): bool
```
Reports whether self describes a regular file\. That is, it tests that no mode type bits are set\.

### Perm
```jule
fn Perm(*self): FileMode
```
Returns the Unix permission bits in self \(self &amp; \[ModePerm\]\)\.

### Type
```jule
fn Type(*self): FileMode
```
Returns type bits in self \(self &amp; \[ModeType\]\)\.

## FileInfo
```jule
struct FileInfo {
	// NOTE: contains filtered hidden or unexported fields
}
```
Describes a file and is returned by \[Stat\]\.

### IsDir
```jule
fn IsDir(*self): bool
```
Abbreviation for self\.Mode\(\)\.IsDir\(\)\.

### Mode
```jule
fn Mode(*self): FileMode
```
Returns file mode bits\.

### ModTime
```jule
fn ModTime(*self): time::Time
```
Returns modification time\.

### Size
```jule
fn Size(*self): i64
```
Returns length in bytes for regular files; system\-dependent for others\.

### SameFile
```jule
fn SameFile(*self, fi2: FileInfo): bool
```
Reports whether self and fi2 describe the same file\. For example, on Unix this means that the device and inode fields of the two underlying structures are identical; on other systems the decision may be based on the path names\.

It only applies to results returned by this package&#39;s \[Stat\]\. It returns false in other cases\.