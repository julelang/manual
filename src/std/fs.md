# std::fs

## Structs
```jule
struct Status {}
```
Status information. 

**Methods:**

`static fn Of(path: str)!: &Status`\
Returns a Status describing the path.\
Returns nil reference if error occurs.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `Overflow`

`fn IsDir(self): bool`\
Reports path is directory or not.

`fn IsReg(self): bool`\
Reports path is regular file or not.

`fn Size(): uint`\
Total size in bytes of regular file or symbolic link.

---

```jule
struct DirEntry {
    Name: str
    Stat: &Status
}
```
Directory entry.

---

```jule
struct File
```
The file stream handle.

It works like a wrapper when it comes to console handle like stdin, stdout or stderr. Read and write functions are supported for console handlers. The rest of the functions are not supported and not checked, it is undefined behavior.

There may be system call differences and performance differences for console handlers depending on the operating system. For example, Windows has an overhead for UTF-16 processing.

**Methods:**

`static fn New(handle: uintptr): &File`\
Returns new `&File` by handle.
If hadle <= 0, returns nil reference.

`static fn Open(path: str, flag: OFlag, mode: int)!: &File`\
Opens file stream with named file, specified flag (OFlag.Rdwr, OFlag.Trunc etc.) and perm. If named file does not exist and OFlag.Creat flag is passed, will created with mode (before umask). If successful, returns File reference with handle to file stream and the reference can used for I/O operations.

Possible errors: `Denied` `Exist` `Signal` `SyncIO` `IO` `IsDir` `Loop` `PerProcessLimit` `LongPath` `SystemWideLimit` `NotExist` `UnableStream` `NoSpace` `NotDir` `Device` `Overflow` `ReadOnly` `Retry` `Busy`

`static fn Remove(path: str)!`\
Removes named file.

Possible errors: `Denined` `Busy` `LongPath` `NotExist` `InsufficientMemory` `NotDir`

`static fn Read(path: str)!: []byte`\
Reads bytes of file. First, learns byte-size of file. Then reads bytes and returns buffer.

Possible errors: `Denied` `Exist` `Signal` `SyncIO` `IO` `IsDir` `Loop` `PerProcessLimit` `LongPath` `SystemWideLimit` `NotExist` `UnableStream` `NoSpace` `NotDir` `Device` `Overflow` `ReadOnly` `Retry` `Busy` `Device` `Seek` `InsufficientMemory` `Buffer`

`static fn Write(path: str, data: []byte, perm: int)!`\
Writes data to the named file, creating it if necessary. If the file does not exist, creates it with permissions perm (before umask); otherwise truncates it before writing, without changing permissions. Since requires multiple system calls to complete, a failure mid-operation can leave the file in a partially written state.

`static fn WriteStr(path: str, &data: str, perm: int)!`\
Same as [`File.Write`], designed for strings.

`static fn Create(path: str)!: &File`\
Creates or truncates the named file. If the file already exists, it is truncated. If the file does not exist, it is created with mode 0666 (before umask). If successful, methods on the returned File can be used for I/O; the associated file descriptor has mode OFlag.Rdwr.

`fn Seek(mut self, offset: int, origin: Seek)!: int`\
Sets offset to next Read/Write operation and returns the new offset. whence: 0 (Seek.Set) means, relative to the origin of the file, 1 (Seek.Cur) means relative to the current offset, and 2 (Seek.End) means relative to end.

Possible errors: `InvalidDescriptor` `SyncIO` `Overflow` `Seek`

`fn Read(mut self, mut buff: []byte)!: (n: int)`\
Read bytes to buffer from handle and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow. Offset will be shifted by the number of bytes read.

Possible errors: `Retry` `InvalidDescriptor` `Signal` `SyncIO` `IO` `IsDir` `Overflow` `Buffer` `InsufficientMemory` `Device` `Seek`

\
`fn Write(mut self, buff: []byte)!: (n: int)`\
Writes bytes to handle and returns writed byte count. The number of bytes written can never exceed the length of the buff.

Possible errors: `Retry` `InvalidDescriptor` `Big` `Signal` `IO` `NoSpace` `Pipe` `Range` `SyncIO` `Seek` `Device` `Buffer`

\
`fn WriteStr(mut self, &data: str)!: (n: int)`\
Same as [`Write`], designed for strings.

\
`fn Close(mut self)!`\
Closes file handle. 

Possible errors: `InvalidDescriptor` `Signal` `IO`

---

```jule
struct Directory
```
Directory.

**Methods:**

`static fn Read(path: str)!: []&DirEntry`\
Reads the named directory and returs all its directory entries can read.

Possible errors: `Denied` `InvalidDescriptor` `PerProcessLimit` `SystemWideLimit` `NotExist` `InsufficientMemory` `NotDir`

`static fn Create(path: str)!`\
Creates directory.

Possible errors: `Denied` `Exist` `ReadOnly` `NoSpace`

`static fn Remove(path: str)!`\
Removes empty directory.

Possible errors: `Denied` `NotExist` `NotEmpty` `SyncIO` `IO` `Loop` `NotDir`

## Enums
`enum FsError`

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

`enum Seek: int`\
Seek whence values.

**Fields:**
- `Set`: Seek relative to the origin of the file
- `Cur`: Seek relative to the current offset
- `End`: Seek relative to the end

---

`enum OFlag: int`\
Flags to open wrapping those of the underlying system.\
Not all flags may be implemented on a given system.\
Exactly one of Rdonly, Wronly, or Rdwr must be specified. 

**Fields:**
- `Rdonly`: Open the file read-only
- `Wronly`: Open the file write-only
- `Rdwr`: Open the file read-write
- `Append`: Append data to the file when writing
- `Create`: Create a new file if none exists
- `Excl`: Used with OFlag.Create, file must not exist
- `Sync`: Open for synchronous I/O
- `Trunc`: Truncate regular writable file when opened