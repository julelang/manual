# Maps
Maps is a hashmap. Maps a unique key value to a value.
::: tip
Map values ​​are not kept in the inserted order. Hence iterations etc. It's very likely that you don't get a sequential output in actions.
:::

Example to maps:
```
fn main() {
    let mut mymap: [i8:str] = {
        0: "CPU",
        1: "RAM",
        2: "GPU"
    }
    outln(mymap)
}
```
The example above shows how a map is defined and its data-type representation. To describe a map, curly braces are opened after the data type. Each key-value pair is separated by a comma. Keys and values are separated by colons, the key comes first, then the value.
::: tip
In iterations, the first variable is the key and the second variable is the value.
:::

## Access to Elements and Indexing
To get the value of a key, it is sufficient to index it with the key.

For example:
```
mymap[1]
```
The example at above, gives `"RAM"` value.\
If you try to access a key that does not exist, it will return the default value.

---

To change the value of a key, it is sufficient to do a classic assignment by indexing the key.

For example:
```
mymap[1] = "SSD"
```

To add a key-value pair that doesn't exist, it's still just a classic assignment.

For example:
```
mymap[3] = "HDD"
```
If the key does not exist when you assign it, the key is generated and matched with the value you assigned. 