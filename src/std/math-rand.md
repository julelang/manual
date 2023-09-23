# std::math::rand
## Type Aliases
```jule
type Seed: uint
```
Integer type of random seeds.

## Structures

```jule
struct Rand
```
This structure implements a type of pseudo random number generator (PRNG). The seed must be given manually for each instance.

Seeds:
<ul>
Seed is a number of seeds used to simulate randomness. The order and numbers produced vary depending on the seed. Since PRNGs are inherently deterministic, using a fixed seed means your program will generate the same numbers every time.

If you want to achieve randomness somehow, use a variable seed. A simple solution for seeds that will create the illusion of randomness is to use time. Unix-time seconds could be a simple seed solution.
</ul>

Ranges:
<ul>
This structure by default provides a function to simulate randomness between two numbers. But a way to do this can be suggested.

Here is basic range formula: \
&ensp;&ensp;`ƒ(x) -> rand.nextn(max - min) + min`

With this formula, randomness can be made in the `[min, max)` range.
</ul>

**Methods:**

`static fn new(seed: Seed): &Rand`\
Returns new PRNG for seed.

---

`fn unext(mut self): uint`\
Returns pseudo random number in `[0, uint.MAX)` range.

---

`fn next(mut self): int`\
Returns pseudo random number in `[0, int.MAX)` range.

---

`fn nextn(mut self, n: int): int`\
Returns pseudo random number in `[0, n)` range.
Panics if `n < 0`.

---

`fn unextn(mut self, n: uint): uint`\
Returns pseudo random number in `[0, n)` range.
