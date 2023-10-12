# Mutability

Mutability is the opposite of immutability. Mutable memory areas are allowed to be changed. It must be specified that a identified memory area is mutable, otherwise every identified memory area is considered immutable. Mutability for an identified field is achieved using the `mut` keyword.

## Mutable Variables
Let's learn to say how we want a variable that is immutable by default to be mutable. The keyword `mut` is used for this. Before defining a variable, declare it mutable with this keyword. Then you will have a mutable variable.

But before that, let's make a deliberate mistake to better understand immutability:
```jule
fn main() {
    let x = 20
    x++
    outln(x)
}
```
The example above is absolutely wrong. Because the variable `x` we have is an immutable variable. And the `x++` statement definitely breaks immutability. In this case, compiler will give error. Now let's repeat the same example using a mutable variable. 
```jule
fn main() {
    let mut x = 20
    x++
    outln(x)
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
    outln(x.slc[0])
    outln(y.slc[0])
}
```
This structure is a mutable structure because it has a field with a mutable type. The slice that the structure contains is mutable when the structure is copied, and if the main structure is immutable, it risks this immutability of the structure. This is because the mutable copy points to the same address and the changes will affect the other copy.

The variable `x` in the example shows the case of keeping the mutable structure in an immutable variable. Then the `x` variable is copied and assigned to the mutable `y` variable, but this is a risky and unsafe operation as explained.

You can derive `Clone` to solve this problem.

For example:
```jule
#derive Clone
struct Wrapper {
    slc: []int
}

fn main() {
    let x = Wrapper{slc: [1,2,3]}
    let mut y = clone(x)
    y.slc[0] = 89
    outln(x.slc[0])
    outln(y.slc[0])
}
```
See [deriving](/compiler/deriving) page for more information about `Clone` derive.

## Interior Mutability
When an instance of a struct is immutable, you cannot use it with mutable methods because this compromises its immutability guarantee. However, you may still need to change the fields of an immutable structure. For this you need to use interior mutability. Since you cannot call a mutable method, your method will remain immutable, but thanks to interior mutability, you will be able to obtain the fields you want as mutable.

It is recommended that fields within interior mutability not be public, although the compiler leaves this to the discretion of the developer. Because when interior mutability fields vary in an immutable instance, the developer using this immutable copy may encounter a change even though he or she does not expect a change on the copy. Therefore, if fields within interior mutability need to be accessible, it is recommended to use wrapper methods.

Now let's take a look at how interior mutability is achieved. Actually, this is a pretty simple. If you are a developer who has used C++ before, you may be familiar with the mutable keyword in this regard. Similarly, Jule uses the already existing keyword mut for mutability. For interior mutability, the relevant field must be declared with the mut keyword. This means that field can exhibit interior mutability.

For example:
```jule
struct MyStruct {
    mut x: int
    y: int
}
```
In this example, the mutability of the `y` field is fully responsive. However, the variable `x` exhibits interior mutability. That's why it can be changed in methods without the need for `mut self` receiver parameter.

The point that should not be forgotten in this regard is that even if there is interior mutability, this field cannot be changed from outside the structure with an immutable instance. Interior mutability only applies inside the structure itself. 

### Traits

If there is a mutable `sel`f receiver in the trait's methods, it cannot be used mutably when the trait is immutable. The reason for this is clearly due to the risk of calling a mutable method of the structure it contains.

If a trait contains a mutable structure and you get it by casting, this is not considered a problem even if it is an immutable trait. The structure stored by the trait is within the scope of interior mutability for the trait. So, when you obtain that structure, you can take it as mutable and this will not cause any problems.

Trait ensures that only the methods it provides directly are used according to the immutability rule.

For example:
```jule
const PI = 3.14159

trait Shape {
    fn area(self): f64
}

struct Circle {
    r: f64
}

impl Shape for Circle {
    fn area(self): f64 {
        ret PI * self.r * self.r
    }
}

fn main() {
    let s: Shape = &Circle{r: 12}
    outln(s.area())
    (&Circle)(s).r = 20
    outln(s.area())
}
```

In the example above, an immutable trait contains a mutable type `&Circle`. We can get this by casting and change the result of the `area` method by changing the `r` field. This is because the `&Circle` instance it stores has interior mutability.

## Cloning
You may need to have deep copies for various reasons (for example assigning mutable struct in immutable variable to mutable variable). You can use the built-in `clone` function to do this. The `clone` function only supports some data types as input. To find out about them, you can refer to the [relevant documents](/std/builtin).

Cloning supported types and copy methods:
- Numeric Types\
  Returns copy of value.

- `str`\
  Returns copy of value.

- `bool`\
  Returns copy of value.

- `[]T`\
  Clones slice with elements.\
  Returns new independent mutable slice.

- `[...]T`\
  Clones array with elements.\
  Returns new independent mutable array.

- `[K:V]`\
  Clones map's keys and values.\
  Returns new independent mutable map.
  
- `&T`\
  Clones reference and type.\
  Returns new independent reference clone of expression.

- `*T`\
  Pointers are part of the Unsafe Jule.\
  Always has risk of breaking immutability.\
  The clone function just returns copy of pointer as mutable.

- `jule:derive Clone`\
  Clones struct if derives `Clone`.\
  Returns new independent mutable struct. 

### Cloning Cycles
Clone cycles are a kind of illegal cycle. In cases where you risk an endless cloning cycle at runtime, the compiler will give you an illegal cycle error. Cloning cycles usually occur in nested types, in which it will try to clone itself forever, which somehow attaches to itself.

For example:
```jule
#derive Clone
struct A {
    b: []B
}

#derive Clone
struct B {
    a: []A
}
```
The `A` struct and `B` struct in the example above have fields that reference each other. They both derive `Clone`. But this poses a risk at runtime. Because if you try to clone struct `A` and it points to a struct `B` pointing to itself, an endless cycle of cloning occurs. This is clearly a runtime risk. Therefore the compiler will not compile your code.
