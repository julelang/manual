# Using Reference Counting

Include reference counting header:
```cpp
#include "api/ref.hpp"
````

## Creating References

### Nil References

Recommended way:
```cpp
jule::Ptr<int> my_int = nullptr;
```

---

Using default constructor:
```cpp
jule::Ptr<int> my_int;
```

### Initialized References

Recommended way:
```cpp
jule::Ptr<int> my_int = jule::new_ptr<int>(900);
std::cout << *my_int << std::endl;
```

---

Create reference for custom allocation:
```cpp
int *my_alloc = new int;
*my_alloc = 200;
jule::Ptr<int> my_int = jule::Ptr<int>::make(my_alloc);
std::cout << *my_int << std::endl;
```

## Accessing Data

Change data via assignment:
```cpp
jule::Ptr<int> my_int = jule::new_ptr<int>(900);
std::cout << *my_int << std::endl;
*my_int += 1000; // my_int's data is now 1900
std::cout << *my_int << std::endl;
```

---

Get or set fields via `->` operator:
```cpp
struct Person {
    jule::Str name;
    jule::Str surname;
};

jule::Ptr<Person> p = jule::new_ptr<Person>(Person{
    .name="Anonymous",
    .surname="Julenour",
});
std::cout << p->name << " " << p->surname << std::endl;
p->name = "Unknown"; // Set name field to "Unknown"
std::cout << p->name << " " << p->surname << std::endl;
```
