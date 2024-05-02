# std::process

## Type Aliases

```jule
type Pid: int
```
Type of a process id.

## Functions

```jule
fn Exit(code: int)
```
Causes the current program to exit with the given status code.\
Conventionally, code zero indicates success, non-zero an error.

## Structs

```jule
struct Cmd {
    Args: []str
    Env:  []str
}
```
Cmd runs a command in the operating system. There is no pipe for the output of the command, so any output will appear on the screen.

**Methods:**

`static fn New(path: str): &Cmd`\
Returns Cmd instance for path.

`fn Spawn(mut self)!`\
Spawns new child-process and executes command.
Returns exist code of child-process.

## Enums

```jule
enum ProcessError
```
Process error codes.

**Fields:**

- `Denied`: Permission is not enough
- `Loop`: Too many symbolic links were encountered in translating path or file
- `LongPath`: The length of the path argument exceeds maxium path length or a pathname component is longer than maximum name length
- `NotExist`: One or more components of the new process path name of the file do not exist or is a null pathname
- `NotDir`: A component of the new process path of the file prefix is not a directory
- `Signal`: A signal was caught during the execution
- `SyncIO`: The new process image file has the appropriate permission and has a recognized executable binary format, but the system does not support execution of a file with this format
- `Busy`: The new process image file is a pure procedure (shared text) file that is currently open for writing by some process
- `BadFile`: The argument is not a valid file descriptor.
- `NotExec`: The new process image file has the appropriate access permission but is not in the proper format
- `NoLink`: The path points to a remote machine and the link to that machine is no longer active
- `Big`: The number of bytes in the new process's argument list is greater than the system-imposed limit of maximum argument bytes
- `Fork`: Fork failed
