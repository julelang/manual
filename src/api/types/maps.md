# Maps

The Jule maps are using `std::unordered_map` with custom hash algorithm which is FNV1 currently. The internal `std::unordered_map` buffer available via the `buffer` field of the `jule::Map`.

The using of `jule::Map` is too similar to using of `std::unordered_map`.

For example:

```cpp
jule::Map<jule::Int, jule::Str> map = {
    {0, "Hello"},
    {1, "World"},
    {2, "Foo"},
    {3, "Bar"},
};
map.del(2);
map.clear();
```

## Lookup

Jule has [lookup assignments](/common-concepts/maps#lookup-assignments) for lookup maps. In `jule::Map` type, the `lookup` method is equivalent for this.

For example:
```cpp
jule::Map<jule::Int, jule::Str> map = {
    {0, "Hello"},
    {1, "World"},
    {2, "Foo"},
    {3, "Bar"},
};
jule::Str value;
jule::Bool ok;
map.lookup(3, &value, &ok);
if (ok) {
    jule::outln(value);
}
```
