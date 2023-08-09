# Wrappers for Integrated Jule

If you are not writing C++ code directly for Integrated Jule, but want to use existing C/C++ code instead, it is recommended to write a wrapper, even if the types are explicitly supported and compatible.

Here is the few reasons to recommend wrappers:
- You can add additional functionality to your wrapper with the Jule API.
- Having a fully compatible Jule wrapper from a single point makes it easy to make changes and new additions.
- You can debug more easily when any changes occur in the structure you are wrapping.
- You gain more control over the structure you wrap.

## Writing Wrappers for Existing Codes

A tutorial for wrapper development to prepare existing code for integrating into Jule. In this section, a tiny wrapper sample of STL `std::vector<T>` will be prepared to integrated Jule.

### Setup Environment

First of all, you need to provide the appropriate conditions in order to use the structure you wrote wrapper and to provide the experience. And for a basic start, most of the time you need to have an instance of the structure you are wrapping.

For example:
```cpp
#include "api/jule.hpp"
#include <vector>

template<typename T>
class Vector {
private:
    std::vector<T> buffer;

public:
    Vector<T>(void) {}
};

```

### Add Functionalities

Existing common functions or all functions that need to be added/planned must be defined by making them compatible with API types. For example `size` and `capacity` methods that STL vector has.

The identifiers of the wrapped definitions do not have to be the same as the identifiers of the corresponding definitions of the wrapped structure. But in most cases it is recommended to be the same.

For example:

```cpp
template<typename T>
class Vector {
private:
    std::vector<T> buffer;

public:
    Vector<T>(void) {}

    jule::Int size(void) const
    { return this->buffer.size(); }

    jule::Int capacity(void) const
    { return this->buffer.capacity(); }
};
```

### Adding new Functionalities

In addition to existing functionality, you can add new functionality for the wrapped structure. For example, adding elements to the wrapped STL vector with Jule's slice (`T[]`) type.

For example, we wrote an `append` method that does this and added it to our wrapper. Our wrapper would look like this:
```cpp
template<typename T>
class Vector {
private:
    std::vector<T> buffer;

public:
    Vector<T>(void) {}

    jule::Int size(void) const
    { return this->buffer.size(); }

    jule::Int capacity(void) const
    { return this->buffer.capacity(); }

    void append(const jule::Slice<T> &items) {
        for (const T &item: items)
            this->buffer.push_back(item);
    }
};
```

## Using Wrappers

You can integrate and use your wrappers by linking them to your Jule code according to the information described in the [interoperability](/cpp/interoperability/) section of manual.

Integrating the STL Vector wrapper described above with Jule would look like this:
```jule
cpp use "vector.hpp"

//jule:typedef
cpp struct Vector[T] {
    size:     fn(): int
    capacity: fn(): int
    append:   fn(items: []T)
}

fn main() {
    let mut vec = cpp.Vector[int]{}
    vec.append([1,2,3,4,5,6,7,8,9,10])
    outln(vec.size())
    outln(vec.capacity())
}
```
