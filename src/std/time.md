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

`fn Sleep(mut dur: Duration)`\
Stops execution of the caller thread by stated duration. This function only affects execution of caller thread, not process.
If duration is <=0, function will return immediately. It guarantees sleeping at least for the stated duration.

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