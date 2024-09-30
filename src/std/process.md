# std/process

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
Cmd runs a command in the operating system. There is no pipe for the output of the command, so any output will appear on the standard output.

The Args stores command-line arguments. The first argument is not should to be the path of the executable. Just pass necessary arguments.

The Env stores environment variables. If Env is nil or `len(Env) == 0`, child process will use copy of the parent process's environment variables. Environment variables should be in the `"KEY=value"` format.

**Methods:**

`static fn New(path: str): &Cmd`\
Returns Cmd instance for path.

`fn Spawn(self)!`\
Spawns new child-process and executes command. Panics if command is already spawned. Use the [`Wait`] or [`Kill`] method to make respawnable.

`fn Kill(self)!`\
Kills process. Fails if process is not alive. Panics if command is not spawned.

`fn Wait(self)!: int`\
Waits complete for running of process. Returns exit code of process. Panics if command is not spawned.

## Enums

```jule
enum ProcessError
```
Process error codes.

**Fields:**

- `Denied`: Permission is not enough.
- `NotExist`: One or more components of the new process path name of the file do not exist or is a null pathname.
- `Env`: Environment variables are represented in wrong format or an error occurred when assigning.
- `Spawn`: An error occurred spawning.
- `Other`: Other system error.