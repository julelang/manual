# Maps

## Fields
`len: int`\
Length of key-value pairs.

## Methods
`fn clear(mut self)`\
Removes all key-value pairs. 

---

`fn has(key: KEY_TYPE): bool`\
Returns true if specified key value is exist in map, returns false if not.

---

`fn del(mut self, key: KEY_TYPE)`\
Deletes key if exist.

---

`fn keys(mut self): []KEY_TYPE`\
Returns keys of key-value pairs as slice.

---

`fn values(mut self): []VALUE_TYPE`\
Returns values of key-value pairs as slice. 