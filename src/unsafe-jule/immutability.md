# Immutability

If a variable is immutable and has mutable data type, Safe Jule does not allow assigning it to a mutable variable. Memory safety on this is mentioned in the [immutability](/memory/immutability) documentations. There is a way to break it. It naturally means breaking safety as well, but you are conscious of it. Unsafe Jule does not encourage you to be safe about it.

The knowledge that the pointers are obtained as mutable when they are received is important in this regard. So if you take the pointer of an immutable variable and use it mutable, you can change the data of the immutable variable. Since you can only assign to pointers with Unsafe Jule, you will be aware that this is already an action that can create unsafety.

For example:
```jule
fn main() {
    let x = 10
    let mut xp = &x
    unsafe { *xp += 20 }
    println(x) // 30
}
```