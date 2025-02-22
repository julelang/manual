# std/time

## Index

[Variables](#variables)\
[fn Now\(\): Time](#now)\
[fn Unix\(mut sec: i64, mut nsec: i64\): Time](#unix)\
[fn Since\(t: Time\): Duration](#since)\
[fn Until\(t: Time\): Duration](#until)\
[fn UnixAbs\(sec: i64\): AbsTime](#unixabs)\
[fn Date\(year: int, month: Month, day: int, hour: int, minute: int, second: int, nsecond: int, loc: &amp;Location\): \(t: Time\)](#date)\
[fn LoadLocationFromTZData\(name: str, mut data: \[\]byte\): \(&amp;Location, ok: bool\)](#loadlocationfromtzdata)\
[fn Sleep\(mut dur: Duration\)](#sleep)\
[fn FixedZone\(name: str, offset: int\): &amp;Location](#fixedzone)\
[fn Parse\(layout: str, value: str\)\!: Time](#parse)\
[fn ParseInLocation\(layout: str, value: str, loc: &amp;Location\)\!: Time](#parseinlocation)\
[fn ParseDuration\(mut s: str\): \(Duration, bool\)](#parseduration)\
[type Month](#month)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str)\
[type Weekday](#weekday)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-1)\
[struct Time](#time)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Unix\(self\): i64](#unix-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UTC\(self\): Time](#utc)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Local\(self\): Time](#local)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zone\(self\): \(name: str, offset: int\)](#zone)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Year\(self\): int](#year)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Month\(self\): Month](#month-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Day\(self\): int](#day)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Weekday\(self\): Weekday](#weekday-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Hour\(self\): int](#hour)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Second\(self\): int](#second)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Minute\(self\): int](#minute)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Nanosecond\(self\): int](#nanosecond)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Date\(self\): \(year: int, month: Month, day: int\)](#date-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Clock\(self\): \(hour: int, minute: int, second: int\)](#clock)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ISO\(self\): \(year: int, week: int\)](#iso)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(self, d: Duration\): Time](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(self, u: Time\): Duration](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn After\(self, u: Time\): bool](#after)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Before\(self, u: Time\): bool](#before)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Compare\(self, u: Time\): int](#compare)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(self, u: Time\): bool](#equal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendText\(self, mut b: \[\]byte\)\!: \[\]byte](#appendtext)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn EncodeText\(self\)\!: \[\]byte](#encodetext)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DecodeText\(mut self, data: \[\]byte\)\!](#decodetext)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendFormat\(self, mut b: \[\]byte, layout: str\): \[\]byte](#appendformat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Format\(self, layout: str\): str](#format)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-2)\
[struct AbsTime](#abstime)\
[type Duration](#duration)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Nanoseconds\(self\): Duration](#nanoseconds)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Microseconds\(self\): Duration](#microseconds)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Milliseconds\(self\): Duration](#milliseconds)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Seconds\(self\): f64](#seconds)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Minutes\(self\): f64](#minutes)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Hours\(self\): f64](#hours)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs\(self\): Duration](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-3)\
[struct Location](#location)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-4)\
[struct ParseError](#parseerror)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(self\): str](#str-5)

## Variables

```jule
const January = Month(1)
const February = Month(2)
const March = Month(3)
const April = Month(4)
const May = Month(5)
const June = Month(6)
const July = Month(7)
const August = Month(8)
const September = Month(9)
const October = Month(10)
const November = Month(11)
const December = Month(12)
```


---

```jule
const Sunday = Weekday(0)
const Monday = Weekday(1)
const Tuesday = Weekday(2)
const Wednesday = Weekday(3)
const Thursday = Weekday(4)
const Friday = Weekday(5)
const Saturday = Weekday(6)
```


---

```jule
const Nanosecond = Duration(runtime::_Nanosecond)
```
A nanosecond\.

---

```jule
const Microsecond = Duration(runtime::_Microsecond)
```
Nanoseconds in microsecond\. How many nanoseconds are in microsecond\.

---

```jule
const Millisecond = Duration(runtime::_Millisecond)
```
Nanoseconds in millisecond\. How many nanoseconds are in millisecond\.

---

```jule
const Second = Duration(runtime::_Second)
```
Nanoseconds in second\. How many nanoseconds are in second\.

---

```jule
const Minute = Duration(runtime::_Minute)
```
Nanoseconds in minute\. How many nanoseconds are in minute\.

---

```jule
const Hour = Duration(runtime::_Hour)
```
Nanoseconds in hour\. How many nanoseconds are in hour\.

---

```jule
static UTC = unsafe { (&Location)(&utcLoc) }
```
Represents Universal Coordinated Time \(UTC\)\.

---

```jule
static Local = unsafe { (&Location)(&localLoc) }
```
Represents the system&#39;s local time zone\. On Unix systems, Local consults the TZ environment variable to find the time zone to use\. No TZ means use the system default /etc/localtime\. TZ=&#34;&#34; means use UTC\. TZ=&#34;foo&#34; means use file foo in the system timezone directory\.

---

```jule
const Layout = "01/02 03:04:05PM '06 -0700" // The reference time, in numerical order.
const ANSIC = "Mon Jan _2 15:04:05 2006"
const UnixDate = "Mon Jan _2 15:04:05 MST 2006"
const RubyDate = "Mon Jan 02 15:04:05 -0700 2006"
const RFC822 = "02 Jan 06 15:04 MST"
const RFC822Z = "02 Jan 06 15:04 -0700" // RFC822 with numeric zone
const RFC850 = "Monday, 02-Jan-06 15:04:05 MST"
const RFC1123 = "Mon, 02 Jan 2006 15:04:05 MST"
const RFC1123Z = "Mon, 02 Jan 2006 15:04:05 -0700" // RFC1123 with numeric zone
const RFC3339 = "2006-01-02T15:04:05Z07:00"
const RFC3339Nano = "2006-01-02T15:04:05.999999999Z07:00"
const Kitchen = "3:04PM"
```
These are predefined layouts for use in \[Time\.Format\] and \[time::Parse\]\. The reference time used in these layouts is the specific time stamp:

```
01/02 03:04:05PM '06 -0700
```
\(January 2, 15:04:05, 2006, in time zone seven hours west of GMT\)\. That value is recorded as the constant named \[Layout\], listed below\. As a Unix time, this is 1136239445\. Since MST is GMT\-0700, the reference would be printed by the Unix date command as:

```
Mon Jan 2 15:04:05 MST 2006
```
It is a regrettable historic error that the date uses the American convention of putting the numerical month before the day\.

The example for Time\.Format demonstrates the working of the layout string in detail and is a good reference\.

Note that the \[RFC822\], \[RFC850\], and \[RFC1123\] formats should be applied only to local times\. Applying them to UTC times will use &#34;UTC&#34; as the time zone abbreviation, while strictly speaking those RFCs require the use of &#34;GMT&#34; in that case\. When using the \[RFC1123\] or \[RFC1123Z\] formats for parsing, note that these formats define a leading zero for the day\-in\-month portion, which is not strictly allowed by RFC 1123\. This will result in an error when parsing date strings that occur in the first 9 days of a given month\. In general \[RFC1123Z\] should be used instead of \[RFC1123\] for servers that insist on that format, and \[RFC3339\] should be preferred for new protocols\. \[RFC3339\], \[RFC822\], \[RFC822Z\], \[RFC1123\], and \[RFC1123Z\] are useful for formatting; when used with time::Parse they do not accept all the time formats permitted by the RFCs and they do accept time formats not formally defined\. The \[RFC3339Nano\] format removes trailing zeros from the seconds field and thus may not sort correctly once formatted\.

Most programs can use one of the defined constants as the layout passed to Format or Parse\. The rest of this comment can be ignored unless you are creating a custom layout string\.

To define your own format, write down what the reference time would look like formatted your way; see the values of constants like \[ANSIC\], \[StampMicro\] or \[Kitchen\] for examples\. The model is to demonstrate what the reference time looks like so that the Format and Parse methods can apply the same transformation to a general time value\.

Here is a summary of the components of a layout string\. Each element shows by example the formatting of an element of the reference time\. Only these values are recognized\. Text in the layout string that is not recognized as part of the reference time is echoed verbatim during Format and expected to appear verbatim in the input to Parse\.

```
Year: "2006" "06"
Month: "Jan" "January" "01" "1"
Day of the week: "Mon" "Monday"
Day of the month: "2" "_2" "02"
Day of the year: "__2" "002"
Hour: "15" "3" "03" (PM or AM)
Minute: "4" "04"
Second: "5" "05"
AM/PM mark: "PM"
```
Numeric time zone offsets format as follows:

```
"-0700"     ±hhmm
"-07:00"    ±hh:mm
"-07"       ±hh
"-070000"   ±hhmmss
"-07:00:00" ±hh:mm:ss
```
Replacing the sign in the format with a Z triggers the ISO 8601 behavior of printing Z instead of an offset for the UTC zone\. Thus:

```
"Z0700"      Z or ±hhmm
"Z07:00"     Z or ±hh:mm
"Z07"        Z or ±hh
"Z070000"    Z or ±hhmmss
"Z07:00:00"  Z or ±hh:mm:ss
```
Within the format string, the underscores in &#34;\_2&#34; and &#34;\_\_2&#34; represent spaces that may be replaced by digits if the following number has multiple digits, for compatibility with fixed\-width Unix time formats\. A leading zero represents a zero\-padded value\.

The formats \_\_2 and 002 are space\-padded and zero\-padded three\-character day of year; there is no unpadded day of year format\.

A comma or decimal point followed by one or more zeros represents a fractional second, printed to the given number of decimal places\. A comma or decimal point followed by one or more nines represents a fractional second, printed to the given number of decimal places, with trailing zeros removed\. For example &#34;15:04:05,000&#34; or &#34;15:04:05\.000&#34; formats or parses with millisecond precision\.

Some valid layouts are invalid time values for time::Parse, due to formats such as \_ for space padding and Z for zone information\.

---

```jule
const Stamp = "Jan _2 15:04:05"
const StampMilli = "Jan _2 15:04:05.000"
const StampMicro = "Jan _2 15:04:05.000000"
const StampNano = "Jan _2 15:04:05.000000000"
const DateTime = "2006-01-02 15:04:05"
const DateOnly = "2006-01-02"
const TimeOnly = "15:04:05"
```
Handy time stamps\.

## Now
```jule
fn Now(): Time
```
Returns the current system\-time UTC\.

## Unix
```jule
fn Unix(mut sec: i64, mut nsec: i64): Time
```
Returns new time by Unix time with nanoseconds\. Seconds since January 1, 1970 UTC\. It is valid to pass nsec outside the range \[0, 999999999\]\. Not all sec values have a corresponding time value\. One such value is 1&lt;&lt;63\-1 \(the largest i64 value\)\.

## Since
```jule
fn Since(t: Time): Duration
```
Returns the time elapsed since t\. It is shorthand for time::Now\(\)\.Sub\(t\)\.

## Until
```jule
fn Until(t: Time): Duration
```
Returns the duration until t\. It is shorthand for t\.Sub\(time::Now\(\)\)\.

## UnixAbs
```jule
fn UnixAbs(sec: i64): AbsTime
```
Returns new absolute time by Unix time without nanoseconds\. Seconds since January 1, 1970 UTC\.

## Date
```jule
fn Date(year: int, month: Month, day: int,
	hour: int, minute: int, second: int, nsecond: int, loc: &Location): (t: Time)
```
Returns the Time corresponding to

```
yyyy-mm-dd hh:mm:ss + nsec nanoseconds
```
in the appropriate zone for that time in the given location\.

The month, day, hour, minute, second, and nsecond values may be outside their usual ranges and will be normalized during the conversion\. For example, October 32 converts to November 1\.

A daylight savings time transition skips or repeats times\. For example, in the United States, March 13, 2011 2:15am never occurred, while November 6, 2011 1:15am occurred twice\. In such cases, the choice of time zone, and therefore the time, is not well\-defined\. Date returns a time that is correct in one of the two zones involved in the transition, but it does not guarantee which\.

## LoadLocationFromTZData
```jule
fn LoadLocationFromTZData(name: str, mut data: []byte): (&Location, ok: bool)
```
Returns a Location with the given name initialized from the IANA Time Zone database\-formatted data\. The data should be in the format of a standard IANA time zone file \(for example, the content of /etc/localtime on Unix systems\)\.

## Sleep
```jule
fn Sleep(mut dur: Duration)
```
Stops execution of the caller thread by stated duration\. This function only affects execution of caller thread, not process\. If duration is &lt;=0, function will return immediately\. It guarantees sleeping at least for the stated duration\.

## FixedZone
```jule
fn FixedZone(name: str, offset: int): &Location
```
Returns a \[Location\] that always uses the given zone name and offset \(seconds east of UTC\)\.

## Parse
```jule
fn Parse(layout: str, value: str)!: Time
```
Parses a formatted string and returns the time value it represents\. See the documentation for the constant called \[Layout\] to see how to represent the format\. The second argument must be parseable using the format string \(layout\) provided as the first argument\.

The example for \[Time\.Format\] demonstrates the working of the layout string in detail and is a good reference\.

When parsing \(only\), the input may contain a fractional second field immediately after the seconds field, even if the layout does not signify its presence\. In that case either a comma or a decimal point followed by a maximal series of digits is parsed as a fractional second\. Fractional seconds are truncated to nanosecond precision\.

Elements omitted from the layout are assumed to be zero or, when zero is impossible, one, so parsing &#34;3:04pm&#34; returns the time corresponding to Jan 1, year 0, 15:04:00 UTC \(note that because the year is 0, this time is before the zero Time\)\. Years must be in the range 0000\.\.9999\. The day of the week is checked for syntax but it is otherwise ignored\.

For layouts specifying the two\-digit year 06, a value NN &gt;= 69 will be treated as 19NN and a value NN &lt; 69 will be treated as 20NN\.

The remainder of this comment describes the handling of time zones\.

In the absence of a time zone indicator, Parse returns a time in UTC\.

When parsing a time with a zone offset like \-0700, if the offset corresponds to a time zone used by the current location \(\[Local\]\), then Parse uses that location and zone in the returned time\. Otherwise it records the time as being in a fabricated location with time fixed at the given zone offset\.

When parsing a time with a zone abbreviation like MST, if the zone abbreviation has a defined offset in the current location, then that offset is used\. The zone abbreviation &#34;UTC&#34; is recognized as UTC regardless of location\. If the zone abbreviation is unknown, Parse records the time as being in a fabricated location with the given zone abbreviation and a zero offset\. This choice means that such a time can be parsed and reformatted with the same layout losslessly, but the exact instant used in the representation will differ by the actual zone offset\. To avoid such problems, prefer time layouts that use a numeric zone offset, or use \[ParseInLocation\]\.

## ParseInLocation
```jule
fn ParseInLocation(layout: str, value: str, loc: &Location)!: Time
```
Like Parse but differs in two important ways\. First, in the absence of time zone information, Parse interprets a time as UTC; ParseInLocation interprets the time as in the given location\. Second, when given a zone offset or abbreviation, Parse tries to match it against the Local location; ParseInLocation uses the given location\.

## ParseDuration
```jule
fn ParseDuration(mut s: str): (Duration, bool)
```
Parses a duration string and reports whether it successful\. A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as &#34;300ms&#34;, &#34;\-1\.5h&#34; or &#34;2h45m&#34;\. Valid time units are &#34;ns&#34;, &#34;us&#34; \(or &#34;µs&#34;\), &#34;ms&#34;, &#34;s&#34;, &#34;m&#34;, &#34;h&#34;\.

## Month
```jule
type Month: int
```
Specifies a month of the year \(January = 1, \.\.\.\)\.

### Str
```jule
fn Str(self): str
```
Returns the English name of the month \(&#34;January&#34;, &#34;February&#34;, \.\.\.\)\.

## Weekday
```jule
type Weekday: int
```
Specifies a day of the week \(Sunday = 0, \.\.\.\)\.

### Str
```jule
fn Str(self): str
```
Returns the English name of the day \(&#34;Sunday&#34;, &#34;Monday&#34;, \.\.\.\)\.

## Time
```jule
struct Time {
	// NOTE: contains filtered hidden or unexported fields
}
```
A Time represents an instant in time with nanosecond precision\.

Zero\-value indicates the beginning of Unix time, i\.e\. zero seconds\. This means the date January 1, 1970\. Implementation can also handle the Unix time in the negative plane\. For example, \-10 seconds should be equivalent to Wed Dec 31 1969 23:59:50 UTC\+0000\.

Using the == operator when comparing a Time instance is often not what is desired\. Because this compares not only the time, but also things like the memory address of the location data\.

### Unix
```jule
fn Unix(self): i64
```
Returns time in Unix time\.

### UTC
```jule
fn UTC(self): Time
```
Returns time with the location set to UTC\.

### Local
```jule
fn Local(self): Time
```
Returns time with the location set to local time\.

### Zone
```jule
fn Zone(self): (name: str, offset: int)
```
Computes the time zone in effect at time specification, returning the abbreviated name of the zone \(such as &#34;CET&#34;\) and its offset in seconds east of UTC\.

### Year
```jule
fn Year(self): int
```
Returns the year of the time\.

### Month
```jule
fn Month(self): Month
```
Returns the month of the year specified by the time\.

### Day
```jule
fn Day(self): int
```
Returns the day of the month specified by the time\.

### Weekday
```jule
fn Weekday(self): Weekday
```
Returns the day of the week specified by the time\.

### Hour
```jule
fn Hour(self): int
```
Returns the hour within the day specified by the time, in the range \[0, 23\]\.

### Second
```jule
fn Second(self): int
```
Returns the second offset within the minute specified by the time, in the range \[0, 59\]\.

### Minute
```jule
fn Minute(self): int
```
Returns the minute offset within the hour specified by the time, in the range \[0, 59\]\.

### Nanosecond
```jule
fn Nanosecond(self): int
```
Returns the nanosecond offset within the second specified by the time, in the range \[0, 999999999\]\.

### Date
```jule
fn Date(self): (year: int, month: Month, day: int)
```
Returns the year, month, and day of the time\.

### Clock
```jule
fn Clock(self): (hour: int, minute: int, second: int)
```
Returns the hour, minute, and second of the time\.

### ISO
```jule
fn ISO(self): (year: int, week: int)
```
Returns the ISO 8601 year and week number of the time\. Week ranges from 1 to 53\. Jan 01 to Jan 03 of year n might belong to week 52 or 53 of year n\-1, and Dec 29 to Dec 31 might belong to week 1 of year n\+1\.

### Add
```jule
fn Add(self, d: Duration): Time
```
Returns the time self\+d\.

### Sub
```jule
fn Sub(self, u: Time): Duration
```
Returns the duration t\(self\)\-u\. If the result exceeds the maximum \(or minimum\) value that can be stored in a \[Duration\], the maximum \(or minimum\) duration will be returned\. To compute t\-d for a duration d, use t\.Add\(\-d\)\.

### After
```jule
fn After(self, u: Time): bool
```
Reports whether the time instant is after u\.

### Before
```jule
fn Before(self, u: Time): bool
```
Reports whether the time instant is before u\.

### Compare
```jule
fn Compare(self, u: Time): int
```
Compares the time instant t\(self\) with u\. If t is before u, it returns \-1; if t is after u, it returns \+1; if they&#39;re the same, it returns 0\.

### Equal
```jule
fn Equal(self, u: Time): bool
```
Reports whether self and u represent the same time instant\. Two times can be equal even if they are in different locations\. For example, 6:00 \+0200 and 4:00 UTC are Equal\. See the documentation on the Time type for the pitfalls of using == with Time values; most code should use Equal instead\.

### AppendText
```jule
fn AppendText(self, mut b: []byte)!: []byte
```
Implements the custom text encoder method which is appends to b\. The time is formatted in RFC 3339 format with sub\-second precision\. If the timestamp cannot be represented as valid RFC 3339 \(e\.g\., the year is out of range\), then throws exception with the ParseError\.InvalidRange\.

### EncodeText
```jule
fn EncodeText(self)!: []byte
```
Implements the custom text encoder method\. matches that of calling the \[Time\.AppendText\] method\.

See \[Time\.AppendText\] for more information\.

### DecodeText
```jule
fn DecodeText(mut self, data: []byte)!
```
Implements the custom text decoder method\. The time must be in the RFC 3339 format\.

### AppendFormat
```jule
fn AppendFormat(self, mut b: []byte, layout: str): []byte
```
Like \[Time\.Format\] but appends the textual representation to b and returns the extended buffer\.

### Format
```jule
fn Format(self, layout: str): str
```
Returns a textual representation of the time value formatted according to the layout defined by the argument\. See the documentation for the constant called \[Layout\] to see how to represent the layout format\.

The executable example for \[Time\.Format\] demonstrates the working of the layout string in detail and is a good reference\.

### Str
```jule
fn Str(self): str
```
Returns the time formatted using the format string

```
"2006-01-02 15:04:05.999999999 -0700 MST"
```


## AbsTime
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
Absolute time\.

## Duration
```jule
type Duration: runtime::sleepDuration
```
A Duration represents the elapsed time between two instants as an i64 nanosecond count\. The representation limits the largest representable duration to approximately 290 years\.

### Nanoseconds
```jule
fn Nanoseconds(self): Duration
```
Returns duration as nanoseconds\.

### Microseconds
```jule
fn Microseconds(self): Duration
```
Returns duration as microseconds\.

### Milliseconds
```jule
fn Milliseconds(self): Duration
```
Returns duration as milliseconds\.

### Seconds
```jule
fn Seconds(self): f64
```
Returns duration as floating\-point seconds\.

### Minutes
```jule
fn Minutes(self): f64
```
Returns duration as floating\-point minutes\.

### Hours
```jule
fn Hours(self): f64
```
Returns duration as floating\-point hours\.

### Abs
```jule
fn Abs(self): Duration
```
Returns absolute value of duration\.

### Str
```jule
fn Str(self): str
```
Returns a string representing the duration in the form &#34;72h3m0\.5s&#34;\. Leading zero units are omitted\. As a special case, durations less than one second format use a smaller unit \(milli\-, micro\-, or nanoseconds\) to ensure that the leading digit is non\-zero\. The zero duration formats as 0s\.

## Location
```jule
struct Location {
	// NOTE: contains filtered hidden or unexported fields
}
```
Maps time instants to the zone in use at that time\. Typically, the Location represents the collection of time offsets in use in a geographical area\. For many Locations the time offset varies depending on whether daylight savings time is in use at the time instant\.

Location is used to provide a time zone in a printed Time value and for calculations involving intervals that may cross daylight savings time boundaries\.

### Str
```jule
fn Str(self): str
```
Returns a descriptive name for the time zone information\.

## ParseError
```jule
struct ParseError {
	Layout:     str
	Value:      str
	LayoutElem: str
	ValueElem:  str
	Message:    str
}
```
Describes a problem parsing a time string\.

### Str
```jule
fn Str(self): str
```