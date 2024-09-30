# std/time

## Type Aliases

```jule
type UnixTime: u64
```
Type of unix-time seconds.

---

```jule
type TimeData: uint
```
Type of abstract time data.

---

```jule
type DurInt: i64
```
Integer type of durations.

## Functions

`fn Sleep(mut dur: DurInt)`\
Stops execution of caller thread by absolute duration. This function only affects execution of caller thread, not process.

## Structures

```jule
struct AbsTime {
    Day:     TimeData
    WeekDay: TimeData
    YearDay: TimeData
    Month:   TimeData
    Year:    TimeData
    Second:  TimeData
    Minute:  TimeData
    Hour:    TimeData
}
```
Abstract time.

**Methods:**

`fn Unix(self): UnixTime`\
Returns abstract time as unix-time seconds.

---

```jule
struct Time
```
Timestamp.
If you are going to use this structure to process data of a time, you can obtain an 'AbsTime' instance by using the `Abs()` method to be more efficient. Each function of this structure, such as `day` or `year`, uses an `Abs()` call in the background. Back-to-back calls may cause you to make the same calculation over and over again.

**Methods:**

`static fn Unix(sec: UnixTime): Time`\
Returns new time instance from unix-time.

`static fn Now(): Time`\
Returns time instance of the moment.

`fn Unix(self): UnixTime`\
Returns time as unix-time.

`fn Day(self): TimeData`\
Returns day of month.

`fn Month(self): TimeData`\
Returns month.

`fn Year(self): TimeData`\
Returns year.

`fn Second(self): TimeData`\
Returns second.

`fn Minute(self): TimeData`\
Returns minute.

`fn Hour(self): TimeData`\
Returns hour.

`fn Abs(self): AbsTime`\
Returns time as abstract time.

---

```jule
struct Duration
```
Duration is the time between two times.

**Static Fields:**

`const Nanosecond: DurInt`\
A nanosecond.

`const Microsecond: DurInt`\
Nanoseconds in microsecond.
How many nanoseconds are in microsecond.

`const Millisecond: DurInt`\
Nanoseconds in millisecond.
How many nanoseconds are in millisecond.

`const Second: DurInt`\
Nanoseconds in second.
How many nanoseconds are in second.

`const Minute: DurInt`\
Nanoseconds in minute.
How many nanoseconds are in minute.

`const Hour: DurInt`\
Nanoseconds in hour.
How many nanoseconds are in hour.

**Methods:**

`static fn Nanoseconds(d: DurInt): DurInt`\
Returns duration as nanoseconds.

`static fn Microseconds(d: DurInt): DurInt`\
Returns duration as microseconds.

`static fn Milliseconds(d: DurInt): DurInt`\
Returns duration as milliseconds.

`static fn Seconds(d: DurInt): f64`\
Returns duration as floating-point seconds.

`static fn Minutes(d: DurInt): f64`\
Returns duration as floating-point minutes.

`static fn Hours(d: DurInt): f64`\
Returns duration as floating-point hours.

`static fn Abs(d: DurInt): DurInt`\
Returns absolute value of duration.

`static fn Str(d: DurInt): str`\
Returns a string representing the duration in the form `72h3m0.5s`. Leading zero units are omitted. As a special case, durations less than one second format use a smaller unit (milli-, micro-, or nanoseconds) to ensure that the leading digit is non-zero. The zero duration formats as 0s.
