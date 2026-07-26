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

async fn main() {
	cmd := os::Cmd.New("ls", "-l")
	mut r := cmd.StdoutPipe()!
	cmd.Start()!
	data := io::ReadAll(r).await!
	cmd.Wait()!
	println(str(data))
}
```
The example code above creates a pipe for stdout using the `StdoutPipe` method and obtains it as an `io::ReadCloser`. The `Wait` call will release the created pipes after the child process completed. If you do not use `Wait`, resources may leak.

If you want to redirect a different pipe;
```jule
use "std/io"
use "std/os"

async fn main() {
	mut r, mut w := os::Pipe()!
	cmd := os::Cmd.New("ls", "-l")
	cmd.Stdout(w)!
	cmd.Run()!
	w.Close().await!
	data := io::ReadAll(r).await!
	r.Close().await!
	println(str(data))
}
```
The example above creates a pipe using the `Pipe` function and assigns the writer pipe to `Stdout`, passing it to the child process. After executing the child process with `Run`, it closes the writer pipe. This step is crucial because the `Cmd` structure does not release resources provided by third parties, so they must be manually closed. Finally, the output is read, and the reader pipe is also closed. Functionally, this is equivalent to using `StdoutPipe`.

</details>

## Index

[Variables](#variables)\
[fn ReadDir\(path: string\)\!: \(dirents: \[\]DirEntry\)](#readdir)\
[fn Mkdir\(path: string\)\!](#mkdir)\
[fn Rmdir\(path: string\)\!](#rmdir)\
[fn Open\(path: string\)\!: &amp;File](#open)\
[fn OpenFile\(path: string, flag: int, perm: FileMode\)\!: &amp;File](#openfile)\
[fn Remove\(path: string\)\!](#remove)\
[fn Create\(path: string\)\!: &amp;File](#create)\
[fn ReadFile\(path: string\)\!: \[\]byte](#readfile)\
[fn ReadFileSync\(path: string\)\!: \[\]byte](#readfilesync)\
[fn WriteFile\(path: string, data: \[\]byte, perm: FileMode\)\!](#writefile)\
[fn WriteFileSync\(path: string, data: \[\]byte, perm: FileMode\)\!](#writefilesync)\
[fn IsPathSeparator\(c: byte\): bool](#ispathseparator)\
[fn Pipe\(\)\!: \(r: &amp;File, w: &amp;File\)](#pipe)\
[fn Exit\(code: int\)](#exit)\
[fn Executable\(\): string](#executable)\
[fn Args\(\): \[\]string](#args)\
[fn Getwd\(\)\!: string](#getwd)\
[fn Chdir\(path: string\)\!](#chdir)\
[fn Environ\(\): \[\]string](#environ)\
[fn Getenv\(key: string\): string](#getenv)\
[fn LookupEnv\(key: string\): \(value: string, found: bool\)](#lookupenv)\
[fn Setenv\(key: string, value: string\)\!](#setenv)\
[fn Stat\(path: string\)\!: FileInfo](#stat)\
[fn Lstat\(path: string\)\!: FileInfo](#lstat)\
[fn Stdin\(\): &amp;File](#stdin)\
[fn Stdout\(\): &amp;File](#stdout)\
[fn Stderr\(\): &amp;File](#stderr)\
[fn Hostname\(\)\!: string](#hostname)\
[struct Cmd](#cmd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(path: string, mut args: \.\.\.string\): &amp;Cmd](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stdin\(\*self, mut r: &amp;File\)\!](#stdin-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stdout\(\*self, mut w: &amp;File\)\!](#stdout-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Stderr\(\*self, mut w: &amp;File\)\!](#stderr-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdinPipe\(\*self\)\!: io::WriteCloser](#stdinpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdoutPipe\(\*self\)\!: io::ReadCloser](#stdoutpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StderrPipe\(\*self\)\!: io::ReadCloser](#stderrpipe)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Start\(\*self\)\!](#start)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Run\(\*self\)\!](#run)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait\(\*self\)\!: int](#wait)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Kill\(\*self\)\!](#kill)\
[struct DirEntry](#direntry)\
[struct File](#file)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RawFD\(\*self\): u64](#rawfd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ShouldAsync\(\*self\): bool](#shouldasync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetDeadline\(mut \*self, deadline: time::Duration\)\!](#setdeadline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetReadDeadline\(mut \*self, deadline: time::Duration\)\!](#setreaddeadline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SetWriteDeadline\(mut \*self, deadline: time::Duration\)\!](#setwritedeadline)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut \*self, buf: \[\]byte\)\!: \(n: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteSync\(mut \*self, buf: \[\]byte\)\!: \(n: int\)](#writesync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteString\(mut \*self, s: string\)\!: \(n: int\)](#writestring)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut \*self, mut buf: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadSync\(mut \*self, mut buf: \[\]byte\)\!: \(n: int\)](#readsync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek\(mut \*self, offset: i64, whence: int\)\!: i64](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sync\(mut \*self\)\!](#sync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Truncate\(mut \*self, size: i64\)\!](#truncate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut \*self\)\!](#close)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CloseSync\(mut \*self\)\!](#closesync)\
[struct FileInfo](#fileinfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(\*self\): bool](#isdir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(\*self\): FileMode](#mode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ModTime\(\*self\): time::Time](#modtime)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): i64](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SameFile\(\*self, fi2: FileInfo\): bool](#samefile)\
[type FileMode](#filemode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(\*self\): bool](#isdir-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRegular\(\*self\): bool](#isregular)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Perm\(\*self\): FileMode](#perm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type\(\*self\): FileMode](#type)

## Variables

```jule
let mut ErrNoDeadline = poll::ErrNoDeadline
```
File type does not support deadline\.

---

```jule
let mut ErrDeadlineExceeded = poll::ErrDeadlineExceeded
```
Expired deadline error\.

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
	PathSeparator     = filepathlite::Separator     // OS-specific path separator
	PathListSeparator = filepathlite::ListSeparator // OS-specific path list separator
)
```


---

```jule
const (
	ModeDir:       FileMode = 1 << (32 - 1 - iota) // d: is a directory
	ModeAppend                                     // a: append-only
	ModeExclusive                                  // l: exclusive use
	ModeTemporary                                  // T: temporary file; Plan 9 only
	ModeSymlink                                    // L: symbolic link
	ModeDevice                                     // D: device file
	ModeNamedPipe                                  // p: named pipe (FIFO)
	ModeSocket                                     // S: Unix domain socket
	ModeSetuid                                     // u: setuid
	ModeSetgid                                     // g: setgid
	ModeCharDevice                                 // c: Unix character device, when ModeDevice is set
	ModeSticky                                     // t: sticky
	ModeIrregular                                  // ?: non-regular file; nothing else is known about this file

	// Mask for the type bits. For regular files, none will be set.
	ModeType = ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice | ModeCharDevice | ModeIrregular

	// Unix permission bits.
	ModePerm = 0777
)
```
The defined file mode bits are the most significant bits of the \[FileMode\]\. The nine least\-significant bits are the standard Unix rwxrwxrwx permissions\. The values of these bits should be considered part of the public API and may be used in wire protocols or disk representations: they must not be changed, although new bits might be added\.

## ReadDir
```jule
fn ReadDir(path: string)!: (dirents: []DirEntry)
```
Reads the named directory and returns all its directory entries can read\.

## Mkdir
```jule
fn Mkdir(path: string)!
```
Creates directory\.

## Rmdir
```jule
fn Rmdir(path: string)!
```
Removes empty directory\.

## Open
```jule
fn Open(path: string)!: &File
```
Opens the named file for reading\. If successful, methods on the returned file can be used for reading; the associated file descriptor has mode O\_RDONLY\.

## OpenFile
```jule
fn OpenFile(path: string, flag: int, perm: FileMode)!: &File
```
Opens file stream with named file, specified flag \(O\_RDWR, O\_TRUNC etc\.\) and perm\. If named file does not exist and O\_CREATE flag is passed, will created with mode perm \(before umask\)\. If successful, returns File reference with handle to file stream and the reference can used for I/O operations\.

## Remove
```jule
fn Remove(path: string)!
```
Removes named file\.

## Create
```jule
fn Create(path: string)!: &File
```
Creates or truncates the named file\. If the file already exists, it is truncated\. If the file does not exist, it is created with mode 0666 \(before umask\)\. If successful, methods on the returned File can be used for I/O; the associated file descriptor has mode O\_RDWR\. Calls internally \`File\.Open\` and forwards any error\.

## ReadFile
```jule
async fn ReadFile(path: string)!: []byte
```
Reads bytes of file\. First, learns byte\-size of file\. Then reads bytes and returns buffer\.

## ReadFileSync
```jule
fn ReadFileSync(path: string)!: []byte
```
Sync variant of \[ReadFile\]\. It is provided for blocking operations and must be used carefully in an async runtime; it blocks the thread, not the coroutine\.

## WriteFile
```jule
async fn WriteFile(path: string, data: []byte, perm: FileMode)!
```
Writes data to the named file, creating it if necessary\. If the file does not exist, creates it with permissions perm \(before umask\); otherwise truncates it before writing, without changing permissions\. Since requires multiple system calls to complete, a failure mid\-operation can leave the file in a partially written state\. Calls internally \`File\.Open\`, \`File\.Write\`, \`File\.Close\` and forwards any error\.

## WriteFileSync
```jule
fn WriteFileSync(path: string, data: []byte, perm: FileMode)!
```
Sync variant of \[WriteFile\]\. It is provided for blocking operations and must be used carefully in an async runtime; it blocks the thread, not the coroutine\.

## IsPathSeparator
```jule
fn IsPathSeparator(c: byte): bool
```
Reports whether c is a directory separator character\.

## Pipe
```jule
fn Pipe()!: (r: &File, w: &File)
```
Pipe returns a connected pair of Files; reads from r return bytes written to w\. The Windows handles underlying the returned files are marked as inheritable by child processes\.

## Exit
```jule
fn Exit(code: int)
```
Causes the current program to exit with the given status code\. Conventionally, code zero indicates success, non\-zero an error\.

## Executable
```jule
fn Executable(): string
```
Returns executable path\. Returns empty string if any error occurs\.

## Args
```jule
fn Args(): []string
```
Returns command\-line arguments\. Starts with the program name\.

## Getwd
```jule
fn Getwd()!: string
```
Returns an absolute path name of the current working directory of the calling process\.

## Chdir
```jule
fn Chdir(path: string)!
```
Changes the current working directory to the given directory\.

## Environ
```jule
fn Environ(): []string
```
Returns environment variables\.

## Getenv
```jule
fn Getenv(key: string): string
```
Retrieves the value of the environment variable named by the key\. It returns the value, which will be empty if the variable is not present\. To distinguish between an empty value and an found value, use \[LookupEnv\]\.

## LookupEnv
```jule
fn LookupEnv(key: string): (value: string, found: bool)
```
Retrieves the value of the environment variable named by the key\. If the variable is present in the environment the value \(which may be empty\) is returned and the boolean is true\. Otherwise the returned value will be empty and the boolean will be false\.

## Setenv
```jule
fn Setenv(key: string, value: string)!
```
Sets the value of the environment variable named by the key\.

## Stat
```jule
fn Stat(path: string)!: FileInfo
```
Returns a \[FileInfo\] describing the named file\.

## Lstat
```jule
fn Lstat(path: string)!: FileInfo
```
Returns a \[FileInfo\] describing the named file\. If the file is a symbolic link, the returned FileInfo describes the symbolic link\. It makes no attempt to follow the link\.

On Windows, if the file is a reparse point that is a surrogate for another named entity \(such as a symbolic link or mounted folder\), the returned FileInfo describes the reparse point, and makes no attempt to resolve it\.

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

## Hostname
```jule
fn Hostname()!: string
```
Returns the host name reported by the kernel\.

## Cmd
```jule
struct Cmd {
	// The path of the command to run.
	//
	// This is the only field that must be set to a non-zero
	// value. If it is relative, it is evaluated relative to Dir.
	Path: string

	// Specifies the working directory of the command.
	// If it is the empty string, Cmd runs the command in the
	// calling process's current directory.
	Dir: string

	// Holds command line arguments, including the command as Args[0].
	// If it is empty or nil, Start uses {Path}.
	//
	// In typical use, both Path and Args are set by calling [Cmd.New].
	Args: []string

	// Specifies the environment of the process.
	// Each entry is of the form "key=value".
	// If it is nil, the new process uses the current process's environment.
	// If it contains duplicate environment keys, only the last
	// value in the slice for each duplicate key is used.
	// As a special case on Windows, SYSTEMROOT is always added if
	// missing and not explicitly set to the empty string.
	Env: []string

	// NOTE: contains filtered hidden or unexported fields
}
```
Represents an external command being prepared or run\.

Once a Cmd has been executed, it is not recommended to reuse the same instance multiple times\. If you use a method that calls \`Wait\`, or explicitly call \`Start\` followed by \`Wait\`, the Cmd instance will become reusable\. However, since data such as Stdout and Stdin will be reset, the command may need to be reconfigured\. Therefore, even after a \`Wait\` call, it is recommended to configure a new Cmd instance for safety\.

### New
```jule
fn New(path: string, mut args: ...string): &Cmd
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
Starts the specified command and waits for it to complete\. Wait operation is blocking\.

### Wait
```jule
fn Wait(*self)!: int
```
Waits for the command to exit\. The command must have been started by \[Cmd\.Start\]\. It releases any resources associated with the \[Cmd\]\. After calling it, Cmd will be ready to reuse\. Wait operation is blocking\.

### Kill
```jule
fn Kill(*self)!
```
Kills the command\. The command must have been started by \[Cmd\.Start\]\.

## DirEntry
```jule
struct DirEntry {
	Name: string
	Stat: FileInfo
}
```
Directory entry\.

## File
```jule
struct File {
	// NOTE: contains filtered hidden or unexported fields
}
```
The file stream handle\.

It works like a wrapper when it comes to console handle like stdin, stdout or stderr\. Read and write functions are supported for console handlers\. The rest of the functions are not supported and not checked, it is undefined behavior\.

There may be system call differences and performance differences for console handlers depending on the operating system\. For example, Windows has an overhead for UTF\-16 processing\.

File operations are blocking and do not use true asynchronous I/O\. While some systems, such as Linux, allow non\-blocking behavior for pipes, regular file I/O is generally blocking and any asynchronous behavior is platform\-specific and not guaranteed\.

If the program is running on async runtime, the file descriptor will exhibit non\-blocking behavior whenever possible\. If \`Async\` is reported as true for an fd, it must be used with the async API\. Using non\-blocking file descriptors with the sync API is undefined and may result in \`EAGAIN\` errors being propagated\.

A file descriptor is only guaranteed to exhibit blocking behavior when the program is running on sync runtime\. The async runtime always prefers non\-blocking behavior whenever possible\.

### Implemented Traits

- `io::Reader`
- `io::ReadCloser`
- `io::Writer`
- `io::WriteCloser`
- `io::ReadWriter`
- `io::ReadWriteCloser`
- `io::ReadWriteSeeker`
- `io::ReadSeeker`
- `io::WriteSeeker`
- `io::Seeker`
- `io::StringWriter`

### RawFD
```jule
fn RawFD(*self): u64
```
Returns raw file\-descriptor\. Intended for low\-level use\. Just borrow, do not close or something else\.

### ShouldAsync
```jule
fn ShouldAsync(*self): bool
```
Reports whether treating the file descriptor as async is the correct approach\. If the fd has the potential to exhibit non\-blocking behavior, it should be handled with async API\. Behavior in sync API is undefined\. However, this is not a definitive guarantee that the fd is non\-blocking\.

### SetDeadline
```jule
fn SetDeadline(mut *self, deadline: time::Duration)!
```
Sets the read and write deadlines for a File\. It is equivalent to calling both SetReadDeadline and SetWriteDeadline\.

Only some kinds of files support setting a deadline\. Calls to SetDeadline for files that do not support deadlines will return ErrNoDeadline\. On most systems ordinary files do not support deadlines, but pipes do\.

A deadline is an absolute time after which I/O operations fail with an error instead of blocking\. The deadline applies to all future and pending I/O, not just the immediately following call to Read or Write\. After a deadline has been exceeded, the connection can be refreshed by setting a deadline in the future\.

If the deadline is exceeded a call to Read or Write or to other I/O methods will return an error that wraps ErrDeadlineExceeded\.

An idle timeout can be implemented by repeatedly extending the deadline after successful Read or Write calls\.

A zero value means I/O operations will not time out\.

### SetReadDeadline
```jule
fn SetReadDeadline(mut *self, deadline: time::Duration)!
```
Sets the deadline for future Read calls and any currently\-blocked Read call\. A zero value means Read will not time out\. Not all files support setting deadlines; see SetDeadline\.

### SetWriteDeadline
```jule
fn SetWriteDeadline(mut *self, deadline: time::Duration)!
```
Sets the deadline for any future Write calls and any currently\-blocked Write call\. Even if Write times out, it may return n &gt; 0, indicating that some of the data was successfully written\. A zero value means Write will not time out\. Not all files support setting deadlines; see SetDeadline\.

### Write
```jule
async fn Write(mut *self, buf: []byte)!: (n: int)
```
Writes bytes to handle and returns written byte count\. The number of bytes written can never exceed the length of the buf\.

### WriteSync
```jule
fn WriteSync(mut *self, buf: []byte)!: (n: int)
```
Sync variant of \[Write\]\. It is provided for blocking operations and must be used carefully in an async runtime; it blocks the thread, not the coroutine\.

### WriteString
```jule
async fn WriteString(mut *self, s: string)!: (n: int)
```
Like Write, but writes the contents of string s rather than a slice of bytes\.

### Read
```jule
async fn Read(mut *self, mut buf: []byte)!: (n: int)
```
Read bytes to buffer from handle and returns read byte count\. The number of bytes read can never exceed the length of the buf\. If the buf is larger than the number of bytes that can be read, the buffer will not cause an overflow\. Offset will be shifted by the number of bytes read\.

### ReadSync
```jule
fn ReadSync(mut *self, mut buf: []byte)!: (n: int)
```
Sync variant of \[Write\]\. It is provided for blocking operations and must be used carefully in an async runtime; it blocks the thread, not the coroutine\.

### Seek
```jule
async fn Seek(mut *self, offset: i64, whence: int)!: i64
```
Sets offset to next Read/Write operation and returns the new offset\. whence: 0 \(io::SeekStart\) means, relative to the whence of the file, 1 \(io::SeekCurrent\) means relative to the current offset, and 2 \(io::SeekEnd\) means relative to end\.

### Sync
```jule
async fn Sync(mut *self)!
```
Commits the current contents of the file to stable storage\. Typically, this means flushing the file system&#39;s in\-memory copy of recently written data to disk\.

### Truncate
```jule
async fn Truncate(mut *self, size: i64)!
```
Changes the size of the file\. It does not change the I/O offset\.

### Close
```jule
async fn Close(mut *self)!
```
Closes file handle\.

### CloseSync
```jule
fn CloseSync(mut *self)!
```
Sync variant of \[Close\]\. It is provided for blocking operations and must be used carefully in an async runtime; it blocks the thread, not the coroutine\.

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

## FileMode
```jule
type FileMode: u32
```
Represents a file&#39;s mode and permission bits\. The bits have the same definition on all systems, so that information about files can be moved from one system to another portably\. Not all bits apply to all systems\. The only required bit is \[ModeDir\] for directories\.

### String
```jule
fn String(*self): string
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