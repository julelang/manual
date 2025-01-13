# Mutability

Mutability is the opposite of immutability. Mutable memory areas are allowed to be changed. It must be specified that a identified memory area is mutable, otherwise every identified memory area is considered immutable. Mutability for an identified field is achieved using the `mut` keyword.

## Mutable Variables
Let's learn to say how we want a variable that is immutable by default to be mutable. The keyword `mut` is used for this. Before defining a variable, declare it mutable with this keyword. Then you will have a mutable variable.

But before that, let's make a deliberate mistake to better understand immutability:
```jule
fn main() {
    let x = 20
    x++
    println(x)
}
```
The example above is absolutely wrong. Because the variable `x` we have is an immutable variable. And the `x++` statement definitely breaks immutability. In this case, compiler will give error. Now let's repeat the same example using a mutable variable. 
```jule
fn main() {
    let mut x = 20
    x++
    println(x)
}
```
Currently we want our variable as mutable so the compiler doesn't object to anything.
::: tip
All literals and received pointers are considered mutable.
:::

## Mutable Structures
Mutable structures are risky structures that can break immutability when directly copied. For a structure to be mutable, one of its fields must have an explicitly mutable data type. When a struct is mutable, it loses its ability to be copied. In this case, if you try to assign an immutable mutable struct instance to a mutable definition, you will fail because there is no copy and you risk breaking immutability.

See the example below for better understanding:
```jule
struct Wrapper {
    slc: []int
}

fn main() {
    let x = Wrapper{slc: [1,2,3]}
    let mut y = x
    y.slc[0] = 89
    println(x.slc[0])
    println(y.slc[0])
}
```
This structure is a mutable structure because it has a field with a mutable type. The slice that the structure contains is mutable when the structure is copied, and if the main structure is immutable, it risks this immutability of the structure. This is because the mutable copy points to the same address and the changes will affect the other copy.

The variable `x` in the example shows the case of keeping the mutable structure in an immutable variable. Then the `x` variable is copied and assigned to the mutable `y` variable, but this is a risky and unsafe operation as explained.

## Interior Mutability
When an instance of a struct is immutable, you cannot use it with mutable methods because this compromises its immutability guarantee. However, you may still need to change the fields of an immutable structure. For this you need to use interior mutability. Since you cannot call a mutable method, your method will remain immutable, but thanks to interior mutability, you will be able to obtain the fields you want as mutable.

It is recommended that fields within interior mutability not be public, although the compiler leaves this to the discretion of the developer. Because when interior mutability fields vary in an immutable instance, the developer using this immutable copy may encounter a change even though it does not expect a change on the copy. Therefore, if fields within interior mutability need to be accessible, it is recommended to use wrapper methods.

Now let's take a look at how interior mutability is achieved. Actually, this is a pretty simple. If you are a developer who has used C++ before, you may be familiar with the `mutable` keyword in this regard. Similarly, Jule uses the already existing keyword mut for mutability. For interior mutability, the relevant field must be declared with the mut keyword. This means that field can exhibit interior mutability.

For example:
```jule
struct MyStruct {
    mut x: int
    y:     int
}
```

In this example, the mutability of the `y` field is fully responsive. However, the variable `x` exhibits interior mutability. That's why it can be changed in methods without the need for `mut self` receiver parameter.

The point that should not be forgotten in this regard is that even if there is interior mutability, this field cannot be changed from outside the structure with an immutable instance. Interior mutability only applies inside the structure itself. 

If a structure field uses interior mutability, there will be no problem in assigning it to mutable while it is immutable, even if it uses a mutable type. This means you can move it around in assignments and copies.

In this way, inferior mutability provides some important opportunities:
- Private fields can be mutated without using a mutable receiver.
- Moving some mutable data between struct copies.
- Encapsulated mutability.

### Mutating without Mutability

The structure can access and change interior mutable areas within its scope without a mutable receiver.

For example:
```jule
struct Foo {
    mut n: int
}

impl Foo {
    fn Print(self) {
        println("hello")
        self.n++
    }

    fn Printed(self): int {
        ret self.n
    }
}

fn main() {
    let foo = Foo{}
    foo.Print()
    foo.Print()
    foo.Print()
    println(foo.Printed())
}
```

In the example above, struct `Foo` has `n` fields which are interior mutable. Although the 'Print' method uses an immutable receiver, it can change the value of the 'n' field within itself, thanks to interior mutability.

The method not only mutates its own instance, but also can mutate different instances defined in its algorithm, even if they are immutable. The same rule applies for different instances. This is supportive of internal data sharing.

For example:
```jule
struct Fib {
    mut x: int = 0
    mut y: int = 1
}

impl Fib {
    fn Next(self): Fib {
        let f = self
        f.x, f.y = f.y, f.x + f.y
        ret f
    }
}

fn main() {
    let mut f = Fib{}
    f = f.Next()
    f = f.Next()
    f = f.Next()
    f = f.Next()
    f = f.Next()
}
```

In the example above, the `Next` method of the `Fib` structure defines the immutable `f` variable within itself. Subsequently, since it is within the scope of interior mutability, it can mutate the `x` and `y` fields.

### Mutability Encapsulation

In short, mutability encapsulation means hiding from mutability analysis and provide access to a structure field within the scope of interior immutability, regardless of whether it is mutable or immutable receiver.

In some cases, you may want to ensure mutability while preserving immutability. There may be various reasons for this, for example, you can provide the internal mutable buffer via an immutable copy. There may be a low-level intervention opportunity provided within the scope of unsafe in the interior of this structure.

Since the struct field is considered mutable due to interior mutability, you can benefit from mutability as you wish, including return statements.

For example:
```jule
struct Foo {
    mut buf: []byte
}

impl Foo {
    static fn New(): Foo {
        ret Foo{
            buf: make([]byte, 32)
        }
    }

    unsafe fn Buf(self): []byte {
        ret self.buf
    }
}

fn updateBuffer(mut buf: []byte) {
    // ...
}

fn main() {
    let f = Foo.New()
    let mut buf = unsafe { f.Buf() }
    updateBuffer(buf)
    // ...
}
```

In the example above, the `Foo` structure has a field called `buf` which is within the scope of interior mutability. Additionally, the `Foo` structure provides the unsafe `Buf` method to enable low-level access to the internal buffer.

Thus, for an algorithm that will only use the buffer for reading, there is no need to qualify the immutable `Foo` structure instance as mutable. Even with any immutable receiver this low level can be accessed and used for the relevant algorithms.

Mutability encapsulation can be effective for purposes such as preventing all copies from being considered mutable for reasons such as methods that require sharing internal data in structures designed to be useable with immutable copies.

::: warning
It is recommended that such functions be well documented.
:::

### Sharing Internal Data

One of the most important areas of use of interior mutability is sharing internal data between instances. Copies can copy mutable data that is within the scope of interior mutability. This means that a mutable data sharing is possible for each copy.

For example:
```jule
struct Foo {
    mut buf: []byte
}
```
The snippet above defines the structure `Foo` and the structure `buf` which is interior mutable.

Accordingly, let's evaluate the following snippet:
```jule
let foo = Foo{}
let foo2 = foo
```
The above code creates a new copy of `Foo` for the variable `foo2` using the `foo` variable. This copy is not a depp copy. In other words, the `buf` field will also be present in the new copy that will be created mutable. That is, the variables `foo` and `foo2` will use the same mutable buffer.

#### Rules of Sharing Mutable Data

Within the scope of interior mutability, sharing mutable data between copies can offer many opportunities. But remember that this happens within the some rules:
1. If the new copy is created in the methods of the structure that implements interior mutability, this copy is allowed under interior mutability no matter what.
2. If the field of ​​the structure within the scope of interior mutability is not an immutable type, that is, it does not pose a mutability risk, it does not prevent copying.
3. If the structure has an interior mutable field while copying and this field has a mutable type, it is considered to be at mutbility risk.
   - Your compiler won't complain if the 1. and 2. rules are met.
   - If the copy is made to an immutable memory, there is no risk.
   - If the copy is being created for mutable memory from immutable memory, there should be no access to that field. If the structure has an interior mutable field and there is access to this field within the scope of copying, after copying to a mutable memory, that copy may break the mutability by mutating the interior mutable field. This is not allowed.

Under the rule 3, the reason why areas within the scope of interior mutability are recommended to be private is more clear. If the field is public, developers may experience problems when creating new copies when accessing from external packages. Having the structure field private supports easier copies in external packages and easier data sharing.

If you want mutable data to be shared between copies and want to make this data available, keep the data private and share it through methods with [Mutability Encapsulation](#mutability-encapsulation).

## Channels

Whether a channel is mutable or immutable is not only related to whether the variable holding the channel is mutable or not. It also determines the mutability of the data that the channel will sent or deliver.

Regardless of whether a channel is immutable or mutable, it can send both immutable and mutable data. When data is received, if the channel is mutable, the data is received as mutable; if the channel is immutable, the data is received as immutable.

If the channel is immutable but the received data is intended to be assigned to mutable memory, types that do not carry mutability risks (such as basic arithmetic types) support this, while types that carry mutability risks (such as slices or smart pointers) can only be stored in immutable memory.

::: tip
If the variable storing the channel does not need to be mutable, and the channel will not send a mutable type or the sent data will not be used with mutability, it is recommended to store channel in an immutable variable.
:::