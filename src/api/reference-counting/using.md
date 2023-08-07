# Using Reference Counting

Include reference counting header:
```cpp
#include "api/ref.hpp"
````

## Creating References

### Nil References

Recommended way:
```cpp
jule::Ref<int> my_int = jule::new_ref<int>();
```

---

Using default constructor:
```cpp
jule::Ref<int> my_int;
```

### Real References

Recommended way:
```cpp
jule::Ref<int> my_int = jule::new_ref<int>(900);
std::cout << my_int << std::endl;
```

---

Create reference for custom allocation:
```cpp
int *my_alloc = new int;
*my_alloc = 200;
jule::Ref<int> my_int = jule::Ref<int>::make(my_alloc);
std::cout << my_int << std::endl;
```

## Accessing Data

Change data via assignment:
```cpp
jule::Ref<int> my_int = jule::new_ref<int>(900);
std::cout << my_int << std::endl;
my_int += 1000; // my_int's data is now 1900
std::cout << my_int << std::endl;
```

---

Get or change data via `get` method:

```cpp
jule::Ref<int> my_int = jule::new_ref<int>(900);
std::cout << my_int << std::endl;
my_int.get() += 1000; // my_int's data is now 1900
std::cout << my_int.get() << std::endl;
```

---

Get or set fields via `->` operator:
```cpp
struct Person {
    jule::Str name;
    jule::Str surname;
};

jule::Ref<Person> p = jule::new_ref<Person>(Person{
    .name="Anonymous",
    .surname="Julenour",
});
std::cout << p->name << " " << p->surname << std::endl;
p->name = "Unknown"; // Set name field to "Unkown"
std::cout << p->name << " " << p->surname << std::endl;
```
