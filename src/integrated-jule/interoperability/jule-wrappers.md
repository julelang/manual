# Jule Wrappers

Jule wrappers are a recommended approach for linking C/C++ definitions. This approach has several advantages and disadvantages. In this section, these will be discussed.

**Jule wrappers are highly recommended when:**
- Unsimple usage: for example you binded a function but the arguments given when calling it are too much casting etc. requires
- Type dependency: You have definitions that depend on binded types
- High usage: The binded definition is used in various and many places in your Jule code

## Pros & Cons

**Pros:**

- Easy maintenance
- Safer
- Avoid the `cpp` keyword for access
- Use Jule types instead of binded types
- Additional functionality can be added

**Cons:**

- May add significantly to the code base
- Developing additional Jule Wrappers has a time cost
- Wider IR

## Developing Jule Wrappers

### Functions

It makes sense to write a function as a wrapper, especially if it has dependencies on binded definitions. Thanks to the Wrapper, it is easier to update or troubleshoot any type change than update each call.

An example C++ function:
```cpp
void sayHello(const char *name) {
    std::cout << "Hello, " << name << std::endl;
}
```

Our Jule code:
```jule
cpp type char: byte
cpp unsafe fn sayHello(name: *cpp.char)

fn sayHello(name: str) {
    unsafe { cpp.sayHello((*cpp.char)(&name[0])) }
}

fn main() {
    sayHello("Julenour")
}
```

There is a wrapper function for `sayHello` with the same name as shown in the example above. The difference between them is clearly visible. First, the wrapper is easier to access and readable. It takes Jule's `str` type as an argument and allows to get rid of the `unsafe` qualifier.

Wrapper Jule takes the `str` type and passes it to the function it wraps accordingly. Jule strings are in byte encoded UTF-8 format, so taking the pointer to the first byte gives you a simple byte pointer. They are the same as `char*` in size. For this reason, a correct and trouble-free usage is displayed by casting. In addition, we maintain type safety.

### Structures

Connecting structures can be a little more complicated. They contain fields and methods. Things can get even more complicated, especially if they depend on C/C++ types. But at this point, the wrapper is an important tool to provide an easier use.

Our C++ structure:
```cpp
struct Person {
    char *name;
    char *surname;
};

```

A simple `Person` struct definition is given above. Let's develop a wrapper for this struct while preserving type safety.

Our Jule code:
```jule
use integ "std/jule/integrated"

#typedef
cpp struct Person {
	name:    *integ::Char
	surname: *integ::Char
}

struct Person {
	mut buffer: cpp.Person
}

impl Person {
	fn new(name: str, surname: str): Person {
		ret Person{
			buffer: cpp.Person{
				name: unsafe { (*integ::Char)(&name[0]) },
				surname: unsafe { (*integ::Char)(&surname[0]) },
			},
		}
	}

	fn name(*self): str {
		ret unsafe { integ::BytePtrToStr((*byte)(self.buffer.name)) }
	}

	fn surname(*self): str {
		ret unsafe { integ::BytePtrToStr((*byte)(self.buffer.surname)) }
	}

	fn getFullName(*self): str {
		ret self.name() + " " + self.surname()
	}
}

fn main() {
	p := Person.new("Anonymous", "Julenour")
	println(p.getFullName())
}
```

The code looks long. That's because it's literally written as a clean wrapper. C/C++ types were preserved and manual algorithms were written for compatible conversions. In addition, it seems that the wrapper offers new capabilities with a method by adding the `getFullName` method. In addition, there are `name` and `surname` methods to obtain the `name` and `surname` fields of the wrapped structure.

You may not want to write such neat wrappers, though. In this context, it is also possible to benefit from the compatibility of API types as much as possible. For example, in our example case, we can make the code less dimensional by stretching the type safety by taking advantage of the implicit conversion compatibility of the `char*` type and Jule's `str` type.

In this case the wrapper Jule code would look like this:
```jule
#typedef
cpp struct Person {
	name:    str
	surname: str
}

struct Person {
	mut buffer: cpp.Person
}

impl Person {
	fn new(name: str, surname: str): Person {
		ret Person{
			buffer: cpp.Person{
				name: name,
				surname: surname,
			},
		}
	}

	fn name(*self): str { ret self.buffer.name }
	fn surname(*self): str { ret self.buffer.surname }

	fn getFullName(*self): str {
		ret self.name() + " " + self.surname()
	}
}

fn main() {
	p := Person.new("Anonymous", "Julenour")
	println(p.getFullName())
}
```

#### Methods

Methods can be attached to constructs by the methods described in the interoperability section. Likewise, they can be presented over the wrapper. You can either explicitly keep type safety or choose to advantage of implicit conversion support if it is available for parameters and return types of function.

Let's assume there is a `say_hi` method for the `Person` structure above:
```cpp
void say_hi(void) {
    std::cout << "Hi, I am " << this->name << std::endl; 
}
```

And this method is binded to the link of `Person` in Jule like this:
```jule
#typedef
cpp struct Person {
    name:    str
    surname: str
    say_hi:  fn()
}
```

In this context, the `Person` wrapper structure could have such a method to wrap relevant method:
```jule
fn sayHi(*self) {
    self.buffer.say_hi()
}
```