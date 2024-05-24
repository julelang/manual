# Bit Flags

You can use more safe bitflags with enums than plain integers. Here is how.

First of all, you should define a default field with zero value. Because the amper (`&`) operator is not available without this condition. This operator is important because it is really efficient way to lookup flags.

Other thins is same as plain integers. Use relevant operators to handle your flags.

Here is example implementation:
```jule
enum Permission {
    Read,
    Write,
    Execute,
}

fn execute(perm: Permission) {
    if perm&Permission.Execute != Permission.Execute {
        panic("you have not execution permission")
    }
    // ...
}

fn main() {
    let mut perm = Permission.Read
    perm |= Permission.Write
    perm |= Permission.Execute
    execute(perm)
}
```