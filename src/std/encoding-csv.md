# std/encoding/csv

## Structures

```jule
struct ParseError {
    StartLine:  int    // Line where the record starts
    Line:       int    // Line where the error occurred
    Column:     int    // Column (1-based byte index) where the error occurred
    Err:        Error  // The actual error
}
```
A ParseError is returned for parsing errors.
Line and column numbers are 1-indexed.

---

```jule
struct Reader {
    // The field delimiter.
    // It is set to comma (',') by NewReader.
    // Comma must be a valid rune and must not be \r, \n,
    // or the Unicode replacement character (0xFFFD).
    Comma: rune

    // Comment, if not 0, is the comment character. Lines beginning with the
    // Comment character without preceding whitespace are ignored.
    // With leading whitespace the Comment character becomes part of the
    // field, even if Trim_leading_space is true.
    // Comment must be a valid rune and must not be \r, \n,
    // or the Unicode replacement character (0xFFFD).
    // It must also not be equal to comma.
    Comment: rune

    // The number of expected fields per record.
    // If FieldsPerRecord is positive, read requires each record to
    // have the given number of fields. If FieldsPerRecord is 0, read sets it to
    // the number of fields in the first record, so that future records must
    // have the same field count. If FieldsPerRecord is negative, no check is
    // made and records may have a variable number of fields.
    FieldsPerRecord: int

    // If it is true, a quote may appear in an unquoted field and a
    // non-doubled quote may appear in a quoted field.
    LazyQuotes: bool

    // If it is true, leading white space in a field is ignored.
    // This is done even if the field delimiter, comma, is white space.
    TrimLeadingSpace: bool

    // Controls whether calls to read may return a slice sharing
    // the backing array of the previous call's returned slice for performance.
    // By default, each call to read returns newly allocated memory owned by the caller.
    ReuseRecord: bool
}
```
A Reader reads records from a CSV-encoded file.

As returned by [New], a Reader expects input conforming to RFC 4180. The exported fields can be changed to customize the details before the first call to [Reader.Read] or [Reader.ReadAll].

The Reader converts all \r\n sequences in its input to plain \n, including in multiline field values, so that the returned data does not depend on which line-ending convention an input file uses.

**Methods:**

`static fn New(mut r: io::Reader): &Reader`\
Returns new Reader instance that reads r.

`fn InputOffset(self): int`\
Returns the input stream byte offset of the current reader position. The offset gives the location of the end of the most recently read row and the beginning of the next row.

`fn Read(mut self)!: (record: []str)`\
Reads one record (a slice of fields) from r. If the record has an unexpected number of fields, read returns the [Error.FieldCount] as exception. If there is no data left to be read, read returns nil. If [self.ReuseRecord] is true, the returned slice may be shared between multiple calls to read. Exception can be Error or ParseError, and forwards reader's exceptions.

`fn FieldPos(self, field: int): (line: int, column: int)`\
Returns the line and column corresponding to the start of the field with the given index in the slice most recently returned by [Read]. Numbering of lines and columns starts at 1; columns are counted in bytes, not runes.

If this is called with an out-of-bounds index, it panics.

`fn ReadAll(mut self)!: (records: [][]str)`\
Reads all the remaining records from r. Each record is a slice of fields. Exception can be Error or ParseError, and forwards reader errors.

---

```jule
struct Writer {
    Comma:    rune // Field delimiter (set to ',' by new)
    UseCrlf:  bool // True to use \r\n as the line terminator
}
```
A Writer writes records using CSV encoding.

As returned by new, a Writer writes records terminated by a newline and uses ',' as the field delimiter. The exported fields can be changed to customize the details before the first call to write or write_all.

Comma is the field delimiter.

If use_crlf is true, the Writer ends each output line with \r\n instead of \n.

The writes of individual records are buffered. After all data has been written, the client should call the Flush method to guarantee all data has been forwarded to the underlying io::Writer.

**Methods:**

`static fn New(mut w: io::Writer): &Writer`\
Returns new Writer instance that writes w.

`fn Write(mut self, record: []str)!`\
Writes a single CSV record along with any necessary quoting. A record is a slice of strings with each string being one field.
Forwards any exceptional from internal objects such as writer.

`fn WriteAll(mut self, records: [][]str)!`\
Writes multiple CSV records using [Writer.write] and forwording any exception.

## Enums

```jule
enum Error
```
CSV error codes.

**Fields:**

- `Read`
- `FieldCount`
- `InvalidDelim`
- `BareQuote`
- `Quote`