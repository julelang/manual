# std::process

## Type Aliases

```jule
type Pid: int
```
Type of a process id.

## Functions

```jule
exit(code: int)
```
Causes the current program to exit with the given status code.\
Conventionally, code zero indicates success, non-zero an error.

## Structs

```jule
pub struct Cmd {
    args: []str
    env:  []str
}
```
Cmd runs a command in the operating system. There is no pipe for the output of the command, so any output will appear on the screen.

After a cmd is spawned, the process must be terminated before it can be used again. Cmd does not follow this. That's why you need to let it know this with methods such as `kill` or `wait`.

**Static Fields:**

`const NPID: Pid`\
Process id that not spawned.

**Methods:**

`static fn new(file: str): &Cmd`\
Returns new instance of command for file descriptor.

`fn pid(self): Pid`\
Returns PID (process id). \
Returns NPID if process not spawned.

`fn file(self): str`\
Returns file descriptor.

`fn spawn(mut self)!`\
Spawns process.

`fn kill(mut self)!`\
Kills process. \
Fails if process is not alive.

`fn wait(mut self)!: int`\
Waits complete for running of process. \
Returns exit code of process.

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
