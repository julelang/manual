# std::debug

## Functions

```jule
fn Out(v: any)
```
Equavalent of built-in out function. But removed from IR if production compilation is enabled.

---

```jule
fn Outln(v: any)
```
Equavalent of built-in outln function. But removed from IR if production compilation is enabled.

---

```jule
fn Call(f: fn())
```
Calls function immediately. Removed from IR if production compilation is enabled.