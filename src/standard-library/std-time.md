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
