# std::testing

## Structures

```jule
struct T
```
A test utility also used by the Jule runtime. It provides functionalities that facilitate the management and development of tests.

**Methods:**

`fn fail(self)`\
Fails test. Does not breaks scope execution.

`fn failed(self): bool`\
Reports whether test is failed.

`fn skip(self)`\
Skip test. Does not breaks scope execution.

`fn skipped(self): bool`\
Reports whether test is skipped.

`fn assert(self, expr: bool, message: str): bool`\
Set status of test as failure if expression is evaluated false at runtime.

`fn errorf(self, fmt: str, args: ...any)`\
Set status of test as failure and print message by formatting. Prints new-line after formatted text. Uses `std::fmt` internally.
