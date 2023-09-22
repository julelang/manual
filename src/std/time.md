# std::time

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

## Structures

```jule
struct AbsTime {
    day:      TimeData
    week_day: TimeData
    year_day: TimeData
    month:    TimeData
    year:     TimeData
    second:   TimeData
    minute:   TimeData
    hour:     TimeData
}
```
Abstract time.

**Methods:**

`fn unix(self): UnixTime`\
Returns abstract time as unix-time seconds.

---

```jule
struct Time
```
Timestamp.
If you are going to use this structure to process data of a time, you can obtain an 'AbsTime' instance by using the `abs()` method to be more efficient. Each function of this structure, such as `day` or `year`, uses an `abs()` call in the background. Back-to-back calls may cause you to make the same calculation over and over again.

**Methods:**

`static fn unix(sec: UnixTime): Time`\
Returns new time instance from unix-time.

`static fn now(): Time`\
Returns time instance of the moment.

`fn unix(self): UnixTime`\
Returns time as unix-time.

`fn day(self): TimeData`\
Returns day of month.

`fn month(self): TimeData`\
Returns month.

`fn year(self): TimeData`\
Returns year.

`fn second(self): TimeData`\
Returns second.

`fn minute(self): TimeData`\
Returns minute.

`fn hour(self): TimeData`\
Returns hour.

`fn abs(self): AbsTime`\
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

`static fn nanoseconds(d: DurInt): DurInt`\
Returns how many nanoseconds are in given nanoseconds.

`static fn microseconds(d: DurInt): DurInt`\
Returns how many nanoseconds are in given microseconds.

`static fn milliseconds(d: DurInt): DurInt`\
Returns how many nanoseconds are in given milliseconds.

`static fn seconds(d: DurInt): DurInt`\
Returns how many nanoseconds are in given seconds.

`static fn minutes(d: DurInt): DurInt`\
Returns how many nanoseconds are in given minutes.

`static fn hours(d: DurInt): DurInt`\
Returns how many nanoseconds are in given hours.
