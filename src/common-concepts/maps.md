# Maps
Maps are hashmap. Maps a unique key value to a value. Key type always must met the key type constraint: comparable.
::: info
Map values ​​are not kept in the inserted order. Hence iterations etc. It's very likely that you don't get a sequential output in actions.
:::

Example to maps:
```jule
fn main() {
    let mut mymap: map[i8]str = {
        0: "CPU",
        1: "RAM",
        2: "GPU"
    }
    println(mymap)
}
```
The example above shows how a map is defined and its data-type representation. To describe a map, curly braces are opened after the data type. Each key-value pair is separated by a comma. Keys and values are separated by colons, the key comes first, then the value.
::: tip
In iterations, the first variable is the key and the second variable is the value.
:::

## Map Literals with Explicit Type

You can combine casting and map literals for explicit typed map literals.

For example:
```jule
x := (map[int]str)({
	0: "foo",
	1: "bar",
})
```

Also you can use instantiation literal directly.

For example:
```jule
x := map[int]str{
	0: "foo",
	1: "bar",
}
```

### Range Iterations

Maps can be used with range iteration. The first variable in the iteration is the key variable. This variable represents the key, while the second variable is the value currently pointed to in the iteration.

## Access to Elements and Indexing
To get the value of a key, it is sufficient to index it with the key.

For example:
```jule
mymap[1]
```
The example at above, gives `"RAM"` value.\
If you try to access a key that does not exist, it will return the default value.

---

To change the value of a key, it is sufficient to do a classic assignment by indexing the key.

For example:
```jule
mymap[1] = "SSD"
```

To add a key-value pair that doesn't exist, it's still just a classic assignment.

For example:
```jule
mymap[3] = "HDD"
```
If the key does not exist when you assign it, the key is generated and matched with the value you assigned. 

## Delete Keys

The built-in `delete` function deletes relevant key from map. Takes two argument, the first one is the map, second one is the key to delete.

For example:
```jule
fn main() {
    let mut myMap: map[int]str = {
        0: "Foo",
        1: "Bar",
        2: "FooBar"
    }
    delete(myMap, 2)
    println(len(m))
}
```
At the example above, the `delete` call will remove `2:"FooBar"` pair from the map.

---

If you want remove all keys without deallocating internal buffer memory, just give the map without key.

For example:
```jule
fn main() {
    let mut myMap: map[int]str = {
        0: "Foo",
        1: "Bar",
        2: "FooBar"
    }
    delete(myMap, 2)
    println(len(m))
}
```
At the example above, the `delete` call will remove all keys of the map without deallocating buffer. It is efficient way to clear map for make ready to reuse or something like that.

## Lookup Assignments

Lookup assignments are efficient way to lookup in hashmaps. They lookups for key, and assign value of key to relevant expression if found. The second assignment is report of whether key is found.

For example:
```jule
fn main() {
    let mut myMap: map[int]str = {
        0: "Foo",
        1: "Bar",
        2: "FooBar"
    }
    let (value, ok) = myMap[1]
    println(value)
    println(ok)
}
```
At the example above, variable `value` will assign to value of key if key found, leaving initialized with default value if not. The variable `ok` assign to `true` if key found, `false` if not.

::: info
The value variable always should be the exact same type with the map's value type.
:::