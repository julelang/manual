# std::math::rand
## Type Aliases
```jule
type Seed: u64
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
&ensp;&ensp;`ƒ(x) -> rand.Nextn(max - min) + min`

With this formula, randomness can be made in the `[min, max)` range.
</ul>

**Methods:**

`static fn New(seed: Seed): &Rand`\
Returns new PRNG for seed.

---

`fn Next63(self): i64`\
Returns a non-genative pseudo-random 63-bit signed integer as an 64-bit signed integer.

---

`fn Next31(self): i32`\
Returns a non-genative pseudo-random 31-bit signed integer as an 31-bit signed integer.

---

`fn Next(self): int`\
Returns a non-genative pseudo-random int.

---

`fn Nextn63(self, n: i64): i64`\
Returns a non-genative pseudo-random in `[0, n)` range 63-bit signed integer as an 64-bit signed integer. If `n <= 0`, it panics.

---

`fn Nextn31(self, n: i32): i32`\
Returns a non-genative pseudo-random in `[0, n)` range 31-bit signed integer as an 31-bit signed integer. If `n <= 0`, it panics.

---

`fn Nextn(self, n: int): int`\
Returns a non-genative pseudo-random in [0, n) range as int. If `n <= 0`, it panics.

---

`fn Fnext64(self): f64`\
Returns a non-genative pseudo-random in `[0.0, 1.0)` range as f64 floating-point.

---

`fn Fnext32(self): f32`\
Returns a non-genative pseudo-random in `[0.0, 1.0)` range as f32 floating-point.