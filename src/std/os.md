# std/os

## Index

[Variables](#variables)\
[fn ReadDir\(path: str\)\!: \(dirents: \[\]DirEntry\)](#readdir)\
[fn Mkdir\(path: str\)\!](#mkdir)\
[fn Rmdir\(path: str\)\!](#rmdir)\
[fn Open\(path: str\)\!: &amp;File](#open)\
[fn OpenFile\(path: str, mode: int, perm: FileMode\)\!: &amp;File](#openfile)\
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
[fn Env\(\): \[\]str](#env)\
[fn Getwd\(\)\!: str](#getwd)\
[fn Chdir\(path: str\)\!](#chdir)\
[fn Getenv\(key: str\): str](#getenv)\
[fn LookupEnv\(key: str\): \(val: str, unset: bool\)](#lookupenv)\
[fn Setenv\(key: str, val: str\): bool](#setenv)\
[fn Stdin\(\): &amp;Stdio](#stdin)\
[fn Stdout\(\): &amp;Stdio](#stdout)\
[fn Stderr\(\): &amp;Stdio](#stderr)\
[struct DirEntry](#direntry)\
[struct Cmd](#cmd)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New\(path: str\): &amp;Cmd](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Spawn\(self\)\!](#spawn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Kill\(self\)\!](#kill)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait\(self\)\!: int](#wait)\
[struct File](#file)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut self, buf: \[\]byte\)\!: \(n: int\)](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut self, mut buf: \[\]byte\)\!: \(n: int\)](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek\(mut self, offset: i64, whence: int\)\!: i64](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sync\(mut self\)\!](#sync)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Truncate\(mut self, size: i64\)\!](#truncate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close\(mut self\)\!](#close)\
[type FileMode](#filemode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(self\): bool](#isdir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsRegular\(self\): bool](#isregular)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Perm\(self\): FileMode](#perm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Type\(self\): FileMode](#type)\
[struct Stdio](#stdio)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn File\(mut self\): &amp;File](#file-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read\(mut self, mut buf: \[\]byte\)\!: \(n: int\)](#read-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write\(mut self, buf: \[\]byte\)\!: \(n: int\)](#write-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadByte\(mut self\)\!: \(b: byte, n: int\)](#readbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteByte\(mut self, b: byte\)\!](#writebyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteRune\(mut self, r: rune\)\!: \(n: int\)](#writerune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr\(mut self, s: str\)\!: \(n: int\)](#writestr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadLine\(mut self\)\!: str](#readline)\
[struct FileInfo](#fileinfo)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir\(self\): bool](#isdir-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(self\): FileMode](#mode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ModTime\(self\): time::Time](#modtime)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(self\): i64](#size)\
[enum Error](#error)\
[enum CmdError](#cmderror)\
[enum FSError](#fserror)

## Variables

```jule
const DevNull = devNull
```
The name of the operating system&#39;s “null device\.” On Unix\-like systems, it is &#34;/dev/null&#34;; on Windows, &#34;NUL&#34;\.

---

```jule
const O_RDONLY = sys::O_RDONLY // Open the file read-only
const O_WRONLY = sys::O_WRONLY // Open the file write-only
const O_RDWR = sys::O_RDWR     // Open the file read-write
const O_APPEND = sys::O_APPEND // Append data to the file when writing
const O_CREATE = sys::O_CREAT  // Create a new file if none exists
const O_EXCL = sys::O_EXCL     // Used with O_CREATE, file must not exist
const O_SYNC = sys::O_SYNC     // Open for synchronous I/O
const O_TRUNC = sys::O_TRUNC   // Truncate regular writable file when opened
```
Flags to OpenFile wrapping those of the underlying system\. Not all flags may be implemented on a given system\.

---

```jule
const ModeDir = 1 << 31        // d: is a directory
const ModeAppend = 1 << 30     // a: append-only
const ModeExclusive = 1 << 29  // l: exclusive use
const ModeTemporary = 1 << 28  // T: temporary file; Plan 9 only
const ModeSymlink = 1 << 27    // L: symbolic link
const ModeDevice = 1 << 26     // D: device file
const ModeNamedPipe = 1 << 25  // p: named pipe (FIFO)
const ModeSocket = 1 << 24     // S: Unix domain socket
const ModeSetuid = 1 << 23     // u: setuid
const ModeSetgid = 1 << 22     // g: setgid
const ModeCharDevice = 1 << 21 // c: Unix character device, when ModeDevice is set
const ModeSticky = 1 << 20     // t: sticky
const ModeIrregular = 1 << 19  // ?: non-regular file; nothing else is known about this file
```
The defined file mode bits are the most significant bits of the \[FileMode\]\. The nine least\-significant bits are the standard Unix rwxrwxrwx permissions\. The values of these bits should be considered part of the public API and may be used in wire protocols or disk representations: they must not be changed, although new bits might be added\.

---

```jule
const ModeType = ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice | ModeCharDevice | ModeIrregular
```
Mask for the type bits\. For regular files, none will be set\.

---

```jule
const ModePerm = 0777
```
Unix permission bits\.

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

## Open
```jule
fn Open(path: str)!: &File
```
Opens the named file for reading\. If successful, methods on the returned file can be used for reading; the associated file descriptor has mode O\_RDONLY\.

## OpenFile
```jule
fn OpenFile(path: str, mode: int, perm: FileMode)!: &File
```
Opens file stream with named file, specified flag \(O\_RDRW, O\_TRUNC etc\.\) and perm\. If named file does not exist and O\_CREATE flag is passed, will created with mode \(before umask\)\. If successful, returns File reference with handle to file stream and the reference can used for I/O operations\.

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

## Env
```jule
fn Env(): []str
```
Returns environment variables\.

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

## Getenv
```jule
fn Getenv(key: str): str
```
Retrieves the value of the environment variable named by the key\. It returns the value, which will be empty if the variable is not present\. To distinguish between an empty value and an unset value, use \[LookupEnv\]\.

## LookupEnv
```jule
fn LookupEnv(key: str): (val: str, unset: bool)
```
Retrieves the value of the environment variable named by the key\. If the variable is present in the environment the value \(which may be empty\) is returned and the boolean is false\. Otherwise the returned value will be empty and the boolean will be true\.

## Setenv
```jule
fn Setenv(key: str, val: str): bool
```
Sets the value of the environment variable named by the key\. Reports whether it successful\.

## Stdin
```jule
fn Stdin(): &Stdio
```
Returns Stdio for the standard input file descriptor\.

## Stdout
```jule
fn Stdout(): &Stdio
```
Returns Stdio for the standard output file descriptor\.

## Stderr
```jule
fn Stderr(): &Stdio
```
Returns Stdio for the standard error file descriptor\.

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
	Args: []str
	Env:  []str
	// NOTE: contains filtered hidden or unexported fields
}
```
Runs a command in the operating system\. There is no pipe for the output of the command, so any output will appear on the standard output\.

The Args stores command\-line arguments\. The first argument is not should to be the path of the executable\. Just pass necessary arguments\.

The Env stores environment variables\. If Env is nil or len\(Env\) == 0, child process will use copy of the parent process&#39;s environment variables\. Environment variables should be in the &#34;KEY=value&#34; format\.

### New
```jule
static fn New(path: str): &Cmd
```
Returns Cmd instance for path\.

### Spawn
```jule
fn Spawn(self)!
```
Spawns new child\-process and executes command\. Panics if command is already spawned\. Use the \[Wait\] or \[Kill\] method to make respawnable\. Exceptionals will always be CmdError\.

### Kill
```jule
fn Kill(self)!
```
Kills process\. Fails if process is not alive\. Panics if command is not spawned\. Exceptionals will always be CmdError\.

### Wait
```jule
fn Wait(self)!: int
```
Waits complete for running of process\. Returns exit code of process\. Panics if command is not spawned\. Exceptionals will always be CmdError\.

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

### Write
```jule
fn Write(mut self, buf: []byte)!: (n: int)
```
Writes bytes to handle and returns written byte count\. The number of bytes written can never exceed the length of the buf\.

Implements the io::Writer trait\.

### Read
```jule
fn Read(mut self, mut buf: []byte)!: (n: int)
```
Read bytes to buffer from handle and returns read byte count\. The number of bytes read can never exceed the length of the buf\. If the buf is larger than the number of bytes that can be read, the buffer will not cause an overflow\. Offset will be shifted by the number of bytes read\.

Implements the io::Reader trait\.

### Seek
```jule
fn Seek(mut self, offset: i64, whence: int)!: i64
```
Sets offset to next Read/Write operation and returns the new offset\. whence: 0 \(io::SeekStart\) means, relative to the whence of the file, 1 \(io::SeekCurrent\) means relative to the current offset, and 2 \(io::SeekEnd\) means relative to end\.

### Sync
```jule
fn Sync(mut self)!
```
Commits the current contents of the file to stable storage\. Typically, this means flushing the file system&#39;s in\-memory copy of recently written data to disk\.

### Truncate
```jule
fn Truncate(mut self, size: i64)!
```
Changes the size of the file\. It does not change the I/O offset\.

### Close
```jule
fn Close(mut self)!
```
Closes file handle\.

Implements the io::Closer trait\.

## FileMode
```jule
type FileMode: u32
```
Represents a file&#39;s mode and permission bits\. The bits have the same definition on all systems, so that information about files can be moved from one system to another portably\. Not all bits apply to all systems\. The only required bit is \[ModeDir\] for directories\.

### Str
```jule
fn Str(self): str
```


### IsDir
```jule
fn IsDir(self): bool
```
Reports whether self describes a directory\. That is, it tests for the \[ModeDir\] bit being set in self\.

### IsRegular
```jule
fn IsRegular(self): bool
```
Reports whether self describes a regular file\. That is, it tests that no mode type bits are set\.

### Perm
```jule
fn Perm(self): FileMode
```
Returns the Unix permission bits in self \(self &amp; \[ModePerm\]\)\.

### Type
```jule
fn Type(self): FileMode
```
Returns type bits in self \(self &amp; \[ModeType\]\)\.

## Stdio
```jule
struct Stdio {
	// NOTE: contains filtered hidden or unexported fields
}
```
Safe file handler wrapper for the standard file descriptors\. Implements safe and extended functionalities for the standard output, standard error and standard input file descriptors\. In general, it is a File wrapper for the handle\. Any exceptional will be FsError and forwarded from File&#39;s methods\.

### Implemented Traits

- `io::Reader`
- `io::Writer`
- `io::ReadWriter`
- `io::ByteReader`
- `io::ByteWriter`
- `io::RuneWriter`
- `io::StrWriter`

### File
```jule
unsafe fn File(mut self): &File
```
Returns File handle\. It is unsafe because using File handle directly may be not safe\. Stdio handlers use mutable internal handlers, so any mutation may will cause issues\.

### Read
```jule
fn Read(mut self, mut buf: []byte)!: (n: int)
```
Implements the io::Reader trait\. Panics if file descriptor is not standard input\.

### Write
```jule
fn Write(mut self, buf: []byte)!: (n: int)
```
Implements the io::Writer trait\. Panics if file descriptor is not standard output or standard error\.

### ReadByte
```jule
fn ReadByte(mut self)!: (b: byte, n: int)
```
Implements the io::ByteReader trait\. Panics if file descriptor is not standard input\.

### WriteByte
```jule
fn WriteByte(mut self, b: byte)!
```
Implements the io::ByteWriter trait\. Panics if file descriptor is not standard output or standard error\.

### WriteRune
```jule
fn WriteRune(mut self, r: rune)!: (n: int)
```
Implements the io::RuneWriter trait\. Panics if file descriptor is not standard output or standard error\.

### WriteStr
```jule
fn WriteStr(mut self, s: str)!: (n: int)
```
Implements the io::WriteStr trait\. Calls the \`Stdio\.Write\` internally and forwards any exceptinal\.

### ReadLine
```jule
fn ReadLine(mut self)!: str
```
Reads input until the end of the line and returns as string\. Result string is not include newline\. Panics if file descriptor is not standard input\.

## FileInfo
```jule
struct FileInfo {
	// NOTE: contains filtered hidden or unexported fields
}
```
Describes a file and is returned by \[Stat\]\.

### IsDir
```jule
fn IsDir(self): bool
```
Abbreviation for self\.Mode\(\)\.IsDir\(\)\.

### Mode
```jule
fn Mode(self): FileMode
```
Returns file mode bits\.

### ModTime
```jule
fn ModTime(self): time::Time
```
Returns modification time\.

### Size
```jule
fn Size(self): i64
```
Returns length in bytes for regular files; system\-dependent for others\.

## Error
```jule
enum Error {
	Denied,             // Search permission is denied for a component of the path prefix
	IO,                 // Input/Output error, an error occurred while reading from the file system
	Loop,               // A loop exists in symbolic links encountered during resolution of the path argument
	LongPath,           // The length of the path argument exceeds maximum path length or a pathname component is longer than maximum name length
	NotExist,           // A component of path does not name an existing file or path is an empty string
	NotDir,             // A component of the path prefix is not a directory
	InsufficientMemory, // Insufficient memory to complete the operation
	Device,             // Device did not respond
}
```
General OS error codes\.

## CmdError
```jule
enum CmdError {
	Denied,   // Permission is not enough.
	NotExist, // One or more components of the new process path name of the file do not exist or is a null pathname.
	Env,      // Environment variables are represented in wrong format or an error occurred when assigning.
	Spawn,    // An error occurred spawning.
	Other,    // Other system error.
}
```
Cmd error codes\.

## FSError
```jule
enum FSError {
	Denied,             // Search permission is denied for a component of the path prefix
	IO,                 // Input/Output error, an error occurred while reading from or writing to the file system
	Loop,               // A loop exists in symbolic links encountered during resolution of the path argument
	LongPath,           // The length of the path argument exceeds maximum path length or a pathname component is longer than maximum name length
	NotExist,           // A component of path does not name an existing file or path is an empty string
	NotDir,             // A component of the path prefix is not a directory
	Overflow,           // The file size in bytes or the number of blocks allocated to the file or the file serial number cannot be represented correctly in the structure pointed to by buf
	InvalidDescriptor,  // fd is not a valid file descriptor opened for reading
	PerProcessLimit,    // The per-process limit on the number of open file descriptors has been reached
	SystemWideLimit,    // The system-wide limit on the total number of open files has been reached
	InsufficientMemory, // Insufficient memory to complete the operation
	Exist,              // A component of path does name an existing file
	Signal,             // A signal was caught during
	SyncIO,             // The implementation does not support synchronized I/O for this file
	IsDir,              // The named file is a directory and flag includes O_WRONLY or O_RDWR
	UnableStream,       // The path argument names a STREAMS-based file and the system is unable to allocate a STREAM
	NoSpace,            // There is no space on the drive
	Device,             // Device did not respond
	ReadOnly,           // Read-only filesystem
	Retry,              // Resource temporarily unavailable
	Busy,               // File is busy
	Big,                // File too large
	Pipe,               // Broken pipe
	Range,              // Input is outside the range
	Seek,               // Illegal seek
	Buffer,             // No buffer space available
	BadMessage,         // Not a data message
	NotEmpty,           // Not empty
}
```
File system error codes\.