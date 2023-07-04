# std::fs

## Functions
```
fn stat(path: str): (s: &Status, err: FsError)
```
Returns a Status describing the path.\
Returns nil reference if error occurs.

Possible errors: `Denied` `IO` `Loop` `LongPath` `NotExist` `NotDir` `Overflow`

---

`fn read_dir(path: str): ([]&DirEntry, FsError)`
Reads the named directory and returs all its directory entries can read.\
Returns nil if no any directory entry or error occurs.

Possible errors: `Denied` `InvalidDescriptor` `PerProcessLimit` `SystemWideLimit` `NotExist` `InsufficientMemory` `NotDir`

---

`fn open(path: str, flag: OFlag, mode: int): (&File, FsError)`

Opens file stream with named file, specified flag (Sema.Rdwr, Sema.Trunc etc.) and perm. If named file does not exist and Sema.Creat flag is passed, will created with mode (before umask). If successful, returns File reference with handle to file stream and the reference can used for I/O operations. Returns nil reference if error occurs.

Possible errors: `Denied` `Exist` `Signal` `SyncIO` `IO` `IsDir` `Loop` `PerProcessLimit` `LongPath` `SystemWideLimit` `NotExist` `UnableStream` `NoSpace` `NotDir` `Divice` `Overflow` `ReadOnly` `Retry` `Busy`

## Structs
```
struct Status {
    // Type and mode.
    mode: uint

    // Total size in bytes of regular file or symbolic link.
    size: uint
}
```
Status information. 

**Methods:**

`fn is_dir(self): bool`\
Reports path is directory or not.

`fn is_reg(self): bool`\
Reports path is regular file or not.

---

```
struct DirEntry {
    name: str
    stat: &Status
}
```
Directory entry.

---

```
struct File
```
The file stream handle.

**Methods:**

`fn seek(mut self, offset: i64, origin: Seek): (i64, FsError)`\
Sets offset to next Read/Write operation and returns the new offset. whence: 0 (Seek.Set) means, relative to the origin of the file, 1 (Seek.Cur) means relative to the current offset, and 2 (Seek.End) means relative to end. Return 0 if error occurs.

Possible errors: `InvalidDescriptor` `SyncIO` `Overflow` `Seek`

`fn read(mut self, mut buff: []byte): (n: int, FsError)`\
Read bytes to buffer from handle and returns readed byte count. The number of bytes readed can never exceed the length of the buff. If the buff is larger than the number of bytes that can be read, the buffer will not cause an overflow. Offset will be shifted by the number of bytes read. Returns 0 if error occurs.

Possible errors: `Retry` `InvalidDescriptor` `Signal` `SyncIO` `IO` `IsDir` `Overflow` `Buffer` `InsufficientMemory` `Divice` `Seek`

\
`fn write(mut self, buff: []byte): (n: int, FsError)`\
Writes bytes to handle and returns writed byte count. The number of bytes written can never exceed the length of the buff. Returns 0 if error occurs.

Possible errors: `Retry` `InvalidDescriptor` `Big` `Signal` `IO` `NoSpace` `Pipe` `Range` `SyncIO` `Seek` `Divice` `Buffer`

\
`fn close(mut self): FsError`\
Closes file handle. 

Possible errors: `InvalidDescriptor` `Signal` `IO`

## Enums
`enum FsError`

**Fields:**
- `Ok`: No problem
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
- `Divice`: Divice did not respond
- `ReadOnly`: Read-only filesystem
- `Retry`: Resource temporarily unavailable
- `Busy`: File is busy
- `Big`: File too large
- `Pipe`: Broken pipe
- `Range`: Input is outside the range
- `NoDest`: No such device or address
- `Buffer`: No buffer space available
- `BadMessage`: Not a data message

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
- `Excl`: Used with Sema.Create, file must not exist
- `Sync`: Open for synchronous I/O
- `Trunc`: Truncate regular writable file when opened

