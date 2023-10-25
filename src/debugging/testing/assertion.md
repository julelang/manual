# Assertion

Assertion is a type of testing approach in which an expression that must be evaluated as true is checked at runtime. When an assertion evaluates to false, it is considered unsuccessful and causes the program to panic.

An assertion can be included in the source code. They are checked and alert you while your program is executing for debugging. Assertion calls are not present in your program when production compilation is enabled and do not incur runtime costs.

Assertion statements placed in relevant parts of the code can help you control the steps of your code more robustly. An assertion can be used for many purposes, such as ensuring the minimum length of a slice or ensuring that memory is not nil.

An assertion is made with the built-in `assert` function.

For example:
```jule
fn get_slice(): []int {
    ret [1,2,3,4,5]
}

fn main() {
    let s = get_slice()
    assert(s.len == 10)

    let mut sum = 0
    for _, x in s {
        sum += x
    }
    outln(sum/10)
}
```

The so-called practical program above is just about calculating the average of a slice of 10 elements. The assert statement therefore wants to ensure that the length of the slice is 10. The condition must be `true`. If the assertion fails, your program panics and tells you which assertion failed and shows its location. This will give you an idea of ​​which assertion is failing and where it needs to be addressed.
