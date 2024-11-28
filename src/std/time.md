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

---

```jule
type Month: int
```
Specifies a month of the year (January = 1, ...).

**Methods:**

`fn Str(self): str`\
Returns the English name of the month ("January", "February", ...).

---

```jule
type Weekday: int
```
Specifies a day of the week (Sunday = 0, ...).

**Methods:**

`fn Str(self): str`\
Returns the English name of the day ("Sunday", "Monday", ...).

## Globals

```jule
static UTC: &Location
```
Represents Universal Coordinated Time (UTC).

---

```jule
static Local: &Location
```
Represents the system's local time zone.\
On Unix systems, Local consults the TZ environment\
variable to find the time zone to use. No TZ means\
use the system default /etc/localtime.\
TZ="" means use UTC.\
TZ="foo" means use file foo in the system timezone directory.

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

---

```jule
const January: Month
```

---

```jule
const February: Month
```

---

```jule
const March: Month
```

---

```jule
const April: Month
```

---

```jule
const May: Month
```

---

```jule
const June: Month
```

---

```jule
const July: Month
```

---

```jule
const August: Month
```

---

```jule
const September: Month
```

---

```jule
const October: Month
```

---

```jule
const November: Month
```

---

```jule
const December: Month
```

---

```jule
const Sunday: Weekday
```

---

```jule
const Monday: Weekday
```

---

```jule
const Thuesday: Weekday
```

---

```jule
const Wednesday: Weekday
```

---

```jule
const Thursday: Weekday
```

---

```jule
const Friday: Weekday
```

---

```jule
const Saturday: Weekday
```

---

```jule
const Stamp: str
const StampMilli: str
const StampMicro: str
const StampNano: str
const DateTime: str
const DateOnly: str
const TimeOnly: str
```
Handy time stamps.

---

```jule
const Layout: str
const ANSIC: str
const UnixDate: str
const RubyDate: str
const RFC822: str
const RFC822Z: str
const RFC850: str
const RFC1123: str
const RFC1123Z: str
const RFC3339: str
const RFC3339Nano: str
const Kitchen: str
```
These are predefined layouts for use in \[Time.Format\] and \[time::Parse\]. The reference time used in these layouts is the specific time stamp:

	01/02 03:04:05PM '06 -0700

(January 2, 15:04:05, 2006, in time zone seven hours west of GMT). That value is recorded as the constant named \[Layout\], listed below. As a Unix time, this is 1136239445. Since MST is GMT-0700, the reference would be printed by the Unix date command as:

	Mon Jan 2 15:04:05 MST 2006

It is a regrettable historic error that the date uses the American convention of putting the numerical month before the day.

The example for Time.Format demonstrates the working of the layout string in detail and is a good reference.

Note that the \[RFC822\], \[RFC850\], and \[RFC1123\] formats should be applied only to local times. Applying them to UTC times will use "UTC" as the time zone abbreviation, while strictly speaking those RFCs require the use of "GMT" in that case. When using the \[RFC1123\] or \[RFC1123Z\] formats for parsing, note that these formats define a leading zero for the day-in-month portion, which is not strictly allowed by RFC 1123. This will result in an error when parsing date strings that occur in the first 9 days of a given month. In general \[RFC1123Z\] should be used instead of \[RFC1123\] for servers that insist on that format, and \[RFC3339\] should be preferred for new protocols. \[RFC3339\], \[RFC822\], \[RFC822Z], \[RFC1123\], and \[RFC1123Z\] are useful for formatting; when used with time::Parse they do not accept all the time formats permitted by the RFCs and they do accept time formats not formally defined. The \[RFC3339Nano\] format removes trailing zeros from the seconds field and thus may not sort correctly once formatted.

Most programs can use one of the defined constants as the layout passed to Format or Parse. The rest of this comment can be ignored unless you are creating a custom layout string.

To define your own format, write down what the reference time would look like formatted your way; see the values of constants like \[ANSIC\], \[StampMicro\] or \[Kitchen\] for examples. The model is to demonstrate what the reference time looks like so that the Format and Parse methods can apply the same transformation to a general time value.

Here is a summary of the components of a layout string. Each element shows by example the formatting of an element of the reference time. Only these values are recognized. Text in the layout string that is not recognized as part of the reference time is echoed verbatim during Format and expected to appear verbatim in the input to Parse.

	Year: "2006" "06"
	Month: "Jan" "January" "01" "1"
	Day of the week: "Mon" "Monday"
	Day of the month: "2" "_2" "02"
	Day of the year: "__2" "002"
	Hour: "15" "3" "03" (PM or AM)
	Minute: "4" "04"
	Second: "5" "05"
	AM/PM mark: "PM"

Numeric time zone offsets format as follows:

	"-0700"     ±hhmm
	"-07:00"    ±hh:mm
	"-07"       ±hh
	"-070000"   ±hhmmss
	"-07:00:00" ±hh:mm:ss

Replacing the sign in the format with a Z triggers the ISO 8601 behavior of printing Z instead of an offset for the UTC zone. Thus:

	"Z0700"      Z or ±hhmm
	"Z07:00"     Z or ±hh:mm
	"Z07"        Z or ±hh
	"Z070000"    Z or ±hhmmss
	"Z07:00:00"  Z or ±hh:mm:ss

Within the format string, the underscores in "_2" and "__2" represent spaces that may be replaced by digits if the following number has multiple digits, for compatibility with fixed-width Unix time formats. A leading zero represents a zero-padded value.

The formats __2 and 002 are space-padded and zero-padded three-character day of year; there is no unpadded day of year format.

A comma or decimal point followed by one or more zeros represents a fractional second, printed to the given number of decimal places. A comma or decimal point followed by one or more nines represents a fractional second, printed to the given number of decimal places, with trailing zeros removed. For example "15:04:05,000" or "15:04:05.000" formats or parses with millisecond precision.

Some valid layouts are invalid time values for time::Parse, due to formats such as _ for space padding and Z for zone information.

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
Returns the current system-time UTC.

---

```jule
fn Unix(sec: i64, nsec: i64): Time
```
Returns new time by Unix time with nanoseconds. Seconds since January 1, 1970 UTC. It is valid to pass nsec outside the range [0, 999999999]. Not all sec values have a corresponding time value. One such value is 1<<63-1 (the largest i64 value).

---

```jule
fn UnixAbs(sec: i64): AbsTime
```
Returns new absolute time by Unix time without nanoseconds. Seconds since January 1, 1970 UTC.

---

```jule
fn Date(year: int, month: Month, day: int, hour: int, minute: int, second: int, nsecond: int, loc: &Location): (t: Time)
```
Returns the Time corresponding to

  yyyy-mm-dd hh:mm:ss + nsec nanoseconds

in the appropriate zone for that time in the given location.

The month, day, hour, minute, second, and nsecond values may be outside their usual ranges and will be normalized during the conversion. For example, October 32 converts to November 1.

A daylight savings time transition skips or repeats times. For example, in the United States, March 13, 2011 2:15am never occurred, while November 6, 2011 1:15am occurred twice. In such cases, the choice of time zone, and therefore the time, is not well-defined. Date returns a time that is correct in one of the two zones involved in the transition, but it does not guarantee which.

---

```jule
fn LoadLocationFromTZData(name: str, mut data: []byte): (Location, ok: bool)
```
Returns a Location with the given name initialized from the IANA Time Zone database-formatted data. The data should be in the format of a standard IANA time zone file (for example, the content of /etc/localtime on Unix systems).

---

```jule
fn FixedZone(name: str, offset: int): &Location
```
Returns a \[Location\] that always uses the given zone name and offset (seconds east of UTC).

---

```jule
fn Parse(layout: str, value: str)!: Time
```
Parses a formatted string and returns the time value it represents. See the documentation for the constant called \[Layout\] to see how to represent the format. The second argument must be parseable using the format string (layout) provided as the first argument.

The example for \[Time.Format\] demonstrates the working of the layout string in detail and is a good reference.

When parsing (only), the input may contain a fractional second field immediately after the seconds field, even if the layout does not signify its presence. In that case either a comma or a decimal point followed by a maximal series of digits is parsed as a fractional second. Fractional seconds are truncated to nanosecond precision.

Elements omitted from the layout are assumed to be zero or, when zero is impossible, one, so parsing "3:04pm" returns the time corresponding to Jan 1, year 0, 15:04:00 UTC (note that because the year is 0, this time is before the zero Time). Years must be in the range 0000..9999. The day of the week is checked for syntax but it is otherwise ignored.

For layouts specifying the two-digit year 06, a value NN >= 69 will be treated as 19NN and a value NN < 69 will be treated as 20NN.

The remainder of this comment describes the handling of time zones.

In the absence of a time zone indicator, Parse returns a time in UTC.

When parsing a time with a zone offset like -0700, if the offset corresponds to a time zone used by the current location (\[Local\]), then Parse uses that location and zone in the returned time. Otherwise it records the time as being in a fabricated location with time fixed at the given zone offset.

When parsing a time with a zone abbreviation like MST, if the zone abbreviation has a defined offset in the current location, then that offset is used. The zone abbreviation "UTC" is recognized as UTC regardless of location. If the zone abbreviation is unknown, Parse records the time as being in a fabricated location with the given zone abbreviation and a zero offset. This choice means that such a time can be parsed and reformatted with the same layout losslessly, but the exact instant used in the representation will differ by the actual zone offset. To avoid such problems, prefer time layouts that use a numeric zone offset, or use \[ParseInLocation\].

---

```jule
fn ParseInLocation(layout: str, value: str, loc: &Location)!: Time
```
Like Parse but differs in two important ways. First, in the absence of time zone information, Parse interprets a time as UTC; ParseInLocation interprets the time as in the given location. Second, when given a zone offset or abbreviation, Parse tries to match it against the Local location; ParseInLocation uses the given location.

---

```jule
fn ParseDuration(mut s: str): (Duration, bool)
```
Parses a duration string and reports whether it successful. A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms", "-1.5h" or "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".

## Structures

```jule
struct AbsTime {
    Day:     int
    Weekday: Weekday
    YearDay: int
    Month:   Month
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

`fn UTC(self): Time`\
Returns time with the location set to UTC.

`fn Local(self): Time`\
Returns time with the location set to local time.

`fn Zone(self): (name: str, offset: int)`\
Computes the time zone in effect at time specification, returning the abbreviated name of the zone (such as "CET") and its offset in seconds east of UTC.

`fn Unix(self): i64`\
Returns time in Unix time.

`fn Date(self): (year: int, month: Month, day: int)`\
Returns the year, month, and day of the time.

`fn Clock(self): (hour: int, minute: int, second: int)`\
Returns the hour, minute, and second of the time.

`fn Year(self): int`\
Returns the year of the time.

`fn Month(self): Month`\
Returns the month of the year specified by the time.

`fn Day(self): int`\
Returns the day of the month specified by the time.

`fn Weekday(self): Weekday`\
Returns the day of the week specified by the time.

`fn Hour(self): int`\
Returns the hour within the day specified by the time, in the range [0, 23].

`fn Minute(self): int`\
Returns the minute offset within the hour specified by the time, in the range [0, 59].

`fn Second(self): int`\
Returns the second offset within the minute specified by the time, in the range [0, 59].

`fn Nanosecond(self): int`\
Returns the nanosecond offset within the second specified by the time, in the range [0, 999999999].

`fn ISO(self): (year: int, week: int)`\
Returns the ISO 8601 year and week number of the time. Week ranges from 1 to 53. Jan 01 to Jan 03 of year n might belong to week 52 or 53 of year n-1, and Dec 29 to Dec 31 might belong to week 1 of year n+1.

`fn AppendFormat(self, mut b: []byte, layout: str): []byte`\
Like \[Time.Format\] but appends the textual representation to b and returns the extended buffer.

`fn Format(self, layout: str): str`\
Returns a textual representation of the time value formatted according to the layout defined by the argument. See the documentation for the constant called \[Layout\] to see how to represent the layout format.

The executable example for \[Time.Format\] demonstrates the working of the layout string in detail and is a good reference.

`fn AppendText(self, mut b: []byte)!: []byte`\
Implements the custom text encoder method which is appends to b. The time is formatted in RFC 3339 format with sub-second precision. If the timestamp cannot be represented as valid RFC 3339 (e.g., the year is out of range), then throws exception with the ParseError.InvalidRange.

`fn EncodeText(self)!: []byte`\
Implements the custom text encoder method. matches that of calling the \[Time.AppendText\] method.

See \[Time.AppendText\] for more information.

`fn DecodeText(mut self, data: []byte)!`\
Implements the custom text decoder method. The time must be in the RFC 3339 format.

`fn Str(self): str`\
Returns the time formatted using the format string

"2006-01-02 15:04:05.999999999 -0700 MST"

---

```jule
struct Location
```
Maps time instants to the zone in use at that time. Typically, the Location represents the collection of time offsets in use in a geographical area. For many Locations the time offset varies depending on whether daylight savings time is in use at the time instant.

Location is used to provide a time zone in a printed Time value and for calculations involving intervals that may cross daylight savings time boundaries.

**Methods:**

`fn Str(self): str`\
Returns a descriptive name for the time zone information.

## Enums

```jule
enum ParseError
```

**Fields:**

- `BadField`: Bad value for field.
- `InvalidNumber`: Invalid number.
- `LeadingInt`: Bad [0-9]*
- `InvalıdRange`: Invalid range for month, hour, timezone offset or other elements.