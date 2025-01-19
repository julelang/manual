# std/os

## Index

[Variables](#variables)\
[fn Exit(code: int)](#exit)\
[fn Executable(): str](#executable)\
[fn Args(): \[\]str](#args)\
[fn Env(): \[\]str](#env)\
[fn Getwd()!: str](#getwd)\
[fn Chdir(path: str)!](#chdir)\
[fn Getenv(key: str): str](#getenv)\
[fn Stdin(): &amp;Stdio](#stdin)\
[fn Stdout(): &amp;Stdio](#stdout)\
[fn Stderr(): &amp;Stdio](#stderr)\
[struct Dir](#dir)\
[struct Cmd](#cmd)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn New(path: str): &amp;Cmd](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Spawn(self)!](#spawn)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Kill(self)!](#kill)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Wait(self)!: int](#wait)\
[struct File](#file)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Create(path: str)!: &amp;File](#create)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Read(path: str)!: \[\]byte](#read)\
&nbsp;&nbsp;&nbsp;&nbsp;[static fn Write(path: str, data: \[\]byte, perm: int)!](#write)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seek(mut self, offset: int, origin: Seek)!: int](#seek)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Close(mut self)!](#close)\
[struct Stat](#stat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsDir(self): bool](#isdir)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn IsReg(self): bool](#isreg)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size(self): uint](#size)\
[struct Stdio](#stdio)\
&nbsp;&nbsp;&nbsp;&nbsp;[unsafe fn File(mut self): &amp;File](#file-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Read(mut self, mut buf: \[\]byte)!: (n: int)](#read-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Write(mut self, buf: \[\]byte)!: (n: int)](#write-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadByte(mut self)!: (b: byte, n: int)](#readbyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteByte(mut self, b: byte)!](#writebyte)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteRune(mut self, r: rune)!: (n: int)](#writerune)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn WriteStr(mut self, s: str)!: (n: int)](#writestr)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ReadLine(mut self)!: str](#readline)\
[enum Error](#error)\
[enum CmdError](#cmderror)\
[enum Seek](#seek-1)\
[enum FSError](#fserror)

## Variables

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


## Exit
```jule
fn Exit(code: int)
```
Causes the current program to exit with the given status code. Conventionally, code zero indicates success, non-zero an error.

## Executable
```jule
fn Executable(): str
```
Returns executable path. Returns empty string if any error occurs.

## Args
```jule
fn Args(): []str
```
Returns command-line arguments. Starts with the program name.

## Env
```jule
fn Env(): []str
```
Returns environment variables.

## Getwd
```jule
fn Getwd()!: str
```
Returns an absolute path name of the current working directory of the calling process.

## Chdir
```jule
fn Chdir(path: str)!
```
Changes the current working directory to the given directory.

## Getenv
```jule
fn Getenv(key: str): str
```
Retrieves the value of the environment variable named by the key. It returns the value, which will be empty if the variable is not present. To distinguish between an empty value and an unset value, use \[LookupEnv\].

## Stdin
```jule
fn Stdin(): &Stdio
```
Returns Stdio for the standard input file descriptor.

## Stdout
```jule
fn Stdout(): &Stdio
```
Returns Stdio for the standard output file descriptor.

## Stderr
```jule
fn Stderr(): &Stdio
```
Returns Stdio for the standard error file descriptor.

## Dir
```jule
struct Dir {
	Name: str
	Stat: Stat
}
```
Directory entry.

## Cmd
```jule
struct Cmd {
	Args: []str
	Env:  []str
	// NOTE: contains filtered hidden or unexported fields
}
```
Runs a command in the operating system. There is no pipe for the output of the command, so any output will appear on the standard output.

The Args stores command-line arguments. The first argument is not should to be the path of the executable. Just pass necessary arguments.

The Env stores environment variables. If Env is nil or len(Env) == 0, child process will use copy of the parent process&#39;s environment variables. Environment variables should be in the &#34;KEY=value&#34; format.

### New
```jule
static fn New(path: str): &Cmd
```
Returns Cmd instance for path.

### Spawn
```jule
fn Spawn(self)!
```
Spawns new child-process and executes command. Panics if command is already spawned. Use the \[Wait\] or \[Kill\] method to make respawnable. Exceptionals will always be CmdError.

### Kill
```jule
fn Kill(self)!
```
Kills process. Fails if process is not alive. Panics if command is not spawned. Exceptionals will always be CmdError.

### Wait
```jule
fn Wait(self)!: int
```
Waits complete for running of process. Returns exit code of process. Panics if command is not spawned. Exceptionals will always be CmdError.

## File
```jule
struct File {
	// NOTE: contains filtered hidden or unexported fields
}
```
The file stream handle.

It works like a wrapper when it comes to console handle like stdin, stdout or stderr. Read and write functions are supported for console handlers. The rest of the functions are not supported and not checked, it is undefined behavior.

There may be system call differences and performance differences for console handlers depending on the operating system. For example, Windows has an overhead for UTF-16 processing.

### Implemented Traits

- `io::Reader`
- `io::ReadCloser`
- `io::Writer`
- `io::WriteCloser`
- `io::ReadWriter`
- `io::Stream`

### Create
```jule
static fn Create(path: str)!: &File
```
Creates or truncates the named file. If the file already exists, it is truncated. If the file does not exist, it is created with mode 0666 (before umask). If successful, methods on the returned File can be used for I/O; the associated file descriptor has mode O\_RDWR. Calls internally \`File.Open\` and forwards any exceptional.

### Read
```jule
static fn Read(path: str)!: []byte
```
Reads bytes of file. First, learns byte-size of file. Then reads bytes and returns buffer.

### Write
```jule
static fn Write(path: str, data: []byte, perm: int)!
```
Writes data to the named file, creating it if necessary. If the file does not exist, creates it with permissions perm (before umask); otherwise truncates it before writing, without changing permissions. Since requires multiple system calls to complete, a failure mid-operation can leave the file in a partially written state. Calls internally \`File.Open\`, \`File.Write\`, \`File.Close\` and forwards any exceptional.

### Seek
```jule
fn Seek(mut self, offset: int, origin: Seek)!: int
```
Sets offset to next Read/Write operation and returns the new offset. whence: 0 (Seek.Set) means, relative to the origin of the file, 1 (Seek.Cur) means relative to the current offset, and 2 (Seek.End) means relative to end.

### Close
```jule
fn Close(mut self)!
```
Closes file handle.

Implements the io::Closer trait.

## Stat
```jule
struct Stat {
	// NOTE: contains filtered hidden or unexported fields
}
```
Status information.

### IsDir
```jule
fn IsDir(self): bool
```
Reports path is directory or not.

### IsReg
```jule
fn IsReg(self): bool
```
Reports path is regular file or not.

### Size
```jule
fn Size(self): uint
```
Total size in bytes of regular file or symbolic link.

## Stdio
```jule
struct Stdio {
	// NOTE: contains filtered hidden or unexported fields
}
```
Safe file handler wrapper for the standard file descriptors. Implements safe and extended functionalities for the standard output, standard error and standard input file descriptors. In general, it is a File wrapper for the handle. Any exceptional will be FsError and forwarded from File&#39;s methods.

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
Returns File handle. It is unsafe because using File handle directly may be not safe. Stdio handlers use mutable internal handlers, so any mutation may will cause issues.

### Read
```jule
fn Read(mut self, mut buf: []byte)!: (n: int)
```
Implements the io::Reader trait. Panics if file descriptor is not standard input.

### Write
```jule
fn Write(mut self, buf: []byte)!: (n: int)
```
Implements the io::Writer trait. Panics if file descriptor is not standard output or standard error.

### ReadByte
```jule
fn ReadByte(mut self)!: (b: byte, n: int)
```
Implements the io::ByteReader trait. Panics if file descriptor is not standard input.

### WriteByte
```jule
fn WriteByte(mut self, b: byte)!
```
Implements the io::ByteWriter trait. Panics if file descriptor is not standard output or standard error.

### WriteRune
```jule
fn WriteRune(mut self, r: rune)!: (n: int)
```
Implements the io::RuneWriter trait. Panics if file descriptor is not standard output or standard error.

### WriteStr
```jule
fn WriteStr(mut self, s: str)!: (n: int)
```
Implements the io::WriteStr trait. Calls the \`Stdio.Write\` internally and forwards any exceptinal.

### ReadLine
```jule
fn ReadLine(mut self)!: str
```
Reads input until the end of the line and returns as string. Result string is not include newline. Panics if file descriptor is not standard input.

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
General OS error codes.

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
Cmd error codes.

## Seek
```jule
enum Seek: int {
	Set: 0, // Seek relative to the origin of the file
	Cur: 1, // Seek relative to the current offset
	End: 2, // Seek relative to the end
}
```
Seek whence values.

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
File system error codes.