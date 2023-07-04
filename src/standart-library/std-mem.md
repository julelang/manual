# std::mem
## Functions
```
fn size_of(TYPE || EXPRESSION): uint
```
Returns the size of the type in bytes. If given expression, uses type of expression.

---

```
fn align_of(TYPE || EXPRESSION): uint
```
Returns the alignment, in bytes, required for any instance of the type indicated by type-id, which is either complete object type. If given expression, uses type of expression. 