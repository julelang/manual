# std/html

## Functions

```jule
fn EscapeStr(s: str): str
```
Escapes special characters like "<" to become "\&lt;". It escapes only five such characters: <, >, &, ' and ". UnescapeStr(EscapeStr(s)) == s always holds, but the converse isn't always true.

---

```jule
fn UnescapeStr(s: str): str
```
Unescapes entities like "\&lt;" to become "<". It unescapes a larger range of entities than EscapeStr escapes. For example, "\&aacute;" unescapes to "á", as does "\&#225;" and "\&#xE1;". UnescapeStr(EscapeStr(s)) == s always holds, but the converse isn't always true.