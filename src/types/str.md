# The `str` Type

## Constructor
`fn str(obj: any): str`
Returns string value of given object.

## Fields
`len: int`
Character count of string.
It is can constant if string is literal. 

## Methods
`fn has_prefix(self, sub: str): bool`\
Reports string has prefix as specified substring or not.

---

`fn has_suffix(self, sub: str): bool`\
Reports string has suffix as specified substring or not.

---

`fn find(self, sub: str): int`\
Returns index of first matched item with specified substring, returns -1 if not exist any match.\
Starts searching at left of string to right.

---

`fn rfind(self, sub: str): int`\
Returns index of first matched item with specified substring, returns -1 if not exist any match.\
Starts searching at right of string to left.

---

`fn trim(self, bytes: str): str`\
Trims string by specified bytes at left. Each character is each byte.

---

`fn rtrim(self, bytes: str): str`\
Trims string by specified bytes at right. Each character is each byte.

---

`fn split(self, sub: str, n: int): []str`\
Splits the string into the specified number of parts to the specified substring.\
Returns empty slice if n is equals to zero.\
Returns all parts if n less than zero.

---

`fn replace(self, sub: str, new: str, n: int): str`\
Replaces all substrings matching sub in the string with new.\
Returns same string if n is equals to zero.\
Replaces all matches if n less than zero. 