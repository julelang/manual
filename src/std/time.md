# std/time

## Type Aliases

```jule
type Duration: i64
```
A Duration represents the elapsed time between two instants as an i64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.

**Methods:**

`fn Nanoseconds(self): Duration`\
Returns duration as nanoseconds.

`fn Microseconds(self): Duration`\
Returns duration as microseconds.

`fn Milliseconds(self): Duration`\
Returns duration as milliseconds.

`fn Seconds(self): f64`\
Returns duration as floating-point seconds.

`fn Minutes(self): f64`\
Returns duration as floating-point minutes.

`fn Hours(self): f64`\
Returns duration as floating-point hours.

`fn Abs(self): Duration`\
Returns absolute value of duration.

`fn Str(self): str`\
Returns a string representing the duration in the form "72h3m0.5s". Leading zero units are omitted. As a special case, durations less than one second format use a smaller unit (milli-, micro-, or nanoseconds) to ensure that the leading digit is non-zero. The zero duration formats as 0s.

## Constants

```jule
const Nanosecond: Duration
```
A nanosecond.

---

```jule
const Microsecond: Duration
```
Nanoseconds in microsecond.
How many nanoseconds are in microsecond.

---

```jule
const Millisecond: Duration
```
Nanoseconds in millisecond.
How many nanoseconds are in millisecond.

---

```jule
const Second: Duration
```
Nanoseconds in second.
How many nanoseconds are in second.

---

```jule
const Minute: Duration
```
Nanoseconds in minute.
How many nanoseconds are in minute.

---

```jule
const Hour: Duration
```
Nanoseconds in hour.
How many nanoseconds are in hour.

## Functions

```jule
fn Sleep(mut dur: Duration)
```
Stops execution of the caller thread by stated duration. This function only affects execution of caller thread, not process.
If duration is <=0, function will return immediately. It guarantees sleeping at least for the stated duration.

---

```jule
fn Now(): Time
```
Returns the current system time with UTC local.

---

```jule
fn Unix(sec: i64, nsec: i64): Time
```
Returns new time by Unix time with nanoseconds. It is valid to pass nsec outside the range (0, 999999999). Not all sec values have a corresponding time value. One such value is 1<<63-1 (the largest i64 value).

---

```jule
fn UnixAbs(sec: i64): AbsTime
```
Returns new absolute time by Unix time without nanoseconds.

---

```jule
fn Date(year: int, month: int, day: int,
	hour: int, minute: int, second: int, nsecond: int): (t: Time)
```
Returns the Time corresponding to

  yyyy-mm-dd hh:mm:ss + nsec nanoseconds

in the appropriate zone for that time in the given location.

The month, day, hour, minute, second, and nsecond values may be outside their usual ranges and will be normalized during the conversion. For example, October 32 converts to November 1.


## Structures

```jule
struct AbsTime {
    Day:     int
    WeekDay: int
    YearDay: int
    Month:   int
    Year:    int
    Second:  int
    Minute:  int
    Hour:    int
}
```
Absolute time.

---

```jule
struct Time
```
A Time represents an instant in time with nanosecond precision.

Zero-value indicates the beginning of Unix time, i.e. zero seconds. This means the date January 1, 1970. Implementation can also handle the Unix time in the negative plane. For example, -10 seconds should be equivalent to Wed Dec 31 1969 23:59:50 UTC+0000.

**Methods:**

`fn Unix(self): i64`\
Returns time in Unix time.