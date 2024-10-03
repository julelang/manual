# std/os

## Globals

```jule
const O_RDONLY: oFlag // Open the file read-only
const O_WRONLY: oFlag // Open the file write-only
const O_RDWR: oFlag   // Open the file read-write
const O_APPEND: oFlag // Append data to the file when writing
const O_CREATE: oFlag // Create a new file if none exists
const O_EXCL: oFlag   // Used with O_CREATE, file must not exist
const O_SYNC: oFlag   // Open for synchronous I/O
const O_TRUNC: oFlag  // Truncate regular writable file when opened
```
Flags to open wrapping those of the underlying system.
Not all flags may be implemented on a given system.
Exactly one of O_RDONLY, O_WRONLY, or O_RDWR must be specified.

All flags have the underlying enum type for type safety.

## Functions

```jule
fn Stdin(): &Stdio
```
Returns Stdio for the standard input file descriptor.

```jule
fn Stdout(): &Stdio
```
Returns Stdio for the standard output file descriptor.

```jule
fn Stderr(): &Stdio
```
Returns Stdio for the standard error file descriptor.

```jule
fn Exit(code: int)
```
Causes the current program to exit with the given status code.\
Conventionally, code zero indicates success, non-zero an error.

```jule
fn Executable(): str
```
Returns executable path.\
Returns empty string if any error occurs. 

```jule
fn Args(): []str
```
Returns command-line arguments.
Starts with the program name.

```jule
fn Env(): []str
```
Returns envrionment variables.

```jule
fn Getwd()!: str
```
Returns an absolute path name of the current working directory of the calling process.

Possible errors (`Error`): `Denied`

```jule
fn Chdir(path: str)!
```
Changes the current working directory to the given directory.

Possible errors (`Error`): `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `InsufficientMemory`

## Structs

```jule
struct Stat {}
```
Status information. 

**Methods:**

`static fn Of(path: str)!: Stat`\
Returns a Stat describing the path.\
Returns nil reference if error occurs.

Possible errors (`FSError`): `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `Overflow`

`fn IsDir(self): bool`\
Reports path is directory or not.

`fn IsReg(self): bool`\
Reports path is regular file or not.

`fn Size(self): uint`\
Total size in bytes of regular file or symbolic link.

---

```jule
struct Dir {
    Name: str
    Stat: Stat
}
```
Directory entry.

**Methods:**

`static fn Read(path: str)!: []Dir`\
Reads the named directory and returs all its directory entries can read.

Possible errors (`FSError`): `Denied` `InvalidDescriptor` `PerProcessLimit` `SystemWideLimit` `NotExist` `InsufficientMemory` `NotDir`

`static fn Create(path: str)!`\
Creates directory.

Possible errors (`FSError`): `Denied` `Exist` `ReadOnly` `NoSpace`

`static fn Remove(path: str)!`\
Removes empty directory.

Possible errors (`FSError`): `Denied` `NotExist` `NotEmpty` `SyncIO` `IO` `Loop` `NotDir`

---

```jule
struct File
```
The file stream handle.

It works like a wrapper when it comes to console handle like stdin, stdout or stderr. Read and write functions are supported for console handlers. The rest of the functions are not supported and not checked, it is undefined behavior.

There may be system call differences and performance differences for console handlers depending on the operating system. For example, Windows has an overhead for UTF-16 processing.

::: info
**Implemented Traits**
- io::Reader
- io::ReadCloser
- io::Writer
- io::WriteCloser
- io::ReadWriter
- io::Stream
:::

**Methods:**

`static fn New(handle: uintptr): &File`\
Returns new `&File` by handle.
If hadle <= 0, returns nil reference.

`static fn Open(path: str, flag: oFlag, mode: int)!: &File`\
Opens file stream with named file, specified flag (O_RDWR, O_TRUNC etc.) and perm. If named file does not exist and O_CREATE flag is passed, will created with mode (before umask). If successful, returns File reference with handle to file stream and the reference can used for I/O operations.

Possible errors: `Denied` `Exist` `Signal` `SyncIO` `IO` `IsDir` `Loop` `PerProcessLimit` `LongPath` `SystemWideLimit` `NotExist` `UnableStream` `NoSpace` `NotDir` `Device` `Overflow` `ReadOnly` `Retry` `Busy`

`static fn Remove(path: str)!`\
Removes named file.

Possible errors: `Denined` `Busy` `LongPath` `NotExist` `InsufficientMemory` `NotDir`

`static fn Read(path: str)!: []byte`\
Reads bytes of file. First, learns byte-size of file. Then reads bytes and returns buffer.

Possible errors: `Denied` `Exist` `Signal` `SyncIO` `IO` `IsDir` `Loop` `PerProcessLimit` `LongPath` `SystemWideLimit` `NotExist` `UnableStream` `NoSpace` `NotDir` `Device` `Overflow` `ReadOnly` `Retry` `Busy` `Device` `Seek` `InsufficientMemory` `Buffer`

`static fn Write(path: str, data: []byte, perm: int)!`\
Writes data to the named file, creating it if necessary. If the file does not exist, creates it with permissions perm (before umask); otherwise truncates it before writing, without changing permissions. Since requires multiple system calls to complete, a failure mid-operation can leave the file in a partially written state. Calls internally `File.Open`, `File.Write`, `File.Close` and forwards any exceptional.

`static fn Create(path: str)!: &File`\
Creates or truncates the named file. If the file already exists, it is truncated. If the file does not exist, it is created with mode 0666 (before umask). If successful, methods on the returned File can be used for I/O; the associated file descriptor has mode O_RDWR. Calls internally `File.Open` and forwards any exceptional.

`fn Seek(mut self, offset: int, origin: Seek)!: int`\
Sets offset to next Read/Write operation and returns the new offset. whence: 0 (Seek.Set) means, relative to the origin of the file, 1 (Seek.Cur) means relative to the current offset, and 2 (Seek.End) means relative to end.

Possible errors (`FSError`): `InvalidDescriptor` `SyncIO` `Overflow` `Seek`

`fn Read(mut self, mut buf: []byte)!: (n: int)`\
Read bytes to buffer from handle and returns readed byte count. The number of bytes readed can never exceed the length of the buf. If the buf is larger than the number of bytes that can be read, the buffer will not cause an overflow. Offset will be shifted by the number of bytes read.

Possible errors (`FSError`): `Retry` `InvalidDescriptor` `Signal` `SyncIO` `IO` `IsDir` `Overflow` `Buffer` `InsufficientMemory` `Device` `Seek`

`fn Write(mut self, buf: []byte)!: (n: int)`\
Writes bytes to handle and returns writed byte count. The number of bytes written can never exceed the length of the buf.

Possible errors (`FSError`): `Retry` `InvalidDescriptor` `Big` `Signal` `IO` `NoSpace` `Pipe` `Range` `SyncIO` `Seek` `Device` `Buffer`

`fn Close(mut self)!`\
Closes file handle. 

Possible errors (`FSError`): `InvalidDescriptor` `Signal` `IO`

---

```jule
struct Cmd {
    Args: []str
    Env:  []str
}
```
Runs a command in the operating system. There is no pipe for the output of the command, so any output will appear on the standard output.

The Args stores command-line arguments. The first argument is not should to be the path of the executable. Just pass necessary arguments.

The Env stores environment variables. If Env is nil or `len(Env) == 0`, child process will use copy of the parent process's environment variables. Environment variables should be in the `"KEY=value"` format.

**Methods:**

`static fn New(path: str): &Cmd`\
Returns Cmd instance for path.

`fn Spawn(self)!`\
Spawns new child-process and executes command. Panics if command is already spawned. Use the [`Wait`] or [`Kill`] method to make respawnable. Exceptionals will always be `CmdError`.

`fn Kill(self)!`\
Kills process. Fails if process is not alive. Panics if command is not spawned. Exceptionals will always be `CmdError`.

`fn Wait(self)!: int`\
Waits complete for running of process. Returns exit code of process. Panics if command is not spawned. Exceptionals will always be `CmdError`.

---

```jule
struct Stdio
```
Safe file handler wrapper for the standard file descriptors. Implements safe and extended functionalities for the standard output, standard error and standard input file descriptors. In general, it is a File wrapper for the handle. Any exceptional will be `FsError` and forwarded from File's methods.

::: info
**Implemented Traits**
- io::Reader
- io::Writer
- io::ReadWriter
- io::ByteReader
- io::RuneWriter
- io::StrWriter
:::

**Methods:**

`unsafe fn File(mut self): &File`\
Returns File handle. It is unsafe because using File handle directly may be not safe. Stdio handlers use mutable internal handlers, so any mutation may will cause issues.

`fn Read(mut self, mut buf: []byte)!: (n: int)`\
Implements the `io::Reader` trait.
Panics if file descriptor is not standard input.

`fn Write(mut self, buf: []byte)!: (n: int)`\
Implements the `io::Writer` trait. Panics if file descriptor is not standard output or standard error.

`fn ReadByte(mut self)!: (b: byte, n: int)`\
Implements the `io::ByteReader` trait. Panics if file descriptor is not standard input.

`fn WriteByte(mut self, b: byte)!`\
Implements the `io::ByteWriter` trait. Panics if file descriptor is not standard output or standard error.

`fn WriteRune(mut self, r: rune)!: (n: int)`\
Implements the `io::RuneWriter` trait. Panics if file descriptor is not standard output or standard error.

`fn WriteStr(mut self, s: str)!: (n: int)`\
Implements the `io::WriteStr` trait. Calls the `Stdio.Write` internally and forwards any exceptinal.

`fn ReadLine(mut self)!: str`\
Reads input until the end of the line and returns as string. Result string is not include newline. Panics if file descriptor is not standard input.

## Enums

```jule
enum CmdError
```
Cmd error codes.

**Fields:**

- `Denied`: Permission is not enough.
- `NotExist`: One or more components of the new process path name of the file do not exist or is a null pathname.
- `Env`: Environment variables are represented in wrong format or an error occurred when assigning.
- `Spawn`: An error occurred spawning.
- `Other`: Other system error.

---

```jule
enum Error
```
General OS error codes.

**Fields:**
- `Denied`: Search permission is denied for a component of the path prefix
- `IO`: Input/Output error, an error occurred while reading from the file system
- `Loop`: A loop exists in symbolic links encountered during resolution of the path argument
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: A component of path does not name an existing file or path is an empty string
- `NotDir`: A component of the path prefix is not a directory
- `InsufficientMemory`: Insufficient memory to complete the operation
- `Device`: Device did not respond

---

```jule
enum FSError
```
File system error codes.

**Fields:**
- `Denied`: Search permission is denied for a component of the path prefix
- `IO`: Input/Output error, an error occurred while reading from the file system
- `Loop`: A loop exists in symbolic links encountered during resolution of the path argument
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: A component of path does not name an existing file or path is an empty string
- `NotDir`: A component of the path prefix is not a directory
- `Overflow`: The file size in bytes or the number of blocks allocated to the file or the file serial number cannot be represented correctly in the structure pointed to by buf
- `InvalidDescriptor`: fd is not a valid file descriptor opened for reading.
- `PerProcessLimit`: The per-process limit on the number of open file descriptors has been reached.
- `SystemWideLimit`: The system-wide limit on the total number of open files has been reached.
- `InsufficientMemory`: Insufficient memory to complete the operation.
- `Exist`: A component of path does name an existing file
- `Signal`: A signal was caught during
- `SyncIO`: The implementation does not support synchronized I/O for this file
- `IsDir`: The named file is a directory and flag includes O_WRONLY or O_RDWR
- `UnableStream`: The path argument names a STREAMS-based file and the system is unable to allocate a STREAM
- `NoSpace`: There is no space on the drive
- `Device`: Device did not respond
- `ReadOnly`: Read-only filesystem
- `Retry`: Resource temporarily unavailable
- `Busy`: File is busy
- `Big`: File too large
- `Pipe`: Broken pipe
- `Range`: Input is outside the range
- `NoDest`: No such device or address
- `Buffer`: No buffer space available
- `BadMessage`: Not a data message
- `NotEmpty`: Not empty

---

```jule
enum Seek: int
```
Seek whence values.

**Fields:**
- `Set`: Seek relative to the origin of the file
- `Cur`: Seek relative to the current offset
- `End`: Seek relative to the end